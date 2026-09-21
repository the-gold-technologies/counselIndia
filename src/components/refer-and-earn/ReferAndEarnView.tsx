"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export const REFERRAL_COURSES = [
  { id: "8", name: "Counselling Master Course- Advanced" },
  { id: "9", name: "Counselling Master Course - Intermediate" },
  { id: "10", name: "Counselling Master Course- Foundation" },
  { id: "11", name: "Therapy Master Course" },
  { id: "16", name: "Psychology Internship (Clinical Psychology)" },
  { id: "35", name: "Masters  in Child Psychology" },
  { id: "37", name: "Masters in Industrial & Organizational Psychology" },
  { id: "45", name: "Certificate in Child Psychology" },
  { id: "52", name: "Advanced Certificate in Child Psychology" },
  { id: "56", name: "Counsellor Entrepreneurship Program" },
  { id: "57", name: "PG Diploma in Counselling Psychology & Clinical Skills" },
  { id: "58", name: "Diploma in Child Psychology & Parenting" },
  { id: "61", name: "Business Growth Master Course" },
  { id: "64", name: "Masters in Psychology" },
  { id: "80", name: "Masters In Clinical Psychology" },
];

const COUNTRIES = [
  { id: "101", name: "India", code: "+91" },
  { id: "233", name: "United States", code: "+1" },
  { id: "232", name: "United Kingdom", code: "+44" },
  { id: "229", name: "United Arab Emirates", code: "+971" },
  { id: "38", name: "Canada", code: "+1" },
  { id: "13", name: "Australia", code: "+61" },
  { id: "196", name: "Singapore", code: "+65" },
  { id: "153", name: "New Zealand", code: "+64" },
  { id: "166", name: "Philippines", code: "+63" },
  { id: "132", name: "Malaysia", code: "+60" },
  { id: "174", name: "Qatar", code: "+974" },
  { id: "192", name: "Saudi Arabia", code: "+966" },
  { id: "163", name: "Oman", code: "+968" },
  { id: "110", name: "Kuwait", code: "+965" },
  { id: "17", name: "Bahrain", code: "+973" },
  { id: "82", name: "Germany", code: "+49" },
  { id: "75", name: "France", code: "+33" },
  { id: "105", name: "Ireland", code: "+353" },
  { id: "203", name: "South Africa", code: "+27" },
];

const INDIAN_STATES = [
  "Delhi",
  "Maharashtra",
  "Karnataka",
  "Uttar Pradesh",
  "Tamil Nadu",
  "West Bengal",
  "Gujarat",
  "Haryana",
  "Rajasthan",
  "Punjab",
  "Kerala",
  "Madhya Pradesh",
  "Bihar",
  "Telangana",
  "Andhra Pradesh",
  "Odisha",
  "Assam",
  "Jharkhand",
  "Chhattisgarh",
  "Uttarakhand",
  "Himachal Pradesh",
  "Goa",
  "Jammu & Kashmir",
  "Chandigarh",
  "Other",
];

const FAQ_ITEMS = [
  {
    id: "collapseOne",
    question:
      "What are the eligibility criteria to receive Referral Benefits after referring a friend?",
    answer:
      "The referee has paid the full fees for the program. No benefits will be provided on just registration amount",
  },
  {
    id: "collapseTwo",
    question: "Do I need to be a Counsel India student to refer my friends?",
    answer:
      "No, every user who are part of our network by any way can be a part of Counsel India’s referral benefit program.",
  },
  {
    id: "collapseThree",
    question: "How can I refer my friends/connections?",
    answer:
      "Fill the Reference form “Start Referring” After filling the form you will get a call back from our team within 48 Hours",
  },
  {
    id: "collapseFour",
    question: "When can you expect to receive a Referral Benefits?",
    answer:
      "Once the referee pays the full amount, our team will reach out to you asking for your bank details by filling a confirmation form Once the form is filled out by you, we take 5 working days to process the amount.",
  },
  {
    id: "collapseFive",
    question:
      "The referral benefit I have received is incorrect (Example: instead of ₹20,000, ₹ 28,500 is credited).",
    bullets: [
      "Referral benefit is subject to GST deductions & tax rules as may be applicable at the time of processing the payout.",
      "A Referrer’s benefit is based amount we received after deducting the GST.",
    ],
  },
];

