"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Country {
  id: string | number;
  name: string;
  phonecode: string;
}

interface StateItem {
  id: string | number;
  name: string;
}

interface CityItem {
  id: string | number;
  name: string;
}

const DEFAULT_COUNTRIES: Country[] = [
  { id: "101", name: "India", phonecode: "+91" },
  { id: "231", name: "United States", phonecode: "+1" },
  { id: "230", name: "United Kingdom", phonecode: "+44" },
  { id: "13", name: "Australia", phonecode: "+61" },
  { id: "38", name: "Canada", phonecode: "+1" },
  { id: "229", name: "United Arab Emirates", phonecode: "+971" },
  { id: "196", name: "Singapore", phonecode: "+65" },
];

const DEFAULT_STATES: StateItem[] = [
  { id: "1", name: "Delhi" },
  { id: "2", name: "Maharashtra" },
  { id: "3", name: "Karnataka" },
  { id: "4", name: "Uttar Pradesh" },
  { id: "5", name: "Tamil Nadu" },
  { id: "6", name: "Haryana" },
  { id: "7", name: "West Bengal" },
  { id: "8", name: "Gujarat" },
  { id: "9", name: "Telangana" },
  { id: "10", name: "Kerala" },
  { id: "other", name: "Other" },
];

const DEFAULT_CITIES: CityItem[] = [
  { id: "1", name: "New Delhi" },
  { id: "2", name: "Mumbai" },
  { id: "3", name: "Bengaluru" },
  { id: "4", name: "Noida" },
  { id: "5", name: "Gurugram" },
  { id: "6", name: "Pune" },
  { id: "7", name: "Hyderabad" },
  { id: "8", name: "Chennai" },
  { id: "9", name: "Kolkata" },
  { id: "10", name: "Ahmedabad" },
  { id: "other", name: "Other" },
];

