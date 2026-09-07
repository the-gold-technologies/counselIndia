"use client";
import React from "react";
import { CourseDetailData } from "./data/courseDetailData";

interface Props {
  course: CourseDetailData;
  onOpenBrochure: () => void;
}

export default function CourseHero({ course, onOpenBrochure }: Props) {
  return (
    <>
      <style jsx>{`
        .tutor-course-top-info {
          padding: 80px 0 90px;
          background-size: cover;
          background-attachment: scroll;
          background-position: right center;
          background-repeat: no-repeat;
          background-image: url('${course.bgImage}');
          position: relative;
        }

        @media (min-width: 768px) {
          .tutor-course-top-info {
            background-attachment: fixed;
            background-position: right;
          }
        }

        @media (max-width: 567px) {
          .tutor-course-top-info {
            background-size: cover;
            background-attachment: fixed;
            background-position: left;
            background-color: #242a39;
            background-image: none;
            padding: 50px 0;
          }
        }

        .dynamic-image {
          margin-bottom: 24px;
          display: flex;
          gap: 10px;
        }

        .dynamic-image img {
          border-radius: 5px;
          width: 150px;
          height: auto;
        }

        .tutor-course-top-info__content {
          max-width: 650px;
        }

        .tutor-course-top-info__badges {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 12px;
        }

        .tutor-course-top-info__badges .onsale {
          background: #07a64b;
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          line-height: 22px;
          height: 22px;
          padding: 0 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-radius: 2px;
          display: inline-block;
        }

        .tutor-course-top-info__badges .badges-category {
          color: #07a64b;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
        }

        .tutor-course-top-info__title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 36px;
          font-weight: 500;
          line-height: 1.35;
          margin-bottom: 16px;
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        }

        @media (max-width: 767px) {
          .tutor-course-top-info__title {
            font-size: 28px;
          }
        }

        .tutor-course-top-info__meta {
          margin-bottom: 14px;
        }

        .tutor-course-top-info__meta-update {
          color: #ffffff;
          font-size: 14.5px;
          line-height: 1.7;
          margin-bottom: 16px;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .tutor-course-top-info__meta-update p {
          color: #ffffff;
          margin: 0;
        }

        .tutor-course-top-info__meta-rating {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
        }

        .rating-average {
          color: #ffffff;
          font-size: 15px;
        }

        .checkedstar {
          color: #f7c04d;
          font-size: 14px;
        }

        .tutor-course-top-info__btn {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
        }

        .btn-primary-custom {
          background-color: #07a64b;
          color: #ffffff;
          font-weight: 700;
          font-size: 15px;
          height: 52px;
          padding: 0 28px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .btn-primary-custom:hover {
          background-color: #068f40;
        }

        .btn-light-custom {
          background-color: #ffffff;
          color: #212529;
          font-weight: 700;
          font-size: 15px;
          height: 50px;
          padding: 0 24px;
          border-radius: 5px;
          border: 1px solid #ffffff;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .btn-light-custom:hover {
          background-color: #07a64b;
          color: #ffffff;
          border-color: #07a64b;
        }
      `}</style>

      <div className="tutor-course-top-info section-padding-01 background_admin">
        <div className="container custom-container" style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}>
          <div className="row">
            <div className="col-lg-8">
              {/* Partner Logo */}
              {course.partnerLogo && (
                <div className="dynamic-image">
                  <img src={course.partnerLogo} alt="Accreditation Logo" />
                </div>
              )}

              {/* Badges */}
              <div className="tutor-course-top-info__content">
                <div className="tutor-course-top-info__badges">
                  {course.badgeSale && <span className="onsale">{course.badgeSale}</span>}
                  <a className="badges-category" href="#" onClick={(e) => e.preventDefault()}>
                    {course.category}
                  </a>
                </div>

                {/* Title */}
                <h1 className="tutor-course-top-info__title text-white">{course.name}</h1>

                {/* Description */}
                <div className="tutor-course-top-info__meta">
                  <div className="tutor-course-top-info__meta-update text-white">
                    <p>{course.description}</p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="tutor-course-top-info__meta">
                  <div className="tutor-course-top-info__meta-rating">
                    <div className="rating-average text-white">
                      <strong>{course.rating}</strong> /5
                    </div>
                    <div style={{ display: "flex", gap: "3px" }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#f7c04d">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="tutor-course-top-info__btn">
                  <a href={course.enrollUrl} target="_blank" rel="noopener noreferrer">
                    <button className="btn-primary-custom" style={{ minWidth: "160px" }}>
                      Enroll Now
                    </button>
                  </a>

                  <a href={`tel:${course.phone}`}>
                    <button className="btn-primary-custom" style={{ minWidth: "220px" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                      </svg>
                      Talk To Career Expert
                    </button>
                  </a>

                  <div style={{ width: "100%", marginTop: "8px" }}>
                    <button onClick={onOpenBrochure} className="btn-light-custom">
                      Download Brochure
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
