"use client";
import React from "react";
import Link from "next/link";

export default function HarGharHero() {
  return (
    <div
      className="hero-section position-relative overflow-hidden w-100"
      style={{
        height: "calc(100vh - 80px)",
        minHeight: "600px",
        backgroundColor: "#000000",
      }}
    >
      {/* Full Screen Background Hero Image */}
      <img
        className="hero-img w-100 h-100 position-absolute top-0 start-0"
        src="https://prod-s3.counselindia.com/mastergalaxyimages/Har-ghar-Councellor-5_1725104115.png"
        alt="Har Ghar Counsellor"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Dark Gradient Overlay matching PHP */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.94) 0%, rgba(0, 0, 0, 0.65) 48%, rgba(0, 0, 0, 0.2) 100%)",
          zIndex: 1,
        }}
      ></div>

      {/* Hero Content positioned over the banner */}
      <div
        className="hero-content position-absolute text-white"
        style={{
          top: "50%",
          left: "6%",
          transform: "translateY(-50%)",
          zIndex: 2,
          maxWidth: "760px",
          textAlign: "left",
        }}
      >
        {/* Title */}
        <h1
          className="hero-title"
          style={{
            fontSize: "clamp(46px, 5.8vw, 82px)",
            fontWeight: 800,
            fontFamily: "Georgia, 'Playfair Display', 'Times New Roman', serif",
            color: "#ffffff",
            margin: "0 0 1.4rem 0",
            lineHeight: 1.05,
            whiteSpace: "nowrap",
          }}
        >
          Har Ghar Counsellor
        </h1>

        {/* Paragraph Description with exact colors and line breaks */}
        <div
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#ffffff",
            marginBottom: "1.8rem",
            maxWidth: "560px",
          }}
        >
          <p className="mb-1 text-white fw-medium">
            With every enrollment, you contribute
          </p>
          <p
            className="mb-1"
            style={{ color: "#00d024", fontWeight: 700 }}
          >
            ₹100 from your course fee to support mental health causes around the
            country through mental health drives, awareness workshops and FREE
            counselling centers.
          </p>
          <p className="mb-0 text-white fw-medium">
            We dream of a world where every lesson learned, and every milestone
            achieved helps uplift someone in need.{" "}
            <span style={{ color: "#00d024", fontWeight: 700 }}>
              Let’s turn learning into a fuel for change!
            </span>
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <Link
            href="/courses"
            className="text-white text-decoration-none"
            style={{
              padding: "12px 28px",
              fontSize: "15px",
              fontWeight: 600,
              backgroundColor: "#00a651",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              display: "inline-block",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#008738";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#00a651";
            }}
          >
            Join The Movement
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .hero-content {
            left: 5% !important;
            max-width: 90% !important;
          }
          .hero-title {
            font-size: 3.4rem !important;
          }
        }
        @media (max-width: 768px) {
          .hero-section {
            height: auto !important;
            min-height: 520px !important;
          }
          .hero-content {
            left: 5% !important;
            width: 90% !important;
          }
          .hero-title {
            font-size: 2.4rem !important;
            white-space: normal !important;
          }
        }
      `}</style>
    </div>
  );
}
