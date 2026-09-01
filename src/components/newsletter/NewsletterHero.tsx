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
      {/* 1. Page Banner Shapes from PHP */}
      <div className="page-banner bg-color-04">
        <div className="page-banner__wrapper">
          <div className="page-banner__shape-01"></div>
          <div className="page-banner__shape-02"></div>
          <div className="page-banner__shape-03"></div>
        </div>
      </div>

      {/* 2. Banner Image Container from PHP */}
      <div className="banner-image">
        {/* Subscription Form */}
        <div className="subscription-form">
          <form
            id="subscribeForm2"
            name="testing"
            onSubmit={handleSubmit}
            className="hero-sub-form"
          >
            <div className="hero-form-row">
              <label htmlFor="fullName" className="hero-form-label">
                Name<span className="required-star">*</span>
              </label>
              <div className="hero-input-wrapper">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="hero-form-input"
                  placeholder="Your Full Name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="hero-form-row">
              <label htmlFor="emailInput" className="hero-form-label">
                Email<span className="required-star">*</span>
              </label>
              <div className="hero-input-wrapper">
                <input
                  type="email"
                  id="emailInput"
                  name="email"
                  placeholder="Your Email Address"
                  className="hero-form-input"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="hero-form-row">
              <label htmlFor="phoneNo" className="hero-form-label">
                Mobile<span className="required-star">*</span>
              </label>
              <div className="hero-input-wrapper">
                <input
                  type="tel"
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="Your Mobile Number"
                  className="hero-form-input"
                  value={formData.phoneNo}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNo: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="hero-form-row">
              <label className="hero-form-label d-none d-sm-block"></label>
              <div className="hero-input-wrapper">
                <button
                  type="submit"
                  id="submit-hero"
                  className="hero-submit-btn"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Background Canvas & Illustration from PHP */}
        <img
          src="https://i.ibb.co/z25bjyn/bg.png"
          alt="bg-image"
          className="bg-image"
        />
        <img
          src="https://i.ibb.co/gdkRKbh/Illus.png"
          alt="illus-image"
          className="illus-image"
        />

        {/* Text Container from PHP */}
        <div className="text-container">
          <h2 className="slider-caption__main-title">
            GET <mark>Psychology&apos;s Latest Secrets</mark>
            <br />
            Delivered Directly to Your Inbox
          </h2>
          <h3 className="slider-caption__sub-title">
            &quot;SPARK YOUR LOVE FOR PSYCHOLOGY WITH OUR EXPERT
            <br className="d-none d-md-inline" /> INSIGHTS AND ENTERTAINING
            WEEKLY NEWSLETTER!&quot;
          </h3>
        </div>
      </div>

      {/* OTP Verification Modal from PHP */}
      {showOtpModal && (
        <div
          className="modal fade show"
          style={{
            display: "flex",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 99999,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="modal-dialog"
            style={{ width: "100%", maxWidth: "420px" }}
          >
            <div
              className="modal-content"
              style={{
                border: "0.8px solid black",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                backgroundColor: "#fff",
                padding: "20px",
                position: "relative",
              }}
            >
              <button
                type="button"
                onClick={() => setShowOtpModal(false)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "12px",
                  background: "none",
                  border: "none",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>

              <div
                className="modal-header"
                style={{ border: "none", paddingBottom: "10px" }}
              >
                <h5
                  className="modal-title"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  OTP Verification
                </h5>
              </div>

              <div className="modal-body">
                {otpSuccess ? (
                  <div
                    style={{
                      color: "green",
                      textAlign: "center",
                      fontWeight: 600,
                      padding: "10px 0",
                    }}
                  >
                    OTP verified successfully.
                  </div>
                ) : (
                  <div>
                    <div className="mb-3">
                      <label
                        htmlFor="otpnewspage"
                        className="form-label"
                        style={{ fontWeight: 500 }}
                      >
                        Enter OTP
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="otpnewspage"
                        style={{
                          border: "0.8px solid black",
                          borderRadius: "5px",
                          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                        }}
                        name="otpnewspage"
                        placeholder="Enter your OTP here"
                        value={otp}
                        onChange={(e) =>
                          setOtp(e.target.value.replace(/\D/g, ""))
                        }
                        required
                      />
                    </div>
                    <div
                      style={{
                        textAlign: "right",
                        marginTop: "10px",
                        marginBottom: "15px",
                      }}
                    >
                      {!timerActive ? (
                        <span
                          id="resendOTPText"
                          style={{
                            cursor: "pointer",
                            color: "#006400",
                            fontWeight: 500,
                          }}
                          onClick={startTimer}
                        >
                          Resend OTP
                        </span>
                      ) : (
                        <span id="resendOTPTimer">
                          (Resend in{" "}
                          <span id="resendTimerValue">{resendTimer}</span> sec)
                        </span>
                      )}
                    </div>
                    {otpError && (
                      <div
                        id="otpError22"
                        style={{
                          textAlign: "center",
                          color: "red",
                          marginBottom: "10px",
                        }}
                      >
                        {otpError}
                      </div>
                    )}
                    <div style={{ textAlign: "center" }}>
                      <button
                        type="button"
                        className="btn btn-primary"
                        style={{
                          backgroundColor: "#07a64b",
                          borderColor: "#07a64b",
                        }}
                        onClick={handleVerifyOtp}
                      >
                        Verify OTP
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media only screen and (max-width: 600px) {
          .subscription-form {
            width: 90% !important;
            top: 72% !important;
            padding: 0 !important;
          }

          .hero-form-row {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 4px !important;
          }

          .hero-form-label {
            text-align: left !important;
            width: 100% !important;
            font-size: 14px !important;
          }

          .banner-image {
            width: 100%;
            height: 60% !important;
          }

          .slider-caption__main-title {
            font-size: 22px !important;
          }

          .slider-caption__sub-title {
            font-size: 18px !important;
          }

          .illus-image {
            width: 0% !important;
          }

          .benifits {
            height: 40% !important;
          }

          .section {
            display: flex;
            flex-direction: column;
            background-image: none;
            height: auto;
            padding: 8px;
          }

          .section-content {
            align-items: center;
          }

          .heading {
            font-size: 16px !important;
            width: 100% !important;
            text-align: center !important;
          }

          .subheading {
            font-size: 14px !important;
            width: 90% !important;
            text-align: center;
          }

          .subscriber-section {
            align-items: center;
            margin-top: 8% !important;
          }

          .subscriber-text {
            margin-left: 0;
            margin-top: 2px !important;
            font-size: 8px !important;
          }

          .subscriber-image {
            width: 30px !important;
            height: 30px !important;
            margin-right: 3px !important;
          }

          #footer-btn {
            width: 90% !important;
            font-size: 14px !important;
            margin-left: 50% !important;
            height: 25% !important;
            margin-top: -5%;
          }

          #footer-poster {
            margin-bottom: 10px !important;
            margin-top: -30% !important;
          }

          .subscriber-text {
            margin-top: 25% !important;
          }
        }

        .btn-custom {
          background-color: #0da74b;
          border-color: rgb(2, 61, 2);
          color: white;
        }

        .btn-custom:hover,
        .btn-custom:focus {
          background-color: darkgreen;
          border-color: darkgreen;
          color: white;
        }

        .event-item {
          display: flex;
          flex-direction: column;
        }

        .event-item__image {
          margin-bottom: 10px;
        }

        .blog-item-02__content {
          flex-grow: 1;
        }

        .blog-item-02__button {
          margin-top: 10px;
        }

        .section-title {
          text-align: center;
          position: relative;
        }

        .section-title__title {
          margin: 0;
          display: inline-block;
          position: relative;
        }

        .section-title__title::after {
          content: "";
          display: block;
          width: calc(100% + 20px);
          height: 4px;
          background-color: green;
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
        }

        .section {
          display: flex;
          background-image: url("https://i.ibb.co/xhDq9kR/Frame-716.png");
          background-size: cover;
          background-position: center;
          height: 250px;
          padding: 16px;
          box-sizing: border-box;
        }

        .section-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          color: #fff;
        }

        .heading {
          font-size: 32px;
          font-weight: bold;
          margin-top: 2%;
          width: 550px;
        }

        .subheading {
          font-size: 20px;
          width: 550px;
        }

        .textbox {
          width: calc(50% - 6px);
          margin-right: 12px;
          background-color: #fff;
          padding: 10px;
          border-radius: 5px;
          align-items: right;
        }

        .textbox:last-child {
          margin-right: 0;
        }

        .subscriber-section {
          display: flex;
          align-items: center;
          margin-top: 4px;
          color: #fff;
        }

        .subscriber-text {
          margin-left: 10px;
        }

        .subscriber-images {
          display: flex;
          margin-top: 10px;
        }

        .subscriber-image {
          width: 50px;
          height: 50px;
          border-radius: 25px;
          margin-right: -16px;
        }

        .banner-image {
          position: relative;
          width: 100%;
          text-align: left;
          height: 80vh;
          max-height: 80vh;
          overflow: hidden;
        }

        .bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .illus-image {
          position: absolute;
          bottom: 0;
          right: 0;
          margin-right: 5%;
          max-height: 75%;
        }

        .text-container {
          position: absolute;
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 24px;
          line-height: 1.5;
          width: 95%;
          max-width: 1300px;
          text-align: center;
          z-index: 3;
        }

        .text-container p {
          margin: 0;
        }

        .slider-caption__main-title {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          font-size: 36px;
          font-weight: 700;
          color: #212529;
          line-height: 1.3;
          margin-bottom: 8px;
        }

        .slider-caption__main-title mark {
          position: relative;
          color: #07a64b;
          padding: 0 0 6px 0;
          background-color: transparent;
          display: inline-block;
        }

        .slider-caption__main-title mark::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 12px;
          bottom: -2px;
          left: 0;
          z-index: -1;
          background-color: #07a64b;
          -webkit-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
          -webkit-mask-image: url(/assets/images/headline-curve-02.svg);
          mask-image: url(/assets/images/headline-curve-02.svg);
        }

        .slider-caption__sub-title {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          font-size: 32px;
          font-weight: 700;
          color: #000000 !important;
          line-height: 1.45;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 14px auto 0;
          width: 100%;
          max-width: 1200px;
        }

        .subscription-form {
          position: absolute;
          top: 68%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 530px;
          max-width: 92%;
          z-index: 4;
        }

        .hero-sub-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .hero-form-row {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .hero-form-label {
          width: 72px;
          min-width: 72px;
          text-align: right;
          font-size: 16px;
          font-weight: 600;
          color: #1e293b;
          margin: 0;
          user-select: none;
        }

        .required-star {
          color: #ef4444;
          margin-left: 2px;
          font-weight: 700;
        }

        .hero-input-wrapper {
          flex: 1;
        }

        .hero-form-input {
          width: 100%;
          height: 48px;
          background-color: #ffffff;
          border: 1.2px solid #2d3748;
          border-radius: 6px;
          padding: 0 16px;
          font-size: 15px;
          color: #1e293b;
          outline: none;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .hero-form-input:focus {
          border-color: #07a64b;
          box-shadow: 0 0 0 3px rgba(7, 166, 75, 0.15);
        }

        .hero-form-input::placeholder {
          color: #718096;
          font-size: 15px;
          font-weight: 400;
        }

        .hero-submit-btn {
          width: 100%;
          height: 50px;
          color: #ffffff;
          border: none;
          font-size: 20px;
          font-weight: 600;
          cursor: pointer;
          background: linear-gradient(90deg, #008000 0%, #00e000 100%);
          border-radius: 6px;
          transition: transform 0.15s ease, opacity 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 128, 0, 0.25);
        }

        .hero-submit-btn:hover {
          opacity: 0.95;
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(0, 128, 0, 0.35);
        }

        .hero-submit-btn:active {
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}
