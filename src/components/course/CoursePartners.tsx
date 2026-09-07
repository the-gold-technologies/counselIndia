"use client";
import React from "react";

export default function CoursePartners() {
  const partners = [
    { name: "Fortis", logo: "https://www.counselindia.com/assets/images/partners-logo/partner1.jpg" },
    { name: "Max Healthcare", logo: "https://www.counselindia.com/assets/images/partners-logo/partner2.jpg" },
    { name: "Apollo", logo: "https://www.counselindia.com/assets/images/partners-logo/partner3.jpg" },
    { name: "Medanta", logo: "https://www.counselindia.com/assets/images/partners-logo/partner4.jpg" },
    { name: "Vimhans", logo: "https://www.counselindia.com/assets/images/partners-logo/partner5.jpg" },
    { name: "Manipal", logo: "https://www.counselindia.com/assets/images/partners-logo/partner6.jpg" },
  ];

  return (
    <section style={{ padding: "40px 0", backgroundColor: "#f8fafc", fontFamily: "'Poppins', sans-serif" }}>
      <div className="container custom-container" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 16px" }}>
        <h3
          style={{
            margin: "0 0 24px",
            fontSize: "22px",
            fontWeight: 700,
            color: "#1e293b",
            textAlign: "center",
          }}
        >
          Our Hiring & Placement Partners
        </h3>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          {partners.map((p, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                padding: "12px 20px",
                border: "1px solid #e2e8f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "64px",
                minWidth: "130px",
              }}
            >
              <img
                src={p.logo}
                alt={p.name}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.innerText = p.name;
                    e.currentTarget.parentElement.style.fontWeight = "600";
                    e.currentTarget.parentElement.style.color = "#475569";
                  }
                }}
                style={{ maxHeight: "38px", maxWidth: "110px", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
