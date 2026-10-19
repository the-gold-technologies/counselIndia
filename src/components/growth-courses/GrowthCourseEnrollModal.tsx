"use client";
import React, { useState } from "react";
import { GrowthCourse } from "./data/growthCoursesData";
import { submitLead } from "@/services/leadService";

interface Props {
  course: GrowthCourse | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function GrowthCourseEnrollModal({ course, isOpen, onClose }: Props) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const trimmedName = formData.fullName.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();

    if (!trimmedName) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage("Please enter a valid email address (e.g. name@example.com).");
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(trimmedPhone)) {
      setErrorMessage("Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.");
      return;
    }

    try {
      await submitLead({
        category: "courses-enquiry",
        name: trimmedName,
        email: trimmedEmail,
        mobile: trimmedPhone,
        state: formData.state,
        courseName: course?.title || "Growth Course Enquiry",
        medium: "Website Growth Courses",
        source: `Growth Course Enrollment (${formData.state || "India"})`,
      });
    } catch (err) {
      console.error("Course lead submission error:", err);
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      alert(
        "Thank you for your interest! Our academic counsellor will connect with you shortly with your special discount."
      );
    }, 2000);
  };

  return (
    <div
      className="modal-backdrop-custom position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 99999,
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        className="modal-card bg-white rounded-4 shadow-lg overflow-hidden position-relative m-3"
        style={{ width: "100%", maxWidth: "480px" }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="btn-close position-absolute top-0 end-0 m-3 z-3 shadow-none"
          aria-label="Close"
        ></button>

        {/* Modal Header */}
        <div
          className="modal-header-banner p-4 text-white"
          style={{ background: "linear-gradient(135deg, #07a64b 0%, #036b2f 100%)" }}
        >
          <span className="badge bg-white text-success font-size-11 fw-bold text-uppercase px-2 py-1 mb-2">
            Instant Enrollment
          </span>
          <h4 className="fw-bold mb-1 font-size-20">
            {course ? course.title : "Enroll in Growth Courses"}
          </h4>
          <p className="font-size-13 text-white-50 mb-0">
            Get exclusive discount & syllabus access
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-4">
          {isSubmitted ? (
            <div className="text-center py-4">
              <div
                className="rounded-circle bg-success text-white d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: "64px", height: "64px" }}
              >
                <i className="fas fa-check font-size-28"></i>
              </div>
              <h5 className="fw-bold text-dark">Enrollment Received!</h5>
              <p className="text-muted font-size-14 mb-0">
                Redirecting you to the course portal...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {errorMessage && (
                <div
                  className="alert alert-danger py-2 px-3 font-size-13 mb-3 rounded-3"
                  role="alert"
                >
                  {errorMessage}
                </div>
              )}

              <div className="mb-3">
                <label className="form-label font-size-13 fw-semibold text-dark">
                  Full Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="form-control rounded-3 py-2 px-3 font-size-14"
                  style={{ backgroundColor: "#ffffff", border: "1px solid #d1d5db" }}
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errorMessage) setErrorMessage("");
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label font-size-13 fw-semibold text-dark">
                  Email Address <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="form-control rounded-3 py-2 px-3 font-size-14"
                  style={{ backgroundColor: "#ffffff", border: "1px solid #d1d5db" }}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errorMessage) setErrorMessage("");
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label font-size-13 fw-semibold text-dark">
                  Mobile Number <span className="text-danger">*</span>
                </label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  inputMode="numeric"
                  pattern="[6-9][0-9]{9}"
                  placeholder="10-digit mobile number"
                  className="form-control rounded-3 py-2 px-3 font-size-14"
                  style={{ backgroundColor: "#ffffff", border: "1px solid #d1d5db" }}
                  value={formData.phone}
                  onChange={(e) => {
                    const cleaned = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setFormData({ ...formData, phone: cleaned });
                    if (errorMessage) setErrorMessage("");
                  }}
                />
              </div>

              <div className="mb-4">
                <label className="form-label font-size-13 fw-semibold text-dark">Enter City</label>
                <input
                  type="text"
                  placeholder="Enter your City"
                  className="form-control rounded-3 py-2 px-3 font-size-14"
                  style={{ backgroundColor: "#ffffff", border: "1px solid #d1d5db" }}
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 py-3 font-size-16 fw-bold rounded-3"
                style={{
                  backgroundColor: "#07a64b",
                  borderColor: "#07a64b",
                  boxShadow: "0 6px 16px rgba(7, 166, 75, 0.25)",
                }}
              >
                Claim Offer & Proceed <i className="fal fa-arrow-right ms-2"></i>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
