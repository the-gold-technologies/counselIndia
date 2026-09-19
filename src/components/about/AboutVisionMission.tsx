"use client";
import React from "react";

export default function AboutVisionMission() {
  return (
    <div className="academics-section bg-color-05 section-padding-01 scene">
      <div className="container custom-container">
        <div className="row g-6 justify-content-center">
          <div className="col-md-4 col-sm-6 col-12 mb-4 mb-md-0">
            {/* Academics Start */}
            <div
              className="academics-item text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <a href="javascript:void(0)" className="academics-item__link">
                <div className="academics-item__image position-relative overflow-hidden">
                  <img
                    src="https://prod-s3.counselindia.com/images/academics/vision.jpg"
                    alt="Vision"
                    width={370}
                    height={269}
                    className="img-fluid w-100"
                  />
                  <h3 className="academics-item__title">Vision</h3>
                </div>
                <div className="academics-item__description">
                  <p>To make &ldquo;Har Ghar Counselor&rdquo; a reality.</p>
                </div>
              </a>
            </div>
            {/* Academics End */}
          </div>

          <div className="col-md-4 col-sm-6 col-12">
            {/* Academics Start */}
            <div
              className="academics-item text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <a href="javascript:void(0)" className="academics-item__link">
                <div className="academics-item__image position-relative overflow-hidden">
                  <img
                    src="https://prod-s3.counselindia.com/images/academics/mission.jpg"
                    alt="Mission"
                    width={370}
                    height={269}
                    className="img-fluid w-100"
                  />
                  <h3 className="academics-item__title">Mission</h3>
                </div>
                <div className="academics-item__description">
                  <p>
                    To provide practical psychology education and counseling
                    skills, empowering at least one person in every home.
                  </p>
                </div>
              </a>
            </div>
            {/* Academics End */}
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-color-05 {
          background-color: #f8f8f8;
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

        .academics-item__link {
          display: block;
          color: inherit;
          text-decoration: none;
        }

        .academics-item__image {
          position: relative;
          overflow: hidden;
          border-radius: 5px;
        }

        .academics-item__image::before {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-image: linear-gradient(
            180deg,
            transparent 40%,
            rgba(0, 0, 0, 0.8)
          );
          z-index: 1;
        }

        .academics-item__image img {
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .academics-item:hover .academics-item__image img {
          transform: scale(1.1);
        }

        .academics-item__title {
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: 24px;
          line-height: 1.2;
          position: absolute;
          bottom: 20px;
          left: 15px;
          right: 15px;
          z-index: 2;
          color: #fff;
          margin: 0;
        }

        .academics-item__description {
          margin-top: 28px;
        }

        .academics-item__description p {
          color: #333;
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.75;
          margin: 0;
        }

        @media only screen and (max-width: 767px) {
          .academics-item__title {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
