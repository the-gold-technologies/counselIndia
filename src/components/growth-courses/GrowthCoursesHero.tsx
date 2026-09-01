"use client";
import React from "react";

export default function GrowthCoursesHero() {
  return (
    <div className="campus-wrapper scene bg-imgg">
      <div className="campus">
        <div className="row gy-6 flex-row-reverse align-items-center">
          {/* Right Column: Campus Image */}
          <div className="col-md-6">
            <div className="campus-image" style={{ marginRight: "2%" }}>
              <div className="campus-image__image text-center text-md-end">
                <img
                  src="https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/mastergalaxyimages/blue.webp"
                  alt="Campus"
                  width={1050}
                  height={775}
                  className="img-fluid"
                  style={{ maxWidth: "1050px", width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* Left Column: Heading & Tagline */}
          <div className="col-md-6">
            <div className="campus-widget">
              <div className="campus-widget-item">
                <div className="campus-widget-item__content">
                  <div className="section-title">
                    <h6 className="mt-2 primary-text-color font-size-20 fw-semibold mb-3">
                      Gain a deeper understanding of human behaviour
                    </h6>

                    <h1 className="section-title__title-03 heroheading fw-bold mb-0">
                      Growth Courses to Help You Think Like a Psychologist and
                      Solve Minds Effortlessly!
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .campus-wrapper {
          background-color: #e6f6ed;
          padding: 50px 20px;
          position: relative;
          overflow: hidden;
        }

        .campus {
          max-width: 1320px;
          margin: 0 auto;
          width: 100%;
        }

        .primary-text-color {
          color: #07a64b !important;
          font-size: 20px !important;
          letter-spacing: 0.2px;
        }

        .section-title__title-03.heroheading {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          font-size: 37px;
          line-height: 1.4;
          color: #212529;
          font-weight: 700;
        }

        .campus-widget {
          padding: 0 40px 0 20px;
        }

        .campus-widget-item__content {
          padding-left: 0;
        }

        @media (max-width: 1199px) {
          .section-title__title-03.heroheading {
            font-size: 34px;
          }
        }

        @media (max-width: 991px) {
          .section-title__title-03.heroheading {
            font-size: 28px;
          }
          .campus-widget {
            padding: 0 15px;
          }
        }

        @media (max-width: 575px) {
          .campus-wrapper {
            padding: 35px 15px;
          }
          .section-title__title-03.heroheading {
            font-size: 24px;
          }
          .primary-text-color {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
}
