"use client";
import React from "react";
import Link from "next/link";
import { GrowthCourse } from "./data/growthCoursesData";

interface Props {
  course: GrowthCourse;
}

export default function GrowthCourseCard({ course }: Props) {
  return (
    <div className="blog-item-02 bg-white rounded-2 overflow-hidden d-flex flex-column h-100 shadow-sm border border-light-subtle">
      {/* Course Thumbnail */}
      <div className="blog-item-02__image position-relative overflow-hidden">
        <Link
          href={`/course-detail/${course.slug}`}
          className="d-block overflow-hidden"
        >
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
            href={`/course-detail/${course.slug}`}
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

        {/* Buy Now Button with guaranteed inline styling */}
        <div className="mt-auto">
          <Link
            href={`/course-detail/${course.slug}`}
            className="text-decoration-none"
            style={{
              backgroundColor: "#f3f4f6",
              color: "#212529",
              borderRadius: "8px",
              padding: "8px 16px",
              fontSize: "16px",
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              outline: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#07a64b";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#f3f4f6";
              e.currentTarget.style.color = "#212529";
            }}
          >
            Buy Now <span style={{ marginLeft: "8px" }}>→</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .blog-item-02 {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
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

        .course-img {
          transition: transform 0.4s ease;
        }

        .blog-item-02:hover .course-img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
