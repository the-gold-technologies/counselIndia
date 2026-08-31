"use client";
import React, { useState } from "react";

export default function SubscribeLeadForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
    courseInterest: "Psychology Diploma",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      errs.email = "Please enter a valid email address including domain";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phoneNo)) {
      errs.phoneNo = "Please enter a valid 10-digit Indian mobile number";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="section-padding-01 bg-color-primary text-white" id="index_subscribe">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <div className="pe-lg-5">
              <span className="badge bg-white text-success px-3 py-2 font-size-12 fw-bold text-uppercase mb-3">
                Free Academic Counselling
              </span>
              <h2 className="display-6 fw-bold text-white mb-3">
                Ready to Start Your Career in Psychology?
              </h2>
              <p className="text-white-50 font-size-16 mb-4">
                Speak with our senior academic counselors to find the right specialization, certification, and career transition roadmap tailored for you.
              </p>
              <div className="d-flex flex-column gap-3 font-size-14 text-white">
                <div className="d-flex align-items-center gap-2">
                  <i className="fas fa-check-circle text-white"></i>
                  <span>100% Practical &amp; Case-Study Driven Curriculum</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="fas fa-check-circle text-white"></i>
                  <span>Global Accreditations &amp; Institutional Certifications</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="fas fa-check-circle text-white"></i>
                  <span>Dedicated Mentorship &amp; Placement Support Network</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card border-0 shadow-lg p-4 p-md-5 rounded-4 bg-white text-dark">
              {submitted ? (
                <div className="text-center py-4">
                  <i className="fas fa-check-circle fa-4x text-success mb-3"></i>
                  <h3 className="fw-bold text-dark mb-2">Thank You!</h3>
                  <p className="text-muted font-size-14 mb-4">
                    Your consultation request has been received. Our senior psychology counselor will connect with you at <strong>+91 {formData.phoneNo}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phoneNo: "",
                        courseInterest: "Psychology Diploma",
                      });
                    }}
                    className="btn btn-outline-success font-size-14"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h4 className="fw-bold text-dark mb-2">Book Free Consultation</h4>
                  <p className="text-muted font-size-14 mb-4">
                    Fill in your details below and our counselors will reach out to you.
                  </p>

                  <div className="mb-3">
                    <label className="form-label font-size-14 fw-semibold text-dark">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                    {errors.fullName && (
                      <div className="text-danger font-size-12 mt-1">
                        {errors.fullName}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label font-size-14 fw-semibold text-dark">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <div className="text-danger font-size-12 mt-1">
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label font-size-14 fw-semibold text-dark">
                      Mobile Number (+91)
                    </label>
                    <input
                      type="tel"
                      maxLength={10}
                      className="form-control"
                      placeholder="9876543210"
                      value={formData.phoneNo}
                      onChange={(e) =>
                        setFormData({ ...formData, phoneNo: e.target.value })
                      }
                    />
                    {errors.phoneNo && (
                      <div className="text-danger font-size-12 mt-1">
                        {errors.phoneNo}
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="form-label font-size-14 fw-semibold text-dark">
                      Program of Interest
                    </label>
                    <select
                      className="form-select"
                      value={formData.courseInterest}
                      onChange={(e) =>
                        setFormData({ ...formData, courseInterest: e.target.value })
                      }
                    >
                      <option value="Psychology Diploma">Psychology Diploma (Clinical &amp; Counselling)</option>
                      <option value="Child Psychology">Child &amp; Adolescent Psychology</option>
                      <option value="Art Therapy">Expressive Art &amp; Play Therapy</option>
                      <option value="CBT Masterclass">CBT Specialist Certification</option>
                      <option value="Personal Counselling">Personal 1-on-1 Counselling</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-secondary btn-hover-primary w-100 py-2 fw-semibold"
                  >
                    {loading ? (
                      <span>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Submitting...
                      </span>
                    ) : (
                      "Request Callback"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
