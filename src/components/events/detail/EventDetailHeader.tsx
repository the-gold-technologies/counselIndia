"use client";
import React from "react";

interface EventDetailHeaderProps {
  address: string;
  date: string;
  time: string;
}

export default function EventDetailHeader({
  address,
  date,
  time,
}: EventDetailHeaderProps) {
  return (
    <div
      className="event-details__header mx-auto text-center"
      style={{
        maxWidth: "840px",
        paddingTop: "65px",
        paddingBottom: "35px",
      }}
    >
      {/* 40px Didone Serif Title matching screenshot */}
      <h2
        className="event-details__title"
        style={{
          fontSize: "clamp(30px, 4.2vw, 42px)",
          fontFamily:
            "'Playfair Display', Georgia, 'Times New Roman', serif",
          fontWeight: 700,
          color: "#1d2a44",
          lineHeight: "1.3",
          marginBottom: "22px",
        }}
      >
        About The Event
      </h2>

      {/* Meta Action Bar matching screenshot */}
      <div
        className="event-details__meta d-flex flex-wrap justify-content-center align-items-center gap-4 gap-md-5"
        style={{
          fontFamily: "Poppins, 'Plus Jakarta Sans', sans-serif",
          fontSize: "15px",
          color: "#212529",
        }}
      >
        {/* Address */}
        <span className="meta-action d-inline-flex align-items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#212529"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="meta-action__value">{address}</span>
        </span>

        {/* Date */}
        <span className="meta-action d-inline-flex align-items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#212529"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          <span className="meta-action__value">{date}</span>
        </span>

        {/* Time */}
        <span className="meta-action d-inline-flex align-items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#212529"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="meta-action__value">{time}</span>
        </span>
      </div>
    </div>
  );
}
