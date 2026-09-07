"use client";
import React from "react";

interface Props {
  benefits: string[];
}

export default function CourseBenefits({ benefits }: Props) {
  return (
    <div className="tutor-course-main-content" style={{ padding: "20px 0 35px", backgroundColor: "#ffffff" }}>
      <div className="container custom-container" style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}>
        <div className="tutor-course-segment">
          <h3
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#212529",
              lineHeight: "1.3",
              margin: "0 0 24px",
            }}
          >
            Course Overview
          </h3>

          <div
            style={{
              border: "1px solid #eef0f2",
              borderRadius: "8px",
              padding: "32px 36px 12px",
              backgroundColor: "#ffffff",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.02)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px 30px",
              }}
            >
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      minWidth: "22px",
                      backgroundColor: "#07a64b",
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "1px",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#333333",
                      lineHeight: "1.55",
                      fontWeight: 500,
                    }}
                  >
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
