"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function CiBusinessForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    mobile: "",
    state: "",
    city: "",
    companyName: "",
    companySize: "",
    hearAbout: "",
    purpose: "",
    agreed: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Please agree to the Terms & Conditions and Privacy Policy.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="contact-section py-5 bg-white" id="member">
      <div className="container custom-container py-3">
        {/* About Title Section matching screenshot */}
        <div
          className="about-section-title text-center"
          style={{ marginBottom: "50px" }}
        >
          <h2
            className="mb-3"
            style={{
              fontSize: "clamp(28px, 3.4vw, 38px)",
              fontFamily:
                "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontWeight: 700,
              color: "#1e2532",
            }}
          >
            How CI Helps Businesses
          </h2>
          <p
            className="mx-auto mb-0"
            style={{
              fontSize: "17.5px",
              lineHeight: "1.75",
              color: "#334155",
              maxWidth: "1060px",
              fontFamily: "Inter, 'Plus Jakarta Sans', system-ui, sans-serif",
            }}
          >
            Counsel India is a leading platform that helps businesses to improve
            the Mental Health of their employees, balance their work-life and
            capability to manage stress and stay happy. We help companies
            streamline their people happiness processes to make a better
            workplace and understand employees behavioral patterns by providing
            simplified and tailor made psychology training programs and
            workshops. Our experts have years of experience in understanding
            human behavior and solving their real life problems with simplified
            process.
          </p>
        </div>

        {/* Form Box with 0.8px border & 5px shadow matching PHP */}
        <div
          className="contact-form-box mx-auto"
          style={{
            border: "0.8px solid #000000",
            borderRadius: "6px",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
            padding: "50px 45px",
            maxWidth: "870px",
            backgroundColor: "#ffffff",
          }}
        >
          {/* Inner Form Title */}
          <div className="section-title text-center mb-5 pb-2">
            <h3
              className="m-0"
              style={{
                fontSize: "clamp(20px, 2.4vw, 26px)",
                fontFamily:
                  "'Playfair Display', Georgia, 'Times New Roman', serif",
                fontWeight: 700,
                color: "#1e2532",
                lineHeight: "1.4",
              }}
            >
              Fill the form below so we can get to know you and your needs
              better.
            </h3>
          </div>

          {submitted ? (
            <div className="alert alert-success text-center py-4 rounded-3">
              <h4 className="fw-bold mb-2">Thank you for reaching out!</h4>
              <p className="mb-0">
                Our corporate wellness specialist will connect with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="row gx-md-5 gy-4 gy-md-5">
                {/* Row 1: Name & Email */}
                <div className="col-md-6 col-12">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    className="form-control form-input-custom"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6 col-12">
                  <input
                    type="email"
                    required
                    placeholder="Your Email Address"
                    className="form-control form-input-custom"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                {/* Row 2: Country & Mobile */}
                <div className="col-md-6 col-12">
                  <select
                    required
                    className="form-select form-input-custom"
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                  >
                    <option value="">Please Select Country</option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="Singapore">Singapore</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-md-6 col-12">
                  <input
                    type="tel"
                    required
                    maxLength={12}
                    placeholder="Your Mobile Number"
                    className="form-control form-input-custom"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                  />
                </div>

                {/* Row 3: State & City */}
                <div className="col-md-6 col-12">
                  <select
                    required
                    className="form-select form-input-custom"
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                  >
                    <option value="">Please Select State</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-md-6 col-12">
                  <select
                    required
                    className="form-select form-input-custom"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                  >
                    <option value="">Please Select City</option>
                    <option value="New Delhi">New Delhi</option>
                    <option value="Noida">Noida</option>
                    <option value="Gurugram">Gurugram</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Pune">Pune</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Row 4: Company Name & Company Size */}
                <div className="col-md-6 col-12">
                  <input
                    type="text"
                    required
                    placeholder="Your Comapny Name"
                    className="form-control form-input-custom"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        companyName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-md-6 col-12">
                  <select
                    required
                    className="form-select form-input-custom"
                    value={formData.companySize}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        companySize: e.target.value,
                      })
                    }
                  >
                    <option value="">Company Size</option>
                    <option value="0-10">0 - 10</option>
                    <option value="10-50">10 - 50</option>
                    <option value="50-200">50 - 200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>

                {/* Row 5: How did you hear about us */}
                <div className="col-md-6 col-12">
                  <select
                    required
                    className="form-select form-input-custom"
                    value={formData.hearAbout}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hearAbout: e.target.value,
                      })
                    }
                  >
                    <option value="">How did you hear about us.</option>
                    <option value="Google">Google</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Blogs">Blogs</option>
                    <option value="Email">Email</option>
                    <option value="Whatsapp">Whatsapp</option>
                    <option value="Reference">Reference</option>
                    <option value="YouTube">YouTube</option>
                  </select>
                </div>

                {/* Row 6: Purpose of Enquiry Textarea (Full Width) */}
                <div className="col-12">
                  <textarea
                    rows={4}
                    required
                    placeholder="Purpose of Enquiry"
                    className="form-control form-input-custom"
                    style={{ minHeight: "130px", resize: "vertical" }}
                    value={formData.purpose}
                    onChange={(e) =>
                      setFormData({ ...formData, purpose: e.target.value })
                    }
                  ></textarea>
                </div>

                {/* Terms Checkbox */}
                <div className="col-12">
                  <div className="form-check d-flex align-items-start gap-2 ps-0">
                    <input
                      type="checkbox"
                      id="ci-terms"
                      required
                      className="form-check-input mt-1"
                      style={{
                        cursor: "pointer",
                        borderColor: "#000000",
                        accentColor: "#07a64b",
                        width: "16px",
                        height: "16px",
                      }}
                      checked={formData.agreed}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          agreed: e.target.checked,
                        })
                      }
                    />
                    <label
                      htmlFor="ci-terms"
                      className="form-check-label font-size-13 text-muted"
                      style={{ cursor: "pointer", lineHeight: "1.5" }}
                    >
                      By submitting this form, I agree to Counsel India’s{" "}
                      <Link
                        href="/terms-condition"
                        style={{ color: "#07a64b", fontWeight: 500 }}
                        className="text-decoration-none"
                      >
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy-policy"
                        style={{ color: "#07a64b", fontWeight: 500 }}
                        className="text-decoration-none"
                      >
                        Privacy Policy.
                      </Link>{" "}
                      <span className="text-danger">*</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button 100% Dead Centered */}
              <div className="w-100 text-center d-flex justify-content-center align-items-center mt-4 pt-2">
                <button type="submit" className="btn submit-btn">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        :global(.form-input-custom) {
          border: 1px solid #000000 !important;
          border-radius: 8px !important;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4) !important;
          height: 52px !important;
          padding: 12px 20px !important;
          font-size: 15px !important;
          color: #1e2532 !important;
          background-color: #ffffff !important;
        }

        :global(.form-input-custom:focus) {
          outline: none;
          border-color: #07a64b !important;
          box-shadow: 0 0 0 3px rgba(7, 166, 75, 0.15) !important;
        }

        :global(textarea.form-input-custom) {
          height: auto !important;
          padding: 14px 20px !important;
        }

        .submit-btn {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          text-align: center !important;
          line-height: 1 !important;
          height: 54px !important;
          padding: 0 65px !important;
          background-color: #00a651 !important;
          border: 1.2px solid #000000 !important;
          border-radius: 10px !important;
          font-weight: 800 !important;
          font-size: 20px !important;
          color: #ffffff !important;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.28) !important;
          cursor: pointer !important;
          min-width: 210px !important;
          font-family: Inter, sans-serif !important;
          transition: all 0.2s ease !important;
        }

        .submit-btn:hover {
          background-color: #008f45 !important;
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}
