"use client";
import React from "react";

export default function AboutVisionMission() {
  return (
    <div className="academics-section bg-color-05 section-padding-01 py-5">
      <div className="container custom-container py-4">
        <div className="row g-4 justify-content-center">
          {/* Vision Card */}
          <div className="col-lg-4 col-md-5 col-12">
            <div className="academics-item text-center">
              <a
                href="javascript:void(0)"
                className="academics-item__link text-decoration-none"
              >
                <div className="academics-item__image position-relative overflow-hidden rounded-2">
                  <img
                    src="https://prod-s3.counselindia.com/images/academics/vision.jpg"
                    alt="Vision"
                    width={370}
                    height={269}
                    className="w-100 img-fluid"
                    style={{ height: "260px", objectFit: "cover" }}
                  />
                  <h3 className="academics-item__title mb-0">Vision</h3>
                </div>
                <div className="academics-item__description mt-3">
                  <p className="font-size-15 text-muted mb-0">
                    To make &ldquo;Har Ghar Counselor&rdquo; a reality.
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Mission Card */}
          <div className="col-lg-4 col-md-5 col-12">
            <div className="academics-item text-center">
              <a
                href="javascript:void(0)"
                className="academics-item__link text-decoration-none"
              >
                <div className="academics-item__image position-relative overflow-hidden rounded-2">
                  <img
                    src="https://prod-s3.counselindia.com/images/academics/mission.jpg"
                    alt="Mission"
                    width={370}
                    height={269}
                    className="w-100 img-fluid"
                    style={{ height: "260px", objectFit: "cover" }}
                  />
                  <h3 className="academics-item__title mb-0">Mission</h3>
                </div>
                <div className="academics-item__description mt-3">
                  <p className="font-size-15 text-muted mb-0">
                    To provide practical psychology education and counseling skills, empowering at least one
                    person in every home.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-color-05 {
          background-color: #f7f9f8;
        }

        .academics-item__link {
          display: block;
        }

        .academics-item__image {
          position: relative;
          overflow: hidden;
          border-radius: 6px;
        }

        .academics-item__image::before {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-image: linear-gradient(180deg, transparent 40%, rgba(0, 0, 0, 0.85));
          z-index: 1;
        }

        .academics-item__image img {
          transition: transform 1.2s cubic-bezier(0, 0, 0.2, 1);
          width: 100%;
        }

        .academics-item:hover .academics-item__image img {
          transform: scale(1.08);
        }

        .academics-item__title {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          font-size: 26px;
          line-height: 1.4;
          position: absolute;
          bottom: 20px;
          left: 15px;
          right: 15px;
          z-index: 2;
          color: #ffffff;
          font-weight: 700;
          text-align: center;
        }

        .academics-item__description {
          margin-top: 20px;
        }

        .academics-item__description p {
          color: #475569;
          font-size: 15px;
          line-height: 1.5;
        }

        @media (max-width: 767px) {
          .academics-item__title {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}
