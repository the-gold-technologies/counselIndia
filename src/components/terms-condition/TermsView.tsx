"use client";
import React from "react";
import TermsHero from "./TermsHero";
import TermsContent from "./TermsContent";

interface TermsViewProps {
  content?: string;
}

export default function TermsView({ content }: TermsViewProps) {
  return (
    <div className="main-wrapper" style={{ backgroundColor: "#ffffff" }}>
      <TermsHero />
      <TermsContent content={content} />
    </div>
  );
}
