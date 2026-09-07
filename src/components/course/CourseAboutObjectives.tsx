"use client";
import React from "react";

interface Props {
  about: string[];
  learningObjectives: string[];
}

export default function CourseAboutObjectives({ about, learningObjectives }: Props) {
  return (
    <div className="tutor-course-main-content" style={{ padding: "30px 0 20px", backgroundColor: "#ffffff" }}>
      <div className="container custom-container" style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}>
        {/* About this Course */}
        <div className="tutor-course-segment" style={{ marginBottom: "36px" }}>
          <h4
            className="tutor-course-segment__title"
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#212529",
              lineHeight: "1.3",
              margin: "0 0 16px",
            }}
          >
            About this Course
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {about.map((p, idx) => (
              <p
                key={idx}
                style={{
                  margin: 0,
                  fontSize: "15px",
                  color: "#555555",
                  lineHeight: "1.7",
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="tutor-course-segment">
          <h4
            className="tutor-course-segment__title"
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#212529",
              lineHeight: "1.3",
              margin: "0 0 16px",
            }}
          >
            Learning Objectives
          </h4>
          <ul
            style={{
              margin: 0,
              paddingLeft: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {learningObjectives.map((obj, idx) => (
              <li
                key={idx}
                style={{
                  fontSize: "15px",
                  color: "#555555",
                  lineHeight: "1.6",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <span
                  style={{
                    color: "#07a64b",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "1.5",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#07a64b"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
