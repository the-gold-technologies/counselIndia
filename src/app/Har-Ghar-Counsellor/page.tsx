import React from "react";
import { Metadata } from "next";
import HarGharCounsellorView from "@/components/har-ghar-counsellor/HarGharCounsellorView";
import { pageMetadata } from "@/services/pageSeoService";

const fallbackMetadata: Metadata = {
  title: "Har Ghar Counsellor | Counsel India",
  description:
    "With every enrollment, contribute ₹100 from your course fee to support mental health drives, awareness workshops, and free counselling centers across India.",
};

// SEO from Admin → Page SEO; the values above are used when nothing is saved there.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/Har-Ghar-Counsellor", fallbackMetadata);
}

export default function HarGharCounsellorPage() {
  return <HarGharCounsellorView />;
}
