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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(100px, 1fr))",
                maxWidth: "700px",
                gap: "16px",
                marginBottom: "30px",
                marginTop: "10px",
              }}
            >
              {curriculum.stats.map((st, idx) => (
                <div key={idx} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#212529",
                      lineHeight: "1.2",
                      marginBottom: "4px",
                    }}
                  >
                    {st.count}
                  </div>
                  <div
                    style={{
                      fontSize: "13.5px",
                      fontWeight: 600,
                      color: "#555555",
                    }}
                  >
                    {st.text}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Modules Accordion */}
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
                    {/* Small Square Outline Icon */}
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

                  {isOpen && (
                    <div
                      style={{
                        padding: "12px 28px 20px 48px",
                        backgroundColor: "#f8f8f8",
                        borderTop: "1px solid #f0f0f0",
                      }}
                    >
                      <ul
                        style={{
                          margin: 0,
                          paddingLeft: "16px",
                          listStyleType: "disc",
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        {mod.topics.map((topic, tIdx) => (
                          <li
                            key={tIdx}
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
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
