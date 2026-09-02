import React from "react";
import { Metadata } from "next";
import EligibilityView from "@/components/eligibility-test/EligibilityView";

export const metadata: Metadata = {
  title: "Eligibility Test | Personality Assessment | Counsel India",
  description:
    "Take our free psychology eligibility and personality test to analyze your interest level, understand behavioral traits, and kickstart your mental health career.",
};

export default function EligibilityTestPage() {
  return <EligibilityView />;
}
