import React, { Suspense } from "react";
import { Metadata } from "next";
import MentalTestSuccessView from "@/components/mentalhealthtest/MentalTestSuccessView";

export const metadata: Metadata = {
  title: "General Health Test Result | Counsel India",
  description:
    "View your personalized general health assessment outcome, score, strengths, and recommendations.",
};

export default function MentalTest3SuccessPage() {
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
      <MentalTestSuccessView defaultTestNumber={3} />
    </Suspense>
  );
}
