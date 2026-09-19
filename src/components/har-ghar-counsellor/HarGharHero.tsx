"use client";
import React from "react";
import Link from "next/link";

export default function HarGharHero() {
  return (
    <div className="hero-section">
      {/* Background Hero Image */}
      <img
        className="hero-img"
        src="https://prod-s3.counselindia.com/mastergalaxyimages/Har-ghar-Councellor-5_1725104115.png"
        alt="Har Ghar Counsellor"
      />

      {/* Hero Content matching live site */}
      <div className="hero-content">
        <h1>Har Ghar Counsellor </h1>
        <p>
          With every enrollment, you contribute <br />
          <strong style={{ color: "rgb(6, 163, 6)" }}>
            ₹100 from your course fee to support mental health <br />
            causes around the country through mental health <br />
            drives, awareness workshops and FREE counselling <br />
            centers.{" "}
          </strong>
          We dream of a world where every lesson <br />
          learned, and every milestone achieved helps uplift <br />
          someone in need.{" "}
          <strong style={{ color: "rgb(6, 163, 6)" }}>
            Let’s turn learning into a fuel for change!{" "}
          </strong>
        </p>
        <Link href="/all-courses-list">Join The Movement</Link>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          display: inline-block;
          width: 100%;
        }

        .hero-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0.5)
          );
          z-index: 1;
        }

        .hero-section img {
          display: block;
          width: 100%;
          height: auto;
        }

        .hero-content {
          position: absolute;
          top: 50%;
          left: 15%;
          transform: translateY(-50%);
          color: white;
          z-index: 2;
          text-align: left;
          width: 70%;
        }

        .hero-content h1 {
          font-size: 5.5rem;
          white-space: nowrap;
          margin: 0;
          color: rgb(244, 235, 235) !important;
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          line-height: 1.2;
        }

        .hero-content p {
          font-size: 1rem;
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
          line-height: 1.5;
        }

        :global(.hero-content a) {
          margin-top: 0.5rem;
          padding: 10px 24px;
          font-size: 1rem;
          font-weight: 600;
          background-color: rgb(6, 163, 6);
          color: white !important;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          display: inline-block;
          text-decoration: none;
        }

        :global(.hero-content a:hover) {
          background-color: rgb(4, 130, 4);
        }

        /* Responsive Design for Mobile */
        @media (max-width: 991px) {
          .hero-content {
            left: 8%;
            width: 84%;
          }

          .hero-content h1 {
            white-space: normal;
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            left: 10%;
            width: 80%;
            text-align: center;
          }

          .hero-content h1 {
            white-space: normal;
            font-size: 1.6rem;
          }

          .hero-content p {
            font-size: 0.75rem;
            width: 100%;
            line-height: 1.4;
          }
        }

        .hero-img {
          height: auto;
        }

        @media (max-width: 767px) {
          .hero-img {
            height: 400px !important;
            object-fit: cover;
          }
        }
      `}</style>
    </div>
  );
}
