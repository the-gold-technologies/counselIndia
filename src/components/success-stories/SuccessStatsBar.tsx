"use client";
import React from "react";

export default function SuccessStatsBar() {
  return (
    <div className="w-100 overflow-hidden">
      <div
        className="stats-section position-relative w-100"
        style={{
          height: "248px",
          width: "100%",
          backgroundImage:
            "url('https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/images/stats.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Link 1: LinkedIn */}
        <a
          href="https://in.linkedin.com/company/counsel-india"
          target="_blank"
          rel="noopener noreferrer"
          title="Counsel India LinkedIn"
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            width: "33.333%",
            height: "100%",
            cursor: "pointer",
            zIndex: 2,
          }}
        ></a>

        {/* Link 2: YouTube Playlist */}
        <a
          href="https://www.youtube.com/watch?v=UJ1gDnbgozI&list=PLHQpk8l3QxXAbt5asTdhCzWTPElfevZqB"
          target="_blank"
          rel="noopener noreferrer"
          title="Counsel India Success Stories YouTube Playlist"
          style={{
            position: "absolute",
            left: "33.333%",
            top: "0",
            width: "33.333%",
            height: "100%",
            cursor: "pointer",
            zIndex: 2,
          }}
        ></a>

        {/* Link 3: Google Review */}
        <a
          href="https://g.page/r/CeF8AKdxnSRkEBM/review"
          target="_blank"
          rel="noopener noreferrer"
          title="Counsel India Google Reviews"
          style={{
            position: "absolute",
            left: "66.666%",
            top: "0",
            width: "33.333%",
            height: "100%",
            cursor: "pointer",
            zIndex: 2,
          }}
        ></a>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .stats-section {
            height: 110px !important;
            background-size: cover !important;
          }
        }
      `}</style>
    </div>
  );
}
