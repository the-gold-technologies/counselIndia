"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import EligibilityBanner from "./EligibilityBanner";
import {
  getPersonalityQuestions,
  getPersonalityTabResults,
  calculatePersonalityResult,
  updatePersonalityTestResult,
  PersonalityQuestion,
  PersonalityTabResult,
} from "@/services/personalityService";

interface PersonalityTestRunnerProps {
  leadId?: string;
  initialUser?: {
    name?: string;
    email?: string;
    mobile?: string;
  };
}

export default function PersonalityTestRunner({ leadId, initialUser }: PersonalityTestRunnerProps) {
  const router = useRouter();
  const [questions, setQuestions] = useState<PersonalityQuestion[]>([]);
  const [tabResults, setTabResults] = useState<PersonalityTabResult[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string | number, string>>({});
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [calculatedResult, setCalculatedResult] = useState<PersonalityTabResult | null>(null);

  const candidateName = initialUser?.name || "Candidate";
  const candidateEmail = initialUser?.email || "";
  const candidateMobile = initialUser?.mobile || "";

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [qData, trData] = await Promise.all([
          getPersonalityQuestions(),
          getPersonalityTabResults(),
        ]);
        setQuestions(qData);
        setTabResults(trData);
      } catch (err) {
        console.error("Failed to load personality test data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleSelectOption = (questionId: string | number, value: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
    setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (questions.length === 0) return;

    // Check if all questions are answered
    const unanswered = questions.filter((q) => !selectedAnswers[q.id]);
    if (unanswered.length > 0) {
      setErrorMessage("Please ensure all options are selected before submitting");
      const firstEl = document.getElementById(`q-block-${unanswered[0].id}`);
      if (firstEl) {
        firstEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // 1. Calculate archetype based on selected traits and tab results
      const result = calculatePersonalityResult(selectedAnswers, tabResults);
      setCalculatedResult(result);

      // 2. Update the lead entry in the Admin if leadId exists
      if (leadId) {
        await updatePersonalityTestResult(leadId, result?.name || "Completed", selectedAnswers);
      }

      setIsSubmitted(true);
      // Navigate to the official success page matching https://www.counselindia.com/personality-test/success
      const targetUrl = `/personality-test/success?leadId=${encodeURIComponent(leadId || "")}&result=${encodeURIComponent(result?.name || "")}`;
      router.push(targetUrl);
    } catch (err: any) {
      console.error("Failed to submit personality test:", err);
      setErrorMessage("Something went wrong while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setCalculatedResult(null);
    setErrorMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="main-wrapper bg-white min-vh-100">
      {/* 1. Page Banner matching Counsel India live */}
      <EligibilityBanner />

      {/* 2. Questionnaire or Result Section */}
      <div className="section-padding-01 py-5">
        <div className="container custom-container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-11 col-12">
              {loading ? (
                <div className="text-center py-5">
                  <div
                    className="spinner-border text-success"
                    role="status"
                    style={{ width: "3rem", height: "3rem" }}
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p className="mt-3 text-muted">Loading Personality Assessment Questions...</p>
                </div>
              ) : !isSubmitted ? (
                /* LIVE TEST QUESTIONNAIRE UI matching https://www.counselindia.com/personality_test1/73827 */
                <div className="card1 pt-2">
                  <div className="card-body1">
                    {/* Candidate strip if name is available */}
                    {candidateName && candidateName !== "Candidate" && (
                      <div
                        className="mb-4 p-3 rounded-2"
                        style={{
                          backgroundColor: "#f0fdf4",
                          border: "1px solid #bbf7d0",
                          color: "#166534",
                          fontSize: "14px",
                        }}
                      >
                        <strong>Candidate:</strong> {candidateName}{" "}
                        {candidateEmail && (
                          <span>
                            {" "}
                            | <strong>Email:</strong> {candidateEmail}
                          </span>
                        )}
                        {candidateMobile && (
                          <span>
                            {" "}
                            | <strong>Mobile:</strong> {candidateMobile}
                          </span>
                        )}
                      </div>
                    )}

                    <form id="personalityTestForm" onSubmit={handleSubmit} noValidate>
                      {questions.map((q, idx) => (
                        <div className="question" key={q.id} id={`q-block-${q.id}`}>
                          <h6
                            className="mb-3 fw-bold"
                            style={{
                              fontSize: "16px",
                              color: "#1e293b",
                              lineHeight: "1.5",
                            }}
                          >
                            Q.{idx + 1} {q.question.replace(/^Q\.?\s*/i, "")}
                          </h6>

                          <div className="answers-list ps-1">
                            {q.answers.map((ans, aIdx) => {
                              const isChecked = selectedAnswers[q.id] === ans.value;
                              return (
                                <div className="answer mb-2" key={aIdx}>
                                  <label
                                    className="d-flex align-items-baseline gap-2 cursor-pointer"
                                    style={{
                                      fontSize: "14.5px",
                                      color: isChecked ? "#07a64b" : "#334155",
                                      fontWeight: isChecked ? 600 : 400,
                                      cursor: "pointer",
                                    }}
                                  >
                                    <input
                                      type="radio"
                                      name={`question_${q.id}`}
                                      value={ans.value}
                                      checked={isChecked}
                                      onChange={() => handleSelectOption(q.id, ans.value)}
                                      className="answer-radio mt-1"
                                      style={{
                                        accentColor: "#07a64b",
                                        cursor: "pointer",
                                        width: "16px",
                                        height: "16px",
                                        flexShrink: 0,
                                      }}
                                    />
                                    <span>{ans.answer}</span>
                                  </label>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}

                      {/* Error Message */}
                      {errorMessage && (
                        <div
                          id="error-message"
                          className="alert alert-danger mt-4"
                          style={{
                            color: "#b91c1c",
                            backgroundColor: "#fef2f2",
                            borderColor: "#fecaca",
                            fontSize: "14.5px",
                            fontWeight: 600,
                          }}
                        >
                          {errorMessage}
                        </div>
                      )}

                      {/* Submit Button */}
                      <div className="countdown-register__btn text-center mt-5 pt-2">
                        <button
                          id="submitBtn"
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary btn-hover-secondary"
                          style={{
                            backgroundColor: "#00a651",
                            color: "#ffffff",
                            border: "1.2px solid #000000",
                            borderRadius: "10px",
                            fontWeight: 800,
                            fontSize: "20px",
                            padding: "12px 64px",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.28)",
                            minWidth: "190px",
                            lineHeight: "1.2",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                      </div>

                      {/* Hidden tracking values */}
                      <input type="hidden" name="name" value={candidateName} />
                      <input type="hidden" name="email" value={candidateEmail} />
                      <input type="hidden" name="mobile" value={candidateMobile} />
                    </form>
                  </div>
                </div>
              ) : (
                /* RESULT SCREEN: Displaying Tab Result Archetype */
                <div
                  className="card1 p-4 p-md-5 bg-white"
                  style={{
                    border: "0.8px solid #000000",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="text-center mb-4">
                    <span
                      className="badge px-3 py-2 rounded-pill mb-3"
                      style={{
                        backgroundColor: "#e8f5e9",
                        color: "#07a64b",
                        fontSize: "14px",
                        fontWeight: 600,
                        border: "1px solid #c8e6c9",
                      }}
                    >
                      Assessment Completed
                    </span>

                    <h2
                      style={{
                        fontFamily: "Georgia, 'Playfair Display', serif",
                        fontSize: "clamp(26px, 3.2vw, 36px)",
                        fontWeight: 700,
                        color: "#1e293b",
                        marginBottom: "12px",
                      }}
                    >
                      Your Personality Archetype:
                    </h2>

                    <div
                      className="d-inline-block px-4 py-2 rounded-3 my-2"
                      style={{
                        backgroundColor: "#f0fdf4",
                        border: "2px solid #07a64b",
                      }}
                    >
                      <h3
                        className="m-0"
                        style={{
                          color: "#07a64b",
                          fontWeight: 800,
                          fontSize: "clamp(22px, 2.8vw, 30px)",
                          letterSpacing: "-0.5px",
                        }}
                      >
                        {calculatedResult?.name || "The Balanced Explorer"}
                      </h3>
                    </div>
                  </div>

                  {/* Archetype Description from Tab Result */}
                  <div
                    className="p-4 rounded-3 my-4"
                    style={{
                      backgroundColor: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      lineHeight: "1.8",
                      fontSize: "15.5px",
                      color: "#334155",
                      textAlign: "justify",
                    }}
                  >
                    <p className="m-0">
                      {calculatedResult?.description ||
                        "You possess a well-rounded and versatile personality, approaching challenges with a balanced mix of enthusiasm, logic, and empathy."}
                    </p>
                  </div>

                  {/* Next Step Recommendations */}
                  <div className="mt-4 pt-2 border-top">
                    <h5 className="fw-bold mb-3 text-dark font-size-17">
                      What does this mean for your career in Psychology?
                    </h5>
                    <p style={{ fontSize: "14.5px", color: "#64748b", lineHeight: "1.7" }}>
                      Understanding your personality archetype helps you choose the counseling
                      specialization that aligns best with your innate psychological traits,
                      communication style, and empathy quotient.
                    </p>

                    <div className="d-flex flex-wrap gap-3 justify-content-center mt-4 pt-2">
                      <button
                        type="button"
                        onClick={handleRetake}
                        className="btn"
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#334155",
                          border: "1.5px solid #cbd5e1",
                          borderRadius: "8px",
                          fontWeight: 700,
                          fontSize: "15px",
                          padding: "10px 24px",
                          cursor: "pointer",
                        }}
                      >
                        Retake Test
                      </button>

                      <Link
                        href="/courses"
                        className="btn"
                        style={{
                          backgroundColor: "#07a64b",
                          color: "#ffffff",
                          borderRadius: "8px",
                          fontWeight: 700,
                          fontSize: "15px",
                          padding: "10px 28px",
                          textDecoration: "none",
                          boxShadow: "0 2px 6px rgba(7, 166, 75, 0.3)",
                        }}
                      >
                        Explore Psychology Courses
                      </Link>

                      <Link
                        href="/contact-us"
                        className="btn"
                        style={{
                          backgroundColor: "#1e293b",
                          color: "#ffffff",
                          borderRadius: "8px",
                          fontWeight: 700,
                          fontSize: "15px",
                          padding: "10px 24px",
                          textDecoration: "none",
                        }}
                      >
                        Speak to an Advisor
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .question {
          margin-top: 26px;
          margin-bottom: 8px;
          padding-bottom: 18px;
          border-bottom: 1px solid #f1f5f9;
        }
        .question:last-child {
          border-bottom: none;
        }
        .answer label:hover {
          color: #07a64b !important;
        }
        #submitBtn:hover {
          background-color: #05823a !important;
        }
      `}</style>
    </div>
  );
}
