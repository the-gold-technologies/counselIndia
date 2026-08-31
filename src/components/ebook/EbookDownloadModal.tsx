"use client";
import React, { useState } from "react";
import { EbookItem } from "./EbookCard";

interface ModalProps {
  ebook: EbookItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const COUNTRIES = [
  { name: "India", code: "+91" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "United Arab Emirates", code: "+971" },
  { name: "Canada", code: "+1" },
  { name: "Australia", code: "+61" },
  { name: "Singapore", code: "+65" },
];

const INDIAN_STATES: { [key: string]: string[] } = {
  Delhi: ["New Delhi", "North Delhi", "South Delhi", "West Delhi", "East Delhi"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik"],
  Karnataka: ["Bengaluru", "Mysuru", "Hubli", "Mangaluru"],
  "Uttar Pradesh": ["Noida", "Lucknow", "Kanpur", "Ghaziabad", "Varanasi", "Agra"],
  Haryana: ["Gurugram", "Faridabad", "Panipat", "Ambala"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
};

const HEAR_ABOUT_OPTIONS = [
  "Instagram",
  "Facebook",
  "Google Search",
  "LinkedIn",
  "YouTube",
  "Friends / Family Referral",
  "WhatsApp / Telegram",
  "Other",
];

export default function EbookDownloadModal({ ebook, isOpen, onClose }: ModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "India (+91)",
    mobile: "",
    state: "",
    city: "",
    hearAbout: "",
    terms: true,
  });

  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen || !ebook) return null;

