"use client";
import React, { useState } from "react";
import { submitLead } from "@/services/leadService";
import { ALL_INDIAN_STATES, getCitiesForState } from "@/data/indianLocations";

import { NewsletterItem } from "./data/newslettersData";

interface Props {
  newsletter: NewsletterItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const INDIAN_STATES = [
  "Delhi",
  "Maharashtra",
  "Karnataka",
  "Uttar Pradesh",
  "Haryana",
  "Tamil Nadu",
  "West Bengal",
  "Telangana",
  "Gujarat",
  "Rajasthan",
  "Kerala",
  "Madhya Pradesh",
  "Punjab",
  "Bihar",
  "Odisha",
  "Other",
];

const HEAR_ABOUT_OPTIONS = [
  "Google",
  "Facebook",
  "Instagram",
  "LinkedIn",
  "Blogs",
  "Email",
  "Whatsapp",
  "reference",
  "YouTube",
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

  const availableCities = getCitiesForState(formData.state);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleClose = () => {
    setIsSuccess(false);
    setIsSubmitting(false);
    setErrorMessage("");
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMobile = formData.mobile.trim();

    if (!trimmedName) {
      setErrorMessage("Please enter your name.");
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
    if (!formData.state) {
      setErrorMessage("Please select your state.");
      return;
    }
    if (!formData.city.trim()) {
      setErrorMessage("Please select your city.");
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

    setIsSubmitting(true);
    const nName = newsletter?.name || newsletter?.monthTitle || "Counsel India Newsletter";

    try {
      await submitLead({
        category: "newsletter",
        name: formData.name.trim(),
        email: formData.email.trim(),
        mobile: formData.mobile.trim(),
        state: formData.state,
        city: formData.city,
        hearFrom: formData.hearabout,
        courseName: nName,
        content: nName,
        medium: "Website Newsletter Modal",
        source: "Newsletter Download Modal",
        extraData: {
          newsletterName: nName,
          monthTitle: newsletter?.monthTitle,
        },
      });

      setIsSuccess(true);

      // Trigger newsletter download via route
      const fullNewsletterTitle =
        newsletter?.monthTitle && newsletter?.name
          ? `${newsletter.name} ${newsletter.monthTitle}`
          : newsletter?.name || newsletter?.monthTitle || "Counsel India Newsletter";

      const cleanFilename = fullNewsletterTitle
        .replace(/[^a-zA-Z0-9\s_-]/g, "")
        .trim()
        .replace(/\s+/g, "_");

      const params = new URLSearchParams();
      params.set("type", "newsletter");
      params.set("name", cleanFilename);
      params.set("filename", `${cleanFilename}.pdf`);
      if (newsletter?.pdfUrl) {
        params.set("url", newsletter.pdfUrl);
      }

      const downloadUrl = `/api/download-brochure?${params.toString()}`;

      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = `${cleanFilename}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error("Newsletter submission error:", err);
      setErrorMessage("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
        if (e.target === e.currentTarget) handleClose();
      }}
    >
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

        {isSuccess ? (
          <div style={{ textAlign: "center", padding: "24px 10px 10px" }}>
            <div
              style={{
                width: "68px",
                height: "68px",
                borderRadius: "50%",
                backgroundColor: "#dcfce7",
                color: "#16a34a",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                margin: "0 auto 16px",
              }}
            >
              ✓
            </div>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#1e293b",
                marginBottom: "8px",
              }}
            >
              Thank You!
            </h3>
            <p
              style={{
                color: "#64748b",
                fontSize: "14px",
                lineHeight: "1.6",
                marginBottom: "24px",
              }}
            >
              Your newsletter download has started. We have also recorded your request!
            </p>
            <button
              type="button"
              onClick={handleClose}
              style={{
                backgroundColor: "#07a64b",
                color: "#ffffff",
                border: "none",
                borderRadius: "6px",
                padding: "10px 32px",
                fontWeight: 600,
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Done
            </button>
          </div>
        ) : (
          <>
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
                  maxLength={10}
                  inputMode="numeric"
                  pattern="[6-9][0-9]{9}"
                  onChange={(e) => {
                    const cleaned = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setFormData({ ...formData, mobile: cleaned });
                    if (errorMessage) setErrorMessage("");
                  }}
                  required
                />
              </div>

              {/* State */}
              <div style={{ marginBottom: "14px" }}>
                <label style={labelStyle}>
                  Select State<span style={{ color: "#ef4444" }}>*</span>
                </label>
                <select
                  style={{
                    ...inputStyle,
                    cursor: "pointer",
                    color: formData.state ? "#212529" : "#6c757d",
                  }}
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value, city: "" })}
                  required
                >
                  <option value="" disabled hidden>
                    Please Select State
                  </option>
                  {ALL_INDIAN_STATES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                  <option value="Other / Outside India">Other / Outside India</option>
                </select>
              </div>

              {/* City */}
              <div style={{ marginBottom: "14px" }}>
                <label style={labelStyle}>
                  Select City<span style={{ color: "#ef4444" }}>*</span>
                </label>
                <select
                  style={{
                    ...inputStyle,
                    cursor: "pointer",
                    color: formData.city ? "#212529" : "#6c757d",
                  }}
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                >
                  <option value="" disabled hidden>
                    Please Select City
                  </option>
                  {availableCities.map((ct) => (
                    <option key={ct} value={ct}>
                      {ct}
                    </option>
                  ))}
                </select>
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
                  <span>
                    By submitting this form, I agree to receive communications from Counsel India.
                  </span>
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
                    if (!isSubmitting) e.currentTarget.style.backgroundColor = "#05873d";
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) e.currentTarget.style.backgroundColor = "#07a64b";
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Submit & Download"}
                </button>
              </div>
            </form>
          </>
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
