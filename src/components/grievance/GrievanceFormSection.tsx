"use client";
import React, { useState } from "react";

interface FormData {
  name: string;
  mobile: string;
  email: string;
  coursename: string;
  rmname: string;
  request2: string;
  question: string;
}

export default function GrievanceFormSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    coursename: "",
    rmname: "",
    request2: "",
    question: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Please enter your mobile number.";
    } else if (!/^\d{10}$/.test(formData.mobile.replace(/\D/g, ""))) {
      newErrors.mobile = "Mobile number should have 10 digits.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email Address.";
    }

    if (!formData.coursename.trim()) {
      newErrors.coursename = "Please enter your Course Name.";
    }

    if (!formData.rmname.trim()) {
      newErrors.rmname = "Please enter your RM Name.";
    }

    if (!formData.request2) {
      newErrors.request2 = "Please select the type of request.";
    }

    if (!formData.question.trim()) {
      newErrors.question = "Please tell us about the Issues you are facing.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      name: "",
      mobile: "",
      email: "",
      coursename: "",
      rmname: "",
      request2: "",
      question: "",
    });
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
                  Request Submitted Successfully!
                </h4>
                <p
                  className="text-muted mb-4"
                  style={{ maxWidth: "450px", margin: "0 auto" }}
                >
                  Thank you for reaching out. Our support team and your
                  Relationship Manager (RM) will review your request and get
                  back to you promptly.
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
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate id="grievanceform">
                <div className="countdown-register__form_edit">
                  {/* Learner's Name */}
                  <div className="countdown-register__input">
                    <label htmlFor="name" className="form-label">
                      Learner&apos;s Name
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
                      maxLength={12}
                      value={formData.mobile}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                    {errors.mobile && (
                      <div className="text-danger mt-1 small">{errors.mobile}</div>
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

                  {/* Course Name */}
                  <div className="countdown-register__input">
                    <label htmlFor="coursename" className="form-label">
                      Course Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.coursename ? "is-invalid" : ""}`}
                      id="coursename"
                      name="coursename"
                      placeholder="Your Course Name"
                      value={formData.coursename}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                    {errors.coursename && (
                      <div className="text-danger mt-1 small">
                        {errors.coursename}
                      </div>
                    )}
                  </div>

                  {/* RM Name */}
                  <div className="countdown-register__input">
                    <label htmlFor="rmname" className="form-label">
                      RM Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.rmname ? "is-invalid" : ""}`}
                      id="rmname"
                      name="rmname"
                      placeholder="Your RM Name"
                      value={formData.rmname}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                    {errors.rmname && (
                      <div className="text-danger mt-1 small">
                        {errors.rmname}
                      </div>
                    )}
                  </div>

                  {/* Type of Request */}
                  <div className="countdown-register__input col-md-12">
                    <div className="modal-form">
                      <label htmlFor="request2" className="form-label">
                        Type of Request?
                      </label>
                      <select
                        className={`form-control ${errors.request2 ? "is-invalid" : ""}`}
                        name="request2"
                        id="request2"
                        value={formData.request2}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                      >
                        <option value="">Select Type of Request</option>
                        <option value="Grievance">Grievance</option>
                        <option value="Cancellation">Cancellation</option>
                      </select>
                      {errors.request2 && (
                        <div className="text-danger mt-1 small">
                          {errors.request2}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Issues Faced */}
                  <div className="countdown-register__input">
                    <label htmlFor="question" className="form-label">
                      Issues Faced
                    </label>
                    <textarea
                      className={`form-control ${errors.question ? "is-invalid" : ""}`}
                      id="question"
                      name="question"
                      placeholder="Type your question here"
                      rows={5}
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
