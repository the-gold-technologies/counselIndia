import React from "react";
import type { Metadata } from "next";
import { getCourseDetailBySlug } from "@/components/course/data/courseDetailData";
import CourseDetailView from "@/components/course/CourseDetailView";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseDetailBySlug(slug);

  return {
    title: `${course.name} | Counsel India`,
    description: course.description.slice(0, 160),
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseDetailBySlug(slug);

  return <CourseDetailView course={course} />;
}
