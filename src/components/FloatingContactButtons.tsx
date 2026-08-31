"use client";
import React from "react";

export default function FloatingContactButtons() {
  return (
    <>
      {/* Left Floating Call Support Button */}
      <div className="dropup">
        <a
          href="https://wa.me/917065922160"
          target="_blank"
          rel="noreferrer"
          className="dropup-btn"
          aria-label="Call or WhatsApp Support"
        >
          <img
            src="https://prod-s3.counselindia.com/mastergalaxyimages/call-support_1729317848.png"
            alt="Support Image"
            onError={(e) => {
              e.currentTarget.src = "/assets/images/call-wa3.png";
            }}
          />
        </a>
      </div>

      {/* Right Floating Customer Support Button */}
      <div className="support-wrapper">
        <a
          href="tel:+917065922160"
          className="support"
          aria-label="Customer Support"
        >
          <img
            src="https://prod-s3.counselindia.com/mastergalaxyimages/Customer-Support_1729317867.png"
            alt="Support chat"
          />
        </a>
      </div>

      <style jsx>{`
        .dropup {
          position: fixed;
          bottom: 29px;
          left: 40px;
          display: inline-block;
          z-index: 1000;
        }

        .dropup-btn {
          width: 60px;
          height: 60px;
          background-color: #25d366;
          color: #fff;
          border: none;
          border-radius: 50px;
          text-align: center;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .dropup-btn:hover,
        .support:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }

        .dropup-btn img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
        }

        .support {
          position: fixed;
          bottom: 29px;
          right: 40px;
          display: inline-block;
          z-index: 1000;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .support img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 768px) {
          .dropup {
            bottom: 85px;
            left: 15px;
          }

          .support {
            bottom: 85px;
            right: 15px;
          }

          .dropup-btn,
          .support {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </>
  );
}
