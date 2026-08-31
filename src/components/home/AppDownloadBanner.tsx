"use client";
import React from "react";
import Link from "next/link";

export default function AppDownloadBanner() {
  return (
    <>
      {/* 1. Download Start */}
      <div className="download-section section-padding-02 bg-white position-relative overflow-hidden py-5">
        <div className="container custom-container">
          <div className="row gy-10 justify-content-center flex-row-reverse align-items-center">
            {/* Right Column: 2 Mobile Mockup Phones */}
            <div className="col-md-5">
              <div className="download-image text-center text-md-end">
                <img
                  src="/assets/images/download-image-02.png"
                  alt="Counsel India Mobile App"
                  width="423"
                  height="442"
                  style={{ maxWidth: "100%", height: "auto", display: "inline-block" }}
                />
              </div>
            </div>

            {/* Left Column: Text & Bullets & Badges */}
            <div className="col-md-7">
              <div className="download-content-02 text-center text-md-start position-relative">
                {/* 3 Green Leaf / Drop Doodles */}
                <img
                  className="download-content-02__shape d-none d-md-block"
                  src="/assets/images/shape/home-online-art-shape.png"
                  alt="Decorative Shape"
                  width="68"
                  height="80"
                  style={{
                    position: "absolute",
                    top: "-25px",
                    right: "15%",
                    pointerEvents: "none",
                  }}
                />

                <h2 className="download-content-02__main-title font-size-36 fw-bold mb-2">
                  Learning Made <mark>Easy</mark>
                </h2>

                <h5 className="download-content-02__sub-title text-success fw-bold font-size-18 mb-4">
                  Quality education that&apos;s accessible no matter where you are
                </h5>

                <ul
                  className="tutor-course-segment__list-style-03 list-unstyled ps-0 mb-4 text-start font-size-14"
                  style={{ lineHeight: "1.8", color: "#444" }}
                >
                  <li className="mb-2">
                    <span className="fw-bold">• Adaptive Learning Technology</span> – Experience an engaging and
                    personalized learning that’s tailored to your needs via our intuitive Mobile App and Web Platform.
                  </li>
                  <li className="mb-2">
                    <span className="fw-bold">• Practical Learning</span> – each of our course modules are attached
                    with a practical and experiential learning assignment.
                  </li>
                  <li className="mb-2">
                    <span className="fw-bold">• Cost-Effective Options</span> – We’re committed to helping you find the
                    fastest and most affordable path to earning your skills and certifications.
                  </li>
                  <li className="mb-2">
                    <span className="fw-bold">• Ease</span> – Enjoy the flexibility of online learning that allows you
                    work life balance.
                  </li>
                  <li className="mb-2">
                    <span className="fw-bold">• Interactive Learning Environment</span> – Our online classroom ensures
                    students are engaged and learning with each course designed to promote maximum collaboration
                  </li>
                  <li className="mb-2">
                    <span className="fw-bold">• Professional Support to Help You Build a Career Plan</span> – Discuss
                    your skills, strengths, goals, and how your new degree can help expand your career opportunities.
                  </li>
                </ul>

                <div className="download-content-02__btn d-flex flex-wrap align-items-center justify-content-center justify-content-md-start gap-3 position-relative pt-2">
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ios_img_but"
                  >
                    <img
                      src="/assets/images/ios.png"
                      alt="Download on the App Store"
                      width="170"
                      height="52"
                      style={{ height: "48px", width: "auto", display: "block" }}
                    />
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=co.alicia.qcmiv&pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/images/android.png"
                      alt="Get it on Google Play"
                      width="170"
                      height="52"
                      style={{ height: "48px", width: "auto", display: "block" }}
                    />
                  </a>

                  <Link
                    href="/contact"
                    className="btn btn-primary btn-hover-primary get_in px-4 py-2 fw-semibold rounded-2"
                    style={{
                      backgroundColor: "#07a64b",
                      borderColor: "#07a64b",
                      color: "#fff",
                      height: "48px",
                      display: "inline-flex",
                      alignItems: "center",
                      fontSize: "15px",
                    }}
                  >
                    Get in Touch
                  </Link>

                  {/* Green Pointer Arrow */}
                  <img
                    className="download-content-02__arrow d-none d-lg-block"
                    src="/assets/images/secondary-arrow.png"
                    alt="Pointer Arrow"
                    style={{
                      position: "absolute",
                      left: "-55px",
                      bottom: "-5px",
                      width: "42px",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Got more questions? Get in Touch Banner */}
      <div className="banner-section section-padding-01 py-4">
        <div className="container custom-container">
          <div className="row gy-8">
            <div className="col-lg-12">
              <div
                className="banner-box rounded-3 p-4 p-md-5 text-white"
                style={{
                  backgroundColor: "#07a64b",
                  backgroundImage: "linear-gradient(135deg, #07a64b 0%, #057d38 100%)",
                }}
              >
                <div className="row gy-4 gy-sm-0 align-items-center">
                  <div className="col-xxl-7 col-md-7">
                    <div className="banner-caption">
                      <p className="pb-1 text-white-50 font-size-14 mb-1">Got more questions?</p>
                      <h3 className="banner-caption__title text-white font-size-28 fw-bold mb-3">
                        Get in Touch
                      </h3>
                      <p className="text-white mb-2 font-size-15">
                        Talk to our team :{" "}
                        <a href="tel:9560477488" className="text-white fw-bold text-decoration-underline">
                          +91 95604 77488
                        </a>
                      </p>
                      <p className="text-white-50 font-size-14 mb-0">
                        Or write to us on{" "}
                        <a
                          href="mailto:wecare@counselindiaservices.in"
                          className="text-white fw-semibold text-decoration-underline"
                        >
                          wecare@counselindiaservices.in
                        </a>
                        , our Program Advisor will reach out to you shortly.
                      </p>
                    </div>
                  </div>

                  <div className="col-xxl-5 col-md-5 text-center text-md-end">
                    <div className="banner-image">
                      <img
                        src="https://prod-s3.counselindia.com/images/banner-1.png"
                        alt="Psychology Support"
                        width="400"
                        height="210"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
