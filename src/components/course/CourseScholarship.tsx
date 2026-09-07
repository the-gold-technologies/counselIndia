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
    <section style={{ padding: "60px 0", backgroundColor: "#ffffff", fontFamily: "'Poppins', sans-serif" }}>
      <div className="container custom-container" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 16px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* Left / Top Image */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={scholarship.image}
              alt="Scholarship & Benefits"
              style={{
                maxWidth: "100%",
                maxHeight: "380px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Right / Content */}
          <div>
            <h2
              style={{
                margin: "0 0 8px",
                fontSize: "28px",
                fontWeight: 800,
                color: "#1e293b",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              {scholarship.title}
            </h2>
            <p
              style={{
                margin: "0 0 24px",
                fontSize: "15px",
                fontWeight: 500,
                color: "#07a64b",
                fontStyle: "italic",
              }}
            >
              {scholarship.subtitle}
            </p>

            <ul style={{ margin: "0 0 28px", paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
              {scholarship.points.map((pt, idx) => (
                <li key={idx} style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: "#07a64b", fontWeight: "bold" }}>✓</span>
                  <div>
                    <strong style={{ color: "#1e293b" }}>{pt.label} </strong>
                    <span>{pt.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={`tel:${phone}`}
              style={{
                backgroundColor: "#07a64b",
                color: "#ffffff",
                padding: "12px 28px",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 14px rgba(7, 166, 75, 0.35)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#068f40")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#07a64b")}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
              Avail Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
