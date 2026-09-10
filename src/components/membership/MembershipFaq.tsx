"use client";
import React, { useState } from "react";

export default function MembershipFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggle = (i: number) => setOpenFaq(openFaq === i ? null : i);

  const faqs = [
    {
      id: "collapseTwo",
      q: "How do I know if this membership is for me?",
      a: "If you're all about turning those 'ugh' moments into 'heck yes!' ones, then this is totally your jam. Whether you're looking to Zen out, level up your life skills, or just find some epic self-care hacks, we've got you covered!",
    },
    {
      id: "collapseThree",
      q: "What kind of content will I get?",
      a: "Prepare for awesomeness! From chill mindfulness sessions and pro tips on stressbusting to personal growth challenges and relationship hacks, we've packed it all into bite-sized, fun, and super engaging content just for you!",
    },
    {
      id: "collapseFour",
      q: "What makes Counsel India's membership stand out?",
      a: "We're like the cool kids of the wellness world—combining science-backed strategies with seriously fun and relatable content. Plus, our community is all about support and good energy, making your journey to awesomeness way more enjoyable.",
    },
    {
      id: "collapseFive",
      q: "Due to some medical emergency I was unable to attend my recent class, please help me with the recording?",
      a: "Sure, we can help you with the recording once we will receive email @ wecare@counselindia.in informing us for the same along with that first to attach the medical proof.",
    },
    {
      id: "collapseSix",
      q: "From when does my membership plan begin?",
      a: "Your membership plan begins on the 1st day of every month. This means that regardless of when you sign up, your plan will activate at the start of the next month. For example, if you join on any day in January, your membership will officially start on February 1st.",
    },
  ];

  return (
    <>
      <div className="faqq" style={{ margin: "5%" }}>
        <div
          className="section-title text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="section-title__title-03 mark-title">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="row gy-10 align-items-center">
          <div className="col-lg-10 offset-lg-1">
            {/* FAQ Accordion Start */}
            <div
              className="faq-accordion"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="accordion" id="accordionFAQ">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div className="accordion-item" key={faq.id}>
                      <button
                        className={`accordion-button${isOpen ? "" : " collapsed"}`}
                        type="button"
                        onClick={() => toggle(idx)}
                        aria-expanded={isOpen}
                        data-bs-toggle="collapse"
                        data-bs-target={`#${faq.id}`}
                      >
                        {faq.q}
                        <span className="faq-sq-icon">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 448 512"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="40"
                          >
                            <rect
                              x="20"
                              y="20"
                              width="408"
                              height="472"
                              rx="40"
                              ry="40"
                            />
                          </svg>
                        </span>
                      </button>
                      {isOpen && (
                        <div id={faq.id} className="accordion-collapse">
                          <div className="accordion-body">
                            <p>{faq.a}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            {/* FAQ Accordion End */}
          </div>
        </div>
      </div>

      <style>{`
        /* Remove Bootstrap's default ::after icon — we use custom SVGs */
        .faq-accordion .accordion-button::after,
        .faq-accordion .accordion-button:not(.collapsed)::after {
          content: none !important;
          display: none !important;
        }
        .faq-accordion .accordion-button {
          padding: 13px 30px;
          border: 1px solid #ddd;
          background-color: #fff;
          border-radius: 5px;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
          font-size: 18px;
          font-weight: 500;
          color: #252525;
          position: relative;
          min-height: 60px;
          line-height: 1.5;
          width: 100%;
          text-align: left;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .faq-sq-icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          color: inherit;
          opacity: 0.7;
        }
        .faq-accordion .accordion-button:focus {
          box-shadow: none;
          outline: none;
        }
        .faq-accordion .accordion-button:not(.collapsed) {
          box-shadow: none;
          background-color: #07a64b;
          border-color: #07a64b;
          color: #fff;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
        .faq-accordion .accordion-item {
          border: 0;
          background: 0;
        }
        .faq-accordion .accordion-item + .accordion-item {
          margin-top: 20px;
        }
        .faq-accordion .accordion-collapse {
          background-color: #fff;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          box-shadow: 0 15px 50px rgba(51, 51, 51, 0.1);
        }
        .faq-accordion .accordion-body {
          padding: 25px 29px 34px;
        }
        .faq-accordion .accordion-body p {
          color: #555555;
          font-size: 15px;
          line-height: 1.7;
          margin: 0;
        }
        @media (max-width: 768px) {
          .faq-accordion .accordion-button {
            font-size: 14px;
            padding: 8px 20px;
          }
          .faq-accordion .accordion-body { padding: 18px 20px 22px; }
        }
      `}</style>
    </>
  );
}
