"use client";
import React, { useState } from "react";

const FAQS = [
  {
    question: "What is Counsel India’s Corporate Wellness Program?",
    answer:
      "Counsel India’s Corporate wellness program empowers your workforce with emotional well-being skills through webinars, seminars, workshops, and more. These sessions are conducted by the best-in-class psychologists and industry experts with 10+ years of experience.",
  },
  {
    question: "How does a Corporate Wellness Program help my workplace?",
    answer:
      "The corporate wellness program empowers your employees with skills including stress management, work life balance, interpersonal relationships, self-image and confidence and more. An emotionally healthy workforce is better productive, has increased focus and your company’s attrition rate is much reduced driving positive results.",
  },
  {
    question:
      "How can I register for Counsel India’s Corporate Wellness Programs?",
    answer:
      "Fill in the form available on this page to make an enquiry and someone from our team will reach out to you.",
  },
  {
    question: "How much does an employee wellbeing program cost?",
    answer:
      "The cost of our corporate wellness programs varies depending on your organization’s size, selected modules, and customization requirements. Please get in touch with us via the demo form to receive a tailored quotation.",
  },
];

export default function CiBusinessFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section py-5 bg-white">
      <div className="container custom-container py-4">
        {/* Section Title */}
        <div className="section-title text-center mb-5">
          <h2
            className="section-title__title-03 m-0 d-inline-block"
            style={{
              fontSize: "clamp(28px, 3.4vw, 38px)",
              fontFamily:
                "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontWeight: 700,
              color: "#1e2532",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-12">
            <div className="faq-accordion d-flex flex-column gap-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={idx}
                    className="accordion-card overflow-hidden"
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                    }}
                  >
                    {/* Accordion Button / Header */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(idx)}
                      className="w-100 text-start d-flex align-items-center justify-content-between p-3 px-4"
                      style={{
                        backgroundColor: isOpen ? "#07a64b" : "#ffffff",
                        borderColor: isOpen ? "#07a64b" : "#e2e8f0",
                        border: isOpen
                          ? "1px solid #07a64b"
                          : "1px solid #e2e8f0",
                        color: isOpen ? "#ffffff" : "#1e2532",
                        borderTopLeftRadius: "6px",
                        borderTopRightRadius: "6px",
                        borderBottomLeftRadius: isOpen ? "0px" : "6px",
                        borderBottomRightRadius: isOpen ? "0px" : "6px",
                        minHeight: "60px",
                        fontSize: "16px",
                        fontWeight: 600,
                        fontFamily:
                          "Inter, 'Plus Jakarta Sans', system-ui, sans-serif",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                    >
                      <span className="pe-3">{faq.question}</span>

                      {/* Pure Empty Square Icon with no plus or minus */}
                      <span
                        className="flex-shrink-0 d-inline-block"
                        style={{
                          width: "15px",
                          height: "15px",
                          border: isOpen
                            ? "1.8px solid #ffffff"
                            : "1.8px solid #1e2532",
                          borderRadius: "2px",
                          transition: "border-color 0.3s ease",
                        }}
                      ></span>
                    </button>

                    {/* Smooth Accordion Body Collapse */}
                    <div
                      className="accordion-content-wrapper"
                      style={{
                        display: "grid",
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                        transition: "grid-template-rows 0.35s ease",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          minHeight: "0px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          className="p-4 bg-white"
                          style={{
                            border: "1px solid #e2e8f0",
                            borderTop: "none",
                            borderBottomLeftRadius: "6px",
                            borderBottomRightRadius: "6px",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
                          }}
                        >
                          <p
                            className="mb-0"
                            style={{
                              fontSize: "14px",
                              color: "#475569",
                              lineHeight: "1.65",
                              fontFamily:
                                "Inter, 'Plus Jakarta Sans', system-ui, sans-serif",
                            }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
