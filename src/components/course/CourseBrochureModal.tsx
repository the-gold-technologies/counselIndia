"use client";
import React, { useState } from "react";
import Link from "next/link";
import { submitLead } from "@/services/leadService";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { getCitiesForState } from "@/data/indianLocations";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName?: string;
  courseCategory?: string;
  brochureUrl?: string;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: "46px",
  padding: "0 14px",
  borderRadius: "5px",
  border: "0.8px solid black",
  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
  fontSize: "14px",
  color: "#212529",
  backgroundColor: "#ffffff",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "'Poppins', sans-serif",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "14px",
  fontWeight: 500,
  color: "#212529",
  marginBottom: "6px",
  fontFamily: "'Poppins', sans-serif",
};

const COUNTRIES = [
  "India (+91)",
  "United States (+1)",
  "United Kingdom (+44)",
  "United Arab Emirates (+971)",
  "Canada (+1)",
  "Australia (+61)",
  "Singapore (+65)",
  "Malaysia (+60)",
  "Germany (+49)",
  "New Zealand (+64)",
  "Saudi Arabia (+966)",
  "Qatar (+974)",
  "Oman (+968)",
  "Kuwait (+965)",
  "Other",
];

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Chandigarh",
  "Delhi",
  "Jammu & Kashmir",
  "Ladakh",
  "Puducherry",
];

