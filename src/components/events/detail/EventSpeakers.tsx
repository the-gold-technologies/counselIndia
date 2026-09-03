"use client";
import React from "react";
import { Speaker } from "../data/eventDetailData";

interface EventSpeakersProps {
  speakers: Speaker[];
}

export default function EventSpeakers({ speakers }: EventSpeakersProps) {
  if (!speakers || speakers.length === 0) return null;

  return (
    <div
      className="event-details__speakers py-5 bg-white border-top"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container custom-container">
        {/* Title: 40px Didone Serif matching screenshot */}
        <div className="text-center mb-5 pb-2">
          <h3
            className="event-details__title m-0"
            style={{
              fontSize: "clamp(30px, 4vw, 40px)",
              fontFamily:
                "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontWeight: 700,
              color: "#1d2a44",
              lineHeight: "1.3",
            }}
          >
            Our Speakers
          </h3>
        </div>

        {/* Speakers Row: Clean 170x170 Circular Image + Name */}
        <div className="row justify-content-center gy-4 gx-5">
          {speakers.map((speaker) => (
            <div className="col-lg-4 col-md-6 col-12" key={speaker.id}>
              <div className="speaker-item text-center">
                <div
                  className="speaker-item__thumbnail mx-auto overflow-hidden position-relative"
                  style={{
                    width: "170px",
                    height: "170px",
                    borderRadius: "50%",
                    backgroundColor: "#f1f5f9",
                  }}
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-100 h-100"
                    style={{
                      width: "170px",
                      height: "170px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://prod-s3.counselindia.com/speaker/3irS8Nk3ZZ.png";
                    }}
                  />
                </div>
                <div className="speaker-item__content mt-3">
                  <h6
                    className="speaker-item__name m-0"
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#1e2532",
                      fontFamily: "Poppins, 'Plus Jakarta Sans', sans-serif",
                      lineHeight: "1.6",
                    }}
                  >
                    {speaker.name}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
