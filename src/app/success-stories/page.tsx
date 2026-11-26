import React from "react";
import { Metadata } from "next";
import SuccessStoriesView from "@/components/success-stories/SuccessStoriesView";
import { pageMetadata } from "@/services/pageSeoService";

const fallbackMetadata: Metadata = {
  title: "Success Stories | Counsel India",
  description:
    "Explore the inspiring success stories of Counsel India learners, psychology practitioners, and counsellors who transformed their careers and lives.",
};

// SEO from Admin → Page SEO; the values above are used when nothing is saved there.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/success-stories", fallbackMetadata);
}

export default function SuccessStoriesPage() {
  return <SuccessStoriesView />;
}
