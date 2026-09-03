"use client";
import React, { useState } from "react";
import { FaqItem } from "../data/eventDetailData";

interface EventBenefitsAndFaqProps {
  keyBenefits: string[];
  faqs: FaqItem[];
}

export default function EventBenefitsAndFaq({
  keyBenefits,
  faqs,
}: EventBenefitsAndFaqProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div
      className="event-details__benefits-faq py-5 bg-white border-top"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container custom-container">
        <div className="row gy-5 gx-lg-5">
          {/* Left Column: key Benefits */}
          <div className="col-lg-5">
            <div className="tutor-course-segment">
              <h4
                className="tutor-course-segment__title fw-bold mb-4"
                style={{
                  fontSize: "22px",
                  fontFamily: "Poppins, 'Plus Jakarta Sans', sans-serif",
                  color: "#1e2532",
                  fontWeight: 700,
                  lineHeight: "1.3",
                }}
              >
                key Benefits
              </h4>
              <ul className="list-unstyled d-flex flex-column gap-3 mb-0 ps-0">
                {keyBenefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="d-flex align-items-start gap-3"
                    style={{
                      fontSize: "14.5px",
                      color: "#4b5563",
                      lineHeight: "1.6",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#07a64b"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Frequently Asked Questions */}
          <div className="col-lg-7">
            <div className="faq-section tutor-course-segment">
              <h4
                className="tutor-course-segment__title fw-bold mb-4"
                style={{
                  fontSize: "22px",
                  fontFamily: "Poppins, 'Plus Jakarta Sans', sans-serif",
                  color: "#1e2532",
                  fontWeight: 700,
                  lineHeight: "1.3",
                }}
              >
                Frequently Asked Questions
              </h4>

              <div
                className="event-faq-wrapper d-flex flex-column"
                style={{ gap: "10px", margin: 0, padding: 0 }}
              >
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={faq.id}
                      className="event-faq-card overflow-hidden bg-white"
                      style={{
                        borderRadius: "6px",
                        border: "1px solid #e5e7eb",
                        transition: "all 0.2s ease",
                        margin: "0 !important",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-100 text-start d-flex justify-content-between align-items-center btn shadow-none"
                        style={{
                          border: "none",
                          background: "none",
                          padding: "13px 20px",
                          margin: 0,
                          outline: "none",
                        }}
                      >
                        <span
                          className="fw-semibold m-0"
                          style={{
                            color: "#1e2532",
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "15px",
                            lineHeight: "1.4",
                          }}
                        >
                          {faq.question}
                        </span>
                        {/* Empty square outline icon matching screenshot */}
                        <span
                          className="d-inline-block ms-3 flex-shrink-0"
                          style={{
                            width: "13px",
                            height: "13px",
                            border: "1.5px solid #1e2532",
                            borderRadius: "2px",
                          }}
                        ></span>
                      </button>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateRows: isOpen ? "1fr" : "0fr",
                          transition: "grid-template-rows 0.3s ease",
                        }}
                      >
                        <div className="overflow-hidden">
                          <div
                            className="px-4 pb-3 pt-1 font-size-14"
                            style={{
                              color: "#475569",
                              lineHeight: "1.7",
                              fontFamily: "Poppins, sans-serif",
                              borderTop: "1px solid #f1f5f9",
                            }}
                          >
                            {faq.answer}
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

      <style jsx>{`
        .event-faq-card {
          margin: 0 !important;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
        .event-faq-card:hover {
          border-color: #cbd5e1 !important;
        }
      `}</style>
    </div>
  );
}
