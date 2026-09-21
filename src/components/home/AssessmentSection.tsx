"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface TestQuestion {
  id: number;
  question: string;
}

interface TestConfig {
  id: string;
  slug: string;
  title: string;
  image: string;
  questions: TestQuestion[];
}

const TESTS: TestConfig[] = [
  {
    id: "test1",
    slug: "emotional-well-being",
    title: "Emotional Well-Being Test",
    image:
      "https://prod-s3.counselindia.com/mastergalaxyimages/second-cover_converted.webp",
    questions: [
      { id: 1, question: "How often do you feel overwhelmed by your daily responsibilities?" },
      { id: 2, question: "Do you find it easy to recover from minor setbacks or disappointments?" },
      { id: 3, question: "How frequently do you feel optimistic about your future and goals?" },
      { id: 4, question: "Do you feel emotionally supported by family, friends, or colleagues?" },
      { id: 5, question: "How often do anxiety or racing thoughts disrupt your peace of mind?" },
    ],
  },
  {
    id: "test2",
    slug: "quality-of-life",
    title: "Quality of Life Test",
    image:
      "https://prod-s3.counselindia.com/mastergalaxyimages/cover22_1730113051.png",
    questions: [
      { id: 1, question: "How satisfied are you with your current physical health and energy levels?" },
      { id: 2, question: "Do you have enough energy and focus for your everyday routines?" },
      { id: 3, question: "How satisfied are you with your personal and professional relationships?" },
      { id: 4, question: "Do you feel you have adequate time for relaxation and hobbies?" },
      { id: 5, question: "How satisfied are you with the conditions of your living environment?" },
    ],
  },
  {
    id: "test3",
    slug: "general-health",
    title: "General Health Test",
    image:
      "https://prod-s3.counselindia.com/mastergalaxyimages/coverr_converted.webp",
    questions: [
      { id: 1, question: "Have you felt tired or had low energy over the past two weeks?" },
      { id: 2, question: "How regularly do you experience undisturbed and restorative sleep?" },
      { id: 3, question: "Have you had trouble concentrating on work, reading, or conversations?" },
      { id: 4, question: "How often do you experience physical tension, headaches, or muscle strain?" },
      { id: 5, question: "Do you feel confident in making daily decisions and solving problems?" },
    ],
  },
];

