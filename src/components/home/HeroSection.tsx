"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video) return;

    // Attempt audio-enabled playback first
    video.playsInline = true;

    const startPlayback = async () => {
      try {
        video.muted = false;
        await video.play();
        setIsPlaying(true);
        setIsMuted(false);
      } catch {
        // If unmuted autoplay is blocked by browser policy, fallback to muted autoplay
        try {
          video.muted = true;
          await video.play();
          setIsPlaying(true);
          setIsMuted(true);
        } catch {
          // Keep cover ready for click-to-play
        }
      }
    };

    startPlayback();

    // IntersectionObserver to pause when offscreen and resume when onscreen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoRef.current) return;
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (container) {
      observer.observe(container);
    }

    // Unmute on first user interaction anywhere if video is running muted
    const handleFirstGesture = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1.0;
        setIsMuted(false);
      }
    };

    window.addEventListener("click", handleFirstGesture, { once: true });
    window.addEventListener("touchstart", handleFirstGesture, { once: true });

    return () => {
      if (container) observer.unobserve(container);
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
    };
  }, []); // Empty dependency array so it never re-mutes

  const handlePlayOrUnmute = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      setIsMuted(false);
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
                    Be part of a growing community of 200,000+ learners &amp;
                    skilled counsellors from 22+ countries.
                  </p>
                </div>
                <Link
                  href="/all-courses-list"
                  className="btn btn-secondary btn-hover-primary course-btn-hero1"
                >
                  Explore Our Courses
                </Link>
                <Link
                  href="/eligibility-test"
                  style={{ marginLeft: "3.7%" }}
                  className="btn btn-secondary btn-hover-primary course-btn-hero2"
                >
                  Check Your Eligibility
                </Link>
                <div className="slider-search mt-8">
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
                ref={containerRef}
                className="video-container2"
                id="videoContainer2"
                onClick={handlePlayOrUnmute}
                style={{
                  position: "relative",
                  maxWidth: "100%",
                  height: "auto",
                  margin: "5% auto",
                  overflow: "hidden",
                  border: "5px solid rgba(255, 255, 255, 0.8)",
                  borderRadius: "15px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                  backgroundColor: "#000000",
                  cursor: "pointer",
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
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePlayOrUnmute();
                      }}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        background: "#ff0000",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        fontSize: "24px",
                        width: "60px",
                        height: "60px",
                        cursor: "pointer",
                        zIndex: 10,
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.35)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition:
                          "transform 0.2s ease, background-color 0.2s ease",
                      }}
                      aria-label="Play video with audio"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#ffffff"
                        style={{ marginLeft: "3px" }}
                      >
                        <polygon points="6,3 20,12 6,21" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Floating Unmute Indicator if playing in muted state */}
                {isPlaying && isMuted && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayOrUnmute();
                    }}
                    style={{
                      position: "absolute",
                      bottom: "55px",
                      right: "15px",
                      backgroundColor: "rgba(0, 0, 0, 0.75)",
                      color: "#ffffff",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: "20px",
                      padding: "6px 14px",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      zIndex: 20,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <span>🔇 Tap to Unmute</span>
                  </button>
                )}

                <video
                  id="videoElement2"
                  ref={videoRef}
                  autoPlay
                  playsInline
                  loop
                  controls
                  preload="auto"
                  onVolumeChange={() => {
                    if (videoRef.current) {
                      setIsMuted(videoRef.current.muted);
                    }
                  }}
                  onPlay={() => setIsPlaying(true)}
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
