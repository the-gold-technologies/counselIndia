"use client";
import React from "react";
import { WORK_CULTURE_TESTIMONIALS } from "./data/aboutData";

export default function AboutWorkCulture() {
  return (
    <section className="work-culture-section py-5 bg-light-subtle">
      <div className="container custom-container py-3">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="section-title__title font-size-36 fw-bold text-dark">
            Progressive Work Culture at <mark>Counsel India</mark>
          </h2>
        </div>

        {/* 6 Testimonial Cards Grid */}
        <div className="row g-4 justify-content-center">
          {WORK_CULTURE_TESTIMONIALS.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-12">
              <div className="testimonial-item bg-white p-4 rounded-4 shadow-sm border border-light-subtle h-100 d-flex flex-column transition-testimonial">
                <div className="testimonial-quote-icon mb-3 text-success font-size-28">
                  <i className="fas fa-quote-left"></i>
                </div>

                <div className="testimonial-main-content flex-grow-1 d-flex flex-column">
                  <div className="testimonial-caption mb-4 flex-grow-1">
                    <h4 className="font-size-18 fw-bold text-dark mb-2">
                      {item.title}
                    </h4>
                    <p className="font-size-14 text-muted lh-base mb-0 text-justify">
                      {item.description}
                    </p>
                  </div>

                  <div className="testimonial-info d-flex align-items-center pt-3 border-top mt-auto">
                    <div className="testimonial-info__image me-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-circle shadow-sm border border-2 border-success-subtle"
                        style={{ objectFit: "cover", width: "50px", height: "50px" }}
                      />
                    </div>
                    <div className="testimonial-info__caption">
                      <h6 className="font-size-15 fw-bold text-dark mb-0">
                        {item.name}
                      </h6>
                      <p className="font-size-13 text-success fw-medium mb-0">
                        {item.department}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .transition-testimonial {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .transition-testimonial:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08) !important;
          border-color: rgba(7, 166, 75, 0.3) !important;
        }
      `}</style>
    </section>
  );
}
