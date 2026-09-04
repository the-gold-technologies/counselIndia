"use client";
import React from "react";
import Image from "next/image";

export default function AllCoursesCounters() {
  const stats = [
    {
      icon: "/images/3.svg",
      count: "10000+",
      text: "Certified Counsellors Produced",
    },
    {
      icon: "/images/7.svg",
      count: "200000+",
      text: "Happy Learners & Still Counting",
    },
    {
      icon: "/images/2.svg",
      count: "22+",
      text: "Countries where our participants come from",
    },
    {
      icon: "/images/6.svg",
      count: "5000+",
      text: "Network of Psychologists & Counsellors",
    },
    {
      icon: "/images/1.svg",
      count: "20+",
      text: "Awards & Accreditations",
    },
  ];

  return (
    <div
      className="why-choose-section section-padding-01"
      style={{
        backgroundColor: "#ffffff",
        padding: "50px 15px 70px",
      }}
    >
      <div
        className="container custom-container"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <div className="counter-grid-5">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="counter-item-03"
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "10px 5px",
              }}
            >
              {/* Icon */}
              <div
                className="counter-item-03__icon"
                style={{
                  height: "65px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "18px",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.text}
                  style={{
                    height: "60px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Number in Counsel India Green */}
              <div
                className="counter-item-03__count"
                style={{
                  fontSize: "32px",
                  fontWeight: 600,
                  color: "#07a64b",
                  lineHeight: "1.2",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {item.count}
              </div>

              {/* Text Label */}
              <p
                className="counter-item-03__text"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#4a5568",
                  lineHeight: "1.5",
                  marginTop: "8px",
                  marginBottom: 0,
                  fontFamily: "'Poppins', sans-serif",
                  maxWidth: "180px",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <style>{`
          .counter-grid-5 {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 20px;
            align-items: flex-start;
          }

          @media (max-width: 991px) {
            .counter-grid-5 {
              grid-template-columns: repeat(3, 1fr);
              gap: 30px 15px;
            }
          }

          @media (max-width: 575px) {
            .counter-grid-5 {
              grid-template-columns: repeat(2, 1fr);
              gap: 25px 10px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
