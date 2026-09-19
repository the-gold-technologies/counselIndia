"use client";
import React, { useEffect, useState, useRef } from "react";
import { ALUMNI_STATS } from "./data/alumniData";

export default function AlumniStats() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="why-choose-section section-padding-01 bg-white"
      style={{ paddingTop: "50px", paddingBottom: "0px" }}
    >
      <div className="container custom-container">
        {/* Counter Flex Row */}
        <div className="counter counter-row d-flex flex-wrap justify-content-center align-items-start">
          {ALUMNI_STATS.map((item) => (
            <div key={item.id} className="counter-item-03 text-center px-2">
              <div className="counter-item-03__icon mb-3 d-flex justify-content-center align-items-center">
                <img
                  src={item.icon}
                  alt={item.label}
                  width={48}
                  height={48}
                  style={{ objectFit: "contain", maxWidth: "48px", maxHeight: "48px" }}
                />
              </div>
              <div className="counter-item-03__content">
                <h3 className="counter-item-03__count font-size-36 fw-bold mb-2">
                  {hasAnimated ? item.count : "0"}
                  {item.suffix}
                </h3>
                <p className="counter-item-03__text">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .counter-row {
          margin: 0 auto;
          max-width: 1200px;
          display: flex;
          justify-content: space-around;
        }

        .counter-item-03 {
          width: 20%;
          box-sizing: border-box;
          margin-bottom: 20px;
        }

        .counter-item-03__count {
          color: #07a64b;
          font-family: var(--font-inter), sans-serif;
          font-size: 36px;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.5px;
        }

        .counter-item-03__text {
          font-family: var(--font-inter), sans-serif;
          color: #4a5568;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.35;
          max-width: 145px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .counter-item-03 {
            width: 48%;
            margin-bottom: 25px;
          }
        }
      `}</style>
    </div>
  );
}
