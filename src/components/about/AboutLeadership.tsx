"use client";
import React from "react";
import { LEADERS } from "./data/aboutData";

export default function AboutLeadership() {
  return (
    <section className="team-section py-5 bg-white">
      <div className="container custom-container py-3">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="section-title__title font-size-36 fw-bold text-dark">
            <mark>Meet the Visionaries Behind Counsel India</mark>
          </h2>
        </div>

        {/* 4 Leaders Grid */}
        <div className="row g-4 justify-content-center">
          {LEADERS.map((leader) => (
            <div key={leader.id} className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="team-item bg-white rounded-4 overflow-hidden shadow-sm border border-light-subtle h-100 text-center transition-leader">
                {/* Photo & Social Overlay */}
                <div className="team-item__image position-relative overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    width={270}
                    height={332}
                    className="w-100 img-fluid leader-img"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="team-item__social position-absolute bottom-0 start-0 w-100 p-2 bg-dark bg-opacity-75 text-white d-flex align-items-center justify-content-center">
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-decoration-none font-size-13 fw-semibold d-inline-flex align-items-center"
                    >
                      LinkedIn <i className="fab fa-linkedin ms-2 font-size-16 text-info"></i>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="team-item__content p-4">
                  <h3 className="team-item__name font-size-18 fw-bold text-dark mb-1">
                    {leader.name}
                  </h3>
                  <p className="team-item__position font-size-14 text-success fw-semibold mb-0">
                    {leader.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .transition-leader {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .transition-leader:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1) !important;
          border-color: rgba(7, 166, 75, 0.3) !important;
        }

        .transition-leader:hover .leader-img {
          transform: scale(1.04);
          transition: transform 0.4s ease;
        }
      `}</style>
    </section>
  );
}
