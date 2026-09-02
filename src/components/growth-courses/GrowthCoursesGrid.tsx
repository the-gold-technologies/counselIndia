"use client";
import React from "react";
import { GROWTH_COURSES, GrowthCourse } from "./data/growthCoursesData";
import GrowthCourseCard from "./GrowthCourseCard";

interface Props {
  onSelectCourse?: (course: GrowthCourse) => void;
}

export default function GrowthCoursesGrid({ onSelectCourse }: Props) {
  return (
    <div className="blog-section section-padding-01 py-5 bg-white">
      <div className="container custom-container py-3">
        <div className="row gy-5">
          {GROWTH_COURSES.map((course) => (
            <div key={course.id} className="col-xl-4 col-md-6 col-12">
              <GrowthCourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
