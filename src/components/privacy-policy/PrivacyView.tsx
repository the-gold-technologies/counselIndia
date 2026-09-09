"use client";
import React from "react";
import PrivacyHero from "./PrivacyHero";
import PrivacyContent from "./PrivacyContent";

export default function PrivacyView() {
  return (
    <div className="main-wrapper" style={{ backgroundColor: "#ffffff" }}>
      <PrivacyHero />
      <PrivacyContent />
    </div>
  );
}
