"use client";
import React from "react";
import { ACCREDITATIONS } from "./data/aboutData";

export default function AboutAccreditations() {
  const row1 = ACCREDITATIONS.slice(0, 4);
  const row2 = ACCREDITATIONS.slice(4);

  return (
    <div className="section-padding-01 py-5 bg-white border-top">
      <div className="container custom-container py-3">
        {/* Section Title */}
        <div className="section-title mb-4">
          <h2 className="section-title__title font-size-34 fw-bold text-dark">
            <mark>Accreditations</mark>
          </h2>
        </div>

        {/* First Row: 4 Cards */}
        <div className="row g-4 mb-4">
          {row1.map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-3 col-md-6 col-12">
              <div className="accreditation-card">
                <h3 className="accreditation-title mb-2">
                  {item.title}
                </h3>
                <p className="accreditation-number mb-0">
                  {item.number}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: 2 Centered Cards */}
        <div className="row g-4 justify-content-center">
          {row2.map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="accreditation-card">
                <h3 className="accreditation-title mb-2">
                  {item.title}
                </h3>
                <p className="accreditation-number mb-0">
                  {item.number}
                </p>
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

        .accreditation-card {
          background-color: #e7f6ed;
          border-top: 5px solid #00a651;
          border-radius: 12px;
          padding: 26px 28px;
          transition: transform 0.2s ease;
        }

        .accreditation-card:hover {
          transform: translateY(-3px);
        }

        .accreditation-title {
          font-family: var(--font-inter), sans-serif;
          color: #1e293b;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.2px;
        }

        .accreditation-number {
          font-family: var(--font-inter), sans-serif;
          color: #374151;
          font-size: 17px;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
}
