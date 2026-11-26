import React, { Suspense } from "react";
import type { Metadata } from "next";
import ReferAndEarnView from "@/components/refer-and-earn/ReferAndEarnView";
import { pageMetadata } from "@/services/pageSeoService";

const fallbackMetadata: Metadata = {
  title: "Refer and Earn Rewards up to ₹80,000 | Counsel India",
  description:
    "Help a friend or colleague become a Counsel India learner and earn rewards up to Rs. 80,000 with flat cashbacks and bonus points.",
};

// SEO from Admin → Page SEO; the values above are used when nothing is saved there.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/refer-and-earn", fallbackMetadata);
}

export default function ReferAndEarnPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#6c757d",
          }}
        >
          Loading Refer and Earn...
        </div>
      }
    >
      <ReferAndEarnView />
    </Suspense>
  );
}
