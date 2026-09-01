"use client";
import React from "react";
import { LEADERS } from "./data/aboutData";

export default function AboutLeadership() {
  return (
    <div className="team-section section-padding-02 py-5 bg-white">
      <div className="container custom-container py-3">
        {/* Section Title Start */}
        <div className="section-title mb-4">
          <h2 className="section-title__title font-size-34 fw-bold text-dark">
            <mark>Meet the Visionaries Behind Counsel India</mark>
          </h2>
        </div>

        {/* Leaders Grid */}
        <div className="row gy-6 g-4">
          {LEADERS.map((leader) => (
            <div
              key={leader.id}
              className="col-lg-3 col-md-4 col-sm-6 col-12"
              style={{ marginRight: "30px" }}
            >
              <div className="team-item text-center">
                <div className="team-item__image position-relative overflow-hidden rounded-2">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    width={270}
                    height={332}
                    className="img-fluid w-100"
                    style={{
                      height: "300px",
                      objectFit: "cover",
                      borderRadius: "6px",
                    }}
                  />
                  <div className="team-item__social position-absolute bottom-0 start-0 w-100 p-2 bg-dark bg-opacity-75 text-white d-flex align-items-center justify-content-center">
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-decoration-none font-size-13 fw-semibold d-inline-flex align-items-center"
                    >
                      Linkedin <i className="fab fa-linkedin ms-2 text-info"></i>
                    </a>
                  </div>
                </div>
                <div className="team-item__content mt-3">
                  <h3 className="team-item__name font-size-18 fw-bold text-dark mb-1">
                    {leader.name}
                  </h3>
                  <p className="team-item__position font-size-14 text-muted mb-0">
                    {leader.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-title__title {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          font-size: 34px;
          color: #212529;
          line-height: 1.3;
        }
      `}</style>
    </div>
  );
}
