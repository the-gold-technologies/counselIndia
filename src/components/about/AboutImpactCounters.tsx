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

export default function AboutImpactCounters() {
  return (
    <div className="why-choose-section">
      <div className="why-choose-section section-padding-01">
        <div className="container">
          {/* Counter Start */}
          <div className="counter">
            <div className="row banner-active justify-content-center">
              {COUNTERS_DATA.map((item) => (
                <div
                  key={item.id}
                  className="col-lg col-md-4 col-sm-6 col-12 mb-4 mb-lg-0"
                >
                  <div className="counter-item-03">
                    <div className="counter-item-03__icon">
                      <img
                        src={item.icon}
                        alt={item.count}
                        style={{
                          height: "65px",
                          width: "auto",
                          display: "inline-block",
                        }}
                      />
                    </div>
                    <div className="counter-item-03__content">
                      <span className="counter-item-03__count">
                        {item.count}
                      </span>
                      <p className="counter-item-03__text">
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
          {/* Counter End */}
        </div>
      </div>

      <style jsx>{`
        .section-padding-01 {
          padding-top: 50px;
          padding-bottom: 50px;
        }

        .counter-item-03 {
          padding: 31px 15px;
          border-radius: 8px;
          text-align: center;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .counter-item-03__icon {
          font-size: 82px;
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

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .counter-item-03 {
            padding: 21px 10px;
          }
          .counter-item-03__icon {
            font-size: 70px;
          }
          .counter-item-03__count {
            font-size: 28px;
          }
        }

        @media only screen and (max-width: 767px) {
          .counter-item-03 {
            padding: 15px;
          }
          .counter-item-03__icon {
            font-size: 50px;
            margin-bottom: 20px;
          }
          .counter-item-03__count {
            font-size: 20px;
          }
          .counter-item-03__text {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
}
