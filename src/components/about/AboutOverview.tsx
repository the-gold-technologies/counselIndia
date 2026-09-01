"use client";
import React from "react";

export default function AboutOverview() {
  return (
    <div className="counter-section section-padding-02 py-5 bg-white">
      <div className="container custom-container py-3">
        {/* Main Section Header: About Us */}
        <h2
          className="about-section-title__main-title text-center mb-5"
          style={{ marginBottom: "5%" }}
        >
          About Us
        </h2>

        {/* Left-Aligned Headline with Native Mark Underline */}
        <div className="section-title mb-4" style={{ marginTop: "1%" }}>
          <h2 className="section-title__title font-size-34 fw-bold text-dark">
            <mark>Counsel India: Transforming Minds, Shaping Futures</mark>
          </h2>
        </div>

        {/* Narrative Paragraphs & Dual Focus List */}
        <div className="about-overview-text">
          <p className="font-size-15 text-muted lh-base mb-4 text-justify">
            India’s favorite practical psychology learning platform, Counsel India
            is simplifying counselling skills with comprehensive resources,
            extensive training, and dedicated support for individuals seeking to
            excel in Counselling and Psychology. With over 200,000 happy learners
            and still counting, Counsel India has become one of the most trusted
            and go-to platforms for Psychology learning.
          </p>

          <p className="mb-2" style={{ marginTop: "2%" }}>
            <strong className="text-dark" style={{ fontWeight: "bold", fontSize: "19px" }}>
              Don&apos;t just learn, experience!
            </strong>
          </p>

          <p className="font-size-15 text-muted lh-base mb-4">
            Counsel India offers industry-driven psychology education with practical application.
          </p>

          <p className="mb-3" style={{ margin: "0%" }}>
            <strong className="text-dark" style={{ fontWeight: "bold", fontSize: "19px" }}>
              Our programs emphasize a dual focus for comprehensive learning.
            </strong>
          </p>

          <ul className="ps-4 mb-4">
            <li className="mb-2">
              <p className="font-size-15 text-muted lh-base mb-0" style={{ margin: "0%" }}>
                <strong className="text-dark" style={{ fontWeight: "bold", fontSize: "19px" }}>
                  Empowering you with emotional intelligence:
                </strong>{" "}
                Gain the skills to manage your emotions effectively, build strong
                relationships, and cultivate self-awareness for a fulfilling life.
              </p>
            </li>
            <li>
              <p className="font-size-15 text-muted lh-base mb-0" style={{ margin: "0%" }}>
                <strong className="text-dark" style={{ fontWeight: "bold", fontSize: "19px" }}>
                  Elevating your career in Psychology:
                </strong>{" "}
                Master human behavior, hone interpersonal skills, and strengthen
                your professional toolkit for a successful and impactful career. .
              </p>
            </li>
          </ul>

          <p className="font-size-15 text-muted lh-base mb-0 text-justify">
            Our support to our learners extends beyond the curriculum, where we
            provide them with mentorship and placement opportunities with the help
            of an expansive network of 50+ hiring partners &amp; 5000+ Psychologists
            and Counsellors.
          </p>
        </div>
      </div>

      <style jsx>{`
        .about-section-title__main-title {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          font-size: 40px;
          line-height: 1.4;
          color: #212529;
          font-weight: 700;
        }

        .section-title__title {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          font-size: 34px;
          color: #212529;
          line-height: 1.3;
        }

        @media (max-width: 991px) {
          .about-section-title__main-title {
            font-size: 32px;
          }
          .section-title__title {
            font-size: 28px;
          }
        }

        @media (max-width: 575px) {
          .about-section-title__main-title {
            font-size: 26px;
          }
          .section-title__title {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
}
