"use client";
import React, { useState } from "react";
import { JOB_OPENINGS, PARTNER_LOGOS, JobOpening } from "./data/careerData";
import JobDetailModal from "./JobDetailModal";

export default function CareerView() {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (job: JobOpening) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="main-wrapper" style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      {/* Tutor Course Top Info Start */}
      <div className="tutor-course-top-info" style={{ width: "100%", backgroundColor: "#ffffff" }}>
        <img
          src="/assets/images/career_banner.png"
          alt="Get Your Dream Job Here"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>
      {/* Tutor Course Top Info End */}

      {/* FAQ / Partners Section Start */}
      <div className="faq-section" style={{ backgroundColor: "#ffffff", padding: "30px 0 15px" }}>
        <div className="container custom-container" style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}>
          <div className="row">
            <div className="partners-active swiper-dots-style">
              <div className="swiper">
                <div
                  className="swiper-wrapper"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "40px",
                    overflowX: "auto",
                    padding: "10px 0",
                    scrollbarWidth: "none",
                  }}
                >
                  {PARTNER_LOGOS.map((logo, idx) => (
                    <div
                      key={idx}
                      className="swiper-slide"
                      style={{
                        width: "180px",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        className="partner-logo"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "120px",
                          width: "100%",
                        }}
                      >
                        <div className="partner-logo__logo">
                          <img
                            src={logo.src}
                            alt={logo.name}
                            style={{
                              maxHeight: `${logo.height}px`,
                              maxWidth: "160px",
                              width: "auto",
                              objectFit: "contain",
                              display: "block",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ / Partners Section End */}

      {/* Page Banner Caption Start */}
      <h2
        className="page-banner__main-title-02 text-center"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "40px",
          fontWeight: 700,
          color: "#07a64b",
          marginTop: "45px",
          marginBottom: "30px",
          textAlign: "center",
          lineHeight: 1.3,
        }}
      >
        Current Openings
      </h2>
      {/* Page Banner Caption End */}

      {/* Call To Action Start */}
      <div className="call-to-action section-padding-01" style={{ backgroundColor: "#fbfcfe", padding: "30px 0 60px" }}>
        <div className="container custom-container" style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}>
          {JOB_OPENINGS.map((job) => (
            <div
              key={job.id}
              className="call-to-action__wrapper-04"
              style={{
                marginBottom: "25px",
                position: "relative",
                zIndex: 1,
                overflow: "hidden",
                boxShadow: "0 19px 34px 0 rgba(94, 122, 183, 0.14)",
                padding: "24px 32px",
                backgroundColor: "#ffffff",
                borderRadius: "5px",
                transition: "all 0.3s ease",
              }}
            >
              <div
                className="row gy-6 align-items-center"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: 0,
                }}
              >
                <div
                  className="col-md-8 col-lg-9"
                  style={{
                    flex: "1 1 72%",
                    padding: "4px 15px 4px 0",
                    maxWidth: "80%",
                  }}
                >
                  <div className="call-to-action__content-03" style={{ padding: 0 }}>
                    <h2
                      className="call-to-action__main-title-04"
                      style={{
                        fontSize: "23px",
                        fontWeight: 700,
                        lineHeight: 1.35,
                        color: "#232937",
                        margin: "0 0 8px",
                        fontFamily: "'Playfair Display', serif",
                        letterSpacing: "-0.2px",
                      }}
                    >
                      {job.title}
                    </h2>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        lineHeight: "1.75",
                        color: "#52565b",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {job.summary}{" "}
                      <a
                        href="#"
                        className="read-more-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          handleOpenModal(job);
                        }}
                        style={{
                          color: "#07a64b",
                          cursor: "pointer",
                          fontWeight: 600,
                          textDecoration: "none",
                          marginLeft: "4px",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-4 col-lg-3"
                  style={{
                    flex: "0 0 auto",
                    padding: "4px 0",
                    textAlign: "right",
                  }}
                >
                  <div className="call-to-action__btn-03" style={{ padding: 0, textAlign: "right" }}>
                    <a
                      href={job.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-hover-primary"
                      style={{
                        backgroundColor: "#07a64b",
                        borderColor: "#07a64b",
                        color: "#ffffff",
                        padding: "12px 32px",
                        borderRadius: "5px",
                        fontSize: "15px",
                        fontWeight: 500,
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: 1.4,
                        transition: "all 0.25s ease",
                        boxShadow: "none",
                        border: "none",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#068f40")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#07a64b")}
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Call To Action End */}

      {/* Job Description Detail Modal */}
      <JobDetailModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
