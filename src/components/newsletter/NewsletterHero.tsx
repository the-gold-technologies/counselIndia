"use client";
import React, { useState } from "react";

export default function NewsletterHero() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
  });
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpSuccess, setOtpSuccess] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const [timerActive, setTimerActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phoneNo.trim()
    ) {
      return;
    }
    setShowOtpModal(true);
    startTimer();
  };

  const startTimer = () => {
    setTimerActive(true);
    setResendTimer(30);
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setTimerActive(false);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleVerifyOtp = () => {
    if (!otp.trim()) {
      setOtpError("Please enter the OTP to proceed.");
      return;
    }
    setOtpError("");
    setOtpSuccess(true);
    setTimeout(() => {
      setShowOtpModal(false);
      setOtpSuccess(false);
      setFormData({ fullName: "", email: "", phoneNo: "" });
      setOtp("");
      alert("Subscription successful! Thank you for subscribing.");
    }, 1500);
  };

  return (
    <>
      <div className="newsletter-hero-container position-relative overflow-hidden">
        {/* Background Grid Image */}
        <div className="hero-bg-wrapper">
          <img
            src="https://i.ibb.co/z25bjyn/bg.png"
            alt="Hero Background Grid"
            className="hero-bg-img"
          />
        </div>

        <div className="container position-relative py-5" style={{ zIndex: 2 }}>
          {/* 1. Centered Headings */}
          <div className="text-center pt-3 pb-4">
            <h1 className="hero-main-title">
              GET{" "}
              <span className="hero-highlight">
                Psychology&apos;s Latest Secrets
              </span>
              <br />
              <span className="hero-subtitle-line">
                Delivered Directly to Your Inbox
              </span>
            </h1>

            <h2 className="hero-quote-title">
              &quot;SPARK YOUR LOVE FOR PSYCHOLOGY WITH OUR EXPERT INSIGHTS AND
              ENTERTAINING WEEKLY NEWSLETTER!&quot;
            </h2>
          </div>

          {/* 2. Form and Illustration Center Section */}
          <div className="row align-items-center justify-content-center mt-2 pb-4">
            {/* Form Column */}
            <div className="col-lg-6 col-md-8">
              <form onSubmit={handleSubmit} className="hero-direct-form">
                {/* Name Row */}
                <div className="form-row-item d-flex align-items-center mb-3">
                  <label htmlFor="heroName" className="form-field-label">
                    Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="heroName"
                    required
                    placeholder="Your Full Name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="form-control hero-input"
                  />
                </div>

                {/* Email Row */}
                <div className="form-row-item d-flex align-items-center mb-3">
                  <label htmlFor="heroEmail" className="form-field-label">
                    Email<span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    id="heroEmail"
                    required
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="form-control hero-input"
                  />
                </div>

                {/* Mobile Row */}
                <div className="form-row-item d-flex align-items-center mb-4">
                  <label htmlFor="heroMobile" className="form-field-label">
                    Mobile<span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    id="heroMobile"
                    required
                    placeholder="Your Mobile Number"
                    value={formData.phoneNo}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNo: e.target.value })
                    }
                    className="form-control hero-input"
                  />
                </div>

                {/* Submit Button aligned with inputs */}
                <div className="d-flex align-items-center">
                  <div className="form-field-label d-none d-sm-block"></div>
                  <button type="submit" className="hero-submit-btn flex-grow-1">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            {/* Illustration Column */}
            <div className="col-lg-5 col-md-4 d-none d-md-flex justify-content-center align-items-center">
              <img
                src="https://i.ibb.co/gdkRKbh/Illus.png"
                alt="Man reading newsletter illustration"
                className="hero-illus-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* OTP Verification Modal */}
      {showOtpModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px 15px",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid black",
              borderRadius: "8px",
              boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.35)",
              maxWidth: "420px",
              width: "100%",
              padding: "28px 24px",
              position: "relative",
            }}
          >
            <button
              onClick={() => setShowOtpModal(false)}
              style={{
                position: "absolute",
                top: "12px",
                right: "14px",
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            <h4 className="fw-bold font-size-18 text-dark mb-3 text-center">
              OTP Verification
            </h4>

            {otpSuccess ? (
              <div className="text-success text-center fw-bold py-3 font-size-15">
                ✓ OTP Verified Successfully! Subscribing...
              </div>
            ) : (
              <div>
                <label className="form-label font-size-14 fw-semibold text-dark">
                  Enter OTP
                </label>
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Enter 4 or 6 digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  className="form-control mb-3"
                  style={{
                    border: "0.8px solid black",
                    borderRadius: "5px",
                    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                  }}
                />
                <div
                  style={{
                    textAlign: "right",
                    marginBottom: "16px",
                    fontSize: "13px",
                  }}
                >
                  {!timerActive ? (
                    <span
                      style={{
                        cursor: "pointer",
                        color: "#0DA74B",
                        fontWeight: 600,
                      }}
                      onClick={startTimer}
                    >
                      Resend OTP
                    </span>
                  ) : (
                    <span style={{ color: "#6c757d" }}>
                      (Resend in {resendTimer} sec)
                    </span>
                  )}
                </div>

                {otpError && (
                  <div className="alert alert-danger py-1 px-2 font-size-12 mb-3 text-center">
                    {otpError}
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  className="btn w-100 py-2 font-size-15 fw-bold text-white"
                  style={{
                    background: "linear-gradient(to right, #006400, #00FF00)",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  Verify OTP &amp; Subscribe
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Exact CSS from Screenshot */}
      <style jsx>{`
        .newsletter-hero-container {
          min-height: 520px;
          background-color: #eafaf1;
          display: flex;
          align-items: center;
        }

        .hero-bg-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero-main-title {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          font-size: 38px;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.25;
          margin-bottom: 12px;
        }

        .hero-highlight {
          color: #0da74b;
          position: relative;
          display: inline-block;
        }

        .hero-highlight::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 2px;
          width: 100%;
          height: 3px;
          background: #0da74b;
          border-radius: 2px;
        }

        .hero-subtitle-line {
          color: #1e293b;
        }

        .hero-quote-title {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          font-size: 22px;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: 0.5px;
          max-width: 900px;
          margin: 0 auto;
          line-height: 1.4;
        }

        .hero-direct-form {
          width: 100%;
          max-width: 480px;
        }

        .form-field-label {
          width: 75px;
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0;
          flex-shrink: 0;
        }

        .hero-input {
          flex: 1;
          height: 44px;
          background-color: #ffffff;
          border: 1px solid #707070;
          border-radius: 4px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          font-size: 14px;
          color: #1e293b;
          padding: 0 14px;
          outline: none;
        }

        .hero-input::placeholder {
          color: #94a3b8;
          font-size: 13.5px;
        }

        .hero-submit-btn {
          height: 44px;
          background: linear-gradient(to right, #006400, #00ff00);
          color: #ffffff;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition:
            transform 0.15s ease,
            opacity 0.15s ease;
          box-shadow: 0 4px 10px rgba(0, 100, 0, 0.25);
        }

        .hero-submit-btn:hover {
          opacity: 0.95;
          transform: translateY(-1px);
        }

        .hero-illus-img {
          max-width: 320px;
          width: 100%;
          height: auto;
          display: block;
        }

        @media (max-width: 768px) {
          .hero-main-title {
            font-size: 26px;
          }

          .hero-quote-title {
            font-size: 16px;
          }

          .form-field-label {
            width: 65px;
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
}
