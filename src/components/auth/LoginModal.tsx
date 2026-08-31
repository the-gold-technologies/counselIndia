"use client";
import React, { useState, useEffect } from "react";
import Script from "next/script";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function LoginModal({ isOpen, onClose, onSuccess }: LoginModalProps) {
  const [activeTab, setActiveTab] = useState<"password" | "otp">("password");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamically load lord-icon for animated waving avatar
  useEffect(() => {
    if (typeof window !== "undefined" && !document.getElementById("lord-icon-script")) {
      const script = document.createElement("script");
      script.id = "lord-icon-script";
      script.src = "https://cdn.lordicon.com/lordicon.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

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

  return (
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
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "5px",
          boxShadow: "0 15px 45px rgba(0, 0, 0, 0.35)",
          position: "relative",
          maxWidth: "470px",
          width: "100%",
          animation: "modalSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          maxHeight: "92vh",
          overflowY: "auto",
          padding: "36px 42px 42px",
          boxSizing: "border-box",
        }}
      >
        {/* Close Button (✕) */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "12px",
            right: "16px",
            background: "none",
            border: "none",
            fontSize: "26px",
            fontWeight: 400,
            color: "#000000",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "36px",
            height: "36px",
            padding: 0,
            lineHeight: 1,
            zIndex: 10,
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Top Header Grid: Official Logo + Avatar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          {/* Logo */}
          <div>
            <img
              src="https://www.counselindia.com/assets/images/dark-logo.png"
              alt="Counsel India"
              style={{
                width: "220px",
                maxWidth: "100%",
                height: "auto",
                display: "block",
              }}
              onError={(e) => {
                e.currentTarget.src = "/assets/images/index/logo_img.png";
              }}
            />
          </div>

          {/* Avatar Character */}
          <div style={{ width: "90px", height: "90px", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            {/* Lordicon Animated Avatar */}
            {React.createElement("lord-icon", {
              src: "https://cdn.lordicon.com/mebvgwrs.json",
              trigger: "hover",
              state: "hover-wave",
              style: { width: "90px", height: "90px" },
            })}
          </div>
        </div>

        {/* Modal Title */}
        <h5
          style={{
            fontSize: "32px",
            fontWeight: 700,
            color: "#1a202c",
            textAlign: "center",
            margin: "0 0 8px",
            lineHeight: 1.3,
          }}
        >
          Login
        </h5>

        {/* Subtitle with Underlined Link */}
        <p
          style={{
            fontSize: "14.5px",
            color: "#4a5568",
            textAlign: "center",
            margin: "0 0 24px",
          }}
        >
          Don&apos;t have an account yet?{" "}
          <a
            href="/signup"
            style={{
              color: "#1a202c",
              fontWeight: 600,
              textDecoration: "none",
              borderBottom: "1px solid #cbd5e1",
              paddingBottom: "2px",
              cursor: "pointer",
            }}
          >
            Sign up for free
          </a>
        </p>

        {/* Tabs: Login with Password vs Login with OTP */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab("password")}
            style={{
              backgroundColor: activeTab === "password" ? "#00a651" : "transparent",
              color: activeTab === "password" ? "#ffffff" : "#0d6efd",
              borderRadius: "4px",
              padding: "10px 18px",
              fontSize: "14px",
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            Login with Password
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("otp")}
            style={{
              backgroundColor: activeTab === "otp" ? "#00a651" : "transparent",
              color: activeTab === "otp" ? "#ffffff" : "#0d6efd",
              borderRadius: "4px",
              padding: "10px 18px",
              fontSize: "14px",
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            Login with OTP
          </button>
        </div>

        {/* Password Tab Form */}
        {activeTab === "password" ? (
          <form onSubmit={handlePasswordLogin}>
            {/* Email Or Phone */}
            <div style={{ marginBottom: "18px" }}>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#212529",
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
                style={{
                  borderRadius: "5px",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                  border: "0.8px solid black",
                  padding: "10px 14px",
                  fontSize: "14.5px",
                  width: "100%",
                  height: "46px",
                  color: "#1e293b",
                  backgroundColor: "#ffffff",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: "8px" }}>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#212529",
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
                    borderRadius: "5px 0 0 5px",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                    border: "0.8px solid black",
                    borderRight: "none",
                    padding: "10px 14px",
                    fontSize: "14.5px",
                    flex: 1,
                    height: "46px",
                    color: "#1e293b",
                    backgroundColor: "#ffffff",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    width: "56px",
                    height: "46px",
                    backgroundColor: "#ffffff",
                    border: "0.8px solid black",
                    borderLeft: "none",
                    borderRadius: "0 5px 5px 0",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#212529",
                    padding: 0,
                  }}
                >
                  <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div style={{ marginBottom: "22px" }}>
              <a
                href="/forgot-password"
                style={{
                  fontSize: "13.5px",
                  color: "#0d6efd",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Forgot Password?
              </a>
            </div>

            {/* Log In Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                height: "48px",
                backgroundColor: "#00a651",
                color: "#ffffff",
                borderRadius: "5px",
                fontSize: "16px",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0, 166, 81, 0.2)",
                transition: "background-color 0.2s ease",
              }}
            >
              {isSubmitting ? "Logging in..." : "Log In"}
            </button>
          </form>
        ) : (
          /* OTP Tab Form */
          <form onSubmit={otpSent ? handleOtpLogin : handleSendOtp}>
            <div style={{ marginBottom: "18px" }}>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#212529",
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
                style={{
                  borderRadius: "5px",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                  border: "0.8px solid black",
                  padding: "10px 14px",
                  fontSize: "14.5px",
                  width: "100%",
                  height: "46px",
                  color: "#1e293b",
                  backgroundColor: "#ffffff",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {otpSent && (
              <div style={{ marginBottom: "18px" }}>
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#212529",
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
                  style={{
                    borderRadius: "5px",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                    border: "0.8px solid black",
                    padding: "10px 14px",
                    fontSize: "14.5px",
                    width: "100%",
                    height: "46px",
                    color: "#1e293b",
                    backgroundColor: "#ffffff",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
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
                borderRadius: "5px",
                fontSize: "16px",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0, 166, 81, 0.2)",
                transition: "background-color 0.2s ease",
              }}
            >
              {isSubmitting ? "Verifying..." : otpSent ? "Verify & Log In" : "Send OTP"}
            </button>
          </form>
        )}
      </div>

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
