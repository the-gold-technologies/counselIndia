"use client";
import React from "react";
import { ALUMNI_SERVICES } from "./data/alumniData";

export default function AlumniServices() {
  return (
    <div className="services-section section-padding-01 py-5 bg-white border-top">
      <div className="container custom-container py-3">
        {/* Section Title */}
        <div className="section-title text-center mb-5">
          <h2 className="section-title__title font-size-36 fw-bold text-dark text-uppercase mb-0">
            SERVICES
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="row g-4 justify-content-center">
          {ALUMNI_SERVICES.map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-3 col-md-6 col-12">
              <div className="alumni-service-card bg-white h-100 d-flex flex-column text-center">
                {/* Inset Image with Rounded Corners */}
                <div className="alumni-service-card__img-container p-2 pb-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={320}
                    height={210}
                    className="w-100 d-block"
                    style={{
                      height: "210px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="alumni-service-card__body p-4 pt-3 d-flex flex-column flex-grow-1">
                  <h3 className="alumni-service-card__title font-size-20 fw-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="alumni-service-card__desc font-size-15 lh-base mb-0 flex-grow-1">
                    {item.description}
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
          font-size: 36px;
          color: #212529;
          letter-spacing: 0.5px;
        }

        .alumni-service-card {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .alumni-service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
        }

        .alumni-service-card__title {
          font-family: var(--font-inter), sans-serif;
          color: #1e293b;
          font-size: 20px;
          font-weight: 700;
        }

        .alumni-service-card__desc {
          font-family: var(--font-inter), sans-serif;
          color: #374151;
          font-size: 15px;
          line-height: 1.65;
        }
      `}</style>
    </div>
  );
}
