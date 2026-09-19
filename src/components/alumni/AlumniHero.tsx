"use client";
import React from "react";

export default function AlumniHero() {
  return (
    <div className="alumni-hero-section w-100 bg-white">
      {/* Desktop Image (Matches live site height 400px without cropping) */}
      <img
        src="https://prod-s3.counselindia.com/mastergalaxyimages/Bhamathi%20Balasubramaniam_1732694114.png"
        alt="Counsel India Star Alumni Network"
        className="responsive-image w-100 d-none d-md-block"
        style={{
          width: "100%",
          height: "400px",
          display: "block",
        }}
      />

      {/* Mobile Image */}
      <img
        src="https://prod-s3.counselindia.com/mastergalaxyimages/Screenshot%202024-11-26%20at%204.17.34%E2%80%AFPM_1732618102.png"
        alt="Counsel India Star Alumni Network"
        className="responsive-image w-100 d-block d-md-none"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </div>
  );
}
