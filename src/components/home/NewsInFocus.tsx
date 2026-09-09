"use client";
import React from "react";

export default function NewsInFocus() {
  const mediaLogos = [
    {
      id: 1,
      image: "https://prod-s3.counselindia.com/masterfetured/image_client_logo_1677487852.jpg",
      alt: "India 5000 Executive / Startup Awards",
      width: 350,
      height: 245,
    },
    {
      id: 2,
      image: "https://prod-s3.counselindia.com/masterfetured/image_client_logo1_1677487902.jpg",
      alt: "India 500 Startup Awards",
      width: 350,
      height: 245,
    },
    {
      id: 3,
      image: "https://prod-s3.counselindia.com/masterfetured/image_client_logo2_1677487923.jpg",
      alt: "Teacher Tribe World",
      width: 350,
      height: 245,
    },
    {
      id: 4,
      image: "https://prod-s3.counselindia.com/masterfetured/image_client_logo3_1677487937.png",
      alt: "EdTech Entrepreneur Award",
      width: 350,
      height: 245,
    },
    {
      id: 5,
      image: "https://prod-s3.counselindia.com/masterfetured/image_client_logo4_1677487951.png",
      alt: "Psychologs Magazine",
      width: 350,
      height: 245,
    },
    {
      id: 6,
      image: "https://prod-s3.counselindia.com/masterfetured/image_client_logo5_1677487966.png",
      alt: "Radio Manav Rachna 107.8",
      width: 350,
      height: 245,
    },
    {
      id: 7,
      image: "https://prod-s3.counselindia.com/masterfetured/image_client_logo6_1677487985.jpg",
      alt: "All India Radio Akashvani",
      width: 350,
      height: 245,
    },
  ];

  return (
    <div className="partners-seaction section-padding-02 bg-white py-5">
      <div className="container custom-container">
        <div className="row mb-4">
          <div className="col-sm-12">
            {/* Section Title Start - Placed on the left side matching standard layout */}
            <div className="section-title">
              <h2 className="section-title__title font-size-36 fw-bold text-start">
                Counsel India in <mark>Focus</mark>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        {/* Static Logos Row Layout on Left Side */}
        <div className="d-flex flex-wrap align-items-center justify-content-start gap-4 gap-lg-5 py-2">
          {mediaLogos.map((item) => (
            <div
              key={item.id}
              className="partner-logo d-flex align-items-center justify-content-center"
              style={{
                width: "140px",
                height: "98px",
                padding: "4px",
                transition: "transform 0.3s ease",
              }}
            >
              <div className="partner-logo__logo d-flex align-items-center justify-content-center w-100 h-100">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "350/245",
                    maxHeight: "90px",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto",
                    transition: "transform 0.3s ease",
                  }}
                  className="hover-scale"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hover-scale {
          transition: transform 0.3s ease;
        }
        .partner-logo:hover .hover-scale {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
}
