"use client";
import React from "react";
import AskQuestionHero from "./AskQuestionHero";
import AskQuestionFormSection from "./AskQuestionFormSection";

export default function AskQuestionView() {
  return (
    <div className="main-wrapper" style={{ backgroundColor: "#ffffff" }}>
      <AskQuestionHero />
      <AskQuestionFormSection />
    </div>
  );
}
