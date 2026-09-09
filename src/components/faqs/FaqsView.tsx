"use client";
import React, { useState } from "react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    question: "I don't have a Psychology background, can I take these courses?",
    answer:
      "Yes, you can register. We have designed the course in such a way that, we will be working with you in all dimensions of psychology training. We will be covering topics that are required on daily basis like stress, depression, relationship, career etc, we will be covering counseling, clinical, basic therapies understanding in our course along with helping you with marketing support.",
  },
  {
    question: "Where can I use these certifications?",
    answer:
      "You can use this certificate to find jobs, to get a promotion in a job, to study abroad, have your own venture, can have your own setup, the certificate can be used to show your credibility.",
  },
  {
    question: "How do I pay for this course?",
    answer:
      "Connect with our Business Development Manager to know about the Payment Process.",
  },
  {
    question: "What kind of job support is available for me?",
    answer:
      "We will be updating you about jobs in India on weekly basis, you will get a chance to be our Mental Health Ambassador and can learn all soft skills, CV Making techniques, and many more tricks to get Jobs. You will also have the opportunity to work with Counsel India as a Trainer on our website if you can clear the eligibility criteria and quality the standards.",
  },
  {
    question:
      "Due to some medical emergency I was unable to attend my recent class, please help me with the recording?",
    answer:
      "Sure, we can help you with the recording once we will receive email @ wecare@counselindia.in informing us for the same along with that first to attach the medical proof.",
  },
  {
    question:
      "Could you please provide me the study material in document format?",
    answer:
      "Unfortunately we won’t be able to provide you the study material in the document format as per company’s policy to ensure privacy.<br><u>Clause 1:</u> If you want you can access the study material in PDF format please access it through our app.<br><u>Clause 2:</u> In other scenario the requirement of the study material will be with bold text, we can help you with google drive link to access the study material.<br>· Batch&gt; Announcement&gt; Drive link.",
  },
  {
    question:
      "I do not want to attend the classes kindly provide me the certificate?",
    answer:
      "Apologies this is not possible as per the policy as mental health is a very serious industry and we focus on quality counsellor. Hence, we don’t support in any kind of unethical fraud practices.",
  },
  {
    question: "A problem related to hindi language?",
    answer:
      "This is a class where the teacher is using basic English and in Psychology, we have to use the English language by force because Psychology is a subject where Hindi literature and content is not much available. So, to understand it properly please watch a recording of the class for a better understanding of the session.<br><br>We completely support the Hindi language and we are not biased towards foreign languages and we also respect Hindi as our mother language but there are certain limitations that we have to understand.<br><br>I promise you that we tried very hard to find Hindi content for you but Therapies are still not found in Devnagri Lipi and so we failed to produce content in Hindi.",
  },
  {
    question: "What is the effective date of the modified refund policy?",
    answer:
      "The effective date of this modified refund policy is from 15th March, 2024, and it applies to all Learners enrolling on and from 1st March, 2024. This policy complies with the UGC Fee Refund Policy 2023-2024 - D.O No. F.2-71/2022 (CPP-II).",
  },
  {
    question: "What are the refund rules for University Programs?",
    answer:
      'Learners may seek a refund of the Program fee as specified in Table – A for the University Programs mentioned in Annexure A, subject to specified conditions. A standard processing fee of 10% of the program fees paid or Rs. 15,000/- (whichever is less) is applicable. Refund requests must be submitted within the stipulated timeframe. Read more at <a href="https://www.counselindia.com/refund-policy" style="color: #07a64b; text-decoration: underline;" target="_blank" rel="noopener noreferrer">https://www.counselindia.com/refund-policy</a>',
  },
  {
    question: "What are the refund rules for Counsel India Programs?",
    answer:
      'Learners may seek a refund of the Program fee as specified in Clause 4 for the Programs mentioned in Annexure B. A standard processing fee of 10% of the fees paid or Rs. 7,000/- (whichever is less) is applicable. No refunds granted if the request is made after the batch commencement date or if only 15 days are left for the batch to commence. Read more at <a href="https://www.counselindia.com/refund-policy" style="color: #07a64b; text-decoration: underline;" target="_blank" rel="noopener noreferrer">https://www.counselindia.com/refund-policy</a>',
  },
  {
    question: "What happens to loans in the event of a refund?",
    answer:
      "The Learner will be solely responsible for any loan cancellation, including any applicable charges imposed by the financial institution. Counsel India will not be involved in determining these charges.",
  },
  {
    question: "What is the refund claim procedure?",
    answer:
      'Refund requests must be submitted via email using the prescribed Refund Request Form. Refunds will be processed within 30 working days after the program commences, following approval by the Counsel India Admissions Team. Read more at <a href="https://www.counselindia.com/refund-policy" style="color: #07a64b; text-decoration: underline;" target="_blank" rel="noopener noreferrer">https://www.counselindia.com/refund-policy</a>',
  },
  {
    question: "Are there any alternatives to refunds?",
    answer:
      "No refunds allowed for dissatisfaction, but learners can choose to be added to a different batch or course, subject to discretion.",
  },
  {
    question: "What are the exclusions for refunds?",
    answer:
      "Refunds will not be granted for circumstances beyond human control or for violations of terms of service. No refunds will be considered without proof of payment.",
  },
  {
    question: "Are there any exceptions to the refund policy?",
    answer:
      'Exceptions apply in cases of death of the learner or beneficiary, or continuous sickness lasting more than 6 months, subject to proper documentation and submission requirements. Read more at <a href="https://www.counselindia.com/refund-policy" style="color: #07a64b; text-decoration: underline;" target="_blank" rel="noopener noreferrer">https://www.counselindia.com/refund-policy</a>',
  },
  {
    question: "How can I request a refund or enrollment cancellation?",
    answer:
      'To request a refund or enrollment cancellation, please send an email to "Refund policy" at refund@counselindiaservices.in with the subject line: Request for Refund/Enrollment Cancellation within the Refund Window. Read more at <a href="https://www.counselindia.com/refund-policy" style="color: #07a64b; text-decoration: underline;" target="_blank" rel="noopener noreferrer">https://www.counselindia.com/refund-policy</a>',
  },
  {
    question: "What should be included in the refund email request?",
    answer:
      "Ensure to include your details such as name, program enrolled in, and any relevant payment information. Additionally, clearly state the reason for your refund request or enrollment cancellation.",
  },
  {
    question:
      "Does Counsel India provide a degree from MIT University, Sikkim?",
    answer:
      "Selected programs are offered in academic collaboration with MIT University, Sikkim. Learners are advised to check individual course details for certification and academic structure.",
  },
];

