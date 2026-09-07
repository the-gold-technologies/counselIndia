"use client";
import React from "react";

interface Props {
  phone: string;
}

export default function CourseCtaBox({ phone }: Props) {
  return (
    <section style={{ padding: "30px 0", backgroundColor: "#ffffff", fontFamily: "'Poppins', sans-serif" }}>
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
            <div style={{ maxWidth: "720px" }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#1e293b",
                  lineHeight: "1.6",
                }}
              >
                If you&apos;re feeling uncertain about whether this course is the right fit for you or have any questions, feel free to reach out to our &quot;Career Expert&quot;. We&apos;re here to help you find the best path forward.
              </h3>
            </div>

            <a
              href={`tel:${phone}`}
              style={{
                backgroundColor: "#07a64b",
                color: "#ffffff",
                padding: "12px 26px",
                borderRadius: "6px",
                fontSize: "14.5px",
                fontWeight: 600,
                textDecoration: "none",
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
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
