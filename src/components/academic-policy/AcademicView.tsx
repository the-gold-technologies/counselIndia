"use client";
import React from "react";
import AcademicHero from "./AcademicHero";
import AcademicContent from "./AcademicContent";

interface AcademicViewProps {
  content?: string;
}

export default function AcademicView({ content }: AcademicViewProps) {
  return (
    <div className="main-wrapper" style={{ backgroundColor: "#ffffff" }}>
      <AcademicHero />
      <AcademicContent content={content} />
    </div>
  );
}
