"use client";
import React, { useState, useEffect } from "react";

export default function MembershipHero() {
  const [typedWord, setTypedWord] = useState("Richness and Wellness");

  return (
    <>
      <div className="edumall-box-section membership-hero-wrapper">
        <div className="container custom-container custom-container222">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title" data-aos="fade-up" data-aos-duration="1000">
                <h6 className="primary-text-color mb-2">
                  Let Your Life Overflow with Emotional Richness and Wellness
                </h6>
                <h1 className="section-title__title-03 heroheading">
                  Find the life you&apos;ve <br /> been looking for!
                </h1>

                <div className="hero-btn-wrap position-relative d-inline-block mt-3">
                  <img
                    className="secondary-arrow-icon d-none d-sm-block"
                    src="/assets/images/secondary-arrow.png"
                    alt="Arrow"
                  />
                  <a
                    className="btn btn-primary btn-hover-primary invest-btn"
                    href="#member"
                  >
                    Invest In Yourself
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .membership-hero-wrapper {
          background-image: url("https://prod-s3.counselindia.com/mastergalaxyimages/WhatsApp%20Image%202024-09-10%20at%2014.56.31_1725969793.jpeg");
          background-size: cover;
          background-position: center right;
          width: 100%;
          height: 580px;
          display: flex;
          align-items: center;
          position: relative;
        }

        .custom-container222 {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -40%);
          width: 100%;
        }

        .primary-text-color {
          color: #07a64b !important;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 0.2px;
        }

        .heroheading {
          font-size: 58px !important;
          color: #1a2638 !important;
          font-weight: 700;
          line-height: 1.15;
          margin-top: 10px;
          margin-bottom: 20px;
        }

        .hero-btn-wrap {
          position: relative;
        }

        .secondary-arrow-icon {
          position: absolute;
          left: -58px;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: auto;
          pointer-events: none;
        }

        .invest-btn {
          background-color: #07a64b !important;
          border-color: #07a64b !important;
          color: #ffffff !important;
          height: 48px;
          padding: 0 30px;
          border-radius: 4px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(7, 166, 75, 0.25);
          transition: all 0.25s ease;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          text-align: center !important;
          line-height: 1 !important;
        }

        .invest-btn:hover {
          background-color: #05853c !important;
          border-color: #05853c !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(7, 166, 75, 0.35);
        }

        /* Mobile View Media Query */
        @media (max-width: 768px) {
          .membership-hero-wrapper {
            background-image: url("https://prod-s3.counselindia.com/mastergalaxyimages/2_1725521806.png") !important;
            background-size: cover !important;
            background-position: center !important;
            height: 480px;
          }

          .custom-container222 {
            left: 50% !important;
            top: 35% !important;
            transform: translate(-50%, -35%) !important;
            text-align: center !important;
          }

          .heroheading {
            font-size: 34px !important;
          }

          .primary-text-color {
            font-size: 14px;
          }

          .secondary-arrow-icon {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
