"use client";
import React from "react";
import { NEWS_ARTICLES, NewsItem } from "./data/newsData";

export default function NewsGrid() {
  return (
    <div
      className="blog-section pb-5 pt-2"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container custom-container">
        <div className="row gy-5 gx-4">
          {NEWS_ARTICLES.map((item: NewsItem) => (
            <div className="col-xl-4 col-md-6 col-12 grid-item" key={item.id}>
              <div
                className="blog-item-02 h-100 d-flex flex-column bg-white overflow-hidden"
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 10px 35px rgba(0, 0, 0, 0.05)",
                  border: "1px solid #f1f5f9",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Full Width Edge-to-Edge Image */}
                <div
                  className="blog-item-02__image position-relative overflow-hidden w-100"
                  style={{
                    height: "291px",
                    backgroundColor: "#f8fafc",
                  }}
                >
                  <a
                    href={item.redirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-block w-100 h-100"
                  >
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-100 h-100"
                      style={{
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.6s cubic-bezier(0, 0, 0.2, 1)",
                      }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://prod-s3.counselindia.com/images/home-university-image-campus-life.jpg";
                      }}
                    />
                  </a>
                </div>

                {/* Content Section with padding */}
                <div
                  className="blog-item-02__content d-flex flex-column flex-grow-1 text-start"
                  style={{
                    padding: "20px 24px 28px",
                  }}
                >
                  {/* Meta Date: 14px Poppins */}
                  <div className="blog-item-02__meta mb-2 text-start">
                    <span
                      className="meta-action d-inline-flex align-items-center gap-2"
                      style={{
                        fontSize: "14px",
                        fontFamily:
                          "Poppins, 'Plus Jakarta Sans', system-ui, sans-serif",
                        color: "#7e7e7e",
                        fontWeight: 400,
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#7e7e7e"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="4"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                      {item.publishedDate}
                    </span>
                  </div>

                  {/* 16px Playfair Display Headline */}
                  <h3
                    className="blog-item-02__title mb-3 text-start"
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.6",
                      fontFamily:
                        "'Playfair Display', Georgia, 'Times New Roman', serif",
                      fontWeight: 700,
                      color: "#1e2532",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      height: "3.2em",
                    }}
                  >
                    <a
                      href={item.redirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark card-title-link"
                    >
                      {item.title}
                    </a>
                  </h3>

                  {/* Read More Button on Left Corner */}
                  <div className="mt-auto text-start">
                    <a
                      href={item.redirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn news-read-btn d-inline-flex align-items-center justify-content-center"
                    >
                      Read More &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .blog-item-02:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08) !important;
        }

        .blog-item-02:hover img {
          transform: scale(1.06);
        }

        .card-title-link:hover {
          color: #07a64b !important;
        }

        /* Default state: black text on dull white background */
        .news-read-btn {
          background-color: #f4f5f7 !important;
          border: none !important;
          color: #1e2532 !important;
          font-weight: 500 !important;
          font-size: 13px !important;
          padding: 4px 20px !important;
          border-radius: 4px !important;
          transition: all 0.25s ease !important;
        }

        /* Hover state: brighter white background with green text */
        .news-read-btn:hover {
          background-color: #ffffff !important;
          color: #07a64b !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
          transform: translateX(2px);
        }
      `}</style>
    </div>
  );
}
