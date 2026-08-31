"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="slider-section pt-0 pb-0">
      <div className="slider-wrapper scene">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="slider-widget">
                <div className="slider-caption" style={{ marginBottom: "7%" }}>
                  <h1 className="slider-caption__main-title">
                    India&apos;s Best <mark>Online Psychology</mark> Courses
                  </h1>
                  <h3 className="slider-caption__sub-title">
                    Gain a deeper understanding of human behaviour
                  </h3>
                  <p>
                    Be part of a growing community of 200,000+ learners &amp; skilled counsellors from 22+ countries.
                  </p>
                </div>
                <Link
                  href="/courses"
                  className="btn btn-secondary btn-hover-primary course-btn-hero1"
                >
                  Explore Our Courses
                </Link>
                <Link
                  href="/eligibility-test"
                  style={{ marginLeft: "3%" }}
                  className="btn btn-secondary btn-hover-primary course-btn-hero2"
                >
                  Check Your Eligibility
                </Link>
                <div className="slider-search mt-4">
                  <div className="download-content-02__btn">
                    <a href="#" className="ios_img_but mr-2">
                      <img
                        src="/assets/images/ios.png"
                        alt="Psychology App iOS"
                        width="170"
                        height="52"
                      />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=co.alicia.qcmiv&pli=1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/assets/images/android.png"
                        alt="Psychology App Android"
                        width="170"
                        height="52"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="video-container2"
                id="videoContainer2"
                style={{
                  position: "relative",
                  maxWidth: "100%",
                  height: "auto",
                  margin: "5% auto",
                  overflow: "hidden",
                  border: "5px solid rgba(255, 255, 255, 0.8)",
                  borderRadius: "15px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                }}
              >
                {!isPlaying && (
                  <>
                    <img
                      id="coverImage2"
                      src="https://prod-s3.counselindia.com/mastergalaxyimages/WhatsApp%20Image%202024-09-30%20at%2010.35.24_1727673131.jpeg"
                      alt="Psychology mentor Image"
                      className="cover-image"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        borderRadius: "15px",
                      }}
                    />
                    <button
                      id="playButton2"
                      className="play-button"
                      onClick={handlePlayClick}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        background: "linear-gradient(135deg, #0DA74B 0%, #085127 100%)",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        fontSize: "24px",
                        width: "65px",
                        height: "65px",
                        cursor: "pointer",
                        zIndex: 10,
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      aria-label="Play video"
                    >
                      <i className="fas fa-play" style={{ marginLeft: "4px" }}></i>
                    </button>
                  </>
                )}
                <video
                  id="videoElement2"
                  ref={videoRef}
                  controls
                  style={{
                    width: "100%",
                    height: "100%",
                    display: isPlaying ? "block" : "none",
                    borderRadius: "15px",
                  }}
                >
                  <source src="/assets/videos/sunnyci.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
