"use client";
import React, { useState } from "react";
import GrowthCoursesHero from "@/components/growth-courses/GrowthCoursesHero";
import GrowthCoursesCounters from "@/components/growth-courses/GrowthCoursesCounters";
import GrowthCoursesGrid from "@/components/growth-courses/GrowthCoursesGrid";
import GrowthCoursesCountdownCTA from "@/components/growth-courses/GrowthCoursesCountdownCTA";
import GrowthCourseEnrollModal from "@/components/growth-courses/GrowthCourseEnrollModal";
import { GrowthCourse, GROWTH_COURSES } from "@/components/growth-courses/data/growthCoursesData";

export default function GrowthCoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<GrowthCourse | null>(null);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const handleOpenEnrollModal = (course?: GrowthCourse) => {
    setSelectedCourse(course || GROWTH_COURSES[0]);
    setIsEnrollModalOpen(true);
  };

  return (
    <main className="main-wrapper bg-white">
      {/* 1. Hero Campus Section */}
      <GrowthCoursesHero />

      {/* 2. Impact Achievement Metrics Bar */}
      <GrowthCoursesCounters />

      {/* 3. 3-Column Growth Courses Filterable Grid */}
      <GrowthCoursesGrid onSelectCourse={handleOpenEnrollModal} />

      {/* 4. Limited Time Urgency CTA with Live Countdown Timer */}
      <GrowthCoursesCountdownCTA onCtaClick={() => handleOpenEnrollModal()} />

      {/* 5. Interactive Enrollment Lead Capture Modal */}
      <GrowthCourseEnrollModal
        course={selectedCourse}
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
      />
    </main>
  );
}
