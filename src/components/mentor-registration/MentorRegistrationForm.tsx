"use client";
import React, { useState } from "react";
import Link from "next/link";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  fromDate: string;
  toDate: string;
  location: string;
}

export default function MentorRegistrationForm() {
  // Form fields matching PHP mentor-registration.blade.php
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [experience, setExperience] = useState("");
  const [qualification, setQualification] = useState("");
  const [expertise, setExpertise] = useState("");
  const [rciNumber, setRciNumber] = useState("");
  const [address, setAddress] = useState("");
  const [language, setLanguage] = useState("");
  const [expectedCharges, setExpectedCharges] = useState("");

  // Bank Details
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [accountType, setAccountType] = useState("");

  // Document Uploads
  const [proof1, setProof1] = useState<File | null>(null);
  const [proof2, setProof2] = useState<File | null>(null);
  const [identityProof, setIdentityProof] = useState<File | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  // Experience in Detail Repeater
  const [experienceList, setExperienceList] = useState<ExperienceItem[]>([
    {
      id: "exp-1",
      role: "",
      company: "",
      fromDate: "",
      toDate: "",
      location: "",
    },
  ]);

  // Long textareas
  const [achievements, setAchievements] = useState("");
  const [description, setDescription] = useState("");
  const [whatBringsYou, setWhatBringsYou] = useState("");

  // Terms Agreement
  const [termsAgreed, setTermsAgreed] = useState(false);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // File change handler with <= 200 KB check
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (f: File | null) => void
  ) => {
    const file = e.target.files && e.target.files[0] ? e.target.files[0] : null;
    if (!file) {
      setter(null);
      return;
    }

    const fileSizeKB = file.size / 1024;
    if (fileSizeKB > 200) {
      alert("File size must be less than 200 KB");
      e.target.value = "";
      setter(null);
    } else {
      setter(file);
    }
  };

  // Repeater handlers
  const addExperience = () => {
    setExperienceList((prev) => [
      ...prev,
      {
        id: `exp-${Date.now()}`,
        role: "",
        company: "",
        fromDate: "",
        toDate: "",
        location: "",
      },
    ]);
  };

  const updateExperience = (
    id: string,
    field: keyof ExperienceItem,
    value: string
  ) => {
    setExperienceList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const removeExperience = (id: string) => {
    if (experienceList.length > 1) {
      setExperienceList((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!termsAgreed) {
      setErrorMessage("You must agree to Terms & Conditions and Privacy Policy.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 100, behavior: "smooth" });
    }, 900);
  };

  return (
    <div style={{ backgroundColor: "#ffffff", padding: "40px 15px 80px" }}>
      {/* Scoped CSS to enforce exact pixel matching with PHP template */}
      <style>{`
        .mentor-reg-card {
          border-radius: 5px !important;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.2) !important;
          border: 0.5px solid black !important;
          background-color: #ffffff;
          padding: 35px 40px;
          box-sizing: border-box;
          text-align: left !important;
          max-width: 849px;
          width: 100%;
          margin: 0 auto;
        }

        .mentor-form-label {
          display: block;
          font-size: 14.5px;
          font-weight: 400;
          color: #333333;
          margin-bottom: 8px;
          text-align: left !important;
          font-family: 'Poppins', sans-serif;
        }

        .mentor-input {
          width: 100%;
          height: 46px;
          border-radius: 5px !important;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.3) !important;
          border: 0.8px solid black !important;
          padding: 8px 14px;
          font-size: 14px;
          background-color: #ffffff;
          color: #212529;
          outline: none;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
          text-align: left !important;
        }

        .mentor-input::placeholder {
          color: #757575;
          font-size: 14px;
        }

        .mentor-select {
          width: 100%;
          height: 46px;
          border-radius: 5px !important;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.3) !important;
          border: 0.8px solid black !important;
          padding: 8px 36px 8px 14px;
          font-size: 14px;
          background-color: #ffffff;
          color: #212529;
          outline: none;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23333333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          text-align: left !important;
        }

        .mentor-file-input {
          width: 100%;
          height: 46px;
          border-radius: 5px !important;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.3) !important;
          border: 0.8px solid black !important;
          padding: 0 !important;
          font-size: 14px;
          background-color: #ffffff;
          color: #212529;
          outline: none;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          display: flex;
          align-items: center;
          text-align: left !important;
        }

        .mentor-file-input::-webkit-file-upload-button {
          background-color: #eaedf1;
          border: none;
          border-right: 0.8px solid black;
          height: 100%;
          padding: 0 16px;
          margin-right: 14px;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          color: #212529;
          cursor: pointer;
        }

        .mentor-file-input::file-selector-button {
          background-color: #eaedf1;
          border: none;
          border-right: 0.8px solid black;
          height: 100%;
          padding: 0 16px;
          margin-right: 14px;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          color: #212529;
          cursor: pointer;
        }

        .mentor-textarea {
          width: 100%;
          min-height: 95px;
          border-radius: 5px !important;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.3) !important;
          border: 0.8px solid black !important;
          padding: 12px 14px;
          font-size: 14px;
          background-color: #ffffff;
          color: #212529;
          outline: none;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
          resize: vertical;
          text-align: left !important;
        }

        .mentor-textarea::placeholder {
          color: #757575;
          font-size: 14px;
        }

        .mentor-grid-3 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px 10px;
          margin-bottom: 22px;
          text-align: left !important;
        }

        .mentor-grid-2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px 20px;
          margin-bottom: 22px;
          text-align: left !important;
        }

        .mentor-grid-4 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px 12px;
          margin-bottom: 18px;
          text-align: left !important;
        }

        @media (min-width: 768px) {
          .mentor-grid-3 {
            grid-template-columns: repeat(3, 252px) !important;
            justify-content: space-between;
          }
          .mentor-grid-2 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .mentor-grid-4 {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>

      <div className="container custom-container" style={{ maxWidth: "849px", margin: "0 auto" }}>
        {/* Card wrapper matching PHP .contact-form.card */}
        <div className="mentor-reg-card">
          {/* Top Note */}
          <div style={{ marginBottom: "25px", textAlign: "left" }}>
            <p style={{ margin: 0, fontSize: "14.5px", fontFamily: "'Poppins', sans-serif", textAlign: "left" }}>
              <b style={{ color: "#e53e3e" }}>Note : </b>{" "}
              <span style={{ color: "#4a5568" }}>
                All documents should be less than or equal to 200 Kb.
              </span>
            </p>
          </div>

          {/* Success Banner */}
          {isSuccess && (
            <div
              style={{
                backgroundColor: "#d1e7dd",
                border: "1px solid #badbcc",
                color: "#0f5132",
                padding: "16px 20px",
                borderRadius: "5px",
                marginBottom: "25px",
                fontSize: "15px",
                fontFamily: "'Poppins', sans-serif",
                textAlign: "left",
              }}
            >
              <b>Form submitted successfully!</b> Thank you for applying to join Counsel India.
            </div>
          )}

          {errorMessage && (
            <div
              style={{
                backgroundColor: "#f8d7da",
                border: "1px solid #f5c2c7",
                color: "#842029",
                padding: "12px 16px",
                borderRadius: "5px",
                marginBottom: "20px",
                fontSize: "14px",
                fontFamily: "'Poppins', sans-serif",
                textAlign: "left",
              }}
            >
              {errorMessage}
            </div>
          )}

          <form id="myForm" onSubmit={handleSubmit} style={{ textAlign: "left" }}>
            {/* ROW 1: Full Name*, Email*, Mobile* (3 columns) */}
            <div className="mentor-grid-3">
              {/* Full Name */}
              <div style={{ textAlign: "left" }}>
                <label className="mentor-form-label">
                  Full Name<span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mentor-input"
                />
              </div>

              {/* Email */}
              <div style={{ textAlign: "left" }}>
                <label className="mentor-form-label">
                  Email<span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mentor-input"
                />
              </div>

              {/* Mobile */}
              <div style={{ textAlign: "left" }}>
                <label className="mentor-form-label">
                  Mobile<span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type="tel"
                  maxLength={10}
                  placeholder="Phone Number"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="mentor-input"
                />
              </div>
            </div>

            {/* ROW 2: Experience (In Year) *, Qualification*, Expertise* (3 columns) */}
            <div className="mentor-grid-3">
              {/* Experience (In Year) */}
              <div style={{ textAlign: "left" }}>
                <label className="mentor-form-label">
                  Experience (In Year) <span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type="number"
                  min="1"
                  placeholder="Year Of Experience"
                  required
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="mentor-input"
                />
              </div>

              {/* Qualification */}
              <div style={{ textAlign: "left" }}>
                <label className="mentor-form-label">
                  Qualification<span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <select
                  required
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  className="mentor-select"
                >
                  <option value="">Select Higher Qualification</option>
                  <option value="Higher Qualification">Higher Qualification</option>
                  <option value="10th">10th</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Post Graduate">Post Graduate</option>
                  <option value="Master's in Clinical Psychology">Master&apos;s in Clinical Psychology</option>
                  <option value="Master's in Counselling Psychology">Master&apos;s in Counselling Psychology</option>
                  <option value="Ph.D. in Psychology">Ph.D. in Psychology</option>
                </select>
              </div>

              {/* Expertise */}
              <div style={{ textAlign: "left" }}>
                <label className="mentor-form-label">
                  Expertise<span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Expertise"
                  required
                  value={expertise}
                  onChange={(e) => setExpertise(e.target.value)}
                  className="mentor-input"
                />
              </div>
            </div>

            {/* ROW 3: RCI Number, Address*, Language (3 columns) */}
            <div className="mentor-grid-3">
              {/* RCI Number */}
              <div style={{ textAlign: "left" }}>
                <label className="mentor-form-label">RCI Number</label>
                <input
                  type="text"
                  placeholder="RCI Number (If Any)"
                  value={rciNumber}
                  onChange={(e) => setRciNumber(e.target.value)}
                  className="mentor-input"
                />
              </div>

              {/* Address */}
              <div style={{ textAlign: "left" }}>
                <label className="mentor-form-label">
                  Address<span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mentor-input"
                />
              </div>

              {/* Language */}
              <div style={{ textAlign: "left" }}>
                <label className="mentor-form-label">Language</label>
                <input
                  type="text"
                  placeholder="Add Language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="mentor-input"
                />
              </div>
            </div>

            {/* ROW 4: Expected Charge * (1 column out of 3) */}
            <div className="mentor-grid-3">
              <div style={{ textAlign: "left" }}>
                <label className="mentor-form-label">
                  Expected Charge <span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Expected Charges"
                  required
                  value={expectedCharges}
                  onChange={(e) => setExpectedCharges(e.target.value)}
                  className="mentor-input"
                />
              </div>
              <div></div>
              <div></div>
            </div>

            {/* BANK DETAILS */}
            <div style={{ marginBottom: "26px", textAlign: "left" }}>
              <label className="mentor-form-label" style={{ marginBottom: "14px" }}>
                Bank Details
              </label>

              {/* Bank row 1: Bank Name, Account Number, Account Holder Name */}
              <div className="mentor-grid-3" style={{ marginBottom: "20px" }}>
                <div style={{ textAlign: "left" }}>
                  <input
                    type="text"
                    placeholder="Bank Name"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    className="mentor-input"
                  />
                </div>
                <div style={{ textAlign: "left" }}>
                  <input
                    type="text"
                    placeholder="Account Number"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="mentor-input"
                  />
                </div>
                <div style={{ textAlign: "left" }}>
                  <input
                    type="text"
                    placeholder="Account Holder Name"
                    value={accountHolderName}
                    onChange={(e) => setAccountHolderName(e.target.value)}
                    className="mentor-input"
                  />
                </div>
              </div>

              {/* Bank row 2: IFSC Code, Account Type */}
              <div className="mentor-grid-3" style={{ marginBottom: "0" }}>
                <div style={{ textAlign: "left" }}>
                  <input
                    type="text"
                    placeholder="IFSC Code"
                    value={ifscCode}
                    onChange={(e) => setIfscCode(e.target.value)}
                    className="mentor-input"
                  />
                </div>
                <div style={{ textAlign: "left" }}>
                  <input
                    type="text"
                    placeholder="Account Type"
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    className="mentor-input"
                  />
                </div>
                <div></div>
              </div>
            </div>

            {/* DOCUMENT UPLOADS (2 COLUMNS GRID) */}
            <div className="mentor-grid-2">
              {/* Proof Of Higher Education-1* */}
              <div style={{ textAlign: "left" }}>
                <label className="mentor-form-label">
                  Proof Of Higher Education-1<span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type="file"
                  required
                  onChange={(e) => handleFileChange(e, setProof1)}
                  className="mentor-file-input"
                />
              </div>

              {/* Proof Of Higher Education-2(if any) */}
              <div style={{ textAlign: "left" }}>
                <label className="mentor-form-label">Proof Of Higher Education-2(if any)</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, setProof2)}
                  className="mentor-file-input"
                />
              </div>

              {/* ID Proof* */}
              <div style={{ textAlign: "left" }}>
                <label className="mentor-form-label">
                  ID Proof<span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={(e) => handleFileChange(e, setIdentityProof)}
                  className="mentor-file-input"
                />
              </div>

              {/* Curriculum Vitae(CV)* */}
              <div style={{ textAlign: "left" }}>
                <label className="mentor-form-label">
                  Curriculum Vitae(CV)<span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type="file"
                  required
                  onChange={(e) => handleFileChange(e, setCvFile)}
                  className="mentor-file-input"
                />
              </div>

              {/* Upload Your Photo* */}
              <div style={{ textAlign: "left" }}>
                <label className="mentor-form-label">
                  Upload Your Photo<span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={(e) => handleFileChange(e, setPhotoFile)}
                  className="mentor-file-input"
                />
              </div>
            </div>

            {/* EXPERIENCE IN DETAIL */}
            <div style={{ marginTop: "16px", marginBottom: "25px", textAlign: "left" }}>
              <label className="mentor-form-label" style={{ marginBottom: "14px" }}>
                Experience in Detail
              </label>

              {experienceList.map((exp) => (
                <div key={exp.id} style={{ marginBottom: "15px", textAlign: "left" }}>
                  {/* Row 1: 4 columns -> Role, Company Name, From, To */}
                  <div className="mentor-grid-4">
                    <div style={{ textAlign: "left" }}>
                      <label className="mentor-form-label">Role</label>
                      <input
                        type="text"
                        placeholder="Role"
                        value={exp.role}
                        onChange={(e) => updateExperience(exp.id, "role", e.target.value)}
                        className="mentor-input"
                      />
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <label className="mentor-form-label">Company Name</label>
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                        className="mentor-input"
                      />
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <label className="mentor-form-label">From</label>
                      <input
                        type="date"
                        value={exp.fromDate}
                        onChange={(e) => updateExperience(exp.id, "fromDate", e.target.value)}
                        className="mentor-input"
                      />
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <label className="mentor-form-label">To</label>
                      <input
                        type="date"
                        value={exp.toDate}
                        onChange={(e) => updateExperience(exp.id, "toDate", e.target.value)}
                        className="mentor-input"
                      />
                    </div>
                  </div>

                  {/* Row 2: Location (occupies 1 column out of 4) */}
                  <div className="mentor-grid-4" style={{ marginBottom: "18px" }}>
                    <div style={{ textAlign: "left" }}>
                      <label className="mentor-form-label">Location</label>
                      <input
                        type="text"
                        placeholder="Location"
                        value={exp.location}
                        onChange={(e) => updateExperience(exp.id, "location", e.target.value)}
                        className="mentor-input"
                      />
                    </div>
                    <div></div>
                    <div></div>
                    <div style={{ textAlign: "right", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
                      {experienceList.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeExperience(exp.id)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "#dc2626",
                            fontSize: "13px",
                            cursor: "pointer",
                            textDecoration: "underline",
                            paddingBottom: "8px",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>

                  <hr style={{ border: 0, borderTop: "1px solid #e2e8f0", margin: "16px 0 20px" }} />
                </div>
              ))}

              {/* Add Button */}
              <div style={{ textAlign: "left" }}>
                <button
                  type="button"
                  onClick={addExperience}
                  style={{
                    backgroundColor: "#07a64b",
                    borderColor: "#07a64b",
                    color: "#ffffff",
                    borderRadius: "4px",
                    padding: "8px 24px",
                    fontSize: "14px",
                    fontWeight: 500,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Add
                </button>
              </div>
            </div>

            {/* ACHIEVEMENTS */}
            <div style={{ marginBottom: "22px", textAlign: "left" }}>
              <label className="mentor-form-label">
                Achievements <span style={{ color: "#e53e3e" }}>*</span>
              </label>
              <textarea
                placeholder="Achievements"
                required
                value={achievements}
                onChange={(e) => setAchievements(e.target.value)}
                className="mentor-textarea"
              />
            </div>

            {/* ABOUT */}
            <div style={{ marginBottom: "22px", textAlign: "left" }}>
              <label className="mentor-form-label">
                About<span style={{ color: "#e53e3e" }}>*</span>
              </label>
              <textarea
                placeholder="About You (50-100 Words)"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mentor-textarea"
              />
            </div>

            {/* WHAT BRINGS YOU */}
            <div style={{ marginBottom: "24px", textAlign: "left" }}>
              <label className="mentor-form-label">
                What Brings You <span style={{ color: "#e53e3e" }}>*</span>
              </label>
              <textarea
                placeholder="What I bring to you."
                required
                value={whatBringsYou}
                onChange={(e) => setWhatBringsYou(e.target.value)}
                className="mentor-textarea"
              />
            </div>

            {/* TERMS CHECKBOX */}
            <div style={{ marginBottom: "30px", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", textAlign: "left" }}>
                <input
                  type="checkbox"
                  id="Terms"
                  required
                  checked={termsAgreed}
                  onChange={(e) => setTermsAgreed(e.target.checked)}
                  style={{
                    width: "18px",
                    height: "18px",
                    accentColor: "#07a64b",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                />
                <label
                  htmlFor="Terms"
                  style={{
                    fontSize: "14px",
                    color: "#212529",
                    margin: 0,
                    cursor: "pointer",
                    fontFamily: "'Poppins', sans-serif",
                    textAlign: "left",
                  }}
                >
                  By submitting this form, I agree to Counsel India&apos;s{" "}
                  <Link href="/terms-condition" target="_blank" style={{ color: "#07a64b", textDecoration: "none" }}>
                    Terms &amp; Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy" target="_blank" style={{ color: "#07a64b", textDecoration: "none" }}>
                    Privacy Policy.
                  </Link>{" "}
                  <span style={{ color: "#e53e3e" }}>*</span>
                </label>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: "#07a64b",
                  borderColor: "#07a64b",
                  color: "#ffffff",
                  borderRadius: "4px",
                  padding: "10px 48px",
                  fontSize: "16px",
                  fontWeight: 600,
                  border: "none",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  fontFamily: "'Poppins', sans-serif",
                  transition: "background-color 0.2s ease",
                }}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
