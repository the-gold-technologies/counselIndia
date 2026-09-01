"use client";
import React from "react";
import Link from "next/link";
import { GrowthCourse } from "./data/growthCoursesData";

interface Props {
  course: GrowthCourse;
  onEnrollClick?: (course: GrowthCourse) => void;
}

export default function GrowthCourseCard({ course, onEnrollClick }: Props) {
  return (
    <div className="blog-item-02 bg-white rounded-2 overflow-hidden d-flex flex-column h-100 shadow-sm border border-light-subtle">
      {/* Course Thumbnail */}
      <div className="blog-item-02__image position-relative overflow-hidden">
        <Link href={`/courses/${course.slug}`} className="d-block overflow-hidden">
          <img
            src={course.coverimage}
            alt={course.title}
            width={370}
            height={201}
            className="w-100 img-fluid course-img"
            style={{
              height: "201px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Link>
      </div>

      {/* Course Body */}
      <div className="blog-item-02__content p-4 d-flex flex-column flex-grow-1">
        <h3
          className="blog-item-02__title mb-4"
          style={{ height: "3.6em", lineHeight: "1.4" }}
        >
          <Link
            href={`/courses/${course.slug}`}
            className="text-dark text-decoration-none hover-primary fw-bold"
          >
            {course.title}
          </Link>
        </h3>

        {/* 3 Meta Info Lines */}
        <div className="course-meta-rows mb-4">
          <h6 className="speaker-item__name font-size-14 text-start mb-2 d-flex align-items-center text-dark">
            <i
              className="fa fa-bar-chart me-3 text-dark"
              style={{ width: "16px" }}
            ></i>
            <span className="fw-bold">{course.difficulty}</span>
          </h6>

          <h6 className="speaker-item__name font-size-14 text-start mb-2 d-flex align-items-center text-dark">
            <i
              className="far fa-clock me-3 text-dark"
              style={{ width: "16px" }}
            ></i>
            <span className="fw-bold">{course.duration_course} Lessons</span>
          </h6>

          <h6 className="speaker-item__name font-size-14 text-start mb-0 d-flex align-items-center text-dark">
            <i
              className="fa fa-book me-3 text-dark"
              style={{ width: "16px" }}
            ></i>
            <span className="fw-bold">{course.certificate}</span>
          </h6>
        </div>

        {/* Buy Now Button */}
        <div className="mt-auto">
          <button
            type="button"
            onClick={() => onEnrollClick?.(course)}
            className="btn btn-light-custom text-decoration-none d-inline-flex align-items-center"
          >
            Buy Now <span className="ms-2">→</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .blog-item-02 {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .blog-item-02:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.09) !important;
        }

        .blog-item-02__title {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          font-size: 19px;
          color: #212529;
        }

        .hover-primary:hover {
          color: #07a64b !important;
        }

        .btn-light-custom {
          background-color: #f1f3f5;
          color: #212529;
          font-size: 14px;
          font-weight: 600;
          padding: 8px 20px;
          border-radius: 4px;
          border: 1px solid #e9ecef;
          transition: all 0.2s ease;
        }

        .btn-light-custom:hover {
          background-color: #e2e6ea;
          color: #000000;
        }
      `}</style>
    </div>
  );
}
