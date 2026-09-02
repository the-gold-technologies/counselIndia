import React from "react";
import { Metadata } from "next";
import HarGharCounsellorView from "@/components/har-ghar-counsellor/HarGharCounsellorView";

export const metadata: Metadata = {
  title: "Har Ghar Counsellor | Counsel India",
  description:
    "With every enrollment, contribute ₹100 from your course fee to support mental health drives, awareness workshops, and free counselling centers across India.",
};

export default function HarGharCounsellorPage() {
  return <HarGharCounsellorView />;
}
