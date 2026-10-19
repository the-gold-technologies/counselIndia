"use client";
import React, { useState } from "react";
import { submitLead } from "@/services/leadService";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterSubscribeModal({ isOpen, onClose }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleClose = () => {
    setIsSuccess(false);
    setIsSubmitting(false);
    setErrorMessage("");
    setFormData({ name: "", email: "", mobile: "" });
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMobile = formData.mobile.trim();

    if (!trimmedName) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage("Please enter a valid email address (e.g. name@example.com).");
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(trimmedMobile)) {
      setErrorMessage("Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.");
      return;
    }

    setIsSubmitting(true);

    try {
      await submitLead({
        category: "subscription",
        name: trimmedName,
        email: trimmedEmail,
        mobile: trimmedMobile,
        source: "Newsletter Subscription Modal",
        medium: "Website Newsletter",
      });

      setIsSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (err) {
      console.error("Newsletter subscription error:", err);
      setErrorMessage("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        padding: "16px",
        boxSizing: "border-box",
        backdropFilter: "blur(3px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "400px",
          padding: "34px 30px 30px",
          /* Rich drop shadow for the form modal */
          boxShadow:
            "0 25px 60px rgba(0, 0, 0, 0.45), 0 10px 25px rgba(0, 0, 0, 0.2), 0 0 1px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(0, 0, 0, 0.08)",
          position: "relative",
          boxSizing: "border-box",
          animation: "modalFadeIn 0.22s ease-out",
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "14px",
            right: "16px",
            background: "transparent",
            border: "none",
            fontSize: "22px",
            color: "#64748b",
            cursor: "pointer",
            padding: "4px",
            lineHeight: 1,
            outline: "none",
            transition: "color 0.15s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#0f172a")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Counsel India Brand Logo */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <img
            src="/assets/images/dark-logo.png"
            alt="Counsel India - Counselling Simplified"
            style={{
              height: "46px",
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        {isSuccess ? (
          <div
            style={{
              textAlign: "center",
              padding: "20px 8px",
            }}
          >
            <div
              style={{
                fontSize: "38px",
                color: "#07a64b",
                marginBottom: "10px",
              }}
            >
              ✓
            </div>
            <h4
              style={{
                fontSize: "19px",
                fontWeight: 700,
                color: "#1e293b",
                marginBottom: "8px",
              }}
            >
              Subscribed Successfully!
            </h4>
            <p
              style={{
                fontSize: "14px",
                color: "#64748b",
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              Thank you for subscribing! You will receive our latest psychology newsletters and
              updates.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {errorMessage && (
              <div
                style={{
                  backgroundColor: "#fee2e2",
                  color: "#991b1b",
                  padding: "9px 12px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: 600,
                  marginBottom: "14px",
                  textAlign: "center",
                  boxShadow: "0 2px 6px rgba(239, 68, 68, 0.15)",
                }}
              >
                {errorMessage}
              </div>
            )}

            {/* Full Name */}
            <div style={{ marginBottom: "16px" }}>
              <input
                type="text"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errorMessage) setErrorMessage("");
                }}
                style={{
                  width: "100%",
                  height: "48px",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  padding: "0 16px",
                  fontSize: "15px",
                  color: "#1e293b",
                  outline: "none",
                  boxSizing: "border-box",
                  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.15)",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#07a64b";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(7, 166, 75, 0.18)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#334155";
                  e.currentTarget.style.boxShadow = "0px 1px 4px rgba(0, 0, 0, 0.15)";
                }}
                required
              />
            </div>

            {/* Email Address */}
            <div style={{ marginBottom: "16px" }}>
              <input
                type="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errorMessage) setErrorMessage("");
                }}
                style={{
                  width: "100%",
                  height: "48px",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  padding: "0 16px",
                  fontSize: "15px",
                  color: "#1e293b",
                  outline: "none",
                  boxSizing: "border-box",
                  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.15)",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#07a64b";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(7, 166, 75, 0.18)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#334155";
                  e.currentTarget.style.boxShadow = "0px 1px 4px rgba(0, 0, 0, 0.15)";
                }}
                required
              />
            </div>

            {/* Mobile Number */}
            <div style={{ marginBottom: "24px" }}>
              <input
                type="tel"
                placeholder="Your Mobile Number"
                value={formData.mobile}
                maxLength={10}
                inputMode="numeric"
                pattern="[6-9][0-9]{9}"
                onChange={(e) => {
                  const cleaned = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setFormData({ ...formData, mobile: cleaned });
                  if (errorMessage) setErrorMessage("");
                }}
                style={{
                  width: "100%",
                  height: "48px",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  padding: "0 16px",
                  fontSize: "15px",
                  color: "#1e293b",
                  outline: "none",
                  boxSizing: "border-box",
                  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.15)",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#07a64b";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(7, 166, 75, 0.18)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#334155";
                  e.currentTarget.style.boxShadow = "0px 1px 4px rgba(0, 0, 0, 0.15)";
                }}
                required
              />
            </div>

            {/* Subscribe Button (Counsel India Brand Website Button) */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-secondary btn-hover-primary"
                style={{
                  width: "100%",
                  height: "50px",
                  backgroundColor: "#07a64b",
                  color: "#ffffff",
                  fontSize: "17px",
                  fontWeight: 700,
                  border: "none",
                  borderRadius: "6px",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.25s ease",
                  boxShadow: "0 4px 14px rgba(7, 166, 75, 0.35)",
                  letterSpacing: "0.3px",
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = "#05873d";
                    e.currentTarget.style.boxShadow = "0 6px 18px rgba(7, 166, 75, 0.45)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = "#07a64b";
                    e.currentTarget.style.boxShadow = "0 4px 14px rgba(7, 166, 75, 0.35)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
          </form>
        )}
      </div>

      <style jsx>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-8px);
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
