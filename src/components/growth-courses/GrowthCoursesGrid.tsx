"use client";
import React, { useMemo, useState } from "react";
import { GROWTH_COURSES, GrowthCourse } from "./data/growthCoursesData";
import GrowthCourseCard from "./GrowthCourseCard";

interface Props {
  onSelectCourse?: (course: GrowthCourse) => void;
}

const ALL_AREA = "All";

export default function GrowthCoursesGrid({ onSelectCourse: _onSelectCourse }: Props) {
  const [search, setSearch] = useState("");
  const [selectedArea, setSelectedArea] = useState(ALL_AREA);

  // Group courses by psychology domain and count them
  const psychologyBreakdown = useMemo(() => {
    const map = new Map<string, number>();
    GROWTH_COURSES.forEach((c) => {
      map.set(c.area, (map.get(c.area) || 0) + 1);
    });
    return Array.from(map.entries()).map(([area, count]) => ({ area, count }));
  }, []);

  const filteredCourses: GrowthCourse[] = useMemo(() => {
    const q = search.trim().toLowerCase();
    return GROWTH_COURSES.filter((course) => {
      const matchesArea = selectedArea === ALL_AREA || course.area === selectedArea;
      const matchesSearch =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.area.toLowerCase().includes(q) ||
        (course.description || "").toLowerCase().includes(q) ||
        course.modules.some((m) => m.toLowerCase().includes(q));
      return matchesArea && matchesSearch;
    });
  }, [search, selectedArea]);

  return (
    <div id="growth-courses-grid" className="blog-section section-padding-01 py-5 bg-white">
      <div className="container custom-container py-3">
        {/* Search Bar & Psychology Area Counts Bar */}
        <div
          className="mb-5 p-4 rounded-3"
          style={{
            border: "1px solid #e2e8f0",
            backgroundColor: "#f8fafc",
          }}
        >
          <div className="row g-3 align-items-center">
            <div className="col-lg-5 col-md-12">
              <h3 className="mb-1" style={{ fontSize: "20px", fontWeight: 700, color: "#1e293b" }}>
                {GROWTH_COURSES.length} Growth Courses in {psychologyBreakdown.length} Psychology
                Domains
              </h3>
              <p className="mb-0 text-muted" style={{ fontSize: "13px" }}>
                Search by course name or filter by psychology domain.
              </p>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="position-relative">
                <i
                  className="fal fa-search position-absolute text-muted"
                  style={{
                    left: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "14px",
                  }}
                />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by course name, topic, or psychology..."
                  className="form-control"
                  style={{
                    paddingLeft: "42px",
                    height: "46px",
                    borderRadius: "10px",
                    fontSize: "14px",
                    border: "1px solid #cbd5e1",
                    backgroundColor: "#ffffff",
                  }}
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="position-absolute border-0 bg-transparent text-muted"
                    style={{
                      right: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                  >
                    &times;
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Psychology Area Filter Buttons + Table Toggle */}
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mt-4 pt-3 border-top border-gray-200">
            <div className="d-flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedArea(ALL_AREA)}
                style={{
                  border: `1px solid ${selectedArea === ALL_AREA ? "#09A64A" : "#cbd5e1"}`,
                  backgroundColor: selectedArea === ALL_AREA ? "#09A64A" : "#ffffff",
                  color: selectedArea === ALL_AREA ? "#ffffff" : "#334155",
                  borderRadius: "20px",
                  padding: "6px 14px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.15s ease",
                }}
              >
                <span>All Courses</span>
                <span
                  style={{
                    backgroundColor:
                      selectedArea === ALL_AREA ? "rgba(255,255,255,0.25)" : "#ecfdf3",
                    color: selectedArea === ALL_AREA ? "#ffffff" : "#09A64A",
                    borderRadius: "12px",
                    padding: "1px 8px",
                    fontSize: "11px",
                    fontWeight: 700,
                  }}
                >
                  {GROWTH_COURSES.length}
                </span>
              </button>

              {psychologyBreakdown.map(({ area, count }) => {
                const isSelected = selectedArea === area;
                return (
                  <button
                    key={area}
                    type="button"
                    onClick={() => setSelectedArea(isSelected ? ALL_AREA : area)}
                    style={{
                      border: `1px solid ${isSelected ? "#09A64A" : "#cbd5e1"}`,
                      backgroundColor: isSelected ? "#09A64A" : "#ffffff",
                      color: isSelected ? "#ffffff" : "#334155",
                      borderRadius: "20px",
                      padding: "6px 14px",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span>{area}</span>
                    <span
                      style={{
                        backgroundColor: isSelected ? "rgba(255,255,255,0.25)" : "#ecfdf3",
                        color: isSelected ? "#ffffff" : "#09A64A",
                        borderRadius: "12px",
                        padding: "1px 8px",
                        fontSize: "11px",
                        fontWeight: 700,
                      }}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <>
            {(search || selectedArea !== ALL_AREA) && (
              <p className="text-muted mb-4 font-size-13">
                Showing {filteredCourses.length} of {GROWTH_COURSES.length} courses
                {selectedArea !== ALL_AREA ? ` in ${selectedArea}` : ""}
                {search ? ` matching “${search.trim()}”` : ""}.
              </p>
            )}
            <div className="row gy-5">
              {filteredCourses.map((course) => (
                <div key={course.id} className="col-xl-4 col-md-6 col-12">
                  <GrowthCourseCard course={course} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-5 bg-light rounded-3 my-4">
            <h4 className="mb-2 font-size-18">No growth courses found</h4>
            <p className="text-muted mb-3 font-size-14">
              Try searching with another course name or clear the area filter.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              style={{
                backgroundColor: "#09A64A",
                borderColor: "#09A64A",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: 600,
              }}
              onClick={() => {
                setSearch("");
                setSelectedArea(ALL_AREA);
              }}
            >
              Show all courses
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
