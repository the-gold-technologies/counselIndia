"use client";
import React from "react";

interface Props {
  onSubscribeClick: () => void;
}

export default function NewsletterBottomCTA({ onSubscribeClick }: Props) {
  return (
    <div className="container" style={{ margin: "40px auto 60px" }}>
      <div className="newsletter-cta-banner">
        {/* Left Column: Centered Heading & Subtitle */}
        <div className="newsletter-cta-left">
          <h2 className="newsletter-cta-heading">
            &quot;UNLOCK PSYCHOLOGY
            <br />
            MASTERY WITH OUR
            <br />
            GUIDANCE&quot;
          </h2>
          <p className="newsletter-cta-subheading">
            Empower yourself with insights from your personal newsletter.
          </p>
        </div>

        {/* Right Section: Subscribe Button & Subscribers Column aligned */}
        <div className="newsletter-cta-actions">
          {/* Subscribe Button */}
          <div className="newsletter-cta-btn-wrapper">
            <button
              type="button"
              className="newsletter-cta-btn"
              onClick={onSubscribeClick}
            >
              Subscribe
            </button>
          </div>

          {/* Subscribers Count & Avatar Row */}
          <div className="newsletter-cta-subscribers">
            <p className="newsletter-subscribers-count">
              10k+ Subscribers enjoying their newsletter insights.
            </p>
            <div className="newsletter-subscribers-avatars">
              <img
                className="newsletter-avatar-item"
                src="https://i.ibb.co/s5wXg5m/Rectangle-1978.png"
                alt="Subscriber 1"
              />
              <img
                className="newsletter-avatar-item"
                src="https://i.ibb.co/5rPBSs1/Rectangle-1979.png"
                alt="Subscriber 2"
              />
              <img
                className="newsletter-avatar-item"
                src="https://i.ibb.co/CMxjxdR/Rectangle-1976.png"
                alt="Subscriber 3"
              />
              <img
                className="newsletter-avatar-item"
                src="https://i.ibb.co/jbj1mCc/Rectangle-1977.png"
                alt="Subscriber 4"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .newsletter-cta-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-image: url("https://i.ibb.co/xhDq9kR/Frame-716.png");
          background-size: cover;
          background-position: center;
          border-radius: 20px;
          padding: 38px 48px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          gap: 24px;
        }

        .newsletter-cta-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .newsletter-cta-heading {
          font-family: "Arial Black", Arial, sans-serif;
          font-size: 27px;
          font-weight: 900;
          color: #000000;
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.2;
          margin-bottom: 10px;
          text-align: center;
        }

        .newsletter-cta-subheading {
          font-family: Arial, sans-serif;
          font-size: 15px;
          color: #ffffff;
          margin: 0;
          line-height: 1.4;
          text-align: center;
        }

        .newsletter-cta-actions {
          display: flex;
          align-items: flex-end;
          gap: 24px;
        }

        .newsletter-cta-btn-wrapper {
          display: flex;
          align-items: center;
          margin-bottom: 2px;
        }

        .newsletter-cta-btn {
          background-color: #067838;
          color: #ffffff;
          border: none;
          padding: 13px 34px;
          border-radius: 6px;
          font-size: 19px;
          font-weight: 700;
          cursor: pointer;
          transition:
            background-color 0.2s ease,
            transform 0.15s ease;
          letter-spacing: 0.3px;
          display: inline-block;
          line-height: 1.2;
        }

        .newsletter-cta-btn:hover {
          background-color: #045d2b;
          transform: translateY(-1px);
        }

        .newsletter-cta-subscribers {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .newsletter-subscribers-count {
          font-family: Arial, sans-serif;
          font-size: 14.5px;
          color: #ffffff;
          margin: 0 0 10px 0;
          font-weight: 400;
          text-align: left;
          letter-spacing: 0.2px;
          white-space: nowrap;
        }

        .newsletter-subscribers-avatars {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .newsletter-avatar-item {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          flex-shrink: 0;
        }

        @media only screen and (max-width: 991px) {
          .newsletter-cta-banner {
            flex-direction: column;
            text-align: center;
            padding: 35px 20px;
            gap: 25px;
          }

          .newsletter-cta-left {
            text-align: center;
          }

          .newsletter-cta-heading {
            font-size: 22px;
          }

          .newsletter-cta-actions {
            flex-direction: column;
            align-items: center;
            gap: 18px;
          }

          .newsletter-cta-subscribers {
            align-items: center;
          }

          .newsletter-subscribers-count {
            text-align: center;
            white-space: normal;
          }
        }
      `}</style>
    </div>
  );
}
