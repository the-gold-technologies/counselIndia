"use client";
import React, { useState } from "react";
import Link from "next/link";

interface FormData {
  question: string;
  name: string;
  email: string;
  country: string;
  mobile: string;
  state: string;
  city: string;
  hearabout: string;
  agreeTerms: boolean;
}

const COUNTRIES = [
  { code: "+91", name: "India (+91)", id: "101" },
  { code: "+1", name: "United States (+1)", id: "231" },
  { code: "+44", name: "United Kingdom (+44)", id: "230" },
  { code: "+971", name: "United Arab Emirates (+971)", id: "229" },
  { code: "+61", name: "Australia (+61)", id: "13" },
  { code: "+1", name: "Canada (+1)", id: "38" },
  { code: "+65", name: "Singapore (+65)", id: "196" },
  { code: "+966", name: "Saudi Arabia (+966)", id: "191" },
  { code: "+974", name: "Qatar (+974)", id: "178" },
  { code: "+968", name: "Oman (+968)", id: "163" },
  { code: "+965", name: "Kuwait (+965)", id: "117" },
  { code: "+977", name: "Nepal (+977)", id: "153" },
  { code: "+880", name: "Bangladesh (+880)", id: "18" },
  { code: "+94", name: "Sri Lanka (+94)", id: "207" },
  { code: "+49", name: "Germany (+49)", id: "81" },
  { code: "+33", name: "France (+33)", id: "75" },
  { code: "+31", name: "Netherlands (+31)", id: "154" },
  { code: "+64", name: "New Zealand (+64)", id: "155" },
  { code: "+27", name: "South Africa (+27)", id: "201" },
  { code: "+60", name: "Malaysia (+60)", id: "131" },
];

const STATES = [
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
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol", "Other"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Other"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner", "Ajmer", "Other"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Other"],
  "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Other"],
  Punjab: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Other"],
  Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Other"],
  Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Other"],
};

