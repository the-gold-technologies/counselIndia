"use client";
import React, { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function LoginModal({ isOpen, onClose, onSuccess }: LoginModalProps) {
  const [loginMethod, setLoginMethod] = useState<"password" | "otp">("password");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handlePasswordLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (onSuccess) onSuccess();
      onClose();
    }, 600);
  };

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setOtpSent(true);
  };

  const handleOtpLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (onSuccess) onSuccess();
      onClose();
    }, 600);
  };

  const inputStyle: React.CSSProperties = {
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
    border: "1px solid #1e293b",
    borderRadius: "6px",
    padding: "10px 14px",
    fontSize: "14.5px",
    width: "100%",
    height: "46px",
    color: "#1e293b",
    backgroundColor: "#ffffff",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.65)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 15px",
        overflow: "hidden",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          position: "relative",
          maxWidth: "480px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "36px 32px 32px",
          boxSizing: "border-box",
        }}
      >
        {/* Close Button (✕) */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "18px",
            background: "none",
            border: "none",
            fontSize: "22px",
            fontWeight: 700,
            color: "#1e293b",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "32px",
            height: "32px",
            padding: 0,
            lineHeight: 1,
            zIndex: 10,
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Modal Header: Logo + Character Avatar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          {/* Logo */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "3px solid #00a651",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#00a651",
                  fontWeight: 900,
                  fontSize: "18px",
                }}
              >
                ci
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 900,
                    color: "#1e293b",
                    letterSpacing: "0.5px",
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  COUNSEL<br />INDIA.
                </h3>
                <small style={{ fontSize: "7px", color: "#64748b", fontWeight: 700, letterSpacing: "0.8px" }}>
                  COUNSELLING SIMPLIFIED
                </small>
              </div>
            </div>
          </div>

          {/* Character Illustration */}
          <div>
            <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Hair */}
              <path d="M35 30C35 18 65 18 65 30C65 30 75 35 70 45C65 40 60 38 60 38C60 38 55 35 45 35C38 35 32 40 30 45C25 35 35 30 35 30Z" fill="#C26D3B" />
              {/* Face */}
              <circle cx="50" cy="42" r="16" fill="#FDD6B5" />
              {/* Eyes */}
              <circle cx="44" cy="40" r="2" fill="#334155" />
              <circle cx="56" cy="40" r="2" fill="#334155" />
              {/* Smile */}
              <path d="M46 47C48 49 52 49 54 47" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
              {/* Body */}
              <path d="M30 68C30 58 40 56 50 56C60 56 70 58 70 68V80H30V68Z" fill="#2563EB" />
              {/* Collar */}
              <path d="M46 56L50 63L54 56" fill="#FFFFFF" />
            </svg>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div style={{ textAlign: "center", marginBottom: "22px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#1e293b",
              marginBottom: "6px",
            }}
          >
            Login
          </h2>
          <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>
            Don&apos;t have an account yet?{" "}
            <a
              href="/signup"
              style={{
                color: "#1e293b",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Sign up for free
            </a>
          </p>
        </div>

        {/* Login Method Tabs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <button
            type="button"
            onClick={() => setLoginMethod("password")}
            style={{
              backgroundColor: loginMethod === "password" ? "#00a651" : "transparent",
              color: loginMethod === "password" ? "#ffffff" : "#64748b",
              borderRadius: "4px",
              padding: "8px 16px",
              fontSize: "14px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            Login with Password
          </button>

          <button
            type="button"
            onClick={() => setLoginMethod("otp")}
            style={{
              backgroundColor: loginMethod === "otp" ? "#00a651" : "transparent",
              color: loginMethod === "otp" ? "#ffffff" : "#2563eb",
              borderRadius: "4px",
              padding: "8px 16px",
              fontSize: "14px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            Login with OTP
          </button>
        </div>

        {/* Password Login Form */}
        {loginMethod === "password" ? (
          <form onSubmit={handlePasswordLogin}>
            {/* Email Or Phone */}
            <div style={{ marginBottom: "18px" }}>
              <label
                style={{
                  fontSize: "14.5px",
                  fontWeight: 600,
                  color: "#1e293b",
                  marginBottom: "6px",
                  display: "block",
                }}
              >
                Email Or Phone<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Your email or phone"
                required
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                style={inputStyle}
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: "8px" }}>
              <label
                style={{
                  fontSize: "14.5px",
                  fontWeight: 600,
                  color: "#1e293b",
                  marginBottom: "6px",
                  display: "block",
                }}
              >
                Password
              </label>
              <div style={{ display: "flex" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    ...inputStyle,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderRight: "none",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    width: "50px",
                    height: "46px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #1e293b",
                    borderTopRightRadius: "6px",
                    borderBottomRightRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#475569",
                    padding: 0,
                    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <i className={showPassword ? "fas fa-eye-slash" : "far fa-eye"}></i>
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div style={{ marginBottom: "24px" }}>
              <a
                href="/forgot-password"
                style={{
                  fontSize: "13.5px",
                  color: "#2563eb",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Forgot Password?
              </a>
            </div>

            {/* Log In Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                height: "48px",
                backgroundColor: "#00a651",
                color: "#ffffff",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0, 166, 81, 0.25)",
                transition: "background-color 0.2s ease",
              }}
            >
              {isSubmitting ? "Logging in..." : "Log In"}
            </button>
          </form>
        ) : (
          /* OTP Login Form */
          <form onSubmit={otpSent ? handleOtpLogin : handleSendOtp}>
            <div style={{ marginBottom: "18px" }}>
              <label
                style={{
                  fontSize: "14.5px",
                  fontWeight: 600,
                  color: "#1e293b",
                  marginBottom: "6px",
                  display: "block",
                }}
              >
                Mobile Number<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="tel"
                placeholder="Your mobile number"
                required
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                style={inputStyle}
              />
            </div>

            {otpSent && (
              <div style={{ marginBottom: "18px" }}>
                <label
                  style={{
                    fontSize: "14.5px",
                    fontWeight: 600,
                    color: "#1e293b",
                    marginBottom: "6px",
                    display: "block",
                  }}
                >
                  Enter OTP<span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  style={inputStyle}
                />
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                height: "48px",
                backgroundColor: "#00a651",
                color: "#ffffff",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0, 166, 81, 0.25)",
                transition: "background-color 0.2s ease",
              }}
            >
              {isSubmitting
                ? "Verifying..."
                : otpSent
                ? "Verify & Log In"
                : "Send OTP"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
