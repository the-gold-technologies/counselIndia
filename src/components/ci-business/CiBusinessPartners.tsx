"use client";
import React from "react";

const PARTNERS = [
  {
    name: "Accenture",
    logo: "https://prod-s3.counselindia.com/bootcamp/Accenture_logo_PNG1-removebg-preview.png",
    height: 34,
  },
  {
    name: "Britannia",
    logo: "https://prod-s3.counselindia.com/bootcamp/britannia-industries6604-removebg-preview.png",
    height: 40,
  },
  {
    name: "Google",
    logo: "https://prod-s3.counselindia.com/bootcamp/Current-Google-logo-2015-2023-600x203-removebg-preview.png",
    height: 48,
  },
  {
    name: "Deloitte",
    logo: "https://prod-s3.counselindia.com/bootcamp/Deloitte-Logo-2003-removebg-preview.png",
    height: 32,
  },
  {
    name: "Hitachi",
    logo: "https://prod-s3.counselindia.com/bootcamp/Hitachi-logo-removebg-preview.png",
    height: 30,
  },
  {
    name: "Pepperfry",
    logo: "https://prod-s3.counselindia.com/bootcamp/images__4_-removebg-preview.png",
    height: 38,
  },
];

export default function CiBusinessPartners() {
  // Seamless loop with 4 repetitions
  const marqueeItems = [
    ...PARTNERS,
    ...PARTNERS,
    ...PARTNERS,
    ...PARTNERS,
  ];

  return (
    <div className="partners-section py-5 bg-white overflow-hidden w-100">
      <div className="container custom-container py-2">
        {/* Section Title with Authentic Headline Curve Mark */}
        <div
          className="section-title text-center mb-5"
          style={{ marginTop: "10px" }}
        >
          <h2
            className="section-title__title-02 m-0 d-inline-block"
            style={{
              fontSize: "clamp(26px, 3.2vw, 34px)",
              color: "#1e2532",
              fontWeight: 700,
              fontFamily:
                "'Playfair Display', Georgia, 'Times New Roman', serif",
            }}
          >
            <mark className="partner-mark">
              Organizations that trust our trainers
            </mark>
          </h2>
        </div>

        {/* Marquee Track Container */}
        <div
          className="marquee-container position-relative overflow-hidden w-100 py-3"
          style={{ width: "100%" }}
        >
          <div className="marquee-content d-flex align-items-center">
            {marqueeItems.map((partner, idx) => (
              <div
                key={idx}
                className="marquee-item flex-shrink-0 d-flex align-items-center justify-content-center px-2 px-md-3"
                style={{ width: "130px", minWidth: "130px" }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    height: `${partner.height}px`,
                    maxWidth: "120px",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .partner-mark {
          position: relative;
          z-index: 0;
          padding: 0 0 8px;
          color: inherit;
          background-color: transparent;
          display: inline-block;
        }

        .partner-mark::after {
          content: "";
          position: absolute;
          width: 96px;
          height: 12px;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          z-index: -1;
          background-image: url("/assets/images/headline-curve-02.svg");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        }

        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-content {
          display: flex;
          width: max-content;
          animation: scrollMarquee 25s linear infinite;
        }

        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }

        @keyframes scrollMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
