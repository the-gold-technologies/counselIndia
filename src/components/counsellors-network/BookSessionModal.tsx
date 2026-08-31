"use client";
import React, { useState, useEffect } from "react";
import { CounselorItem } from "./data/counsellorsData";

interface ModalProps {
  counselor: CounselorItem | null;
  isOpen: boolean;
  onClose: () => void;
}

interface CountryOption {
  id: number | string;
  name: string;
  phonecode: string;
}

interface StateOption {
  id: number | string;
  name: string;
}

interface CityOption {
  id: number | string;
  name: string;
}

// Fallback Indian States
const DEFAULT_STATES: StateOption[] = [
  { id: 4017, name: "Andhra Pradesh" },
  { id: 4024, name: "Arunachal Pradesh" },
  { id: 4027, name: "Assam" },
  { id: 4030, name: "Bihar" },
  { id: 4031, name: "Chandigarh" },
  { id: 4040, name: "Chhattisgarh" },
  { id: 4008, name: "Delhi" },
  { id: 4009, name: "Goa" },
  { id: 4010, name: "Gujarat" },
  { id: 4011, name: "Haryana" },
  { id: 4012, name: "Himachal Pradesh" },
  { id: 4013, name: "Jammu and Kashmir" },
  { id: 4014, name: "Jharkhand" },
  { id: 4015, name: "Karnataka" },
  { id: 4016, name: "Kerala" },
  { id: 4018, name: "Madhya Pradesh" },
  { id: 4019, name: "Maharashtra" },
  { id: 4020, name: "Manipur" },
  { id: 4021, name: "Meghalaya" },
  { id: 4022, name: "Mizoram" },
  { id: 4025, name: "Nagaland" },
  { id: 4026, name: "Odisha" },
  { id: 4028, name: "Puducherry" },
  { id: 4029, name: "Punjab" },
  { id: 4032, name: "Rajasthan" },
  { id: 4033, name: "Sikkim" },
  { id: 4034, name: "Tamil Nadu" },
  { id: 4035, name: "Telangana" },
  { id: 4036, name: "Tripura" },
  { id: 4037, name: "Uttar Pradesh" },
  { id: 4038, name: "Uttarakhand" },
  { id: 4039, name: "West Bengal" },
  { id: "other", name: "Other" },
];

const DEFAULT_COUNTRIES: CountryOption[] = [
  { id: 101, name: "India", phonecode: "+91" },
  { id: 231, name: "United States", phonecode: "+1" },
  { id: 232, name: "United Kingdom", phonecode: "+44" },
  { id: 233, name: "United Arab Emirates", phonecode: "+971" },
  { id: 234, name: "Canada", phonecode: "+1" },
  { id: 235, name: "Australia", phonecode: "+61" },
  { id: 236, name: "Germany", phonecode: "+49" },
  { id: 237, name: "Singapore", phonecode: "+65" },
  { id: 238, name: "Saudi Arabia", phonecode: "+966" },
  { id: 239, name: "Qatar", phonecode: "+974" },
  { id: 240, name: "Oman", phonecode: "+968" },
  { id: 241, name: "Kuwait", phonecode: "+965" },
  { id: 242, name: "New Zealand", phonecode: "+64" },
];

