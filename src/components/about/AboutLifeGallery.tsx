"use client";
import React from "react";
import { GALAXY_GALLERY } from "./data/aboutData";

export default function AboutLifeGallery() {
  // Duplicate the array to create a seamless, continuous infinite marquee
  const duplicatedGallery = [...GALAXY_GALLERY, ...GALAXY_GALLERY];

  return (
    <div className="testimonial-section galaxy section-padding-01 py-5 bg-white border-top">
      <div className="container custom-container py-3">
        {/* Section Title */}
        <div className="section-title mb-4">
          <h2 className="section-title__title font-size-34 fw-bold text-dark">
            <mark>Life at Counsel India</mark>
          </h2>
        </div>

        {/* Smooth Auto Sliding Marquee Track contained inside standard container padding */}
        <div className="gallery-marquee-container">
          <div className="gallery-marquee-track">
            {duplicatedGallery.map((imgSrc, idx) => (
              <div key={idx} className="gallery-item-wrapper px-2">
                <div className="galaxy-frame p-1 rounded-1 shadow-sm">
                  <img
                    src={imgSrc}
                    alt={`Life at Counsel India ${idx + 1}`}
                    width={360}
                    height={240}
                    className="d-block"
                    style={{
                      width: "350px",
                      height: "230px",
                      objectFit: "cover",
                      borderRadius: "2px",
                    }}
                  />
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

        .galaxy-frame {
          border: 1.5px solid #07a64b;
          background-color: #ffffff;
          transition: transform 0.3s ease;
        }

        .galaxy-frame:hover {
          transform: translateY(-4px);
        }

        .gallery-marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 8px 0 16px 0;
        }

        .gallery-marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 45s linear infinite;
        }

        .gallery-marquee-container:hover .gallery-marquee-track {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
