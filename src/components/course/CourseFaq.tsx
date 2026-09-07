"use client";
import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string[];
}

interface Props {
  faqs: FaqItem[];
}

export default function CourseFaq({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section style={{ padding: "60px 0", backgroundColor: "#ffffff", fontFamily: "'Poppins', sans-serif" }}>
      <div className="container custom-container" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 16px" }}>
        <h3
          style={{
            margin: "0 0 32px",
            fontSize: "26px",
            fontWeight: 700,
            color: "#1e293b",
            textAlign: "center",
          }}
        >
          Frequently Asked Questions
        </h3>

        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  overflow: "hidden",
                  borderColor: isOpen ? "#07a64b" : "#e2e8f0",
                }}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  style={{
                    width: "100%",
                    padding: "16px 20px",
                    backgroundColor: isOpen ? "#f0fdf4" : "#f8fafc",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "left",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "15.5px",
                      fontWeight: 600,
                      color: isOpen ? "#07a64b" : "#1e293b",
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: isOpen ? "#07a64b" : "#94a3b8",
                      transform: isOpen ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s",
                      flexShrink: 0,
                    }}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div style={{ padding: "16px 20px 20px", backgroundColor: "#ffffff", borderTop: "1px solid #e2e8f0" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {faq.answer.map((ans, aIdx) => (
                        <p
                          key={aIdx}
                          style={{
                            margin: 0,
                            fontSize: "14px",
                            color: "#475569",
                            lineHeight: "1.7",
                          }}
                        >
                          {ans}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
