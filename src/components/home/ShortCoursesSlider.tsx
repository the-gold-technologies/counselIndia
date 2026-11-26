"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { GROWTH_COURSES } from "@/components/growth-courses/data/growthCoursesData";

export default function ShortCoursesSlider() {
  const [search, setSearch] = useState("");

  const filteredCourses = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return GROWTH_COURSES;
    return GROWTH_COURSES.filter(
      (c) => c.title.toLowerCase().includes(q) || c.area.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="event-section section-padding-01 bg-white">
      <div className="container custom-container">
        <div className="row gy-8 align-items-center">
          {/* Left Column: Title, Quick Search & Info */}
          <div className="col-xl-3 col-lg-4 col-md-5">
            <div className="section-title mb-0 pe-lg-4">
              <h4 className="section-title__sub-title text-success fw-bold">SHORT COURSES</h4>
              <h2 className="section-title__title-02">
                Exclusive Short Courses from <mark>Counsel India</mark>
              </h2>
              {/* Small note on courses and psychology count */}
              <p className="text-muted mt-2 mb-3" style={{ fontSize: "13px", lineHeight: "1.5" }}>
                <strong>{GROWTH_COURSES.length} courses</strong> available across General,
                Counselling &amp; Self Psychology.
              </p>
            </div>

            {/* Compact Search Bar */}
            <div className="position-relative my-3" style={{ maxWidth: "260px" }}>
              <i
                className="fal fa-search position-absolute text-muted"
                style={{
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "13px",
                }}
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search course name..."
                className="form-control"
                style={{
                  paddingLeft: "36px",
                  paddingRight: search ? "32px" : "12px",
                  height: "38px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  border: "1px solid #e2e8f0",
                  backgroundColor: "#f8fafc",
                }}
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="position-absolute border-0 bg-transparent text-muted"
                  style={{
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  &times;
                </button>
              )}
            </div>

            <div className="section-btn mt-2">
              <Link
                href="/growth-courses"
                className="btn btn-light btn-hover-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  lineHeight: "1",
                  fontSize: "14px",
                  padding: "10px 20px",
                  borderRadius: "8px",
                }}
              >
                View all
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Clean Course Cards */}
          <div className="col-xl-9 col-lg-8 col-md-7">
            {filteredCourses.length > 0 ? (
              <div className="row g-4 g-lg-6">
                {filteredCourses.map((course) => (
                  <div className="col-md-4 col-sm-6" key={course.id}>
                    <div
                      className="event-item h-100 d-flex flex-column"
                      style={{
                        borderRadius: "8px",
                        overflow: "hidden",
                        border: "1px solid #f1f5f9",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      <div className="event-item__image position-relative">
                        <Link
                          href={`/course-detail/${course.slug}`}
                          className="d-block overflow-hidden"
                        >
                          <img
                            src={course.coverimage}
                            alt={course.title}
                            width={370}
                            height={201}
                            style={{
                              width: "100%",
                              height: "auto",
                              aspectRatio: "370/201",
                              objectFit: "cover",
                              display: "block",
                              transition: "all 1.5s cubic-bezier(0, 0, 0.2, 1)",
                            }}
                          />
                        </Link>
                      </div>

                      <div
                        className="event-item__content text-center d-flex flex-column justify-content-between flex-grow-1"
                        style={{
                          backgroundColor: "#f8f8f8",
                          padding: "20px 18px 24px",
                        }}
                      >
                        <h3
                          className="blog-item-02__title"
                          style={{
                            minHeight: "3.2em",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 0 10px 0",
                          }}
                        >
                          <Link
                            href={`/course-detail/${course.slug}`}
                            style={{
                              color: "#222736",
                              fontSize: "15px",
                              fontWeight: 600,
                              lineHeight: "1.4",
                              textDecoration: "none",
                            }}
                          >
                            {course.title}
                          </Link>
                        </h3>

                        <div className="d-flex align-items-center justify-content-between pt-2">
                          <span className="text-dark fw-bold font-size-14">
                            ₹{course.discounted_price}
                            {course.actual_price > course.discounted_price && (
                              <span className="text-muted text-decoration-line-through font-size-11 ms-1 fw-normal">
                                ₹{course.actual_price}
                              </span>
                            )}
                          </span>
                          <Link
                            className="blog-item-02__more btn btn-light btn-hover-white"
                            href={`/course-detail/${course.slug}`}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "6px",
                              lineHeight: "1",
                              padding: "8px 14px",
                              fontSize: "13px",
                            }}
                          >
                            Buy Now <i className="fal fa-long-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5 bg-light rounded-3">
                <p className="text-muted mb-2 font-size-14">
                  No course found matching &ldquo;{search}&rdquo;
                </p>
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="btn btn-sm btn-outline-success"
                  style={{ borderRadius: "6px", fontSize: "12px" }}
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
