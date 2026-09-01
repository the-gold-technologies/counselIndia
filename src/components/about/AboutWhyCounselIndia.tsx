"use client";
import React from "react";
import { WHY_PILLARS } from "./data/aboutData";

export default function AboutWhyCounselIndia() {
  return (
    <div className="campus-section section-padding-01 py-5 bg-white">
      <div className="container custom-container py-3">
        {/* Section Title */}
        <div className="section-title mb-4">
          <h2 className="section-title__title font-size-34 fw-bold text-dark">
            <mark>Why</mark> Counsel India
          </h2>
        </div>

        {/* Campus Wrapper with Mint Box */}
        <div className="campus-wrapper p-4 p-md-5 rounded-3">
          <div className="campus">
            <div className="campus-widget">
              {WHY_PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className="campus-widget-item d-flex align-items-start mb-4"
                >
                  <div className="campus-widget-item__icon me-3 flex-shrink-0">
                    <i className={pillar.icon}></i>
                  </div>
                  <div className="campus-widget-item__content flex-grow-1 ps-2">
                    <h3 className="campus-widget-item__title font-size-18 fw-bold mb-1">
                      <a href="javascript:void(0)" className="text-decoration-none text-dark">
                        {pillar.title}
                      </a>
                    </h3>
                    <p className="font-size-14 text-muted mb-0 lh-base">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-title__title {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          font-size: 34px;
          color: #212529;
          line-height: 1.3;
        }

        .campus-wrapper {
          background-color: #e7f6ed;
          border-radius: 8px;
        }

        .campus-widget-item__icon {
          font-size: 48px;
          color: #333333;
          line-height: 1;
          transition: color 0.25s ease;
          width: 52px;
          text-align: center;
        }

        .campus-widget-item__title {
          font-size: 18px;
          line-height: 1.5;
        }

        .campus-widget-item__title a {
          color: #212529;
          transition: color 0.25s ease;
        }

        .campus-widget-item:hover .campus-widget-item__icon,
        .campus-widget-item:hover .campus-widget-item__title a {
          color: #07a64b !important;
        }

        @media (max-width: 575px) {
          .campus-widget-item {
            flex-direction: column;
            text-align: center;
          }
          .campus-widget-item__icon {
            margin: 0 auto 12px auto;
          }
        }
      `}</style>
    </div>
  );
}
