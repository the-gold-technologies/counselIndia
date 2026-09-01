"use client";
import React from "react";

export default function AboutHero() {
  return (
    <div className="page-banner">
      <div className="page-banner__wrapper scene bg-white">
        {/* About Section Start */}
        <div className="about-section section-padding-01 py-5">
          <div className="container custom-container py-3">
            <h2
              className="about-section-title__main-title text-center mb-5"
              style={{ textAlign: "center" }}
            >
              Counsel India: Your Go-To Platform for
              <br />
              Practical Psychology Learning
            </h2>

            <div className="about-image scene text-center position-relative d-block mx-auto" style={{ maxWidth: "1171px" }}>
              <div className="about-image__image position-relative z-1">
                <img
                  src="https://prod-s3.counselindia.com/mastergalaxyimages/Website%20Collage%20(3)_1726220892.png"
                  alt="About Counsel India"
                  width={1171}
                  height={619}
                  className="img-fluid w-100 rounded-3"
                  style={{ height: "auto", objectFit: "cover" }}
                />
              </div>

              {/* Parallax Shape Decorations */}
              <img
                className="about-image__shape-01 position-absolute d-none d-lg-block"
                src="/assets/images/shape/edumall-shape-01.png"
                alt="Shape"
                width={179}
                height={178}
                style={{
                  top: "-30px",
                  left: "-40px",
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />
              <img
                className="about-image__shape-02 position-absolute d-none d-lg-block"
                src="/assets/images/shape/edumall-shape-grid-dots.png"
                alt="Shape"
                width={417}
                height={371}
                style={{
                  bottom: "-50px",
                  right: "-50px",
                  zIndex: 0,
                  pointerEvents: "none",
                  opacity: 0.7,
                }}
              />
            </div>
          </div>
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

        @media (max-width: 1199px) {
          .about-section-title__main-title {
            font-size: 32px;
          }
        }

        @media (max-width: 767px) {
          .about-section-title__main-title {
            font-size: 26px;
          }
        }

        @media (max-width: 575px) {
          .about-section-title__main-title {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
}
