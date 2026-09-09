"use client";
import React, { useState, useEffect } from "react";

interface CounselorLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "signup" | "forgot";
  onSuccess?: () => void;
}

export default function CounselorLoginModal({
  isOpen,
  onClose,
  initialMode = "login",
  onSuccess,
}: CounselorLoginModalProps) {
  const [modalMode, setModalMode] = useState<
    "login" | "register" | "forgot"
  >(initialMode === "signup" ? "register" : initialMode === "forgot" ? "forgot" : "login");

  useEffect(() => {
    if (isOpen) {
      if (initialMode === "signup") {
        setModalMode("register");
      } else if (initialMode === "forgot") {
        setModalMode("forgot");
      } else {
        setModalMode("login");
      }
      setErrorMessage("");
      setSuccessMessage("");
      setLoginIdentifier("");
      setRegName("");
      setRegEmail("");
      setRegMobile("");
    }
  }, [isOpen, initialMode]);

  const [loginIdentifier, setLoginIdentifier] = useState("");
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regMobile, setRegMobile] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const inputStyle: React.CSSProperties = {
    width: "100%",
    height: "50px",
    padding: "10px 16px",
    border: "0.8px solid black",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
    fontSize: "14.5px",
    backgroundColor: "#ffffff",
    color: "#212529",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "14px",
    fontWeight: 400,
    color: "#212529",
    marginBottom: "8px",
    textAlign: "left",
    fontFamily: "'Poppins', sans-serif",
  };

  const buttonStyle: React.CSSProperties = {
    width: "100%",
    height: "50px",
    backgroundColor: "#07a64b",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
    marginTop: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.2s ease",
    fontFamily: "'Poppins', sans-serif",
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!loginIdentifier.trim()) {
      setErrorMessage("Please enter your email or phone number.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("Logged in successfully!");
      setTimeout(() => {
        if (onSuccess) onSuccess();
        onClose();
      }, 700);
    }, 800);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!regName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!regEmail.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }
    if (!regMobile.trim()) {
      setErrorMessage("Please enter your mobile number.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("Account created successfully!");
      setTimeout(() => {
        if (onSuccess) onSuccess();
        onClose();
      }, 700);
    }, 800);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!loginIdentifier.trim()) {
      setErrorMessage("Please enter your email or phone number.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("Password reset instructions sent successfully.");
      setTimeout(() => {
        setModalMode("login");
        setSuccessMessage("");
      }, 1500);
    }, 800);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        zIndex: 999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 15px",
        overflowY: "auto",
        boxSizing: "border-box",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "460px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "40px 36px 36px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
          boxSizing: "border-box",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          style={{
            position: "absolute",
            top: "18px",
            right: "20px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#000000",
          }}
          aria-label="Close"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Feedback Messages */}
        {errorMessage && (
          <div
            style={{
              backgroundColor: "#fee2e2",
              border: "1px solid #fca5a5",
              color: "#991b1b",
              padding: "10px 14px",
              borderRadius: "5px",
              marginBottom: "16px",
              fontSize: "13.5px",
              textAlign: "center",
            }}
          >
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div
            style={{
              backgroundColor: "#dcfce7",
              border: "1px solid #86efac",
              color: "#166534",
              padding: "10px 14px",
              borderRadius: "5px",
              marginBottom: "16px",
              fontSize: "13.5px",
              textAlign: "center",
            }}
          >
            {successMessage}
          </div>
        )}

        {/* ======================= LOGIN VIEW ======================= */}
        {modalMode === "login" && (
          <div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 500,
                color: "#212529",
                textAlign: "center",
                margin: "0 0 8px 0",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Login
            </h2>
            <p
              style={{
                fontSize: "14.5px",
                color: "#555555",
                textAlign: "center",
                margin: "0 0 24px 0",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
              }}
            >
              Don&apos;t have an account yet?{" "}
              <button
                type="button"
                onClick={() => {
                  setModalMode("register");
                  setErrorMessage("");
                  setSuccessMessage("");
                }}
                style={{
                  color: "#212529",
                  fontWeight: 500,
                  textDecoration: "underline",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  fontSize: "14.5px",
                }}
              >
                Sign up
              </button>
            </p>

            <form onSubmit={handleLoginSubmit}>
              <div style={{ marginBottom: "16px" }}>
                <label style={labelStyle}>
                  Email Or Phone<span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your email or phone"
                  value={loginIdentifier}
                  onChange={(e) => setLoginIdentifier(e.target.value)}
                  style={inputStyle}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                style={buttonStyle}
              >
                {isLoading ? "Logging in..." : "Log In"}
              </button>
            </form>
          </div>
        )}

        {/* ======================= SIGN UP VIEW ======================= */}
        {modalMode === "register" && (
          <div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 500,
                color: "#212529",
                textAlign: "center",
                margin: "0 0 8px 0",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Sign Up
            </h2>
            <p
              style={{
                fontSize: "14.5px",
                color: "#555555",
                textAlign: "center",
                margin: "0 0 24px 0",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
              }}
            >
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  setModalMode("login");
                  setErrorMessage("");
                  setSuccessMessage("");
                }}
                style={{
                  color: "#212529",
                  fontWeight: 500,
                  textDecoration: "underline",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  fontSize: "14.5px",
                }}
              >
                Log in
              </button>
            </p>

            <form onSubmit={handleRegisterSubmit}>
              <div style={{ marginBottom: "14px" }}>
                <label style={labelStyle}>
                  Full Name<span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  style={inputStyle}
                  required
                />
              </div>

              <div style={{ marginBottom: "14px" }}>
                <label style={labelStyle}>
                  Email Address<span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  style={inputStyle}
                  required
                />
              </div>

              <div style={{ marginBottom: "14px" }}>
                <label style={labelStyle}>
                  Mobile Number<span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Your Mobile Number"
                  value={regMobile}
                  onChange={(e) => setRegMobile(e.target.value)}
                  style={inputStyle}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                style={buttonStyle}
              >
                {isLoading ? "Signing up..." : "Sign Up"}
              </button>
            </form>
          </div>
        )}

        {/* ======================= FORGOT PASSWORD VIEW ======================= */}
        {modalMode === "forgot" && (
          <div>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 500,
                color: "#212529",
                textAlign: "center",
                margin: "0 0 8px 0",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Forgot Password
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#555555",
                textAlign: "center",
                margin: "0 0 24px 0",
                fontWeight: 400,
              }}
            >
              Enter your registered Email or Mobile No.
            </p>

            <form onSubmit={handleForgotSubmit}>
              <div style={{ marginBottom: "16px" }}>
                <label style={labelStyle}>
                  Email Or Phone<span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your email or phone"
                  value={loginIdentifier}
                  onChange={(e) => setLoginIdentifier(e.target.value)}
                  style={inputStyle}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                style={buttonStyle}
              >
                {isLoading ? "Sending..." : "Reset Password"}
              </button>

              <div style={{ textAlign: "center", marginTop: "16px" }}>
                <button
                  type="button"
                  onClick={() => setModalMode("login")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#555555",
                    fontSize: "14px",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Back to Login
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
