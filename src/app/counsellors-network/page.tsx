"use client";
import React, { useState } from "react";
import NetworkAnimatedBackground from "@/components/counsellors-network/NetworkAnimatedBackground";
import NetworkBanner from "@/components/counsellors-network/NetworkBanner";
import CounsellorCard from "@/components/counsellors-network/CounsellorCard";
import BookSessionModal from "@/components/counsellors-network/BookSessionModal";
import { COUNSELLORS_DATA, CounselorItem } from "@/components/counsellors-network/data/counsellorsData";

export default function CounsellorsNetworkPage() {
  // Booking Modal State
  const [selectedCounselor, setSelectedCounselor] = useState<CounselorItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          {/* Page Banner with Shapes (matches PHP page-banner) */}
          <NetworkBanner />

          {/* Heading - uses the exact same class as PHP */}
          <h2 className="page-banner__main-title-02" style={{ textAlign: "center", marginTop: "5%" }}>
            Counsellors Network
          </h2>

          {/* Courses Section */}
          <div className="courses-section section-padding-01">
            <div className="container">
              {/* Archive Filter Bar */}
              <div className="archive-filter-bars" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px", marginBottom: "25px" }}>
                <div className="archive-filter-bar">
                  <p style={{ margin: 0 }}>
                    We found <span><strong>{COUNSELLORS_DATA.length}</strong></span> counsellors for you
                  </p>
                </div>
                <div>
                  <a
                    href="/mentor-registration"
                    className="btn btn-hover-primary"
                    style={{
                      backgroundColor: "#07a64b",
                      borderColor: "#07a64b",
                      color: "#ffffff",
                      borderRadius: "5px",
                      padding: "8px 18px",
                      fontSize: "13.5px",
                      fontWeight: 600,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span>+</span> Be a Counsellor
                  </a>
                </div>
              </div>

              {/* Counsellor Cards Grid (3 Columns) */}
              <div className="row">
                {COUNSELLORS_DATA.map((counselor) => (
                  <CounsellorCard
                    key={counselor.id}
                    counselor={counselor}
                    onBookSession={handleOpenBooking}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Booking Modal (Outside main-wrapper) */}
      <BookSessionModal
        counselor={selectedCounselor}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
