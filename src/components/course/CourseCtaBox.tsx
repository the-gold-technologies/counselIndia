"use client";
import React from "react";

interface Props {
  phone: string;
}

export default function CourseCtaBox({ phone }: Props) {
  return (
    <div className="call-to-action" style={{ padding: "35px 0 25px", backgroundColor: "#ffffff" }}>
      <div className="container custom-container" style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}>
        <div
          className="call-to-action__wrapper"
          style={{
            margin: "24px auto 0",
            position: "relative",
          }}
        >
          {/* Overlapping Lightning Icon */}
          <div
            className="call-to-action__icon"
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "#07a64b",
              borderRadius: "50%",
              position: "absolute",
              top: "-30px",
              left: "-25px",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              boxShadow: "0 4px 12px rgba(7, 166, 75, 0.35)",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>

          {/* Content Card */}
          <div
            className="call-to-action__content"
            style={{
              backgroundColor: "#e7f6ed",
              padding: "36px 40px 36px 48px",
              borderRadius: "6px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "28px",
              flexWrap: "wrap",
            }}
          >
            {/* Background Decorative Circles */}
            <div
              className="call-to-action__shape-01"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                border: "1px solid rgba(7, 166, 75, 0.2)",
                position: "absolute",
                bottom: "-60px",
                left: "-40px",
                pointerEvents: "none",
              }}
            />
            <div
              className="call-to-action__shape-02"
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                border: "1px solid rgba(7, 166, 75, 0.2)",
                position: "absolute",
                top: "-70px",
                right: "30px",
                pointerEvents: "none",
              }}
            />
            <div
              className="call-to-action__shape-03"
              style={{
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                border: "1px solid rgba(7, 166, 75, 0.15)",
                position: "absolute",
                right: "-50px",
                bottom: "-170px",
                pointerEvents: "none",
              }}
            />

            {/* Title text */}
            <div style={{ maxWidth: "780px", position: "relative", zIndex: 1 }}>
              <h3
                className="call-to-action__main-title"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#212529",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                If you&apos;re feeling uncertain about whether this course is the right fit for you or have any questions, feel free to reach out to our &quot;Career Expert&quot;. We&apos;re here to help you find the best path forward.
              </h3>
            </div>

            {/* Button */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <a
                href={`tel:${phone}`}
                className="btn-enquire"
                style={{
                  backgroundColor: "#07a64b",
                  color: "#ffffff",
                  height: "46px",
                  padding: "0 24px",
                  borderRadius: "4px",
                  fontSize: "14.5px",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  boxShadow: "0 4px 12px rgba(7, 166, 75, 0.3)",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#068f40")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#07a64b")}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
