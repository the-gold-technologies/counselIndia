"use client";
import React, { useState } from "react";
import { TestData } from "./MentalHealthTestCard";
import { submitLead } from "@/services/leadService";

interface ModalProps {
  test: TestData | null;
  isOpen: boolean;
  onClose: () => void;
  onStart: (userData: { name: string; email: string; mobile: string; leadId?: string }) => void;
}

export default function MentalHealthLeadModal({ test, isOpen, onClose, onStart }: ModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", terms: true });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !test) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const name = formData.name.trim();
    const email = formData.email.trim();
    const mobile = formData.mobile.trim();

    if (!name) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const indianMobileRegex = /^[6-9]\d{9}$/;
    if (!indianMobileRegex.test(mobile)) {
      setErrorMessage("Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.");
      return;
    }

    if (!formData.terms) {
      setErrorMessage("Please accept the terms to proceed.");
      return;
    }

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("ci_candidate_info", JSON.stringify({ name, email, mobile }));
      } catch {}
    }

    setIsSubmitting(true);
    try {
      const res = await submitLead({
        category: "personality-test",
        name,
        email,
        mobile,
        content: test.title,
        medium: "Website Personality / Mental Health Test",
        source: `Mental Test: ${test.title}`,
        courseName: test.title,
        extraData: {
          testId: test.id,
          testTitle: test.title,
          result: "In Progress",
        },
      });
      const leadId = res.data?.id || res.data?.sNo ? String(res.data.id || res.data.sNo) : "";
      onStart({ name, email, mobile, leadId });
    } catch {
      onStart({ name, email, mobile });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    border: "0.8px solid black",
    borderRadius: "6px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "50px",
    padding: "0 16px",
    fontSize: "15px",
    color: "#212529",
    backgroundColor: "#ffffff",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "15px",
    fontWeight: 600,
    color: "#212529",
    marginBottom: "8px",
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
        overflow: "hidden",
        animation: "modalFadeIn 0.25s ease-out forwards",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 15px 45px rgba(0, 0, 0, 0.4)",
          maxWidth: "460px",
          width: "100%",
          padding: "40px 36px 36px",
          position: "relative",
          boxSizing: "border-box",
          animation: "modalSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        {/* Large Close (✕) Button in Top Right */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "20px",
            background: "none",
            border: "none",
            fontSize: "24px",
            fontWeight: 400,
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
          <div style={{ marginBottom: "20px" }}>
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

          {/* Email */}
          <div style={{ marginBottom: "20px" }}>
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

          {/* Mobile No. */}
          <div style={{ marginBottom: "22px" }}>
            <label style={labelStyle}>
              Mobile No.<span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              type="tel"
              placeholder="Your Mobile Number"
              maxLength={10}
              inputMode="numeric"
              pattern="[6-9][0-9]{9}"
              required
              value={formData.mobile}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  mobile: e.target.value.replace(/\D/g, "").slice(0, 10),
                })
              }
              style={inputStyle}
            />
          </div>

          {/* Terms Checkbox */}
          <div
            style={{
              marginBottom: "26px",
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <input
              type="checkbox"
              id="mTerms"
              required
              checked={formData.terms}
              onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
              style={{
                marginTop: "4px",
                width: "16px",
                height: "16px",
                accentColor: "#00a651",
                cursor: "pointer",
                flexShrink: 0,
              }}
            />
            <label
              htmlFor="mTerms"
              style={{
                fontSize: "13.5px",
                color: "#212529",
                lineHeight: "1.55",
                margin: 0,
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

          {/* Left-Aligned Green Submit Button */}
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                border: "0.8px solid black",
                borderRadius: "6px",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                backgroundColor: isSubmitting ? "#94a3b8" : "#00a651",
                color: "#ffffff",
                padding: "0 40px",
                height: "46px",
                fontSize: "16px",
                fontWeight: 700,
                cursor: isSubmitting ? "not-allowed" : "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 0.2s ease, transform 0.15s ease",
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) e.currentTarget.style.backgroundColor = "#009347";
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) e.currentTarget.style.backgroundColor = "#00a651";
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
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