export default function FaqsView() {
  // First item open by default matching PHP collapseOne show
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="main-wrapper" style={{ backgroundColor: "#ffffff" }}>
      {/* Page Banner Section Start */}
      <div className="page-banner bg-color-04">
        <div className="page-banner__wrapper">
          <div className="page-banner__shape-01" />
          <div className="page-banner__shape-02" />
          <div className="page-banner__shape-03" />

          <div className="container custom-container">
            {/* Page Breadcrumb Start */}
            <div className="page-breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="#"></a></li>
                <li className="breadcrumb-item"><a href="#"></a></li>
                <li className="breadcrumb-item active"></li>
              </ul>
            </div>
            {/* Page Breadcrumb End */}

            {/* Page Banner Caption Start */}
            <div className="page-banner__caption-02">
              <h2 className="page-banner__main-title-02">FAQ&apos;s</h2>
            </div>
            {/* Page Banner Caption End */}
          </div>
        </div>
      </div>
      {/* Page Banner Section End */}

      {/* FAQ Section Start */}
      <div className="faq-section section-padding-01">
        <style>{`
          /* Hide broken pseudo-element icons from style.css */
          .faq-accordion .accordion-button::after {
            display: none !important;
          }
          .faq-accordion .accordion-button {
            padding: 18px 25px !important;
            min-height: 62px;
            font-size: 17px !important;
            font-weight: 500 !important;
            transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, border-radius 0.3s ease !important;
          }
          @media only screen and (max-width: 575px) {
            .faq-accordion .accordion-button {
              font-size: 15px !important;
              padding: 14px 18px !important;
            }
          }
        `}</style>
        <div
          className="container custom-container"
          style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}
        >
          {/* Section Title Start */}
          <div
            className="section-title text-center"
            style={{ marginBottom: "40px" }}
          >
            <h2
              className="section-title__title-03 mark-title"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "36px",
                fontWeight: 700,
                color: "#1e293b",
                margin: 0,
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          {/* Section Title End */}

          <div className="row gy-10 align-items-center">
            <div className="col-lg-10 offset-lg-1">
              {/* FAQ Accordion Start */}
              <div className="faq-accordion">
                <div className="accordion" id="accordionFAQ">
                  {FAQ_LIST.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                      <div
                        className="accordion-item"
                        key={index}
                        style={{
                          border: "0",
                          background: "none",
                          marginBottom: "20px",
                        }}
                      >
                        <button
                          type="button"
                          className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                          onClick={() => toggleAccordion(index)}
                          aria-expanded={isOpen}
                          style={{
                            cursor: "pointer",
                            width: "100%",
                            textAlign: "left",
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            backgroundColor: isOpen ? "#07a64b" : "#ffffff",
                            color: isOpen ? "#ffffff" : "#252525",
                            borderColor: isOpen ? "#07a64b" : "#ddd",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderRadius: isOpen ? "5px 5px 0 0" : "5px",
                            boxShadow: "none",
                            outline: "none",
                          }}
                        >
                          <span style={{ paddingRight: "15px", lineHeight: "1.4" }}>
                            {item.question}
                          </span>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: isOpen ? "#ffffff" : "#252525",
                              flexShrink: 0,
                              marginLeft: "15px",
                              transition: "color 0.3s ease",
                            }}
                          >
                            <span
                              style={{
                                width: "15px",
                                height: "15px",
                                border: "1.8px solid currentColor",
                                borderRadius: "2px",
                                display: "inline-block",
                                boxSizing: "border-box",
                              }}
                            />
                          </span>
                        </button>

                        {/* Smooth CSS Grid Transition */}
                        <div
                          style={{
                            display: "grid",
                            gridTemplateRows: isOpen ? "1fr" : "0fr",
                            transition:
                              "grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            opacity: isOpen ? 1 : 0,
                            backgroundColor: "#ffffff",
                            borderBottomLeftRadius: "5px",
                            borderBottomRightRadius: "5px",
                            boxShadow: isOpen
                              ? "0 15px 50px rgba(51, 51, 51, 0.1)"
                              : "none",
                            overflow: "hidden",
                          }}
                        >
                          <div style={{ minHeight: 0, overflow: "hidden" }}>
                            <div
                              className="accordion-body"
                              style={{
                                padding: "25px 29px 34px",
                                borderLeft: "1px solid #e2e8f0",
                                borderRight: "1px solid #e2e8f0",
                                borderBottom: "1px solid #e2e8f0",
                                borderBottomLeftRadius: "5px",
                                borderBottomRightRadius: "5px",
                              }}
                            >
                              <div
                                style={{
                                  margin: 0,
                                  color: "#52565b",
                                  fontSize: "15px",
                                  lineHeight: "1.75",
                                }}
                                dangerouslySetInnerHTML={{ __html: item.answer }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* FAQ Accordion End */}
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section End */}
    </div>
  );
}
