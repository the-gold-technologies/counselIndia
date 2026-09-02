"use client";
import React from "react";
import { successVideos } from "./data/successStoriesData";

export default function SuccessVideoJourneys() {
  return (
    <div className="video-section py-5 bg-white">
      <div className="container custom-container py-2">
        {/* Title with Exact Counsel India Mark Headline Curve */}
        <div className="text-start mb-4">
          <h2
            className="section-title__title"
            style={{
              fontSize: "clamp(26px, 3.2vw, 34px)",
              fontWeight: 700,
              fontFamily:
                "Georgia, 'Playfair Display', 'Times New Roman', serif",
              color: "#1e293b",
              margin: 0,
            }}
          >
            <mark>Life-Changing Journeys</mark>
          </h2>
        </div>

        {/* 3-Column Video Embed Grid matching live screenshot */}
        <div className="grid-container-2">
          {successVideos.map((video) => (
            <div key={video.id} className="grid-item-2">
              <iframe
                width="100%"
                height="290px"
                src={video.url}
                title={`Counsel India Success Video ${video.id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  border: "none",
                  width: "100%",
                  height: "290px",
                  display: "block",
                }}
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
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
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
          -webkit-mask-image: url(/assets/images/headline-curve-02.svg);
          mask-image: url(/assets/images/headline-curve-02.svg);
        }

        .grid-container-2 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .grid-item-2 {
          border-radius: 20px;
          overflow: hidden;
          background-color: #000000;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .grid-item-2:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.16);
        }

        @media (max-width: 992px) {
          .grid-container-2 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .grid-container-2 {
            display: block !important;
          }
          .grid-item-2 {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
}
