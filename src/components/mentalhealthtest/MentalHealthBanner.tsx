"use client";
import React from "react";

export default function MentalHealthBanner() {
  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden", backgroundColor: "#0b132b" }}>
      <img
        src="https://prod-s3.counselindia.com/mastergalaxyimages/mentaltestbanner_1729595813.png"
        alt="Mental Health Banner"
        style={{ width: "100%", height: "500px", objectFit: "cover", display: "block" }}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.style.display = "none";
        }}
      />
      <div className="container" style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }}>
        <div
          style={{
            position: "absolute",
            left: "8%",
            top: "22%",
            color: "#ffffff",
            textAlign: "left",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <div style={{ fontSize: "20px", fontWeight: "bold", letterSpacing: "1px", marginBottom: "8px" }}>
            TAKE OUR
          </div>
          <div
            style={{
              fontSize: "64px",
              margin: 0,
              lineHeight: 1,
              fontWeight: 900,
              textShadow: "1px 5px 4px rgba(0, 0, 0, 0.85)",
              letterSpacing: "1px",
            }}
          >
            MENTAL
          </div>
          <div
            style={{
              fontSize: "64px",
              margin: 0,
              lineHeight: 1,
              fontWeight: 900,
              textShadow: "1px 5px 4px rgba(0, 0, 0, 0.85)",
              letterSpacing: "1px",
            }}
          >
            HEALTH
          </div>
          <div
            style={{
              fontSize: "64px",
              margin: "0 0 14px 0",
              lineHeight: 1,
              fontWeight: 900,
              textShadow: "1px 5px 4px rgba(0, 0, 0, 0.85)",
              letterSpacing: "1px",
            }}
          >
            ASSESSMENT
          </div>
          <div style={{ fontSize: "20px", fontWeight: "bold", letterSpacing: "1px", color: "#e2f9eb" }}>
            DISCOVER DEEPER INSIGHTS
          </div>
        </div>
      </div>
    </div>
  );
}
