"use client";
import React, { useState } from "react";

interface FilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedExpertise: string[];
  setSelectedExpertise: React.Dispatch<React.SetStateAction<string[]>>;
  selectedLanguage: string[];
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string[]>>;
  selectedExperience: number | null;
  setSelectedExperience: (exp: number | null) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  totalResults: number;
}

export default function NetworkFilters({
  searchQuery,
  setSearchQuery,
  selectedExpertise,
  setSelectedExpertise,
  selectedLanguage,
  setSelectedLanguage,
  selectedExperience,
  setSelectedExperience,
  sortBy,
  setSortBy,
  totalResults,
}: FilterProps) {
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  const expertiseOptions = [
    "Anxiety & Stress",
    "Career Guidance",
    "Relationship Counselling",
    "Trauma Therapy",
    "Depression & Mood",
    "Family Therapy",
    "CBT Therapy",
  ];

  const languageOptions = ["English", "Hindi", "Bengali", "Tamil", "Spanish", "Ukrainian"];

  const experienceOptions = [
    { label: "All Experience", value: null },
    { label: "3+ Years", value: 3 },
    { label: "5+ Years", value: 5 },
    { label: "8+ Years", value: 8 },
    { label: "10+ Years", value: 10 },
  ];

  const toggleExpertise = (exp: string) => {
    setSelectedExpertise((prev) =>
      prev.includes(exp) ? prev.filter((item) => item !== exp) : [...prev, exp]
    );
  };

  const toggleLanguage = (lang: string) => {
    setSelectedLanguage((prev) =>
      prev.includes(lang) ? prev.filter((item) => item !== lang) : [...prev, lang]
    );
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedExpertise([]);
    setSelectedLanguage([]);
    setSelectedExperience(null);
    setSortBy("default");
  };

  return (
    <div className="archive-filter-bars mb-5">
      {/* Top Search & Filter Trigger Bar */}
      <div className="archive-filter-bar bg-white p-3 rounded-3 shadow-sm border mb-3">
        <div className="row align-items-center g-3">
          {/* Search Input */}
          <div className="col-lg-5 col-md-6">
            <div className="position-relative">
              <input
                type="text"
                className="form-control ps-4 pe-5 py-2"
                placeholder="Search by name, expertise, location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ borderRadius: "50px", border: "1px solid #dee2e6", fontSize: "14px" }}
              />
              <i
                className="fas fa-search position-absolute text-muted"
                style={{ right: "16px", top: "50%", transform: "translateY(-50%)" }}
              ></i>
            </div>
          </div>

          {/* Results Count & Filter Toggle */}
          <div className="col-lg-7 col-md-6 d-flex align-items-center justify-content-md-end gap-3 flex-wrap">
            <span className="text-muted font-size-14">
              Showing <strong>{totalResults}</strong> Counsellors
            </span>

            {/* Filter Toggle Button */}
            <button
              className={`btn btn-sm ${showFilterDrawer ? "btn-success" : "btn-outline-success"} d-flex align-items-center gap-2`}
              style={{
                borderRadius: "50px",
                padding: "8px 20px",
                fontSize: "14px",
                borderColor: "#07a64b",
                backgroundColor: showFilterDrawer ? "#07a64b" : "transparent",
                color: showFilterDrawer ? "#ffffff" : "#07a64b",
              }}
              onClick={() => setShowFilterDrawer(!showFilterDrawer)}
            >
              <i className="fas fa-filter"></i>
              <span>{showFilterDrawer ? "Hide Filters" : "Filter"}</span>
            </button>

            {/* Sort Dropdown */}
            <select
              className="form-select form-select-sm w-auto"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{ borderRadius: "50px", padding: "8px 20px", fontSize: "14px" }}
            >
              <option value="default">Sort by: Default</option>
              <option value="exp_desc">Experience: High to Low</option>
              <option value="fees_asc">Fees: Low to High</option>
              <option value="fees_desc">Fees: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Collapsible Filter Panel */}
      {showFilterDrawer && (
        <div className="filter-collapse bg-white p-4 rounded-3 shadow-sm border mb-4">
          <div className="row g-4">
            {/* Expertise Column */}
            <div className="col-lg-4 col-md-6">
              <h6 className="fw-bold mb-3 text-dark border-bottom pb-2">
                <i className="fas fa-brain text-success me-2"></i> Expertise
              </h6>
              <div className="d-flex flex-column gap-2" style={{ maxHeight: "180px", overflowY: "auto" }}>
                {expertiseOptions.map((exp) => (
                  <label key={exp} className="form-check d-flex align-items-center gap-2 mb-1" style={{ cursor: "pointer", fontSize: "14px" }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedExpertise.includes(exp)}
                      onChange={() => toggleExpertise(exp)}
                    />
                    <span>{exp}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Language Column */}
            <div className="col-lg-4 col-md-6">
              <h6 className="fw-bold mb-3 text-dark border-bottom pb-2">
                <i className="fas fa-language text-success me-2"></i> Languages
              </h6>
              <div className="d-flex flex-column gap-2" style={{ maxHeight: "180px", overflowY: "auto" }}>
                {languageOptions.map((lang) => (
                  <label key={lang} className="form-check d-flex align-items-center gap-2 mb-1" style={{ cursor: "pointer", fontSize: "14px" }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedLanguage.includes(lang)}
                      onChange={() => toggleLanguage(lang)}
                    />
                    <span>{lang}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Experience Column */}
            <div className="col-lg-4 col-md-6">
              <h6 className="fw-bold mb-3 text-dark border-bottom pb-2">
                <i className="fas fa-user-graduate text-success me-2"></i> Experience
              </h6>
              <div className="d-flex flex-column gap-2">
                {experienceOptions.map((opt, idx) => (
                  <label key={idx} className="form-check d-flex align-items-center gap-2 mb-1" style={{ cursor: "pointer", fontSize: "14px" }}>
                    <input
                      type="radio"
                      name="experience-radio"
                      className="form-check-input"
                      checked={selectedExperience === opt.value}
                      onChange={() => setSelectedExperience(opt.value)}
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end mt-3 pt-3 border-top">
            <button className="btn btn-sm btn-link text-danger text-decoration-none" onClick={clearAllFilters}>
              <i className="fas fa-times-circle me-1"></i> Reset All Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
