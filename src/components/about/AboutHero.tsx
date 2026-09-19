"use client";
import React from "react";

export default function AboutHero() {
  return (
    <div className="page-banner bg-white">
      <div className="page-banner__wrapper">
        {/* About Section Start */}
        <div className="about-section section-padding-01">
          <div className="container custom-container">
            <h2
              className="about-section-title__main-title"
              style={{ textAlign: "center" }}
            >
              Counsel India: Your Go-To Platform for
              <br />
              Practical Psychology Learning
            </h2>

            <div
              className="about-image text-center position-relative d-block mx-auto"
              style={{ maxWidth: "1171px" }}
            >
              <div className="about-image__image position-relative z-1">
                <img
                  src="https://prod-s3.counselindia.com/mastergalaxyimages/Website%20Collage%20(3)_1726220892.png"
                  alt="About Counsel India"
                  width={1171}
                  height={619}
                  className="img-fluid w-100"
                  style={{ height: "auto", objectFit: "cover" }}
                />
              </div>

              {/* Decorative Shapes matching counselindia.com/about exact positions */}
              <img
                className="about-image__shape-01 position-absolute d-none d-lg-block"
                src="https://prod-s3.counselindia.com/images/shape/edumall-shape-01.png"
                alt="Shape"
                width={179}
                height={178}
                style={{
                  top: "auto",
                  left: "auto",
                  right: "-20px",
                  bottom: "120px",
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />
              <img
                className="about-image__shape-02 position-absolute d-none d-lg-block"
                src="https://prod-s3.counselindia.com/images/shape/edumall-shape-grid-dots.png"
                alt="Shape"
                width={417}
                height={371}
                style={{
                  top: "auto",
                  left: "auto",
                  right: "30%",
                  bottom: "0px",
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
        .page-banner {
          position: relative;
          overflow: hidden;
          z-index: 1;
          margin-top: 40px !important;
        }

        .page-breadcrumb .breadcrumb {
          margin-bottom: 0;
          padding-top: 16px;
          padding-bottom: 16px;
        }

        .about-section {
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .section-padding-01 {
          padding-top: 50px;
          padding-bottom: 50px;
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
          font-weight: 700;
          line-height: 1.4;
          color: #232937;
          margin-top: -8px;
          margin-bottom: 0;
          padding: 0;
        }

        .about-image {
          position: relative;
          z-index: 1;
          margin-top: 0;
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .about-section-title__main-title {
            font-size: 28px;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .about-section-title__main-title {
            font-size: 32px;
          }
        }

        @media only screen and (max-width: 767px) {
          .about-section-title__main-title {
            font-size: 28px;
          }
          .section-padding-01 {
            padding-top: 30px;
            padding-bottom: 30px;
          }
        }

        @media only screen and (max-width: 575px) {
          .about-section-title__main-title {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
}
