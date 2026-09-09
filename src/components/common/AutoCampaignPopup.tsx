"use client";
import React, { useState, useEffect } from "react";

export default function AutoCampaignPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Check if popup was already shown in this session
    const hasShown = sessionStorage.getItem("exitIntentShown");
    if (hasShown) return;

    // Trigger 1: Auto popup after 5 seconds
    const timer = setTimeout(() => {
      const shown = sessionStorage.getItem("exitIntentShown");
      if (!shown) {
        setIsOpen(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    }, 5000);

    // Trigger 2: Exit intent (mouse leaves viewport towards top)
    const handleMouseOut = (e: MouseEvent) => {
      if (
        !sessionStorage.getItem("exitIntentShown") &&
        (e.clientY <= 0 ||
          (e.relatedTarget === null && (e as any).toElement === null))
      ) {
        setIsOpen(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const handleClose = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim()) {
      setErrorMessage("Please enter your full name");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage("Please enter your email address");
      return;
    }
    if (!mobile.trim() || !/^\d{10}$/.test(mobile.replace(/\D/g, ""))) {
      setErrorMessage("Your mobile number must be 10 digits");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes popupSlideDown {
          0% {
            transform: translateY(-70px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes popupSlideUp {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-70px);
            opacity: 0;
          }
        }
        @keyframes popupFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes popupFadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "15px",
          boxSizing: "border-box",
          animation: isClosing
            ? "popupFadeOut 0.3s ease forwards"
            : "popupFadeIn 0.35s ease forwards",
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) handleClose();
        }}
      >
        <div
          style={{
            position: "relative",
            width: "700px",
            height: "471px",
            maxWidth: "96%",
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            padding: "16px 22px",
            boxShadow: "0px 1px 26px -3px rgba(0, 0, 0, 0.4)",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            animation: isClosing
              ? "popupSlideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards"
              : "popupSlideDown 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            type="button"
            style={{
              position: "absolute",
              top: "16px",
              right: "22px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              zIndex: 10,
              padding: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.8,
            }}
            aria-label="Close"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L14 14M2 14L14 2"
                stroke="#6c757d"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
            }}
          >
            {/* Left Column Image (280px x 412px) */}
            <div
              className="d-none d-md-block"
              style={{
                width: "280px",
                height: "412px",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/mastergalaxyimages/Purple+-+Green_1750920106.webp"
                alt="Mental Health Campaigns"
                style={{
                  height: "412px",
                  width: "280px",
                  objectFit: "fill",
                  display: "block",
                  borderRadius: "8px",
                }}
              />
            </div>

            {/* Right Column Form */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: "15px",
                boxSizing: "border-box",
              }}
            >
              {/* Logo */}
              <div
                style={{
                  width: "280px",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  src="https://www.counselindia.com/assets/images/dark-logo.png"
                  alt="Counsel India"
                  style={{
                    width: "175px",
                    height: "64px",
                    objectFit: "contain",
                    display: "inline-block",
                  }}
                />
              </div>

              {/* Full-width Divider Line */}
              <div
                style={{
                  width: "280px",
                  borderBottom: "1px solid #d5d5d5",
                  marginBottom: "20px",
                }}
              />

              {isSubmitted ? (
                <div
                  style={{
                    width: "280px",
                    color: "green",
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: "30px 0",
                    fontSize: "18px",
                  }}
                >
                  Subscription successful!
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    width: "280px",
                    margin: "0 auto",
                  }}
                >
                  {errorMessage && (
                    <div
                      style={{
                        color: "#dc3545",
                        fontSize: "13px",
                        marginBottom: "10px",
                        textAlign: "left",
                      }}
                    >
                      {errorMessage}
                    </div>
                  )}

                  {/* Name Input */}
                  <div style={{ marginBottom: "16px" }}>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        width: "280px",
                        height: "48px",
                        borderRadius: "6px",
                        boxShadow: "0 0 4px rgba(0, 0, 0, 0.22)",
                        border: "0.8px solid #555555",
                        padding: "0 16px",
                        fontSize: "14.5px",
                        backgroundColor: "#ffffff",
                        color: "#212529",
                        outline: "none",
                        boxSizing: "border-box",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div style={{ marginBottom: "16px" }}>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: "280px",
                        height: "48px",
                        borderRadius: "6px",
                        boxShadow: "0 0 4px rgba(0, 0, 0, 0.22)",
                        border: "0.8px solid #555555",
                        padding: "0 16px",
                        fontSize: "14.5px",
                        backgroundColor: "#ffffff",
                        color: "#212529",
                        outline: "none",
                        boxSizing: "border-box",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                      required
                    />
                  </div>

                  {/* Mobile Input */}
                  <div style={{ marginBottom: "18px" }}>
                    <input
                      type="tel"
                      name="mobile"
                      id="mobile"
                      maxLength={10}
                      placeholder="Your Mobile Number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      style={{
                        width: "280px",
                        height: "48px",
                        borderRadius: "6px",
                        boxShadow: "0 0 4px rgba(0, 0, 0, 0.22)",
                        border: "0.8px solid #555555",
                        padding: "0 16px",
                        fontSize: "14.5px",
                        backgroundColor: "#ffffff",
                        color: "#212529",
                        outline: "none",
                        boxSizing: "border-box",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div style={{ textAlign: "center" }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        width: "280px",
                        height: "48px",
                        color: "#ffffff",
                        border: "none",
                        fontSize: "20px",
                        fontWeight: 600,
                        cursor: "pointer",
                        background: "#00d700",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Poppins', sans-serif",
                        transition: "background-color 0.2s ease",
                      }}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
