"use client";
import React from "react";

interface Props {
  onOpenBrochure: () => void;
}

export default function CourseBottomCta({ onOpenBrochure }: Props) {
  return (
    <section
      style={{
        padding: "30px 0 70px",
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
            position: "relative",
            backgroundColor: "#e7f6ed",
            borderRadius: "10px",
            padding: "38px 42px",
            border: "1px solid #d4f0df",
            overflow: "hidden",
          }}
        >
          {/* Subtle concentric background rings watermark */}
          <div
            style={{
              position: "absolute",
              bottom: "-40px",
              left: "-40px",
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              border: "1px solid rgba(7, 166, 75, 0.15)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-20px",
              right: "-20px",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              border: "1px solid rgba(7, 166, 75, 0.12)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h3
                style={{
                  margin: 0,
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#1c2d3a",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  lineHeight: "1.3",
                }}
              >
                Download Course Brochure
              </h3>
            </div>

            <button
              onClick={onOpenBrochure}
              style={{
                backgroundColor: "#07a64b",
                color: "#ffffff",
                padding: "13px 28px",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 4px 14px rgba(7, 166, 75, 0.25)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#068f40";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#07a64b";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span>Download Now</span>
              {/* Square with inner cross icon matching screenshot */}
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="9" y1="9" x2="15" y2="15" />
                <line x1="15" y1="9" x2="9" y2="15" />
              </svg>
            </button>
          </div>
        </div>

        {/* Overlapping green lightning circle badge on top-left of container */}
        <div
          style={{
            position: "absolute",
            top: "-20px",
            left: "6px",
            width: "52px",
            height: "52px",
            backgroundColor: "#07a64b",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            boxShadow: "0 4px 14px rgba(7, 166, 75, 0.35)",
            zIndex: 10,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
