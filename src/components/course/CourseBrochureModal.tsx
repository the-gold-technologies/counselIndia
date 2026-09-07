"use client";
import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "6px",
  border: "1px solid #d1d5db",
  fontSize: "14px",
  color: "#374151",
  backgroundColor: "#f5f5f5",
  outline: "none",
  boxSizing: "border-box",
  appearance: "none" as const,
  WebkitAppearance: "none" as const,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "13.5px",
  fontWeight: 600,
  color: "#111827",
  marginBottom: "6px",
};

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu & Kashmir", "Ladakh", "Chandigarh", "Puducherry",
];

export default function CourseBrochureModal({ isOpen, onClose, courseName }: ModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    mobile: "",
    state: "",
    city: "",
    hearAbout: "",
    terms: false,
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.65)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "500px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
          position: "relative",
          maxHeight: "92vh",
          overflowY: "auto",
          fontFamily: "'Poppins', sans-serif",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: "22px 24px 18px",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "14px",
              right: "16px",
              background: "none",
              border: "none",
              fontSize: "20px",
              cursor: "pointer",
              color: "#9ca3af",
              lineHeight: 1,
              padding: "2px 6px",
            }}
            aria-label="Close modal"
          >
            ✕
          </button>
          <h3
            style={{
              margin: "0 0 4px",
              fontSize: "19px",
              fontWeight: 700,
              color: "#111827",
              textAlign: "center",
            }}
          >
            Download Course Brochure
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: "13px",
              color: "#07a64b",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {courseName}
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: "20px 24px 24px" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "30px 10px", color: "#07a64b" }}>
              <div style={{ fontSize: "44px", marginBottom: "12px" }}>✓</div>
              <h4 style={{ margin: "0 0 8px", fontSize: "18px", color: "#111827" }}>Thank You!</h4>
              <p style={{ margin: 0, fontSize: "13.5px", color: "#6b7280" }}>
                Your brochure has been sent to your email &amp; WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

              {/* Full Name */}
              <div>
                <label style={labelStyle}>
                  Full Name <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={inputStyle}
                />
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>
                  Email <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={inputStyle}
                />
              </div>

              {/* Select Country With Country Code */}
              <div>
                <label style={labelStyle}>
                  Select Country With Country Code <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <div style={{ position: "relative" }}>
                  <select
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    style={{ ...inputStyle, paddingRight: "36px", cursor: "pointer" }}
                  >
                    <option value="" disabled></option>
                    <option value="India (+91)">India (+91)</option>
                    <option value="USA (+1)">USA (+1)</option>
                    <option value="UK (+44)">UK (+44)</option>
                    <option value="UAE (+971)">UAE (+971)</option>
                    <option value="Canada (+1)">Canada (+1)</option>
                    <option value="Australia (+61)">Australia (+61)</option>
                    <option value="Singapore (+65)">Singapore (+65)</option>
                    <option value="Malaysia (+60)">Malaysia (+60)</option>
                  </select>
                  <svg
                    style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              {/* Mobile No. */}
              <div>
                <label style={labelStyle}>
                  Mobile No. <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="tel"
                  required
                  maxLength={12}
                  placeholder="Your Mobile Number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  style={inputStyle}
                />
              </div>

              {/* Select State */}
              <div>
                <label style={labelStyle}>
                  Select State <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <div style={{ position: "relative" }}>
                  <select
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    style={{ ...inputStyle, paddingRight: "36px", cursor: "pointer" }}
                  >
                    <option value="" disabled>Please Select State</option>
                    {INDIAN_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <svg
                    style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              {/* Select City */}
              <div>
                <label style={labelStyle}>
                  Select City <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Please Select City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  style={inputStyle}
                />
              </div>

              {/* How Did You Hear About Us */}
              <div>
                <label style={labelStyle}>
                  How Did You Hear About Us. <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <div style={{ position: "relative" }}>
                  <select
                    required
                    value={formData.hearAbout}
                    onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                    style={{ ...inputStyle, paddingRight: "36px", cursor: "pointer" }}
                  >
                    <option value="" disabled>Please Select</option>
                    <option value="Google">Google</option>
                    <option value="Instagram">Instagram</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Facebook">Facebook</option>
                    <option value="YouTube">YouTube</option>
                    <option value="Friend/Colleague">Friend/Colleague</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Other">Other</option>
                  </select>
                  <svg
                    style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              {/* Terms */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginTop: "2px" }}>
                <input
                  type="checkbox"
                  id="brochureTerms"
                  checked={formData.terms}
                  onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                  required
                  style={{ marginTop: "2px", width: "16px", height: "16px", accentColor: "#07a64b", flexShrink: 0, cursor: "pointer" }}
                />
                <label htmlFor="brochureTerms" style={{ fontSize: "12.5px", color: "#374151", lineHeight: "1.5", cursor: "pointer" }}>
                  By submitting this form, I agree to Counsel India&apos;s{" "}
                  <a href="/terms-condition" style={{ color: "#07a64b", textDecoration: "none" }} target="_blank">
                    Terms &amp; Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy-policy" style={{ color: "#07a64b", textDecoration: "none" }} target="_blank">
                    Privacy Policy
                  </a>
                  . <span style={{ color: "#ef4444" }}>*</span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  marginTop: "6px",
                  width: "140px",
                  padding: "11px 20px",
                  backgroundColor: "#07a64b",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "14.5px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                  fontFamily: "'Poppins', sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#068f40")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#07a64b")}
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
