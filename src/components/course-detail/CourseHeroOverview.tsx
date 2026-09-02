"use client";
import React from "react";
import Link from "next/link";
import { GrowthCourse } from "@/components/growth-courses/data/growthCoursesData";

interface Props {
  course: GrowthCourse;
}

export default function CourseHeroOverview({ course }: Props) {
  return (
    <div className="blog-section section-padding-01 py-5 bg-white">
      <div className="container custom-container py-3">
        <div className="row gy-5">
          {/* Left Column: YouTube Video & Course Rating */}
          <div className="col-lg-8">
            {/* Video Player */}
            <div
              className="blog-details__image position-relative mb-2 overflow-hidden shadow-sm"
              style={{ borderRadius: "8px", backgroundColor: "#000000" }}
            >
              {course.videoUrl ? (
                <iframe
                  width="100%"
                  height="410"
                  src={course.videoUrl}
                  title={course.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    width: "100%",
                    height: "410px",
                    display: "block",
                    border: "none",
                  }}
                ></iframe>
              ) : (
                <img
                  src={course.coverimage}
                  alt={course.title}
                  width={800}
                  height={410}
                  className="img-fluid w-100"
                  style={{
                    height: "410px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              )}
            </div>

            {/* Course Rating matching screenshot */}
            <div className="d-flex align-items-center gap-2 pt-2 mb-4">
              <span className="fw-semibold text-dark font-size-15">
                Course Rating
              </span>
              <span className="text-warning font-size-15">★★★★★</span>
              <span className="text-dark font-size-15">{course.rating}</span>
            </div>
          </div>

          {/* Right Column: Sticky Booking Card */}
          <div className="col-lg-4">
            <div
              className="event-details__booking-info bg-white"
              style={{
                boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.08)",
                borderRadius: "8px",
                border: "1px solid #eef2f6",
                padding: "36px 24px 30px",
                textAlign: "center",
              }}
            >
              {/* Official Dark Logo */}
              <div className="mb-4">
                <img
                  src="/assets/images/dark-logo.png"
                  alt="Counsel India"
                  width={210}
                  height={55}
                  style={{ height: "auto", maxWidth: "100%", display: "inline-block" }}
                  onError={(e) => {
                    e.currentTarget.src = "/assets/images/index/logo_img.png";
                  }}
                />
              </div>

              {/* Meta Info List */}
              <div
                style={{ paddingLeft: "12%", textAlign: "left" }}
                className="mb-4 d-flex flex-column gap-3"
              >
                <div className="d-flex align-items-center gap-3 font-size-15 text-dark">
                  <i
                    className="fa fa-bar-chart text-dark"
                    style={{ width: "18px" }}
                  ></i>
                  <span className="fw-bold text-lowercase">
                    {course.difficulty}
                  </span>
                </div>

                <div className="d-flex align-items-center gap-3 font-size-15 text-dark">
                  <i
                    className="far fa-clock text-dark"
                    style={{ width: "18px" }}
                  ></i>
                  <span className="fw-bold">
                    {course.duration_course} Lessons
                  </span>
                </div>

                <div className="d-flex align-items-center gap-3 font-size-15 text-dark">
                  <i
                    className="fa fa-address-book text-dark"
                    style={{ width: "18px" }}
                  ></i>
                  <span className="fw-bold">
                    {course.seats_left} Seats Left
                  </span>
                </div>

                <div className="d-flex align-items-center gap-3 font-size-15 text-dark">
                  <i
                    className="fa fa-book text-dark"
                    style={{ width: "18px" }}
                  ></i>
                  <span className="fw-bold">{course.certificate}</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-4">
                <h2
                  className="member_price mb-0"
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: "#1e293b",
                  }}
                >
                  <span>₹</span>
                  {course.discounted_price}
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#94a3b8",
                      marginLeft: "10px",
                      fontWeight: 400,
                      textDecoration: "line-through",
                    }}
                  >
                    ₹{course.actual_price}
                  </span>
                </h2>
              </div>

              {/* Book Now Button */}
              <div>
                <Link
                  href={course.payment_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-white text-decoration-none"
                  style={{
                    backgroundColor: "#00a651",
                    color: "#ffffff",
                    borderRadius: "8px",
                    padding: "12px 42px",
                    fontSize: "18px",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Centered Serif Course Title matching screenshot */}
        <div className="text-center pt-5 pb-2">
          <h1
            style={{
              fontSize: "clamp(32px, 4vw, 44px)",
              fontWeight: 700,
              fontFamily: "Georgia, 'Playfair Display', serif",
              color: "#212529",
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            {course.title}
          </h1>
        </div>
      </div>
    </div>
  );
}
