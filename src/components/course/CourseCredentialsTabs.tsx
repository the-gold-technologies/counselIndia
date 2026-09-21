"use client";
import React, { useState } from "react";

interface CredentialItem {
  id: string;
  label: string;
  text: string;
  points?: string[];
  image: string;
}

interface Props {
  credentials: CredentialItem[];
}

export default function CourseCredentialsTabs({ credentials }: Props) {
  const [activeTab, setActiveTab] = useState(credentials[0]?.id || "");

  if (!credentials || credentials.length === 0) return null;

  const current = credentials.find((c) => c.id === activeTab) || credentials[0];

  return (
    <div
      className="become-an-instructor tutor-course-segment bg-color-03 section-padding-01"
      style={{
        padding: "60px 0 70px",
        backgroundColor: "#f8f8f8",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container custom-container" style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}>
        {/* Tab Headers with Bottom Border Line */}
        <div
          className="become-an-instructor__tabs"
          style={{
            display: "flex",
            justifyContent: "center",
            borderBottom: "1px solid #e2e8f0",
            marginBottom: "40px",
            gap: "clamp(12px, 2.5vw, 28px)",
            flexWrap: "nowrap",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          {credentials.map((tab) => {
            const isActive = tab.id === current.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "6px 8px 14px",
                  fontSize: "18px",
                  fontWeight: isActive ? 700 : 600,
                  cursor: "pointer",
                  border: "none",
                  backgroundColor: "transparent",
                  color: isActive ? "#212529" : "#a0aec0",
                  borderBottom: isActive ? "3px solid #07a64b" : "3px solid transparent",
                  marginBottom: "-1px",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content 2-Column Row */}
        <div className="tab-content">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
              alignItems: "flex-start",
            }}
          >
            {/* Left Caption Description */}
            <div style={{ paddingRight: "15px", paddingTop: "10px" }}>
              {current.points && current.points.length > 0 ? (
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    listStyleType: "disc",
                  }}
                >
                  {current.points.map((pt, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.75",
                        color: "#555555",
                      }}
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    lineHeight: "1.75",
                    color: "#555555",
                  }}
                >
                  {current.text}
                </p>
              )}
            </div>

            {/* Right Certificate / Full Tall Letter Preview (natural aspect ratio) */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={current.image}
                alt={current.label}
                style={{
                  width: "100%",
                  maxWidth: "560px",
                  height: "auto",
                  borderRadius: "4px",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.06)",
                  backgroundColor: "#ffffff",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
