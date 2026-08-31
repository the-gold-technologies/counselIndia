"use client";
import React from "react";
import Link from "next/link";

export default function GlobalHiringPartners() {
  const hiringPartners = [
    { id: 1, name: "LK International School", image: "/assets/images/partners-logo/partner1.jpg", slug: "lk-international" },
    { id: 2, name: "Saadhak Foundation", image: "/assets/images/partners-logo/partner2.jpg", slug: "saadhak-foundation" },
    { id: 3, name: "Pehchaan The Street School", image: "/assets/images/partners-logo/partner3.jpg", slug: "pehchaan-the-street-school" },
    { id: 4, name: "Educlouds India & UK", image: "/assets/images/partners-logo/partner4.jpg", slug: "educlouds" },
    { id: 5, name: "The Peace Lab", image: "/assets/images/partners-logo/partner5.jpg", slug: "the-peace-lab" },
    { id: 6, name: "Traident Brains", image: "/assets/images/partners-logo/partner6.jpg", slug: "traident-brains" },
    { id: 7, name: "The Mind & Wellness Clinic", image: "/assets/images/partners-logo/partner7.jpg", slug: "mind-and-wellness-clinic" },
    { id: 8, name: "Care Foundation", image: "/assets/images/partners-logo/partner8.jpg", slug: "care-foundation" },
    { id: 9, name: "Psychology Partner 9", image: "/assets/images/partners-logo/partner9.jpg", slug: "partner-9" },
    { id: 10, name: "Psychology Partner 10", image: "/assets/images/partners-logo/partner10.jpg", slug: "partner-10" },
    { id: 11, name: "Psychology Partner 11", image: "/assets/images/partners-logo/partner11.jpg", slug: "partner-11" },
    { id: 12, name: "Psychology Partner 12", image: "/assets/images/partners-logo/partner12.jpg", slug: "partner-12" },
    { id: 13, name: "Psychology Partner 13", image: "/assets/images/partners-logo/partner13.jpg", slug: "partner-13" },
  ];

  // Triplicate array for smooth infinite continuous scrolling
  const marqueePartners = [...hiringPartners, ...hiringPartners, ...hiringPartners];

  return (
    <div className="partners-seaction section-padding-02 bg-white py-5">
      <div className="container custom-container">
        <div className="row mb-4">
          <div className="col-sm-12">
            {/* Section Title Start */}
            <div className="section-title">
              <h2 className="section-title__title font-size-36 fw-bold">
                Our Global Hiring Partner <mark>Network</mark>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        {/* Infinite Marquee Slider Container - Inside Container */}
        <div className="hiring-marquee-container position-relative w-100 overflow-hidden py-2">
          <div className="hiring-marquee-track d-flex align-items-center gap-4">
            {marqueePartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="hiring-marquee-item flex-shrink-0"
                style={{
                  width: "155px",
                  height: "90px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 12px",
                  transition: "transform 0.3s ease",
                }}
              >
                <Link href={`/hiring-partner/${partner.slug}`} className="text-decoration-none d-flex align-items-center justify-content-center w-100 h-100">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    style={{
                      maxHeight: "70px",
                      maxWidth: "100%",
                      objectFit: "contain",
                      transition: "transform 0.3s ease",
                    }}
                    className="hover-scale"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hiring-marquee-container {
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

        .hiring-marquee-track {
          display: flex;
          width: max-content;
          animation: hiring-scroll 30s linear infinite;
        }

        .hiring-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes hiring-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }

        .hiring-marquee-item:hover {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
}
