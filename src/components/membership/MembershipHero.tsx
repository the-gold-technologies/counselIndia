"use client";
import React from "react";

export default function MembershipHero() {
  return (
    <>
      <div className="edumall-box-section section-padding-02 membership-hero-section">
        <div className="container custom-container custom-container222">
          <div className="row">
            <div className="container">
              <div className="col-lg-12">
                {/* Section Title Start */}
                <div className="section-title">
                  <h6 className="mt-2 primary-text-color">
                    Let Your Life Overflow with Emotional Richness and Wellness
                  </h6>
                  <h1 className="section-title__title-03 heroheading">
                    Find the life you&apos;ve <br /> been looking for!
                  </h1>
                  <a
                    className="btn btn-primary btn-hover-primary"
                    style={{ marginTop: "3%", display: "inline-block" }}
                    href="#member"
                  >
                    Invest In Yourself
                  </a>
                  <img
                    className="download-content-02__arrow"
                    src="/assets/images/secondary-arrow.png"
                    alt="Arrow"
                  />
                </div>
                {/* Section Title End */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .membership-hero-section {
          background-image: url("https://prod-s3.counselindia.com/mastergalaxyimages/WhatsApp%20Image%202024-09-10%20at%2014.56.31_1725969793.jpeg");
          background-size: cover;
          background-position: center;
          max-width: 100%;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .custom-container222 {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -40%);
          width: 100%;
        }

        .primary-text-color {
          color: #07a64b !important;
          font-family: "Poppins", sans-serif;
          font-weight: 500;
          font-size: 16px;
          line-height: 1.2;
        }

        .heroheading {
          font-family: "Playfair Display", serif;
          font-size: 60px !important;
          font-weight: 700;
          line-height: 1.3;
          color: #232937;
          margin: 0;
        }

        .download-content-02__arrow {
          position: absolute;
          left: -90px;
          bottom: 50px;
          width: 76px;
          height: 68px;
          pointer-events: none;
        }

        @media (max-width: 1399px) {
          .download-content-02__arrow {
            left: -60px;
          }
        }

        @media (max-width: 991px) {
          .download-content-02__arrow {
            display: none !important;
          }
        }

        /* Media query for mobile view */
        @media (max-width: 768px) {
          .membership-hero-section {
            background-image: url("https://prod-s3.counselindia.com/mastergalaxyimages/2_1725521806.png") !important;
            background-size: cover !important;
            background-position: center !important;
            height: 480px;
          }

          .custom-container222 {
            left: 50% !important;
            top: 30% !important;
            transform: translate(-50%, -40%) !important;
            text-align: center !important;
          }

          .heroheading {
            font-size: 40px !important;
          }

          .download-content-02__arrow {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
