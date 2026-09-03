"use client";
import React from "react";

interface EventLimitedSeatsCTAProps {
  speakerCount: number;
  price: number;
  paymentLink: string;
}

export default function EventLimitedSeatsCTA({
  speakerCount,
  price,
  paymentLink,
}: EventLimitedSeatsCTAProps) {
  return (
    <div className="banner-section pt-2 pb-5 bg-white">
      <div className="container custom-container">
        <div
          className="banner-big-box position-relative overflow-hidden"
          style={{
            backgroundColor: "#f4f6f5",
            borderRadius: "10px",
            padding: "26px 35px 26px 65px",
          }}
        >
          {/* Content */}
          <div className="banner-caption-03 position-relative z-1" style={{ maxWidth: "620px" }}>
            <h3
              className="banner-caption-03__title mb-2"
              style={{
                fontSize: "clamp(24px, 3vw, 30px)",
                fontFamily:
                  "'Playfair Display', Georgia, 'Times New Roman', serif",
                fontWeight: 700,
                color: "#1e2532",
                lineHeight: "1.3",
              }}
            >
              Hurry Limited Seats!
            </h3>

            <p
              className="mb-3"
              style={{
                fontSize: "15px",
                lineHeight: "1.6",
                color: "#475569",
                fontFamily: "Poppins, 'Plus Jakarta Sans', sans-serif",
              }}
            >
              All experts will take LIVE SESSIONS and sessions will be completely
              practical.
              <br />
              Learn from {speakerCount > 0 ? speakerCount : 2} Experts in just Rs{" "}
              {price}/-
            </p>

            {/* Button with Hand-Drawn Curved Green Arrow */}
            <div className="d-flex align-items-center gap-3 position-relative">
              {/* Curved Green Arrow pointing to Register Now */}
              <div
                className="d-none d-sm-block position-absolute"
                style={{
                  left: "-48px",
                  top: "-2px",
                }}
              >
                <svg
                  width="38"
                  height="30"
                  viewBox="0 0 50 45"
                  fill="none"
                  stroke="#07a64b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 5 C 10 30, 25 38, 42 34" />
                  <polyline points="32 40 44 34 36 24" />
                </svg>
              </div>

              <a
                href={paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn register-cta-btn d-inline-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#07a64b",
                  border: "none",
                  color: "#ffffff",
                  fontWeight: 500,
                  fontSize: "14px",
                  fontFamily: "Poppins, sans-serif",
                  padding: "8px 24px",
                  borderRadius: "6px",
                  transition: "all 0.25s ease",
                  boxShadow: "0 4px 12px rgba(7, 166, 75, 0.25)",
                }}
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .register-cta-btn:hover {
          background-color: #05853c !important;
          box-shadow: 0 6px 18px rgba(7, 166, 75, 0.4) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}
