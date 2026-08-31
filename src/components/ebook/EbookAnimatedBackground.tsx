"use client";
import React from "react";

export default function EbookAnimatedBackground() {
  return (
    <>
      <div className="ebook-area" aria-hidden="true">
        <ul className="ebook-circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <style jsx global>{`
        .ebook-area {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
          background: #ffffff;
        }

        .ebook-circles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }

        .ebook-circles li {
          position: absolute;
          display: block;
          list-style: none;
          width: 20px;
          height: 20px;
          /* Darker, richer green floating shapes as requested */
          background: #81dc5e;
          opacity: 0.85;
          animation: ebookFloatingAnimate 25s linear infinite;
          bottom: -150px;
          border-radius: 20px;
        }

        .ebook-circles li:nth-child(1) {
          left: 25%;
          width: 80px;
          height: 80px;
          animation-delay: 0s;
        }

        .ebook-circles li:nth-child(2) {
          left: 10%;
          width: 25px;
          height: 25px;
          animation-delay: 2s;
          animation-duration: 12s;
        }

        .ebook-circles li:nth-child(3) {
          left: 70%;
          width: 25px;
          height: 25px;
          animation-delay: 4s;
        }

        .ebook-circles li:nth-child(4) {
          left: 40%;
          width: 60px;
          height: 60px;
          animation-delay: 0s;
          animation-duration: 18s;
        }

        .ebook-circles li:nth-child(5) {
          left: 65%;
          width: 25px;
          height: 25px;
          animation-delay: 0s;
        }

        .ebook-circles li:nth-child(6) {
          left: 75%;
          width: 110px;
          height: 110px;
          animation-delay: 3s;
        }

        .ebook-circles li:nth-child(7) {
          left: 35%;
          width: 150px;
          height: 150px;
          animation-delay: 7s;
        }

        .ebook-circles li:nth-child(8) {
          left: 50%;
          width: 30px;
          height: 30px;
          animation-delay: 15s;
          animation-duration: 45s;
        }

        .ebook-circles li:nth-child(9) {
          left: 20%;
          width: 20px;
          height: 20px;
          animation-delay: 2s;
          animation-duration: 35s;
        }

        .ebook-circles li:nth-child(10) {
          left: 85%;
          width: 140px;
          height: 140px;
          animation-delay: 0s;
          animation-duration: 11s;
        }

        @keyframes ebookFloatingAnimate {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.85;
            border-radius: 20px;
          }
          100% {
            transform: translateY(-1200px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
          }
        }
      `}</style>
    </>
  );
}
