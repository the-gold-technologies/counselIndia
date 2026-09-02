"use client";
import React from "react";

export default function SuccessHero() {
  return (
    <div
      className="hero-section position-relative d-flex align-items-center justify-content-center text-center overflow-hidden w-100"
      style={{
        backgroundImage:
          "url('https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/images/hero-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "400px",
        backgroundColor: "#dcfce7",
        padding: "80px 20px",
      }}
    >
      <div className="container custom-container position-relative z-1">
        {/* Main Title reduced by ~5px */}
        <h1
          className="mb-3"
          style={{
            fontSize: "clamp(30px, 3.8vw, 48px)",
            fontWeight: 700,
            fontFamily: "Georgia, 'Playfair Display', 'Times New Roman', serif",
            color: "#1e293b",
            lineHeight: "1.15",
          }}
        >
          Inspiring{" "}
          <span
            style={{
              color: "#00a651",
            }}
          >
            Success
          </span>{" "}
          Stories
        </h1>

        {/* Subtitle reduced by 4-5px */}
        <p
          className="mx-auto mb-0"
          style={{
            fontSize: "clamp(18px, 2.1vw, 24px)",
            color: "#1e293b",
            fontWeight: 600,
            fontFamily: "Georgia, 'Playfair Display', 'Times New Roman', serif",
            lineHeight: "1.5",
            maxWidth: "760px",
          }}
        >
          Explore the amazing stories of people who overcame{" "}
          <br className="d-none d-md-block" />
          all challenges, embraced change, and achieved{" "}
          <br className="d-none d-md-block" />
          great heights.
        </p>
      </div>
    </div>
  );
}
