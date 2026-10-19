"use client";
import React from "react";
import PrivacyHero from "./PrivacyHero";
import PrivacyContent from "./PrivacyContent";

interface PrivacyViewProps {
  content?: string;
}

export default function PrivacyView({ content }: PrivacyViewProps) {
  return (
    <div className="main-wrapper" style={{ backgroundColor: "#ffffff" }}>
      <PrivacyHero />
      <PrivacyContent content={content} />
    </div>
  );
}
