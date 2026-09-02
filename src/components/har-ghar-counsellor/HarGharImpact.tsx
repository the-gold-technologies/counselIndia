"use client";
import React, { useState } from "react";

export default function HarGharImpact() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 25, y: y * 25 });
  };

  const impacts = [
    {
      count: "500+",
      label: "Mental Health Ambassadors",
      icon: "https://prod-s3.counselindia.com/mastergalaxyimages/phargharImage%203_1725105478.png",
    },
    {
      count: "200000+",
      label: "Lives Impacted",
      icon: "https://prod-s3.counselindia.com/mastergalaxyimages/hargharImage%201_1725105456.png",
    },
    {
      count: "10000+",
      label: "Awareness Drives Conducted",
      icon: "https://prod-s3.counselindia.com/mastergalaxyimages/hargharImage%202_1725105468.png",
    },
  ];

  return (
    <div
      className="about-section position-relative bg-white overflow-hidden"
      style={{ paddingTop: "70px", paddingBottom: "80px" }}
      onMouseMove={handleMouseMove}
    >
      {/* Decorative Interactive Floating Dot Grid Pattern on left side */}
      <div
        className="position-absolute d-none d-lg-block pointer-events-none"
        style={{
          left: "2%",
          top: "42%",
          transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px)`,
          transition: "transform 0.12s ease-out",
          zIndex: 1,
        }}
      >
        <img
          src="https://prod-s3.counselindia.com/images/shape/edumall-shape-grid-dots.png"
          alt="Dot Grid Shape"
          width={180}
          height={260}
          style={{
            opacity: 0.8,
            width: "180px",
            height: "auto",
            display: "block",
          }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="container custom-container position-relative" style={{ zIndex: 2 }}>
        {/* Lighter Shade Background Panel Box matching PHP .about-wrapper */}
        <div
          className="about-wrapper position-relative"
          style={{
            backgroundColor: "#f7f7f8",
            borderRadius: "14px",
            padding: "50px 30px 60px",
          }}
        >
          {/* Title & Subtitle */}
          <div className="text-center mb-5 pb-2">
            <h2
              className="section-title__title-02 mb-3"
              style={{
                fontSize: "clamp(32px, 4vw, 42px)",
                fontWeight: 700,
                fontFamily:
                  "Georgia, 'Playfair Display', 'Times New Roman', serif",
                color: "#07a64b",
                letterSpacing: "-0.5px",
              }}
            >
              Lives Impacted So far
            </h2>

            <p
              className="mb-0"
              style={{
                fontSize: "15px",
                lineHeight: "1.65",
                color: "#212529",
                fontWeight: 700,
                maxWidth: "880px",
                margin: "0 auto",
              }}
            >
              Practical Psychology Learning Platform We love to support our
              community who face mental health challenges daily. Over the past
              8+ years,
              <br className="d-none d-md-block" />
              we’ve celebrated numerous milestones in improving mental wellness.
            </p>
          </div>

          {/* 3 Impact Cards */}
          <div className="row gy-4 justify-content-center">
            {impacts.map((item, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 col-12">
                <div
                  className="impact-card bg-white text-center d-flex flex-column align-items-center justify-content-center"
                  style={{
                    borderRadius: "8px",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05)",
                    border: "1px solid #f1f5f9",
                    padding: "45px 24px 40px",
                    minHeight: "310px",
                    backgroundColor: "#ffffff",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="mb-4 d-flex align-items-center justify-content-center"
                    style={{ height: "90px" }}
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      width={90}
                      height={90}
                      style={{
                        width: "90px",
                        height: "90px",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </div>

                  {/* Count */}
                  <h3
                    style={{
                      fontSize: "38px",
                      fontWeight: 700,
                      color: "#07a64b",
                      marginBottom: "8px",
                      fontFamily:
                        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    }}
                  >
                    {item.count}
                  </h3>

                  {/* Label */}
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#334155",
                      margin: 0,
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .impact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.08) !important;
        }
      `}</style>
    </div>
  );
}
