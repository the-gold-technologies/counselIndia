"use client";
import React, { useState } from "react";
import { GrowthCourse } from "./data/growthCoursesData";

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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      alert("Thank you for your interest! Our academic counsellor will connect with you shortly with your special discount.");
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
              <div className="mb-3">
                <label className="form-label font-size-13 fw-semibold text-dark">
                  Full Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="form-control rounded-3 py-2 px-3 font-size-14 border"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
                  className="form-control rounded-3 py-2 px-3 font-size-14 border"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label className="form-label font-size-13 fw-semibold text-dark">
                  Mobile Number <span className="text-danger">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  className="form-control rounded-3 py-2 px-3 font-size-14 border"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                />
              </div>

              <div className="mb-4">
                <label className="form-label font-size-13 fw-semibold text-dark">
                  State / City
                </label>
                <input
                  type="text"
                  placeholder="Enter your State or City"
                  className="form-control rounded-3 py-2 px-3 font-size-14 border"
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
