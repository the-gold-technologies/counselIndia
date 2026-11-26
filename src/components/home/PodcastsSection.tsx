"use client";

import React, { useState, useEffect } from "react";

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

const DEFAULT_PODCASTS: PodcastItem[] = [
  {
    id: 1,
    title: "The Psychology of Mental Resilience & Overcoming Anxiety",
    youtubeUrl: "https://www.youtube.com/watch?v=0N_1mQfUe7s",
    youtubeId: "0N_1mQfUe7s",
    thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800",
    guest: "Bobby Thakur (Founder & CEO)",
    host: "Counsel India Podcast",
    duration: "38 mins",
    description:
      "In this inspiring episode, Mr. Bobby Thakur breaks down how mental resilience is built, actionable ways to overcome daily anxiety, and the future of counseling in India.",
    category: "Mental Wellness",
  },
  {
    id: 2,
    title: "Why India Needs 1 Million Counsellors | Career in Psychology",
    youtubeUrl: "https://www.youtube.com/watch?v=bTqVqk7FSmY",
    youtubeId: "bTqVqk7FSmY",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
    guest: "Senior Clinical Psychologist",
    host: "Counsel India Podcast",
    duration: "45 mins",
    description:
      "A deep-dive conversation exploring the massive demand for certified psychologists, clinical skill essentials, and how to build a high-impact private practice.",
    category: "Career Guidance",
  },
  {
    id: 3,
    title: "Child Psychology, Parenting & Modern School Dynamics",
    youtubeUrl: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
    youtubeId: "kJQP7kiw5Fk",
    thumbnail: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800",
    guest: "Dr. Sunita Sharma",
    host: "Counsel India Podcast",
    duration: "32 mins",
    description:
      "Understanding emotional regulation in kids, handling behavioral challenges, and practical tips for parents and educators to support young minds.",
    category: "Child Psychology",
  },
  {
    id: 4,
    title: "Decoding Emotional Intelligence & Workplace Relationships",
    youtubeUrl: "https://www.youtube.com/watch?v=L_LUpnjgPso",
    youtubeId: "L_LUpnjgPso",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    guest: "Corporate Wellbeing Specialist",
    host: "Counsel India Podcast",
    duration: "28 mins",
    description:
      "How high EQ transforms leadership, reduces burnout, and improves workplace communication in fast-paced corporate environments.",
    category: "Corporate Wellness",
  },
];

