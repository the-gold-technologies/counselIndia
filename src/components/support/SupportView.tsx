"use client";
import React from "react";
import SupportHero from "./SupportHero";
import SupportContent from "./SupportContent";

export default function SupportView() {
  return (
    <div className="main-wrapper" style={{ backgroundColor: "#ffffff" }}>
      <SupportHero />
      <SupportContent />
    </div>
  );
}
