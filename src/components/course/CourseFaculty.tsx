"use client";
import React from "react";

interface FacultyItem {
  name: string;
  title: string;
  image: string;
}

interface Props {
  faculty: FacultyItem[];
}

export default function CourseFaculty({ faculty }: Props) {
  if (!faculty || faculty.length === 0) return null;

  return (
    <section style={{ padding: "60px 0", backgroundColor: "#f8fafc", fontFamily: "'Poppins', sans-serif" }}>
      <div className="container custom-container" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 16px" }}>
        <h3
          style={{
            margin: "0 0 32px",
            fontSize: "26px",
            fontWeight: 700,
            color: "#1e293b",
            textAlign: "center",
          }}
        >
          Course Faculty & Mentors
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          {faculty.map((f, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "24px 16px",
                textAlign: "center",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.borderColor = "#cbd5e1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.03)";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}
            >
              <div
                style={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  margin: "0 auto 16px",
                  border: "3px solid #e7f6ed",
                }}
              >
                <img
                  src={f.image}
                  alt={f.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <h4
                style={{
                  margin: "0 0 4px",
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#1e293b",
                }}
              >
                {f.name}
              </h4>
              <p
                style={{
                  margin: 0,
                  fontSize: "13.5px",
                  color: "#07a64b",
                  fontWeight: 500,
                }}
              >
                {f.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
