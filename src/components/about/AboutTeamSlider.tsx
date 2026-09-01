"use client";
import React from "react";
import { CORE_TEAM, LEGAL_TEAM } from "./data/aboutData";

export default function AboutTeamSlider() {
  return (
    <>
      {/* Core Team Section */}
      <div className="team-section section-padding-02 py-5 bg-white border-top">
        <div className="container custom-container py-3">
          <div className="section-title mb-4">
            <h2 className="section-title__title font-size-34 fw-bold text-dark">
              Meet <mark>Our Core Team</mark>
            </h2>
          </div>

          <div className="row g-4 justify-content-start">
            {CORE_TEAM.map((member) => (
              <div
                key={member.id}
                className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12"
              >
                <div className="speaker-item text-center">
                  <div className="speaker-item__thumbnail mb-3 d-inline-block">
                    <img
                      src={member.image}
                      alt={member.name}
                      width={170}
                      height={170}
                      className="rounded-circle"
                      style={{
                        width: "170px",
                        height: "170px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="speaker-item__content">
                    <h6 className="speaker-item__name font-size-18 fw-bold text-dark mb-1">
                      {member.name}
                    </h6>
                    <p className="speaker-item__designation font-size-14 text-muted mb-0">
                      {member.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legal Team Section */}
      <div className="team-section section-padding-02 py-5 bg-white border-top">
        <div className="container custom-container py-3">
          <div className="section-title mb-4">
            <h2 className="section-title__title font-size-34 fw-bold text-dark">
              <mark>Our Legal Team</mark>
            </h2>
          </div>

          <div className="row g-4 justify-content-start">
            {LEGAL_TEAM.map((member) => (
              <div
                key={member.id}
                className="col-lg-3 col-md-4 col-sm-6 col-12"
                style={{ marginRight: "30px" }}
              >
                <div className="speaker-item text-center">
                  <div className="speaker-item__thumbnail mb-3 d-inline-block">
                    <img
                      src={member.image}
                      alt={member.name}
                      width={170}
                      height={170}
                      className="rounded-circle"
                      style={{
                        width: "170px",
                        height: "170px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="speaker-item__content">
                    <h6 className="speaker-item__name font-size-18 fw-bold text-dark mb-1">
                      {member.name}
                    </h6>
                    <p className="speaker-item__designation font-size-14 text-muted mb-0">
                      {member.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-title__title {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          font-size: 34px;
          color: #212529;
          line-height: 1.3;
        }

        .speaker-item__thumbnail img {
          border-radius: 50%;
        }
      `}</style>
    </>
  );
}
