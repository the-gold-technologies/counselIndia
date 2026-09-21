"use client";
import React, { useState } from "react";

interface CurriculumData {
  totalSessions: string;
  totalHours: string;
  stats: { count: string; text: string }[];
  modules: {
    title: string;
    topics: string[];
  }[];
}

interface Props {
  curriculum: CurriculumData;
}

export default function CourseCurriculum({ curriculum }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="tutor-course-main-content" style={{ padding: "40px 0 35px", backgroundColor: "#ffffff", fontFamily: "'Poppins', sans-serif" }}>
      <div className="container custom-container" style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}>
        <div className="tutor-course-segment">
          {/* Header Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "24px",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <h4
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#212529",
                lineHeight: "1.3",
                margin: 0,
              }}
            >
              Course Curriculum
            </h4>

            <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "#212529" }}>
                {curriculum.totalSessions}
              </span>
              <span style={{ fontSize: "14px", color: "#777777" }}>
                {curriculum.totalHours}
              </span>
            </div>
          </div>

          {/* Stats Row */}
          {curriculum.stats && curriculum.stats.length > 0 && (
            <>
              <div className="course-curriculum-stats">
                {curriculum.stats.map((st, idx) => (
                  <div key={idx} className="course-curriculum-stat-item">
                    <div className="course-curriculum-stat-count">
                      {st.count || <span style={{ visibility: "hidden" }}>-</span>}
                    </div>
                    <div className="course-curriculum-stat-text">
                      {st.text}
                    </div>
                  </div>
                ))}
              </div>

              <style>{`
                .course-curriculum-stats {
                  display: flex;
                  flex-wrap: wrap;
                  align-items: flex-start;
                  gap: 16px 44px;
                  margin-top: 10px;
                  margin-bottom: 30px;
                }
                .course-curriculum-stat-item {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  text-align: center;
                  min-width: 80px;
                }
                .course-curriculum-stat-count {
                  font-size: 20px;
                  font-weight: 700;
                  color: #212529;
                  line-height: 1.2;
                  margin-bottom: 4px;
                }
                .course-curriculum-stat-text {
                  font-size: 13.5px;
                  font-weight: 600;
                  color: #555555;
                  white-space: nowrap;
                }
                @media (max-width: 767px) {
                  .course-curriculum-stats {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 16px 12px;
                  }
                  .course-curriculum-stat-item {
                    min-width: unset;
                  }
                  .course-curriculum-stat-text {
                    white-space: normal;
                  }
                }
              `}</style>
            </>
          )}

          {/* Modules Accordion */}
          {curriculum.modules && curriculum.modules.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {curriculum.modules.map((mod, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      border: "1px solid #eeeeee",
                      borderRadius: "4px",
                      overflow: "hidden",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      style={{
                        width: "100%",
                        padding: "16px 24px",
                        backgroundColor: "#ffffff",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "left",
                        gap: "12px",
                        outline: "none",
                      }}
                    >
                      {/* Small Square Outline Icon — original design */}
                      <span
                        style={{
                          width: "12px",
                          height: "12px",
                          border: "1.5px solid #07a64b",
                          borderRadius: "1px",
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: "15px",
                          fontWeight: 500,
                          color: "#07a64b",
                        }}
                      >
                        {mod.title}
                      </span>
                    </button>

                    {/* Accordion Content */}
                    <div
                      style={{
                        maxHeight: isOpen ? "1000px" : "0",
                        overflow: "hidden",
                        transition: "all 0.3s ease-in-out",
                        backgroundColor: "#fafafa",
                      }}
                    >
                      <div
                        style={{
                          padding: isOpen ? "16px 24px 20px" : "0 24px",
                          borderTop: isOpen ? "1px solid #eeeeee" : "none",
                        }}
                      >
                        <ul
                          style={{
                            margin: 0,
                            paddingLeft: "20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                            listStyleType: "disc",
                          }}
                        >
                          {mod.topics.map((topic, tidx) => (
                            <li
                              key={tidx}
                              style={{
                                fontSize: "14px",
                                color: "#444444",
                                lineHeight: "1.8",
                              }}
                            >
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
