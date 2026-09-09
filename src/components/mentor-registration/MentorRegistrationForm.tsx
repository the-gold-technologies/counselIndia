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

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "14.5px",
  fontWeight: 400,
  color: "#333333",
  marginBottom: "8px",
  fontFamily: "'Poppins', sans-serif",
  textAlign: "left",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: "46px",
  borderRadius: "5px",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
  border: "0.8px solid black",
  padding: "8px 14px",
  fontSize: "14px",
  backgroundColor: "#ffffff",
  color: "#212529",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "'Poppins', sans-serif",
  textAlign: "left",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  paddingRight: "36px",
  cursor: "pointer",
  appearance: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23333333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 14px center",
};

const textareaStyle: React.CSSProperties = {
  width: "100%",
  minHeight: "95px",
  borderRadius: "5px",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
  border: "0.8px solid black",
  padding: "12px 14px",
  fontSize: "14px",
  backgroundColor: "#ffffff",
  color: "#212529",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "'Poppins', sans-serif",
  resize: "vertical",
  textAlign: "left",
};

export default function MentorRegistrationForm() {
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

  // Experience Repeater
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

  // Textareas
  const [achievements, setAchievements] = useState("");
  const [description, setDescription] = useState("");
  const [whatBringsYou, setWhatBringsYou] = useState("");

  // Terms Agreement
  const [termsAgreed, setTermsAgreed] = useState(false);

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
    }, 800);
  };

  return (
    <div
      className="contact-section"
      style={{
        padding: "35px 0 70px",
        backgroundColor: "#ffffff",
      }}
    >
      <style>{`
        .mentor-reg-card {
          border-radius: 5px !important;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.2) !important;
          border: 0.5px solid black !important;
          background-color: #ffffff;
          padding: 35px 40px;
          box-sizing: border-box;
          max-width: 850px;
          width: 100%;
          margin: 0 auto;
          text-align: left;
        }

        .reg-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px 22px;
          margin-bottom: 20px;
        }

        .reg-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px 22px;
          margin-bottom: 20px;
        }

        .reg-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px 18px;
          margin-bottom: 16px;
        }

        @media (max-width: 768px) {
          .mentor-reg-card {
            padding: 24px 18px;
          }
          .reg-grid-3,
          .reg-grid-2,
          .reg-grid-4 {
            grid-template-columns: 1fr !important;
          }
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
      `}</style>

      <div
        className="container custom-container"
        style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}
      >
        <div className="mentor-reg-card">
          {isSuccess ? (
            <div
              style={{
                padding: "36px 20px",
                textAlign: "center",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#dcfce7",
                  color: "#16a34a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 18px",
                  fontSize: "28px",
                  fontWeight: "bold",
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#15803d",
                  marginBottom: "8px",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Registration Submitted Successfully!
              </h3>
              <p style={{ color: "#4b5563", fontSize: "15px", marginBottom: "24px" }}>
                Thank you for applying. Our team will verify your credentials and reach out to you within 24–48 hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  setName("");
                  setEmail("");
                  setMobile("");
                  setExperience("");
                  setQualification("");
                  setExpertise("");
                  setRciNumber("");
                  setAddress("");
                  setLanguage("");
                  setExpectedCharges("");
                  setBankName("");
                  setAccountNumber("");
                  setAccountHolderName("");
                  setIfscCode("");
                  setAccountType("");
                  setProof1(null);
                  setProof2(null);
                  setIdentityProof(null);
                  setCvFile(null);
                  setPhotoFile(null);
                  setAchievements("");
                  setDescription("");
                  setWhatBringsYou("");
                  setTermsAgreed(false);
                }}
                style={{
                  backgroundColor: "#07a64b",
                  color: "#ffffff",
                  padding: "11px 32px",
                  borderRadius: "5px",
                  border: "none",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <>
              {/* Note Header */}
              <div style={{ marginBottom: "22px" }}>
                <p style={{ margin: 0, fontSize: "14px", fontFamily: "'Poppins', sans-serif" }}>
                  <b style={{ color: "red", fontWeight: 700 }}>Note : </b>{" "}
                  <span style={{ color: "#333333" }}>
                    All documents should be less than or equal to 200 Kb.
                  </span>
                </p>
              </div>

              {errorMessage && (
                <div
                  style={{
                    backgroundColor: "#fef2f2",
                    border: "1px solid #fecaca",
                    color: "#dc2626",
                    padding: "12px 16px",
                    borderRadius: "5px",
                    marginBottom: "20px",
                    fontSize: "14px",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {errorMessage}
                </div>
              )}

              <form id="myForm" onSubmit={handleSubmit}>
                {/* ROW 1: Full Name*, Email*, Mobile* */}
                <div className="reg-grid-3">
                  <div>
                    <label style={labelStyle}>
                      Full Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>
                      Email<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>
                      Mobile<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="Phone Number"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* ROW 2: Experience*, Qualification*, Expertise* */}
                <div className="reg-grid-3">
                  <div>
                    <label style={labelStyle}>
                      Experience (In Year) <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="Year Of Experience"
                      required
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>
                      Qualification<span style={{ color: "red" }}>*</span>
                    </label>
                    <select
                      required
                      value={qualification}
                      onChange={(e) => setQualification(e.target.value)}
                      style={{
                        ...selectStyle,
                        color: qualification ? "#212529" : "#6c757d",
                      }}
                    >
                      <option value="" style={{ color: "#6c757d" }}>
                        Select Higher Qualification
                      </option>
                      <option value="Higher Qualification">Higher Qualification</option>
                      <option value="10th">10th</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Post Graduate">Post Graduate</option>
                      <option value="Master's in Clinical Psychology">
                        Master&apos;s in Clinical Psychology
                      </option>
                      <option value="Master's in Counselling Psychology">
                        Master&apos;s in Counselling Psychology
                      </option>
                      <option value="Ph.D. in Psychology">Ph.D. in Psychology</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>
                      Expertise<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Expertise"
                      required
                      value={expertise}
                      onChange={(e) => setExpertise(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* ROW 3: RCI Number, Address*, Language */}
                <div className="reg-grid-3">
                  <div>
                    <label style={labelStyle}>RCI Number</label>
                    <input
                      type="text"
                      placeholder="RCI Number (If Any)"
                      value={rciNumber}
                      onChange={(e) => setRciNumber(e.target.value)}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>
                      Address<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="address"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Language</label>
                    <input
                      type="text"
                      placeholder="Add Language"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* ROW 4: Expected Charge * (1 col) */}
                <div className="reg-grid-3">
                  <div>
                    <label style={labelStyle}>
                      Expected Charge <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Expected Charges"
                      required
                      value={expectedCharges}
                      onChange={(e) => setExpectedCharges(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div />
                  <div />
                </div>

                {/* BANK DETAILS */}
                <div style={{ marginBottom: "24px" }}>
                  <label style={{ ...labelStyle, fontWeight: 500, marginBottom: "12px" }}>
                    Bank Details
                  </label>

                  <div className="reg-grid-3" style={{ marginBottom: "16px" }}>
                    <div>
                      <input
                        type="text"
                        placeholder="Bank Name"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Account Number"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Account Holder Name"
                        value={accountHolderName}
                        onChange={(e) => setAccountHolderName(e.target.value)}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div className="reg-grid-3" style={{ marginBottom: "0" }}>
                    <div>
                      <input
                        type="text"
                        placeholder="IFSC Code"
                        value={ifscCode}
                        onChange={(e) => setIfscCode(e.target.value)}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Account Type"
                        value={accountType}
                        onChange={(e) => setAccountType(e.target.value)}
                        style={inputStyle}
                      />
                    </div>
                    <div />
                  </div>
                </div>

                {/* DOCUMENT UPLOADS (2 Columns Grid) */}
                <div className="reg-grid-2">
                  <div>
                    <label style={labelStyle}>
                      Proof Of Higher Education-1<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="file"
                      required
                      onChange={(e) => handleFileChange(e, setProof1)}
                      className="mentor-file-input"
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Proof Of Higher Education-2(if any)</label>
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, setProof2)}
                      className="mentor-file-input"
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>
                      ID Proof<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      required
                      onChange={(e) => handleFileChange(e, setIdentityProof)}
                      className="mentor-file-input"
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>
                      Curriculum Vitae(CV)<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="file"
                      required
                      onChange={(e) => handleFileChange(e, setCvFile)}
                      className="mentor-file-input"
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>
                      Upload Your Photo<span style={{ color: "red" }}>*</span>
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

                {/* EXPERIENCE IN DETAIL REPEATER */}
                <div style={{ marginTop: "20px", marginBottom: "25px" }}>
                  <label style={{ ...labelStyle, fontWeight: 500, marginBottom: "14px" }}>
                    Experience in Detail
                  </label>

                  {experienceList.map((exp) => (
                    <div key={exp.id} style={{ marginBottom: "16px" }}>
                      <div className="reg-grid-4">
                        <div>
                          <label style={labelStyle}>Role</label>
                          <input
                            type="text"
                            placeholder="Role"
                            value={exp.role}
                            onChange={(e) => updateExperience(exp.id, "role", e.target.value)}
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Company Name</label>
                          <input
                            type="text"
                            placeholder="Company Name"
                            value={exp.company}
                            onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>From</label>
                          <input
                            type="date"
                            value={exp.fromDate}
                            onChange={(e) => updateExperience(exp.id, "fromDate", e.target.value)}
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>To</label>
                          <input
                            type="date"
                            value={exp.toDate}
                            onChange={(e) => updateExperience(exp.id, "toDate", e.target.value)}
                            style={inputStyle}
                          />
                        </div>
                      </div>

                      <div className="reg-grid-4" style={{ marginBottom: "14px" }}>
                        <div>
                          <label style={labelStyle}>Location</label>
                          <input
                            type="text"
                            placeholder="Location"
                            value={exp.location}
                            onChange={(e) => updateExperience(exp.id, "location", e.target.value)}
                            style={inputStyle}
                          />
                        </div>
                        <div />
                        <div />
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "flex-end",
                          }}
                        >
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

                      <hr
                        style={{
                          border: 0,
                          borderTop: "1px solid #e5e7eb",
                          margin: "14px 0 18px",
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <button
                      type="button"
                      onClick={addExperience}
                      style={{
                        backgroundColor: "#07a64b",
                        color: "#ffffff",
                        borderRadius: "4px",
                        padding: "8px 24px",
                        fontSize: "14px",
                        fontWeight: 600,
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      + Add
                    </button>
                  </div>
                </div>

                {/* ACHIEVEMENTS */}
                <div style={{ marginBottom: "20px" }}>
                  <label style={labelStyle}>
                    Achievements <span style={{ color: "red" }}>*</span>
                  </label>
                  <textarea
                    placeholder="Achievements"
                    required
                    value={achievements}
                    onChange={(e) => setAchievements(e.target.value)}
                    style={textareaStyle}
                  />
                </div>

                {/* ABOUT */}
                <div style={{ marginBottom: "20px" }}>
                  <label style={labelStyle}>
                    About<span style={{ color: "red" }}>*</span>
                  </label>
                  <textarea
                    placeholder="About You (50-100 Words)"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={textareaStyle}
                  />
                </div>

                {/* WHAT BRINGS YOU */}
                <div style={{ marginBottom: "22px" }}>
                  <label style={labelStyle}>
                    What Brings You <span style={{ color: "red" }}>*</span>
                  </label>
                  <textarea
                    placeholder="What I bring to you."
                    required
                    value={whatBringsYou}
                    onChange={(e) => setWhatBringsYou(e.target.value)}
                    style={textareaStyle}
                  />
                </div>

                {/* TERMS CHECKBOX */}
                <div style={{ marginBottom: "28px" }}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      cursor: "pointer",
                      fontSize: "14px",
                      color: "#212529",
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: 1.5,
                    }}
                  >
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
                        borderRadius: "3px",
                        flexShrink: 0,
                      }}
                    />
                    <span>
                      By submitting this form, I agree to Counsel India&apos;s{" "}
                      <Link
                        href="/terms-and-conditions"
                        target="_blank"
                        style={{ color: "#07a64b", textDecoration: "none", fontWeight: 500 }}
                      >
                        Terms &amp; Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy-policy"
                        target="_blank"
                        style={{ color: "#07a64b", textDecoration: "none", fontWeight: 500 }}
                      >
                        Privacy Policy.
                      </Link>{" "}
                      <span style={{ color: "red" }}>*</span>
                    </span>
                  </label>
                </div>

                {/* SUBMIT BUTTON */}
                <div style={{ textAlign: "center", marginTop: "24px" }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-hover-primary"
                    style={{
                      backgroundColor: "#07a64b",
                      border: "0.8px solid black",
                      borderRadius: "5px",
                      boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                      color: "#ffffff",
                      height: "50px",
                      lineHeight: 1,
                      minWidth: "190px",
                      padding: "0 50px",
                      fontSize: "17px",
                      fontWeight: 700,
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Poppins', sans-serif",
                      transition: "all 0.25s ease",
                      boxSizing: "border-box",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#057435";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#07a64b";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
