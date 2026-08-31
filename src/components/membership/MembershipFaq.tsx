"use client";
import React, { useState } from "react";

export default function MembershipFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How do I know if this membership is for me?",
      a: "If you’re all about turning those “ugh” moments into “heck yes!” ones, then this is totally your jam. Whether you’re looking to Zen out, level up your life skills, or just find some epic self-care hacks, we’ve got you covered!",
    },
    {
      q: "What kind of content will I get?",
      a: "Prepare for awesomeness! From chill mindfulness sessions and pro tips on stressbusting to personal growth challenges and relationship hacks, we’ve packed it all into bite-sized, fun, and super engaging content just for you!",
    },
    {
      q: "What makes Counsel India’s membership stand out?",
      a: "We’re like the cool kids of the wellness world—combining science-backed strategies with seriously fun and relatable content. Plus, our community is all about support and good energy, making your journey to awesomeness way more enjoyable.",
    },
    {
      q: "Due to some medical emergency I was unable to attend my recent class, please help me with the recording?",
      a: "Sure, we can help you with the recording once we will receive email @ wecare@counselindia.in informing us for the same along with that first to attach the medical proof.",
    },
    {
      q: "From when does my membership plan begin?",
      a: "Your membership plan begins on the 1st day of every month. This means that regardless of when you sign up, your plan will activate at the start of the next month. For example, if you join on any day in January, your membership will officially start on February 1st.",
    },
  ];

  return (
    <div className="faqq-section" style={{ padding: "70px 0 80px", backgroundColor: "#f3f1f1" }}>
      <div className="container custom-container" style={{ maxWidth: "1140px" }}>
        <div className="section-title text-center mb-5">
          <h2
            className="section-title__title-03"
            style={{ fontSize: "40px", fontWeight: 700, color: "#1a2638" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="faq-accordion">
              <div className="accordion" id="accordionFAQ">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="accordion-item mb-3">
                    <button
                      className={`accordion-button ${openFaq === idx ? "" : "collapsed"}`}
                      onClick={() => toggleFaq(idx)}
                      type="button"
                      style={{
                        padding: "18px 25px",
                        backgroundColor: "#ffffff",
                        color: "#212529",
                        fontWeight: 500,
                        fontSize: "15px",
                        border: "1px solid #e0dede",
                        borderRadius: openFaq === idx ? "4px 4px 0 0" : "4px",
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        textAlign: "left",
                        cursor: "pointer",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <span style={{ color: "#212529", fontWeight: 500 }}>{faq.q}</span>
                      <span
                        style={{
                          width: "14px",
                          height: "14px",
                          border: "1.5px solid #666666",
                          borderRadius: "2px",
                          display: "inline-block",
                          marginLeft: "15px",
                          flexShrink: 0,
                          position: "relative",
                        }}
                      >
                        {openFaq === idx && (
                          <span
                            style={{
                              position: "absolute",
                              left: "2px",
                              top: "4px",
                              width: "7px",
                              height: "1.5px",
                              backgroundColor: "#666666",
                            }}
                          />
                        )}
                      </span>
                    </button>

                    {openFaq === idx && (
                      <div
                        className="accordion-body"
                        style={{
                          padding: "20px 25px",
                          backgroundColor: "#ffffff",
                          border: "1px solid #e0dede",
                          borderTop: "none",
                          borderRadius: "0 0 4px 4px",
                        }}
                      >
                        <p
                          style={{
                            color: "#4a5568",
                            fontSize: "15px",
                            lineHeight: "1.75",
                            margin: 0,
                            fontWeight: 400,
                          }}
                        >
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
