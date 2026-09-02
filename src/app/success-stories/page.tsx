import React from "react";
import { Metadata } from "next";
import SuccessStoriesView from "@/components/success-stories/SuccessStoriesView";

export const metadata: Metadata = {
  title: "Success Stories | Counsel India",
  description:
    "Explore the inspiring success stories of Counsel India learners, psychology practitioners, and counsellors who transformed their careers and lives.",
};

export default function SuccessStoriesPage() {
  return <SuccessStoriesView />;
}
