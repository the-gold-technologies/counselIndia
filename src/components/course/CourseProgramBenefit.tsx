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

        <div className="tutor-course-segment__content-wrap">
          {programBenefit.map((item, idx) => {
            const isBold =
              item.startsWith("Upon completion") || item.startsWith("<strong>");
            const cleanText = item.replace(/^<strong>|<\/strong>$/g, "");

            return (
              <p
                key={idx}
                style={{
                  fontSize: "15px",
                  color: "#495057",
                  lineHeight: "1.8",
                  marginBottom: idx === programBenefit.length - 1 ? 0 : "16px",
                  fontWeight: isBold ? 700 : 400,
                  textAlign: "justify",
                }}
              >
                {cleanText}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
