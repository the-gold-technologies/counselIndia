"use client";
import React from "react";

interface Props {
  about: string[];
  learningObjectives: string[];
}

export default function CourseAboutObjectives({ about, learningObjectives }: Props) {
  return (
    <section style={{ padding: "30px 0", backgroundColor: "#ffffff", fontFamily: "'Poppins', sans-serif" }}>
      <div className="container custom-container" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 16px" }}>
        {/* About this course */}
        <div style={{ marginBottom: "36px" }}>
          <h3
            style={{
              margin: "0 0 16px",
              fontSize: "22px",
              fontWeight: 700,
              color: "#1e293b",
            }}
          >
            About this Course
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {about.map((p, idx) => (
              <p
                key={idx}
                style={{
                  margin: 0,
                  fontSize: "14.5px",
                  color: "#475569",
                  lineHeight: "1.7",
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Learning Objectives */}
        <div>
          <h3
            style={{
              margin: "0 0 16px",
              fontSize: "22px",
              fontWeight: 700,
              color: "#1e293b",
            }}
          >
            Learning Objectives
          </h3>
          <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {learningObjectives.map((obj, idx) => (
              <li
                key={idx}
                style={{
                  fontSize: "14.5px",
                  color: "#334155",
                  lineHeight: "1.6",
                }}
              >
                {obj}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
