"use client";
import React, { useState } from "react";

export default function AboutVideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="about-video-section"
        style={{
          backgroundImage:
            "url(https://prod-s3.counselindia.com/images/about-us-hero-bg.jpg)",
        }}
      >
        <div className="container custom-container">
          <div className="row gy-10 justify-content-between align-items-center">
            {/* Left Title */}
            <div className="col-xl-9 col-lg-8">
              <div className="about-video-content">
                <h2 className="about-video-content__main-title text-white">
                  <strong>Who Are We?</strong>
                </h2>
              </div>
            </div>

            {/* Right Video Play */}
            <div className="col-xl-3 col-lg-4">
              <div className="video-play">
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="btn p-0 border-0 bg-transparent text-decoration-none d-flex align-items-center text-start"
                >
                  <div className="video-play__play">
                    <div className="video-play__mask"></div>
                    <div className="video-play__icon"></div>
                  </div>
                  <div className="video-play__text">
                    <p className="mb-0">
                      Watch video <br />
                      intro
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-video-section {
          background-color: #252525;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          padding: 180px 0;
        }

        .about-video-content__main-title {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          font-size: 48px;
          line-height: 1.2;
          color: #ffffff;
          font-weight: 700;
        }

        .video-play button {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .video-play__play {
          position: relative;
          z-index: 1;
        }

        .video-play__mask {
          position: absolute;
          width: 140px;
          height: 140px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
          pointer-events: none;
        }

        .video-play__mask::before,
        .video-play__mask::after {
          opacity: 0;
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.4);
          width: 100%;
          height: 100%;
          animation: zoomBig 1.8s linear infinite;
          transform-origin: center;
        }

        .video-play__mask::after {
          animation-delay: 0.6s;
        }

        @keyframes zoomBig {
          0% {
            transform: scale(0.6);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        .video-play__icon {
          width: 78px;
          height: 78px;
          border-radius: 50%;
          background-color: #ffffff;
          position: relative;
          display: block;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .video-play:hover .video-play__icon {
          transform: scale(1.06);
          box-shadow: 0 0 40px 0 rgba(255, 255, 255, 0.5);
        }

        .video-play__icon::before {
          position: absolute;
          content: "";
          top: 50%;
          left: 54%;
          transform: translate(-50%, -50%);
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-left: 14px solid #07a64b;
        }

        .video-play__text {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          line-height: 22px;
          letter-spacing: 1.5px;
          color: rgba(255, 255, 255, 0.95);
        }

        @media (max-width: 991px) {
          .about-video-section {
            padding: 120px 0;
          }
          .about-video-content__main-title {
            font-size: 38px;
          }
        }

        @media (max-width: 575px) {
          .about-video-section {
            padding: 80px 0;
          }
          .about-video-content__main-title {
            font-size: 30px;
            text-align: center;
            margin-bottom: 20px;
          }
          .video-play {
            display: flex;
            justify-content: center;
          }
        }
      `}</style>

      {/* Video Popup Modal */}
      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            zIndex: 99999,
            backdropFilter: "blur(5px)",
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="position-relative w-100 m-3"
            style={{ maxWidth: "800px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="btn btn-light position-absolute top-0 end-0 m-n3 rounded-circle shadow"
              style={{ width: "40px", height: "40px", zIndex: 10 }}
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-lg bg-black">
              <iframe
                src="https://www.youtube.com/embed/-c6bRVUmb-E?autoplay=1"
                title="Who Are We Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
