"use client";
import React from "react";
import { ACCREDITATIONS } from "./data/aboutData";

export default function AboutAccreditations() {
  const row1 = ACCREDITATIONS.slice(0, 4);
  const row2 = ACCREDITATIONS.slice(4);

  return (
    <div className="section-padding-01">
      <div className="container custom-container">
        {/* Section Title */}
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="section-title__title">
            <mark>Accreditations</mark>
          </h2>
        </div>

        <div className="row accreditation justify-content-center">
          {row1.map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-4 col-sm-6 mb-4">
              <div className="categories-item">
                <div className="categories-item__link">
                  <div className="categories-item__info">
                    <h3 className="categories-item__name">{item.title}</h3>
                    <p className="categories-item-02__description">{item.number}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {row2.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-4 col-sm-6 mb-4">
              <div className="categories-item">
                <div className="categories-item__link">
                  <div className="categories-item__info">
                    <h3 className="categories-item__name">{item.title}</h3>
                    <p className="categories-item-02__description">{item.number}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

        .categories-item__link {
          border-top: 5px solid #07a64b;
          background-color: #e7f6ed;
          border-left: none;
          border-radius: 5px;
          padding: 30px 25px;
          display: block;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .categories-item__name {
          font-family: "Poppins", sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #232937;
          margin-bottom: 8px;
        }

        .categories-item-02__description {
          font-family: "Poppins", sans-serif;
          font-size: 15px;
          color: #555;
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
}
