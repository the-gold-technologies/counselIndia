"use client";
import React from "react";
import { WORK_CULTURE_TESTIMONIALS } from "./data/aboutData";

export default function AboutWorkCulture() {
  // Duplicate array for infinite seamless continuous marquee
  const duplicatedCards = [
    ...WORK_CULTURE_TESTIMONIALS,
    ...WORK_CULTURE_TESTIMONIALS,
  ];

  return (
    <div className="testimonial-section section-padding-01 py-5 bg-color-01 border-top">
      <div className="container custom-container py-3">
        {/* Section Title */}
        <div className="section-title mb-4">
          <h2 className="section-title__title font-size-34 fw-bold text-dark mb-0">
            <mark>Progressive Work Culture at Counsel India</mark>
          </h2>
        </div>

        {/* Marquee Track contained inside standard container padding */}
        <div className="culture-marquee-container">
          <div className="culture-marquee-track">
            {duplicatedCards.map((item, idx) => (
              <div key={idx} className="culture-card-wrapper px-3">
                <div className="work-culture-card bg-white rounded-3 d-flex flex-column h-100">
                  {/* Header: Green Title & Large Light-Gray Quote Marks */}
                  <div className="d-flex align-items-start justify-content-between mb-3">
                    <h3 className="work-culture-card__title font-size-22 fw-bold mb-0">
                      {item.title}
                    </h3>
                    <div className="quote-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="38"
                        height="30"
                        viewBox="0 0 50 40"
                        fill="#e2e8f0"
                      >
                        <path d="M21.8750977,2.18046875 C22.4503906,2.18046875 22.9167969,1.7140625 22.9167969,1.13876953 C22.9167969,0.563476562 22.4503906,0.0970703125 21.8750977,0.0970703125 C9.79960938,0.110839844 0.0138671875,9.89658203 2.76635467e-06,21.9720703 L2.76635467e-06,28.2220703 C-0.01796875,34.56875 5.11230469,39.728418 11.4588867,39.7465793 C17.8055664,39.7645508 22.9652344,34.6342773 22.9833957,28.2876953 C23.0013672,21.9410156 17.8710938,16.7813477 11.5245117,16.7632813 C7.77705078,16.7526367 4.25966797,18.5698242 2.10009766,21.6325195 C2.29296875,10.8446289 11.0853516,2.19580078 21.8750977,2.18046875 Z"></path>
                        <path d="M38.5416992,16.7638672 C34.8157227,16.7667969 31.3244141,18.5832031 29.1833984,21.6326172 C29.3763672,10.8446289 38.16875,2.19580078 48.9583984,2.18056641 C49.5336914,2.18056641 50.0000977,1.71416016 50.0000977,1.13886719 C50.0000977,0.563574219 49.5336914,0.0971679688 48.9583984,0.0971679688 C36.8829102,0.1109375 27.097168,9.89667969 27.0833984,21.972168 L27.0833984,28.222168 C27.0833984,34.5503906 32.2134766,39.6804687 38.5416992,39.6804687 C44.8699219,39.6804687 50.0000977,34.5503906 50.0000977,28.222168 C50.0000977,21.8939453 44.8700195,16.7638672 38.5416992,16.7638672 Z"></path>
                      </svg>
                    </div>
                  </div>

                  {/* Description Body */}
                  <p className="work-culture-card__desc font-size-15 lh-lg mb-4 flex-grow-1">
                    {item.description}
                  </p>

                  {/* Author Avatar & Name */}
                  <div className="d-flex align-items-center pt-3 mt-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="rounded-circle"
                      style={{
                        width: "56px",
                        height: "56px",
                        objectFit: "cover",
                      }}
                    />
                    <h4 className="font-size-16 fw-bold text-dark mb-0 ms-3">
                      {item.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-color-01 {
          background-color: #f7f9f8;
        }

        .section-title__title {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          font-size: 34px;
          color: #212529;
          line-height: 1.3;
        }

        .culture-marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 8px 0 24px 0;
        }

        .culture-marquee-track {
          display: flex;
          width: max-content;
          animation: cultureMarqueeScroll 35s linear infinite;
        }

        .culture-marquee-container:hover .culture-marquee-track {
          animation-play-state: paused;
        }

        .culture-card-wrapper {
          width: 380px;
          flex-shrink: 0;
        }

        .work-culture-card {
          padding: 36px 32px 42px 32px;
          min-height: 360px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .work-culture-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .work-culture-card__title {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          color: #07a64b;
          font-size: 22px;
        }

        .work-culture-card__desc {
          color: #374151;
          font-size: 15px;
          line-height: 1.7;
        }

        @keyframes cultureMarqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .culture-card-wrapper {
            width: 310px;
          }
        }
      `}</style>
    </div>
  );
}
