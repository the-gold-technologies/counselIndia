import React from "react";
import type { Metadata } from "next";
import AlumniHero from "@/components/alumni/AlumniHero";
import AlumniStats from "@/components/alumni/AlumniStats";
import AlumniServices from "@/components/alumni/AlumniServices";
import AlumniNetworkShowcase from "@/components/alumni/AlumniNetworkShowcase";
import { pageMetadata } from "@/services/pageSeoService";

const fallbackMetadata: Metadata = {
  title: "Counsel India Alumni | Join the Community of Learners",
  description:
    "Join the Counsel India Alumni Network - a thriving community of over 200,000+ psychology learners, professionals, and counsellors worldwide.",
};

// SEO from Admin → Page SEO; the values above are used when nothing is saved there.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/alumni", fallbackMetadata);
}

export default function AlumniPage() {
  return (
    <main className="main-wrapper bg-white">
      {/* 1. Responsive Hero Banner */}
      <AlumniHero />

      {/* 2. 5 Impact Metric Counters */}
      <AlumniStats />

      {/* 3. Alumni Services 4 Cards */}
      <AlumniServices />

      {/* 4. Alumni Network Showcase Marquee & CTA */}
      <AlumniNetworkShowcase />
    </main>
  );
}
