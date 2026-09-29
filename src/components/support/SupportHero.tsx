"use client";
import React from "react";

export default function SupportHero() {
  return (
    <div className="page-banner bg-color-04">
      <div className="page-banner__wrapper">
        <div className="page-banner__shape-01"></div>
        <div className="page-banner__shape-02"></div>
        <div className="page-banner__shape-03"></div>
        <div className="container custom-container">
          {/* Page Breadcrumb Start */}
          <div className="page-breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#"></a>
              </li>
              <li className="breadcrumb-item">
                <a href="#"></a>
              </li>
              <li className="breadcrumb-item active"></li>
            </ul>
          </div>
          {/* Page Breadcrumb End */}

          {/* Page Banner Caption Start */}
          <div className="page-banner__caption-02">
            <h2 className="page-banner__main-title-02">Support</h2>
          </div>
          {/* Page Banner Caption End */}
        </div>
      </div>

      <style jsx>{`
        .page-banner {
          position: relative;
          overflow: hidden;
          z-index: 1;
          margin-top: 0 !important;
          background-color: #f8f8f8;
        }

        .page-banner__wrapper {
          position: relative;
          z-index: 1;
        }

        .page-banner__shape-01 {
          width: 194px;
          height: 194px;
          border-radius: 50%;
          border: 1px solid rgba(7, 166, 75, 0.3);
          left: -98px;
          bottom: -120px;
          position: absolute;
          z-index: -1;
        }

        .page-banner__shape-02 {
          width: 156px;
          height: 156px;
          border-radius: 50%;
          border: 1px solid rgba(7, 166, 75, 0.3);
          right: 14%;
          bottom: 98px;
          position: absolute;
          z-index: -1;
        }

        .page-banner__shape-03 {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          border: 1px solid rgba(7, 166, 75, 0.3);
          right: -40px;
          bottom: -140px;
          position: absolute;
          z-index: -1;
        }

        .custom-container {
          max-width: 1200px;
          padding-left: 15px;
          padding-right: 15px;
          margin-left: auto;
          margin-right: auto;
        }

        .page-breadcrumb .breadcrumb {
          margin-bottom: 0;
          padding-top: 16px;
          padding-bottom: 16px;
          list-style: none;
          display: flex;
          padding-left: 0;
        }

        .page-banner__caption-02 {
          padding-top: 12px;
          padding-bottom: 40px;
        }

        .page-banner__main-title-02 {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 40px;
          font-weight: 600;
          line-height: 1.3;
          margin-top: -8px;
          margin-bottom: 0;
          color: #07a64b;
        }

        @media only screen and (max-width: 767px) {
          .page-banner__shape-01 {
            width: 94px;
            height: 94px;
            left: -48px;
            bottom: -58px;
          }
          .page-banner__shape-02 {
            width: 76px;
            height: 76px;
            right: 3%;
            bottom: 100px;
          }
          .page-banner__shape-03 {
            width: 180px;
            height: 180px;
            right: 0;
            top: 70%;
          }
          .page-banner__main-title-02 {
            font-size: 28px;
          }
          .page-banner__caption-02 {
            padding-bottom: 22px;
          }
        }

        @media only screen and (max-width: 575px) {
          .page-banner__main-title-02 {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
}
