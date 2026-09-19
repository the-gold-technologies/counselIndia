"use client";
import React from "react";
import { WORK_CULTURE_TESTIMONIALS } from "./data/aboutData";

export default function AboutWorkCulture() {
  const duplicatedCards = [
    ...WORK_CULTURE_TESTIMONIALS,
    ...WORK_CULTURE_TESTIMONIALS,
  ];

  return (
    <div className="testimonial-section bg-color-01 section-padding-01 scene">
      <div className="container custom-container">
        {/* Section Title */}
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="section-title__title">
            Progressive Work Culture at <mark>Counsel India </mark>
          </h2>
        </div>

        {/* Testimonials Marquee Slider */}
        <div className="culture-marquee-container">
          <div className="culture-marquee-track">
            {duplicatedCards.map((item, idx) => (
              <div key={idx} className="culture-card-wrapper px-3">
                <div className="testimonial-item bg-white">
                  <div className="testimonial-quote-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50px"
                      height="40px"
                      viewBox="0 0 50 40"
                    >
                      <path d="M21.8750977,2.18046875 C22.4503906,2.18046875 22.9167969,1.7140625 22.9167969,1.13876953 C22.9167969,0.563476562 22.4503906,0.0970703125 21.8750977,0.0970703125 C9.79960938,0.110839844 0.0138671875,9.89658203 2.76635467e-06,21.9720703 L2.76635467e-06,28.2220703 C-0.01796875,34.56875 5.11230469,39.728418 11.4588867,39.7465793 C17.8055664,39.7645508 22.9652344,34.6342773 22.9833957,28.2876953 C23.0013672,21.9410156 17.8710938,16.7813477 11.5245117,16.7632813 C7.77705078,16.7526367 4.25966797,18.5698242 2.10009766,21.6325195 C2.29296875,10.8446289 11.0853516,2.19580078 21.8750977,2.18046875 Z"></path>
                      <path d="M38.5416992,16.7638672 C34.8157227,16.7667969 31.3244141,18.5832031 29.1833984,21.6326172 C29.3763672,10.8446289 38.16875,2.19580078 48.9583984,2.18056641 C49.5336914,2.18056641 50.0000977,1.71416016 50.0000977,1.13886719 C50.0000977,0.563574219 49.5336914,0.0971679688 48.9583984,0.0971679688 C36.8829102,0.1109375 27.097168,9.89667969 27.0833984,21.972168 L27.0833984,28.222168 C27.0833984,34.5503906 32.2134766,39.6804687 38.5416992,39.6804687 C44.8699219,39.6804687 50.0000977,34.5503906 50.0000977,28.222168 C50.0000977,21.8939453 44.8700195,16.7638672 38.5416992,16.7638672 Z"></path>
                    </svg>
                  </div>
                  <div className="testimonial-main-content">
                    <div className="testimonial-caption">
                      <h3 className="testimonial-caption__title">
                        {item.title}
                      </h3>
                      <p>{item.description}</p>
                    </div>
                    <div className="testimonial-info d-flex align-items-center mt-3">
                      <div className="testimonial-info__image me-3">
                        <img
                          src={item.image}
                          alt="Avatar"
                          width={60}
                          height={60}
                          className="rounded-circle"
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="testimonial-info__caption">
                        <h5 className="testimonial-info__name mb-0">
                          {item.name}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-color-01 {
          background-color: #f5f5f5;
        }

        .section-padding-01 {
          padding-top: 50px;
          padding-bottom: 50px;
        }

        .custom-container {
          max-width: 1200px;
          padding-left: 15px;
          padding-right: 15px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-title {
          margin-bottom: 37px;
        }

        .section-title__title {
          font-family: "Playfair Display", serif;
          font-size: 28px;
          line-height: 1.5;
          font-weight: 700;
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

        .testimonial-item {
          width: 100%;
          min-height: 330px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          padding: 32px 36px 32px;
          border-radius: 8px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          background: #ffffff;
        }

        .testimonial-main-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-grow: 1;
          height: 100%;
        }

        .testimonial-quote-icon {
          position: absolute;
          top: 25px;
          right: 30px;
        }

        .testimonial-quote-icon svg {
          fill: #d8dde2;
        }

        .testimonial-caption {
          flex-grow: 1;
        }

        .testimonial-caption__title {
          font-family: "Playfair Display", serif;
          font-size: 22px;
          font-weight: 700;
          line-height: 1.4;
          margin: 0 0 14px;
          color: #07a64b;
        }

        .testimonial-caption p {
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.75;
          color: #4b5563;
          margin-bottom: 20px;
        }

        .testimonial-info {
          margin-top: auto;
          padding-top: 15px;
        }

        .testimonial-info__name {
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #232937;
        }

        .culture-marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 10px 0 20px 0;
        }

        .culture-marquee-track {
          display: flex;
          align-items: stretch;
          width: max-content;
          animation: marqueeScroll 45s linear infinite;
        }

        .culture-marquee-container:hover .culture-marquee-track {
          animation-play-state: paused;
        }

        .culture-card-wrapper {
          width: 400px;
          flex-shrink: 0;
          display: flex;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
