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
    <section
      style={{
        padding: "45px 0 55px",
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
            margin: "0 0 28px",
            fontSize: "24px",
            fontWeight: 700,
            color: "#1c2d3a",
            lineHeight: "1.3",
          }}
        >
          Course Faculty
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "22px",
          }}
          className="faculty-grid"
        >
          {faculty.map((f, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: "36px 14px 40px",
                minHeight: "330px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 4px 18px rgba(0, 0, 0, 0.04)",
                border: "1px solid #f1f2f4",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 10px 24px rgba(0, 0, 0, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 18px rgba(0, 0, 0, 0.04)";
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginBottom: "22px",
                  backgroundColor: "#f4f6fb",
                  border: "1px solid #eaeaea",
                  flexShrink: 0,
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
                  margin: "0 0 6px",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#1c2d3a",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  lineHeight: "1.3",
                }}
              >
                {f.name}
              </h4>
              <p
                style={{
                  margin: 0,
                  fontSize: "12.5px",
                  color: "#6c757d",
                  fontWeight: 400,
                  lineHeight: "1.4",
                }}
              >
                {f.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          .faculty-grid {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)) !important;
          }
        }
      `}</style>
    </section>
  );
}