export default function CourseBrochureModal({
  isOpen,
  onClose,
  courseName,
  courseCategory,
  brochureUrl,
}: ModalProps) {
  const { settings } = useSiteSettings();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "India (+91)",
    mobile: "",
    state: "",
    city: "",
    hearAbout: "",
    terms: false,
  });

  const availableCities = getCitiesForState(formData.state);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const inquiryPhone = settings.inquiryNumber || settings.helplineNumber || "8031320449";
  const rawWa = settings.whatsNumber || "8448519298";
  const cleanDigits = rawWa.replace(/[^\d]/g, "");
  const whatsappTarget = cleanDigits.length === 10 ? `91${cleanDigits}` : cleanDigits;

  const handleClose = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setErrorMsg(null);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMobile = formData.mobile.trim();

    if (!trimmedName) {
      setErrorMsg("Please enter your name.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMsg("Please enter a valid email address (e.g. name@example.com).");
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(trimmedMobile)) {
      setErrorMsg("Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.");
      return;
    }

    if (!formData.country) {
      setErrorMsg("Please select your country.");
      return;
    }

    if (!formData.state) {
      setErrorMsg("Please select your state.");
      return;
    }

    if (!formData.city) {
      setErrorMsg("Please select your city.");
      return;
    }

    setIsSubmitting(true);

    const activeCourseName = courseName || "General Course Enquiry";
    const activeCourseType = courseCategory || "Master's Program";

    try {
      await submitLead({
        category: "courses-enquiry",
        name: trimmedName,
        email: trimmedEmail,
        mobile: `${formData.country ? `(${formData.country}) ` : ""}${trimmedMobile}`.trim(),
        countryCode: formData.country,
        state: formData.state,
        city: formData.city,
        courseType: activeCourseType,
        courseName: activeCourseName,
        hearFrom: formData.hearAbout,
        medium: "Website Course Brochure",
        source: `Course Brochure (${formData.city ? `${formData.city}, ` : ""}${formData.state || "Website"})`,
        extraData: {
          courseName: activeCourseName,
          courseType: activeCourseType,
          brochureUrl: brochureUrl || "",
        },
      });

      // Automatically trigger real PDF download
      const cleanFilename = activeCourseName
        .replace(/[^a-zA-Z0-9\s_-]/g, "")
        .trim()
        .replace(/\s+/g, "_");

      const downloadEndpoint = `/api/download-brochure?name=${encodeURIComponent(activeCourseName)}${
        brochureUrl ? `&url=${encodeURIComponent(brochureUrl)}` : ""
      }`;

      const dlLink = document.createElement("a");
      dlLink.href = downloadEndpoint;
      dlLink.download = `${cleanFilename}_Brochure.pdf`;
      document.body.appendChild(dlLink);
      dlLink.click();
      document.body.removeChild(dlLink);

      setSubmitted(true);
    } catch (err: any) {
      console.error("Course lead submission error:", err);
      setErrorMsg("Failed to submit inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.65)",
        backdropFilter: "blur(4px)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        overflowY: "auto",
      }}
      onClick={handleClose}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: submitted ? "16px" : "10px",
          border: submitted ? "none" : "1px solid #1e293b",
          boxShadow: submitted
            ? "0px 20px 50px rgba(0, 0, 0, 0.25)"
            : "0px 10px 30px rgba(0, 0, 0, 0.4)",
          width: "100%",
          maxWidth: submitted ? "960px" : "490px",
          position: "relative",
          maxHeight: "92vh",
          overflowY: "auto",
          fontFamily: "'Poppins', sans-serif",
          padding: submitted ? "48px 42px" : "28px 28px 32px",
          boxSizing: "border-box",
          transition: "max-width 0.3s ease, padding 0.3s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "14px",
            right: "16px",
            background: "#f1f5f9",
            border: "none",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            fontSize: "16px",
            fontWeight: 500,
            cursor: "pointer",
            color: "#64748b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
            zIndex: 10,
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#fee2e2";
            e.currentTarget.style.color = "#ef4444";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f1f5f9";
            e.currentTarget.style.color = "#64748b";
          }}
          aria-label="Close modal"
        >
          ✕
        </button>

        {submitted ? (
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
                    maxWidth: "380px",
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
                    fontSize: "38px",
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

                {/* Two Action Buttons: Talk to Us Now & Join Whatsapp */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  <a
                    href={`tel:${inquiryPhone}`}
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
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#008f45")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00a651")}
                  >
                    Talk to Us Now
                  </a>

                  <a
                    href={`https://api.whatsapp.com/send?phone=${whatsappTarget}&text=${encodeURIComponent(
                      `Hi, I have downloaded the brochure for ${courseName || "your course"}. I would like more information.`
                    )}`}
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
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#008f45")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00a651")}
                  >
                    Join Whatsapp
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {errorMsg && (
              <div
                style={{
                  backgroundColor: "#fee2e2",
                  color: "#b91c1c",
                  padding: "10px 14px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                {errorMsg}
              </div>
            )}

            {/* Full Name */}
            <div>
              <label style={labelStyle}>
                Full Name<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Your Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ ...inputStyle, boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)" }}
              />
            </div>

            {/* Email */}
            <div>
              <label style={labelStyle}>
                Email<span style={{ color: "#ef4444" }}>*</span>
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
                Select Country With Country Code<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <select
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                style={{
                  ...inputStyle,
                  cursor: "pointer",
                  color: formData.country ? "#212529" : "#6c757d",
                }}
              >
                <option value="" disabled hidden>
                  Please Select Country
                </option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile No. */}
            <div>
              <label style={labelStyle}>
                Mobile No.<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="tel"
                required
                maxLength={10}
                inputMode="numeric"
                pattern="[6-9][0-9]{9}"
                placeholder="Your Mobile Number"
                value={formData.mobile}
                onChange={(e) => {
                  const cleaned = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setFormData({ ...formData, mobile: cleaned });
                  if (errorMsg) setErrorMsg(null);
                }}
                style={inputStyle}
              />
            </div>

            {/* Select State */}
            <div>
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
                {INDIAN_STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
                <option value="Other / Outside India">Other / Outside India</option>
              </select>
            </div>

            {/* Select City */}
            <div>
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
                {availableCities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* How Did You Hear About Us */}
            <div>
              <label style={labelStyle}>
                How Did You Hear About Us.<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <select
                required
                value={formData.hearAbout}
                onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                style={{
                  ...inputStyle,
                  cursor: "pointer",
                  color: formData.hearAbout ? "#212529" : "#6c757d",
                }}
              >
                <option value="" disabled hidden>
                  Please Select
                </option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Google Search">Google Search</option>
                <option value="YouTube">YouTube</option>
                <option value="Friend or Colleague">Friend or Colleague</option>
                <option value="University / College">University / College</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Terms and Privacy Checkbox */}
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginTop: "4px" }}
            >
              <input
                type="checkbox"
                id="brochure-terms"
                required
                checked={formData.terms}
                onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                style={{ marginTop: "3px", cursor: "pointer", accentColor: "#07a64b" }}
              />
              <label
                htmlFor="brochure-terms"
                style={{ fontSize: "13px", color: "#495057", lineHeight: "1.4", cursor: "pointer" }}
              >
                By submitting this form, I agree to Counsel India’s{" "}
                <a
                  href="/terms-and-conditions"
                  style={{ color: "#07a64b", textDecoration: "none" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms &amp; Conditions
                </a>{" "}
                and{" "}
                <a
                  href="/privacy-policy"
                  style={{ color: "#07a64b", textDecoration: "none" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy.
                </a>
                <span style={{ color: "#ef4444" }}>*</span>
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: "#07a64b",
                  color: "#ffffff",
                  border: "0.8px solid black",
                  borderRadius: "5px",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                  padding: "10px 32px",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  fontFamily: "'Poppins', sans-serif",
                  transition: "background-color 0.2s",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  lineHeight: "1",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#068f40")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#07a64b")}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