export default function EligibilityForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    mobile: "",
    state: "",
    city: "",
    age: "",
    gender: "",
    proBackground: "",
    hearabout: "",
    purposeGiveTest: "",
    terms: false,
  });

  const [countries, setCountries] = useState<Country[]>(DEFAULT_COUNTRIES);
  const [states, setStates] = useState<StateItem[]>(DEFAULT_STATES);
  const [cities, setCities] = useState<CityItem[]>(DEFAULT_CITIES);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch Countries on load
  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch("https://counselindia.com/api/countries");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setCountries(
              data.map((c: any) => ({
                id: String(c.id),
                name: c.name,
                phonecode: c.phonecode
                  ? c.phonecode.startsWith("+")
                    ? c.phonecode
                    : `+${c.phonecode}`
                  : "",
              })),
            );
          }
        }
      } catch (err) {
        // Fallback
      }
    }
    fetchCountries();
  }, []);

  // Fetch States when Country changes
  useEffect(() => {
    if (!formData.country) {
      setStates(DEFAULT_STATES);
      return;
    }

    async function fetchStates() {
      try {
        const res = await fetch(
          `https://counselindia.com/api/countries/${formData.country}/states`,
        );
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const list = data.map((s: any) => ({
              id: String(s.id),
              name: s.name,
            }));
            list.push({ id: "other", name: "Other" });
            setStates(list);
          } else {
            setStates(DEFAULT_STATES);
          }
        } else {
          setStates(DEFAULT_STATES);
        }
      } catch (err) {
        setStates(DEFAULT_STATES);
      }
    }
    fetchStates();
  }, [formData.country]);

  // Fetch Cities when State changes
  useEffect(() => {
    if (!formData.state || formData.state === "other") {
      setCities(DEFAULT_CITIES);
      return;
    }

    async function fetchCities() {
      try {
        const res = await fetch(
          `https://counselindia.com/api/states/${formData.state}/cities`,
        );
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const list = data.map((c: any) => ({
              id: String(c.id),
              name: c.name,
            }));
            list.push({ id: "other", name: "Other" });
            setCities(list);
          } else {
            setCities(DEFAULT_CITIES);
          }
        } else {
          setCities(DEFAULT_CITIES);
        }
      } catch (err) {
        setCities(DEFAULT_CITIES);
      }
    }
    fetchCities();
  }, [formData.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim()) {
      setErrorMessage("Please fill out this field");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    if (!formData.mobile.trim() || formData.mobile.length < 8) {
      setErrorMessage("Please enter a valid mobile number");
      return;
    }

    if (!formData.terms) {
      setErrorMessage(
        "Please accept the Terms & Conditions and Privacy Policy.",
      );
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 700);
  };

  return (
    <div className="contact-form pb-5 mb-5 bg-white">
      <div className="container custom-container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-11 col-12">
            <div
              className="bg-white p-4 p-md-5 form-outer-box"
              style={{
                border: "0.8px solid #000000",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Form Title in Bold Sans-Serif Typography */}
              <h3
                className="text-center mb-4 pb-2 countdown-register__title"
                style={{
                  fontSize: "25px",
                  fontWeight: 800,
                  fontFamily:
                    "Inter, 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                  color: "#1e2532",
                  letterSpacing: "-0.5px",
                }}
              >
                Fill Out Form
              </h3>

              {submitSuccess ? (
                <div className="text-center py-5">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: "#dcfce7",
                      color: "#07a64b",
                      fontSize: "28px",
                    }}
                  >
                    ✓
                  </div>
                  <h4 className="fw-bold text-dark mb-2">
                    Form Submitted Successfully!
                  </h4>
                  <p className="text-muted mb-4 font-size-14">
                    Redirecting to the assessment questions...
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="btn btn-outline-success px-4 py-2"
                  >
                    Submit Another Response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {errorMessage && (
                    <div className="alert alert-danger py-2 px-3 font-size-13 mb-4">
                      {errorMessage}
                    </div>
                  )}

                  <div className="row g-3">
                    {/* Row 1: Left - Name (with User Icon) */}
                    <div className="col-md-6">
                      <div className="input-field-wrapper position-relative">
                        <svg
                          className="field-icon position-absolute"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#64748b"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Your Full Name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    {/* Row 1: Right - Email (with Mail Icon) */}
                    <div className="col-md-6">
                      <div className="input-field-wrapper position-relative">
                        <svg
                          className="field-icon position-absolute"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#64748b"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <input
                          type="email"
                          className="form-control custom-input"
                          placeholder="Your Email Address"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    {/* Row 2: Left - Country Dropdown */}
                    <div className="col-md-6">
                      <div className="input-field-wrapper position-relative">
                        <select
                          className="form-select custom-select"
                          value={formData.country}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              country: e.target.value,
                              state: "",
                              city: "",
                            })
                          }
                          required
                        >
                          <option value="">Please Select Country</option>
                          {countries.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 2: Right - Mobile Number (with Phone Icon) */}
                    <div className="col-md-6">
                      <div className="input-field-wrapper position-relative">
                        <svg
                          className="field-icon position-absolute"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#64748b"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            width="14"
                            height="20"
                            x="5"
                            y="2"
                            rx="2"
                            ry="2"
                          />
                          <path d="M12 18h.01" />
                        </svg>
                        <input
                          type="tel"
                          className="form-control custom-input"
                          placeholder="Your Mobile Number"
                          value={formData.mobile}
                          onChange={(e) =>
                            setFormData({ ...formData, mobile: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    {/* Row 3: Left - State Dropdown */}
                    <div className="col-md-6">
                      <div className="input-field-wrapper position-relative">
                        <select
                          className="form-select custom-select"
                          value={formData.state}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              state: e.target.value,
                              city: "",
                            })
                          }
                          required
                        >
                          <option value="">Please Select State</option>
                          {states.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Right - City Dropdown */}
                    <div className="col-md-6">
                      <div className="input-field-wrapper position-relative">
                        <select
                          className="form-select custom-select"
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          required
                        >
                          <option value="">Please Select City</option>
                          {cities.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Left - Age (with Calendar Icon) */}
                    <div className="col-md-6">
                      <div className="input-field-wrapper position-relative">
                        <svg
                          className="field-icon position-absolute"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#64748b"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="4"
                            rx="2"
                            ry="2"
                          />
                          <line x1="16" x2="16" y1="2" y2="6" />
                          <line x1="8" x2="8" y1="2" y2="6" />
                          <line x1="3" x2="21" y1="10" y2="10" />
                        </svg>
                        <input
                          type="number"
                          className="form-control custom-input"
                          placeholder="Your Age"
                          min={10}
                          max={100}
                          value={formData.age}
                          onChange={(e) =>
                            setFormData({ ...formData, age: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    {/* Row 4: Right - Gender Radio Options */}
                    <div className="col-md-6 d-flex align-items-center">
                      <div className="d-flex align-items-center gap-4 w-100 ps-2">
                        {["Male", "Female", "Other"].map((g) => (
                          <label
                            key={g}
                            className="d-flex align-items-center gap-2 cursor-pointer font-size-14 text-dark m-0"
                          >
                            <input
                              type="radio"
                              name="gender"
                              value={g}
                              checked={formData.gender === g}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  gender: e.target.value,
                                })
                              }
                              required
                            />
                            {g}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Row 5: Left - Professional Background (with Tie Icon) */}
                    <div className="col-md-6">
                      <div className="input-field-wrapper position-relative">
                        <svg
                          className="field-icon position-absolute"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#64748b"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Professional Background"
                          value={formData.proBackground}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              proBackground: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>

                    {/* Row 5: Right - How did you hear about us Dropdown */}
                    <div className="col-md-6">
                      <div className="input-field-wrapper position-relative">
                        <select
                          className="form-select custom-select"
                          value={formData.hearabout}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              hearabout: e.target.value,
                            })
                          }
                          required
                        >
                          <option value="">How did you hear about us.</option>
                          <option value="Google">Google</option>
                          <option value="Facebook">Facebook</option>
                          <option value="Instagram">Instagram</option>
                          <option value="LinkedIn">LinkedIn</option>
                          <option value="Blogs">Blogs</option>
                          <option value="Email">Email</option>
                          <option value="Whatsapp">Whatsapp</option>
                          <option value="reference">Reference</option>
                          <option value="YouTube">YouTube</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 6: Full Width - Purpose to give Test (with Help Icon) */}
                    <div className="col-12">
                      <div className="input-field-wrapper position-relative">
                        <svg
                          className="field-icon position-absolute"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#64748b"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <line x1="12" x2="12.01" y1="17" y2="17" />
                        </svg>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Purpose to give Test"
                          value={formData.purposeGiveTest}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              purposeGiveTest: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>

                    {/* Terms & Privacy Checkbox */}
                    <div className="col-12 pt-2">
                      <div className="form-check d-flex align-items-start gap-2 ps-0">
                        <input
                          type="checkbox"
                          id="eligibilityTerms"
                          className="form-check-input mt-1"
                          checked={formData.terms}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              terms: e.target.checked,
                            })
                          }
                          style={{
                            width: "16px",
                            height: "16px",
                            borderColor: "#07a64b",
                            cursor: "pointer",
                          }}
                          required
                        />
                        <label
                          htmlFor="eligibilityTerms"
                          className="font-size-13 text-dark cursor-pointer mb-0"
                          style={{ lineHeight: "1.5" }}
                        >
                          By submitting this form, I agree to Counsel India's{" "}
                          <Link
                            href="/terms-and-conditions"
                            style={{ color: "#07a64b", textDecoration: "none" }}
                            target="_blank"
                          >
                            Terms &amp; Conditions
                          </Link>{" "}
                          and{" "}
                          <Link
                            href="/privacy-policy"
                            style={{ color: "#07a64b", textDecoration: "none" }}
                            target="_blank"
                          >
                            Privacy Policy
                          </Link>
                          .<span className="text-danger"> *</span>
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 text-center mt-4 pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn submit-btn"
                        style={{
                          backgroundColor: "#00a651",
                          color: "#ffffff",
                          border: "1.2px solid #000000",
                          borderRadius: "10px",
                          fontWeight: 800,
                          fontSize: "20px",
                          padding: "12px 64px",
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.28)",
                          minWidth: "190px",
                          lineHeight: "1.2",
                          transition: "all 0.2s ease",
                        }}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-input,
        .custom-select {
          border: 0.8px solid black !important;
          border-radius: 5px !important;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3) !important;
          height: 48px !important;
          font-size: 14px !important;
          color: #1e293b !important;
          background-color: #ffffff !important;
        }

        .custom-input {
          padding-left: 42px !important;
        }

        .custom-select {
          padding-left: 14px !important;
        }

        .custom-input::placeholder {
          color: #64748b !important;
          font-size: 14px !important;
        }

        .field-icon {
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          pointer-events: none;
        }

        .submit-btn:hover {
          background-color: #05823a !important;
        }
      `}</style>
    </div>
  );
}
