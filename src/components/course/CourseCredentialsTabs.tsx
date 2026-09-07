"use client";
import React, { useState } from "react";

interface CredentialItem {
  id: string;
  label: string;
  text: string;
  image: string;
}

interface Props {
  credentials: CredentialItem[];
}

export default function CourseCredentialsTabs({ credentials }: Props) {
  const [activeTab, setActiveTab] = useState(credentials[0]?.id || "");

  if (!credentials || credentials.length === 0) return null;

  const current = credentials.find((c) => c.id === activeTab) || credentials[0];

  return (
    <section
      style={{
        padding: "50px 0",
        backgroundColor: "#f8fafc",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container custom-container" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 16px" }}>
        <h3
          style={{
            margin: "0 0 24px",
            fontSize: "24px",
            fontWeight: 700,
            color: "#1e293b",
            textAlign: "center",
          }}
        >
          Course Certification & Credentials
        </h3>

        {/* Tab Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "36px", flexWrap: "wrap" }}>
          {credentials.map((tab) => {
            const isActive = tab.id === current.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "30px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: isActive ? "2px solid #07a64b" : "1px solid #cbd5e1",
                  backgroundColor: isActive ? "#07a64b" : "#ffffff",
                  color: isActive ? "#ffffff" : "#475569",
                  transition: "all 0.2s",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            padding: "36px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "36px",
              alignItems: "center",
            }}
          >
            <div>
              <h4
                style={{
                  margin: "0 0 14px",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#1e293b",
                }}
              >
                {current.label}
              </h4>
              <p
                style={{
                  margin: 0,
                  fontSize: "14.5px",
                  lineHeight: "1.75",
                  color: "#475569",
                }}
              >
                {current.text}
              </p>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={current.image}
                alt={current.label}
                style={{
                  maxWidth: "100%",
                  maxHeight: "340px",
                  borderRadius: "8px",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                  border: "1px solid #e2e8f0",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
