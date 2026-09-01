"use client";
import React from "react";

const COUNTERS_DATA = [
  {
    id: 1,
    count: "10000+",
    text: "Certified Counsellors\nProduced",
    icon: "/assets/images/3.svg",
  },
  {
    id: 2,
    count: "200000+",
    text: "Happy Learners and\ncounting",
    icon: "/assets/images/7.svg",
  },
  {
    id: 3,
    count: "22+",
    text: "Countries where our\nparticipants come\nfrom",
    icon: "/assets/images/2.svg",
  },
  {
    id: 4,
    count: "5000+",
    text: "extensive network of\nPsychologists &\nCounsellors",
    icon: "/assets/images/6.svg",
  },
  {
    id: 5,
    count: "20+",
    text: "Awards &\nAccreditations",
    icon: "/assets/images/1.svg",
  },
];

export default function GrowthCoursesCounters() {
  return (
    <div className="why-choose-section py-5 bg-white">
      <div className="container custom-container py-3">
        <div className="row g-4 justify-content-center align-items-start text-center">
          {COUNTERS_DATA.map((item) => (
            <div key={item.id} className="col-lg col-md-4 col-sm-6 col-12">
              <div className="counter-item-03 px-2 py-2">
                <div className="counter-item-03__icon mb-3">
                  <img
                    src={item.icon}
                    alt={item.count}
                    width={65}
                    height={65}
                    style={{ objectFit: "contain", display: "inline-block" }}
                  />
                </div>
                <div className="counter-item-03__content">
                  <span className="counter-item-03__count d-block mb-1">
                    {item.count}
                  </span>
                  <p className="counter-item-03__text mb-0">
                    {item.text.split("\n").map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        {idx < item.text.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .counter-item-03 {
          text-align: center;
        }

        .counter-item-03__icon {
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .counter-item-03__count {
          color: #07a64b;
          font-size: 32px;
          font-weight: 700;
          font-family: inherit;
          line-height: 1.2;
        }

        .counter-item-03__text {
          color: #334155;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.45;
        }

        @media (max-width: 991px) {
          .counter-item-03__count {
            font-size: 28px;
          }
          .counter-item-03__text {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
}
