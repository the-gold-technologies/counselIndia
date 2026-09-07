"use client";
import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
}

export default function CourseBrochureModal({
  isOpen,
  onClose,
  courseName,
}: ModalProps) {
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
        backgroundColor: "rgba(0, 0, 0, 0.65)",
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
          maxWidth: "480px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "28px 24px",
          fontFamily: "'Poppins', sans-serif",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            background: "none",
            border: "none",
            fontSize: "22px",
            cursor: "pointer",
            color: "#666",
            lineHeight: 1,
          }}
        >
          ✕
        </button>

        <h3
          style={{
            margin: "0 0 6px",
            fontSize: "20px",
            fontWeight: 700,
            color: "#1e293b",
            textAlign: "center",
          }}
        >
          Download Course Brochure
        </h3>
        <p
          style={{
            margin: "0 0 20px",
            fontSize: "13px",
            color: "#07a64b",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {courseName}
        </p>

        {submitted ? (
          <div
            style={{
              textAlign: "center",
              padding: "30px 10px",
              color: "#07a64b",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>✓</div>
            <h4 style={{ margin: "0 0 8px", fontSize: "18px", color: "#1e293b" }}>
              Thank You!
            </h4>
            <p style={{ margin: 0, fontSize: "14px", color: "#64748b" }}>
              Your brochure has been sent to your email & WhatsApp.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#334155", marginBottom: "4px" }}>
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Your Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "5px",
                  border: "1px solid #cbd5e1",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#334155", marginBottom: "4px" }}>
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "5px",
                  border: "1px solid #cbd5e1",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "10px" }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#334155", marginBottom: "4px" }}>
                  Country
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "10px 8px",
                    borderRadius: "5px",
                    border: "1px solid #cbd5e1",
                    fontSize: "13px",
                    outline: "none",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <option value="India (+91)">IN (+91)</option>
                  <option value="USA (+1)">US (+1)</option>
                  <option value="UK (+44)">UK (+44)</option>
                  <option value="UAE (+971)">UAE (+971)</option>
                  <option value="Canada (+1)">CA (+1)</option>
                  <option value="Australia (+61)">AU (+61)</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#334155", marginBottom: "4px" }}>
                  Mobile No. *
                </label>
                <input
                  type="tel"
                  required
                  maxLength={12}
                  placeholder="10 digit mobile"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: "5px",
                    border: "1px solid #cbd5e1",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#334155", marginBottom: "4px" }}>
                  State
                </label>
                <input
                  type="text"
                  placeholder="Your State"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: "5px",
                    border: "1px solid #cbd5e1",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#334155", marginBottom: "4px" }}>
                  City
                </label>
                <input
                  type="text"
                  placeholder="Your City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: "5px",
                    border: "1px solid #cbd5e1",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#334155", marginBottom: "4px" }}>
                How did you hear about us?
              </label>
              <select
                value={formData.hearAbout}
                onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "5px",
                  border: "1px solid #cbd5e1",
                  fontSize: "14px",
                  outline: "none",
                  backgroundColor: "#ffffff",
                }}
              >
                <option value="">Please Select</option>
                <option value="Google">Google</option>
                <option value="Instagram">Instagram</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Facebook">Facebook</option>
                <option value="YouTube">YouTube</option>
                <option value="Friend/Colleague">Friend/Colleague</option>
              </select>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginTop: "4px" }}>
              <input
                type="checkbox"
                id="modalTerms"
                checked={formData.terms}
                onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                required
                style={{ marginTop: "3px" }}
              />
              <label htmlFor="modalTerms" style={{ fontSize: "11.5px", color: "#64748b", lineHeight: "1.4" }}>
                By submitting this form, I agree to Counsel India&apos;s{" "}
                <a href="/terms-condition" style={{ color: "#07a64b", textDecoration: "underline" }} target="_blank">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" style={{ color: "#07a64b", textDecoration: "underline" }} target="_blank">
                  Privacy Policy
                </a>.
              </label>
            </div>

            <button
              type="submit"
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "12px",
                backgroundColor: "#07a64b",
                color: "#ffffff",
                border: "none",
                borderRadius: "5px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#068f40")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#07a64b")}
            >
              Submit & Download
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
