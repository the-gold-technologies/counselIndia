"use client";
import React from "react";
import Link from "next/link";

export default function ShortCoursesSlider() {
  const shortCourses = [
    {
      id: 1,
      title: "Psychology for Everyday Struggles",
      image: "https://prod-s3.counselindia.com/blog/Psychology for Everyday Struggles_1736508322.jpg",
      slug: "psychology-for-everyday-struggles",
    },
    {
      id: 2,
      title: "The Art of Understanding Yourself",
      image: "https://prod-s3.counselindia.com/blog/The Art of Understanding Yourself_1736508692.jpg",
      slug: "the-art-of-understanding-yourself",
    },
    {
      id: 3,
      title: "Counselling Booster Program",
      image: "https://prod-s3.counselindia.com/blog/Counselling Booster Program_1736508523.jpg",
      slug: "counselling-booster-program",
    },
  ];

  return (
    <div className="event-section section-padding-01 bg-white">
      <div className="container custom-container">
        <div className="row gy-10 align-items-center">
          {/* Left Column: Title & View All Button */}
          <div className="col-xl-3 col-lg-5 col-md-6 col-sm-7">
            <div className="section-title mb-0 pe-lg-8">
              <h4 className="section-title__sub-title">
                SHORT COURSES
              </h4>
              <h2 className="section-title__title-02">
                <br /> Exclusive Short Courses from <mark>Counsel India</mark>
              </h2>
            </div>
            <div className="section-btn mt-4">
              <Link
                href="/growth-courses"
                className="btn btn-light btn-hover-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  lineHeight: "1",
                }}
              >
                View all
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Course Cards (Static Grid) */}
          <div className="col-xl-9">
            <div className="row g-4 g-lg-6">
              {shortCourses.map((course) => (
                <div className="col-md-4 col-sm-6" key={course.id}>
                  {/* Event / Short Course Item */}
                  <div className="event-item h-100 d-flex flex-column" style={{ borderRadius: "5px", overflow: "hidden" }}>
                    <div className="event-item__image">
                      <Link
                        href={`/course-detail/${course.slug}`}
                        className="d-block overflow-hidden"
                      >
                        <img
                          src={course.image}
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
                        padding: "21px 20px 35px",
                        transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
                      }}
                    >
                      <h3
                        className="blog-item-02__title"
                        style={{
                          height: "3.6em",
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

                      <div>
                        <Link
                          className="blog-item-02__more btn btn-light btn-hover-white"
                          href={`/course-detail/${course.slug}`}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            lineHeight: "1",
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
          </div>
        </div>
      </div>
    </div>
  );
}
