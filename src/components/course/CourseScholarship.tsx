"use client";
import React from "react";

interface ScholarshipData {
  title: string;
  subtitle: string;
  image: string;
  points: { label: string; desc: string }[];
}

interface Props {
  scholarship: ScholarshipData;
  phone: string;
}

export default function CourseScholarship({ scholarship, phone }: Props) {
  return (
    <section
      style={{
        padding: "20px 0 50px",
        backgroundColor: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="container custom-container"
        style={{
          maxWidth: "1170px",
          margin: "0 auto",
          padding: "0 16px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.08fr 0.92fr",
            gap: "30px",
            alignItems: "center",
          }}
          className="scholarship-grid"
        >
          {/* Left / Content */}
          <div style={{ position: "relative" }}>
            {/* Title with decorative doodle and scribble */}
            <div style={{ position: "relative", marginBottom: "16px" }}>
              <h2
                style={{
                  margin: 0,
                  fontSize: "38px",
                  fontWeight: 700,
                  color: "#1c2d3a",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  lineHeight: "1.25",
                  display: "inline-block",
                }}
              >
                Get Upto 30%{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  Scholarship
                  {/* Two-stroke green hand-drawn underline matching live site */}
                  <svg
                    width="190"
                    height="16"
                    viewBox="0 0 190 16"
                    fill="none"
                    style={{
                      position: "absolute",
                      bottom: "-8px",
                      left: "0",
                      width: "100%",
                      pointerEvents: "none",
                    }}
                  >
                    <path
                      d="M2 9C55 3 135 3 188 8"
                      stroke="#07a64b"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14 13C60 8 130 8 176 12"
                      stroke="#07a64b"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              {/* Green 3-leaf doodle positioned to the top-right of the title */}
              <div
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-75px",
                  pointerEvents: "none",
                }}
                className="scholarship-doodle-wrapper"
              >
                <img
                  src="/assets/images/scholarship/scholarship-doodle.png"
                  alt="Doodle"
                  style={{
                    width: "98px",
                    height: "auto",
                    display: "block",
                    transform: "rotate(6deg)",
                  }}
                />
              </div>
            </div>

            <p
              style={{
                margin: "18px 0 24px",
                fontSize: "15.5px",
                fontWeight: 600,
                color: "#07a64b",
                lineHeight: "1.5",
              }}
            >
              {scholarship.subtitle}
            </p>

            <ul
              style={{
                margin: "0 0 36px",
                paddingLeft: "20px",
                listStyleType: "disc",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {scholarship.points.map((pt, idx) => (
                <li
                  key={idx}
                  style={{
                    fontSize: "14.5px",
                    color: "#555555",
                    lineHeight: "1.65",
                  }}
                >
                  <strong style={{ color: "#1c2d3a", fontWeight: 700 }}>
                    {pt.label} –{" "}
                  </strong>
                  <span>{pt.desc}</span>
                </li>
              ))}
            </ul>

            {/* Avail Now action button with swooping curved arrow */}
            <div
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              {/* Large swooping green arrow pointing towards button */}
              <div
                style={{
                  position: "absolute",
                  left: "-95px",
                  bottom: "-6px",
                  pointerEvents: "none",
                }}
                className="scholarship-arrow-wrapper"
              >
                <img
                  src="/assets/images/scholarship/scholarship-arrow.png"
                  alt="Arrow"
                  style={{
                    width: "82px",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>

              <a
                href={`tel:${phone}`}
                style={{
                  backgroundColor: "#07a64b",
                  color: "#ffffff",
                  padding: "14px 34px",
                  borderRadius: "6px",
                  fontSize: "15.5px",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 4px 14px rgba(7, 166, 75, 0.25)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#068f40")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#07a64b")
                }
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
                Avail Now
              </a>
            </div>
          </div>

          {/* Right / Visual Image */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/assets/images/scholarship/scholarship-student.png"
              alt="Get Upto 30% Scholarship"
              style={{
                width: "100%",
                maxWidth: "520px",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          .scholarship-grid {
            grid-template-columns: 1fr !important;
          }
          .scholarship-doodle-wrapper {
            display: none !important;
          }
          .scholarship-arrow-wrapper {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
