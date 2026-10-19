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

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const el = document.getElementById("growth-courses-grid");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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
                Don’t wait for “someday” to invest in yourself—our growth courses are here now , but
                not for long! This is your chance to grab life-changing insights, expert guidance,
                and practical tools at an unbeatable price. Seats are filling up faster than a pizza
                at a party, and once they’re gone, they’re gone! Don’t let “I’ll think about it”
                turn into “I missed it.” Enroll today and book your spot before someone else takes
                it!
              </p>

              {/* Coral Urgency CTA Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="countdown-btn border-0 text-decoration-none"
                  title="Browse growth courses"
                >
                  <span className="btn-prefix me-2">Hurry! Only</span>
                  <span className="btn-time">
                    {!timeLeft.isEnded
                      ? `${timeLeft.minutes}m ${timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}s left!`
                      : "Offer has ended!"}
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
          background-color: #f55353;
          color: #ffffff;
          border-radius: 50px;
          padding: 14px 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(245, 83, 83, 0.3);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition:
            transform 0.25s ease,
            background-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .countdown-btn:hover {
          background-color: #ff6f61;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 20px rgba(245, 83, 83, 0.45);
        }

        .countdown-btn:before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300%;
          height: 300%;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: pulse-animation 2s infinite;
          opacity: 0;
          pointer-events: none;
        }

        @keyframes pulse-animation {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0;
          }
          100% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.6;
          }
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
