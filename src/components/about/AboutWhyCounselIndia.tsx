"use client";
import React from "react";
import { WHY_PILLARS } from "./data/aboutData";

export default function AboutWhyCounselIndia() {
  return (
    <div className="campus-section section-padding-01">
      <div className="container custom-container">
        {/* Section Title */}
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="section-title__title-03">
            <mark>Why</mark> Counsel India
          </h2>
        </div>

        {/* Campus Wrapper */}
        <div
          className="campus-wrapper"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="campus">
            <div className="campus-widget">
              {WHY_PILLARS.map((pillar) => (
                <div key={pillar.id} className="campus-widget-item">
                  <div className="campus-widget-item__icon">
                    <i className={pillar.icon}></i>
                  </div>
                  <div className="campus-widget-item__content">
                    <h3 className="campus-widget-item__title">
                      <a href="javascript:void(0)">{pillar.title}</a>
                    </h3>
                    <p>{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
          margin-bottom: 30px;
        }

        .section-title__title-03 {
          font-family: "Playfair Display", serif;
          font-size: 40px;
          font-weight: 700;
          line-height: 56px;
          color: #232937;
          margin: 0;
        }

        .section-title__title-03 mark {
          position: relative;
          z-index: 0;
          padding: 0 0 10px;
          color: inherit;
          background-color: transparent;
          display: inline-block;
        }

        .section-title__title-03 mark::after {
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

        .campus-wrapper {
          background-image: linear-gradient(90deg, #e6f6ed 100%, #fff 70%);
          border-radius: 8px;
          padding: 50px 50px 20px 50px;
        }

        .campus-widget-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 30px;
        }

        .campus-widget-item__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 55px;
          font-size: 38px;
          color: #333333;
          flex-shrink: 0;
          margin-right: 25px;
          transition: color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .campus-widget-item__title {
          font-family: "Poppins", sans-serif;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.5;
          margin-bottom: 6px;
        }

        .campus-widget-item__title a {
          color: #232937;
          text-decoration: none;
          transition: color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .campus-widget-item__content p {
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.75;
          color: #333333;
          margin: 0;
        }

        .campus-widget-item:hover .campus-widget-item__icon,
        .campus-widget-item:hover .campus-widget-item__title a {
          color: #07a64b !important;
        }

        @media (max-width: 768px) {
          .campus-wrapper {
          }
        }

        @media only screen and (max-width: 575px) {
          .section-title__title-03 {
            font-size: 22px;
          }
          .campus-widget-item {
            flex-direction: column;
            text-align: center;
          }
          .campus-widget-item__icon {
            margin: 0 auto 10px;
          }
          .campus-widget-item__content {
            padding-left: 0;
          }
        }
      `}</style>
    </div>
  );
}
