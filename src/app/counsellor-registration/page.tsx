import React from "react";
import type { Metadata } from "next";
import MentorRegistrationBanner from "@/components/mentor-registration/MentorRegistrationBanner";
import MentorRegistrationForm from "@/components/mentor-registration/MentorRegistrationForm";
import { pageMetadata } from "@/services/pageSeoService";

const fallbackMetadata: Metadata = {
  title: "Counsellor Registration | Counsel India",
  description:
    "Join Counsel India's network of certified psychologists, counsellors, and mental health professionals. Register today to empower lives.",
};

// SEO from Admin → Page SEO; the values above are used when nothing is saved there.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/counsellor-registration", fallbackMetadata);
}

export default function CounsellorRegistrationPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      <MentorRegistrationBanner />
      <MentorRegistrationForm />
    </main>
  );
}
