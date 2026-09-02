"use client";
import React from "react";

export default function CourseCertificateSection() {
  return (
    <div
      className="campus-wrapper scene position-relative"
      style={{
        background:
          "linear-gradient(180deg, #1e7e3d 0%, #3ca05f 60px, #8ecfa5 160px, #cfead7 260px, #e8f5ec 100%)",
        padding: "45px 4%",
      }}
    >
      <div className="campus">
        {/* Centered Heading */}
        <div className="section-title text-center mb-4 pb-2">
          <h2
            className="section-title__title-03 mb-0"
            style={{
              fontSize: "clamp(32px, 4vw, 46px)",
              color: "#1a3826",
              fontFamily:
                "Georgia, 'Playfair Display', 'Times New Roman', serif",
              fontWeight: 800,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            PROGRAM CERTIFICATE
          </h2>
        </div>

        {/* 2-Column Row */}
        <div className="row gy-5 gx-4 flex-row-reverse align-items-center">
          {/* Right Column: Certificate Image (Increased size) */}
          <div className="col-md-6">
            <div
              className="campus-image text-center text-md-end"
              style={{ marginRight: "1%" }}
            >
              <div
                className="campus-image__image overflow-hidden"
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 16px 40px rgba(0, 0, 0, 0.22)",
                  display: "inline-block",
                  width: "100%",
                  maxWidth: "660px",
                }}
              >
                <img
                  src="https://prod-s3.counselindia.com/mastergalaxyimages/Short%20Course%20Sample%20Certificates%20_1726905700.jpg"
                  alt="Counsel India Certificate of Completion"
                  width={660}
                  height={462}
                  className="img-fluid w-100"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Left Column: Text */}
          <div className="col-md-6">
            <div className="campus-widget ps-lg-2">
              <div className="campus-widget-item">
                <div
                  className="campus-widget-item__content text-dark ps-0"
                  style={{
                    lineHeight: "1.6",
                    fontSize: "15.5px",
                    fontWeight: 700,
                    color: "#1f2937",
                  }}
                >
                  <p className="mb-3">
                    At Counsel India, we believe in recognizing your hard work
                    and commitment to learning. Upon completing our self-paced
                    courses, you will receive a{" "}
                    <strong
                      style={{
                        fontSize: "18px",
                        color: "#008738",
                        fontWeight: 800,
                      }}
                    >
                      Certificate of Completion
                    </strong>{" "}
                    as a testament to your achievement.
                  </p>

                  <p className="mb-3">
                    To earn this certificate,{" "}
                    <strong
                      style={{
                        fontSize: "18px",
                        color: "#008738",
                        fontWeight: 800,
                      }}
                    >
                      You will need to score at least 70% on the assessments
                      assigned throughout the course.
                    </strong>{" "}
                    These assessments are designed to help reinforce your
                    understanding of the material and ensure you are gaining
                    valuable knowledge.
                  </p>

                  <p className="mb-3">
                    Once you meet the requirement, your certificate will be
                    issued, allowing you to showcase your accomplishment in your
                    professional portfolio or share it with potential employers.
                  </p>

                  <p className="mb-0">
                    We encourage you to take advantage of this opportunity to
                    enhance your skills and add to your qualifications. Happy
                    learning!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
