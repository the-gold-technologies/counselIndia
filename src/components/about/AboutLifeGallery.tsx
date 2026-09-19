"use client";
import React from "react";
import { GALAXY_GALLERY } from "./data/aboutData";

export default function AboutLifeGallery() {
  const duplicatedGallery = [...GALAXY_GALLERY, ...GALAXY_GALLERY];

  return (
    <div className="testimonial-section galaxy section-padding-01 scene">
      <div className="container">
        {/* Section Title */}
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="section-title__title">
            Life at <mark>Counsel India</mark>
          </h2>
        </div>

        {/* Gallery Slider / Marquee */}
        <div className="gallery-marquee-container">
          <div className="gallery-marquee-track">
            {duplicatedGallery.map((imgSrc, idx) => (
              <div key={idx} className="gallery-item-wrapper px-2">
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
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-padding-01 {
          padding-top: 50px;
          padding-bottom: 50px;
        }

        .section-title {
          margin-bottom: 37px;
        }

        .section-title__title {
          font-family: "Playfair Display", serif;
          font-size: 28px;
          line-height: 1.5;
          font-weight: 700;
          color: #232937;
        }

        .section-title__title mark {
          position: relative;
          z-index: 0;
          padding: 0 0 10px;
          color: inherit;
          background-color: transparent;
          display: inline-block;
        }

        .section-title__title mark::after {
          content: "";
          position: absolute;
          width: 91px;
          height: 12px;
          bottom: 0;
          left: 50%;
          z-index: -1;
          transform: translate(-45px);
          background-color: #07a64b;
          mask-repeat: no-repeat;
          mask-size: contain;
          mask-image: url("https://www.counselindia.com/assets/images/headline-curve-02.svg");
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          -webkit-mask-image: url("https://www.counselindia.com/assets/images/headline-curve-02.svg");
        }

        .galaxy img {
          padding: 5px;
          border: 1px solid #07a64b;
          background: #fff;
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
