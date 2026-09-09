"use client";
import React from "react";

export default function TermsHero() {
  return (
    <div
      className="page-banner bg-color-04"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "41px 0 53px",
        backgroundColor: "#f8f8f8",
      }}
    >
      <div className="page-banner__wrapper">
        <div className="page-banner__shape-01" />
        <div className="page-banner__shape-02" />
        <div className="page-banner__shape-03" />

        <div
          className="container custom-container"
          style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}
        >


          {/* Page Banner Caption Start */}
          <div
            className="page-banner__caption-02"
            style={{ padding: "8px 0 16px", textAlign: "left" }}
          >
            <h2
              className="page-banner__main-title-02"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "38px",
                fontWeight: 700,
                color: "#07a64b",
                lineHeight: 1.2,
                margin: 0,
                textAlign: "left",
              }}
            >
              Terms &amp; Conditions
            </h2>
          </div>
          {/* Page Banner Caption End */}
        </div>
      </div>
    </div>
  );
}
