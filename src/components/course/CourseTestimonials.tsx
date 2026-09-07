"use client";
import React, { useState, useEffect, useRef } from "react";

interface ReviewItem {
  quote: string;
  name: string;
  city: string;
  image: string;
}

interface Props {
  reviews: ReviewItem[];
}

export default function CourseTestimonials({ reviews }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  if (!reviews || reviews.length === 0) return null;

  // Maximum valid starting index for 3 visible cards
  const totalSlides = reviews.length;
  // We can cycle smoothly through all reviews
  const maxIndex = Math.max(0, totalSlides - 3);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  return (
    <section
      style={{
        padding: "45px 0 60px",
        backgroundColor: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="container custom-container"
        style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}
      >
        <h3
          style={{
            margin: "0 0 32px",
            fontSize: "24px",
            fontWeight: 700,
            color: "#1c2d3a",
            lineHeight: "1.3",
          }}
        >
          Success Stories
        </h3>

        {/* Carousel Viewport */}
        <div style={{ overflow: "hidden", position: "relative" }}>
          <div
            style={{
              display: "flex",
              gap: "24px",
              transform: `translateX(-${currentIndex * (100 / 3 + 1.15)}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
            className="slider-track"
          >
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                style={{
                  flex: "0 0 calc((100% - 48px) / 3)",
                  minWidth: "calc((100% - 48px) / 3)",
                  backgroundColor: "#f8fafc",
                  borderRadius: "12px",
                  padding: "36px 32px 34px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "360px",
                  position: "relative",
                  boxSizing: "border-box",
                }}
                className="testimonial-card"
              >
                {/* SVG Quote Icon on top-right matching Counsel India live theme */}
                <div
                  style={{
                    position: "absolute",
                    top: "30px",
                    right: "28px",
                    pointerEvents: "none",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46px"
                    height="36px"
                    viewBox="0 0 50 40"
                    fill="#e5eaf0"
                  >
                    <path d="M21.8750977,2.18046875 C22.4503906,2.18046875 22.9167969,1.7140625 22.9167969,1.13876953 C22.9167969,0.563476562 22.4503906,0.0970703125 21.8750977,0.0970703125 C9.79960938,0.110839844 0.0138671875,9.89658203 2.76635467e-06,21.9720703 L2.76635467e-06,28.2220703 C-0.01796875,34.56875 5.11230469,39.728418 11.4588867,39.7465793 C17.8055664,39.7645508 22.9652344,34.6342773 22.9833957,28.2876953 C23.0013672,21.9410156 17.8710938,16.7813477 11.5245117,16.7632813 C7.77705078,16.7526367 4.25966797,18.5698242 2.10009766,21.6325195 C2.29296875,10.8446289 11.0853516,2.19580078 21.8750977,2.18046875 Z" />
                    <path d="M38.5416992,16.7638672 C34.8157227,16.7667969 31.3244141,18.5832031 29.1833984,21.6326172 C29.3763672,10.8446289 38.16875,2.19580078 48.9583984,2.18056641 C49.5336914,2.18056641 50.0000977,1.71416016 50.0000977,1.13886719 C50.0000977,0.563574219 49.5336914,0.0971679688 48.9583984,0.0971679688 C36.8829102,0.1109375 27.097168,9.89667969 27.0833984,21.972168 L27.0833984,28.222168 C27.0833984,34.5503906 32.2134766,39.6804687 38.5416992,39.6804687 C44.8699219,39.6804687 50.0000977,34.5503906 50.0000977,28.222168 C50.0000977,21.8939453 44.8700195,16.7638672 38.5416992,16.7638672 Z" />
                  </svg>
                </div>

                {/* Quote Caption */}
                <div style={{ marginBottom: "24px" }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "15px",
                      lineHeight: "1.75",
                      color: "#52565b",
                      fontWeight: 400,
                      paddingRight: "36px",
                    }}
                  >
                    {rev.quote}
                  </p>
                </div>

                {/* Bottom User Info */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginTop: "auto",
                    paddingTop: "20px",
                  }}
                >
                  <img
                    src={rev.image}
                    alt={rev.name}
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <h4
                      style={{
                        margin: "0 0 3px",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#1c2d3a",
                        lineHeight: "1.3",
                      }}
                    >
                      {rev.name}
                    </h4>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        color: "#6c757d",
                        fontWeight: 400,
                      }}
                    >
                      {rev.city}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            marginTop: "28px",
          }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              style={{
                width: dotIdx === currentIndex ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: dotIdx === currentIndex ? "#07a64b" : "#cbd5e1",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          .slider-track {
            transform: translateX(-${currentIndex * 100}%) !important;
          }
          .testimonial-card {
            flex: 0 0 100% !important;
            min-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
