"use client";
import React from "react";

export default function EligibilityBanner() {
  return (
    <div
      className="page-banner bg-color-04 position-relative overflow-hidden w-100"
      style={{
        backgroundColor: "#f5fbf7",
        position: "relative",
        zIndex: 1,
        borderBottom: "1px solid #eef5f0",
      }}
    >
      <div
        className="page-banner__wrapper position-relative"
        style={{
          paddingTop: "38px",
          paddingBottom: "38px",
        }}
      >
        {/* Geometric Outline Circle Shape 1 (Bottom Left) */}
        <div
          className="page-banner__shape-01 position-absolute"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "1px solid rgba(7, 166, 75, 0.32)",
            left: "-70px",
            bottom: "-110px",
            zIndex: 0,
            pointerEvents: "none",
          }}
        ></div>

        {/* Geometric Outline Circle Shape 2 (Top Right) */}
        <div
          className="page-banner__shape-02 position-absolute"
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            border: "1px solid rgba(7, 166, 75, 0.32)",
            right: "17%",
            top: "-45px",
            zIndex: 0,
            pointerEvents: "none",
          }}
        ></div>

        {/* Geometric Outline Circle Shape 3 (Bottom Right) */}
        <div
          className="page-banner__shape-03 position-absolute"
          style={{
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            border: "1px solid rgba(7, 166, 75, 0.32)",
            right: "-40px",
            bottom: "-140px",
            zIndex: 0,
            pointerEvents: "none",
          }}
        ></div>

        <div className="container custom-container position-relative z-1">
          {/* Main Title in Green Georgia Serif */}
          <div className="page-banner__caption-02">
            <h1
              className="page-banner__main-title-02 m-0"
              style={{
                fontSize: "clamp(30px, 3.8vw, 38px)",
                fontWeight: 700,
                fontFamily:
                  "Georgia, 'Playfair Display', 'Times New Roman', serif",
                color: "#07a64b",
                lineHeight: "1.2",
              }}
            >
              Eligibility Test
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
