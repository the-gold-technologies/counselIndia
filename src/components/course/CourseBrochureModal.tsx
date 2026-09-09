"use client";
import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName?: string;
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

export default function CourseBrochureModal({ isOpen, onClose }: ModalProps) {
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
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "5px",
          border: "0.8px solid black",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          width: "100%",
          maxWidth: "490px",
          position: "relative",
          maxHeight: "92vh",
          overflowY: "auto",
          fontFamily: "'Poppins', sans-serif",
          padding: "26px 26px 30px",
          boxSizing: "border-box",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "12px",
            right: "14px",
            background: "none",
            border: "none",
            fontSize: "22px",
            fontWeight: 400,
            cursor: "pointer",
            color: "#000000",
            lineHeight: 1,
            padding: "4px 8px",
            zIndex: 10,
          }}
          aria-label="Close modal"
        >
          ✕
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "40px 15px", color: "#07a64b" }}>
            <div style={{ fontSize: "48px", marginBottom: "12px" }}>✓</div>
            <h4 style={{ margin: "0 0 8px", fontSize: "20px", color: "#212529", fontWeight: 700 }}>Thank You!</h4>
            <p style={{ margin: 0, fontSize: "14px", color: "#6c757d" }}>
              Your brochure has been sent to your email &amp; mobile.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
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
                <option value="" disabled>
                  Please Select Country
                </option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c} style={{ color: "#212529" }}>
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
                Select State<span style={{ color: "#ef4444" }}>*</span>
              </label>
              <select
                required
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                style={{
                  ...inputStyle,
                  cursor: "pointer",
                  color: formData.state ? "#212529" : "#6c757d",
                }}
              >
                <option value="" disabled hidden>
                  Please Select State
                </option>
                <option value="" disabled>
                  Please Select State
                </option>
                {INDIAN_STATES.map((s) => (
                  <option key={s} value={s} style={{ color: "#212529" }}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Select City */}
            <div>
              <label style={labelStyle}>
                Select City<span style={{ color: "#ef4444" }}>*</span>
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

            {/* How Did You Hear About Us. */}
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
                <option value="" disabled>
                  Please Select
                </option>
                <option value="Google" style={{ color: "#212529" }}>Google</option>
                <option value="Facebook" style={{ color: "#212529" }}>Facebook</option>
                <option value="Instagram" style={{ color: "#212529" }}>Instagram</option>
                <option value="LinkedIn" style={{ color: "#212529" }}>LinkedIn</option>
                <option value="Blogs" style={{ color: "#212529" }}>Blogs</option>
                <option value="Email" style={{ color: "#212529" }}>Email</option>
                <option value="Whatsapp" style={{ color: "#212529" }}>Whatsapp</option>
                <option value="Reference" style={{ color: "#212529" }}>Reference</option>
                <option value="YouTube" style={{ color: "#212529" }}>YouTube</option>
              </select>
            </div>

            {/* Terms and conditions */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginTop: "2px" }}>
              <input
                type="checkbox"
                id="brochureTerms"
                checked={formData.terms}
                onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                required
                style={{
                  marginTop: "3px",
                  width: "16px",
                  height: "16px",
                  accentColor: "#07a64b",
                  flexShrink: 0,
                  cursor: "pointer",
                }}
              />
              <label
                htmlFor="brochureTerms"
                style={{
                  fontSize: "13.5px",
                  color: "#212529",
                  lineHeight: "1.45",
                  cursor: "pointer",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                By submitting this form, I agree to Counsel India&apos;s{" "}
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
                style={{
                  backgroundColor: "#07a64b",
                  color: "#ffffff",
                  border: "0.8px solid black",
                  borderRadius: "5px",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                  padding: "10px 32px",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "'Poppins', sans-serif",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#068f40")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#07a64b")}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
