"use client";
import React from "react";
import EligibilityBanner from "./EligibilityBanner";
import EligibilityIntro from "./EligibilityIntro";
import EligibilityForm from "./EligibilityForm";

export default function EligibilityView() {
  return (
    <main className="eligibility-test-page bg-white min-vh-100">
      <EligibilityBanner />
      <EligibilityIntro />
      <EligibilityForm />
    </main>
  );
}
