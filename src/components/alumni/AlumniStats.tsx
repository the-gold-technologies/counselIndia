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
      className="why-choose-section section-padding-01 py-5 bg-white"
    >
      <div className="container custom-container py-3">
        {/* Counter Flex Row */}
        <div className="counter-row d-flex flex-wrap justify-content-center align-items-start">
          {ALUMNI_STATS.map((item) => (
            <div key={item.id} className="counter-item-03 text-center px-2">
              <div className="counter-item-03__icon mb-3 d-flex justify-content-center align-items-center">
                <img
                  src={item.icon}
                  alt={item.label}
                  width={46}
                  height={46}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="counter-item-03__content">
                <h3 className="counter-item-03__count font-size-32 fw-bold mb-2">
                  {hasAnimated ? item.count : "0"}
                  {item.suffix}
                </h3>
                <p className="counter-item-03__text font-size-14 mb-0">
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
          max-width: 1140px;
        }

        .counter-item-03 {
          width: 20%;
          box-sizing: border-box;
          margin-bottom: 20px;
        }

        .counter-item-03__count {
          color: #07a64b;
          font-family: var(--font-inter), sans-serif;
          font-size: 32px;
          font-weight: 700;
          line-height: 1.2;
        }

        .counter-item-03__text {
          font-family: var(--font-inter), sans-serif;
          color: #475569;
          line-height: 1.4;
          max-width: 170px;
          margin: 0 auto;
        }

        @media (max-width: 991px) {
          .counter-item-03 {
            width: 33.33%;
          }
        }

        @media (max-width: 575px) {
          .counter-item-03 {
            width: 50%;
          }
        }
      `}</style>
    </div>
  );
}
