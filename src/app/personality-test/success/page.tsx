import React, { Suspense } from "react";
import { Metadata } from "next";
import PersonalitySuccessView from "@/components/personality-test/PersonalitySuccessView";
import { pageMetadata } from "@/services/pageSeoService";

const fallbackMetadata: Metadata = {
  title: "Personality Assessment Result | Counsel India",
  description:
    "View your personalized psychology archetype assessment outcome, key strengths, and tailored development path.",
};

// SEO from Admin → Page SEO; the values above are used when nothing is saved there.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/personality-test/success", fallbackMetadata);
}

export default function PersonalityTestSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-white">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    >
      <PersonalitySuccessView />
    </Suspense>
  );
}
