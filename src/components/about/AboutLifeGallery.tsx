"use client";
import React from "react";
import { GALAXY_GALLERY } from "./data/aboutData";

export default function AboutLifeGallery() {
  return (
    <section className="galaxy-section py-5 bg-white">
      <div className="container custom-container py-3">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="section-title__title font-size-36 fw-bold text-dark">
            Life at <mark>Counsel India</mark>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="row g-3 justify-content-center">
          {GALAXY_GALLERY.map((imgSrc, idx) => (
            <div key={idx} className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="gallery-card rounded-4 overflow-hidden shadow-sm position-relative">
                <img
                  src={imgSrc}
                  alt={`Life at Counsel India ${idx + 1}`}
                  width={300}
                  height={220}
                  className="w-100 img-fluid gallery-img"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .gallery-card:hover .gallery-img {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}
