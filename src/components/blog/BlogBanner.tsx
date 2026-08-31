"use client";
import React from "react";

interface BannerProps {
  title?: string;
  categoryName?: string;
}

export default function BlogBanner({ title = "Blog", categoryName }: BannerProps) {
  return (
    <div
      className="page-banner bg-color-04"
      style={{
        backgroundColor: "#0f172a",
        padding: "50px 0 45px",
        textAlign: "center",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container custom-container position-relative" style={{ zIndex: 2 }}>
        <span
          style={{
            backgroundColor: "rgba(7, 166, 75, 0.2)",
            color: "#4ade80",
            padding: "5px 16px",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: 700,
            display: "inline-block",
            marginBottom: "12px",
            border: "1px solid rgba(74, 222, 128, 0.3)",
          }}
        >
          {categoryName ? `Category: ${categoryName}` : "Counsel India Insights & Articles"}
        </span>

        <h1
          style={{
            fontFamily: "Georgia, 'Playfair Display', serif",
            fontSize: "40px",
            fontWeight: 800,
            color: "#ffffff",
            margin: "0 0 10px",
            letterSpacing: "-0.5px",
          }}
        >
          {title}
        </h1>

        <p style={{ fontSize: "15.5px", color: "#cbd5e1", margin: 0, maxWidth: "600px", marginInline: "auto" }}>
          Explore insightful articles, latest research, and expert practical guidance in psychology and mental health.
        </p>
      </div>
    </div>
  );
}
