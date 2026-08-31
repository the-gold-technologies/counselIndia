"use client";
import React from "react";

export default function SignedMous() {
  const mouList = [
    { id: 1, image: "/assets/images/mou-signed/1.png", alt: "Galgotias University MOU" },
    { id: 2, image: "/assets/images/mou-signed/2.png", alt: "KRMU Gurugram MOU" },
    { id: 3, image: "/assets/images/mou-signed/3.png", alt: "O.P. Jindal Global University MOU" },
    { id: 4, image: "/assets/images/mou-signed/4.png", alt: "Institutional Signed Association MOU" },
    { id: 5, image: "/assets/images/mou-signed/5.png", alt: "Counsel India Memorandum of Understanding" },
    { id: 6, image: "/assets/images/mou-signed/6.png", alt: "O.P. Jindal Global University MOU" },
    { id: 7, image: "/assets/images/mou-signed/7.png", alt: "KRMU Gurugram Association MOU" },
    { id: 8, image: "/assets/images/mou-signed/8.png", alt: "University Institutional Association MOU" },
  ];

  // Duplicate for seamless infinite marquee scroll
  const marqueeItems = [...mouList, ...mouList, ...mouList];

  return (
    <div className="partners-seaction section-padding-02 bg-white py-5">
      <div className="container custom-container">
        <div className="row mb-4">
          <div className="col-sm-12">
            {/* Section Title Start */}
            <div className="section-title">
              <h2 className="section-title__title font-size-36 fw-bold">
                Expanding Horizons: <mark>Signed MOUs</mark>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        {/* Infinite Marquee Slider Container - Inside Container */}
        <div className="mou-marquee-container position-relative w-100 overflow-hidden py-2">
          <div className="mou-marquee-track d-flex gap-4">
            {marqueeItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="mou-marquee-item flex-shrink-0"
                style={{
                  width: "180px",
                  aspectRatio: "1 / 1.38",
                  border: "4px solid #b8860b",
                  borderRadius: "4px",
                  overflow: "hidden",
                  boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
                  backgroundColor: "#ffffff",
                  padding: "2px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                    backgroundColor: "#ffffff",
                  }}
                  className="hover-scale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .mou-marquee-container {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 3%,
            black 97%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 3%,
            black 97%,
            transparent
          );
        }

        .mou-marquee-track {
          display: flex;
          width: max-content;
          animation: mou-scroll 32s linear infinite;
        }

        .mou-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes mou-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }

        .mou-marquee-item:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18) !important;
        }
      `}</style>
    </div>
  );
}
