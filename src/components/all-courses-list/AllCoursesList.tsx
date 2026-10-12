"use client";
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { CourseItem } from "@/types/course";
import { getActiveCourses } from "@/services/courseService";
import CourseBrochureModal from "@/components/course/CourseBrochureModal";

export default function AllCoursesList() {
  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [enquiryCourseName, setEnquiryCourseName] = useState<string | null>(null);

  // Directly fetch from Admin API, exactly like learner network and alumni
  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const data = await getActiveCourses();
        if (isMounted && data && data.length > 0) {
          setCourses(data);
        }
      } catch (err) {
        console.error("Failed to load active courses from Admin API:", err);
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

  // Filtered courses
  const filteredCourses = useMemo(() => {
    return courses.filter((c) => {
      const catMatch =
        selectedCategory === "all" ||
        (c.category && c.category.toLowerCase().includes(selectedCategory.toLowerCase())) ||
        (c.badgeText && c.badgeText.toLowerCase().includes(selectedCategory.toLowerCase()));

      const searchMatch =
        !searchQuery.trim() ||
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.subdescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.category && c.category.toLowerCase().includes(searchQuery.toLowerCase()));

      return catMatch && searchMatch;
    });
  }, [courses, selectedCategory, searchQuery]);

  return (
    <div
      className="courses-section"
      style={{ backgroundColor: "#ffffff", padding: "35px 15px 60px" }}
    >
      <div
        className="container custom-container"
        style={{ maxWidth: "1140px", margin: "0 auto" }}
      >
        {/* Category Filters & Search Toolbar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "28px",
          }}
        >
          {/* Category Tabs */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "All Courses", value: "all" },
              { label: "Master's Programs", value: "master" },
              { label: "Diploma Programs", value: "diploma" },
              { label: "Entrepreneurship", value: "entrepreneur" },
              { label: "Internships", value: "internship" },
            ].map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setSelectedCategory(tab.value)}
                style={{
                  padding: "7px 18px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: 600,
                  fontFamily: "'Poppins', sans-serif",
                  border: selectedCategory === tab.value ? "1.5px solid #00a651" : "1px solid #e2e8f0",
                  backgroundColor: selectedCategory === tab.value ? "#00a651" : "#f8fafc",
                  color: selectedCategory === tab.value ? "#ffffff" : "#475569",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: "relative", minWidth: "240px", flex: "1", maxWidth: "320px" }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses..."
              style={{
                width: "100%",
                height: "38px",
                padding: "0 14px 0 36px",
                borderRadius: "20px",
                border: "1px solid #e2e8f0",
                fontSize: "13px",
                backgroundColor: "#f8fafc",
                outline: "none",
                fontFamily: "'Poppins', sans-serif",
                color: "#1e293b",
              }}
            />
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ position: "absolute", left: "12px", top: "12px" }}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                  border: "none",
                  background: "transparent",
                  color: "#94a3b8",
                  cursor: "pointer",
                  fontSize: "12px",
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Count Line */}
        <div style={{ marginBottom: "26px" }}>
          <p
            style={{
              margin: 0,
              fontSize: "22px",
              fontWeight: 500,
              color: "#2e384d",
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "-0.2px",
            }}
          >
            We found{" "}
            <span style={{ fontWeight: 800, color: "#1a1a1a" }}>
              {filteredCourses.length}
            </span>{" "}
            courses available for you
          </p>
        </div>

        {/* Loading State */}
        {isLoading && courses.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#64748b" }}>
            <div
              style={{
                display: "inline-block",
                width: "36px",
                height: "36px",
                border: "3px solid #e2e8f0",
                borderTopColor: "#00a651",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            />
            <p style={{ marginTop: "14px", fontSize: "14px", fontWeight: 600 }}>
              Loading courses from live catalog...
            </p>
          </div>
        ) : filteredCourses.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              background: "#f8fafc",
              borderRadius: "12px",
              border: "1px dashed #cbd5e1",
            }}
          >
            <p style={{ fontSize: "16px", fontWeight: 600, color: "#475569", margin: "0 0 6px" }}>
              No courses found matching your filter
            </p>
            <p style={{ fontSize: "13px", color: "#94a3b8", margin: "0 0 16px" }}>
              Try searching with another keyword or select All Courses
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              style={{
                padding: "8px 20px",
                background: "#00a651",
                color: "#ffffff",
                border: "none",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Course Cards List */
          <div>
            {filteredCourses.map((d) => (
              <div key={d.id} className="course-card-box">
                {/* Category Badge Top Right */}
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "24px",
                    zIndex: 2,
                  }}
                >
                  <span
                    style={{
                      backgroundColor: d.badgeBg || "#07a64b",
                      color: "#ffffff",
                      padding: "3px 14px",
                      borderRadius: "4px",
                      fontSize: "13px",
                      fontWeight: 700,
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.18)",
                      fontFamily: "'Poppins', sans-serif",
                      display: "inline-block",
                    }}
                  >
                    {d.badgeText || "CI"}
                  </span>
                </div>

                <div className="course-card-flex">
                  {/* Thumbnail Photo */}
                  <div className="course-card-img-wrap">
                    <Link
                      href={`/courses/${d.slug}`}
                      style={{ display: "block", width: "100%", height: "100%" }}
                    >
                      <img
                        src={encodeURI(decodeURI(d.cover_image))}
                        alt={d.name}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            "https://www.counselindia.com/assets/images/courses/courses-01.jpg";
                        }}
                      />
                    </Link>
                  </div>

                  {/* Details */}
                  <div className="course-card-info-wrap">
                    {/* Title in Serif font */}
                    <h3
                      style={{
                        margin: "0 0 6px",
                        fontSize: "24px",
                        fontWeight: 700,
                        fontFamily:
                          "'Playfair Display', Georgia, 'Times New Roman', serif",
                        lineHeight: "1.25",
                        letterSpacing: "-0.3px",
                      }}
                    >
                      <Link
                        href={`/courses/${d.slug}`}
                        style={{
                          color: "#1b2537",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#00a651")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#1b2537")
                        }
                      >
                        {d.name}
                      </Link>
                    </h3>

                    {/* 5 Stars */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                        margin: "0 0 10px",
                      }}
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="#fab23c"
                          style={{ display: "block" }}
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>

                    {/* Duration & Seats in Green */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "22px",
                        margin: "0 0 14px",
                        color: "#00a651",
                        fontSize: "15px",
                        fontWeight: 500,
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "7px",
                        }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          style={{ flexShrink: 0 }}
                        >
                          <circle cx="12" cy="12" r="10" fill="#00a651" />
                          <path
                            d="M12 7v5l3.5 2"
                            stroke="#ffffff"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {d.list_duration}
                      </span>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "7px",
                        }}
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#00a651"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ flexShrink: 0 }}
                        >
                          <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
                          <line x1="4" y1="4" x2="20" y2="20" />
                          <line x1="20" y1="4" x2="4" y2="20" />
                        </svg>
                        {d.enrolment}
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "13.5px",
                        color: "#555555",
                        lineHeight: "1.55",
                        margin: "0 0 18px",
                        fontFamily: "'Poppins', sans-serif",
                        maxWidth: "580px",
                      }}
                    >
                      {d.subdescription}
                    </p>

                    {/* Action Buttons */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        flexWrap: "wrap",
                      }}
                    >
                      <Link
                        href={`/courses/${d.slug}`}
                        style={{
                          backgroundColor: "#f1f3f5",
                          color: "#212529",
                          border: "1px solid #e9ecef",
                          borderRadius: "4px",
                          padding: "9px 24px",
                          fontSize: "13.5px",
                          fontWeight: 600,
                          textDecoration: "none",
                          fontFamily: "'Poppins', sans-serif",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#e2e8f0";
                          e.currentTarget.style.color = "#000000";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#f1f3f5";
                          e.currentTarget.style.color = "#212529";
                        }}
                      >
                        Know More
                      </Link>

                      <button
                        type="button"
                        onClick={() => setEnquiryCourseName(d.name)}
                        style={{
                          backgroundColor: "#07a64b",
                          color: "#ffffff",
                          border: "none",
                          borderRadius: "4px",
                          padding: "9px 22px",
                          fontSize: "13.5px",
                          fontWeight: 600,
                          textDecoration: "none",
                          fontFamily: "'Poppins', sans-serif",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          cursor: "pointer",
                          transition: "background-color 0.2s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = "#068a3e")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor = "#07a64b")
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
                        </svg>
                        Enquire Now
                      </button>
                    </div>
                  </div>

                  {/* Right side next batch label matching live site */}
                  <div
                    className="course-next-batch-side"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      textAlign: "right",
                    }}
                  >
                    <span style={{ fontSize: "13px", color: "#64748b", fontWeight: 500 }}>
                      Next Batch Starts On
                    </span>
                    <strong
                      style={{
                        display: "block",
                        fontSize: "14px",
                        color: "#1e293b",
                        fontWeight: 700,
                        marginTop: "3px",
                      }}
                    >
                      {d.nextBatchDate || "26 Sep 2026"}
                    </strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Enquiry / Brochure Modal on Enquire Now click */}
      {enquiryCourseName && (
        <CourseBrochureModal
          isOpen={true}
          onClose={() => setEnquiryCourseName(null)}
          courseName={enquiryCourseName}
        />
      )}

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .course-card-box {
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          border: 1px solid #f0f0f0;
          background: #ffffff;
          padding: 22px 24px;
          margin-bottom: 24px;
          position: relative;
        }

        .course-card-flex {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 24px;
          position: relative;
        }

        .course-card-img-wrap {
          width: 270px;
          height: 181px;
          flex-shrink: 0;
          border-radius: 6px;
          overflow: hidden;
        }

        .course-card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .course-card-info-wrap {
          flex-grow: 1;
          padding-right: 170px;
        }

        .course-next-batch-side {
          position: absolute;
          top: 50%;
          right: 24px;
          transform: translateY(-50%);
        }

        @media (max-width: 991px) {
          .course-card-info-wrap {
            padding-right: 0;
          }
          .course-next-batch-side {
            position: static;
            transform: none;
            margin-top: 14px;
            text-align: left;
          }
        }

        @media (max-width: 767px) {
          .course-card-flex {
            flex-direction: column;
            align-items: flex-start;
          }
          .course-card-img-wrap {
            width: 100%;
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
}
