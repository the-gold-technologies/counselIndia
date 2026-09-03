"use client";
import React from "react";

export default function NewsBanner() {
  return (
    <div
      className="news-banner-section"
      style={{
        backgroundColor: "#ffffff",
        paddingTop: "30px",
        paddingBottom: "20px",
      }}
    >
      <div className="container custom-container">
        <div className="page-banner__caption-02 text-center">
          <h1
            className="page-banner__main-title-02 m-0"
            style={{
              fontSize: "clamp(38px, 4.8vw, 56px)",
              fontFamily:
                "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontWeight: 500,
              color: "#07a64b",
              lineHeight: "1.2",
              letterSpacing: "0.2px",
            }}
          >
            News & Media
          </h1>
        </div>
      </div>
    </div>
  );
}