  const availableCities = formData.state && INDIAN_STATES[formData.state] ? INDIAN_STATES[formData.state] : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    if (!formData.email.trim()) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.country) {
      setErrorMessage("Please select your country.");
      return;
    }

    if (!formData.mobile.trim() || formData.mobile.length < 7) {
      setErrorMessage("Please enter a valid mobile number.");
      return;
    }

    if (!formData.state) {
      setErrorMessage("Please select your state.");
      return;
    }

    if (!formData.city) {
      setErrorMessage("Please select your city.");
      return;
    }

    if (!formData.hearAbout) {
      setErrorMessage("Please tell us how you heard about us.");
      return;
    }

    if (!formData.terms) {
      setErrorMessage("Please accept the Terms & Conditions.");
      return;
    }

    if (!captchaChecked) {
      setErrorMessage("Please verify that you are not a robot.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleCloseAll = () => {
    setIsSuccess(false);
    setCaptchaChecked(false);
    setFormData({
      name: "",
      email: "",
      country: "India (+91)",
      mobile: "",
      state: "",
      city: "",
      hearAbout: "",
      terms: true,
    });
    onClose();
  };

  const inputStyle: React.CSSProperties = {
    border: "1.2px solid #64748b",
    borderRadius: "6px",
    width: "100%",
    height: "46px",
    padding: "0 14px",
    fontSize: "14.5px",
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
        backgroundColor: "rgba(0, 0, 0, 0.65)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 15px",
        overflowY: "auto",
        animation: "modalFadeIn 0.25s ease-out forwards",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleCloseAll();
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35)",
          maxWidth: "500px",
          width: "100%",
          maxHeight: "92vh",
          overflowY: "auto",
          padding: "36px 32px",
          position: "relative",
          boxSizing: "border-box",
          animation: "modalSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleCloseAll}
          style={{
            position: "absolute",
            top: "14px",
            right: "16px",
            background: "none",
            border: "none",
            fontSize: "24px",
            color: "#000000",
            cursor: "pointer",
            padding: 0,
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "30px",
            height: "30px",
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {!isSuccess ? (
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

            {/* 1. Full Name */}
            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>
                Full Name<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={inputStyle}
              />
            </div>

            {/* 2. Email */}
            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>
                Email<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="email"
                placeholder="Your Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={inputStyle}
              />
            </div>

            {/* 3. Select Country With Country Code */}
            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>
                Select Country With Country Code<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <select
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                style={inputStyle}
              >
                <option value="">Please Select Country</option>
                {COUNTRIES.map((c) => (
                  <option key={c.name} value={`${c.name} (${c.code})`}>
                    {c.name} ({c.code})
                  </option>
                ))}
              </select>
            </div>

            {/* 4. Mobile No. */}
            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>
                Mobile No.<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="tel"
                placeholder="Your Mobile Number"
                maxLength={10}
                required
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                style={inputStyle}
              />
            </div>

            {/* 5. Select State */}
            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>
                Select State<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <select
                required
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value, city: "" })}
                style={inputStyle}
              >
                <option value="">Please Select State</option>
                {Object.keys(INDIAN_STATES).map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* 6. Select City */}
            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>
                Select City<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <select
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                style={inputStyle}
              >
                <option value="">Please Select City</option>
                {availableCities.map((ct) => (
                  <option key={ct} value={ct}>
                    {ct}
                  </option>
                ))}
              </select>
            </div>

            {/* 7. How Did You Hear About Us */}
            <div style={{ marginBottom: "18px" }}>
              <label style={labelStyle}>
                How Did You Hear About Us.<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <select
                required
                value={formData.hearAbout}
                onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                style={inputStyle}
              >
                <option value="">Please Select</option>
                {HEAR_ABOUT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* 8. Terms Checkbox */}
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <input
                type="checkbox"
                id="ebLiveTerms"
                required
                checked={formData.terms}
                onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                style={{
                  marginTop: "4px",
                  accentColor: "#00a651",
                  cursor: "pointer",
                }}
              />
              <label
                htmlFor="ebLiveTerms"
                style={{
                  fontSize: "13px",
                  color: "#212529",
                  lineHeight: "1.5",
                  cursor: "pointer",
                }}
              >
                By submitting this form, I agree to Counsel India&apos;s{" "}
                <a
                  href="/terms-and-conditions"
                  target="_blank"
                  style={{ color: "#00a651", textDecoration: "none", fontWeight: 500 }}
                >
                  Terms &amp; Conditions
                </a>{" "}
                and{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  style={{ color: "#00a651", textDecoration: "none", fontWeight: 500 }}
                >
                  Privacy Policy
                </a>
                .<span style={{ color: "#ef4444" }}>*</span>
              </label>
            </div>

            {/* 9. reCAPTCHA Widget matching screenshot */}
            <div
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                padding: "10px 14px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "240px",
                marginBottom: "22px",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "13.5px",
                  color: "#374151",
                  cursor: "pointer",
                  margin: 0,
                }}
              >
                <input
                  type="checkbox"
                  checked={captchaChecked}
                  onChange={(e) => setCaptchaChecked(e.target.checked)}
                  style={{ width: "20px", height: "20px", cursor: "pointer", accentColor: "#00a651" }}
                />
                <span>I&apos;m not a robot</span>
              </label>

              <div style={{ textAlign: "center" }}>
                <img
                  src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                  alt="reCAPTCHA"
                  style={{ width: "26px", height: "26px", display: "block", margin: "0 auto" }}
                />
                <span style={{ fontSize: "9px", color: "#6b7280", display: "block" }}>reCAPTCHA</span>
              </div>
            </div>

            {/* 10. Left-Aligned Green Submit Button */}
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: "#00a651",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "6px",
                  padding: "0 34px",
                  height: "44px",
                  fontSize: "15.5px",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#008f45";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#00a651";
                }}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        ) : (
          /* Thank You Confirmation */
          <div style={{ textAlign: "center", padding: "10px 0" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#e8f8ee",
                color: "#00a651",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                marginBottom: "16px",
              }}
            >
              ✓
            </div>
            <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#1e293b", marginBottom: "8px" }}>
              Thank You!
            </h3>
            <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6", marginBottom: "20px" }}>
              Your e-book <strong>&quot;{ebook.name}&quot;</strong> has been prepared for download. A copy has also been sent to <strong>{formData.email}</strong>.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href={ebook.image}
                download={`${ebook.name}.jpg`}
                style={{
                  backgroundColor: "#00a651",
                  color: "#ffffff",
                  borderRadius: "6px",
                  padding: "12px 24px",
                  fontWeight: 700,
                  fontSize: "15px",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Download PDF Copy
              </a>
              <a
                href="https://chat.whatsapp.com/GVe7eiTWceVGcxmwz0hMqp"
                target="_blank"
                rel="noreferrer"
                style={{
                  backgroundColor: "#25d366",
                  color: "#ffffff",
                  borderRadius: "6px",
                  padding: "10px 24px",
                  fontWeight: 600,
                  fontSize: "14.5px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <i className="fab fa-whatsapp"></i>
                <span>Join Psychology WhatsApp Community</span>
              </a>
            </div>
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
