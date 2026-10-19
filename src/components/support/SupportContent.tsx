"use client";
import React, { useState } from "react";
import { submitLead } from "@/services/leadService";

interface EnquiryFormData {
  name: string;
  email: string;
  mobile: string;
  enquiry_type: string;
  message: string;
}

export default function SupportContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: "",
    email: "",
    mobile: "",
    enquiry_type: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<EnquiryFormData>>({});

  const validate = () => {
    const errs: Partial<EnquiryFormData> = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your full name.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.mobile.trim()) {
      errs.mobile = "Please enter your mobile number.";
    } else if (formData.mobile.replace(/\D/g, "").length < 10) {
      errs.mobile = "Please enter a valid 10-digit mobile number.";
    }
    if (!formData.enquiry_type) {
      errs.enquiry_type = "Please select an enquiry type.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please enter your message.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    await submitLead({
      category: "ask-question",
      name: formData.name.trim(),
      email: formData.email.trim(),
      mobile: formData.mobile.trim(),
      content: formData.enquiry_type,
      message: `Enquiry Type: ${formData.enquiry_type} | Message: ${formData.message}`,
      medium: "Website Support Modal",
      source: "Support Page",
    });
    setIsSubmitted(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      mobile: "",
      enquiry_type: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <>
      <div className="faq-section">
        <div className="container custom-container">
          <div className="row">
            <div className="call-to-action section-padding-01">
              <div className="container custom-container">
                <div className="col-md-12 mb-5">
                  <div className="d-flex align-items-center">
                    <div className="new_enqiry">
                      <button
                        type="button"
                        className="btn btn-primary btn-hover-secondary"
                        onClick={() => setIsModalOpen(true)}
                      >
                        Ask your Question
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Call To Action End */}
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      {isModalOpen && (
        <div className="modal-backdrop-custom" onClick={handleCloseModal}>
          <div
            className="modal-dialog modal-dialog-centered modal-register"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-wrapper">
              <div
                className="modal-content"
                style={{
                  boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.25)",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  borderRadius: "14px",
                  maxHeight: "calc(100vh - 36px)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <div className="modal-header position-relative">
                  <h3 className="modal-title new_enq">Please tell us about</h3>
                  <button
                    type="button"
                    className="modal-close-inside"
                    onClick={handleCloseModal}
                    aria-label="Close"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>

                <div className="modal-body custom-scrollbar">
                  {isSubmitted ? (
                    <div className="text-center py-4">
                      <div
                        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                        style={{
                          width: "60px",
                          height: "60px",
                          backgroundColor: "#d4edda",
                          color: "#155724",
                        }}
                      >
                        <i className="fas fa-check fa-2x"></i>
                      </div>
                      <h5 className="fw-bold text-success mb-2">Thank you!</h5>
                      <p className="text-muted font-size-14 mb-4">
                        Your query has been submitted successfully. Our support team will get in
                        touch with you shortly.
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary btn-hover-secondary"
                        onClick={handleCloseModal}
                        style={{
                          backgroundColor: "#07a64b",
                          borderColor: "#07a64b",
                          borderRadius: "8px",
                          fontWeight: 600,
                          padding: "10px 28px",
                          lineHeight: "1",
                        }}
                      >
                        Done
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="row gy-3">
                        {/* Name */}
                        <div className="col-md-12">
                          <div className="modal-form">
                            <label className="form-label">
                              Name<span className="text-danger">*</span>
                            </label>
                            <input
                              name="name"
                              type="text"
                              className={`form-control sub ${errors.name ? "is-invalid" : ""}`}
                              placeholder="Your Full Name"
                              value={formData.name}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                });
                                if (errors.name) setErrors({ ...errors, name: undefined });
                              }}
                              required
                            />
                            {errors.name && (
                              <div className="text-danger font-size-12 mt-1">{errors.name}</div>
                            )}
                          </div>
                        </div>

                        {/* Email */}
                        <div className="col-md-12">
                          <div className="modal-form">
                            <label className="form-label">
                              Email<span className="text-danger">*</span>
                            </label>
                            <input
                              name="email"
                              type="email"
                              className={`form-control sub ${errors.email ? "is-invalid" : ""}`}
                              placeholder="Your Email Address"
                              value={formData.email}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                });
                                if (errors.email) setErrors({ ...errors, email: undefined });
                              }}
                              required
                            />
                            {errors.email && (
                              <div className="text-danger font-size-12 mt-1">{errors.email}</div>
                            )}
                          </div>
                        </div>

                        {/* Mobile */}
                        <div className="col-md-12">
                          <div className="modal-form">
                            <label className="form-label">
                              Mobile<span className="text-danger">*</span>
                            </label>
                            <input
                              name="mobile"
                              type="tel"
                              maxLength={12}
                              className={`form-control sub ${errors.mobile ? "is-invalid" : ""}`}
                              placeholder="Your Mobile Number"
                              value={formData.mobile}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  mobile: e.target.value,
                                });
                                if (errors.mobile) setErrors({ ...errors, mobile: undefined });
                              }}
                              required
                            />
                            {errors.mobile && (
                              <div className="text-danger font-size-12 mt-1">{errors.mobile}</div>
                            )}
                          </div>
                        </div>

                        {/* Enquiry For */}
                        <div className="col-md-12">
                          <div className="modal-form">
                            <label className="form-label">
                              Enquiry For<span className="text-danger">*</span>
                            </label>
                            <select
                              name="enquiry_type"
                              className={`form-select sub ${errors.enquiry_type ? "is-invalid" : ""}`}
                              value={formData.enquiry_type}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  enquiry_type: e.target.value,
                                });
                                if (errors.enquiry_type)
                                  setErrors({
                                    ...errors,
                                    enquiry_type: undefined,
                                  });
                              }}
                              required
                            >
                              <option value="">Select Enquiry Type</option>
                              <option value="course_enquiry">New Course Enquiry</option>
                              <option value="support">Existing customer needing support</option>
                            </select>
                            {errors.enquiry_type && (
                              <div className="text-danger font-size-12 mt-1">
                                {errors.enquiry_type}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Message */}
                        <div className="col-md-12">
                          <div className="modal-form">
                            <label className="form-label">
                              Message<span className="text-danger">*</span>
                            </label>
                            <textarea
                              name="message"
                              required
                              className={`form-control sub ${errors.message ? "is-invalid" : ""}`}
                              placeholder="Message"
                              value={formData.message}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  message: e.target.value,
                                });
                                if (errors.message) setErrors({ ...errors, message: undefined });
                              }}
                            ></textarea>
                            {errors.message && (
                              <div className="text-danger font-size-12 mt-1">{errors.message}</div>
                            )}
                          </div>
                        </div>

                        {/* Submit */}
                        <div className="col-md-12">
                          <div className="modal-form mt-2 pt-1 pb-1">
                            <button
                              type="submit"
                              className="btn btn-primary btn-hover-secondary w-100 modal-submit-btn"
                              style={{
                                backgroundColor: "#07a64b",
                                borderColor: "#07a64b",
                                color: "#ffffff",
                                fontWeight: 700,
                                fontSize: "16px",
                                height: "48px",
                                minHeight: "48px",
                                lineHeight: "1",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "8px",
                                boxShadow: "0 4px 14px rgba(7, 166, 75, 0.35)",
                                cursor: "pointer",
                                transition: "all 0.25s ease",
                              }}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .faq-section {
          background-color: #ffffff;
        }

        .custom-container {
          max-width: 1200px;
          padding-left: 15px;
          padding-right: 15px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-padding-01 {
          padding-top: 50px;
          padding-bottom: 50px;
        }

        .mb-5 {
          margin-bottom: 3rem !important;
        }

        .btn {
          font-family: "Poppins", sans-serif;
          font-size: 15px;
          font-weight: 400;
          position: relative;
          overflow: hidden;
          background-color: transparent;
          height: 52px;
          line-height: 52px;
          padding: 0 36px;
          border: 0;
          border-radius: 5px;
          box-shadow: none;
          transition: all 0.3s ease 0s;
          cursor: pointer;
          white-space: nowrap;
          display: inline-block;
          text-align: center;
        }

        .btn-primary {
          background-color: #07a64b;
          border-color: #07a64b;
          color: #fff;
        }

        .btn-primary:hover,
        .btn-hover-secondary:hover {
          background-color: #068d3f;
          color: #fff;
        }

        #forguestuser {
          font-size: 15px;
          color: #333333;
          display: inline-block;
        }

        /* Modal Styles matching Counsel India Modern UI */
        .modal-backdrop-custom {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(4px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          overflow-y: auto;
        }

        .modal-register {
          max-width: 480px;
          width: 100%;
          margin: auto;
        }

        .modal-wrapper {
          position: relative;
          width: 100%;
        }

        .modal-close-inside {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: none;
          background: #f1f5f9;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
        }

        .modal-close-inside:hover {
          background: #fee2e2;
          color: #ef4444;
          transform: rotate(90deg);
        }

        .modal-header {
          padding: 22px 28px 10px;
          border-bottom: 0;
          text-align: center;
          display: block;
        }

        .modal-title.new_enq {
          font-size: 24px;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }

        .modal-body {
          padding: 8px 28px 24px;
        }

        .modal-body.custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .modal-body.custom-scrollbar::-webkit-scrollbar-track {
          background: #f8fafc;
        }

        .modal-body.custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }

        .modal-body.custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        .modal-form {
          margin-bottom: 0;
        }

        .modal-form .form-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 5px;
          line-height: 18px;
        }

        .modal-form .form-control.sub,
        .modal-form .form-select.sub {
          color: #1e293b;
          background-color: #f8fafc;
          border: 1.5px solid #e2e8f0;
          font-size: 14px;
          font-weight: 400;
          height: 44px;
          padding: 0 16px;
          width: 100%;
          border-radius: 8px;
          outline: none;
          transition: all 0.2s ease;
        }

        .modal-form .form-control.sub:focus,
        .modal-form .form-select.sub:focus {
          border-color: #07a64b;
          background-color: #ffffff;
          box-shadow: 0 0 0 3px rgba(7, 166, 75, 0.12);
        }

        .modal-form textarea.form-control.sub {
          height: 85px;
          min-height: 75px;
          padding: 10px 16px;
          resize: vertical;
        }

        .modal-submit-btn:hover {
          background-color: #057435 !important;
          border-color: #057435 !important;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(7, 166, 75, 0.4) !important;
        }

        .font-size-12 {
          font-size: 12px;
        }

        .font-size-14 {
          font-size: 14px;
        }

        @media only screen and (max-width: 767px) {
          .section-padding-01 {
            padding-top: 30px;
            padding-bottom: 30px;
          }

          .mb-5 {
            margin-bottom: 1.5rem !important;
          }

          .modal-register {
            max-width: calc(100% - 16px);
            margin: auto;
          }

          .modal-header {
            padding: 18px 20px 8px;
          }

          .modal-title.new_enq {
            font-size: 20px;
          }

          .modal-body {
            padding: 6px 18px 20px;
          }

          .modal-close-inside {
            top: 14px;
            right: 14px;
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </>
  );
}
