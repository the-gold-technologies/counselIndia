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
    <section style={{ padding: "50px 0", backgroundColor: "#ffffff", fontFamily: "'Poppins', sans-serif" }}>
      <div className="container custom-container" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 16px" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "28px",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: "24px",
              fontWeight: 700,
              color: "#1e293b",
            }}
          >
            Course Curriculum
          </h3>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span
              style={{
                backgroundColor: "#e7f6ed",
                color: "#07a64b",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "13.5px",
                fontWeight: 600,
              }}
            >
              {curriculum.totalSessions}
            </span>
            <span
              style={{
                backgroundColor: "#f1f5f9",
                color: "#475569",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "13.5px",
                fontWeight: 600,
              }}
            >
              {curriculum.totalHours}
            </span>
          </div>
        </div>

        {/* Stats Row */}
        {curriculum.stats && curriculum.stats.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "16px",
              marginBottom: "36px",
            }}
          >
            {curriculum.stats.map((st, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#f8fafc",
                  borderRadius: "8px",
                  padding: "16px",
                  textAlign: "center",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: 800,
                    color: "#07a64b",
                    marginBottom: "4px",
                  }}
                >
                  {st.count}
                </div>
                <div style={{ fontSize: "13px", color: "#64748b", fontWeight: 500 }}>
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
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                  borderColor: isOpen ? "#07a64b" : "#e2e8f0",
                }}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  style={{
                    width: "100%",
                    padding: "16px 20px",
                    backgroundColor: isOpen ? "#f0fdf4" : "#ffffff",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: isOpen ? "#07a64b" : "#1e293b",
                    }}
                  >
                    Module {idx + 1}: {mod.title}
                  </span>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: isOpen ? "#07a64b" : "#94a3b8",
                      transform: isOpen ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s",
                    }}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "16px 20px 20px 40px",
                      backgroundColor: "#ffffff",
                      borderTop: "1px solid #e2e8f0",
                    }}
                  >
                    <ul style={{ margin: 0, paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      {mod.topics.map((topic, tIdx) => (
                        <li
                          key={tIdx}
                          style={{
                            fontSize: "14px",
                            color: "#475569",
                            lineHeight: "1.6",
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
    </section>
  );
}
