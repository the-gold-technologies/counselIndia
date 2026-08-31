"use client";
import React from "react";

export default function MembershipEmpower() {
  const col1 = [
    "Bounce back like a boss so you can handle life’s curveballs with grace.",
    "Discover stress-busting hacks that’ll help you keep your cool and turn even the most chaotic days into Zen moments.",
    "Get to know yourself on a whole new level, so you can truly ace that inner confidence and self-love.",
    "Learn to live in the moment and say goodbye to all distractions.",
    "Get a relationship-glow-up with people skills and communication game.",
  ];

  const col2 = [
    "Find that perfect balance between work and play, so you can enjoy both without feeling like you’re running on empty.",
    "Sharpen your thinking and decision-making like a pro with tips that’ll clear the mental fog and keep you sharp.",
    "Begin a journey of self-improvement and growth, turning every challenge into a chance to shine and thrive.",
    "Set and smash your goals like a pro, turning your dreams into reality with style and confidence.",
    "Pick up practical, real-world tools to tackle life’s hurdles without breaking a sweat—because you’ve got this!",
  ];

  return (
    <>
      <div className="container222out" style={{ margin: 0, padding: "20px 0 60px" }}>
        <div className="container222s" style={{ margin: 0, padding: 0 }}>
          <h2 className="text-center fw-bold" style={{ fontSize: "42px", color: "#1a2638", marginBottom: "40px" }}>
            We empower you through...
          </h2>

          <div className="container22s">
            {/* Column 1 */}
            <div className="items2">
              <div className="items-body">
                {col1.map((text, idx) => (
                  <div className="items-body-content" key={idx}>
                    <span>
                      <h6 className="mt-0 mb-0 font-size-15" style={{ color: "#212529", fontWeight: 500, lineHeight: "1.6" }}>
                        {text}
                      </h6>
                    </span>
                    <i className="fas fa-angle-right"></i>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="items2">
              <div className="items-body">
                {col2.map((text, idx) => (
                  <div className="items-body-content" key={idx}>
                    <span>
                      <h6 className="mt-0 mb-0 font-size-15" style={{ color: "#212529", fontWeight: 500, lineHeight: "1.6" }}>
                        {text}
                      </h6>
                    </span>
                    <i className="fas fa-angle-right"></i>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <img
              src="https://prod-s3.counselindia.com/mastergalaxyimages/Untitled%20design-9_1725874373.png"
              alt="Diverse women holding hands illustration"
              className="img-fluid"
              style={{ width: "100%", maxWidth: "1200px", height: "auto" }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .container222out {
          background: linear-gradient(to bottom, rgba(112, 136, 102, 0.8), rgba(0, 128, 0, 0) 100%);
        }

        .container22s {
          margin-left: 5%;
          margin-right: 5%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 20px;
        }

        .items2 {
          background: transparent;
        }

        .items-body {
          padding: 10px;
          display: grid;
          grid-gap: 12px;
        }

        .items-body-content {
          padding: 14px 18px 14px 38px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid transparent;
          cursor: pointer;
          position: relative;
          border-radius: 15px;
          transition: all 0.25s ease-in-out;
        }

        .items-body-content::before {
          content: "★";
          color: #f59e0b;
          font-size: 17px;
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
        }

        .items-body-content:hover {
          border: 1px solid #333333;
          background: rgba(255, 255, 255, 0.15);
        }

        .items-body-content i {
          font-size: 16px;
          color: #333333;
          font-weight: bold;
          margin-left: 15px;
          flex-shrink: 0;
          animation: icon 1.5s infinite forwards;
        }

        @keyframes icon {
          0%,
          100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(4px);
          }
        }
      `}</style>
    </>
  );
}
