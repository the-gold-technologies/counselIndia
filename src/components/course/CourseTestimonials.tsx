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
          Success Stories
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="testimonials-grid"
        >
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#f8fafc",
                borderRadius: "10px",
                padding: "36px 30px 32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "260px",
                position: "relative",
              }}
            >
              {/* Quote text and top-right quotation mark */}
              <div style={{ position: "relative", marginBottom: "24px" }}>
                {/* Large subtle quote marks on top-right */}
                <div
                  style={{
                    position: "absolute",
                    top: "-15px",
                    right: "0",
                    fontSize: "44px",
                    lineHeight: 1,
                    fontFamily: "Georgia, serif",
                    color: "#e2e8f0",
                    fontWeight: 700,
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  ”
                </div>

                <p
                  style={{
                    margin: 0,
                    fontSize: "14.5px",
                    lineHeight: "1.7",
                    color: "#555555",
                    fontWeight: 400,
                    paddingRight: "24px",
                  }}
                >
                  {rev.quote}
                </p>
              </div>

              {/* Bottom user profile */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <img
                  src={rev.image}
                  alt={rev.name}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <h4
                    style={{
                      margin: "0 0 2px",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#1c2d3a",
                      lineHeight: "1.3",
                    }}
                  >
                    {rev.name}
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "13px",
                      color: "#6c757d",
                      fontWeight: 400,
                    }}
                  >
                    {rev.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
