"use client";
import React from "react";

export default function SuccessIndiaPresence() {
  return (
    <div
      className="country-presence-section w-100 my-5 overflow-hidden position-relative p-0"
      style={{
        backgroundColor: "#ffffff",
        paddingTop: "30px",
        paddingBottom: "50px",
      }}
    >
      {/* Full-width seamless grey background strip matching SVG coordinates (y=53 to 353 of 405.6) */}
      <div
        className="w-100 position-relative d-flex align-items-center justify-content-center"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 13.06%, #555B62 13.06%, #555B62 87.03%, transparent 87.03%, transparent 100%)",
        }}
      >
        <div
          className="w-100 d-flex justify-content-center"
          style={{ maxWidth: "1440px" }}
        >
          <img
            src="https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/images/india.svg"
            alt="Our learning community is truly national, with members from 20+ states across India"
            className="w-100 img-fluid"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>
      </div>
    </div>
  );
}