export default function BookSessionModal({ counselor, isOpen, onClose }: ModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "101",
    mobile: "",
    state: "",
    city: "",
    hearAboutUs: "",
    agreed: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic dropdown lists
  const [countries, setCountries] = useState<CountryOption[]>(DEFAULT_COUNTRIES);
  const [states, setStates] = useState<StateOption[]>(DEFAULT_STATES);
  const [cities, setCities] = useState<CityOption[]>([]);
  const [isLoadingStates, setIsLoadingStates] = useState(false);
  const [isLoadingCities, setIsLoadingCities] = useState(false);

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
                id: c.id,
                name: c.name,
                phonecode: c.phonecode ? (c.phonecode.startsWith("+") ? c.phonecode : `+${c.phonecode}`) : "",
              }))
            );
          }
        }
      } catch (err) {
        // Use default fallback
      }
    }
    fetchCountries();
  }, []);

  // Fetch States when Country changes
  useEffect(() => {
    if (!formData.country) {
      setStates([]);
      setCities([]);
      return;
    }

    async function fetchStates() {
      setIsLoadingStates(true);
      try {
        const res = await fetch(`https://counselindia.com/api/countries/${formData.country}/states`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const fetchedStates = data.map((s: any) => ({ id: s.id, name: s.name }));
            fetchedStates.push({ id: "other", name: "Other" });
            setStates(fetchedStates);
          } else {
            setStates(DEFAULT_STATES);
          }
        } else {
          setStates(DEFAULT_STATES);
        }
      } catch (err) {
        setStates(DEFAULT_STATES);
      } finally {
        setIsLoadingStates(false);
      }
    }

    fetchStates();
  }, [formData.country]);

  // Fetch Cities when State changes
  useEffect(() => {
    if (!formData.state || formData.state === "other") {
      setCities([]);
      return;
    }

    async function fetchCities() {
      setIsLoadingCities(true);
      try {
        const res = await fetch(`https://counselindia.com/api/states/${formData.state}/city`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const fetchedCities = data.map((c: any) => ({ id: c.id, name: c.name }));
            fetchedCities.push({ id: "other", name: "Other" });
            setCities(fetchedCities);
          } else {
            setCities([{ id: "other", name: "Other" }]);
          }
        } else {
          setCities([{ id: "other", name: "Other" }]);
        }
      } catch (err) {
        setCities([{ id: "other", name: "Other" }]);
      } finally {
        setIsLoadingCities(false);
      }
    }

    fetchCities();
  }, [formData.state]);

  if (!isOpen || !counselor) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      country: "101",
      mobile: "",
      state: "",
      city: "",
      hearAboutUs: "",
      agreed: false,
    });
    onClose();
  };

  const inputStyle: React.CSSProperties = {
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.2)",
    border: "1px solid #1e293b",
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "14.5px",
    width: "100%",
    height: "46px",
    color: "#1e293b",
    backgroundColor: "#ffffff",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "14.5px",
    fontWeight: 600,
    color: "#1e293b",
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
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 15px",
        overflow: "hidden",
        animation: "modalFadeIn 0.25s ease-out forwards",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "14px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
          position: "relative",
          maxWidth: "520px",
          width: "100%",
          maxHeight: "80vh",
          overflowY: "auto",
          padding: "44px 28px 28px",
          boxSizing: "border-box",
          animation: "modalSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        {/* Close (✕) Button */}
        <button
          onClick={handleResetAndClose}
          style={{
            position: "absolute",
            top: "14px",
            right: "16px",
            zIndex: 20,
            background: "none",
            border: "none",
            fontSize: "22px",
            fontWeight: 700,
            color: "#1e293b",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "32px",
            height: "32px",
            padding: 0,
            margin: 0,
            lineHeight: 1,
          }}
          aria-label="Close"
        >
          ✕
        </button>

        <div>
          {isSubmitted ? (
            <div style={{ textAlign: "center", padding: "30px 10px" }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#07a64b",
                  color: "#ffffff",
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginBottom: "16px",
                }}
              >
                <i className="fas fa-check"></i>
              </div>
              <h4 style={{ fontWeight: 700, color: "#1e293b", marginBottom: "8px" }}>Booking Request Sent!</h4>
              <p style={{ color: "#64748b", fontSize: "14.5px", marginBottom: "20px" }}>
                Thank you, <strong>{formData.name}</strong>. Our team will reach out to you shortly.
              </p>
              <button
                onClick={handleResetAndClose}
                style={{
                  backgroundColor: "#07a64b",
                  color: "#ffffff",
                  borderRadius: "6px",
                  padding: "10px 28px",
                  border: "none",
                  fontWeight: 600,
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div style={{ marginBottom: "18px" }}>
                <label style={labelStyle}>
                  Full Name<span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={inputStyle}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: "18px" }}>
                <label style={labelStyle}>
                  Email<span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={inputStyle}
                />
              </div>

              {/* Select Country With Country Code */}
              <div style={{ marginBottom: "18px" }}>
                <label style={labelStyle}>
                  Select Country With Country Code<span style={{ color: "#ef4444" }}>*</span>
                </label>
                <select
                  required
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      country: e.target.value,
                      state: "",
                      city: "",
                    })
                  }
                  style={inputStyle}
                >
                  <option value="">Please Select Country</option>
                  {countries.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} {c.phonecode ? `(${c.phonecode})` : ""}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mobile No. */}
              <div style={{ marginBottom: "18px" }}>
                <label style={labelStyle}>
                  Mobile No.<span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Your Number"
                  required
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  style={inputStyle}
                />
              </div>

              {/* Select State */}
              <div style={{ marginBottom: "18px" }}>
                <label style={labelStyle}>
                  Select State<span style={{ color: "#ef4444" }}>*</span>
                </label>
                <select
                  required
                  value={formData.state}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      state: e.target.value,
                      city: "",
                    })
                  }
                  style={inputStyle}
                >
                  <option value="">
                    {isLoadingStates ? "Loading states..." : "Please Select State"}
                  </option>
                  {states.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select City */}
              <div style={{ marginBottom: "18px" }}>
                <label style={labelStyle}>
                  Select City<span style={{ color: "#ef4444" }}>*</span>
                </label>
                {cities.length > 0 ? (
                  <select
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="">
                      {isLoadingCities ? "Loading cities..." : "Please Select City"}
                    </option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    placeholder="Please Enter City"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    style={inputStyle}
                  />
                )}
              </div>

              {/* How Did You Hear About Us */}
              <div style={{ marginBottom: "20px" }}>
                <label style={labelStyle}>
                  How Did You Hear About Us.<span style={{ color: "#ef4444" }}>*</span>
                </label>
                <select
                  required
                  value={formData.hearAboutUs}
                  onChange={(e) => setFormData({ ...formData, hearAboutUs: e.target.value })}
                  style={inputStyle}
                >
                  <option value="">Please Select</option>
                  <option value="Google">Google</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Blogs">Blogs</option>
                  <option value="Email">Email</option>
                  <option value="Whatsapp">Whatsapp</option>
                  <option value="Reference">Reference</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Terms Checkbox */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "22px" }}>
                <input
                  type="checkbox"
                  id="agreeTerms"
                  required
                  checked={formData.agreed}
                  onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                  style={{
                    width: "18px",
                    height: "18px",
                    accentColor: "#07a64b",
                    marginTop: "2px",
                    flexShrink: 0,
                    cursor: "pointer",
                  }}
                />
                <label
                  htmlFor="agreeTerms"
                  style={{ fontSize: "14px", color: "#475569", cursor: "pointer", lineHeight: "1.5", margin: 0 }}
                >
                  By submitting this form, I agree to Counsel India&apos;s{" "}
                  <a href="/terms" style={{ color: "#07a64b", fontWeight: 600, textDecoration: "none" }}>
                    Terms &amp; Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" style={{ color: "#1e293b", fontWeight: 600, textDecoration: "none" }}>
                    Privacy Policy.
                  </a>
                  <span style={{ color: "#ef4444" }}> *</span>
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#07a64b",
                    color: "#ffffff",
                    borderRadius: "6px",
                    padding: "0 38px",
                    height: "46px",
                    fontSize: "16px",
                    fontWeight: 600,
                    border: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    margin: 0,
                    boxShadow: "0 4px 12px rgba(7, 166, 75, 0.25)",
                    transition: "background-color 0.2s ease",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          )}
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
