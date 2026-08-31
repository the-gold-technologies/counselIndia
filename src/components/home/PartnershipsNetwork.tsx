"use client";
import React, { useState } from "react";

export default function PartnershipsNetwork() {
  const [activeTab, setActiveTab] = useState<"corporate" | "mous" | "hiring">(
    "corporate"
  );

  const partners = {
    corporate: [
      { name: "Apollo Hospitals", logo: "/assets/images/counsel1.jpg" },
      { name: "Max Healthcare", logo: "/assets/images/counsel2.jpg" },
      { name: "Fortis Mental Health", logo: "/assets/images/counsel3.jpg" },
      { name: "Cognizant Wellness", logo: "/assets/images/counsel5.jpg" },
    ],
    mous: [
      { name: "Manav Rachna University", logo: "/assets/images/MSU_Revised-Logo.png" },
      { name: "Delhi University Affiliates", logo: "/assets/images/mpsc.png" },
      { name: "Amity Behavioral Dept", logo: "/assets/images/counsel1.jpg" },
      { name: "Symbiosis Institute", logo: "/assets/images/counsel2.jpg" },
    ],
    hiring: [
      { name: "MindPeers", logo: "/assets/images/counsel3.jpg" },
      { name: "Wysa Mental Health", logo: "/assets/images/counsel5.jpg" },
      { name: "1to1Help", logo: "/assets/images/MSU_Revised-Logo.png" },
      { name: "YourDOST", logo: "/assets/images/mpsc.png" },
    ],
  };

  return (
    <div className="section-padding-01 bg-light">
      <div className="container">
        <div className="section-title text-center mb-4">
          <h4 className="section-title__sub-title text-success fw-bold">
            EXPANDING HORIZONS
          </h4>
          <h2 className="section-title__title-02">
            Institutional Alliances &amp; <mark>Hiring Network</mark>
          </h2>
          <p className="text-muted mt-2">
            Collaborating with premier universities, global hospital chains, and employee wellness leaders.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="d-flex justify-content-center gap-2 mb-5">
          <button
            onClick={() => setActiveTab("corporate")}
            className={`btn px-4 py-2 rounded-pill font-size-14 fw-semibold ${
              activeTab === "corporate"
                ? "btn-success text-white"
                : "btn-outline-secondary bg-white"
            }`}
          >
            Corporate Clients
          </button>
          <button
            onClick={() => setActiveTab("mous")}
            className={`btn px-4 py-2 rounded-pill font-size-14 fw-semibold ${
              activeTab === "mous"
                ? "btn-success text-white"
                : "btn-outline-secondary bg-white"
            }`}
          >
            Signed MOUs
          </button>
          <button
            onClick={() => setActiveTab("hiring")}
            className={`btn px-4 py-2 rounded-pill font-size-14 fw-semibold ${
              activeTab === "hiring"
                ? "btn-success text-white"
                : "btn-outline-secondary bg-white"
            }`}
          >
            Global Hiring Partners
          </button>
        </div>

        {/* Tab Content */}
        <div className="row g-4 justify-content-center">
          {partners[activeTab].map((item, idx) => (
            <div key={idx} className="col-lg-3 col-md-4 col-sm-6">
              <div
                className="bg-white p-4 rounded-3 shadow-sm text-center h-100 d-flex flex-column align-items-center justify-content-center"
                style={{ minHeight: "130px", border: "1px solid #eef2f5" }}
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  style={{
                    maxHeight: "60px",
                    maxWidth: "160px",
                    objectFit: "contain",
                  }}
                />
                <p className="text-muted font-size-14 mt-3 mb-0 fw-medium">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
