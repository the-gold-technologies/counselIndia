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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      style={{
        padding: "45px 0 50px",
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
            margin: "0 0 28px",
            fontSize: "24px",
            fontWeight: 700,
            color: "#1c2d3a",
            lineHeight: "1.3",
          }}
        >
          Frequently Asked Questions
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  border: "1px solid #eef0f2",
                  borderRadius: "6px",
                  overflow: "hidden",
                  backgroundColor: "#ffffff",
                  transition: "all 0.2s ease",
                }}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  style={{
                    width: "100%",
                    padding: "18px 24px",
                    backgroundColor: isOpen ? "#f8fafc" : "#ffffff",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "left",
                    gap: "16px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: isOpen ? "#07a64b" : "#1c2d3a",
                      lineHeight: "1.4",
                    }}
                  >
                    {faq.question}
                  </span>

                  {/* Square outline toggle icon matching screenshot */}
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isOpen ? "#07a64b" : "#1c2d3a"}
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "16px 24px 22px",
                      backgroundColor: "#ffffff",
                      borderTop: "1px solid #f0f2f5",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      {faq.answer.map((ans, aIdx) => (
                        <p
                          key={aIdx}
                          style={{
                            margin: 0,
                            fontSize: "14.5px",
                            color: "#555555",
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
