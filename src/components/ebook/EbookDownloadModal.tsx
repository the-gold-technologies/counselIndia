"use client";
import React, { useState } from "react";
import Link from "next/link";
import { EbookItem } from "./EbookCard";
import { submitLead } from "@/services/leadService";
import { ALL_INDIAN_STATES, getCitiesForState } from "@/data/indianLocations";

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

  const cleanFilename = (ebook.name || "Ebook")
    .replace(/[^a-zA-Z0-9\s_-]/g, "")
    .trim()
    .replace(/\s+/g, "_");

  const availableCities = getCitiesForState(formData.state);

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

    if (!formData.country) {
      setErrorMessage("Please select your country.");
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
    try {
      await submitLead({
        category: "ebook",
        name: formData.name.trim(),
        email: formData.email.trim(),
        mobile: formData.mobile.trim(),
        countryCode: formData.country,
        state: formData.state,
        city: formData.city,
        hearFrom: formData.hearAbout,
        courseType: ebook.category || "Psychology",
        courseName: ebook.name,
        content: ebook.name,
        medium: "Website Ebook Modal",
        source: `Ebook: ${ebook.name}`,
        extraData: {
          ebookId: ebook.id,
          ebookName: ebook.name,
          courseType: ebook.category,
        },
      });

      // Automatically trigger real PDF download
      const downloadEndpoint = `/api/download-ebook?name=${encodeURIComponent(ebook.name)}${ebook.downloadUrl ? `&url=${encodeURIComponent(ebook.downloadUrl)}` : ""}`;

      const dlLink = document.createElement("a");
      dlLink.href = downloadEndpoint;
      dlLink.download = `${cleanFilename}.pdf`;
      document.body.appendChild(dlLink);
      dlLink.click();
      document.body.removeChild(dlLink);

      setIsSuccess(true);
    } catch (err) {
      console.error("Failed to submit lead or trigger download:", err);
      setErrorMessage("Something went wrong while processing your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.4)",
    border: "0.8px solid black",
    borderRadius: "5px",
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
    fontSize: "14.5px",
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
        if (e.target === e.currentTarget) handleCloseAll();
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          border: isSuccess ? "none" : "1px solid black",
          borderRadius: isSuccess ? "16px" : "10px",
          boxShadow: isSuccess
            ? "0px 15px 40px rgba(0, 0, 0, 0.2)"
            : "0px 10px 25px rgba(0, 0, 0, 0.35)",
          maxWidth: isSuccess ? "960px" : "480px",
          width: "100%",
          maxHeight: "92vh",
          overflowY: "auto",
          padding: isSuccess ? "45px 40px" : "36px 30px 32px",
          position: "relative",
          boxSizing: "border-box",
          animation: "modalSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          transition: "max-width 0.3s ease, padding 0.3s ease",
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
                Select Country With Country Code
                <span style={{ color: "#ef4444" }}>*</span>
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
                inputMode="numeric"
                pattern="[6-9][0-9]{9}"
                required
                value={formData.mobile}
                onChange={(e) => {
                  const cleaned = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setFormData({ ...formData, mobile: cleaned });
                  if (errorMessage) setErrorMessage("");
                }}
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
                style={{
                  ...inputStyle,
                  cursor: "pointer",
                  color: formData.state ? "#212529" : "#6c757d",
                }}
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

            {/* 6. Select City */}
            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>
                Select City<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <select
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                style={{
                  ...inputStyle,
                  cursor: "pointer",
                  color: formData.city ? "#212529" : "#6c757d",
                }}
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

            {/* 7. How Did You Hear About Us */}
            <div style={{ marginBottom: "18px" }}>
              <label style={labelStyle}>
                How Did You Hear About Us.
                <span style={{ color: "#ef4444" }}>*</span>
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
                  style={{
                    color: "#00a651",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  Terms &amp; Conditions
                </a>{" "}
                and{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  style={{
                    color: "#00a651",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
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
                  style={{
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                    accentColor: "#00a651",
                  }}
                />
                <span>I&apos;m not a robot</span>
              </label>

              <div style={{ textAlign: "center" }}>
                <img
                  src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                  alt="reCAPTCHA"
                  style={{
                    width: "26px",
                    height: "26px",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <span
                  style={{
                    fontSize: "9px",
                    color: "#6b7280",
                    display: "block",
                  }}
                >
                  reCAPTCHA
                </span>
              </div>
            </div>

            {/* 10. Left-Aligned Green Submit Button */}
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
        ) : (
          /* Thank You Confirmation Screen matching User Reference UI */
          <div className="container-fluid p-0">
            <div className="row align-items-center g-4">
              {/* Left Column: Counselor Call Support Illustration */}
              <div className="col-lg-5 col-md-5 text-center">
                <img
                  src="/assets/images/thank-you-counselor.png"
                  alt="Counselor Support"
                  style={{
                    width: "100%",
                    maxWidth: "360px",
                    height: "auto",
                    display: "inline-block",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Right Column: Thank You Details & CTAs */}
              <div className="col-lg-7 col-md-7 ps-lg-4 text-start">
                <h2
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "36px",
                    fontWeight: 700,
                    color: "#1e293b",
                    marginBottom: "18px",
                    lineHeight: 1.2,
                  }}
                >
                  Thank You!
                </h2>

                <p
                  style={{
                    fontSize: "14.5px",
                    color: "#475569",
                    lineHeight: "1.7",
                    marginBottom: "14px",
                  }}
                >
                  Our counselor will contact you between 11:00 AM and 7:00 PM during working hours.
                </p>

                <p
                  style={{
                    fontSize: "14.5px",
                    color: "#475569",
                    lineHeight: "1.7",
                    marginBottom: "14px",
                  }}
                >
                  These are life-transforming conversations designed to support your personal growth
                  and development. We highly encourage you to attend the call.
                </p>

                <p
                  style={{
                    fontSize: "14.5px",
                    color: "#475569",
                    lineHeight: "1.7",
                    marginBottom: "28px",
                  }}
                >
                  If you are unavailable at the time of the call, kindly answer within 30 seconds
                  and inform the counselor of your preferred time for rescheduling.
                </p>

                {/* Two CTA Buttons */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  <Link
                    href="/"
                    onClick={handleCloseAll}
                    style={{
                      backgroundColor: "#00a651",
                      color: "#ffffff",
                      borderRadius: "6px",
                      padding: "13px 28px",
                      fontWeight: 600,
                      fontSize: "15px",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "none",
                      cursor: "pointer",
                      boxShadow: "0 2px 8px rgba(0, 166, 81, 0.25)",
                      transition: "background-color 0.2s ease",
                    }}
                  >
                    Go Back Home
                  </Link>

                  <a
                    href="https://chat.whatsapp.com/GVe7eiTWceVGcxmwz0hMqp"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      backgroundColor: "#00a651",
                      color: "#ffffff",
                      borderRadius: "6px",
                      padding: "13px 28px",
                      fontWeight: 600,
                      fontSize: "15px",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "none",
                      cursor: "pointer",
                      boxShadow: "0 2px 8px rgba(0, 166, 81, 0.25)",
                      transition: "background-color 0.2s ease",
                    }}
                  >
                    Join Whatsapp
                  </a>
                </div>

                {/* Re-download helper */}
                <p
                  style={{
                    fontSize: "12.5px",
                    color: "#94a3b8",
                    marginTop: "18px",
                    marginBottom: 0,
                  }}
                >
                  E-book download started automatically. If it didn&apos;t start,{" "}
                  <a
                    href={`/api/download-ebook?name=${encodeURIComponent(ebook.name)}${ebook.downloadUrl ? `&url=${encodeURIComponent(ebook.downloadUrl)}` : ""}`}
                    download={`${cleanFilename}.pdf`}
                    style={{ color: "#00a651", fontWeight: 600, textDecoration: "underline" }}
                  >
                    click here to re-download
                  </a>
                  .
                </p>
              </div>
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
