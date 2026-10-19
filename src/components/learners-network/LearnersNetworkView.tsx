"use client";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { LearnerItem } from "@/types/alumni";
import LearnerCard from "./LearnerCard";
import SkillsModal from "./SkillsModal";
import { getActiveAlumni } from "@/services/alumniService";

const BATCH_SIZE = 18;

export default function LearnersNetworkView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [selectedLearner, setSelectedLearner] = useState<LearnerItem | null>(null);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [learners, setLearners] = useState<LearnerItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Dynamic fetch from Admin API service
  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const data = await getActiveAlumni();
        if (isMounted) {
          setLearners(data);
        }
      } catch (err) {
        console.error("Failed to load alumni from Admin API:", err);
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

  // Handle Search Submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveSearch(searchTerm.trim());
    setVisibleCount(BATCH_SIZE);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setActiveSearch("");
    setVisibleCount(BATCH_SIZE);
  };

  // Filtered List
  const filteredLearners = useMemo(() => {
    if (!activeSearch) return learners;
    const lower = activeSearch.toLowerCase();
    return learners.filter(
      (item) =>
        item.name.toLowerCase().includes(lower) ||
        item.rci_number.toLowerCase().includes(lower) ||
        item.programname.toLowerCase().includes(lower) ||
        (item.profession && item.profession.toLowerCase().includes(lower))
    );
  }, [activeSearch, learners]);

  // Infinite Scroll Slice
  const displayedLearners = useMemo(() => {
    return filteredLearners.slice(0, visibleCount);
  }, [filteredLearners, visibleCount]);

  // Infinite Scroll Observer
  useEffect(() => {
    const target = sentinelRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredLearners.length) {
          setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, filteredLearners.length));
        }
      },
      { threshold: 0.1, rootMargin: "300px" }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [visibleCount, filteredLearners.length]);

  const handleOpenSkills = (learner: LearnerItem) => {
    setSelectedLearner(learner);
    setIsSkillsModalOpen(true);
  };

  return (
    <div className="courses-section pb-5" style={{ paddingTop: "10px" }}>
      <div className="container custom-container">
        {/* Right-Aligned Search Bar directly on the gradient background */}
        <div className="d-flex justify-content-end align-items-center mb-4">
          <form onSubmit={handleSearchSubmit} className="d-flex align-items-center">
            <input
              type="text"
              name="search"
              className="form-control form-control-sm bg-white"
              placeholder="Search by name or ID."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                if (e.target.value === "") {
                  setActiveSearch("");
                  setVisibleCount(BATCH_SIZE);
                }
              }}
              style={{
                width: "210px",
                height: "40px",
                fontSize: "0.85rem",
                borderRadius: "6px",
                border: "1px solid #d1d5db",
                padding: "6px 12px",
                outline: "none",
              }}
            />
            <button
              type="submit"
              className="btn ms-2 text-white"
              style={{
                backgroundColor: "#07a64b",
                color: "#ffffff",
                height: "40px",
                padding: "0 24px",
                fontSize: "15px",
                fontWeight: 700,
                borderRadius: "8px",
                border: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
              }}
            >
              Search
            </button>
          </form>
        </div>

        {/* Results Counter if searching */}
        {activeSearch && (
          <div className="mb-4">
            <p className="mb-0 text-dark font-size-15">
              Found <span className="text-success fw-bold">{filteredLearners.length}</span> results
              for &ldquo;<strong>{activeSearch}</strong>&rdquo;
              <button
                type="button"
                onClick={handleClearSearch}
                className="btn btn-link btn-sm text-danger text-decoration-none ms-2 p-0"
              >
                (Clear)
              </button>
            </p>
          </div>
        )}

        {/* Alumni Cards Grid */}
        {isLoading ? (
          <div className="text-center py-5 my-5">
            <div
              className="spinner-border"
              role="status"
              style={{ width: "3rem", height: "3rem", color: "#07a64b" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-muted fw-semibold">Loading Verified Counselors Directory...</p>
          </div>
        ) : displayedLearners.length > 0 ? (
          <>
            <div className="row g-4">
              {displayedLearners.map((learner) => (
                <LearnerCard key={learner.id} learner={learner} onOpenSkills={handleOpenSkills} />
              ))}
            </div>

            {/* Sentinel for Infinite Scroll */}
            <div ref={sentinelRef} className="w-100 py-3 text-center">
              {visibleCount < filteredLearners.length && (
                <div className="d-flex justify-content-center align-items-center gap-2 py-4">
                  <div
                    className="spinner-border"
                    role="status"
                    style={{
                      width: "1.75rem",
                      height: "1.75rem",
                      color: "#07a64b",
                    }}
                  >
                    <span className="visually-hidden">Loading more...</span>
                  </div>
                  <span className="text-muted font-size-14 font-medium">
                    Loading more counselors...
                  </span>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-5 my-5 bg-white rounded-3 shadow-sm border p-5">
            <i className="fas fa-user-slash text-muted mb-3" style={{ fontSize: "48px" }}></i>
            <h4 className="fw-bold text-dark mb-2">No Alumni Found!</h4>
            <p className="text-muted font-size-15 mb-3">
              We couldn&apos;t find any alumni matching &ldquo;{activeSearch}
              &rdquo;. Try searching with another name or ID.
            </p>
            <button
              type="button"
              onClick={handleClearSearch}
              className="btn btn-outline-success btn-sm px-4"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>

      {/* Skills Modal */}
      <SkillsModal
        learner={selectedLearner}
        isOpen={isSkillsModalOpen}
        onClose={() => setIsSkillsModalOpen(false)}
      />
    </div>
  );
}
