"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { submitLead } from "@/services/leadService";
import { updatePersonalityTestResult } from "@/services/personalityService";

export interface TestQuestionDef {
  id: number;
  text: string;
}

export interface MentalTestConfig {
  testNumber: 1 | 2 | 3;
  title: string;
  categoryName: string;
  questions: TestQuestionDef[];
}

export const MENTAL_TESTS_CONFIG: Record<number, MentalTestConfig> = {
  1: {
    testNumber: 1,
    title: "Emotional Well-Being Test",
    categoryName: "Emotional Well-Being",
    questions: [
      { id: 1, text: "1. I feel content and at peace with myself." },
      { id: 2, text: "2. I am able to manage stress in a healthy way." },
      { id: 3, text: "3. I feel confident in my ability to handle daily challenges." },
      { id: 4, text: "4. I have positive thoughts about myself and my future." },
      { id: 5, text: "5. I am able to balance my work and personal life well." },
      { id: 6, text: "6. I feel connected and supported by those around me." },
      { id: 7, text: "7. I have a sense of purpose in my daily activities." },
      { id: 8, text: "8. I experience a variety of emotions without feeling overwhelmed." },
      { id: 9, text: "9. I can recover from setbacks or difficult situations fairly quickly." },
      { id: 10, text: "10. I feel motivated to pursue my goals and dreams." },
    ],
  },
  2: {
    testNumber: 2,
    title: "Quality of Life Test",
    categoryName: "Quality of Life",
    questions: [
      { id: 1, text: "1. I am satisfied with my overall health." },
      { id: 2, text: "2. I feel safe and secure in my daily life." },
      { id: 3, text: "3. I am able to meet my daily financial needs comfortably." },
      { id: 4, text: "4. I have fulfilling relationships with family and friends." },
      { id: 5, text: "5. I enjoy my work/studies and find them meaningful." },
      { id: 6, text: "6. I am able to participate in leisure activities I enjoy." },
      { id: 7, text: "7. I have a sense of purpose and direction in life." },
      { id: 8, text: "8. I feel comfortable with my living conditions." },
      { id: 9, text: "9. I feel respected and valued in my social circles." },
      { id: 10, text: "10. I generally feel happy and content with my life." },
    ],
  },
  3: {
    testNumber: 3,
    title: "General Health Questionnaire (GHQ-10)",
    categoryName: "General Health",
    questions: [
      { id: 1, text: "1. I feel capable of making decisions about my daily life." },
      { id: 2, text: "2. I have been feeling cheerful and in good spirits." },
      { id: 3, text: "3. I have been able to concentrate on what I'm doing." },
      { id: 4, text: "4. I feel constantly under strain or stress." },
      { id: 5, text: "5. I have been feeling unhappy and depressed." },
      { id: 6, text: "6. I have been able to enjoy my normal day-to-day activities." },
      { id: 7, text: "7. I feel confident about handling personal problems." },
      { id: 8, text: "8. I feel physically healthy and able to carry out my daily tasks." },
      { id: 9, text: "9. I feel satisfied with my quality of sleep." },
      { id: 10, text: "10. I feel that I have enough energy for daily activities." },
    ],
  },
};

interface MentalTestViewProps {
  testNumber: 1 | 2 | 3;
  initialUser?: {
    name?: string;
    email?: string;
    mobile?: string;
    state?: string;
    id?: string;
  };
}

