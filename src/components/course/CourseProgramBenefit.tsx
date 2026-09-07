"use client";
import React from "react";

interface Props {
  programBenefit?: string[];
}

export default function CourseProgramBenefit({ programBenefit }: Props) {
  if (!programBenefit || programBenefit.length === 0) return null;

  return (
    <section
      className="tutor-course-segment"
      style={{
        padding: "36px 0 20px",
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
            fontSize: "24px",
            fontWeight: 700,
            color: "#1c2d3a",
            lineHeight: "1.3",
            margin: "0 0 20px",
          }}
        >
          How will this program benefit you?
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {programBenefit.map((paragraph, idx) => (
            <p
              key={idx}
              style={{
                margin: 0,
                fontSize: "15px",
                color: "#555555",
                lineHeight: "1.75",
                fontWeight: 400,
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
