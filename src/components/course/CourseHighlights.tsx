"use client";
import React from "react";

interface Props {
  highlights: {
    title: string;
    desc: string;
  }[];
}

export default function CourseHighlights({ highlights }: Props) {
  return (
    <section style={{ padding: "50px 0 20px", backgroundColor: "#ffffff", fontFamily: "'Poppins', sans-serif" }}>
      <div className="container custom-container" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 16px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {highlights.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "20px 22px",
                transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.06)";
                e.currentTarget.style.borderColor = "#cbd5e1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}
            >
              <h4
                style={{
                  margin: "0 0 8px",
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#1e293b",
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  margin: 0,
                  fontSize: "13.5px",
                  color: "#64748b",
                  lineHeight: "1.6",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
