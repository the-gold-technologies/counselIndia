"use client";
import React from "react";
import TermsHero from "./TermsHero";
import TermsContent from "./TermsContent";

export default function TermsView() {
  return (
    <div className="main-wrapper" style={{ backgroundColor: "#ffffff" }}>
      <TermsHero />
      <TermsContent />
    </div>
  );
}
