"use client";
import React from "react";

export default function NewsInFocus() {
  const mediaLogos = [
    {
      id: 1,
      image: "/assets/images/partners-logo/client_logo.jpg",
      alt: "Certificate of Nomination - India 500 Startup Awards",
      width: "155px",
    },
    {
      id: 2,
      image: "/assets/images/partners-logo/client_logo1.jpg",
      alt: "India 500 Startup Awards",
      width: "110px",
    },
    {
      id: 3,
      image: "/assets/images/partners-logo/client_logo2.jpg",
      alt: "Teacher Tribe World",
      width: "160px",
    },
    {
      id: 4,
      image: "/assets/images/partners-logo/client_logo3.png",
      alt: "EdTech Entrepreneur Award",
      width: "90px",
    },
    {
      id: 5,
      image: "/assets/images/partners-logo/client_logo4.png",
      alt: "Psychologs Magazine",
      width: "170px",
    },
    {
      id: 6,
      image: "/assets/images/partners-logo/client_logo5.png",
      alt: "Radio Manav Rachna 107.8",
      width: "140px",
    },
    {
      id: 7,
      image: "/assets/images/partners-logo/client_logo6.jpg",
      alt: "All India Radio Akashvani",
      width: "100px",
    },
  ];

  // Triplicate array for smooth infinite continuous scrolling
  const marqueeLogos = [...mediaLogos, ...mediaLogos, ...mediaLogos];

  return (
    <div className="partners-seaction section-padding-02 bg-white py-5">
      <div className="container custom-container">
        <div className="row mb-4">
          <div className="col-sm-12">
            {/* Section Title Start */}
            <div className="section-title">
              <h2 className="section-title__title font-size-36 fw-bold">
                Counsel India in<mark>Focus</mark>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        {/* Infinite Marquee Slider Container - Inside Container */}
        <div className="infocus-marquee-container position-relative w-100 overflow-hidden py-3">
          <div className="infocus-marquee-track d-flex align-items-center gap-5">
            {marqueeLogos.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="infocus-marquee-item flex-shrink-0 d-flex align-items-center justify-content-center"
                style={{
                  minWidth: item.width,
                  height: "90px",
                  padding: "6px 12px",
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  style={{
                    maxHeight: "80px",
                    maxWidth: "100%",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto",
                    transition: "transform 0.3s ease",
                  }}
                  className="hover-scale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .infocus-marquee-container {
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

        .infocus-marquee-track {
          display: flex;
          width: max-content;
          animation: infocus-scroll 28s linear infinite;
        }

        .infocus-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes infocus-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }

        .infocus-marquee-item:hover img {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
}
