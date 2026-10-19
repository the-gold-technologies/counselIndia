import React from "react";
import GrowthCoursesHero from "@/components/growth-courses/GrowthCoursesHero";
import GrowthCoursesCounters from "@/components/growth-courses/GrowthCoursesCounters";
import GrowthCoursesGrid from "@/components/growth-courses/GrowthCoursesGrid";
import GrowthCoursesCountdownCTA from "@/components/growth-courses/GrowthCoursesCountdownCTA";

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
