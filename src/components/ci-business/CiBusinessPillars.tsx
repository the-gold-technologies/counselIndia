"use client";
import React, { useState } from "react";

const PILLARS = [
  {
    title: "Inclusivity:",
    desc: "Cultivate a diverse and inclusive work environment that values and respects all individuals.",
  },
  {
    title: "Stress Management:",
    desc: "Equip employees with emotional well-being skills to manage and reduce stress, leading to a healthier and more productive workplace.",
  },
  {
    title: "Work-Life Balance:",
    desc: "Promote strategies that help employees maintain a healthy balance between work responsibilities and personal life.",
  },
  {
    title: "Self-Motivation and Self-Image:",
    desc: "Encourage self-motivation and build your employee’s positive self-image",
  },
  {
    title: "Resilience Building:",
    desc: "Develop resilience to help employees adapt to challenges and bounce back from setbacks.",
  },
  {
    title: "Interpersonal Relationships:",
    desc: "Improve interpersonal skills to enhance collaboration and communication within teams.",
  },
];

export default function CiBusinessPillars() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  return (
    <div className="campus-section py-5 bg-white">
      <div className="container custom-container py-3">
        {/* Title aligned with the start of the green box */}
        <div className="section-title mb-6 text-start">
          <h2
            className="section-title__title-03 d-inline-block m-0"
            style={{
              fontSize: "clamp(26px, 3.4vw, 36px)",
              fontFamily:
                "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontWeight: 700,
              color: "#1e2532",
            }}
          >
            Enhance your <mark className="pillars-mark">employee’s</mark>{" "}
            performance with skills such as
          </h2>
        </div>

        {/* Mint Green Container with Flush Right Image */}
        <div
          className="rounded-4 overflow-hidden ps-4 ps-md-5 py-4 py-md-5 pe-0"
          style={{
            backgroundColor: "#e4f4ea",
          }}
        >
          <div className="row g-4 align-items-center">
            {/* Left: 6 Pillars list */}
            <div className="col-lg-6 col-12 pe-lg-4">
              <div className="campus-widget">
                {PILLARS.map((pillar, idx) => {
                  const isHovered = hoveredIdx === idx;

                  return (
                    <div
                      key={idx}
                      className="campus-widget-item mb-3"
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="campus-widget-item__content">
                        <h3
                          className="campus-widget-item__title m-0 d-inline-flex align-items-center gap-2"
                          style={{
                            fontSize: "18.5px",
                            fontFamily:
                              "'Playfair Display', Georgia, 'Times New Roman', serif",
                            fontWeight: 700,
                            color: isHovered ? "#07a64b" : "#1e2532",
                            lineHeight: "1.6",
                            transition: "color 0.2s ease",
                          }}
                        >
                          <span>{pillar.title}</span>
                          {isHovered && (
                            <span
                              style={{
                                display: "inline-block",
                                width: "12px",
                                height: "12px",
                                border: "1.8px solid #07a64b",
                                borderRadius: "2px",
                              }}
                            ></span>
                          )}
                        </h3>
                        <p
                          className="mb-0 text-muted"
                          style={{
                            fontSize: "13.5px",
                            color: "#475569",
                            lineHeight: "1.6",
                            marginTop: "3px",
                            fontFamily:
                              "Inter, 'Plus Jakarta Sans', system-ui, sans-serif",
                          }}
                        >
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Classroom Image attached flush to the right edge with increased height */}
            <div className="col-lg-6 col-12 ps-lg-0 pe-0 text-end">
              <div
                className="position-relative overflow-hidden w-100 h-100"
                style={{
                  minHeight: "480px",
                }}
              >
                <img
                  src="https://prod-s3.counselindia.com/images/home-university-image-campus-life.jpg"
                  alt="Campus Life"
                  className="w-100 h-100"
                  style={{
                    borderTopLeftRadius: "12px",
                    borderBottomLeftRadius: "12px",
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                    objectFit: "cover",
                    minHeight: "480px",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pillars-mark {
          position: relative;
          z-index: 0;
          padding: 0 0 6px;
          color: inherit;
          background-color: transparent;
          display: inline-block;
        }

        .pillars-mark::after {
          content: "";
          position: absolute;
          width: 80px;
          height: 10px;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          z-index: -1;
          background-image: url("/assets/images/headline-curve-02.svg");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        }
      `}</style>
    </div>
  );
}