export default function AskQuestionFormSection() {
  const [formData, setFormData] = useState<FormData>({
    question: "",
    name: "",
    email: "",
    country: "India (+91)",
    mobile: "",
    state: "",
    city: "",
    hearabout: "",
    agreeTerms: false,
  });

  const [customState, setCustomState] = useState("");
  const [customCity, setCustomCity] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableCities = formData.state ? MAJOR_CITIES[formData.state] || ["Other"] : [];

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.question.trim()) {
      newErrors.question = "Please enter your question.";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email Address.";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Please enter your mobile number.";
    } else if (
      formData.country.includes("+91") &&
      !/^\d{10}$/.test(formData.mobile.replace(/\D/g, ""))
    ) {
      newErrors.mobile = "Mobile number should have 10 digits.";
    }

    if (!formData.state) {
      newErrors.state = "Please select state.";
    }

    if (!formData.city && !customCity) {
      newErrors.city = "Please select city.";
    }

    if (!formData.hearabout) {
      newErrors.hearabout = "Please select how you heard about us.";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms =
        "You must agree to our Terms & Conditions and Privacy Policy.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (name === "state") {
        setFormData((prev) => ({ ...prev, city: "" }));
        setCustomCity("");
      }
    }

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      question: "",
      name: "",
      email: "",
      country: "India (+91)",
      mobile: "",
      state: "",
      city: "",
      hearabout: "",
      agreeTerms: false,
    });
    setCustomState("");
    setCustomCity("");
    setErrors({});
    setIsSubmitted(false);
  };

  const inputStyle: React.CSSProperties = {
    border: "0.8px solid black",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
    backgroundColor: "#ffffff",
  };

  return (
    <div className="contact-section">
      <div className="container custom-container">
        <div className="contact-form section-padding-01">
          {/* Contact Form Wrapper Start */}
          <div
            className="col-lg-8 col-md-8 col-sm-10 offset-lg-2"
            style={{
              border: "0.8px solid black",
              borderRadius: "5px",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
              padding: "5%",
              marginTop: "5%",
              marginBottom: "5%",
              backgroundColor: "#ffffff",
            }}
          >
            <div className="section-title text-center">
              <h2 className="section-title__title">
                Fill the form below so we can get to know you and your question
                better.
              </h2>
            </div>

            {isSubmitted ? (
              <div className="text-center py-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                  style={{
                    width: "72px",
                    height: "72px",
                    backgroundColor: "rgba(7, 166, 75, 0.1)",
                    color: "#07a64b",
                  }}
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h4 className="fw-bold mb-2" style={{ color: "#1e293b" }}>
                  Question Submitted Successfully!
                </h4>
                <p
                  className="text-muted mb-4"
                  style={{ maxWidth: "450px", margin: "0 auto" }}
                >
                  Thank you for reaching out. Our team of expert counselors will
                  review your question and reach out to you shortly.
                </p>
                <button
                  type="button"
                  className="btn btn-primary btn-hover-secondary px-4 py-2"
                  style={{
                    border: "0.8px solid black",
                    borderRadius: "5px",
                    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
                    backgroundColor: "#07a64b",
                    color: "#ffffff",
                  }}
                  onClick={handleReset}
                >
                  Ask Another Question
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate id="myFormAskQuestion">
                <div className="countdown-register__form_edit">
                  {/* Question */}
                  <div className="countdown-register__input">
                    <label htmlFor="question" className="form-label">
                      Question
                    </label>
                    <textarea
                      className={`form-control ${errors.question ? "is-invalid" : ""}`}
                      id="question"
                      name="question"
                      placeholder="Type your question here"
                      rows={4}
                      value={formData.question}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        minHeight: "120px",
                      }}
                      required
                    ></textarea>
                    {errors.question && (
                      <div className="text-danger mt-1 small">
                        {errors.question}
                      </div>
                    )}
                  </div>

                  {/* Full Name */}
                  <div className="countdown-register__input">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      id="name"
                      name="name"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                    {errors.name && (
                      <div className="text-danger mt-1 small">{errors.name}</div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="countdown-register__input">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      id="email"
                      name="email"
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                    {errors.email && (
                      <div className="text-danger mt-1 small">{errors.email}</div>
                    )}
                  </div>

                  {/* Country */}
                  <div className="col-md-12 mt-2">
                    <div className="modal-form">
                      <label htmlFor="country" className="form-label">
                        Select Country with Country Code
                      </label>
                      <select
                        className="form-control"
                        name="country"
                        id="country"
                        value={formData.country}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                      >
                        {COUNTRIES.map((c, i) => (
                          <option key={i} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div className="countdown-register__input">
                    <label htmlFor="mobile" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                      id="mobile"
                      name="mobile"
                      placeholder="Your Mobile Number"
                      maxLength={14}
                      value={formData.mobile}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                    {errors.mobile && (
                      <div className="text-danger mt-1 small">
                        {errors.mobile}
                      </div>
                    )}
                  </div>

                  {/* State */}
                  <div className="col-md-12 mt-2">
                    <div className="modal-form">
                      <label htmlFor="state" className="form-label">
                        Select State
                      </label>
                      <select
                        className={`form-control ${errors.state ? "is-invalid" : ""}`}
                        name="state"
                        id="state"
                        value={formData.state}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                      >
                        <option value="">Please Select State</option>
                        {STATES.map((s, i) => (
                          <option key={i} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {errors.state && (
                        <div className="text-danger mt-1 small">
                          {errors.state}
                        </div>
                      )}

                      {formData.state === "Other" && (
                        <input
                          type="text"
                          className="form-control mt-2"
                          placeholder="Enter Your State"
                          value={customState}
                          onChange={(e) => setCustomState(e.target.value)}
                          style={inputStyle}
                        />
                      )}
                    </div>
                  </div>

                  {/* City */}
                  <div className="col-md-12 mt-2">
                    <div className="modal-form">
                      <label htmlFor="city" className="form-label">
                        Select City
                      </label>
                      <select
                        className={`form-control ${errors.city ? "is-invalid" : ""}`}
                        name="city"
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                      >
                        <option value="">Please Select City</option>
                        {availableCities.map((c, i) => (
                          <option key={i} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      {errors.city && (
                        <div className="text-danger mt-1 small">
                          {errors.city}
                        </div>
                      )}

                      {formData.city === "Other" && (
                        <input
                          type="text"
                          className="form-control mt-2"
                          placeholder="Enter Your City"
                          value={customCity}
                          onChange={(e) => setCustomCity(e.target.value)}
                          style={inputStyle}
                        />
                      )}
                    </div>
                  </div>

                  {/* Where did you hear about us? */}
                  <div className="countdown-register__input col-md-12">
                    <div className="modal-form">
                      <label htmlFor="hearabout" className="form-label">
                        Where did you hear about us?
                      </label>
                      <select
                        className={`form-control ${errors.hearabout ? "is-invalid" : ""}`}
                        name="hearabout"
                        id="hearabout"
                        value={formData.hearabout}
                        onChange={handleChange}
                        style={inputStyle}
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
                      {errors.hearabout && (
                        <div className="text-danger mt-1 small">
                          {errors.hearabout}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Terms & Privacy Checkbox */}
                  <div className="col-md-12" style={{ marginTop: "5%" }}>
                    <div className="modal-form d-flex align-items-start gap-2">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        style={{ marginTop: "4px" }}
                        required
                      />
                      <label
                        htmlFor="agreeTerms"
                        className="counseller_terms_checkbox_label mb-0"
                        style={{ fontSize: "13px" }}
                      >
                        By submitting this form, I agree to Counsel India&apos;s{" "}
                        <Link
                          href="/terms-and-conditions"
                          style={{ color: "#07a64b" }}
                          target="_blank"
                        >
                          Terms &amp; Conditions
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy-policy"
                          style={{ color: "#07a64b" }}
                          target="_blank"
                        >
                          Privacy Policy.
                        </Link>
                      </label>
                    </div>
                    {errors.agreeTerms && (
                      <div className="text-danger mt-1 small">
                        {errors.agreeTerms}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="countdown-register__btn">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary btn-hover-secondary w-100 btn-submit"
                      style={{
                        border: "0.8px solid black",
                        borderRadius: "5px",
                        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
                        backgroundColor: "#07a64b",
                        color: "#ffffff",
                        fontWeight: 700,
                        fontSize: "16px",
                        height: "52px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
          {/* Contact Form Wrapper End */}
        </div>
      </div>
    </div>
  );
}
