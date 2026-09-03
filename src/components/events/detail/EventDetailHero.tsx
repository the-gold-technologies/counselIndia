"use client";
import React from "react";

interface EventDetailHeroProps {
  banner: string;
  name: string;
}

export default function EventDetailHero({
  banner,
  name,
}: EventDetailHeroProps) {
  return (
    <div className="tutor-course-top-info w-100 p-0 m-0 bg-white">
      <div className="event_banner w-100 p-0 m-0 overflow-hidden">
        <img
          src={banner}
          alt={name}
          className="w-100"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "480px",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://prod-s3.counselindia.com/mainevent/Boot Camp Post (4375 x 1563 px)_1735211360.jpg";
          }}
        />
      </div>
    </div>
  );
}
