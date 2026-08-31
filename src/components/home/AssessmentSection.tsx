"use client";
import React, { useState } from "react";

interface TestQuestion {
  id: number;
  question: string;
}

interface TestConfig {
  id: string;
  title: string;
  image: string;
  questions: TestQuestion[];
}

const TESTS: TestConfig[] = [
  {
    id: "test1",
    title: "Emotional Well-Being Test",
    image:
      "https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/mastergalaxyimages/second-cover_converted.webp",
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
    title: "General Health Test",
    image:
      "https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/mastergalaxyimages/coverr_converted.webp",
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
  const [step, setStep] = useState<"quiz" | "lead" | "otp" | "result">("quiz");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    terms: true,
  });
  const [otp, setOtp] = useState("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [score, setScore] = useState<number>(0);

  const openTest = (test: TestConfig) => {
    setActiveTest(test);
    setStep("quiz");
    setAnswers({});
    setOtp("");
    setFormErrors({});
  };

  const closeTest = () => {
    setActiveTest(null);
    setStep("quiz");
  };

  const handleAnswerSelect = (qId: number, val: number) => {
    setAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const isQuizComplete =
    activeTest &&
    activeTest.questions.every((q) => answers[q.id] !== undefined);

  const proceedToLead = () => {
    if (!isQuizComplete) {
      alert("Please answer all questions before proceeding.");
      return;
    }
    const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0);
    const calculatedPercentage = Math.round(
      (totalScore / (activeTest.questions.length * 5)) * 100
    );
    setScore(calculatedPercentage);
    setStep("lead");
  };

  const validateLeadForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Please enter your full name.";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(formData.mobile)) {
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
    }
  };

  const handleOtpVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length >= 4) {
      setStep("result");
    } else {
      setFormErrors({ otp: "Please enter a valid 4-digit OTP code." });
    }
  };

  return (
    <>
      <div className="section-title container mt-5">
        <h2 className="section-title__title-03">
          <mark>Free Mental Health Tests</mark>
        </h2>
      </div>

      <div className="content-text">
        <div className="blog-section section-padding-01">
          <div className="container custom-container">
            <div className="row gy-10">
              <div className="col-lg-12">
                <div className="row gy-10">
                  {TESTS.map((test) => (
                    <div className="col-xl-4 col-md-6" key={test.id}>
                      {/* Blog Item Start */}
                      <div className="blog-item-02">
                        <div className="blog-item-02__image">
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              openTest(test);
                            }}
                          >
                            <img
                              src={test.image}
                              alt={test.title}
                              width="370"
                              height="201"
                            />
                          </a>
                        </div>
                        <div className="blog-item-02__content text-center">
                          <h3 className="blog-item-02__title text-center">
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                openTest(test);
                              }}
                            >
                              {test.title}
                            </a>
                          </h3>
                          <a
                            href="#"
                            className="blog-item-02__more btn btn-light btn-hover-white d-inline-block"
                            onClick={(e) => {
                              e.preventDefault();
                              openTest(test);
                            }}
                          >
                            Explore Now <i className="fas fa-long-arrow-alt-right ms-1"></i>
                          </a>
                        </div>
                      </div>
                      {/* Blog Item End */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modal */}
      {activeTest && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1050 }}
          tabIndex={-1}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 shadow-lg rounded-3">
              <div className="modal-header bg-success text-white py-3">
                <h5 className="modal-title text-white fw-bold">
                  {activeTest.title}
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={closeTest}
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body p-4">
                {/* STEP 1: QUIZ QUESTIONS */}
                {step === "quiz" && (
                  <div>
                    <p className="text-muted mb-4">
                      Please rate the following questions based on your experience over the past 2 weeks (1 = Rarely, 5 = Almost Always):
                    </p>
                    <div className="d-flex flex-column gap-4">
                      {activeTest.questions.map((q, idx) => (
                        <div key={q.id} className="p-3 rounded bg-light border">
                          <p className="fw-semibold mb-2">
                            {idx + 1}. {q.question}
                          </p>
                          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 pt-1">
                            <span className="font-size-12 text-muted">Rarely (1)</span>
                            <div className="btn-group" role="group">
                              {[1, 2, 3, 4, 5].map((val) => (
                                <button
                                  key={val}
                                  type="button"
                                  onClick={() => handleAnswerSelect(q.id, val)}
                                  className={`btn btn-sm ${
                                    answers[q.id] === val
                                      ? "btn-success text-white fw-bold"
                                      : "btn-outline-secondary"
                                  }`}
                                  style={{ minWidth: "40px" }}
                                >
                                  {val}
                                </button>
                              ))}
                            </div>
                            <span className="font-size-12 text-muted">Always (5)</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-end">
                      <button
                        onClick={proceedToLead}
                        disabled={!isQuizComplete}
                        className="btn btn-success px-4"
                      >
                        Continue to Get Score <i className="fas fa-arrow-right ms-1"></i>
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: LEAD CAPTURE */}
                {step === "lead" && (
                  <form onSubmit={handleLeadSubmit}>
                    <div className="text-center mb-4">
                      <h4 className="fw-bold text-dark">Almost Done!</h4>
                      <p className="text-muted font-size-14">
                        Enter your details to generate your customized mental health report and counseling recommendations.
                      </p>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold font-size-14">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                      {formErrors.name && (
                        <div className="text-danger font-size-12 mt-1">{formErrors.name}</div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold font-size-14">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                      {formErrors.email && (
                        <div className="text-danger font-size-12 mt-1">{formErrors.email}</div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold font-size-14">Mobile Number (+91)</label>
                      <input
                        type="tel"
                        maxLength={10}
                        className="form-control"
                        placeholder="9876543210"
                        value={formData.mobile}
                        onChange={(e) =>
                          setFormData({ ...formData, mobile: e.target.value })
                        }
                      />
                      {formErrors.mobile && (
                        <div className="text-danger font-size-12 mt-1">{formErrors.mobile}</div>
                      )}
                    </div>

                    <div className="form-check mb-4">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="termsCheck"
                        checked={formData.terms}
                        onChange={(e) =>
                          setFormData({ ...formData, terms: e.target.checked })
                        }
                      />
                      <label className="form-check-label font-size-12 text-muted" htmlFor="termsCheck">
                        I agree to the Terms &amp; Conditions and Privacy Policy of CounselIndia.
                      </label>
                      {formErrors.terms && (
                        <div className="text-danger font-size-12 mt-1">{formErrors.terms}</div>
                      )}
                    </div>

                    <div className="d-flex justify-content-between">
                      <button
                        type="button"
                        onClick={() => setStep("quiz")}
                        className="btn btn-outline-secondary"
                      >
                        Back
                      </button>
                      <button type="submit" className="btn btn-success px-4">
                        Send OTP &amp; View Result
                      </button>
                    </div>
                  </form>
                )}

                {/* STEP 3: OTP VERIFICATION */}
                {step === "otp" && (
                  <form onSubmit={handleOtpVerify} className="text-center py-3">
                    <div className="mb-3">
                      <i className="fas fa-shield-alt fa-3x text-success mb-3"></i>
                      <h4 className="fw-bold">Enter Verification Code</h4>
                      <p className="text-muted font-size-14">
                        We sent a 4-digit verification code to <strong>+91 {formData.mobile}</strong>.
                      </p>
                    </div>

                    <div className="d-flex justify-content-center mb-3">
                      <input
                        type="text"
                        maxLength={6}
                        className="form-control text-center fw-bold fs-4"
                        style={{ maxWidth: "200px", letterSpacing: "8px" }}
                        placeholder="••••"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        autoFocus
                      />
                    </div>
                    {formErrors.otp && (
                      <div className="text-danger font-size-12 mb-3">{formErrors.otp}</div>
                    )}

                    <div className="d-flex justify-content-center gap-3">
                      <button
                        type="button"
                        onClick={() => setStep("lead")}
                        className="btn btn-outline-secondary"
                      >
                        Change Number
                      </button>
                      <button type="submit" className="btn btn-success px-4">
                        Verify &amp; Unlock Score
                      </button>
                    </div>
                  </form>
                )}

                {/* STEP 4: RESULT SCREEN */}
                {step === "result" && (
                  <div className="text-center py-4">
                    <div className="mb-3">
                      <i className="fas fa-check-circle fa-4x text-success mb-3"></i>
                      <h3 className="fw-bold">Assessment Completed!</h3>
                      <p className="text-muted">
                        Hello <strong>{formData.name}</strong>, your well-being score has been calculated:
                      </p>
                    </div>

                    <div className="my-4 p-4 bg-light rounded-3 d-inline-block shadow-sm" style={{ minWidth: "280px" }}>
                      <div className="display-4 fw-bold text-success mb-1">
                        {score}%
                      </div>
                      <span className="badge bg-success-subtle text-success px-3 py-2 font-size-14 fw-semibold">
                        {score >= 70
                          ? "Optimal Well-Being"
                          : score >= 45
                          ? "Moderate Resilience"
                          : "Needs Support & Guidance"}
                      </span>
                    </div>

                    <div className="d-flex justify-content-center gap-3">
                      <button
                        onClick={closeTest}
                        className="btn btn-outline-secondary"
                      >
                        Close
                      </button>
                      <a
                        href="/counselling"
                        className="btn btn-success"
                      >
                        Book Counselor Session
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
