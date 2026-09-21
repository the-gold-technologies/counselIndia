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
      className="course-faq-area"
      style={{
        padding: "45px 0 60px",
        backgroundColor: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="container custom-container"
        style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}
      >
        <div className="faq-section tutor-course-segment">
          <div data-aos="fade-up" data-aos-duration="1000">
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
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    borderRadius: "5px",
                    boxShadow: isOpen
                      ? "0 12px 35px rgba(0, 0, 0, 0.08)"
                      : "none",
                    transition: "box-shadow 0.25s ease",
                  }}
                >
                  {/* Header Button */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      padding: "15px 24px",
                      backgroundColor: isOpen ? "#07a64b" : "#ffffff",
                      color: isOpen ? "#ffffff" : "#252525",
                      border: isOpen
                        ? "1px solid #07a64b"
                        : "1px solid #e2e5e8",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                      borderBottomLeftRadius: isOpen ? "0px" : "5px",
                      borderBottomRightRadius: isOpen ? "0px" : "5px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      textAlign: "left",
                      gap: "16px",
                      fontSize: "15px",
                      fontWeight: 500,
                      lineHeight: "1.5",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <span>{faq.question}</span>

                    {/* Square Outline Icon */}
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "inherit",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ display: "block" }}
                      >
                        <rect x="1.5" y="1.5" width="13" height="13" rx="1.5" />
                      </svg>
                    </span>
                  </button>

                  {/* Body Content */}
                  {isOpen && (
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        padding: "24px 28px 26px",
                        borderBottomLeftRadius: "5px",
                        borderBottomRightRadius: "5px",
                        border: "1px solid #f0f2f5",
                        borderTop: "none",
                      }}
                    >
                      {faq.answer.map((ans, aIdx) => (
                        <p
                          key={aIdx}
                          style={{
                            margin: 0,
                            marginBottom:
                              aIdx === faq.answer.length - 1 ? 0 : "12px",
                            fontSize: "14.5px",
                            lineHeight: "1.7",
                            color: "#555555",
                          }}
                        >
                          {ans}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
