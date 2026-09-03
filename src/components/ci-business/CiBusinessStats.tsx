"use client";
import React from "react";

const STATS = [
  {
    icon: "https://prod-s3.counselindia.com/images/2.svg",
    count: "96%",
    text: "Say that our psychology programs helped them shape their career",
  },
  {
    icon: "https://prod-s3.counselindia.com/images/6.svg",
    count: "4.6+",
    text: "Google Rating",
  },
  {
    icon: "https://prod-s3.counselindia.com/images/3.svg",
    count: "200+",
    text: "Corporates trust us",
  },
  {
    icon: "https://prod-s3.counselindia.com/images/7.svg",
    count: "5000+",
    text: "Corporates trust us Expert Psychologists & Counsellors",
  },
];

export default function CiBusinessStats() {
  return (
    <div className="why-choose-section section-padding-01 bg-white">
      <div className="container custom-container">
        <div className="counter">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 justify-content-center">
            {STATS.map((stat, idx) => (
              <div key={idx} className="col">
                <div className="counter-item-03">
                  <div className="counter-item-03__icon">
                    <img
                      src={stat.icon}
                      alt={stat.count}
                      style={{
                        height: "82px",
                        maxWidth: "82px",
                        objectFit: "contain",
                        display: "inline-block",
                      }}
                    />
                  </div>
                  <div className="counter-item-03__content">
                    <span className="counter-item-03__count">
                      {stat.count}
                    </span>
                    <p className="counter-item-03__text">
                      {stat.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-padding-01 {
          padding-top: 50px;
          padding-bottom: 50px;
        }

        .counter-item-03 {
          padding: 31px 20px;
          border-radius: 8px;
          text-align: center;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .counter-item-03__icon {
          line-height: 1;
          margin-bottom: 24px;
        }

        .counter-item-03__count {
          font-size: 34px;
          line-height: 1.2;
          font-weight: 500;
          color: #07a64b;
          display: block;
        }

        .counter-item-03__text {
          color: rgba(3, 31, 66, 0.7);
          font-size: 14px;
          font-weight: 500;
          line-height: 1.7;
          max-width: 215px;
          margin: 11px auto 0;
        }
      `}</style>
    </div>
  );
}
