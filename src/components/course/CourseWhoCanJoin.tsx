"use client";
import React from "react";

interface Props {
  audience: string[];
}

export default function CourseWhoCanJoin({ audience }: Props) {
  if (!audience || audience.length === 0) return null;

  return (
    <section
      style={{
        padding: "40px 0 10px",
        backgroundColor: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="container custom-container"
        style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}
      >
        <h3
          style={{
            margin: "0 0 24px",
            fontSize: "24px",
            fontWeight: 700,
            color: "#1c2d3a",
            lineHeight: "1.3",
          }}
        >
          Who all can join?
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "16px",
          }}
        >
          {audience.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#f3f4f8",
                borderLeft: "4px solid #1c2d3a",
                borderRadius: "4px",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#eef0f6";
                e.currentTarget.style.transform = "translateX(2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f3f4f8";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <span
                style={{
                  fontSize: "14.5px",
                  fontWeight: 600,
                  color: "#1c2d3a",
                  lineHeight: "1.4",
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
