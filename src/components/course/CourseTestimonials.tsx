"use client";
import React from "react";

interface ReviewItem {
  quote: string;
  name: string;
  city: string;
  image: string;
}

interface Props {
  reviews: ReviewItem[];
}

export default function CourseTestimonials({ reviews }: Props) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section style={{ padding: "60px 0", backgroundColor: "#ffffff", fontFamily: "'Poppins', sans-serif" }}>
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
          Learner Success Stories
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#f8fafc",
                borderRadius: "12px",
                padding: "28px",
                border: "1px solid #e2e8f0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
              }}
            >
              <div style={{ marginBottom: "20px" }}>
                <div style={{ color: "#07a64b", fontSize: "28px", lineHeight: 1, marginBottom: "12px" }}>
                  “
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: "#475569",
                    fontStyle: "italic",
                  }}
                >
                  {rev.quote}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <img
                  src={rev.image}
                  alt={rev.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #07a64b",
                  }}
                />
                <div>
                  <h4 style={{ margin: "0 0 2px", fontSize: "15px", fontWeight: 700, color: "#1e293b" }}>
                    {rev.name}
                  </h4>
                  <p style={{ margin: 0, fontSize: "12.5px", color: "#64748b" }}>
                    {rev.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
