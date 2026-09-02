import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  GROWTH_COURSES,
  GrowthCourse,
} from "@/components/growth-courses/data/growthCoursesData";
import CourseHeroOverview from "@/components/course-detail/CourseHeroOverview";
import CourseModulesSection from "@/components/course-detail/CourseModulesSection";
import CourseCertificateSection from "@/components/course-detail/CourseCertificateSection";
import CourseTestimonials from "@/components/course-detail/CourseTestimonials";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return GROWTH_COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = GROWTH_COURSES.find((c) => c.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found | Counsel India",
    };
  }

  return {
    title: `${course.title} | Growth Courses | Counsel India`,
    description:
      course.description ||
      `Enroll in ${course.title}. Earn a Certificate of Completion from Counsel India with practical, self-paced modules.`,
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = GROWTH_COURSES.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="course-detail-main bg-white">
      {/* 1. Hero Overview & Booking Sidebar */}
      <CourseHeroOverview course={course} />

      {/* 2. Course Content / Modules Section */}
      <CourseModulesSection modules={course.modules} />

      {/* 3. Program Certificate Section */}
      <CourseCertificateSection />

      {/* 4. Learner Testimonials */}
      <CourseTestimonials />
    </main>
  );
}
