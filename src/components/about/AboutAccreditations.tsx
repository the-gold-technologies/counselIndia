"use client";
import React from "react";
import { ACCREDITATIONS } from "./data/aboutData";

export default function AboutAccreditations() {
  return (
    <section className="accreditation-section py-5 bg-white">
      <div className="container custom-container py-3">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="section-title__title font-size-36 fw-bold text-dark">
            <mark>Accreditations</mark>
          </h2>
        </div>

        {/* 6 Accreditation Cards */}
        <div className="row g-4 justify-content-center">
          {ACCREDITATIONS.map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-4 col-sm-6 col-12">
              <div className="categories-item h-100">
                <div className="categories-item__link p-4 rounded-3 h-100 shadow-sm transition-accreditation">
                  <div className="categories-item__info">
                    <h3 className="categories-item__name font-size-17 fw-bold text-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="categories-item-02__description font-size-15 fw-bold text-success mb-0">
                      {item.number}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .categories-item__link {
          border-top: 5px solid #07a64b;
          background-color: #e7f6ed;
          border-left: none;
        }

        .transition-accreditation {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .transition-accreditation:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(7, 166, 75, 0.12) !important;
        }
      `}</style>
    </section>
  );
}
