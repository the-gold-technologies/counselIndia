"use client";
import React, { useState } from "react";
import { NewsletterItem } from "./data/newslettersData";

interface ModalProps {
  newsletter: NewsletterItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterSubscribeModal({ newsletter, isOpen, onClose }: ModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen || !newsletter) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({ name: "", email: "", mobile: "" });
    onClose();
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
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid black",
          borderRadius: "10px",
          boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.35)",
          maxWidth: "470px",
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
          onClick={handleClose}
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

        {!isSuccess ? (
          <div>
            <div style={{ marginBottom: "20px" }}>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "#e8f8ee",
                  color: "#07a64b",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.5px",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                }}
              >
                {newsletter.edition}
              </span>
              <h3
                style={{
                  fontSize: "19px",
                  fontWeight: 700,
                  color: "#1e293b",
                  lineHeight: "1.35",
                  margin: 0,
                }}
              >
                {newsletter.title}
              </h3>
            </div>

            <form onSubmit={handleSubmit}>
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

              {/* Name */}
              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#212529",
                    marginBottom: "6px",
                    display: "block",
                  }}
                >
                  Your Name<span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={inputStyle}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#212529",
                    marginBottom: "6px",
                    display: "block",
                  }}
                >
                  Email Address<span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email to receive PDF"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={inputStyle}
                />
              </div>

              {/* Mobile (Optional) */}
              <div style={{ marginBottom: "22px" }}>
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#212529",
                    marginBottom: "6px",
                    display: "block",
                  }}
                >
                  Mobile Number (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  style={inputStyle}
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
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
                >
                  {isSubmitting ? "Sending..." : "Download & Read Edition"}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "10px 0" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                backgroundColor: "#e8f8ee",
                color: "#07a64b",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                marginBottom: "16px",
              }}
            >
              ✓
            </div>
            <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#1e293b", marginBottom: "8px" }}>
              Edition Ready!
            </h3>
            <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6", marginBottom: "24px" }}>
              We have sent the PDF copy of <strong>&quot;{newsletter.title}&quot;</strong> to <strong>{formData.email}</strong>.
            </p>

            <button
              onClick={handleClose}
              style={{
                backgroundColor: "#07a64b",
                color: "#ffffff",
                border: "none",
                borderRadius: "6px",
                padding: "10px 24px",
                fontWeight: 600,
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
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
