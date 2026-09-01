"use client";
import React from "react";
import { CORE_TEAM, LEGAL_TEAM } from "./data/aboutData";

export default function AboutTeamSlider() {
  return (
    <section className="team-sliders-section py-5 bg-light-subtle">
      <div className="container custom-container py-3">
        {/* Core Team Section */}
        <div className="text-center mb-5">
          <h2 className="section-title__title font-size-36 fw-bold text-dark">
            Meet <mark>Our Core Team</mark>
          </h2>
        </div>

        <div className="row g-4 justify-content-center mb-5">
          {CORE_TEAM.map((member) => (
            <div key={member.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="speaker-item bg-white p-3 rounded-4 shadow-sm border border-light-subtle text-center h-100 transition-hover">
                <div className="speaker-item__thumbnail mb-3 d-inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={130}
                    height={130}
                    className="rounded-circle shadow-sm border border-2 border-success-subtle"
                    style={{ objectFit: "cover", width: "130px", height: "130px" }}
                  />
                </div>
                <div className="speaker-item__content">
                  <h6 className="speaker-item__name font-size-15 fw-bold text-dark mb-1">
                    {member.name}
                  </h6>
                  <p className="speaker-item__designation font-size-13 text-muted mb-0">
                    {member.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Team Section */}
        <div className="text-center mb-5 pt-3">
          <h2 className="section-title__title font-size-36 fw-bold text-dark">
            Our <mark>Legal Team</mark>
          </h2>
        </div>

        <div className="row g-4 justify-content-center">
          {LEGAL_TEAM.map((member) => (
            <div key={member.id} className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="speaker-item bg-white p-4 rounded-4 shadow-sm border border-light-subtle text-center h-100 transition-hover">
                <div className="speaker-item__thumbnail mb-3 d-inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={140}
                    height={140}
                    className="rounded-circle shadow-sm border border-2 border-success-subtle"
                    style={{ objectFit: "cover", width: "140px", height: "140px" }}
                  />
                </div>
                <div className="speaker-item__content">
                  <h6 className="speaker-item__name font-size-17 fw-bold text-dark mb-1">
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

      <style jsx>{`
        .transition-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .transition-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08) !important;
        }
      `}</style>
    </section>
  );
}
