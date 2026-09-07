"use client";
import React from "react";

interface Props {
  benefits: string[];
}

export default function CourseBenefits({ benefits }: Props) {
  return (
    <section style={{ padding: "30px 0 20px", backgroundColor: "#ffffff", fontFamily: "'Poppins', sans-serif" }}>
      <div className="container custom-container" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 16px" }}>
        <h3
          style={{
            margin: "0 0 20px",
            fontSize: "22px",
            fontWeight: 700,
            color: "#1e293b",
          }}
        >
          Course Overview & Benefits
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "14px 24px",
          }}
        >
          {benefits.map((benefit, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <span
                style={{
                  color: "#07a64b",
                  backgroundColor: "#e7f6ed",
                  borderRadius: "50%",
                  width: "22px",
                  height: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "bold",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              >
                ✓
              </span>
              <span style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6" }}>
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
