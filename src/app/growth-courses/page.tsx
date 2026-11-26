import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/services/pageSeoService";
import GrowthCoursesHero from "@/components/growth-courses/GrowthCoursesHero";
import GrowthCoursesCounters from "@/components/growth-courses/GrowthCoursesCounters";
import GrowthCoursesGrid from "@/components/growth-courses/GrowthCoursesGrid";
import GrowthCoursesCountdownCTA from "@/components/growth-courses/GrowthCoursesCountdownCTA";

// SEO from Admin → Page SEO
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/growth-courses", { title: "Growth Courses | Counsel India" });
}

export default function GrowthCoursesPage() {
  return (
    <main className="main-wrapper bg-white">
      {/* 1. Hero Campus Section */}
      <GrowthCoursesHero />

      {/* 2. Impact Achievement Metrics Bar */}
      <GrowthCoursesCounters />

      {/* 3. 3-Column Growth Courses Filterable Grid */}
      <GrowthCoursesGrid />

      {/* 4. Limited Time Urgency CTA with Live Countdown Timer */}
      <GrowthCoursesCountdownCTA />
    </main>
  );
}
