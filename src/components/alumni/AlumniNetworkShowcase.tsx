"use client";
import React from "react";
import Link from "next/link";
import { ALUMNI_NETWORK_ROW_1, ALUMNI_NETWORK_ROW_2 } from "./data/alumniData";

export default function AlumniNetworkShowcase() {
  const row1Duplicated = [...ALUMNI_NETWORK_ROW_1, ...ALUMNI_NETWORK_ROW_1];
  const row2Duplicated = [...ALUMNI_NETWORK_ROW_2, ...ALUMNI_NETWORK_ROW_2];

  return (
    <div
      className="aumninetwork alumni-network-section py-5 position-relative overflow-hidden w-100"
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
              letterSpacing: "0.5px",
            }}
          >
            ALUMNI NETWORK
          </h2>
        </div>

        {/* Marquee Rows Linking to /learners-network */}
        <div className="partners-active swiper-dots-style">
          <a
            href="https://www.counselindia.com/learners-network"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", textDecoration: "none" }}
          >
            <div
              className="alumni-marquee-wrapper mb-4"
              style={{ overflow: "hidden" }}
            >
              {/* Row 1 Marquee */}
              <div
                className="alumni-marquee-container mb-3"
                style={{ width: "100%", overflow: "hidden", position: "relative" }}
              >
                <div
                  className="alumni-marquee-track"
                  style={{
                    display: "flex",
                    width: "max-content",
                    gap: "10px",
                    animation: "scrollLeft 35s linear infinite",
                  }}
                >
                  {row1Duplicated.map((imgSrc, idx) => (
                    <div
                      key={`r1-${idx}`}
                      className="partner-logo"
                      style={{
                        flexShrink: 0,
                        width: "200px",
                        height: "200px",
                        overflow: "hidden",
                        borderRadius: "4px",
                      }}
                    >
                      <img
                        src={imgSrc}
                        alt={`Alumni member ${idx + 1}`}
                        width={200}
                        height={200}
                        className="d-block"
                        style={{
                          width: "200px",
                          height: "200px",
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
                    gap: "10px",
                    animation: "scrollLeft 35s linear infinite",
                  }}
                >
                  {row2Duplicated.map((imgSrc, idx) => (
                    <div
                      key={`r2-${idx}`}
                      className="partner-logo"
                      style={{
                        flexShrink: 0,
                        width: "200px",
                        height: "200px",
                        overflow: "hidden",
                        borderRadius: "4px",
                      }}
                    >
                      <img
                        src={imgSrc}
                        alt={`Alumni member ${idx + 1}`}
                        width={200}
                        height={200}
                        className="d-block"
                        style={{
                          width: "200px",
                          height: "200px",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </a>

          {/* Button Container */}
          <div className="button-container text-center py-4">
            <a
              href="https://www.counselindia.com/learners-network"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-hover-primary btn-bold text-white text-decoration-none shadow-sm"
              style={{
                backgroundColor: "#07a64b",
                color: "#ffffff",
                borderRadius: "8px",
                padding: "15px 42px",
                fontSize: "17px",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                cursor: "pointer",
              }}
            >
              Explore Entire Alumni Network
            </a>
          </div>
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
