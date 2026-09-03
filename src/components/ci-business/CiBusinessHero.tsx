"use client";
import React from "react";

export default function CiBusinessHero() {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("member");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="tutor-course-top-info section-padding-011 position-relative overflow-hidden w-100"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.85) 45%, rgba(0, 0, 0, 0.5) 75%, rgba(0, 0, 0, 0.25) 100%), url('https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/images/live-bg116.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "100%",
        paddingTop: "95px",
        paddingBottom: "95px",
      }}
    >
      <div className="container custom-container px-3 px-md-4">
        <div className="row">
          <div className="col-lg-7 col-md-10 col-12">
            {/* Tutor Course Top Info Content */}
            <div className="tutor-course-top-info__content">
              <h1
                className="tutor-course-top-info__title text-white"
                style={{
                  fontSize: "32px",
                  fontWeight: 500,
                  lineHeight: 1.5,
                  marginBottom: "10px",
                  fontFamily:
                    "Georgia, 'Playfair Display', 'Times New Roman', serif",
                }}
              >
                Transform Your Workplace: Invest in your Employees and
                Accelerate Growth
              </h1>
            </div>

            {/* Subtitle & List Section */}
            <div
              className="section-title__title"
              style={{
                color: "white",
                marginBottom: "5%",
                marginTop: "5%",
              }}
            >
              <h2
                className="tutor-course-top-info__title text-white"
                style={{
                  fontSize: "32px",
                  fontWeight: 500,
                  lineHeight: 1.5,
                  marginBottom: "10px",
                  fontFamily:
                    "Georgia, 'Playfair Display', 'Times New Roman', serif",
                }}
              >
                <mark className="hero-mark">Empower them with</mark>
              </h2>

              <ul
                className="tutor-course-top-info__title text-white list-unstyled"
                style={{
                  fontSize: "32px",
                  fontWeight: 500,
                  lineHeight: 1.5,
                  fontFamily:
                    "Georgia, 'Playfair Display', 'Times New Roman', serif",
                  paddingLeft: "0",
                  margin: "0",
                }}
              >
                <li style={{ listStyleType: "disc", marginLeft: "25px" }}>
                  Emotional Intelligence
                </li>
                <li style={{ listStyleType: "disc", marginLeft: "25px" }}>
                  Higher Happiness Score
                </li>
                <li style={{ listStyleType: "disc", marginLeft: "25px" }}>
                  Improved Productivity
                </li>
              </ul>
            </div>

            {/* Book a Demo Button */}
            <div className="pt-2">
              <a
                className="btn btn-primary btn-hover-primary"
                href="#member"
                onClick={scrollToForm}
                style={{
                  backgroundColor: "#07a64b",
                  borderColor: "#07a64b",
                  color: "#fff",
                  height: "52px",
                  lineHeight: "52px",
                  padding: "0 35px",
                  borderRadius: "5px",
                  fontSize: "15px",
                  fontWeight: 500,
                  display: "inline-block",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-mark {
          position: relative;
          z-index: 0;
          padding: 0 0 8px;
          color: inherit;
          background-color: transparent;
          display: inline-block;
        }

        .hero-mark::after {
          content: "";
          position: absolute;
          width: 96px;
          height: 12px;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          z-index: -1;
          background-image: url("/assets/images/headline-curve-02.svg");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        }

        .btn-hover-primary:hover {
          background-color: #05823a !important;
          border-color: #05823a !important;
        }
      `}</style>
    </div>
  );
}
