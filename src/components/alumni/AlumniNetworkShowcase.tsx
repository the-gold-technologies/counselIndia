"use client";
import React from "react";
import Link from "next/link";
import { ALUMNI_NETWORK_ROW_1, ALUMNI_NETWORK_ROW_2 } from "./data/alumniData";

export default function AlumniNetworkShowcase() {
  const row1Duplicated = [...ALUMNI_NETWORK_ROW_1, ...ALUMNI_NETWORK_ROW_1];
  const row2Duplicated = [...ALUMNI_NETWORK_ROW_2, ...ALUMNI_NETWORK_ROW_2];

  return (
    <div
      className="alumni-network-section py-5 position-relative overflow-hidden w-100"
      style={{
        background: "linear-gradient(to top, #85ecab, #ffffff)",
        width: "100%",
      }}
    >
      <div className="container custom-container py-3">
        {/* Section Title */}
        <div className="section-title text-center mb-5">
          <h2
            className="section-title__title font-size-36 fw-bold text-dark text-uppercase mb-0"
            style={{
              fontFamily: "Georgia, 'Playfair Display', serif",
              fontSize: "36px",
              color: "#212529",
            }}
          >
            ALUMNI NETWORK
          </h2>
        </div>

        {/* Both Marquee Rows with NO Gap and Taller Height */}
        <div
          className="alumni-marquee-wrapper mb-5"
          style={{ overflow: "hidden", borderRadius: "4px" }}
        >
          {/* Row 1 Marquee */}
          <div
            className="alumni-marquee-container mb-5"
            style={{ width: "100%", overflow: "hidden", position: "relative" }}
          >
            <div
              className="alumni-marquee-track"
              style={{
                display: "flex",
                width: "max-content",
                gap: "0px",
                animation: "scrollLeft 35s linear infinite",
              }}
            >
              {row1Duplicated.map((imgSrc, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="alumni-photo-item"
                  style={{ flexShrink: 0, overflow: "hidden" }}
                >
                  <img
                    src={imgSrc}
                    alt={`Alumni member ${idx + 1}`}
                    width={200}
                    height={210}
                    className="d-block"
                    style={{
                      width: "190px",
                      height: "210px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 Marquee */}
          <div
            className="alumni-marquee-container"
            style={{ width: "100%", overflow: "hidden", position: "relative" }}
          >
            <div
              className="alumni-marquee-track"
              style={{
                display: "flex",
                width: "max-content",
                gap: "0px",
                animation: "scrollLeft 35s linear infinite",
              }}
            >
              {row2Duplicated.map((imgSrc, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="alumni-photo-item"
                  style={{ flexShrink: 0, overflow: "hidden" }}
                >
                  <img
                    src={imgSrc}
                    alt={`Alumni member ${idx + 1}`}
                    width={200}
                    height={210}
                    className="d-block"
                    style={{
                      width: "190px",
                      height: "210px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Button (Guaranteed Solid Green Button with inline styles) */}
        <div className="d-flex justify-content-center py-4">
          <Link
            href=" /learners-network"
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-white text-decoration-none shadow-sm"
            style={{
              backgroundColor: "#07a64b",
              color: "#ffffff",
              borderRadius: "10px",
              padding: "16px 44px",
              fontSize: "18px",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              cursor: "pointer",
            }}
          >
            Explore Entire Alumni Network
          </Link>
        </div>
      </div>

      <style jsx>{`
        .alumni-marquee-container:hover .alumni-marquee-track {
          animation-play-state: paused;
        }

        @keyframes scrollLeft {
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
