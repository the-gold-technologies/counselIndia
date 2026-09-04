"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ALL_COURSES_DATA, CourseItem } from "./data/coursesData";

export default function AllCoursesList() {
  const [courses] = useState<CourseItem[]>(ALL_COURSES_DATA);

  return (
    <div
      className="courses-section"
      style={{ backgroundColor: "#ffffff", padding: "35px 15px 60px" }}
    >
      <div
        className="container custom-container"
        style={{ maxWidth: "1140px", margin: "0 auto" }}
      >
        {/* Count Line */}
        <div style={{ marginBottom: "30px" }}>
          <p
            style={{
              margin: 0,
              fontSize: "22px",
              fontWeight: 500,
              color: "#2e384d",
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "-0.2px",
            }}
          >
            We found{" "}
            <span style={{ fontWeight: 800, color: "#1a1a1a" }}>
              {courses.length}
            </span>{" "}
            courses available for you
          </p>
        </div>

        {/* Course Cards */}
        <div>
          {courses.map((d) => (
            <div key={d.id} className="course-card-box">
              {/* Category Badge Top Right */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "24px",
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    backgroundColor: d.badgeBg,
                    color: "#ffffff",
                    padding: "3px 14px",
                    borderRadius: "4px",
                    fontSize: "13px",
                    fontWeight: 700,
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.18)",
                    fontFamily: "'Poppins', sans-serif",
                    display: "inline-block",
                  }}
                >
                  {d.badgeText}
                </span>
              </div>

              <div className="course-card-flex">
                {/* Thumbnail Photo */}
                <div className="course-card-img-wrap">
                  <Link
                    href={`/courses/${d.slug}`}
                    style={{ display: "block", width: "100%", height: "100%" }}
                  >
                    <img src={d.cover_image} alt={d.name} />
                  </Link>
                </div>

                {/* Details */}
                <div className="course-card-info-wrap">
                  {/* Title in Serif font */}
                  <h3
                    style={{
                      margin: "0 0 6px",
                      fontSize: "24px",
                      fontWeight: 700,
                      fontFamily:
                        "'Playfair Display', Georgia, 'Times New Roman', serif",
                      lineHeight: "1.25",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    <Link
                      href={`/courses/${d.slug}`}
                      style={{
                        color: "#1b2537",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#00a651")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#1b2537")
                      }
                    >
                      {d.name}
                    </Link>
                  </h3>

                  {/* 5 Stars */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                      margin: "0 0 10px",
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#fab23c"
                        style={{ display: "block" }}
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  {/* Duration & Seats in Green */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "22px",
                      margin: "0 0 14px",
                      color: "#00a651",
                      fontSize: "15px",
                      fontWeight: 500,
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "7px",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{ flexShrink: 0 }}
                      >
                        <circle cx="12" cy="12" r="10" fill="#00a651" />
                        <path
                          d="M12 7v5l3.5 2"
                          stroke="#ffffff"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {d.list_duration}
                    </span>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "7px",
                      }}
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00a651"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ flexShrink: 0 }}
                      >
                        <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
                        <line x1="4" y1="4" x2="20" y2="20" />
                        <line x1="20" y1="4" x2="4" y2="20" />
                      </svg>
                      {d.enrolment}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "#555555",
                      lineHeight: "1.55",
                      margin: "0 0 18px",
                      fontFamily: "'Poppins', sans-serif",
                      maxWidth: "580px",
                    }}
                  >
                    {d.subdescription}
                  </p>

                  {/* Action Buttons */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <Link
                      href={`/courses/${d.slug}`}
                      style={{
                        backgroundColor: "#f1f3f5",
                        color: "#212529",
                        border: "1px solid #e9ecef",
                        borderRadius: "4px",
                        padding: "9px 24px",
                        fontSize: "13.5px",
                        fontWeight: 600,
                        textDecoration: "none",
                        fontFamily: "'Poppins', sans-serif",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#e2e8f0";
                        e.currentTarget.style.color = "#000000";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#f1f3f5";
                        e.currentTarget.style.color = "#212529";
                      }}
                    >
                      Know More
                    </Link>

                    <a
                      href="tel:+918031320449"
                      style={{
                        backgroundColor: "#07a64b",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "4px",
                        padding: "9px 22px",
                        fontSize: "13.5px",
                        fontWeight: 600,
                        textDecoration: "none",
                        fontFamily: "'Poppins', sans-serif",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: "background-color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#068a3e")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#07a64b")
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
                      </svg>
                      Enquire Now
                    </a>
                  </div>
                </div>

                {/* Right side next batch label */}
                <div
                  className="course-next-batch-side"
                  style={{ color: "#555555" }}
                >
                  Next Batch Starts On
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .course-card-box {
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          border: 1px solid #f0f0f0;
          background: #ffffff;
          padding: 22px 24px;
          margin-bottom: 24px;
          position: relative;
        }

        .course-card-flex {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 24px;
          position: relative;
        }

        .course-card-img-wrap {
          width: 270px;
          height: 181px;
          flex-shrink: 0;
          border-radius: 6px;
          overflow: hidden;
        }

        .course-card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .course-card-info-wrap {
          flex-grow: 1;
          padding-right: 170px;
        }

        .course-next-batch-side {
          position: absolute;
          top: 50%;
          right: 24px;
          transform: translateY(-50%);
          font-size: 14px;
          color: "#555555";
          font-family: 'Poppins', sans-serif;
          text-align: right;
        }

        @media (max-width: 991px) {
          .course-card-info-wrap {
            padding-right: 0;
          }
          .course-next-batch-side {
            position: static;
            transform: none;
            margin-top: 14px;
            text-align: left;
          }
        }

        @media (max-width: 767px) {
          .course-card-flex {
            flex-direction: column;
            align-items: flex-start;
          }
          .course-card-img-wrap {
            width: 100%;
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
}
