import React from "react";
import type { Metadata } from "next";
import MentorRegistrationBanner from "@/components/mentor-registration/MentorRegistrationBanner";
import MentorRegistrationForm from "@/components/mentor-registration/MentorRegistrationForm";

export const metadata: Metadata = {
  title: "Counsellor Registration | Counsel India",
  description:
    "Join Counsel India's network of certified psychologists, counsellors, and mental health professionals. Register today to empower lives.",
};

export default function MentorRegistrationPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      {/* Banner & Breadcrumb */}
      <MentorRegistrationBanner />

      {/* Main Registration Form */}
      <MentorRegistrationForm />
    </main>
  );
}
