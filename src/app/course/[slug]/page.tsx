import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/services/courseService";
import CourseDetailView from "@/components/course/CourseDetailView";
import { pageMetadata } from "@/services/pageSeoService";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | Counsel India",
      description: "The requested course could not be found.",
    };
  }

  // SEO from Admin → Page SEO (saved under /course/<slug>), else the course name & description
  return pageMetadata(
    `/course/${slug}`,
    {
      title: `${course.name} | Counsel India`,
      description: (course.description || "").slice(0, 160),
    },
    { canonicalPath: `/course/${slug}` }
  );
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailView course={course} />;
}
