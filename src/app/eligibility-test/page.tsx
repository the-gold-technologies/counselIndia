import React from "react";
import { Metadata } from "next";
import EligibilityView from "@/components/eligibility-test/EligibilityView";
import { pageMetadata } from "@/services/pageSeoService";

const fallbackMetadata: Metadata = {
  title: "Eligibility Test | Personality Assessment | Counsel India",
  description:
    "Take our free psychology eligibility and personality test to analyze your interest level, understand behavioral traits, and kickstart your mental health career.",
};

// SEO from Admin → Page SEO; the values above are used when nothing is saved there.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/eligibility-test", fallbackMetadata);
}

export default function EligibilityTestPage() {
  return <EligibilityView />;
}
