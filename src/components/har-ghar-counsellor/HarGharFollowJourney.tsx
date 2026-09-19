"use client";
import React from "react";

export default function HarGharFollowJourney() {
  return (
    <div className="follow-journey-section py-5 bg-white">
      <div className="container custom-container py-4">
        {/* Title */}
        <div className="text-center mb-5">
          <h2
            className="section-title__title-02"
            style={{
              fontSize: "clamp(34px, 4.2vw, 44px)",
              fontWeight: 700,
              fontFamily:
                "Georgia, 'Playfair Display', 'Times New Roman', serif",
              color: "#07a64b",
              letterSpacing: "-0.5px",
            }}
          >
            Follow our journey
          </h2>
        </div>

        {/* 2 Social Screenshots with exact links, border, and drop shadow matching PHP */}
        <div className="image-container d-flex flex-wrap justify-content-center align-items-center gap-4">
          {/* Instagram Post Card */}
          <a
            href="https://www.instagram.com/counselindia/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-block text-decoration-none"
          >
            <img
              src="https://prod-s3.counselindia.com/mastergalaxyimages/WhatsApp%20Image%202024-08-31%20at%2016.32.09_1725108387.jpeg"
              alt="Follow Counsel India on Instagram"
              width={540}
              height={600}
              className="responsive-image img-fluid"
            />
          </a>

          {/* Facebook Post Card */}
          <a
            href="https://www.facebook.com/counselindia"
            target="_blank"
            rel="noopener noreferrer"
            className="d-block text-decoration-none"
          >
            <img
              src="https://prod-s3.counselindia.com/mastergalaxyimages/WhatsApp%20Image%202024-08-31%20at%2016.32.09%20(1)_1725108399.jpeg"
              alt="Follow Counsel India on Facebook"
              width={540}
              height={600}
              className="responsive-image img-fluid"
            />
          </a>
        </div>
      </div>

      <style jsx>{`
        .image-container {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          margin: 40px auto;
        }

        .responsive-image {
          width: 500px;
          height: 600px;
          object-fit: cover;
          display: block;
          border-radius: 10px;
          border: 1px solid #000000;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .responsive-image:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .responsive-image {
            width: 100% !important;
            height: auto !important;
            max-height: 500px !important;
          }
        }
      `}</style>
    </div>
  );
}