export default function PodcastsSection() {
  const [podcasts, setPodcasts] = useState<PodcastItem[]>(DEFAULT_PODCASTS);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const adminUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL;
    if (!adminUrl) return;

    fetch(`${adminUrl}/api/podcasts`)
      .then((res) => res.json())
      .then((json) => {
        if (!isMounted || !json.success || !Array.isArray(json.data) || json.data.length === 0)
          return;
        setPodcasts(json.data);
      })
      .catch((err) => {
        console.warn("Could not load podcasts from admin, using defaults:", err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="podcasts-section py-5" style={{ backgroundColor: "#f9fafb" }}>
      <div className="container custom-container">
        {/* Header */}
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-4">
          <div className="section-title mb-3 mb-md-0" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="section-title__title font-size-36 fw-bold">
              Counsel India <mark>Podcasts</mark>
            </h2>
            <p className="text-muted mt-2 font-size-15 mb-0" style={{ maxWidth: "680px" }}>
              Watch and listen to insightful conversations with India&apos;s leading psychologists,
              educators, and wellness experts on navigating life and building thriving careers.
            </p>
          </div>

          <a
            href="https://www.youtube.com/channel/UCWnALe3hLVdGJzVOuEgGoYg"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-success rounded-pill px-4 py-2 font-size-13 fw-semibold d-inline-flex align-items-center gap-2 align-self-start align-self-md-auto"
          >
            <i className="fab fa-youtube text-danger font-size-16"></i>
            <span>Visit YouTube Channel</span>
          </a>
        </div>

        {/* Podcast Cards Grid */}
        <div className="row g-4">
          {podcasts.map((podcast) => {
            const videoId =
              podcast.youtubeId ||
              (podcast.youtubeUrl.includes("v=")
                ? podcast.youtubeUrl.split("v=")[1]?.split("&")[0]
                : null);

            return (
              <div key={podcast.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div
                  className="podcast-card h-100 bg-white rounded-3 border overflow-hidden d-flex flex-column justify-content-between"
                  style={{
                    borderColor: "#e5e7eb",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                >
                  <div>
                    {/* Thumbnail with Play Trigger */}
                    <div
                      className="position-relative overflow-hidden cursor-pointer"
                      style={{ aspectRatio: "16/9", backgroundColor: "#000" }}
                      onClick={() => {
                        if (videoId) {
                          setActiveVideoId(videoId);
                        } else {
                          window.open(podcast.youtubeUrl, "_blank");
                        }
                      }}
                    >
                      <img
                        src={
                          podcast.thumbnail ||
                          (videoId
                            ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                            : "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800")
                        }
                        alt={podcast.title}
                        className="w-100 h-100 object-fit-cover"
                        style={{ transition: "transform 0.3s ease" }}
                      />

                      {/* Dark overlay & Play Button */}
                      <div
                        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                      >
                        <div
                          className="play-btn rounded-circle d-flex align-items-center justify-content-center shadow"
                          style={{
                            width: "52px",
                            height: "52px",
                            backgroundColor: "#ff0000",
                            color: "#ffffff",
                            transition: "transform 0.2s ease",
                          }}
                        >
                          <i className="fas fa-play ms-1 font-size-16"></i>
                        </div>
                      </div>

                      {/* Duration Badge */}
                      {podcast.duration && (
                        <span
                          className="position-absolute bottom-0 end-0 m-2 px-2 py-0.5 rounded text-white font-size-11 fw-semibold"
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
                        >
                          {podcast.duration}
                        </span>
                      )}

                      {/* Category Badge */}
                      {podcast.category && (
                        <span
                          className="position-absolute top-0 start-0 m-2 px-2.5 py-0.5 rounded-pill text-white font-size-10 fw-semibold"
                          style={{ backgroundColor: "#07a64b" }}
                        >
                          {podcast.category}
                        </span>
                      )}
                    </div>

                    {/* Content Details */}
                    <div className="p-3">
                      <div className="text-muted font-size-11 fw-medium mb-1">
                        {podcast.host || "Counsel India"}
                      </div>
                      <h4
                        className="font-size-15 fw-bold text-dark mb-2"
                        style={{
                          lineHeight: "1.35",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {podcast.title}
                      </h4>

                      {podcast.guest && (
                        <div className="d-flex align-items-center gap-1.5 text-secondary font-size-12 mb-2">
                          <i className="fas fa-user-circle text-success"></i>
                          <span className="fw-medium">{podcast.guest}</span>
                        </div>
                      )}

                      {podcast.description && (
                        <p
                          className="text-muted font-size-12 mb-0"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            lineHeight: "1.5",
                          }}
                        >
                          {podcast.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Watch Action */}
                  <div className="p-3 pt-0">
                    <button
                      type="button"
                      onClick={() => {
                        if (videoId) {
                          setActiveVideoId(videoId);
                        } else {
                          window.open(podcast.youtubeUrl, "_blank");
                        }
                      }}
                      className="btn btn-sm btn-outline-dark w-100 rounded-pill font-size-12 fw-semibold d-flex align-items-center justify-content-center gap-1.5"
                    >
                      <i className="fab fa-youtube text-danger"></i>
                      <span>Watch Episode</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Modal Popup */}
      {activeVideoId && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 9999,
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setActiveVideoId(null)}
        >
          <div
            className="position-relative w-100"
            style={{ maxWidth: "860px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideoId(null)}
              className="btn btn-light rounded-circle position-absolute top-0 end-0 m-n3 shadow"
              style={{
                width: "40px",
                height: "40px",
                zIndex: 10,
                transform: "translate(15px, -15px)",
              }}
            >
              <i className="fas fa-times"></i>
            </button>
            <div
              className="rounded-3 overflow-hidden shadow-lg"
              style={{ aspectRatio: "16/9", backgroundColor: "#000" }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
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
        .podcast-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08) !important;
        }

        .podcast-card:hover .play-btn {
          transform: scale(1.15);
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
