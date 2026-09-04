"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "signup" | "forgot";
  onSuccess?: () => void;
}

export default function LoginModal({
  isOpen,
  onClose,
  initialMode = "login",
  onSuccess,
}: LoginModalProps) {
  // Modal View Modes: 'login-password' | 'login-otp' | 'register' | 'forgot' | 'reset'
  const [modalMode, setModalMode] = useState<
    "login-password" | "login-otp" | "register" | "forgot" | "reset"
  >(initialMode === "signup" ? "register" : initialMode === "forgot" ? "forgot" : "login-password");

  // Sync mode when initialMode or isOpen changes
  useEffect(() => {
    if (isOpen) {
      if (initialMode === "signup") {
        setModalMode("register");
      } else if (initialMode === "forgot") {
        setModalMode("forgot");
      } else {
        setModalMode("login-password");
      }
      setErrorMessage("");
      setSuccessMessage("");
      setOtpStep(false);
      setRegOtpStep(false);
    }
  }, [isOpen, initialMode]);

  // Login Form States
  const [loginIdentifier, setLoginIdentifier] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Login OTP States
  const [loginOtpPhone, setLoginOtpPhone] = useState("");
  const [loginOtpCode, setLoginOtpCode] = useState("");
  const [otpStep, setOtpStep] = useState(false);

  // Forgot Password States
  const [forgotContact, setForgotContact] = useState("");
  const [resetOtp, setResetOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  // Registration Form States
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regCountryCode, setRegCountryCode] = useState("+91");
  const [regMobile, setRegMobile] = useState("");
  const [regState, setRegState] = useState("");
  const [regCity, setRegCity] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showRegConfirmPassword, setShowRegConfirmPassword] = useState(false);
  const [regAgreed, setRegAgreed] = useState(true);
  const [regOtpStep, setRegOtpStep] = useState(false);
  const [regOtpCode, setRegOtpCode] = useState("");

  // Feedback & Loading
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Load lordicon script dynamically
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !document.getElementById("lord-icon-script")
    ) {
      const script = document.createElement("script");
      script.id = "lord-icon-script";
      script.src = "https://cdn.lordicon.com/lordicon.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Close on Escape key & Lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Handlers
  const handlePasswordLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (!loginIdentifier.trim()) {
      setErrorMessage("Please enter your email or phone.");
      return;
    }
    if (!loginPassword) {
      setErrorMessage("Please enter your password.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("Login successful!");
      setTimeout(() => {
        if (onSuccess) onSuccess();
        onClose();
      }, 600);
    }, 700);
  };

  const handleSendLoginOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (!loginOtpPhone.trim()) {
      setErrorMessage("Please enter your email or phone.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOtpStep(true);
      setSuccessMessage(`OTP sent successfully to ${loginOtpPhone}`);
    }, 600);
  };

  const handleVerifyLoginOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (!loginOtpCode.trim()) {
      setErrorMessage("OTP required.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("OTP Verified!");
      setTimeout(() => {
        if (onSuccess) onSuccess();
        onClose();
      }, 600);
    }, 700);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (!forgotContact.trim()) {
      setErrorMessage("Please enter your email or mobile no.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setModalMode("reset");
      setSuccessMessage(`OTP sent to ${forgotContact}`);
    }, 600);
  };

  const handleResetPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (!resetOtp.trim()) {
      setErrorMessage("OTP is missing");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setErrorMessage("Password and confirm password do not match");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("Password reset successfully!");
      setTimeout(() => {
        setModalMode("login-password");
        setSuccessMessage("");
      }, 1000);
    }, 700);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (!regName.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!regEmail.trim()) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!regMobile.trim()) {
      setErrorMessage("Please enter a valid mobile number.");
      return;
    }
    if (!regAgreed) {
      setErrorMessage("Please select terms and conditions.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setRegOtpStep(true);
      setSuccessMessage(`OTP sent to ${regCountryCode} ${regMobile}`);
    }, 600);
  };

  const handleVerifyRegOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (!regOtpCode.trim()) {
      setErrorMessage("OTP required.");
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
    }, 700);
  };

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Delhi NCR",
    "Outside India",
  ];

  const countryList = [
    { code: "+91", name: "India (+91)" },
    { code: "+1", name: "United States (+1)" },
    { code: "+44", name: "United Kingdom (+44)" },
    { code: "+971", name: "UAE (+971)" },
    { code: "+61", name: "Australia (+61)" },
    { code: "+1", name: "Canada (+1)" },
    { code: "+65", name: "Singapore (+65)" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
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
      {/* Modal Wrapper */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: modalMode === "register" ? "500px" : "470px",
          boxSizing: "border-box",
        }}
      >
        {/* Modal Card matching PHP .modal-content */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "6px",
            padding: "31px 50px 50px",
            maxHeight: "calc(100vh - 80px)",
            overflowY: "auto",
            boxShadow: "0 15px 50px rgba(0, 0, 0, 0.35)",
            position: "relative",
            boxSizing: "border-box",
          }}
        >
          {/* Close Button inside the White Modal Card */}
          <button
            onClick={onClose}
            type="button"
            style={{
              position: "absolute",
              top: "14px",
              right: "16px",
              padding: 0,
              lineHeight: 1,
              width: "36px",
              height: "36px",
              fontSize: "22px",
              border: 0,
              background: "transparent",
              color: "#333333",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#000000")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#333333")}
            aria-label="Close"
          >
            <i className="fal fa-times"></i>
          </button>

          {/* Header matching PHP .modal-header */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              margin: "0 0 19px",
              padding: 0,
              borderBottom: 0,
            }}
          >
            {/* Icon Grid matching PHP .icon-grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                alignItems: "center",
                justifyContent: "flex-end",
                marginBottom: "8%",
                width: "100%",
              }}
            >
              <img
                src="https://www.counselindia.com/assets/images/dark-logo.png"
                alt="Counsel India"
                style={{
                  width: "230px",
                  height: "70px",
                  objectFit: "contain",
                  display: "block",
                }}
                onError={(e) => {
                  e.currentTarget.src = "/assets/images/dark-logo.png";
                }}
              />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                {React.createElement("lord-icon", {
                  src: "https://cdn.lordicon.com/mebvgwrs.json",
                  trigger: "hover",
                  state: "hover-wave",
                  style: { width: "130px", height: "85px", marginRight: 0 },
                })}
              </div>
            </div>

            {/* Title & Description */}
            {modalMode === "register" ? (
              <>
                <h5
                  style={{
                    fontSize: "32px",
                    lineHeight: 1.5,
                    margin: "0 0 8px",
                    fontWeight: 700,
                    color: "#212529",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Sign Up
                </h5>
                <p
                  style={{
                    marginBottom: "20px",
                    fontSize: "14.5px",
                    color: "#555555",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setModalMode("login-password");
                      setErrorMessage("");
                      setSuccessMessage("");
                    }}
                    style={{
                      color: "#252525",
                      padding: 0,
                      background: "none",
                      border: "none",
                      fontWeight: 500,
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontSize: "14.5px",
                    }}
                  >
                    Log in
                  </button>
                </p>
              </>
            ) : modalMode === "forgot" ? (
              <>
                <h5
                  style={{
                    fontSize: "32px",
                    lineHeight: 1.5,
                    margin: "0 0 8px",
                    fontWeight: 700,
                    color: "#212529",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Forgot Password
                </h5>
                <p
                  style={{
                    marginBottom: "20px",
                    fontSize: "14.5px",
                    color: "#555555",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Enter your registered Email/Mobile No. to reset password.
                </p>
              </>
            ) : modalMode === "reset" ? (
              <>
                <h5
                  style={{
                    fontSize: "32px",
                    lineHeight: 1.5,
                    margin: "0 0 8px",
                    fontWeight: 700,
                    color: "#212529",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Reset Password
                </h5>
                <p
                  style={{
                    marginBottom: "20px",
                    fontSize: "14.5px",
                    color: "#555555",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Enter the OTP and set your new password.
                </p>
              </>
            ) : (
              <>
                <h5
                  style={{
                    fontSize: "32px",
                    lineHeight: 1.5,
                    margin: "0 0 8px",
                    fontWeight: 700,
                    color: "#212529",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Login
                </h5>
                <p
                  style={{
                    marginBottom: "20px",
                    fontSize: "14.5px",
                    color: "#555555",
                    fontFamily: "'Poppins', sans-serif",
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
                      color: "#252525",
                      padding: 0,
                      background: "none",
                      border: "none",
                      fontWeight: 500,
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontSize: "14.5px",
                    }}
                  >
                    Sign up for free
                  </button>
                </p>
              </>
            )}
          </div>

          {/* Modal Body */}
          <div style={{ padding: 0 }}>
            {/* Feedback Alerts */}
            {errorMessage && (
              <div
                style={{
                  backgroundColor: "#f8d7da",
                  border: "1px solid #f5c2c7",
                  color: "#842029",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  marginBottom: "15px",
                  fontSize: "13.5px",
                }}
              >
                <p style={{ margin: 0 }}>{errorMessage}</p>
              </div>
            )}

            {successMessage && (
              <div
                style={{
                  backgroundColor: "#d1e7dd",
                  border: "1px solid #badbcc",
                  color: "#0f5132",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  marginBottom: "15px",
                  fontSize: "13.5px",
                }}
              >
                <p style={{ margin: 0 }}>{successMessage}</p>
              </div>
            )}

            {/* ========================================================= */}
            {/* DUAL TABS matching PHP .nav-pills                         */}
            {/* ========================================================= */}
            {(modalMode === "login-password" || modalMode === "login-otp") && (
              <>
                <ul
                  style={{
                    width: "100%",
                    display: "flex",
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 20px 0",
                    gap: "10px",
                  }}
                >
                  <li style={{ flex: 1 }}>
                    <button
                      type="button"
                      onClick={() => {
                        setModalMode("login-password");
                        setErrorMessage("");
                        setSuccessMessage("");
                      }}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        fontSize: "14px",
                        fontWeight: 500,
                        textAlign: "center",
                        borderRadius: "4px",
                        border: "none",
                        cursor: "pointer",
                        backgroundColor:
                          modalMode === "login-password" ? "#07a64b" : "transparent",
                        color:
                          modalMode === "login-password" ? "#ffffff" : "#0d6efd",
                        fontFamily: "'Poppins', sans-serif",
                        transition: "all 0.2s ease",
                      }}
                    >
                      Login with Password
                    </button>
                  </li>

                  <li style={{ flex: 1 }}>
                    <button
                      type="button"
                      onClick={() => {
                        setModalMode("login-otp");
                        setErrorMessage("");
                        setSuccessMessage("");
                      }}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        fontSize: "14px",
                        fontWeight: 500,
                        textAlign: "center",
                        borderRadius: "4px",
                        border: "none",
                        cursor: "pointer",
                        backgroundColor:
                          modalMode === "login-otp" ? "#07a64b" : "transparent",
                        color: modalMode === "login-otp" ? "#ffffff" : "#0d6efd",
                        fontFamily: "'Poppins', sans-serif",
                        transition: "all 0.2s ease",
                      }}
                    >
                      Login with OTP
                    </button>
                  </li>
                </ul>

                {/* TAB 1: LOGIN WITH PASSWORD FORM */}
                {modalMode === "login-password" && (
                  <form onSubmit={handlePasswordLogin}>
                    <div style={{ marginBottom: "16px" }}>
                      <label
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#212529",
                          marginBottom: "6px",
                          display: "block",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Email or Phone
                      </label>
                      <input
                        type="text"
                        style={{
                          borderRadius: "5px",
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                          border: "0.8px solid black",
                          padding: "10px 14px",
                          width: "100%",
                          height: "46px",
                          fontSize: "14px",
                          boxSizing: "border-box",
                          outline: "none",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                        placeholder="Your email or phone"
                        required
                        value={loginIdentifier}
                        onChange={(e) => setLoginIdentifier(e.target.value)}
                      />
                    </div>

                    <div style={{ marginBottom: "8px" }}>
                      <label
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#212529",
                          marginBottom: "6px",
                          display: "block",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Password
                      </label>
                      <div style={{ display: "flex", width: "100%" }}>
                        <input
                          type={showLoginPassword ? "text" : "password"}
                          placeholder="Password"
                          required
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          style={{
                            borderRadius: "5px 0 0 5px",
                            boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                            border: "0.8px solid black",
                            borderRight: "none",
                            padding: "10px 14px",
                            flex: 1,
                            height: "46px",
                            fontSize: "14px",
                            boxSizing: "border-box",
                            outline: "none",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowLoginPassword(!showLoginPassword)
                          }
                          style={{
                            width: "48px",
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
                          <i
                            className={
                              showLoginPassword ? "fas fa-eye-slash" : "fas fa-eye"
                            }
                          ></i>
                        </button>
                      </div>
                    </div>

                    {/* Forgot Password Link matching PHP */}
                    <div
                      style={{
                        width: "100%",
                        textAlign: "right",
                        marginBottom: "20px",
                        marginTop: "8px",
                      }}
                    >
                      <u>
                        <a
                          href="javascript:void(0)"
                          onClick={() => {
                            setModalMode("forgot");
                            setErrorMessage("");
                            setSuccessMessage("");
                          }}
                          style={{
                            color: "rgb(54, 117, 244)",
                            fontSize: "14px",
                            cursor: "pointer",
                            textDecoration: "underline",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          Forgot Password?
                        </a>
                      </u>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      style={{
                        borderRadius: "5px",
                        height: "48px",
                        backgroundColor: "#07a64b",
                        borderColor: "#07a64b",
                        color: "#ffffff",
                        fontSize: "16px",
                        fontWeight: 700,
                        width: "100%",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Poppins', sans-serif",
                        transition: "background-color 0.2s ease",
                      }}
                    >
                      {isLoading ? "Logging in..." : "Log In"}
                    </button>
                  </form>
                )}

                {/* TAB 2: LOGIN WITH OTP FORM */}
                {modalMode === "login-otp" && (
                  <div>
                    {!otpStep ? (
                      /* Step 1: Input Mobile/Email */
                      <form onSubmit={handleSendLoginOtp}>
                        <div style={{ marginBottom: "20px" }}>
                          <label
                            style={{
                              fontSize: "14px",
                              fontWeight: 500,
                              color: "#212529",
                              marginBottom: "6px",
                              display: "block",
                              fontFamily: "'Poppins', sans-serif",
                            }}
                          >
                            Email or Phone
                          </label>
                          <input
                            type="text"
                            style={{
                              borderRadius: "5px",
                              boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                              border: "0.8px solid black",
                              padding: "10px 14px",
                              width: "100%",
                              height: "46px",
                              fontSize: "14px",
                              boxSizing: "border-box",
                              outline: "none",
                              fontFamily: "'Poppins', sans-serif",
                            }}
                            placeholder="Your email or phone"
                            required
                            value={loginOtpPhone}
                            onChange={(e) =>
                              setLoginOtpPhone(e.target.value)
                            }
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isLoading}
                          style={{
                            borderRadius: "5px",
                            height: "48px",
                            backgroundColor: "#07a64b",
                            borderColor: "#07a64b",
                            color: "#ffffff",
                            fontSize: "16px",
                            fontWeight: 700,
                            width: "100%",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          {isLoading ? "Sending OTP..." : "Log In"}
                        </button>
                      </form>
                    ) : (
                      /* Step 2: OTP Screen */
                      <form onSubmit={handleVerifyLoginOtp}>
                        <div style={{ marginBottom: "16px" }}>
                          <label
                            style={{
                              fontSize: "14px",
                              fontWeight: 500,
                              color: "#212529",
                              marginBottom: "6px",
                              display: "block",
                              fontFamily: "'Poppins', sans-serif",
                            }}
                          >
                            OTP
                          </label>
                          <input
                            type="text"
                            style={{
                              borderRadius: "5px",
                              boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                              border: "0.8px solid black",
                              padding: "10px 14px",
                              width: "100%",
                              height: "46px",
                              fontSize: "16px",
                              letterSpacing: "3px",
                              textAlign: "center",
                              boxSizing: "border-box",
                              outline: "none",
                              fontFamily: "'Poppins', sans-serif",
                            }}
                            placeholder="OTP"
                            required
                            value={loginOtpCode}
                            onChange={(e) =>
                              setLoginOtpCode(e.target.value)
                            }
                          />
                        </div>

                        <div
                          style={{
                            display: "flex",
                            gap: "12px",
                            marginBottom: "16px",
                            width: "100%",
                          }}
                        >
                          <div style={{ flex: 1 }}>
                            <button
                              type="button"
                              onClick={() => {
                                setSuccessMessage(
                                  `OTP Resent to ${loginOtpPhone}`
                                );
                              }}
                              style={{
                                width: "100%",
                                height: "40px",
                                backgroundColor: "#07a64b",
                                color: "#ffffff",
                                borderRadius: "5px",
                                fontSize: "14px",
                                fontWeight: 600,
                                cursor: "pointer",
                                border: "none",
                                fontFamily: "'Poppins', sans-serif",
                              }}
                            >
                              Resend
                            </button>
                          </div>

                          <div style={{ flex: 1 }}>
                            <button
                              type="button"
                              onClick={() => {
                                setOtpStep(false);
                                setLoginOtpCode("");
                                setErrorMessage("");
                              }}
                              style={{
                                width: "100%",
                                height: "40px",
                                backgroundColor: "#07a64b",
                                color: "#ffffff",
                                borderRadius: "5px",
                                fontSize: "14px",
                                fontWeight: 600,
                                cursor: "pointer",
                                border: "none",
                                fontFamily: "'Poppins', sans-serif",
                              }}
                            >
                              Back To Login
                            </button>
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={isLoading}
                          style={{
                            borderRadius: "5px",
                            height: "48px",
                            backgroundColor: "#07a64b",
                            borderColor: "#07a64b",
                            color: "#ffffff",
                            fontSize: "16px",
                            fontWeight: 700,
                            width: "100%",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          {isLoading ? "Verifying..." : "Verify Otp"}
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </>
            )}

            {/* ========================================================= */}
            {/* FORGOT PASSWORD FORM MATCHING PHP                         */}
            {/* ========================================================= */}
            {modalMode === "forgot" && (
              <form onSubmit={handleForgotSubmit}>
                <div style={{ marginBottom: "18px" }}>
                  <label
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#212529",
                      marginBottom: "6px",
                      display: "block",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Email/Mobile No.
                  </label>
                  <input
                    type="text"
                    style={{
                      boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                      borderRadius: "5px",
                      border: "0.8px solid black",
                      padding: "10px 14px",
                      width: "100%",
                      height: "46px",
                      fontSize: "14px",
                      boxSizing: "border-box",
                      outline: "none",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                    placeholder="Email or Mobile"
                    required
                    value={forgotContact}
                    onChange={(e) => setForgotContact(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    borderRadius: "5px",
                    height: "46px",
                    backgroundColor: "#07a64b",
                    borderColor: "#07a64b",
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: 700,
                    width: "100%",
                    border: "none",
                    cursor: "pointer",
                    marginBottom: "12px",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>

                <div style={{ textAlign: "center" }}>
                  <button
                    type="button"
                    onClick={() => {
                      setModalMode("login-password");
                      setErrorMessage("");
                      setSuccessMessage("");
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#3675f4",
                      fontSize: "13.5px",
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Back to Login
                  </button>
                </div>
              </form>
            )}

            {/* ========================================================= */}
            {/* RESET PASSWORD FORM MATCHING PHP                          */}
            {/* ========================================================= */}
            {modalMode === "reset" && (
              <form onSubmit={handleResetPasswordSubmit}>
                <div style={{ marginBottom: "14px" }}>
                  <label
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#212529",
                      marginBottom: "6px",
                      display: "block",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    OTP
                  </label>
                  <input
                    type="text"
                    style={{
                      boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                      borderRadius: "5px",
                      border: "0.8px solid black",
                      padding: "10px 14px",
                      width: "100%",
                      height: "46px",
                      fontSize: "14px",
                      boxSizing: "border-box",
                      outline: "none",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                    placeholder="Enter OTP"
                    required
                    value={resetOtp}
                    onChange={(e) => setResetOtp(e.target.value)}
                  />
                </div>

                <div style={{ marginBottom: "14px" }}>
                  <label
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#212529",
                      marginBottom: "6px",
                      display: "block",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    New Password
                  </label>
                  <div style={{ display: "flex", width: "100%" }}>
                    <input
                      type={showNewPassword ? "text" : "password"}
                      style={{
                        boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                        borderRadius: "5px 0 0 5px",
                        border: "0.8px solid black",
                        borderRight: "none",
                        padding: "10px 14px",
                        flex: 1,
                        height: "46px",
                        fontSize: "14px",
                        boxSizing: "border-box",
                        outline: "none",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                      placeholder="New Password"
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      style={{
                        width: "48px",
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
                      }}
                    >
                      <i className={showNewPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                    </button>
                  </div>
                </div>

                <div style={{ marginBottom: "18px" }}>
                  <label
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#212529",
                      marginBottom: "6px",
                      display: "block",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Confirm Password
                  </label>
                  <div style={{ display: "flex", width: "100%" }}>
                    <input
                      type={showConfirmNewPassword ? "text" : "password"}
                      style={{
                        boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                        borderRadius: "5px 0 0 5px",
                        border: "0.8px solid black",
                        borderRight: "none",
                        padding: "10px 14px",
                        flex: 1,
                        height: "46px",
                        fontSize: "14px",
                        boxSizing: "border-box",
                        outline: "none",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                      placeholder="Confirm Password"
                      required
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmNewPassword(!showConfirmNewPassword)
                      }
                      style={{
                        width: "48px",
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
                      }}
                    >
                      <i className={showConfirmNewPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    borderRadius: "5px",
                    height: "46px",
                    backgroundColor: "#07a64b",
                    borderColor: "#07a64b",
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: 700,
                    width: "100%",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {isLoading ? "Updating..." : "Update Password"}
                </button>
              </form>
            )}

            {/* ========================================================= */}
            {/* SIGN UP / REGISTER MATCHING PHP registermodal.blade.php   */}
            {/* ========================================================= */}
            {modalMode === "register" && (
              <>
                {!regOtpStep ? (
                  <form onSubmit={handleRegisterSubmit}>
                    {/* Name */}
                    <div style={{ marginBottom: "12px" }}>
                      <label
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#212529",
                          marginBottom: "4px",
                          display: "block",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Name<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        style={{
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                          borderRadius: "5px",
                          border: "1px solid black",
                          padding: "9px 12px",
                          width: "100%",
                          height: "44px",
                          fontSize: "14px",
                          boxSizing: "border-box",
                          outline: "none",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                        placeholder="Enter Full Name"
                        required
                        value={regName}
                        onChange={(e) => setRegName(e.target.value)}
                      />
                    </div>

                    {/* Email */}
                    <div style={{ marginBottom: "12px" }}>
                      <label
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#212529",
                          marginBottom: "4px",
                          display: "block",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Email<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="email"
                        style={{
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                          borderRadius: "5px",
                          border: "1px solid black",
                          padding: "9px 12px",
                          width: "100%",
                          height: "44px",
                          fontSize: "14px",
                          boxSizing: "border-box",
                          outline: "none",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                        placeholder="Your Email Address"
                        required
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                      />
                    </div>

                    {/* Country Dialer */}
                    <div style={{ marginBottom: "12px" }}>
                      <label
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#212529",
                          marginBottom: "4px",
                          display: "block",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Select Country with Dialer Code<span style={{ color: "red" }}>*</span>
                      </label>
                      <select
                        style={{
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                          borderRadius: "5px",
                          border: "1px solid black",
                          padding: "9px 12px",
                          width: "100%",
                          height: "44px",
                          fontSize: "14px",
                          boxSizing: "border-box",
                          outline: "none",
                          backgroundColor: "#fff",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                        value={regCountryCode}
                        onChange={(e) => setRegCountryCode(e.target.value)}
                        required
                      >
                        {countryList.map((c) => (
                          <option key={c.code + c.name} value={c.code}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Mobile */}
                    <div style={{ marginBottom: "12px" }}>
                      <label
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#212529",
                          marginBottom: "4px",
                          display: "block",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Mobile Number<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        style={{
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                          borderRadius: "5px",
                          border: "1px solid black",
                          padding: "9px 12px",
                          width: "100%",
                          height: "44px",
                          fontSize: "14px",
                          boxSizing: "border-box",
                          outline: "none",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                        placeholder="Your Mobile Number"
                        maxLength={12}
                        required
                        value={regMobile}
                        onChange={(e) => setRegMobile(e.target.value)}
                      />
                    </div>

                    {/* State */}
                    <div style={{ marginBottom: "12px" }}>
                      <label
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#212529",
                          marginBottom: "4px",
                          display: "block",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Select State<span style={{ color: "red" }}>*</span>
                      </label>
                      <select
                        style={{
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                          borderRadius: "5px",
                          border: "1px solid black",
                          padding: "9px 12px",
                          width: "100%",
                          height: "44px",
                          fontSize: "14px",
                          boxSizing: "border-box",
                          outline: "none",
                          backgroundColor: "#fff",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                        required
                        value={regState}
                        onChange={(e) => setRegState(e.target.value)}
                      >
                        <option value="">Please Select State</option>
                        {indianStates.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* City */}
                    <div style={{ marginBottom: "12px" }}>
                      <label
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#212529",
                          marginBottom: "4px",
                          display: "block",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Enter Your City<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        style={{
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                          borderRadius: "5px",
                          border: "1px solid black",
                          padding: "9px 12px",
                          width: "100%",
                          height: "44px",
                          fontSize: "14px",
                          boxSizing: "border-box",
                          outline: "none",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                        placeholder="Enter Your City"
                        required
                        value={regCity}
                        onChange={(e) => setRegCity(e.target.value)}
                      />
                    </div>

                    {/* Password */}
                    <div style={{ marginBottom: "12px" }}>
                      <label
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#212529",
                          marginBottom: "4px",
                          display: "block",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Password<span style={{ color: "red" }}>*</span>
                      </label>
                      <div style={{ display: "flex", width: "100%" }}>
                        <input
                          type={showRegPassword ? "text" : "password"}
                          placeholder="Password"
                          required
                          value={regPassword}
                          onChange={(e) => setRegPassword(e.target.value)}
                          style={{
                            borderRadius: "5px 0 0 5px",
                            border: "1px solid black",
                            borderRight: "none",
                            padding: "9px 12px",
                            flex: 1,
                            height: "44px",
                            fontSize: "14px",
                            boxSizing: "border-box",
                            outline: "none",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowRegPassword(!showRegPassword)
                          }
                          style={{
                            width: "48px",
                            height: "44px",
                            backgroundColor: "#ffffff",
                            border: "1px solid black",
                            borderLeft: "none",
                            borderRadius: "0 5px 5px 0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            color: "#212529",
                          }}
                        >
                          <i className={showRegPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div style={{ marginBottom: "14px" }}>
                      <label
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#212529",
                          marginBottom: "4px",
                          display: "block",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Confirm Password<span style={{ color: "red" }}>*</span>
                      </label>
                      <div style={{ display: "flex", width: "100%" }}>
                        <input
                          type={
                            showRegConfirmPassword ? "text" : "password"
                          }
                          placeholder="Confirm Password"
                          required
                          value={regConfirmPassword}
                          onChange={(e) =>
                            setRegConfirmPassword(e.target.value)
                          }
                          style={{
                            borderRadius: "5px 0 0 5px",
                            border: "1px solid black",
                            borderRight: "none",
                            padding: "9px 12px",
                            flex: 1,
                            height: "44px",
                            fontSize: "14px",
                            boxSizing: "border-box",
                            outline: "none",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowRegConfirmPassword(
                              !showRegConfirmPassword
                            )
                          }
                          style={{
                            width: "48px",
                            height: "44px",
                            backgroundColor: "#ffffff",
                            border: "1px solid black",
                            borderLeft: "none",
                            borderRadius: "0 5px 5px 0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            color: "#212529",
                          }}
                        >
                          <i className={showRegConfirmPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                        </button>
                      </div>
                    </div>

                    {/* Terms Checkbox */}
                    <div style={{ marginBottom: "16px" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                        <input
                          type="checkbox"
                          id="tc"
                          checked={regAgreed}
                          onChange={(e) => setRegAgreed(e.target.checked)}
                          required
                          style={{ marginTop: "3px", accentColor: "#07a64b" }}
                        />
                        <label
                          htmlFor="tc"
                          style={{
                            fontSize: "12.5px",
                            color: "#212529",
                            lineHeight: 1.4,
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          By submitting this form, I agree to Counsel India&apos;s{" "}
                          <Link
                            href="/terms-condition"
                            style={{ color: "#07a64b" }}
                            target="_blank"
                          >
                            Terms &amp; Condition
                          </Link>{" "}
                          and{" "}
                          <Link
                            href="/privacy-policy"
                            style={{ color: "#07a64b" }}
                            target="_blank"
                          >
                            Privacy Policy.
                          </Link>
                        </label>
                      </div>
                    </div>

                    {/* Register Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      style={{
                        boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                        borderRadius: "5px",
                        height: "46px",
                        backgroundColor: "#07a64b",
                        borderColor: "#07a64b",
                        color: "#ffffff",
                        fontSize: "16px",
                        fontWeight: 700,
                        width: "100%",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {isLoading ? "Registering..." : "Register"}
                    </button>
                  </form>
                ) : (
                  /* OTP Screen for Register */
                  <form onSubmit={handleVerifyRegOtp}>
                    <div style={{ marginBottom: "15px" }}>
                      <label
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#212529",
                          marginBottom: "6px",
                          display: "block",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        OTP
                      </label>
                      <input
                        type="text"
                        placeholder="OTP"
                        required
                        value={regOtpCode}
                        onChange={(e) => setRegOtpCode(e.target.value)}
                        style={{
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                          borderRadius: "5px",
                          border: "1px solid black",
                          padding: "10px 14px",
                          width: "100%",
                          height: "46px",
                          fontSize: "16px",
                          letterSpacing: "3px",
                          textAlign: "center",
                          boxSizing: "border-box",
                          outline: "none",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        marginBottom: "16px",
                        width: "100%",
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <button
                          type="button"
                          onClick={() => {
                            setSuccessMessage(
                              `OTP Resent to ${regCountryCode} ${regMobile}`
                            );
                          }}
                          style={{
                            width: "100%",
                            height: "40px",
                            backgroundColor: "#07a64b",
                            borderColor: "#07a64b",
                            color: "#ffffff",
                            borderRadius: "5px",
                            fontSize: "14px",
                            fontWeight: 600,
                            cursor: "pointer",
                            border: "none",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          Resend
                        </button>
                      </div>
                      <div style={{ flex: 1 }}>
                        <button
                          type="button"
                          onClick={() => {
                            setRegOtpStep(false);
                            setRegOtpCode("");
                            setErrorMessage("");
                          }}
                          style={{
                            width: "100%",
                            height: "40px",
                            backgroundColor: "#07a64b",
                            borderColor: "#07a64b",
                            color: "#ffffff",
                            borderRadius: "5px",
                            fontSize: "14px",
                            fontWeight: 600,
                            cursor: "pointer",
                            border: "none",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          Back To Register
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      style={{
                        borderRadius: "5px",
                        height: "48px",
                        backgroundColor: "#07a64b",
                        borderColor: "#07a64b",
                        color: "#ffffff",
                        fontSize: "16px",
                        fontWeight: 700,
                        width: "100%",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {isLoading ? "Verifying..." : "Verify Otp"}
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