export default function AssessmentSection() {
  const [activeTest, setActiveTest] = useState<TestConfig | null>(null);
  // Default step when opened is "lead" to match the user screenshot form
  const [step, setStep] = useState<"lead" | "otp" | "quiz" | "result">("lead");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    terms: true,
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const [isResendActive, setIsResendActive] = useState(false);
  const [score, setScore] = useState<number>(0);

  // Timer for OTP resend countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === "otp" && isResendActive && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setIsResendActive(false);
    }
    return () => clearInterval(interval);
  }, [step, isResendActive, resendTimer]);

  const openTest = (test: TestConfig) => {
    setActiveTest(test);
    setStep("lead"); // Immediately open the lead capture form modal
    setAnswers({});
    setOtp("");
    setFormErrors({});
    setResendTimer(30);
    setIsResendActive(false);
  };

  const closeTest = () => {
    setActiveTest(null);
    setStep("lead");
    setFormErrors({});
  };

  const handleAnswerSelect = (qId: number, val: number) => {
    setAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const isQuizComplete =
    activeTest &&
    activeTest.questions.every((q) => answers[q.id] !== undefined);

  const calculateScore = () => {
    if (!activeTest) return;
    const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0);
    const calculatedPercentage = Math.round(
      (totalScore / (activeTest.questions.length * 5)) * 100
    );
    setScore(calculatedPercentage);
    setStep("result");
  };

  const validateLeadForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = "Please enter your full name.";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(formData.mobile.trim())) {
      errors.mobile = "Please enter a valid 10-digit Indian mobile number.";
    }

    if (!formData.terms) {
      errors.terms = "You must agree to the Terms and Conditions.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateLeadForm()) {
      setStep("otp");
      setIsResendActive(true);
      setResendTimer(30);
    }
  };

  const handleOtpVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.trim().length >= 4) {
      setStep("quiz");
    } else {
      setFormErrors({ otp: "Please enter a valid 4 or 6 digit OTP." });
    }
  };

  const handleResendOtp = () => {
    setResendTimer(30);
    setIsResendActive(true);
    setOtp("");
    setFormErrors({});
  };

  const inputStyle: React.CSSProperties = {
    border: "0.8px solid black",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
    width: "100%",
    height: "48px",
    padding: "0 16px",
    fontSize: "15px",
    color: "#212529",
    backgroundColor: "#ffffff",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "15px",
    fontWeight: 600,
    color: "#212529",
    marginBottom: "8px",
    display: "block",
  };

  return (
    <>
      <div className="section-title container mt-5">
        <h2 className="section-title__title-03">
          <mark>Free Mental Health Tests</mark>
        </h2>
      </div>

      <div className="content-text">
        <div className="blog-section section-padding-01" style={{ paddingTop: "20px", paddingBottom: "70px" }}>
          <div className="container custom-container" style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 15px" }}>
            <div className="row g-4 justify-content-center">
              {TESTS.map((test) => (
                <div className="col-xl-4 col-md-6" key={test.id}>
                  {/* Card matching Image 2 */}
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "10px",
                      overflow: "hidden",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    }}
                    className="test-card-hover"
                  >
                    {/* Card Image */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16/9",
                        overflow: "hidden",
                        backgroundColor: "#f0f4f2",
                        cursor: "pointer",
                      }}
                      onClick={() => openTest(test)}
                    >
                      <img
                        src={test.image}
                        alt={test.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          transition: "transform 0.4s ease",
                        }}
                      />
                    </div>

                    {/* Card Content */}
                    <div
                      style={{
                        padding: "24px 20px 28px",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexGrow: 1,
                      }}
                    >
                      <h3
                        style={{
                          margin: "0 0 20px",
                          fontFamily: "'Playfair Display', Georgia, serif",
                          fontSize: "22px",
                          fontWeight: 600,
                          color: "#1c2d3a",
                          lineHeight: "1.35",
                          cursor: "pointer",
                        }}
                        onClick={() => openTest(test)}
                      >
                        {test.title}
                      </h3>

                      {/* Explore Now Button matching Image 2 */}
                      <button
                        type="button"
                        onClick={() => openTest(test)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "10px",
                          backgroundColor: "#f3f4f6",
                          color: "#1c2d3a",
                          fontSize: "14.5px",
                          fontWeight: 500,
                          padding: "10px 24px",
                          borderRadius: "6px",
                          border: "none",
                          cursor: "pointer",
                          transition: "background-color 0.2s ease, transform 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#e5e7eb";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#f3f4f6";
                        }}
                      >
                        Explore Now
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup: Opens immediately when clicking 'Explore Now' */}
      {activeTest && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px 15px",
            overflow: "hidden",
            animation: "modalFadeIn 0.25s ease-out forwards",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeTest();
          }}
        >
          {/* STEP 1: LEAD FORM MODAL (Matching Image 1 Pixel-for-Pixel) */}
          {step === "lead" && (
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                border: "0.8px solid black",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                maxWidth: "460px",
                width: "100%",
                padding: "36px 32px 32px",
                position: "relative",
                boxSizing: "border-box",
                animation: "modalSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              }}
            >
              {/* Close Button '✕' in Top-Right Corner */}
              <button
                type="button"
                onClick={closeTest}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "18px",
                  background: "none",
                  border: "none",
                  fontSize: "24px",
                  fontWeight: 400,
                  color: "#000000",
                  cursor: "pointer",
                  padding: 0,
                  lineHeight: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "28px",
                  height: "28px",
                }}
                aria-label="Close"
              >
                ✕
              </button>

              <form onSubmit={handleLeadSubmit}>
                {/* 1. Full Name */}
                <div style={{ marginBottom: "18px" }}>
                  <label style={labelStyle}>
                    Full Name<span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    style={inputStyle}
                  />
                  {formErrors.name && (
                    <div style={{ color: "#dc2626", fontSize: "12px", marginTop: "4px" }}>
                      {formErrors.name}
                    </div>
                  )}
                </div>

                {/* 2. Email */}
                <div style={{ marginBottom: "18px" }}>
                  <label style={labelStyle}>
                    Email<span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    style={inputStyle}
                  />
                  {formErrors.email && (
                    <div style={{ color: "#dc2626", fontSize: "12px", marginTop: "4px" }}>
                      {formErrors.email}
                    </div>
                  )}
                </div>

                {/* 3. Mobile No. */}
                <div style={{ marginBottom: "20px" }}>
                  <label style={labelStyle}>
                    Mobile No.<span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Your Mobile Number"
                    maxLength={10}
                    required
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    style={inputStyle}
                  />
                  {formErrors.mobile && (
                    <div style={{ color: "#dc2626", fontSize: "12px", marginTop: "4px" }}>
                      {formErrors.mobile}
                    </div>
                  )}
                </div>

                {/* 4. Terms Checkbox */}
                <div
                  style={{
                    marginBottom: "24px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    id="homeLeadTerms"
                    required
                    checked={formData.terms}
                    onChange={(e) =>
                      setFormData({ ...formData, terms: e.target.checked })
                    }
                    style={{
                      marginTop: "3px",
                      width: "16px",
                      height: "16px",
                      accentColor: "#07a64b",
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  />
                  <label
                    htmlFor="homeLeadTerms"
                    style={{
                      fontSize: "13.5px",
                      color: "#212529",
                      lineHeight: "1.5",
                      margin: 0,
                      cursor: "pointer",
                    }}
                  >
                    By submitting this form, I agree to Counsel India&apos;s{" "}
                    <Link
                      href="/terms-and-conditions"
                      target="_blank"
                      style={{ color: "#07a64b", textDecoration: "none", fontWeight: 500 }}
                    >
                      Terms &amp; Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy-policy"
                      target="_blank"
                      style={{ color: "#07a64b", textDecoration: "none", fontWeight: 500 }}
                    >
                      Privacy Policy
                    </Link>
                    .<span style={{ color: "#ef4444" }}>*</span>
                  </label>
                </div>

                {/* 5. Left-Aligned Green Submit Button */}
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <button
                    type="submit"
                    style={{
                      border: "0.8px solid black",
                      borderRadius: "5px",
                      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                      backgroundColor: "#07a64b",
                      color: "#ffffff",
                      padding: "0 38px",
                      height: "44px",
                      fontSize: "16px",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background-color 0.2s ease, transform 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#069342";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#07a64b";
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 2: OTP VERIFICATION MODAL */}
          {step === "otp" && (
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "5px",
                border: "0.8px solid black",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                maxWidth: "460px",
                width: "100%",
                padding: "24px 28px 28px",
                position: "relative",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #e5e7eb",
                  paddingBottom: "12px",
                  marginBottom: "20px",
                }}
              >
                <h5 style={{ margin: 0, fontSize: "18px", fontWeight: 600, color: "#1c2d3a" }}>
                  OTP Verification
                </h5>
                <button
                  type="button"
                  onClick={closeTest}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "20px",
                    color: "#000000",
                    cursor: "pointer",
                    padding: 0,
                    lineHeight: 1,
                  }}
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleOtpVerify}>
                <div style={{ marginBottom: "14px" }}>
                  <label style={{ fontSize: "14px", fontWeight: 600, color: "#212529", display: "block", marginBottom: "4px" }}>
                    Enter OTP
                  </label>
                  <p style={{ fontSize: "12px", color: "#6b7280", margin: "0 0 10px" }}>
                    OTP sent to your Mobile (+91 {formData.mobile}), WhatsApp and Email
                  </p>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="Enter your OTP here"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    style={inputStyle}
                    autoFocus
                  />
                </div>

                <div style={{ textAlign: "right", marginBottom: "20px" }}>
                  {isResendActive ? (
                    <span style={{ fontSize: "12.5px", color: "#6b7280" }}>
                      (Resend in {resendTimer} sec)
                    </span>
                  ) : (
                    <span
                      onClick={handleResendOtp}
                      style={{
                        fontSize: "13px",
                        color: "#07a64b",
                        fontWeight: 500,
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                    >
                      Resend OTP
                    </span>
                  )}
                </div>

                {formErrors.otp && (
                  <div style={{ color: "#dc2626", fontSize: "13px", textAlign: "center", marginBottom: "14px" }}>
                    {formErrors.otp}
                  </div>
                )}

                <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
                  <button
                    type="button"
                    onClick={() => setStep("lead")}
                    style={{
                      border: "0.8px solid #6b7280",
                      borderRadius: "5px",
                      backgroundColor: "#f3f4f6",
                      color: "#374151",
                      padding: "0 20px",
                      height: "42px",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    style={{
                      border: "0.8px solid black",
                      borderRadius: "5px",
                      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                      backgroundColor: "#07a64b",
                      color: "#ffffff",
                      padding: "0 34px",
                      height: "42px",
                      fontSize: "15px",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 3: INTERACTIVE QUIZ QUESTIONS */}
          {step === "quiz" && (
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                border: "0.8px solid #07a64b",
                boxShadow: "0 15px 45px rgba(0, 0, 0, 0.4)",
                maxWidth: "680px",
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                padding: "28px 30px",
                position: "relative",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #e5e7eb",
                  paddingBottom: "14px",
                  marginBottom: "20px",
                }}
              >
                <div>
                  <h4 style={{ margin: 0, fontSize: "20px", fontWeight: 700, color: "#1c2d3a" }}>
                    {activeTest.title}
                  </h4>
                  <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#6b7280" }}>
                    Candidate: <strong>{formData.name}</strong> (+91 {formData.mobile})
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeTest}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "22px",
                    color: "#000000",
                    cursor: "pointer",
                    padding: 0,
                    lineHeight: 1,
                  }}
                >
                  ✕
                </button>
              </div>

              <p style={{ fontSize: "14px", color: "#4b5563", marginBottom: "20px" }}>
                Please rate the following questions based on your experience over the past 2 weeks:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
                {activeTest.questions.map((q, idx) => (
                  <div
                    key={q.id}
                    style={{
                      padding: "16px",
                      borderRadius: "8px",
                      backgroundColor: "#f9fafb",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    <p style={{ margin: "0 0 12px", fontWeight: 600, fontSize: "14.5px", color: "#1f2937" }}>
                      {idx + 1}. {q.question}
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                      <span style={{ fontSize: "12px", color: "#6b7280" }}>Rarely (1)</span>
                      <div style={{ display: "flex", gap: "6px" }}>
                        {[1, 2, 3, 4, 5].map((val) => (
                          <button
                            key={val}
                            type="button"
                            onClick={() => handleAnswerSelect(q.id, val)}
                            style={{
                              minWidth: "42px",
                              height: "36px",
                              borderRadius: "4px",
                              fontSize: "14px",
                              fontWeight: answers[q.id] === val ? 700 : 500,
                              backgroundColor: answers[q.id] === val ? "#07a64b" : "#ffffff",
                              color: answers[q.id] === val ? "#ffffff" : "#374151",
                              border: answers[q.id] === val ? "1px solid #07a64b" : "1px solid #d1d5db",
                              cursor: "pointer",
                              transition: "all 0.15s ease",
                            }}
                          >
                            {val}
                          </button>
                        ))}
                      </div>
                      <span style={{ fontSize: "12px", color: "#6b7280" }}>Always (5)</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  type="button"
                  onClick={calculateScore}
                  disabled={!isQuizComplete}
                  style={{
                    backgroundColor: isQuizComplete ? "#07a64b" : "#9ca3af",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "12px 28px",
                    fontSize: "15px",
                    fontWeight: 700,
                    cursor: isQuizComplete ? "pointer" : "not-allowed",
                    boxShadow: isQuizComplete ? "0 4px 12px rgba(7, 166, 75, 0.3)" : "none",
                  }}
                >
                  View Assessment Score →
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: ASSESSMENT RESULT */}
          {step === "result" && (
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                border: "0.8px solid #07a64b",
                boxShadow: "0 15px 45px rgba(0, 0, 0, 0.4)",
                maxWidth: "500px",
                width: "100%",
                padding: "36px 30px",
                textAlign: "center",
                position: "relative",
                boxSizing: "border-box",
              }}
            >
              <button
                type="button"
                onClick={closeTest}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "18px",
                  background: "none",
                  border: "none",
                  fontSize: "22px",
                  color: "#000000",
                  cursor: "pointer",
                  padding: 0,
                  lineHeight: 1,
                }}
              >
                ✕
              </button>

              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "#ecfdf5",
                  color: "#07a64b",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "30px",
                  marginBottom: "16px",
                }}
              >
                ✓
              </div>

              <h3 style={{ margin: "0 0 8px", fontSize: "22px", fontWeight: 700, color: "#1c2d3a" }}>
                Assessment Complete!
              </h3>
              <p style={{ margin: "0 0 20px", fontSize: "14px", color: "#6b7280" }}>
                Hello <strong>{formData.name}</strong>, your well-being score:
              </p>

              <div
                style={{
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  padding: "24px",
                  marginBottom: "24px",
                }}
              >
                <div style={{ fontSize: "48px", fontWeight: 800, color: "#07a64b", lineHeight: 1, marginBottom: "8px" }}>
                  {score}%
                </div>
                <div
                  style={{
                    display: "inline-block",
                    backgroundColor: "#ecfdf5",
                    color: "#07a64b",
                    padding: "4px 14px",
                    borderRadius: "20px",
                    fontSize: "13.5px",
                    fontWeight: 600,
                  }}
                >
                  {score >= 70
                    ? "Optimal Well-Being"
                    : score >= 45
                    ? "Moderate Resilience"
                    : "Needs Professional Guidance"}
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
                <button
                  type="button"
                  onClick={closeTest}
                  style={{
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    backgroundColor: "#ffffff",
                    color: "#374151",
                    padding: "10px 20px",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
                <Link
                  href="/counsellors-network"
                  style={{
                    backgroundColor: "#07a64b",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "10px 22px",
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  Book Counselor Session
                </Link>
              </div>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        .test-card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12) !important;
        }
        @keyframes modalFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes modalSlideDown {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(-16px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  );
}
