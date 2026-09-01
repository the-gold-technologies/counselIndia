"use client";
import React, { useState } from "react";

interface NewsletterItem {
  id: number;
  name: string;
  monthTitle?: string;
  image: string;
}

interface Props {
  newsletter: NewsletterItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const INDIAN_STATES = [
  "Delhi", "Maharashtra", "Karnataka", "Uttar Pradesh", "Haryana",
  "Tamil Nadu", "West Bengal", "Telangana", "Gujarat", "Rajasthan",
  "Kerala", "Madhya Pradesh", "Punjab", "Bihar", "Odisha", "Other"
];

const HEAR_ABOUT_OPTIONS = [
  "Google", "Facebook", "Instagram", "LinkedIn", "Blogs",
  "Email", "Whatsapp", "reference", "YouTube"
];

export default function NewsletterDownloadModal({ newsletter, isOpen, onClose }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "101",
    mobile: "",
    state: "",
    city: "",
    hearabout: "",
    is_agreed: true,
  });

  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpSuccess, setOtpSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const [timerActive, setTimerActive] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email.");
      return;
    }
    if (!formData.mobile.trim() || formData.mobile.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!formData.state) {
      setErrorMessage("Please select your state.");
      return;
    }
    if (!formData.city.trim()) {
      setErrorMessage("Please enter your city.");
      return;
    }
    if (!formData.hearabout) {
      setErrorMessage("Please select how you heard about us.");
      return;
    }
    if (!formData.is_agreed) {
      setErrorMessage("You must agree to the terms and conditions.");
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
      setErrorMessage("Please enter the OTP to proceed.");
      return;
    }
    setOtpSuccess(true);
    setTimeout(() => {
      setShowOtpModal(false);
      setOtpSuccess(false);
      onClose();
      alert("Verification successful! Your newsletter PDF download has started.");
    }, 1500);
  };

  const inputStyle: React.CSSProperties = {
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.4)",
    border: "0.8px solid black",
    borderRadius: "5px",
    width: "100%",
    height: "44px",
    padding: "0 14px",
    fontSize: "14px",
    color: "#212529",
    backgroundColor: "#ffffff",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: 600,
    color: "#212529",
    marginBottom: "6px",
    display: "block",
  };

  return (
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
        overflowY: "auto",
        animation: "modalFadeIn 0.25s ease-out forwards",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* 1. Main Lead Capture Modal */}
      {!showOtpModal ? (
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid black",
            borderRadius: "10px",
            boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.35)",
            maxWidth: "480px",
            width: "100%",
            maxHeight: "90vh",
            overflowY: "auto",
            padding: "36px 30px 32px",
            position: "relative",
            boxSizing: "border-box",
            animation: "modalSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "12px",
              right: "14px",
              background: "none",
              border: "none",
              fontSize: "24px",
              color: "#000000",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "32px",
              height: "32px",
              padding: 0,
              lineHeight: 1,
            }}
            aria-label="Close"
          >
            ✕
          </button>

          <h3
            style={{
              fontSize: "19px",
              fontWeight: 700,
              color: "#1e293b",
              lineHeight: "1.35",
              margin: "0 0 4px",
            }}
          >
            {newsletter
              ? `${newsletter.name} ${newsletter.monthTitle || ""}`
              : "Download Newsletter"}
          </h3>
          <p style={{ fontSize: "13.5px", color: "#64748b", margin: "0 0 20px" }}>
            Please fill out the form below to receive your newsletter copy.
          </p>

          {errorMessage && (
            <div
              style={{
                backgroundColor: "#fee2e2",
                color: "#991b1b",
                padding: "8px 12px",
                borderRadius: "5px",
                fontSize: "13px",
                marginBottom: "16px",
              }}
            >
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div style={{ marginBottom: "14px" }}>
              <label style={labelStyle}>
                Full Name<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="text"
                style={inputStyle}
                placeholder="Your Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: "14px" }}>
              <label style={labelStyle}>
                Email Address<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="email"
                style={inputStyle}
                placeholder="Your Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            {/* Country */}
            <div style={{ marginBottom: "14px" }}>
              <label style={labelStyle}>
                Country<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <select
                style={inputStyle}
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                required
              >
                <option value="101">India (+91)</option>
                <option value="1">United States (+1)</option>
                <option value="44">United Kingdom (+44)</option>
                <option value="971">United Arab Emirates (+971)</option>
              </select>
            </div>

            {/* Mobile Number */}
            <div style={{ marginBottom: "14px" }}>
              <label style={labelStyle}>
                Mobile Number<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="tel"
                style={inputStyle}
                placeholder="Your Mobile Number"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                required
              />
            </div>

            {/* State */}
            <div style={{ marginBottom: "14px" }}>
              <label style={labelStyle}>
                Select State<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <select
                style={inputStyle}
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                required
              >
                <option value="">Please Select State</option>
                {INDIAN_STATES.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* City */}
            <div style={{ marginBottom: "14px" }}>
              <label style={labelStyle}>
                Select City<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="text"
                style={inputStyle}
                placeholder="Enter Your City"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
              />
            </div>

            {/* How did you hear about us */}
            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>
                How Did You Hear About Us<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <select
                style={inputStyle}
                value={formData.hearabout}
                onChange={(e) => setFormData({ ...formData, hearabout: e.target.value })}
                required
              >
                <option value="">How did you hear about us.</option>
                {HEAR_ABOUT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Agreement Checkbox */}
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  fontSize: "12.5px",
                  color: "#475569",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={formData.is_agreed}
                  onChange={(e) => setFormData({ ...formData, is_agreed: e.target.checked })}
                  required
                  style={{ marginTop: "3px" }}
                />
                <span>By submitting this form, I agree to receive communications from Counsel India.</span>
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                style={{
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.4)",
                  border: "0.8px solid black",
                  borderRadius: "5px",
                  width: "100%",
                  height: "46px",
                  backgroundColor: "#07a64b",
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#05873d";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#07a64b";
                }}
              >
                Submit &amp; Download
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* 2. Download OTP Modal */
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid black",
            borderRadius: "10px",
            boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.35)",
            maxWidth: "420px",
            width: "100%",
            padding: "32px 26px",
            position: "relative",
            animation: "modalSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
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
              fontSize: "22px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          <h4
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#1e293b",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            Verify Mobile OTP
          </h4>

          {otpSuccess ? (
            <div style={{ color: "#07a64b", textAlign: "center", fontWeight: "bold", padding: "12px 0" }}>
              ✓ OTP verified successfully. Starting download...
            </div>
          ) : (
            <div>
              <div style={{ marginBottom: "16px" }}>
                <label style={labelStyle}>Enter OTP</label>
                <input
                  type="text"
                  maxLength={6}
                  style={inputStyle}
                  id="otpnewsletter"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ""))}
                  placeholder="Enter your OTP here"
                  required
                />
              </div>

              <div style={{ textAlign: "right", marginBottom: "16px", fontSize: "13px" }}>
                {!timerActive ? (
                  <span
                    style={{ cursor: "pointer", color: "#07a64b", fontWeight: 600 }}
                    onClick={startTimer}
                  >
                    Resend OTP
                  </span>
                ) : (
                  <span style={{ color: "#64748b" }}>(Resend in {resendTimer} sec)</span>
                )}
              </div>

              {errorMessage && (
                <div
                  style={{
                    color: "#ef4444",
                    fontSize: "13px",
                    textAlign: "center",
                    marginBottom: "12px",
                  }}
                >
                  {errorMessage}
                </div>
              )}

              <button
                type="button"
                style={{
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.4)",
                  border: "0.8px solid black",
                  borderRadius: "5px",
                  width: "100%",
                  height: "46px",
                  backgroundColor: "#07a64b",
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </button>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
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
            transform: scale(0.95) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
