"use client";
import React from "react";

export default function CorporateClients() {
  const clientLogos = [
    { id: 1, image: "/assets/images/partners-logo/client-logo-01.jpg", alt: "Manav Rachna" },
    { id: 2, image: "/assets/images/partners-logo/client-logo-02.jpg", alt: "Zakir Husain Delhi College" },
    { id: 3, image: "/assets/images/partners-logo/client-logo-03.jpg", alt: "HDFC Bank" },
    { id: 4, image: "/assets/images/partners-logo/client-logo-04.jpg", alt: "American Express" },
    { id: 5, image: "/assets/images/partners-logo/client-logo-05.jpg", alt: "Indiabulls" },
    { id: 6, image: "/assets/images/partners-logo/client-logo-06.jpg", alt: "HDFC Credila" },
    { id: 7, image: "/assets/images/partners-logo/client-logo-111.jpg", alt: "JBM Group" },
    { id: 8, image: "/assets/images/partners-logo/client-logo-121.jpg", alt: "BharatBenz" },
    { id: 9, image: "/assets/images/partners-logo/client-logo-131.jpg", alt: "Corporate Partner" },
    { id: 10, image: "/assets/images/partners-logo/client-logo-07.jpg", alt: "Corporate Partner 7" },
    { id: 11, image: "/assets/images/partners-logo/client-logo-08.jpg", alt: "Corporate Partner 8" },
    { id: 12, image: "/assets/images/partners-logo/client-logo-09.jpg", alt: "Corporate Partner 9" },
    { id: 13, image: "/assets/images/partners-logo/client-logo-10.jpg", alt: "Corporate Partner 10" },
    { id: 14, image: "/assets/images/partners-logo/client-logo-11.jpg", alt: "Corporate Partner 11" },
    { id: 15, image: "/assets/images/partners-logo/client-logo-12.jpg", alt: "Corporate Partner 12" },
  ];

  // Triplicate array for seamless infinite marquee loop
  const marqueeClients = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <div className="partners-seaction section-padding-02 bg-white py-5">
      <div className="container custom-container">
        <div className="row mb-4">
          <div className="col-12">
            {/* Section Title Start */}
            <div className="section-title">
              <h2 className="section-title__title font-size-36 fw-bold">
                Our Valued <mark>Corporate Clients</mark>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        {/* Infinite Marquee Slider Container - Inside Container */}
        <div className="corporate-marquee-container position-relative w-100 overflow-hidden py-2">
          <div className="corporate-marquee-track d-flex align-items-center gap-3">
            {marqueeClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="corporate-marquee-item flex-shrink-0"
                style={{
                  width: "140px",
                  height: "95px",
                  backgroundColor: "#ffffff",
                  borderRadius: "6px",
                  border: "1px solid #eceff3",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <img
                  src={client.image}
                  alt={client.alt}
                  style={{
                    maxHeight: "58px",
                    maxWidth: "92%",
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
        .corporate-marquee-container {
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

        .corporate-marquee-track {
          display: flex;
          width: max-content;
          animation: corporate-scroll 32s linear infinite;
        }

        .corporate-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes corporate-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }

        .corporate-marquee-item:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08) !important;
        }
      `}</style>
    </div>
  );
}
