import React, { Suspense } from "react";
import { Metadata } from "next";
import MentalTestSuccessView from "@/components/mentalhealthtest/MentalTestSuccessView";
import { pageMetadata } from "@/services/pageSeoService";

const fallbackMetadata: Metadata = {
  title: "Emotional Well-Being Test Result | Counsel India",
  description:
    "View your personalized emotional well-being assessment outcome, score, strengths, and recommendations.",
};

// SEO from Admin → Page SEO; the values above are used when nothing is saved there.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/mentaltest1/success", fallbackMetadata);
}

export default function MentalTest1SuccessPage() {
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
      <MentalTestSuccessView defaultTestNumber={1} />
    </Suspense>
  );
}
