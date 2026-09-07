"use client";
import React from "react";

interface ReferEarnData {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

interface Props {
  referEarn: ReferEarnData;
}

export default function CourseReferEarn({ referEarn }: Props) {
  return (
    <section style={{ padding: "40px 0", backgroundColor: "#ffffff", fontFamily: "'Poppins', sans-serif" }}>
      <div className="container custom-container" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 16px" }}>
        <div
          style={{
            backgroundColor: "#f8fafc",
            borderRadius: "12px",
            padding: "32px 36px",
            border: "1px solid #e2e8f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: "700px" }}>
            <h4
              style={{
                margin: "0 0 6px",
                fontSize: "19px",
                fontWeight: 700,
                color: "#1e293b",
                lineHeight: "1.4",
              }}
            >
              {referEarn.title}
            </h4>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#07a64b",
                fontWeight: 500,
              }}
            >
              {referEarn.subtitle}
            </p>
          </div>

          <a
            href={referEarn.buttonLink}
            style={{
              backgroundColor: "#07a64b",
              color: "#ffffff",
              padding: "12px 26px",
              borderRadius: "6px",
              fontSize: "14.5px",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              flexShrink: 0,
              boxShadow: "0 4px 12px rgba(7, 166, 75, 0.3)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#068f40")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#07a64b")}
          >
            {referEarn.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
