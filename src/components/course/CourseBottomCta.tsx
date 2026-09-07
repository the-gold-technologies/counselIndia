"use client";
import React from "react";

interface Props {
  onOpenBrochure: () => void;
}

export default function CourseBottomCta({ onOpenBrochure }: Props) {
  return (
    <section style={{ padding: "40px 0 70px", backgroundColor: "#ffffff", fontFamily: "'Poppins', sans-serif" }}>
      <div className="container custom-container" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 16px" }}>
        <div
          style={{
            position: "relative",
            backgroundColor: "#e7f6ed",
            borderRadius: "10px",
            padding: "36px 32px 32px 42px",
            border: "1px solid #c3ebd2",
          }}
        >
          {/* Overlapping Lightning Icon */}
          <div
            style={{
              position: "absolute",
              top: "-22px",
              left: "-22px",
              width: "56px",
              height: "56px",
              backgroundColor: "#07a64b",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              boxShadow: "0 4px 14px rgba(7, 166, 75, 0.4)",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ maxWidth: "700px" }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#1e293b",
                  lineHeight: "1.5",
                }}
              >
                Download Course Brochure & Curriculum Details
              </h3>
            </div>

            <button
              onClick={onOpenBrochure}
              style={{
                backgroundColor: "#07a64b",
                color: "#ffffff",
                padding: "12px 28px",
                borderRadius: "6px",
                fontSize: "14.5px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                flexShrink: 0,
                boxShadow: "0 4px 12px rgba(7, 166, 75, 0.3)",
                transition: "all 0.2s",
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
              Download Now
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
