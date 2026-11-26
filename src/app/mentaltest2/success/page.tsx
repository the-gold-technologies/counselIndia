import React, { Suspense } from "react";
import { Metadata } from "next";
import MentalTestSuccessView from "@/components/mentalhealthtest/MentalTestSuccessView";
import { pageMetadata } from "@/services/pageSeoService";

const fallbackMetadata: Metadata = {
  title: "Quality of Life Test Result | Counsel India",
  description:
    "View your personalized quality of life assessment outcome, score, strengths, and recommendations.",
};

// SEO from Admin → Page SEO; the values above are used when nothing is saved there.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/mentaltest2/success", fallbackMetadata);
}

export default function MentalTest2SuccessPage() {
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
      <MentalTestSuccessView defaultTestNumber={2} />
    </Suspense>
  );
}
