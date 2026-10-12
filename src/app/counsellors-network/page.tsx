"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import NetworkAnimatedBackground from "@/components/counsellors-network/NetworkAnimatedBackground";
import NetworkBanner from "@/components/counsellors-network/NetworkBanner";
import CounsellorCard from "@/components/counsellors-network/CounsellorCard";
import BookSessionModal from "@/components/counsellors-network/BookSessionModal";
import { CounselorItem } from "@/types/counselor";
import { getVerifiedCounselors } from "@/services/counselorService";

const BATCH_SIZE = 12;

export default function CounsellorsNetworkPage() {
  const [counselors, setCounselors] = useState<CounselorItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  // Booking Modal State
  const [selectedCounselor, setSelectedCounselor] = useState<CounselorItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Infinite Scroll Sentinel
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Dynamic fetch directly from Admin API
  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const data = await getVerifiedCounselors();
        if (isMounted) {
          setCounselors(data);
        }
      } catch (err) {
        console.error("Failed to load counsellors from Admin API:", err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  // Infinite Scroll Observer
  useEffect(() => {
    const target = sentinelRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < counselors.length) {
          setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, counselors.length));
        }
      },
      {
        root: null,
        rootMargin: "300px",
        threshold: 0.1,
      },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [visibleCount, counselors.length]);

  // Displayed slice for infinite scroll
  const displayedCounselors = useMemo(() => {
    return counselors.slice(0, visibleCount);
  }, [counselors, visibleCount]);

  const handleOpenBooking = (counselor: CounselorItem) => {
    setSelectedCounselor(counselor);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="main-wrapper position-relative" style={{ backgroundColor: "transparent" }}>
        {/* Floating Animated Circles Background */}
        <NetworkAnimatedBackground />

        <main className="counsellors-network-main-page position-relative" style={{ zIndex: 1 }}>
          {/* Page Banner with Shapes */}
          <NetworkBanner />

          {/* Heading */}
          <h2 className="page-banner__main-title-02" style={{ textAlign: "center", marginTop: "5%", color: "#08A64B" }}>
            Counsellors Network
          </h2>

          {/* Courses Section */}
          <div className="courses-section section-padding-01">
            <div className="container">
              {/* Archive Filter Bar */}
              <div className="archive-filter-bars" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px", marginBottom: "25px" }}>
                <div className="archive-filter-bar">
                  <p style={{ margin: 0 }}>
                    We found <span><strong>{counselors.length}</strong></span> counsellors for you
                  </p>
                </div>
              </div>

              {/* Initial Loading Skeleton */}
              {isLoading && counselors.length === 0 && (
                <div style={{ textAlign: "center", padding: "80px 0" }}>
                  <div className="spinner-border text-success" role="status" style={{ width: "3rem", height: "3rem" }}>
                    <span className="visually-hidden">Loading verified counsellors...</span>
                  </div>
                  <p className="mt-3 text-muted">Loading counsellors directly from directory...</p>
                </div>
              )}

              {/* Counsellor Cards Grid (3 Columns) */}
              <div className="row">
                {displayedCounselors.map((counselor) => (
                  <CounsellorCard
                    key={counselor.id}
                    counselor={counselor}
                    onBookSession={handleOpenBooking}
                  />
                ))}
              </div>

              {/* Infinite Scroll Bottom Sentinel */}
              <div
                ref={sentinelRef}
                style={{
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                {visibleCount < counselors.length && !isLoading && (
                  <div className="spinner-border text-success" role="status" style={{ width: "2rem", height: "2rem" }}>
                    <span className="visually-hidden">Loading more...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Booking Modal */}
      <BookSessionModal
        counselor={selectedCounselor}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
