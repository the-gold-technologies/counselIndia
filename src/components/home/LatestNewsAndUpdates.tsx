"use client";
import React, { useEffect } from "react";
import Link from "next/link";

export default function LatestNewsAndUpdates() {
  const newsList = [
    {
      id: 1,
      title: "Counsel India Elevates Work Culture with Modernized HR Policies",
      date: "05 Feb 2024",
      url: "https://businessnewsthisweek.com/news/examining-ways-to-promote-a-healthy-and-safe-work-environment-for-employees/",
      type: "svg-news24",
    },
    {
      id: 2,
      title: "News from the world of Education",
      date: "20 Feb 2024",
      url: "https://www.thehindu.com/education/",
      type: "svg-thehindu",
    },
    {
      id: 3,
      title: "Do You Frequently Get Panic Attacks? Check 10 Tips To Manage Them",
      date: "10 Feb 2024",
      url: "https://news.abplive.com/lifestyle/",
      type: "svg-abplive",
    },
    {
      id: 4,
      title: "Counsel India Partners with Galgotias University to Launch UGC-Approved Psychology Programs",
      date: "08 Oct 2024",
      url: "https://taasir.com/2024/10/counsel-india-partners-with-galgotias-university-to-launch-ugc-approved-psychology-programs/",
      image: "https://prod-s3.counselindia.com/news/Untitled design (11)_1728455491.png",
      type: "image",
    },
    {
      id: 5,
      title: "Counsel India empowers 10,000+ professionals, aims to become India's largest psychology learning platform",
      date: "15 Jul 2025",
      url: "https://ncrexpressnews.com/counsel-india-set-a-target-to-become-100000-professionals/",
      image: "https://prod-s3.counselindia.com/news/Untitled design (4)_1752639280.png",
      type: "image",
    },
  ];

  useEffect(() => {
    let swiperInstance: any = null;
    const init = () => {
      if (typeof window !== "undefined" && (window as any).Swiper) {
        swiperInstance = new (window as any).Swiper(".news-active-swiper .swiper", {
          slidesPerView: 3,
          spaceBetween: 25,
          loop: true,
          autoplay: { delay: 3500, disableOnInteraction: false },
          speed: 800,
          breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 25 },
          },
        });
      }
    };
    init();
    const t = setTimeout(init, 400);
    return () => {
      clearTimeout(t);
      if (swiperInstance?.destroy) swiperInstance.destroy(true, true);
    };
  }, []);

  return (
    <div className="section-padding-01 py-5" style={{ backgroundColor: "#ffffff" }}>
      <div className="container custom-container">
        {/* Section Title */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="section-title">
              <h2 className="section-title__title font-size-36 fw-bold">
                Latest <mark>News and</mark> Updates
              </h2>
            </div>
          </div>
        </div>

        {/* News Cards Carousel */}
        <div className="news-active-swiper swiper-dots-style mb-4">
          <div className="swiper">
            <div className="swiper-wrapper">
              {newsList.map((item) => (
                <div className="swiper-slide h-auto" key={item.id}>
                  <div
                    className="blog-item-02 h-100 d-flex flex-column bg-white"
                    style={{
                      borderRadius: "12px",
                      border: "1.5px solid #1a1a1a",
                      overflow: "hidden",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    {/* Card Header Media */}
                    <div
                      className="blog-item-02__image d-flex align-items-center justify-content-center"
                      style={{
                        height: "220px",
                        backgroundColor: item.type === "svg-abplive" ? "#e51a24" : "#ffffff",
                        borderBottom: "1px solid #f0f0f0",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-100 h-100 d-flex align-items-center justify-content-center text-decoration-none"
                      >
                        {item.type === "svg-news24" && (
                          <div className="text-center p-3">
                            <div
                              style={{
                                display: "inline-block",
                                backgroundColor: "#e2231a",
                                color: "#ffffff",
                                padding: "4px 18px",
                                borderRadius: "8px 8px 0 0",
                                fontWeight: 900,
                                fontSize: "28px",
                                letterSpacing: "-0.5px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              News<span style={{ fontSize: "34px", marginLeft: "2px" }}>24</span>
                            </div>
                            <div
                              style={{
                                backgroundColor: "#112658",
                                color: "#ffffff",
                                padding: "2px 24px",
                                fontWeight: 800,
                                fontSize: "14px",
                                letterSpacing: "4px",
                                textTransform: "uppercase",
                                borderRadius: "0 0 4px 4px",
                              }}
                            >
                              ASIA
                            </div>
                            <div
                              style={{
                                fontSize: "9px",
                                fontWeight: 700,
                                letterSpacing: "1px",
                                color: "#333",
                                marginTop: "6px",
                                textTransform: "uppercase",
                              }}
                            >
                              STRAIGHT TO THE POINT
                            </div>
                          </div>
                        )}

                        {item.type === "svg-thehindu" && (
                          <div className="text-center p-3">
                            {/* The Hindu Heraldic Emblem SVG */}
                            <svg width="140px" height="60px" viewBox="0 0 140 60" fill="#1a1a1a">
                              <g transform="translate(10, 0)">
                                <circle cx="60" cy="22" r="16" stroke="#1a1a1a" strokeWidth="2" fill="none" />
                                <path d="M54 22 L66 22 M60 16 L60 28" stroke="#1a1a1a" strokeWidth="1.5" />
                                <path d="M25 35 C20 20, 35 10, 48 20 C42 26, 38 32, 25 35 Z" fill="#1a1a1a" opacity="0.85" />
                                <path d="M95 35 C100 20, 85 10, 72 20 C78 26, 82 32, 95 35 Z" fill="#1a1a1a" opacity="0.85" />
                              </g>
                            </svg>
                            <h3
                              style={{
                                fontFamily: "serif",
                                fontWeight: 900,
                                fontSize: "26px",
                                letterSpacing: "2px",
                                color: "#111111",
                                margin: "2px 0 0 0",
                              }}
                            >
                              THE HINDU
                            </h3>
                          </div>
                        )}

                        {item.type === "svg-abplive" && (
                          <div className="text-center p-3 text-white">
                            {/* ABP arrowhead icon */}
                            <svg width="65px" height="55px" viewBox="0 0 65 55" fill="#ffffff">
                              <path d="M32.5 4 L60 48 L46 48 L32.5 24 L19 48 L5 48 Z" fill="#ffffff" />
                            </svg>
                            <div
                              style={{
                                fontWeight: 900,
                                fontSize: "32px",
                                letterSpacing: "-1px",
                                lineHeight: "1",
                                marginTop: "4px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              abp
                            </div>
                            <div
                              style={{
                                fontWeight: 900,
                                fontSize: "18px",
                                letterSpacing: "3px",
                                lineHeight: "1.2",
                                marginTop: "2px",
                                textTransform: "uppercase",
                              }}
                            >
                              LIVE
                            </div>
                          </div>
                        )}

                        {item.type === "image" && item.image && (
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{
                              maxHeight: "180px",
                              maxWidth: "90%",
                              objectFit: "contain",
                            }}
                          />
                        )}
                      </a>
                    </div>

                    {/* Card Body Content */}
                    <div className="blog-item-02__content p-4 d-flex flex-column flex-grow-1 justify-content-between">
                      <div>
                        {/* Meta Published Date */}
                        <div className="blog-item-02__meta mb-2 text-muted font-size-13 d-flex align-items-center gap-2">
                          <i className="far fa-calendar-alt text-muted"></i>
                          <span>{item.date}</span>
                        </div>

                        {/* Title */}
                        <h3
                          className="blog-item-02__title font-size-16 fw-bold mb-4"
                          style={{
                            lineHeight: "1.4",
                            color: "#1a1a1a",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            minHeight: "65px",
                          }}
                        >
                          {item.title}
                        </h3>
                      </div>

                      {/* Read More Button */}
                      <div>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-light px-3 py-2 font-size-13 fw-semibold text-dark d-inline-flex align-items-center gap-2"
                          style={{
                            backgroundColor: "#f5f6f8",
                            border: "none",
                            borderRadius: "6px",
                            transition: "all 0.2s ease",
                          }}
                        >
                          Read More <span style={{ fontSize: "14px" }}>→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
