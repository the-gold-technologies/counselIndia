"use client";
import React, { useState, useEffect } from "react";

export default function AboutVideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let lightbox: any;
    const init = () => {
      if (typeof window !== "undefined" && (window as any).GLightbox) {
        lightbox = (window as any).GLightbox({
          selector: ".glightbox",
          touchNavigation: true,
          loop: false,
          autoplayVideos: true,
        });
      }
    };
    init();
    const timer = setTimeout(init, 600);
    return () => {
      clearTimeout(timer);
      if (lightbox && typeof lightbox.destroy === "function") {
        lightbox.destroy();
      }
    };
  }, []);

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
              <div
                className="about-video-content"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h2 className="about-video-content__main-title">
                  <strong>Who Are We?</strong>
                </h2>
              </div>
            </div>

            {/* Right Video Play Button & Text */}
            <div className="col-xl-3 col-lg-4">
              <div
                className="video-play"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <a
                  href="https://www.youtube.com/embed/-c6bRVUmb-E"
                  className="glightbox video-play-btn"
                  aria-label="Watch video intro"
                  onClick={(e) => {
                    if (typeof window !== "undefined" && !(window as any).GLightbox) {
                      e.preventDefault();
                      setIsOpen(true);
                    }
                  }}
                >
                  <div className="video-play__play">
                    {/* Concentric stationary ring matching design */}
                    <div className="video-play__ring"></div>
                    {/* Animated pulsing rings */}
                    <div className="video-play__mask"></div>
                    {/* White circle with centered green play arrow */}
                    <div className="video-play__icon"></div>
                  </div>
                  <div className="video-play__text">
                    <p>
                      Watch video <br />
                      intro
                    </p>
                  </div>
                </a>
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
          padding: 198px 0;
          position: relative;
        }

        .custom-container {
          max-width: 1200px;
          padding-left: 15px;
          padding-right: 15px;
          margin-left: auto;
          margin-right: auto;
        }

        .about-video-content {
          max-width: 570px;
        }

        .about-video-content__main-title {
          font-family: "Playfair Display", serif;
          font-size: 48px;
          font-weight: 700;
          line-height: 1.5;
          color: #fff;
          margin: 0;
        }

        .video-play-btn {
          display: inline-flex;
          align-items: center;
          gap: 32px;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          text-align: left;
        }

        .video-play__play {
          position: relative;
          z-index: 1;
          width: 78px;
          height: 78px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Stationary concentric border ring matching live screenshot */
        .video-play__ring {
          position: absolute;
          width: 116px;
          height: 116px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 1.5px solid rgba(255, 255, 255, 0.45);
          border-radius: 50%;
          pointer-events: none;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }

        .video-play-btn:hover .video-play__ring {
          border-color: rgba(255, 255, 255, 0.75);
          transform: translate(-50%, -50%) scale(1.05);
        }

        /* Pulsing animated rings */
        .video-play__mask {
          position: absolute;
          width: 200px;
          height: 200px;
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
          border: 3px solid rgba(255, 255, 255, 0.6);
          width: 100%;
          height: 100%;
          animation: zoomBig 1.5s linear infinite;
          transform-origin: center;
          backface-visibility: hidden;
        }

        .video-play__mask::after {
          animation-delay: 0.55s;
        }

        @keyframes zoomBig {
          0% {
            transform: scale(0.38);
            opacity: 0.8;
            border-width: 4px;
          }
          25% {
            border-width: 3px;
          }
          50% {
            border-width: 2px;
          }
          to {
            transform: scale(1.2);
            opacity: 0;
            border-width: 1px;
          }
        }

        /* Center White Play Circle */
        .video-play__icon {
          width: 78px;
          height: 78px;
          border-radius: 50%;
          background-color: #ffffff;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .video-play-btn:hover .video-play__icon {
          transform: scale(1.06);
          box-shadow: 0 0 50px 0 rgba(255, 255, 255, 0.6);
        }

        /* Centered Green Arrow */
        .video-play__icon::before {
          position: absolute;
          content: "";
          top: 50%;
          left: 54%;
          transform: translate(-50%, -50%);
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-left: 15px solid #07a64b;
        }

        /* Typography matching screenshot */
        .video-play__text p {
          font-family: "Poppins", sans-serif;
          font-size: 15px;
          font-weight: 600;
          text-transform: uppercase;
          line-height: 24px;
          letter-spacing: 1.5px;
          color: #ffffff;
          margin: 0;
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px),
          only screen and (min-width: 768px) and (max-width: 991px) {
          .about-video-section {
            padding: 148px 0;
          }
          .about-video-content__main-title {
            font-size: 40px;
          }
        }

        @media only screen and (max-width: 767px) {
          .about-video-section {
            padding: 110px 0;
          }
          .about-video-content__main-title {
            font-size: 36px;
            margin-bottom: 30px;
          }
        }

        @media only screen and (max-width: 575px) {
          .about-video-section {
            padding: 80px 0;
          }
          .about-video-content__main-title {
            font-size: 28px;
            text-align: center;
          }
          .video-play {
            display: flex;
            justify-content: center;
          }
          .video-play__icon {
            width: 64px;
            height: 64px;
          }
          .video-play__ring {
            width: 96px;
            height: 96px;
          }
          .video-play__text p {
            font-size: 13px;
            line-height: 20px;
          }
        }
      `}</style>

      {/* Video Popup Modal (Fallback & GLightbox matching design) */}
      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.92)",
            zIndex: 999999,
          }}
          onClick={() => setIsOpen(false)}
        >
          {/* Top-left tag matching screenshot */}
          <div
            className="position-absolute top-0 start-0 m-3 px-3 py-1 rounded text-white font-size-14"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              fontSize: "13px",
              fontFamily: "Poppins, sans-serif",
              zIndex: 1000000,
            }}
          >
            Video - Counsel India
          </div>

          <div
            className="position-relative w-100 mx-3"
            style={{ maxWidth: "1040px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button matching screenshot */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="position-absolute d-flex align-items-center justify-content-center border-0"
              style={{
                top: "-22px",
                right: "-22px",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                color: "#ffffff",
                zIndex: 10,
                fontSize: "20px",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
                transition: "background-color 0.2s ease",
              }}
              aria-label="Close video"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L14 14M2 14L14 2"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Video Iframe Container */}
            <div
              className="ratio ratio-16x9 overflow-hidden"
              style={{
                backgroundColor: "#000000",
                borderRadius: "4px",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8)",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/-c6bRVUmb-E?autoplay=1&rel=0"
                title="Who Are We Video - Counsel India"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: "none", width: "100%", height: "100%" }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
