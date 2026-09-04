import React from "react";
import type { Metadata } from "next";
import AllCoursesBanner from "@/components/all-courses-list/AllCoursesBanner";
import AllCoursesList from "@/components/all-courses-list/AllCoursesList";
import AllCoursesCounters from "@/components/all-courses-list/AllCoursesCounters";

export const metadata: Metadata = {
  title: "Live Courses and Programs | Counsel India",
  description:
    "Explore Counsel India's certified psychology and counselling courses, clinical diplomas, CBT, child psychology, and master's degree programs.",
};

export default function AllCoursesListPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* Banner with CTA */}
      <AllCoursesBanner />

      {/* Course List */}
      <AllCoursesList />

      {/* Statistics Counter */}
      <AllCoursesCounters />
    </main>
  );
}
