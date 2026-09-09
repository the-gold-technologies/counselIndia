"use client";
import React from "react";
import AcademicHero from "./AcademicHero";
import AcademicContent from "./AcademicContent";

export default function AcademicView() {
  return (
    <div className="main-wrapper" style={{ backgroundColor: "#ffffff" }}>
      <AcademicHero />
      <AcademicContent />
    </div>
  );
}
