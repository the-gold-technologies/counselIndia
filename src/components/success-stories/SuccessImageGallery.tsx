"use client";
import React from "react";
import { successImages } from "./data/successStoriesData";

export default function SuccessImageGallery() {
  return (
    <div className="image-section py-5 bg-white">
      <div className="container custom-container py-2">
        {/* Title with Exact Counsel India Mark Headline Curve */}
        <div className="text-start mb-4">
          <h2
            className="section-title__title"
            style={{
              fontSize: "clamp(26px, 3.2vw, 34px)",
              fontWeight: 700,
              fontFamily:
                "Georgia, 'Playfair Display', 'Times New Roman', serif",
              color: "#1e293b",
              margin: 0,
            }}
          >
            <mark>Stories that inspire</mark>
          </h2>
        </div>

        {/* 3-Column Image Grid matching Live Website */}
        <div className="grid-container">
          {successImages.map((item) => (
            <div key={item.id} className="grid-item">
              <img
                src={item.image}
                alt="Counsel India Success Story"
                width={400}
                height={280}
                className="gallery-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
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
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
          -webkit-mask-image: url(/assets/images/headline-curve-02.svg);
          mask-image: url(/assets/images/headline-curve-02.svg);
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .grid-item {
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          overflow: hidden;
          background-color: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .grid-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        }

        .grid-item img {
          width: 100%;
          height: 100%;
          min-height: 240px;
          max-height: 380px;
          object-fit: contain;
          display: block;
          background-color: #ffffff;
        }

        @media (max-width: 992px) {
          .grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .grid-container {
            display: block !important;
          }
          .grid-item {
            margin-bottom: 16px;
          }
        }
      `}</style>
    </div>
  );
}
