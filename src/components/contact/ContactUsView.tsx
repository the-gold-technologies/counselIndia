"use client";
import React, { useState } from "react";

const COUNTRIES = [
  { name: "Please Select Country", code: "" },
  { name: "India (+91)", code: "+91" },
  { name: "United States (+1)", code: "+1" },
  { name: "United Kingdom (+44)", code: "+44" },
  { name: "United Arab Emirates (+971)", code: "+971" },
  { name: "Canada (+1)", code: "+1" },
  { name: "Australia (+61)", code: "+61" },
  { name: "Singapore (+65)", code: "+65" },
  { name: "Malaysia (+60)", code: "+60" },
  { name: "Germany (+49)", code: "+49" },
  { name: "New Zealand (+64)", code: "+64" },
  { name: "Saudi Arabia (+966)", code: "+966" },
  { name: "Qatar (+974)", code: "+974" },
  { name: "Oman (+968)", code: "+968" },
  { name: "Kuwait (+965)", code: "+965" },
  { name: "Other", code: "" },
];

const INDIAN_STATES = [
  "Please Select State",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
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
  "Other",
];

const MAJOR_CITIES: Record<string, string[]> = {
  Delhi: ["New Delhi", "North Delhi", "South Delhi", "West Delhi", "East Delhi", "Other"],
  "Uttar Pradesh": ["Noida", "Greater Noida", "Ghaziabad", "Lucknow", "Kanpur", "Varanasi", "Agra", "Prayagraj", "Meerut", "Bareilly", "Other"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Navi Mumbai", "Other"],
  Karnataka: ["Bengaluru", "Mysuru", "Hubli", "Mangaluru", "Belagavi", "Other"],
  Haryana: ["Gurugram", "Faridabad", "Panipat", "Ambala", "Karnal", "Hisar", "Other"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Other"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Other"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Other"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner", "Ajmer", "Other"],
  Punjab: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Other"],
  Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Other"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Other"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Other"],
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: "50px",
  padding: "0 16px",
  border: "0.8px solid black",
  borderRadius: "5px",
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
  marginBottom: "8px",
  fontFamily: "'Poppins', sans-serif",
};

export default function ContactUsView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    mobile: "",
    state: "",
    city: "",
    hearabout: "",
    message: "",
    agree: false,
  });

  const [isMapOpen, setIsMapOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const citiesForState =
    formData.state && MAJOR_CITIES[formData.state]
      ? MAJOR_CITIES[formData.state]
      : ["Please Select City", "Other"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!formData.mobile.trim()) {
      setErrorMsg("Please enter your mobile number.");
      return;
    }
    if (!formData.agree) {
      setErrorMsg("You must agree to our Terms & Conditions and Privacy Policy.");
      return;
    }

    setErrorMsg("");
    setSubmitted(true);
  };

  return (
    <div className="main-wrapper" style={{ backgroundColor: "#ffffff" }}>
      {/* Page Banner Section Start */}
      <div
        className="page-banner bg-color-04"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "16px 0 28px",
          backgroundColor: "#f8f8f8",
        }}
      >
        <div className="page-banner__wrapper">
          <div className="page-banner__shape-01" />
          <div className="page-banner__shape-02" />
          <div className="page-banner__shape-03" />

          <div
            className="container custom-container"
            style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}
          >
            {/* Page Banner Caption Start */}
            <div className="page-banner__caption-02 text-center" style={{ padding: "8px 0 16px" }}>
              <h2
                className="page-banner__main-title-02"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "38px",
                  fontWeight: 700,
                  color: "#07a64b",
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Contact Us
              </h2>
            </div>
            {/* Page Banner Caption End */}
          </div>
        </div>
      </div>
      {/* Page Banner Section End */}

      {/* Hero Panoramic Image */}
      <div className="hero-img-contact-us" style={{ width: "100%", lineHeight: 0 }}>
        <img
          src="https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/media/CI_Full_team.png"
          alt="Counsel India Team"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {/* Contact Section Start */}
      <div className="contact-section" style={{ padding: "45px 0 70px" }}>
        <div
          className="container custom-container"
          style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}
        >
          {/* Section Heading & Subtitle */}
          <div
            className="contact-title text-center"
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            <h2
              className="contact-title__title"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "34px",
                fontWeight: 700,
                color: "#1e293b",
                marginBottom: "12px",
                lineHeight: 1.3,
              }}
            >
              We&apos;re always eager to hear from you!
            </h2>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 400,
                color: "#5d5d5d",
                fontFamily: "'Poppins', sans-serif",
                maxWidth: "780px",
                margin: "0 auto",
                lineHeight: "1.7",
              }}
            >
              If you have any questions or need help, please fill in the details below and our Success
              Manager will get in touch with you within 24 Hours.
            </p>
          </div>

          {/* Office Cards Grid (Left-aligned 50% width on desktop) */}
          <div className="main-container" style={{ marginBottom: "45px" }}>
            <div
              className="grid-container"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "flex-start",
              }}
            >
              {/* Noida Head Office Card */}
              <div
                className="card card--featured"
                style={{
                  width: "100%",
                  maxWidth: "560px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  overflow: "hidden",
                  backgroundColor: "#ffffff",
                  boxShadow: "none",
                }}
              >
                <div
                  className="card__side-by-side--m"
                  style={{
                    display: "flex",
                    flexFlow: "row wrap",
                    width: "100%",
                  }}
                >
                  <div
                    className="card__image"
                    style={{
                      height: "260px",
                      width: "220px",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src="https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/mastergalaxyimages/office_gate.webp?auto=compress&cs=tinysrgb&h=750&w=1260"
                      alt="Counsel India Noida Head Office"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>

                  <div
                    className="card__content"
                    style={{
                      padding: "20px 22px",
                      flex: "1 1 240px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <div className="card-body" style={{ padding: 0 }}>
                      <h5
                        className="card-title"
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          color: "#212529",
                          marginBottom: "12px",
                          fontFamily: "'Playfair Display', serif",
                          lineHeight: 1.3,
                        }}
                      >
                        <span style={{ color: "#07a64b" }}>Counselindia </span>: Noida Head Office
                      </h5>

                      <address style={{ fontStyle: "normal", marginBottom: "20px", lineHeight: "1.6" }}>
                        <p
                          className="card-text"
                          style={{
                            margin: 0,
                            fontSize: "14px",
                            color: "#4a5568",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          <span style={{ fontWeight: 700, color: "#363939" }}>Address:</span> Office no
                          12A20, Floor No-13, E-Square sector 96, Noida, Uttar Pradesh 201301
                        </p>
                      </address>

                      <p className="card-text" style={{ margin: 0 }}>
                        <button
                          type="button"
                          className="btn btn--block card__btn btn--map card__button"
                          onClick={() => setIsMapOpen(true)}
                          style={{
                            backgroundColor: "#07a64b",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "10px",
                            padding: "10px 26px",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            fontWeight: 600,
                            fontSize: "15px",
                            cursor: "pointer",
                            fontFamily: "'Poppins', sans-serif",
                            transition: "background-color 0.2s ease",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#068f40")}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#07a64b")}
                          aria-label="View Location on Google Maps"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          Google Map
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Box (Full Container Width matching PHP) */}
          <div
            className="contact-form section-padding-01 custom-border"
            style={{
              padding: "45px 50px",
              marginTop: "40px",
              marginBottom: "30px",
              border: "0.8px solid black",
              borderRadius: "5px",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
              backgroundColor: "#ffffff",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <div className="section-title text-center" style={{ textAlign: "center", marginBottom: "35px" }}>
              <h2
                className="section-title__title"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "30px",
                  fontWeight: 700,
                  color: "#1e293b",
                  lineHeight: 1.35,
                  margin: 0,
                }}
              >
                Fill the form below so we can get to know you and your needs better.
              </h2>
            </div>

            {submitted ? (
              <div
                style={{
                  padding: "30px",
                  backgroundColor: "#f0fdf4",
                  border: "1px solid #86efac",
                  borderRadius: "8px",
                  textAlign: "center",
                  color: "#166534",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>✓</div>
                <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "8px", color: "#166534" }}>
                  Thank you for reaching out!
                </h3>
                <p style={{ margin: 0, fontSize: "14px" }}>
                  Our Success Manager has received your details and will get in touch with you within 24
                  Hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      country: "",
                      mobile: "",
                      state: "",
                      city: "",
                      hearabout: "",
                      message: "",
                      agree: false,
                    });
                  }}
                  style={{
                    marginTop: "20px",
                    backgroundColor: "#07a64b",
                    color: "#ffffff",
                    padding: "10px 24px",
                    borderRadius: "5px",
                    border: "none",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {errorMsg && (
                  <div
                    style={{
                      padding: "12px 16px",
                      backgroundColor: "#fef2f2",
                      border: "1px solid #fca5a5",
                      color: "#b91c1c",
                      borderRadius: "5px",
                      marginBottom: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {errorMsg}
                  </div>
                )}

                <div
                  className="row gy-4"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "24px 30px",
                  }}
                >
                  {/* Name */}
                  <div>
                    <label style={labelStyle}>Enter Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      style={inputStyle}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle}>Enter Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={inputStyle}
                      placeholder="Email"
                      required
                    />
                  </div>

                  {/* Country with Code */}
                  <div>
                    <label style={labelStyle}>
                      Select Country With Country Code<span style={{ color: "red" }}>*</span>
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        color: formData.country ? "#212529" : "#6c757d",
                      }}
                      required
                    >
                      {COUNTRIES.map((c, idx) => (
                        <option key={idx} value={c.code || c.name} style={{ color: "#212529" }}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mobile */}
                  <div>
                    <label style={labelStyle}>
                      Enter Your Mobile<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      maxLength={12}
                      value={formData.mobile}
                      onChange={handleChange}
                      style={inputStyle}
                      placeholder="Contact Number"
                      required
                    />
                  </div>

                  {/* State */}
                  <div>
                    <label style={labelStyle}>
                      Select State<span style={{ color: "red" }}>*</span>
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        color: formData.state ? "#212529" : "#6c757d",
                      }}
                      required
                    >
                      {INDIAN_STATES.map((st, idx) => (
                        <option key={idx} value={idx === 0 ? "" : st} style={{ color: "#212529" }}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* City */}
                  <div>
                    <label style={labelStyle}>
                      Select City<span style={{ color: "red" }}>*</span>
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        color: formData.city ? "#212529" : "#6c757d",
                      }}
                      required
                    >
                      {citiesForState.map((ct, idx) => (
                        <option key={idx} value={idx === 0 ? "" : ct} style={{ color: "#212529" }}>
                          {ct}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* How did you hear about us */}
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label style={labelStyle}>
                      Select How You Hear About Us<span style={{ color: "red" }}>*</span>
                    </label>
                    <select
                      name="hearabout"
                      value={formData.hearabout}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        color: formData.hearabout ? "#212529" : "#6c757d",
                      }}
                      required
                    >
                      <option value="" style={{ color: "#6c757d" }}>
                        How did you hear about us.
                      </option>
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

                  {/* Message */}
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label style={labelStyle}>Enter Your Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Purpose of Enquiry"
                      style={{
                        ...inputStyle,
                        height: "110px",
                        padding: "12px 16px",
                        resize: "vertical",
                      }}
                      required
                    />
                  </div>

                  {/* Terms and Conditions Checkbox */}
                  <div style={{ gridColumn: "1 / -1", marginTop: "4px" }}>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "14px",
                        color: "#212529",
                        cursor: "pointer",
                        lineHeight: 1.5,
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        style={{
                          accentColor: "#07a64b",
                          width: "18px",
                          height: "18px",
                          cursor: "pointer",
                          borderRadius: "3px",
                          flexShrink: 0,
                        }}
                        required
                      />
                      <span>
                        By submitting this form, I agree to Counsel India&apos;s{" "}
                        <a
                          href="/terms-condition"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#07a64b", fontWeight: 500, textDecoration: "none" }}
                        >
                          Terms &amp; Conditions
                        </a>{" "}
                        and{" "}
                        <a
                          href="/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#07a64b", fontWeight: 500, textDecoration: "none" }}
                        >
                          Privacy Policy.
                        </a>{" "}
                        <span style={{ color: "red" }}>*</span>
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div style={{ gridColumn: "1 / -1", textAlign: "center", marginTop: "22px" }}>
                    <button
                      type="submit"
                      className="btn btn-primary btn-hover-secondary btn-submit"
                      style={{
                        backgroundColor: "#07a64b",
                        border: "0.8px solid black",
                        borderRadius: "5px",
                        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                        color: "#ffffff",
                        height: "50px",
                        lineHeight: 1,
                        padding: "0 55px",
                        fontSize: "18px",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Poppins', sans-serif",
                        transition: "all 0.25s ease",
                        boxSizing: "border-box",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#068f40";
                        e.currentTarget.style.color = "#ffffff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#07a64b";
                        e.currentTarget.style.color = "#ffffff";
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Google Maps Modal */}
      {isMapOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px 16px",
          }}
          onClick={() => setIsMapOpen(false)}
        >
          <div
            className="modal-content-g-map"
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "750px",
              backgroundColor: "#ffffff",
              padding: "12px",
              borderRadius: "8px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "4px 8px 10px",
              }}
            >
              <h4
                style={{
                  margin: 0,
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#212529",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Counsel India - Noida Head Office
              </h4>
              <button
                type="button"
                onClick={() => setIsMapOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "24px",
                  lineHeight: 1,
                  cursor: "pointer",
                  color: "#6b7280",
                }}
                aria-label="Close map"
              >
                &times;
              </button>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.937762264824!2d77.34641049999999!3d28.541263599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce79eca146be1%3A0x198f74774c6dbd0f!2sE%20SQUARE%2C%20C2%2C%20Sector%2096%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e1!3m2!1sen!2sin!4v1750312751822!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0, borderRadius: "6px", display: "block" }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
}
