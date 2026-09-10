"use client";
import React from "react";

interface Props {
  onSubscribeClick: () => void;
}

export default function NewsletterBottomCTA({ onSubscribeClick }: Props) {
  return (
    <div className="container" style={{ marginTop: "2%", marginBottom: "3%" }}>
      <div className="section">
        {/* Left Section: Heading & Subheading (width: 550px) */}
        <div className="section-content">
          <h1 className="heading">
            &quot;Unlock Psychology <br /> Mastery with Our <br />
            Guidance&quot;
          </h1>
          <p className="subheading">
            Empower yourself with insights from your personal newsletter.
          </p>
        </div>

        {/* Right Section: Subscribe Button & Subscribers Badge */}
        <div className="footer-widget__form-02" id="footer-poster">
          <button
            type="button"
            id="footer-btn"
            className="btn btn-secondary btn-hover-primary"
            onClick={onSubscribeClick}
          >
            Subscribe
          </button>

          <div className="subscriber-section footer-section2">
            <p className="subscriber-text">
              10k+ Subscribers enjoying their newsletter insights.
            </p>
            <div className="subscriber-images">
              <img
                className="subscriber-image"
                src="https://i.ibb.co/s5wXg5m/Rectangle-1978.png"
                alt="Subscriber Image 1"
              />
              <img
                className="subscriber-image"
                src="https://i.ibb.co/5rPBSs1/Rectangle-1979.png"
                alt="Subscriber Image 2"
              />
              <img
                className="subscriber-image"
                src="https://i.ibb.co/CMxjxdR/Rectangle-1976.png"
                alt="Subscriber Image 3"
              />
              <img
                className="subscriber-image"
                src="https://i.ibb.co/jbj1mCc/Rectangle-1977.png"
                alt="Subscriber Image 4"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-image: url("https://i.ibb.co/xhDq9kR/Frame-716.png");
          background-size: cover;
          background-position: center;
          height: 250px;
          padding: 0 36px;
          box-sizing: border-box;
          border-radius: 20px;
          margin-top: 2%;
          margin-bottom: 2%;
          position: relative;
        }

        .section-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          color: #fff;
          height: 100%;
        }

        .heading {
          font-family: "Arial Black", sans-serif;
          font-size: 36px;
          color: #000000;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 15.25px;
          margin-bottom: 10px;
          width: 550px;
          line-height: 1.15;
        }

        .subheading {
          font-family: "Arial", sans-serif;
          font-size: 18px;
          color: #ffffff;
          text-align: center;
          margin-top: 0;
          margin-bottom: 20px;
          width: 550px;
          line-height: 1.35;
        }

        #footer-poster {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-shrink: 0;
          height: 100%;
          position: relative;
        }

        #footer-btn {
          align-self: center;
          position: static !important;
          right: auto !important;
          top: auto !important;
          transform: none !important;
          height: auto !important;
          line-height: normal !important;
          background-color: #0da74b !important;
          color: #ffffff !important;
          border: none !important;
          border-radius: 6px !important;
          font-size: 18px !important;
          font-weight: 700 !important;
          padding: 11px 32px !important;
          cursor: pointer !important;
          white-space: nowrap !important;
          margin-right: 32px !important;
          display: inline-block !important;
          transition: background-color 0.2s ease, transform 0.15s ease !important;
        }

        #footer-btn:hover {
          background-color: #0b8e3f !important;
          transform: translateY(-1px) !important;
        }

        .subscriber-section {
          align-self: flex-start;
          margin-top: 30px;
          margin-left: 0;
        }

        .subscriber-text {
          font-family: "Poppins", Arial, sans-serif;
          font-size: 14px;
          color: #ffffff;
          margin-bottom: 5px;
          margin-left: 0;
          white-space: nowrap;
        }

        .subscriber-images {
          display: flex;
          align-items: center;
          margin-top: 10px;
        }

        .subscriber-image {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          margin-right: 10px;
          object-fit: cover;
          display: inline-block;
        }

        .subscriber-image:last-child {
          margin-right: 0;
        }

        @media only screen and (max-width: 991px) {
          .section {
            flex-direction: column;
            height: auto;
            padding: 24px 16px;
            text-align: center;
          }

          .section-content {
            align-items: center;
            width: 100%;
          }

          .heading {
            font-size: 22px !important;
            width: 100% !important;
            text-align: center !important;
          }

          .subheading {
            font-size: 15px !important;
            width: 100% !important;
            text-align: center !important;
          }

          #footer-poster {
            flex-direction: column;
            align-items: center;
            margin-top: 15px;
            gap: 15px;
          }

          #footer-btn {
            margin-right: 0;
            font-size: 16px;
            padding: 10px 24px;
          }

          .subscriber-section {
            margin-left: 0;
            text-align: center;
          }

          .subscriber-text {
            white-space: normal;
          }

          .subscriber-images {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
