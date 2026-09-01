"use client";
import React, { useState, useEffect } from "react";

interface Props {
  onCtaClick?: () => void;
}

export default function GrowthCoursesCountdownCTA({ onCtaClick }: Props) {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 13,
    seconds: 39,
    isEnded: false,
  });

  useEffect(() => {
    const targetTime = Date.now() + 13 * 60 * 1000 + 39 * 1000;

    const interval = setInterval(() => {
      const distance = targetTime - Date.now();

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ minutes: 0, seconds: 0, isEnded: true });
      } else {
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ minutes, seconds, isEnded: false });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-signup-section py-5">
      <div className="container custom-container py-4">
        <div className="row gy-6 align-items-center justify-content-between">
          {/* Left Column: Heading, Text & Coral CTA Button */}
          <div className="col-md-6 col-12">
            <div className="countdown-content pe-lg-3">
              <h4 className="countdown-title mb-3">
                Invest in You—Before Someone Else Takes Your Place!
              </h4>

              <p className="countdown-desc mb-4">
                Don’t wait for “someday” to invest in yourself—our growth
                courses are here now , but not for long! This is your chance to
                grab life-changing insights, expert guidance, and practical
                tools at an unbeatable price. Seats are filling up faster than a
                pizza at a party, and once they’re gone, they’re gone! Don’t let
                “I’ll think about it” turn into “I missed it.” Enroll today and
                book your spot before someone else takes it!
              </p>

              {/* Coral CTA Pill Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onCtaClick}
                  className="countdown-btn border-0 text-decoration-none"
                >
                  <span className="btn-prefix me-2">HURRY! ONLY</span>
                  <span className="btn-time">
                    {!timeLeft.isEnded
                      ? `${timeLeft.minutes}M ${timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}S LEFT!`
                      : "OFFER ENDED!"}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 3-Image Collage Graphic */}
          <div className="col-md-6 col-12 text-center text-md-end">
            <div className="countdown-image d-inline-block">
              <img
                src="/assets/images/resourse-image.png"
                alt="Resource Collage"
                width={480}
                height={430}
                className="img-fluid"
                style={{
                  maxWidth: "480px",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .countdown-signup-section {
          background-color: #e6f6ed;
          padding: 60px 0;
          position: relative;
          overflow: hidden;
        }

        .countdown-title {
          font-size: 24px;
          color: #212529;
          font-weight: 600;
          line-height: 1.35;
          font-family: inherit;
          max-width: 540px;
        }

        .countdown-desc {
          color: #475569;
          font-size: 15px;
          line-height: 1.65;
          max-width: 540px;
          text-align: justify;
        }

        .countdown-btn {
          background-color: #f85d5d;
          color: #ffffff;
          border-radius: 50px;
          padding: 16px 36px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 24px rgba(248, 93, 93, 0.4);
          cursor: pointer;
          transition:
            transform 0.2s ease,
            background-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .countdown-btn:hover {
          background-color: #ef4444;
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(248, 93, 93, 0.5);
        }

        .btn-prefix {
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .btn-time {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        @media (max-width: 991px) {
          .countdown-title {
            font-size: 26px;
          }

          .countdown-btn {
            padding: 12px 24px;
          }

          .btn-prefix {
            font-size: 14px;
          }

          .btn-time {
            font-size: 20px;
          }
        }

        @media (max-width: 575px) {
          .countdown-signup-section {
            padding: 40px 0;
          }

          .countdown-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
