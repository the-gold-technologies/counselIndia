"use client";

import React, { useState, useEffect, useRef } from "react";

export interface PodcastItem {
  id: string | number;
  title: string;
  youtubeUrl: string;
  youtubeId?: string | null;
  thumbnail?: string | null;
  guest?: string | null;
  host?: string | null;
  duration?: string | null;
  description?: string | null;
  category?: string | null;
}

export default function PodcastsSection() {
  const [podcasts, setPodcasts] = useState<PodcastItem[]>([]);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Carousel slider states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive itemsPerView (1 / 2 / 3 cards)
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1);
      } else if (width < 992) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch dynamic podcasts from admin API
  useEffect(() => {
    let isMounted = true;
    const adminUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL;
    if (!adminUrl) return;

    fetch(`${adminUrl}/api/podcasts`)
      .then((res) => res.json())
      .then((json) => {
        if (!isMounted || !json.success || !Array.isArray(json.data)) return;
        setPodcasts(json.data);
      })
      .catch((err) => {
        console.warn("Could not load podcasts from admin:", err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Lock body scroll and handle Escape key when video modal is open
  useEffect(() => {
    if (activeVideoId) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setActiveVideoId(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [activeVideoId]);

  const maxIndex = Math.max(0, podcasts.length - itemsPerView);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  // Keep currentIndex within bounds when viewport or data changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  // Auto-slide carousel
  useEffect(() => {
    if (maxIndex <= 0 || isPaused || activeVideoId) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [maxIndex, isPaused, activeVideoId]);

  if (podcasts.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    if (diff > minSwipeDistance && canGoNext) {
      handleNext();
    } else if (diff < -minSwipeDistance && canGoPrev) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="podcasts-section py-5" style={{ backgroundColor: "#f8fafc" }}>
      <div className="container custom-container">
        {/* Header Section */}
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-4 gap-3">
          <div className="section-title mb-0" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="section-title__title font-size-36 fw-bold">
              Counsel India <mark>Podcasts</mark>
            </h2>
            <p className="text-muted mt-2 font-size-15 mb-0" style={{ maxWidth: "680px" }}>
              Watch and listen to insightful conversations with India&apos;s leading psychologists,
              educators, and wellness experts on navigating life and building thriving careers.
            </p>
          </div>

          <div className="d-flex align-items-center gap-3 flex-wrap">
            <a
              href="https://www.youtube.com/channel/UCWnALe3hLVdGJzVOuEgGoYg"
              target="_blank"
              rel="noreferrer"
              className="yt-visit-btn d-inline-flex align-items-center gap-2"
            >
              <span className="yt-visit-icon d-inline-flex align-items-center justify-content-center">
                <i className="fab fa-youtube"></i>
              </span>
              <span className="yt-visit-label">Visit YouTube Channel</span>
            </a>
          </div>
        </div>

        {/* Carousel Slider Viewport */}
        <div
          className="podcast-slider-viewport overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="podcast-slider-track d-flex"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {podcasts.map((podcast) => {
              const videoId =
                podcast.youtubeId ||
                (podcast.youtubeUrl.includes("v=")
                  ? podcast.youtubeUrl.split("v=")[1]?.split("&")[0]
                  : null);

              const handleOpenVideo = () => {
                if (videoId) {
                  setActiveVideoId(videoId);
                } else {
                  window.open(podcast.youtubeUrl, "_blank");
                }
              };

              return (
                <div
                  key={podcast.id}
                  className="podcast-slider-slide"
                  style={{
                    flex: `0 0 ${100 / itemsPerView}%`,
                    maxWidth: `${100 / itemsPerView}%`,
                    padding: "0 8px",
                  }}
                >
                  <div className="podcast-card h-100 d-flex flex-column">
                    {/* Thumbnail Media Area */}
                    <div
                      className="podcast-thumb position-relative overflow-hidden cursor-pointer"
                      style={{ aspectRatio: "16/9", backgroundColor: "#0f172a" }}
                      onClick={handleOpenVideo}
                    >
                      <img
                        src={
                          podcast.thumbnail ||
                          (videoId
                            ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                            : "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800")
                        }
                        alt={podcast.title}
                        className="w-100 h-100 object-fit-cover podcast-thumb-img"
                      />

                      {/* Gradient overlay */}
                      <div
                        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)",
                        }}
                      >
                        <div className="play-btn rounded-circle d-flex align-items-center justify-content-center">
                          <i
                            className="fas fa-play ms-1 text-white"
                            style={{ fontSize: "13px" }}
                          ></i>
                        </div>
                      </div>

                      {/* Category badge — top left */}
                      {podcast.category && (
                        <span
                          className="podcast-category-badge position-absolute text-white fw-semibold"
                          style={{ top: "10px", left: "10px" }}
                        >
                          {podcast.category}
                        </span>
                      )}

                      {/* Duration badge — bottom right */}
                      {podcast.duration && (
                        <span
                          className="podcast-duration-badge position-absolute text-white fw-semibold"
                          style={{ bottom: "10px", right: "10px" }}
                        >
                          <i className="far fa-clock me-1" style={{ fontSize: "9px" }}></i>
                          {podcast.duration}
                        </span>
                      )}
                    </div>

                    {/* Card Body */}
                    <div className="podcast-card-body d-flex flex-column flex-grow-1">
                      {/* Channel label */}
                      <p className="podcast-channel-label mb-2">Counsel India</p>

                      {/* Episode Title */}
                      <h4
                        className="podcast-title cursor-pointer mb-2"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                        onClick={handleOpenVideo}
                      >
                        {podcast.title}
                      </h4>

                      {/* Guest name — simple inline row */}
                      {podcast.guest && (
                        <div className="podcast-guest-row mb-2">
                          <span className="guest-avatar">
                            <i className="fas fa-user"></i>
                          </span>
                          <span className="podcast-guest-name">{podcast.guest}</span>
                        </div>
                      )}

                      {/* Description */}
                      {podcast.description && (
                        <p
                          className="podcast-desc mb-0"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {podcast.description}
                        </p>
                      )}

                      {/* Spacer pushes button to bottom */}
                      <div className="flex-grow-1" style={{ minHeight: "12px" }}></div>

                      {/* Watch Episode button */}
                      <button
                        type="button"
                        onClick={handleOpenVideo}
                        className="podcast-watch-btn w-100 d-flex align-items-center justify-content-center gap-2 mt-3"
                      >
                        <i
                          className="fab fa-youtube podcast-btn-yt"
                          style={{ fontSize: "15px", color: "#ff0000" }}
                        ></i>
                        <span>Watch Episode</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        {maxIndex > 0 && (
          <div
            className="d-flex align-items-center justify-content-center mt-4"
            style={{ gap: "8px" }}
          >
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`podcast-dot border-0 p-0 cursor-pointer ${
                  currentIndex === idx ? "active" : ""
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Video Modal Popup */}
      {activeVideoId && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            zIndex: 99999,
            backdropFilter: "blur(8px)",
          }}
          onClick={() => setActiveVideoId(null)}
        >
          <div
            className="position-relative w-100"
            style={{ maxWidth: "880px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideoId(null)}
              className="podcast-modal-close-btn shadow"
              aria-label="Close video"
              title="Close (Esc)"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L14 14M2 14L14 2"
                  stroke="#111827"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div
              className="rounded-4 overflow-hidden shadow-2xl"
              style={{
                aspectRatio: "16/9",
                backgroundColor: "#000",
                boxShadow:
                  "0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1)",
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                title="Counsel India Podcast"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-100 h-100 border-0"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .podcast-slider-viewport {
          position: relative;
          padding: 8px 0;
        }

        /* ── Podcast Card ── */
        .podcast-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          overflow: hidden;
          transition:
            transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
        }

        .podcast-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.09);
        }

        .podcast-card:hover .podcast-title {
          color: #07a64b;
        }

        .podcast-thumb-img {
          transition: transform 0.45s ease;
        }

        .podcast-card:hover .podcast-thumb-img {
          transform: scale(1.05);
        }

        /* ── Play button ── */
        .play-btn {
          width: 46px;
          height: 46px;
          background-color: #ff0000;
          box-shadow:
            0 4px 14px rgba(255, 0, 0, 0.4),
            0 0 0 4px rgba(255, 255, 255, 0.22);
          transition:
            transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.25s ease;
        }

        .podcast-card:hover .play-btn {
          transform: scale(1.12);
          box-shadow:
            0 6px 20px rgba(255, 0, 0, 0.55),
            0 0 0 6px rgba(255, 255, 255, 0.3);
        }

        /* ── Thumbnail overlay badges ── */
        .podcast-category-badge {
          font-size: 10px;
          padding: 3px 10px;
          border-radius: 20px;
          background: rgba(7, 166, 75, 0.88);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
        }

        .podcast-duration-badge {
          font-size: 10px;
          padding: 2px 7px;
          border-radius: 5px;
          background: rgba(15, 23, 42, 0.78);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        /* ── Card body ── */
        .podcast-card-body {
          padding: 14px 15px 15px;
        }

        .podcast-channel-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.7px;
          color: #9ca3af;
          margin: 0;
        }

        .podcast-title {
          font-size: 14px;
          font-weight: 700;
          line-height: 1.45;
          color: #111827;
          margin: 0;
          transition: color 0.2s ease;
          min-height: 40px;
        }

        /* ── Guest row ── */
        .podcast-guest-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .guest-avatar {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #ecfdf5;
          color: #07a64b;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 9px;
        }

        .podcast-guest-name {
          font-size: 12px;
          color: #374151;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* ── Description ── */
        .podcast-desc {
          font-size: 12px;
          color: #6b7280;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Watch Episode button ── */
        .podcast-watch-btn {
          background-color: #f9fafb;
          border: 1px solid #e5e7eb;
          color: #374151;
          border-radius: 8px;
          padding: 9px 14px;
          font-size: 12.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.22s ease;
          gap: 7px;
        }

        .podcast-watch-btn:hover {
          background-color: #07a64b;
          border-color: #07a64b;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(7, 166, 75, 0.28);
        }

        .podcast-watch-btn:hover .podcast-btn-yt {
          color: #ffffff !important;
        }

        /* ── YouTube Visit Button ── */
        .yt-visit-btn {
          text-decoration: none;
          background-color: #ff0000;
          border-radius: 8px;
          padding: 7px 14px 7px 8px;
          transition:
            background-color 0.2s ease,
            box-shadow 0.2s ease,
            transform 0.2s ease;
          box-shadow: 0 3px 10px rgba(255, 0, 0, 0.2);
        }

        .yt-visit-btn:hover {
          background-color: #cc0000;
          box-shadow: 0 5px 14px rgba(255, 0, 0, 0.3);
          transform: translateY(-1px);
        }

        .yt-visit-icon {
          width: 24px;
          height: 24px;
          background-color: rgba(255, 255, 255, 0.18);
          border-radius: 5px;
          font-size: 13px;
          color: #ffffff;
        }

        .yt-visit-label {
          font-size: 12px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.1px;
        }

        .podcast-dot {
          width: 8px;
          height: 8px;
          min-width: 0;
          min-height: 0;
          padding: 0;
          border-radius: 9999px;
          background-color: #d1d5db;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .podcast-dot.active {
          width: 24px;
          background-color: #07a64b;
        }

        .podcast-modal-close-btn {
          position: absolute;
          top: -46px;
          right: 0;
          width: 38px;
          height: 38px;
          min-width: 38px;
          min-height: 38px;
          max-width: 38px;
          max-height: 38px;
          padding: 0 !important;
          margin: 0 !important;
          border-radius: 50% !important;
          background-color: #ffffff !important;
          border: none !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
          transition:
            transform 0.2s ease,
            background-color 0.2s ease;
          z-index: 100;
          flex-shrink: 0;
        }

        .podcast-modal-close-btn:hover {
          background-color: #f3f4f6 !important;
          transform: scale(1.08);
        }

        @media (max-width: 576px) {
          .podcast-modal-close-btn {
            top: -40px;
            right: 4px;
            width: 34px;
            height: 34px;
            min-width: 34px;
            min-height: 34px;
            max-width: 34px;
            max-height: 34px;
          }
        }

        .cursor-pointer {
          cursor: pointer;
        }

        .custom-container {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 15px;
          padding-right: 15px;
        }

        .section-title__title {
          font-family: "Playfair Display", serif;
          font-size: 32px;
          line-height: 1.35;
          color: #232937;
        }

        .section-title__title mark {
          position: relative;
          z-index: 0;
          padding: 0 0 10px;
          color: inherit;
          background-color: transparent;
          display: inline-block;
        }

        .section-title__title mark::after {
          content: "";
          position: absolute;
          width: 91px;
          height: 12px;
          bottom: 0;
          left: 50%;
          z-index: -1;
          transform: translate(-45px);
          background-color: #07a64b;
          mask-repeat: no-repeat;
          mask-size: contain;
          mask-image: url("https://www.counselindia.com/assets/images/headline-curve-02.svg");
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          -webkit-mask-image: url("https://www.counselindia.com/assets/images/headline-curve-02.svg");
        }
      `}</style>
    </div>
  );
}
