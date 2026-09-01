"use client";
import React, { useState, useEffect } from "react";

export interface NewsletterItem {
  id: number;
  name: string;
  monthTitle?: string;
  image: string;
}

const NEWSLETTERS: NewsletterItem[] = [
  {
    id: 1,
    name: "Counsel India's",
    monthTitle: "February Newsletter",
    image:
      "https://prod-s3.counselindia.com/blog/Color Theory Presentation In Colorful Simple Style (1)_1741849717.jpg",
  },
  {
    id: 2,
    name: "Counsel India's",
    monthTitle: "January Newsletter",
    image:
      "https://prod-s3.counselindia.com/blog/Art Therapy for Kids. (3)_1741849646.jpg",
  },
  {
    id: 3,
    name: "Counsel India",
    monthTitle: "November Newsletter",
    image: "/assets/images/blog/blog-01.jpg",
  },
  {
    id: 4,
    name: "Counsel India's",
    monthTitle: "December Newsletter",
    image: "/assets/images/blog/blog-04.jpg",
  },
  {
    id: 5,
    name: "Counsel India's",
    monthTitle: "October Newsletter",
    image: "/assets/images/blog/blog-05.jpg",
  },
];

interface Props {
  newsletters?: NewsletterItem[];
  onDownloadClick: (item: NewsletterItem) => void;
  onSubscribeClick: () => void;
}

export default function NewsletterFeaturedArticles({
  newsletters = NEWSLETTERS,
  onDownloadClick,
  onSubscribeClick,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsive items per view detection
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, newsletters.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Optional Autoplay
  useEffect(() => {
    if (maxIndex === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="featured-articles-section py-5">
      <div className="container">
        <div className="row gy-5 align-items-center">
          {/* Left Column: Heading, Quote & Subscribe Button */}
          <div className="col-xl-3 col-lg-4 col-md-5">
            <div className="featured-left-content pe-lg-3">
              <span className="featured-subtitle">NEWSLETTERS</span>

              <h2 className="featured-main-title">
                Featured
                <br />
                <span className="articles-underline-wrapper">
                  Articles
                  <svg
                    className="articles-underline-svg"
                    viewBox="0 0 160 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 9C40 4 120 3 158 8"
                      stroke="#0da74b"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 14C50 9 130 8 150 13"
                      stroke="#0da74b"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <p className="featured-description">
                &quot;Discover our latest featured article: an in-depth
                exploration, offering valuable insights and practical
                advice.&quot;
              </p>

              <div>
                <button
                  type="button"
                  className="featured-subscribe-btn"
                  onClick={onSubscribeClick}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 3-Card Carousel */}
          <div className="col-xl-9 col-lg-8 col-md-7">
            <div className="carousel-container position-relative">
              {/* Carousel Track Window */}
              <div className="carousel-overflow-wrapper">
                <div
                  className="carousel-track"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                  }}
                >
                  {newsletters.map((e) => (
                    <div
                      className="carousel-slide"
                      key={e.id}
                      style={{
                        flex: `0 0 ${100 / itemsPerView}%`,
                        maxWidth: `${100 / itemsPerView}%`,
                      }}
                    >
                      <div className="newsletter-card h-100">
                        {/* Card Image */}
                        <div className="newsletter-card-img-wrapper">
                          <img
                            src={e.image}
                            alt={e.name}
                            className="newsletter-card-img"
                            onError={(ev) => {
                              ev.currentTarget.onerror = null;
                              ev.currentTarget.src =
                                "/assets/images/blog/skills.jpg";
                            }}
                          />
                        </div>

                        {/* Card Body */}
                        <div className="newsletter-card-body">
                          <h3 className="newsletter-card-title">
                            {e.name}
                            {e.monthTitle && (
                              <>
                                <br />
                                {e.monthTitle}
                              </>
                            )}
                          </h3>

                          <button
                            type="button"
                            className="newsletter-card-btn"
                            onClick={() => onDownloadClick(e)}
                          >
                            <span>Download Now &rarr;</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .featured-articles-section {
          background-color: #ffffff;
        }

        .featured-subtitle {
          color: #0da74b;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 8px;
        }

        .featured-main-title {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          font-size: 38px;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .articles-underline-wrapper {
          position: relative;
          display: inline-block;
        }

        .articles-underline-svg {
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 100%;
          height: 14px;
          pointer-events: none;
        }

        .featured-description {
          font-size: 13.5px;
          color: #4b5563;
          line-height: 1.55;
          margin-bottom: 24px;
          max-width: 250px;
        }

        .featured-subscribe-btn {
          background-color: #0da74b;
          color: #ffffff;
          border: none;
          padding: 10px 32px;
          border-radius: 5px;
          font-size: 14.5px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.15s ease;
        }

        .featured-subscribe-btn:hover {
          background-color: #0b8e3f;
          transform: translateY(-1px);
        }

        /* Carousel Track & Container */
        .carousel-container {
          position: relative;
          padding: 0 10px;
        }

        .carousel-overflow-wrapper {
          overflow: hidden;
          padding: 12px 4px;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1);
          width: 100%;
        }

        .carousel-slide {
          padding: 0 10px;
          box-sizing: border-box;
        }

        /* Card Styling */
        .newsletter-card {
          background-color: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
          padding: 16px;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .newsletter-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .newsletter-card-img-wrapper {
          width: 100%;
          height: 195px;
          border-radius: 4px;
          overflow: hidden;
          background-color: #f8fafc;
        }

        .newsletter-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .newsletter-card-body {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: space-between;
          padding-top: 14px;
        }

        .newsletter-card-title {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          font-size: 16px;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.35;
          margin-bottom: 16px;
          min-height: 44px;
        }

        .newsletter-card-btn {
          background-color: #0da74b;
          color: #ffffff;
          border: none;
          border-radius: 5px;
          width: 100%;
          height: 42px;
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .newsletter-card-btn:hover {
          background-color: #0b8e3f;
        }

        @media (max-width: 991px) {
          .featured-left-content {
            text-align: center;
          }
          .featured-description {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
