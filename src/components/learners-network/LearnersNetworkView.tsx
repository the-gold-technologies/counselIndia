"use client";
import React, { useState, useMemo, useEffect } from "react";
import { LEARNERS_DATA, LearnerItem } from "./data/learnersData";
import LearnerCard from "./LearnerCard";
import SkillsModal from "./SkillsModal";

const ITEMS_PER_PAGE = 18;

export default function LearnersNetworkView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLearner, setSelectedLearner] = useState<LearnerItem | null>(
    null
  );
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);

  // Handle Search Submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveSearch(searchTerm.trim());
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setActiveSearch("");
    setCurrentPage(1);
  };

  // Filtered List
  const filteredLearners = useMemo(() => {
    if (!activeSearch) return LEARNERS_DATA;
    const lower = activeSearch.toLowerCase();
    return LEARNERS_DATA.filter(
      (item) =>
        item.name.toLowerCase().includes(lower) ||
        item.rci_number.toLowerCase().includes(lower) ||
        item.programname.toLowerCase().includes(lower) ||
        (item.profession && item.profession.toLowerCase().includes(lower))
    );
  }, [activeSearch]);

  // Pagination Slice
  const totalPages = Math.ceil(filteredLearners.length / ITEMS_PER_PAGE);
  const paginatedLearners = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredLearners.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredLearners, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  const handleOpenSkills = (learner: LearnerItem) => {
    setSelectedLearner(learner);
    setIsSkillsModalOpen(true);
  };

  return (
    <div className="courses-section pb-5" style={{ paddingTop: "10px" }}>
      <div className="container custom-container">
        {/* Right-Aligned Search Bar directly on the gradient background */}
        <div className="d-flex justify-content-end align-items-center mb-4">
          <form
            onSubmit={handleSearchSubmit}
            className="d-flex align-items-center"
          >
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
                  setCurrentPage(1);
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
              Found{" "}
              <span className="text-success fw-bold">
                {filteredLearners.length}
              </span>{" "}
              results for &ldquo;<strong>{activeSearch}</strong>&rdquo;
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
        {paginatedLearners.length > 0 ? (
          <>
            <div className="row g-4">
              {paginatedLearners.map((learner) => (
                <LearnerCard
                  key={learner.id}
                  learner={learner}
                  onOpenSkills={handleOpenSkills}
                />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center align-items-center gap-2 mt-5 pt-3">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="btn btn-sm btn-outline-secondary px-3"
                  style={{ borderRadius: "6px", height: "38px" }}
                >
                  &larr; Prev
                </button>

                <div className="d-flex gap-1">
                  {Array.from({ length: Math.min(totalPages, 7) }, (_, idx) => {
                    let pageNum = idx + 1;
                    if (totalPages > 7 && currentPage > 4) {
                      pageNum = currentPage - 4 + idx;
                      if (pageNum > totalPages) pageNum = totalPages - (6 - idx);
                    }
                    return (
                      <button
                        key={pageNum}
                        type="button"
                        onClick={() => handlePageChange(pageNum)}
                        className={`btn btn-sm ${
                          currentPage === pageNum
                            ? "btn-success text-white fw-bold"
                            : "btn-outline-secondary"
                        }`}
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "6px",
                          backgroundColor:
                            currentPage === pageNum ? "#07a64b" : "transparent",
                          borderColor:
                            currentPage === pageNum ? "#07a64b" : "#d1d5db",
                        }}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="btn btn-sm btn-outline-secondary px-3"
                  style={{ borderRadius: "6px", height: "38px" }}
                >
                  Next &rarr;
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-5 my-5 bg-white rounded-3 shadow-sm border p-5">
            <i
              className="fas fa-user-slash text-muted mb-3"
              style={{ fontSize: "48px" }}
            ></i>
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