export default function ReferAndEarnView() {
  const searchParams = useSearchParams();
  const queryCourseId = searchParams.get("course_id") || "56";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "101",
    mobile: "",
    state: "",
    stateOther: "",
    city: "",
    person_refer_name: "",
    person_refer_phone: "",
    person_refer_email: "",
    course_refer: queryCourseId,
    eligibility: false,
  });

  const [otpValue, setOtpValue] = useState("");
  const [resendCountdown, setResendCountdown] = useState(30);
  const [isResendActive, setIsResendActive] = useState(false);
  const [otpSuccess, setOtpSuccess] = useState(false);
  const [otpError, setOtpError] = useState("");

  useEffect(() => {
    if (queryCourseId) {
      setFormData((prev) => ({ ...prev, course_refer: queryCourseId }));
    }
  }, [queryCourseId]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isResendActive && resendCountdown > 0) {
      timer = setTimeout(() => {
        setResendCountdown((c) => c - 1);
      }, 1000);
    } else if (resendCountdown === 0) {
      setIsResendActive(false);
    }
    return () => clearTimeout(timer);
  }, [isResendActive, resendCountdown]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.eligibility) {
      alert("Please agree to Counsel India's Terms & Conditions and Privacy Policy.");
      return;
    }
    setIsModalOpen(false);
    setIsOtpOpen(true);
    setResendCountdown(30);
    setIsResendActive(true);
    setOtpError("");
    setOtpSuccess(false);
  };

  const handleResendOtp = () => {
    setResendCountdown(30);
    setIsResendActive(true);
    setOtpError("");
  };

  const handleOtpVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpValue.trim().length < 4) {
      setOtpError("Please enter a valid OTP.");
      return;
    }
    setOtpSuccess(true);
    setOtpError("");
    setTimeout(() => {
      setIsOtpOpen(false);
      setOtpSuccess(false);
      setOtpValue("");
      // Reset form
      setFormData({
        name: "",
        email: "",
        country: "101",
        mobile: "",
        state: "",
        stateOther: "",
        city: "",
        person_refer_name: "",
        person_refer_phone: "",
        person_refer_email: "",
        course_refer: queryCourseId,
        eligibility: false,
      });
    }, 2500);
  };

  return (
    <>
      {/* Page Banner Section Start */}
      <div className="page-banner bg-color-04">
        <div className="page-banner__wrapper">
          <div className="page-banner__shape-01"></div>
          <div className="page-banner__shape-02"></div>
          <div className="page-banner__shape-03"></div>

          <div className="container">
            {/* Page Breadcrumb Start */}
            <div className="page-breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Refer and Earn</li>
              </ul>
            </div>
            {/* Page Breadcrumb End */}

            {/* Page Banner Caption Start */}
            <div className="page-banner__caption-02">
              <h2 className="page-banner__main-title-02">Refer and Earn</h2>
            </div>
            {/* Page Banner Caption End */}
          </div>
        </div>
      </div>
      {/* Page Banner Section End */}

      {/* Guides Start */}
      <div className="section-padding-01">
        <div className="container">
          <div className="row g-6 pb-5 align-items-center">
            <div className="col-md-6">
              <h2 className="mb-2">Refer and earn rewards upto Rs. 80,000</h2>
              <p>
                Help a friend become an counselindia learner and earn rewards
                upto Rs. 80,000 #FriendshipGoals
              </p>
              <img
                src="/assets/images/refer.png"
                alt="Refer and Earn"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="col-md-6">
              <div
                className="countdown-register aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h4 className="countdown-register__title text-center pb-5">
                  Signup To Earn
                </h4>
                <ul className="tutor-course-segment__list-style-01">
                  <li>
                    Earn 5% flat cashback in advance once referee registers for a
                    course *
                  </li>
                  <li>
                    Not counselindia student, we’ve got you covered with easy
                    bonus points*
                  </li>
                </ul>

                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="pt-5 aos-init aos-animate text-center"
                >
                  <button
                    type="button"
                    className="btn btn-primary btn-hover-primary"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Start Referring
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              {/* Section Title Start */}
              <div
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h2 className="section-title__title">
                  How to <mark>earn ?</mark>
                </h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          <div className="row g-6">
            <div className="col-md-4">
              {/* Edumall Box Item Start */}
              <div
                className="edumall-box-item text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="edumall-box-item__icon">
                  <img
                    src="/assets/images/export.png"
                    alt="Icon"
                    width="60"
                    height="60"
                  />
                </div>
                <div className="edumall-box-item__content">
                  <h4 className="edumall-box-item__title">
                    Fill the form to get Benefits
                  </h4>
                  <p>Fill the above form to register for Referral Benefits</p>
                </div>
              </div>
              {/* Edumall Box Item End */}
            </div>
            <div className="col-md-4">
              {/* Edumall Box Item Start */}
              <div
                className="edumall-box-item text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="edumall-box-item__icon">
                  <img
                    src="/assets/images/coins.png"
                    alt="Icon"
                    width="60"
                    height="60"
                  />
                </div>
                <div className="edumall-box-item__content">
                  <h4 className="edumall-box-item__title">Earn Bonus Points</h4>
                  <p>
                    You are eligible for 10% amount as referral bonus points as
                    referral benefit after your friend successfully makes full
                    payment for the program. This can redeemed once you purchase
                    any course from Counsel India.
                  </p>
                </div>
              </div>
              {/* Edumall Box Item End */}
            </div>
            <div className="col-md-4">
              {/* Edumall Box Item Start */}
              <div
                className="edumall-box-item text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="edumall-box-item__icon">
                  <img
                    src="/assets/images/rupee.png"
                    alt="Icon"
                    width="60"
                    height="60"
                  />
                </div>
                <div className="edumall-box-item__content">
                  <h4 className="edumall-box-item__title">
                    Earn Flat Cash Back
                  </h4>
                  <p>
                    You are eligible for 5% amount as direct cashback as referral
                    benefit after your friend successfully makes full payment
                    for the program. This can will be transferred to your account
                    within 5 working days.
                  </p>
                </div>
              </div>
              {/* Edumall Box Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Guides End */}

      {/* FAQ Start */}
      <div className="faq-section section-padding-01 bg-color-01">
        <div className="container custom-container">
          {/* Section Title Start */}
          <div
            className="section-title text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="section-title__title-03 mark-title">
              Frequently Asked Questions
            </h2>
          </div>
          {/* Section Title End */}

          <div className="row gy-10 align-items-center">
            <div className="col-lg-5">
              {/* FAQ Image Start */}
              <div className="faq-image">
                <div
                  className="faq-image__image"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src="/assets/images/faq.png" alt="FAQ" />
                </div>
              </div>
              {/* FAQ Image End */}
            </div>
            <div className="col-lg-7">
              {/* FAQ Accordion Start */}
              <div
                className="faq-accordion"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="accordion" id="accordionFAQ">
                  {FAQ_ITEMS.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    return (
                      <div className="accordion-item" key={faq.id}>
                        <button
                          type="button"
                          className={`accordion-button ${
                            isOpen ? "" : "collapsed"
                          }`}
                          onClick={() => setActiveFaq(isOpen ? null : idx)}
                          aria-expanded={isOpen}
                        >
                          {faq.question}
                        </button>
                        <div
                          className={`accordion-collapse collapse ${
                            isOpen ? "show" : ""
                          }`}
                          style={{ display: isOpen ? "block" : "none" }}
                        >
                          <div className="accordion-body">
                            {faq.answer && <p>{faq.answer}</p>}
                            {faq.bullets && (
                              <ul style={{ paddingLeft: "18px", margin: 0 }}>
                                {faq.bullets.map((b, bIdx) => (
                                  <li key={bIdx} style={{ marginBottom: "6px" }}>
                                    {b}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* FAQ Accordion End */}
            </div>
          </div>
        </div>
      </div>
      {/* FAQ End */}

      {/* Backdrop */}
      {(isModalOpen || isOtpOpen) && (
        <div
          className="modal-backdrop fade show"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1040,
          }}
          onClick={() => {
            setIsModalOpen(false);
            setIsOtpOpen(false);
          }}
        />
      )}

      {/* Referral Modal Start */}
      <div
        className={`modal fade ${isModalOpen ? "show" : ""}`}
        id="refermodal"
        tabIndex={-1}
        role="dialog"
        aria-hidden={!isModalOpen}
        style={{
          display: isModalOpen ? "block" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflowX: "hidden",
          overflowY: "auto",
          zIndex: 1050,
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsModalOpen(false);
        }}
      >
        <div className="modal-dialog modal-dialog-centered modal-login">
          {/* Modal Wrapper Start */}
          <div className="modal-wrapper">
            {/* Modal Content Start */}
            <div
              className="modal-content"
              style={{
                border: "0.8px solid black",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                backgroundColor: "#ffffff",
                position: "relative",
              }}
            >
              <button
                type="button"
                className="modal-close"
                onClick={() => setIsModalOpen(false)}
                style={{
                  position: "absolute",
                  top: "-38px",
                  right: "0",
                  color: "#ffffff",
                  background: "transparent",
                  border: 0,
                  fontSize: "28px",
                  cursor: "pointer",
                  lineHeight: 1,
                }}
              >
                &times;
              </button>

              <div className="modal-header">
                <h5 className="modal-title">Signup To Earn</h5>
              </div>
              <div className="modal-body">
                <form
                  id="myForm_refer_earn"
                  name="myForm_refer_earn"
                  onSubmit={handleFormSubmit}
                >
                  <div className="modal-form mb-3">
                    <label className="form-label" style={{ fontWeight: 500, marginBottom: "4px" }}>
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      style={{
                        border: "0.8px solid black",
                        borderRadius: "5px",
                        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                      }}
                      required
                      name="name"
                      className="form-control"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="modal-form mb-3">
                    <label className="form-label" style={{ fontWeight: 500, marginBottom: "4px" }}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      style={{
                        border: "0.8px solid black",
                        borderRadius: "5px",
                        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                      }}
                      type="email"
                      required
                      className="form-control"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="col-md-12 mt-2 mb-3">
                    <div className="modal-form">
                      <label className="form-label" style={{ fontWeight: 500, marginBottom: "4px" }}>
                        Select Country with Country Code
                      </label>
                      <select
                        className="form-control"
                        style={{
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.4)",
                          borderRadius: "5px",
                          border: "0.8px solid black",
                        }}
                        name="country"
                        id="formCountry"
                        required
                        value={formData.country}
                        onChange={handleInputChange}
                      >
                        {COUNTRIES.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.name} ({c.code})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="modal-form mb-3">
                    <label className="form-label" style={{ fontWeight: 500, marginBottom: "4px" }}>
                      Phone
                    </label>
                    <input
                      id="mobile"
                      name="mobile"
                      style={{
                        border: "0.8px solid black",
                        borderRadius: "5px",
                        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                      }}
                      type="tel"
                      className="form-control"
                      maxLength={12}
                      placeholder="Your phone"
                      required
                      value={formData.mobile}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="col-md-12 mt-2 mb-3">
                    <div className="modal-form">
                      <label className="form-label" style={{ fontWeight: 500, marginBottom: "4px" }}>
                        Select State
                      </label>
                      <select
                        className="form-control"
                        style={{
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                          borderRadius: "5px",
                          border: "0.8px solid black",
                        }}
                        name="state"
                        id="formState"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                      >
                        <option value="">Please Select State</option>
                        {INDIAN_STATES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {formData.state === "Other" && (
                        <input
                          id="formState2"
                          type="text"
                          className="form-control mt-2"
                          name="stateOther"
                          style={{
                            boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                            borderRadius: "5px",
                            border: "0.8px solid black",
                          }}
                          placeholder="Enter Your other State"
                          value={formData.stateOther}
                          onChange={handleInputChange}
                        />
                      )}
                    </div>
                  </div>

                  <div className="col-md-12 mt-2 mb-3">
                    <div className="modal-form">
                      <label className="form-label" style={{ fontWeight: 500, marginBottom: "4px" }}>
                        Select City
                      </label>
                      <input
                        id="formCity"
                        type="text"
                        className="form-control"
                        name="city"
                        style={{
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                          borderRadius: "5px",
                          border: "0.8px solid black",
                        }}
                        placeholder="Enter Your City"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="modal-form mb-3">
                    <label className="form-label" style={{ fontWeight: 500, marginBottom: "4px" }}>
                      Referral Person&apos;s Name
                    </label>
                    <input
                      id="person_refer_name"
                      style={{
                        border: "0.8px solid black",
                        borderRadius: "5px",
                        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                      }}
                      name="person_refer_name"
                      type="text"
                      className="form-control name"
                      placeholder="Referral Person's Name"
                      required
                      value={formData.person_refer_name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="modal-form mb-3">
                    <label className="form-label" style={{ fontWeight: 500, marginBottom: "4px" }}>
                      Referral Person&apos;s Contact Number
                    </label>
                    <input
                      id="person_refer_phone"
                      style={{
                        border: "0.8px solid black",
                        borderRadius: "5px",
                        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                      }}
                      name="person_refer_phone"
                      type="tel"
                      maxLength={12}
                      className="form-control mobile"
                      placeholder="Referral Person's Contact Number"
                      required
                      value={formData.person_refer_phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="modal-form mb-3">
                    <label className="form-label" style={{ fontWeight: 500, marginBottom: "4px" }}>
                      Referral Person&apos;s Email
                    </label>
                    <input
                      id="person_refer_email"
                      style={{
                        border: "0.8px solid black",
                        borderRadius: "5px",
                        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                      }}
                      name="person_refer_email"
                      type="email"
                      className="form-control email"
                      placeholder="Referral Person's Email"
                      required
                      value={formData.person_refer_email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="modal-form mb-4">
                    <label className="form-label" style={{ fontWeight: 500, marginBottom: "4px" }}>
                      Course Referring For
                    </label>
                    <select
                      id="course_refer"
                      name="course_refer"
                      style={{
                        border: "0.8px solid black",
                        borderRadius: "5px",
                        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                      }}
                      className="form-control"
                      value={formData.course_refer}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Course</option>
                      {REFERRAL_COURSES.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-12 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <input
                        type="checkbox"
                        id="eligibility"
                        className="counseller_terms_checkbox mt-1"
                        name="eligibility"
                        required
                        checked={formData.eligibility}
                        onChange={handleInputChange}
                      />
                      <label
                        htmlFor="eligibility"
                        className="counseller_terms_checkbox_label mb-0"
                        style={{ fontSize: "13px", lineHeight: "1.5" }}
                      >
                        By submitting this form, I agree to Counsel
                        India&apos;s{" "}
                        <Link
                          href="/terms-condition"
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
                  </div>

                  <div className="modal-form mt-4">
                    <button
                      type="submit"
                      style={{
                        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.4)",
                        border: "0.8px solid black",
                        borderRadius: "5px",
                        width: "100%",
                      }}
                      className="btn btn-primary btn-hover-primary"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Modal Content End */}
          </div>
          {/* Modal Wrapper End */}
        </div>
      </div>
      {/* Referral Modal End */}

      {/* OTP Modal Start */}
      <div
        className={`modal fade ${isOtpOpen ? "show" : ""}`}
        id="otpModalrefer"
        tabIndex={-1}
        role="dialog"
        aria-hidden={!isOtpOpen}
        style={{
          display: isOtpOpen ? "block" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflowX: "hidden",
          overflowY: "auto",
          zIndex: 1070,
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsOtpOpen(false);
        }}
      >
        <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "420px" }}>
          <div
            className="modal-content"
            style={{
              border: "0.8px solid black",
              borderRadius: "5px",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
              backgroundColor: "#ffffff",
              position: "relative",
              padding: "30px",
            }}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setIsOtpOpen(false)}
              style={{
                position: "absolute",
                top: "12px",
                right: "15px",
                color: "#333",
                background: "transparent",
                border: 0,
                fontSize: "24px",
                cursor: "pointer",
                lineHeight: 1,
              }}
            >
              &times;
            </button>
            <div className="modal-header pb-2" style={{ borderBottom: "1px solid #eee" }}>
              <h5 className="modal-title" id="otpModalLabel" style={{ fontSize: "20px", fontWeight: 600 }}>
                OTP Verification
              </h5>
            </div>
            <div className="modal-body pt-3">
              <form id="otpFormrefer" onSubmit={handleOtpVerify}>
                <div className="mb-3">
                  <label
                    htmlFor="otprefer"
                    className="form-label"
                    style={{ fontWeight: 500, marginBottom: "6px" }}
                  >
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="otprefer"
                    style={{
                      border: "0.8px solid black",
                      borderRadius: "5px",
                      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                    }}
                    name="otprefer"
                    placeholder="Enter your OTP here"
                    required
                    value={otpValue}
                    onChange={(e) =>
                      setOtpValue(e.target.value.replace(/[^0-9]/g, ""))
                    }
                  />
                </div>
                <div style={{ textAlign: "right", marginTop: "10px" }}>
                  {resendCountdown > 0 ? (
                    <span id="resendOTPTimerrefer" style={{ color: "#777", fontSize: "14px" }}>
                      (Resend in{" "}
                      <span id="resendTimerValuerefer">{resendCountdown}</span> sec)
                    </span>
                  ) : (
                    <span
                      id="resendOTPTextrefer"
                      style={{
                        cursor: "pointer",
                        color: "#07a64b",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                      onClick={handleResendOtp}
                    >
                      Resend OTP
                    </span>
                  )}
                </div>
                {otpSuccess && (
                  <div
                    id="otpSuccessrefer"
                    style={{
                      color: "green",
                      textAlign: "center",
                      marginTop: "12px",
                      fontWeight: 600,
                    }}
                  >
                    Referral details submitted successfully!
                  </div>
                )}
                {otpError && (
                  <div
                    id="otpErrorsrefer"
                    style={{
                      textAlign: "center",
                      marginTop: "12px",
                      color: "#dc3545",
                    }}
                  >
                    {otpError}
                  </div>
                )}
                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-hover-primary"
                    style={{ minWidth: "140px" }}
                  >
                    Verify OTP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* OTP Modal End */}
    </>
  );
}
