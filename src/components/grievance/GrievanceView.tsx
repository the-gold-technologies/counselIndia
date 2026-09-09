"use client";
import React from "react";
import GrievanceHero from "./GrievanceHero";
import GrievanceFormSection from "./GrievanceFormSection";

export default function GrievanceView() {
  return (
    <div className="main-wrapper" style={{ backgroundColor: "#ffffff" }}>
      <GrievanceHero />
      <GrievanceFormSection />
    </div>
  );
}
