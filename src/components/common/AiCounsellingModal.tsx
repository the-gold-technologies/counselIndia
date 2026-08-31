"use client";
import React, { useState } from "react";

interface AiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AiCounsellingModal({ isOpen, onClose }: AiModalProps) {
  const [formData, setFormData] = useState({ name: "", mobile: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const nameTrimmed = formData.name.trim();
    const mobileTrimmed = formData.mobile.trim();

    if (!nameTrimmed) {
      setErrorMessage("Please enter your name.");
      return;
    }

    const indianMobileRegex = /^[6-9]\d{9}$/;
    if (!indianMobileRegex.test(mobileTrimmed)) {
      setErrorMessage("Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.");
      return;
    }

    setIsSubmitting(true);

    // Matching PHP AJAX submit and redirect
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      window.location.href =
        "https://ai-counselor-counselindia.netlify.app?success=" +
        encodeURIComponent("Form submitted successfully!");
    }, 500);
  };

  return (
    <div
      className="modal-backdrop-anim"
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
        overflow: "hidden",
        animation: "modalFadeIn 0.25s ease-out forwards",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal-content-anim"
        style={{
          position: "relative",
          maxWidth: "470px",
          width: "100%",
          animation: "modalSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid black",
            borderRadius: "10px",
            boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.35)",
            padding: "36px 30px 32px",
            position: "relative",
          }}
        >
          {/* Close Button matching PHP .modal-close */}
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

            {/* Full Name */}
            <div style={{ marginBottom: "18px" }}>
              <label
                style={{
                  fontSize: "14.5px",
                  fontWeight: 600,
                  color: "#212529",
                  marginBottom: "6px",
                  display: "block",
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.4)",
                  border: "0.8px solid black",
                  borderRadius: "5px",
                  width: "100%",
                  height: "46px",
                  padding: "10px 14px",
                  fontSize: "14.5px",
                  color: "#212529",
                  backgroundColor: "#ffffff",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Mobile No. */}
            <div style={{ marginBottom: "22px" }}>
              <label
                style={{
                  fontSize: "14.5px",
                  fontWeight: 600,
                  color: "#212529",
                  marginBottom: "6px",
                  display: "block",
                }}
              >
                Mobile No.
              </label>
              <input
                type="tel"
                placeholder="Your Number"
                maxLength={10}
                required
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                style={{
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.4)",
                  border: "0.8px solid black",
                  borderRadius: "5px",
                  width: "100%",
                  height: "46px",
                  padding: "10px 14px",
                  fontSize: "14.5px",
                  color: "#212529",
                  backgroundColor: "#ffffff",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Submit Button matching PHP btn-primary */}
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
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
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