export default function MentalTestView({ testNumber, initialUser }: MentalTestViewProps) {
  const router = useRouter();
  const config = MENTAL_TESTS_CONFIG[testNumber] || MENTAL_TESTS_CONFIG[1];

  const [answers, setAnswers] = useState<Record<number, { choice: string; points: number }>>({});
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const [candidateName, setCandidateName] = useState(initialUser?.name || "");
  const [candidateEmail, setCandidateEmail] = useState(initialUser?.email || "");
  const [candidateMobile, setCandidateMobile] = useState(initialUser?.mobile || "");
  const [candidateState, setCandidateState] = useState(initialUser?.state || "");
  const [leadId, setLeadId] = useState(initialUser?.id || "");

  // Fallback to localStorage if initialUser was incomplete
  React.useEffect(() => {
    if (initialUser?.name) setCandidateName(initialUser.name);
    if (initialUser?.email) setCandidateEmail(initialUser.email);
    if (initialUser?.mobile) setCandidateMobile(initialUser.mobile);
    if (initialUser?.state) setCandidateState(initialUser.state);
    if (initialUser?.id) setLeadId(initialUser.id);

    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("ci_candidate_info");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (!candidateName && parsed.name) setCandidateName(parsed.name);
          if (!candidateEmail && parsed.email) setCandidateEmail(parsed.email);
          if (!candidateMobile && parsed.mobile) setCandidateMobile(parsed.mobile);
          if (!candidateState && parsed.state) setCandidateState(parsed.state);
        }
      } catch {}
    }
  }, [initialUser]);

  const handleSelectOption = (questionId: number, choice: string, points: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: { choice, points },
    }));
    setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verify all 10 questions are answered
    const unanswered = config.questions.filter((q) => !answers[q.id]);
    if (unanswered.length > 0) {
      setErrorMessage("Please answer all questions before submitting.");
      const firstUnansweredEl = document.getElementById(`q-block-${unanswered[0].id}`);
      if (firstUnansweredEl) {
        firstUnansweredEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    // Validate candidate details before submission
    if (!candidateName.trim() || !candidateEmail.trim() || !candidateMobile.trim()) {
      setErrorMessage(
        "Please fill in your Name, Email Address, and Mobile Number before submitting."
      );
      const detailsEl = document.getElementById("candidate-details-card");
      if (detailsEl) {
        detailsEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    const calculatedScore = Object.values(answers).reduce((acc, curr) => acc + curr.points, 0);
    setTotalScore(calculatedScore);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    const finalScore = String(calculatedScore);

    const activeId = leadId || initialUser?.id;
    const formattedAnswers: Record<string | number, string> = {};
    Object.entries(answers).forEach(([k, v]) => {
      formattedAnswers[k] = v.choice;
    });

    try {
      if (activeId) {
        // Update the existing lead that was created by the modal
        await updatePersonalityTestResult(
          String(activeId),
          finalScore,
          formattedAnswers,
          {
            name: candidateName.trim(),
            email: candidateEmail.trim(),
            mobile: candidateMobile.trim(),
            state: candidateState.trim() || undefined,
            score: calculatedScore,
            marks: finalScore,
            courseName: config.title,
          }
        );
      } else {
        // Only if no lead was created previously, create one with complete details
        const res = await submitLead({
          category: "personality-test",
          name: candidateName.trim(),
          email: candidateEmail.trim(),
          mobile: candidateMobile.trim(),
          state: candidateState.trim() || undefined,
          courseName: config.title,
          content: `Score: ${calculatedScore}/40 in ${config.title}`,
          medium: "Website Mental Test",
          source: `Mental Test ${testNumber}: ${config.title}`,
          extraData: {
            testNumber,
            testTitle: config.title,
            score: calculatedScore,
            marks: finalScore,
            result: finalScore,
            maxScore: 40,
            percentage: Math.round((calculatedScore / 40) * 100),
            answers,
          },
        });
        if (res.data?.id || res.data?.sNo) {
          setLeadId(String(res.data.id || res.data.sNo));
        }
      }
    } catch (err) {
      console.error("Failed to save test submission lead:", err);
    }

    // Redirect to the success page requested by user
    const targetSuccessUrl = `/mentaltest${testNumber}/success?testNumber=${testNumber}&score=${calculatedScore}&name=${encodeURIComponent(candidateName.trim())}&id=${encodeURIComponent(leadId || initialUser?.id || "")}`;
    router.push(targetSuccessUrl);
  };

  const getResultDetails = (score: number) => {
    if (score >= 32) {
      return {
        levelTitle: "High emotional well-being",
        color: "#28a745",
        description:
          "You possess a high quality of life, characterized by a holistic sense of well-being across various domains. Your overall health satisfaction reflects a commitment to physical and mental wellness, while feelings of safety and security in your daily life enhance your emotional stability. Financial comfort allows you to focus on fulfilling relationships, meaningful work or studies, and engaging leisure activities, contributing to your sense of purpose. Additionally, your positive living conditions and the respect you receive in social circles foster an environment where happiness and contentment can flourish.",
        strengths: [
          "Strong Support System",
          "Sense of Purpose",
          "Positive Self-Image",
          "Engagement in Leisure Activities",
          "Emotional Vitality & Balance",
        ],
        programs: [
          {
            title: "Master Practitioner in Counselling Psychology",
            duration: "1 Year",
            link: "/course",
          },
          { title: "Advanced CBT & Mindfulness Coaching", duration: "6 Months", link: "/courses" },
          {
            title: "Expressive Arts & Holistic Wellbeing Therapy",
            duration: "3 Months",
            link: "/courses",
          },
        ],
      };
    } else if (score >= 22 && score <= 31) {
      return {
        levelTitle: "Moderate emotional well-being",
        color: "#d97706",
        description:
          "Your responses indicate a balanced state of mental health with occasional periods of stress or fatigue. You demonstrate sound resilience and self-awareness, though targeted mindfulness habits, sleep hygiene, and professional counseling guidance will help you optimize your daily peace of mind and personal relationships.",
        strengths: [
          "Constructive Self-Awareness",
          "Adaptive Coping Ability",
          "Healthy Social Curiosity",
          "Desire for Personal Growth",
        ],
        programs: [
          {
            title: "Comprehensive Counselling & Psychotherapy Skills",
            duration: "6 Months",
            link: "/courses",
          },
          {
            title: "Stress & Anxiety Management Workshop",
            duration: "Live Cohort",
            link: "/events",
          },
        ],
      };
    } else {
      return {
        levelTitle: "Needs Attention & Compassionate Support",
        color: "#dc2626",
        description:
          "Your answers suggest you may currently be experiencing noticeable strain, emotional exhaustion, or overwhelming daily stress. Recognizing these feelings is an essential, courageous first step. You do not have to navigate this alone—Counsel India's licensed psychologists and certified therapists are here to guide you with confidential, compassionate care.",
        strengths: [
          "Honest Self-Reflection",
          "Willingness to Seek Clarity",
          "Openness to Positive Transformation",
        ],
        programs: [
          {
            title: "1-on-1 Confidential Personal Therapy Session",
            duration: "Live Booking",
            link: "/counsellors-network",
          },
          {
            title: "Emotional Resilience & Healing Foundations",
            duration: "Self-Paced",
            link: "/courses",
          },
        ],
      };
    }
  };

  const result = getResultDetails(totalScore);

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* 1. Page Banner matching exact live Counsel India template */}
      <div className="page-banner bg-color-04">
        <div className="page-banner__wrapper">
          <div className="container">
            <div className="page-banner__caption-02">
              <h2 className="page-banner__main-title-02">{config.title}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Test Questionnaire OR Results Screen */}
      <div className="section-padding-01">
        <div className="container custom-container">
          {!isSubmitted ? (
            /* EXACT SAME TEST UI from https://www.counselindia.com/mental_test1 */
            <div className="row">
              <div className="col-md-12">
                <div className="card1 pt-2">
                  <div className="card-body1">
                    <form id="personalityTestForm" onSubmit={handleSubmit} noValidate>
                      {/* Candidate Information Card */}
                      <div
                        id="candidate-details-card"
                        className="p-3 mb-4 rounded-2"
                        style={{
                          backgroundColor: "#f0fdf4",
                          border: "1px solid #bbf7d0",
                        }}
                      >
                        <h6 className="fw-bold mb-3" style={{ color: "#166534", fontSize: "15px" }}>
                          Candidate Information
                        </h6>
                        <div className="row g-2">
                          <div className="col-md-4">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              placeholder="Full Name *"
                              required
                              value={candidateName}
                              onChange={(e) => setCandidateName(e.target.value)}
                              style={{
                                border: "1px solid #86efac",
                                height: "40px",
                                fontSize: "14px",
                              }}
                            />
                          </div>
                          <div className="col-md-4">
                            <input
                              type="email"
                              className="form-control form-control-sm"
                              placeholder="Email Address *"
                              required
                              value={candidateEmail}
                              onChange={(e) => setCandidateEmail(e.target.value)}
                              style={{
                                border: "1px solid #86efac",
                                height: "40px",
                                fontSize: "14px",
                              }}
                            />
                          </div>
                          <div className="col-md-4">
                            <input
                              type="tel"
                              className="form-control form-control-sm"
                              placeholder="Mobile Number *"
                              maxLength={10}
                              required
                              value={candidateMobile}
                              onChange={(e) =>
                                setCandidateMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                              }
                              style={{
                                border: "1px solid #86efac",
                                height: "40px",
                                fontSize: "14px",
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="containertest">
                        {config.questions.map((q) => (
                          <div className="question" key={q.id} id={`q-block-${q.id}`}>
                            <p>{q.text}</p>
                            <label>
                              <input
                                type="radio"
                                name={`q${q.id}`}
                                value="A"
                                checked={answers[q.id]?.choice === "A"}
                                onChange={() => handleSelectOption(q.id, "A", 4)}
                              />{" "}
                              A) Always
                            </label>
                            <label>
                              <input
                                type="radio"
                                name={`q${q.id}`}
                                value="B"
                                checked={answers[q.id]?.choice === "B"}
                                onChange={() => handleSelectOption(q.id, "B", 3)}
                              />{" "}
                              B) Often
                            </label>
                            <label>
                              <input
                                type="radio"
                                name={`q${q.id}`}
                                value="C"
                                checked={answers[q.id]?.choice === "C"}
                                onChange={() => handleSelectOption(q.id, "C", 2)}
                              />{" "}
                              C) Rarely
                            </label>
                            <label>
                              <input
                                type="radio"
                                name={`q${q.id}`}
                                value="D"
                                checked={answers[q.id]?.choice === "D"}
                                onChange={() => handleSelectOption(q.id, "D", 1)}
                              />{" "}
                              D) Never
                            </label>
                          </div>
                        ))}
                      </div>

                      {errorMessage && (
                        <div
                          id="error-message"
                          style={{
                            color: "red",
                            marginTop: "12px",
                            marginBottom: "6px",
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          {errorMessage}
                        </div>
                      )}

                      <div className="countdown-register__btn">
                        <button
                          id="submitBtn"
                          className="btn btn-primary btn-hover-secondary"
                          type="submit"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            width: "100%",
                            height: "50px",
                            lineHeight: "1",
                            padding: "0 20px",
                            backgroundColor: "#28a745",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontSize: "16px",
                            fontWeight: 700,
                          }}
                        >
                          Submit
                        </button>
                      </div>

                      <input type="hidden" name="name" value={candidateName} />
                      <input type="hidden" name="email" value={candidateEmail} />
                      <input type="hidden" name="mobile" value={candidateMobile} />
                      <input type="hidden" name="state" value={candidateState} />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* EXACT SAME SUCCESS RESULT UI from https://www.counselindia.com/mentaltest1/success */
            <div
              className="countdown-signup-section bg-color-15 section-padding-01 scene"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                padding: "45px 36px 50px",
                border: "1px solid #e2e8f0",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "#e8f8ee",
                    color: "#28a745",
                    padding: "6px 20px",
                    borderRadius: "20px",
                    fontWeight: 700,
                    fontSize: "13.5px",
                    marginBottom: "12px",
                  }}
                >
                  Score: {totalScore} / 40 ({Math.round((totalScore / 40) * 100)}%)
                </span>
                <h2
                  className="section-title__title-03 text-center"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "30px",
                    fontWeight: 700,
                    color: "#1c2d3a",
                    margin: "0 0 10px",
                  }}
                >
                  <mark
                    style={{
                      backgroundColor: "transparent",
                      color: result.color,
                      fontWeight: 700,
                    }}
                  >
                    {result.levelTitle}
                  </mark>
                </h2>
              </div>

              <div className="countdown-widget">
                <div className="countdown-title">
                  <p
                    style={{
                      textAlign: "justify",
                      fontSize: "16px",
                      lineHeight: "1.75",
                      color: "#334155",
                      marginBottom: "24px",
                    }}
                  >
                    {result.description}
                  </p>

                  <div style={{ marginBottom: "26px" }}>
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "darkgreen",
                        marginBottom: "10px",
                      }}
                    >
                      Key Strengths:
                    </p>
                    <ul style={{ paddingLeft: "24px", margin: 0 }}>
                      {result.strengths.map((str, idx) => (
                        <li
                          key={idx}
                          style={{
                            fontSize: "15px",
                            color: "#334155",
                            marginBottom: "6px",
                            lineHeight: "1.5",
                          }}
                        >
                          {str}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginBottom: "35px" }}>
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#1e293b",
                        marginBottom: "14px",
                      }}
                    >
                      Recommended Programs:
                    </p>
                    <div className="row g-3">
                      {result.programs.map((prog, pIdx) => (
                        <div key={pIdx} className="col-md-6">
                          <div
                            style={{
                              padding: "16px 18px",
                              backgroundColor: "#f8fafc",
                              borderRadius: "8px",
                              border: "1px solid #e2e8f0",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div>
                              <h4
                                style={{
                                  fontSize: "14.5px",
                                  fontWeight: 700,
                                  color: "#1e293b",
                                  margin: 0,
                                }}
                              >
                                {prog.title}
                              </h4>
                              <span style={{ fontSize: "12px", color: "#64748b" }}>
                                Duration: {prog.duration}
                              </span>
                            </div>
                            <Link
                              href={prog.link}
                              style={{
                                fontSize: "13px",
                                fontWeight: 600,
                                color: "#28a745",
                                textDecoration: "underline",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Explore
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div
                    style={{
                      display: "flex",
                      gap: "14px",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      paddingTop: "15px",
                      borderTop: "1px solid #e2e8f0",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setAnswers({});
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      style={{
                        padding: "12px 28px",
                        backgroundColor: "#ffffff",
                        color: "#334155",
                        border: "1px solid #cbd5e1",
                        borderRadius: "6px",
                        fontWeight: 600,
                        fontSize: "15px",
                        cursor: "pointer",
                      }}
                    >
                      Retake Test
                    </button>
                    <Link
                      href="/contact-us"
                      style={{
                        display: "inline-block",
                        padding: "12px 28px",
                        backgroundColor: "#28a745",
                        color: "#ffffff",
                        borderRadius: "6px",
                        fontWeight: 700,
                        fontSize: "15px",
                        textDecoration: "none",
                      }}
                    >
                      Book Counseling Session
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Live Counsel India page stylesheet rules */}
      <style jsx>{`
        .containertest {
          margin: 0 auto;
          background: #fff;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .question {
          margin-bottom: 15px;
        }
        .question p {
          margin-bottom: 5px;
          font-size: 15px;
          color: #212529;
          font-weight: 500;
        }
        .question label {
          display: block;
          margin: 5px 0;
          font-size: 14.5px;
          color: #333;
          cursor: pointer;
        }
        .question input[type="radio"] {
          margin-right: 8px;
          cursor: pointer;
          vertical-align: middle;
        }
        .countdown-register__btn {
          margin-top: 25px;
        }
        #submitBtn {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          text-align: center !important;
          width: 100% !important;
          height: 50px !important;
          line-height: 1 !important;
          padding: 0 20px !important;
          background-color: #28a745 !important;
          color: #ffffff !important;
          border: none !important;
          border-radius: 5px !important;
          cursor: pointer !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          transition: background-color 0.2s ease !important;
        }
        #submitBtn:hover {
          background-color: #218838 !important;
        }
      `}</style>
    </div>
  );
}
