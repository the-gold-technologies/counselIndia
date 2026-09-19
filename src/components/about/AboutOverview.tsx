"use client";
import React from "react";

export default function AboutOverview() {
  return (
    <div className="counter-section section-padding-02">
      <div className="container custom-container">
        {/* Main Section Header: About Us */}
        <h2
          className="about-section-title__main-title text-center"
          style={{ marginBottom: "5%" }}
        >
          About Us{" "}
        </h2>

        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{ marginTop: "1%" }}
        >
          <h2 className="section-title__title">
            <mark>Counsel India: Transforming Minds, Shaping Futures</mark>
          </h2>
        </div>

        <p>
          India’s favorite practical psychology learning platform, Counsel India
          is simplifying counselling skills with comprehensive resources,
          extensive training, and dedicated support for individuals seeking to
          excel in Counselling and Psychology. With over 200,000 happy learners
          and still counting, Counsel India has become one of the most trusted
          and go-to platforms for Psychology learning.
        </p>

        <p style={{ marginTop: "2%" }}>
          <strong style={{ fontWeight: "bold", fontSize: "19px" }}>
            {" "}
            Don&apos;t just learn, experience!{" "}
          </strong>
        </p>

        <p>
          Counsel India offers industry-driven psychology education with
          practical application.
        </p>

        <p style={{ margin: "0%" }}>
          <strong style={{ fontWeight: "bold", fontSize: "19px" }}>
            {" "}
            Our programs emphasize a dual focus for comprehensive learning.{" "}
          </strong>
        </p>

        <ul>
          <li>
            <p style={{ margin: "0%" }}>
              <strong style={{ fontWeight: "bold", fontSize: "19px" }}>
                {" "}
                Empowering you with emotional intelligence:
              </strong>{" "}
              Gain the skills to manage your emotions effectively, build strong
              relationships, and cultivate self-awareness for a fulfilling life.
            </p>
          </li>
          <li>
            <p style={{ margin: "0%" }}>
              <strong style={{ fontWeight: "bold", fontSize: "19px" }}>
                {" "}
                Elevating your career in Psychology:{" "}
              </strong>{" "}
              Master human behavior, hone interpersonal skills, and strengthen
              your professional toolkit for a successful and impactful career. .
            </p>
          </li>
        </ul>

        <p>
          Our support to our learners extends beyond the curriculum, where we
          provide them with mentorship and placement opportunities with the help
          of an expansive network of 50+ hiring partners &amp; 5000+
          Psychologists and Counsellors.{" "}
        </p>
      </div>

      <style jsx>{`
        .section-padding-02 {
          padding-top: 50px;
          padding-bottom: 0px;
        }

        .custom-container {
          max-width: 1200px;
          padding-left: 15px;
          padding-right: 15px;
          margin-left: auto;
          margin-right: auto;
        }

        .about-section-title__main-title {
          font-family: "Playfair Display", serif;
          font-size: 40px;
          line-height: 1.4;
          color: #232937;
          font-weight: 700;
        }

        .section-title {
          margin-bottom: 37px;
        }

        .section-title__title {
          font-family: "Playfair Display", serif;
          font-size: 28px;
          line-height: 1.5;
          font-weight: 700;
          color: #232937;
        }

        .section-title__title mark {
          position: relative;
          z-index: 0;
          padding: 0 0 10px;
          color: inherit;
          background-color: transparent;
          display: inline-block;
        }

        .section-title__title mark::after {
          content: "";
          position: absolute;
          width: 91px;
          height: 12px;
          bottom: 0;
          left: 50%;
          z-index: -1;
          transform: translate(-45px);
          background-color: #07a64b;
          mask-repeat: no-repeat;
          mask-size: contain;
          mask-image: url("https://www.counselindia.com/assets/images/headline-curve-02.svg");
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          -webkit-mask-image: url("https://www.counselindia.com/assets/images/headline-curve-02.svg");
        }

        p {
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.75;
          color: #333;
          margin-bottom: 1rem;
        }

        ul {
          padding-left: 2rem;
          margin-bottom: 1rem;
        }

        li {
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #333;
          line-height: 1.75;
        }
      `}</style>
    </div>
  );
}
