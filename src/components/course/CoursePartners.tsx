"use client";
import React from "react";

export default function CoursePartners() {
  const partners = [
    { name: "DPS", logo: "/assets/images/partners-logo/partner1.jpg" },
    { name: "London Kids", logo: "/assets/images/partners-logo/partner2.jpg" },
    { name: "Drishti IAS", logo: "/assets/images/partners-logo/partner3.jpg" },
    { name: "Zoom", logo: "/assets/images/partners-logo/partner4.jpg" },
    { name: "Cognizavest", logo: "/assets/images/partners-logo/partner5.jpg" },
    { name: "Cambridge School", logo: "/assets/images/partners-logo/partner6.jpg" },
    { name: "Byjus", logo: "/assets/images/partners-logo/partner7.jpg" },
    { name: "Partner 8", logo: "/assets/images/partners-logo/partner8.jpg" },
    { name: "Partner 9", logo: "/assets/images/partners-logo/partner9.jpg" },
    { name: "Partner 10", logo: "/assets/images/partners-logo/partner10.jpg" },
    { name: "Partner 11", logo: "/assets/images/partners-logo/partner11.jpg" },
    { name: "Partner 12", logo: "/assets/images/partners-logo/partner12.jpg" },
    { name: "Partner 13", logo: "/assets/images/partners-logo/partner13.jpg" },
  ];

  return (
    <section
      style={{
        padding: "45px 0 55px",
        backgroundColor: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="container custom-container"
        style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}
      >
        <h3
          style={{
            margin: "0 0 36px",
            fontSize: "24px",
            fontWeight: 700,
            color: "#1c2d3a",
            lineHeight: "1.3",
          }}
        >
          Our Learners Work At
        </h3>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            flexWrap: "wrap",
          }}
          className="partners-logo-row"
        >
          {partners.map((p, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "55px",
                flexShrink: 0,
              }}
            >
              <img
                src={p.logo}
                alt={p.name}
                style={{
                  maxHeight: "46px",
                  maxWidth: "135px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
