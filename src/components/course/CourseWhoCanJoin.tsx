"use client";
import React from "react";

interface Props {
  audience: string[];
}

export default function CourseWhoCanJoin({ audience }: Props) {
  if (!audience || audience.length === 0) return null;

  return (
    <section style={{ padding: "40px 0", backgroundColor: "#f8fafc", fontFamily: "'Poppins', sans-serif" }}>
      <div className="container custom-container" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 16px" }}>
        <h3
          style={{
            margin: "0 0 24px",
            fontSize: "24px",
            fontWeight: 700,
            color: "#1e293b",
          }}
        >
          Who all can join?
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "14px",
          }}
        >
          {audience.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.02)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#07a64b";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 14px rgba(7, 166, 75, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e2e8f0";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.02)";
              }}
            >
              <span style={{ color: "#07a64b", fontSize: "16px" }}>●</span>
              <span style={{ fontSize: "14.5px", fontWeight: 600, color: "#1e293b" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
