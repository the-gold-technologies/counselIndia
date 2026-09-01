"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <>
      <footer
        className="footer-section bg-color-12 position-relative"
        style={{
          backgroundColor: "#242a37",
          color: "#ffffff",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Footer Widget Area Start */}
        <div className="footer-widget-area section-padding-01 pt-5 pb-4">
          <div className="container custom-container pb-4">
            <div className="row gy-6 gx-4">
              {/* Col 1: Products */}
              <div className="col-lg-2 col-md-4 col-6">
                <div className="footer-widget">
                  <h4 className="footer-widget__title text-white font-size-16 fw-bold mb-3">Products</h4>
                  <ul className="footer-widget__link footer-widget__link-02 list-unstyled ps-0 font-size-14" style={{ lineHeight: "2.1" }}>
                    <li>
                      <Link href="/courses" className="text-white hover-text-primary text-decoration-none">
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link href="/counsellors-network" className="text-white hover-text-primary text-decoration-none">
                        Counselling
                      </Link>
                    </li>
                    <li>
                      <Link href="/ci-business" className="text-white hover-text-primary text-decoration-none">
                        CI for Business
                      </Link>
                    </li>
                    <li>
                      <Link href="/counsellors-network" className="text-white hover-text-primary text-decoration-none">
                        Counsellors Network
                      </Link>
                    </li>
                    <li>
                      <Link href="/membership" className="text-white hover-text-primary text-decoration-none">
                        Memberships/<br />Registrations
                      </Link>
                    </li>
                    <li>
                      <Link href="/eligibility-test" className="text-white hover-text-primary text-decoration-none">
                        Check Your Eligibility
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Col 2: Company */}
              <div className="col-lg-2 col-md-4 col-6">
                <div className="footer-widget">
                  <h4 className="footer-widget__title text-white font-size-16 fw-bold mb-3">Company</h4>
                  <ul className="footer-widget__link footer-widget__link-02 list-unstyled ps-0 font-size-14" style={{ lineHeight: "2.1" }}>
                    <li>
                      <Link href="/about" className="text-white hover-text-primary text-decoration-none">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/event" className="text-white hover-text-primary text-decoration-none">
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link href="/success-stories" className="text-white hover-text-primary text-decoration-none">
                        Success Stories
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers" className="text-white hover-text-primary text-decoration-none">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-white hover-text-primary text-decoration-none">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/alumni" className="text-white hover-text-primary text-decoration-none">
                        Alumni Network
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Col 3: Resources */}
              <div className="col-lg-2 col-md-4 col-6">
                <div className="footer-widget">
                  <h4 className="footer-widget__title text-white font-size-16 fw-bold mb-3">Resources</h4>
                  <ul className="footer-widget__link footer-widget__link-02 list-unstyled ps-0 font-size-14" style={{ lineHeight: "2.1" }}>
                    <li>
                      <Link href="/blog" className="text-white hover-text-primary text-decoration-none">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/newsletter" className="text-white hover-text-primary text-decoration-none">
                        Newsletter
                      </Link>
                    </li>
                    <li>
                      <Link href="/news" className="text-white hover-text-primary text-decoration-none">
                        News/Media
                      </Link>
                    </li>
                    <li>
                      <Link href="/ebook" className="text-white hover-text-primary text-decoration-none">
                        eBooks
                      </Link>
                    </li>
                    <li>
                      <a href="https://rzp.io/l/counselindiapayment" target="_blank" rel="noopener noreferrer" className="text-white hover-text-primary text-decoration-none">
                        Online Payment
                      </a>
                    </li>
                    <li>
                      <Link href="/faqs" className="text-white hover-text-primary text-decoration-none">
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Col 4: Support */}
              <div className="col-lg-2 col-md-4 col-6">
                <div className="footer-widget">
                  <h4 className="footer-widget__title text-white font-size-16 fw-bold mb-3">Support</h4>
                  <ul className="footer-widget__link footer-widget__link-02 list-unstyled ps-0 font-size-14" style={{ lineHeight: "2.1" }}>
                    <li>
                      <Link href="/terms-and-conditions" className="text-white hover-text-primary text-decoration-none">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="/refund-policy" className="text-white hover-text-primary text-decoration-none">
                        Refund Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy" className="text-white hover-text-primary text-decoration-none">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/academic-policy" className="text-white hover-text-primary text-decoration-none">
                        Academic Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/grievance" className="text-white hover-text-primary text-decoration-none">
                        Grievance Form
                      </Link>
                    </li>
                    <li>
                      <Link href="/ask-question" className="text-white hover-text-primary text-decoration-none">
                        Ask a Question
                      </Link>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => setShowLoginModal(true)}
                        className="btn btn-link p-0 text-white hover-text-primary text-decoration-none font-size-14 border-0"
                      >
                        Counselor Login
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Col 5: Company Info & Address */}
              <div className="col-lg-4 col-md-8 col-12">
                <div className="footer-widget">
                  <p className="footer-widget__description mb-2 font-size-13 text-white" style={{ lineHeight: "1.6" }}>
                    Counsel India is India&apos;s fastest growing network of Counsellors and Psychologists delivering practical learning and transformative programs in{" "}
                    <Link href="/about" className="primary-text-color text-success text-decoration-underline fw-bold">
                      More
                    </Link>
                  </p>

                  <div className="footer-widget__info font-size-13 mb-3">
                    <span className="text-white fw-bold d-block">
                      COUNSELINDIA SERVICES PRIVATE LIMITED
                    </span>
                    <span className="text-white fw-semibold d-block mt-1">
                      GST : 09AAICC6447N1Z0
                    </span>

                    <address className="text-white font-size-13 mt-2 mb-0" style={{ lineHeight: "1.6" }}>
                      <div className="d-flex align-items-start gap-2 mb-1">
                        <i className="fas fa-map-marker-alt text-white mt-1"></i>
                        <span>12A20, 13th Floor, E-Square , Sector 96, Noida, Uttar Pradesh 201301</span>
                      </div>
                      <div className="d-flex align-items-start gap-2">
                        <i className="fas fa-map-marker-alt text-white mt-1"></i>
                        <span>
                          For Client Visit : Office no 12A20, Floor No-13, E-Square sector 96, Noida, Uttar Pradesh 201301
                        </span>
                      </div>
                    </address>
                  </div>

                  {/* Social Icons */}
                  <div className="footer-widget__social d-flex align-items-center gap-3 mt-3">
                    <a
                      href="https://twitter.com/counselindia1?lang=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover-text-primary font-size-16"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/counselindia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover-text-primary font-size-16"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/counsel_india_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover-text-primary font-size-16"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCWnALe3hLVdGJzVOuEgGoYg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover-text-primary font-size-16"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/28905636/admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover-text-primary font-size-16"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Accreditation Badges & Newsletter Bar */}
            <div className="row align-items-center mt-4 pt-3">
              <div className="col-lg-7 col-md-6 mb-4 mb-md-0">
                <div className="d-flex flex-wrap align-items-center gap-3">
                  <div
                    className="p-1 rounded-circle bg-white d-flex align-items-center justify-content-center shadow-sm"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <img
                      src="/assets/images/counsel2.jpg"
                      alt="IAOTH Accredited"
                      style={{ width: "46px", height: "46px", objectFit: "contain", borderRadius: "50%" }}
                    />
                  </div>
                  <div
                    className="p-1 rounded-circle bg-white d-flex align-items-center justify-content-center shadow-sm"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <img
                      src="/assets/images/counsel1.jpg"
                      alt="Skill India Accreditation"
                      style={{ width: "46px", height: "46px", objectFit: "contain", borderRadius: "50%" }}
                    />
                  </div>
                  <div
                    className="p-1 rounded-circle bg-white d-flex align-items-center justify-content-center shadow-sm"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <img
                      src="/assets/images/logo/msu_logo.png"
                      alt="Medhavi Skills University"
                      style={{ width: "46px", height: "46px", objectFit: "contain", borderRadius: "50%" }}
                    />
                  </div>
                  <div
                    className="p-1 rounded-circle bg-white d-flex align-items-center justify-content-center shadow-sm"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <img
                      src="/assets/images/logo/GU_logo.png"
                      alt="Galgotias University"
                      style={{ width: "46px", height: "46px", objectFit: "contain", borderRadius: "50%" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-6">
                <h6 className="text-white font-size-15 fw-bold mb-2">
                  Subscribe to our Newsletter
                </h6>
                <form
                  onSubmit={handleSubscribe}
                  className="d-flex align-items-center p-1 rounded-2 bg-white shadow-sm"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    className="form-control border-0 shadow-none font-size-14 text-dark px-3"
                    style={{ backgroundColor: "transparent" }}
                  />
                  <button
                    type="submit"
                    className="btn btn-success px-4 font-size-14 fw-semibold rounded-2 flex-shrink-0"
                    style={{ backgroundColor: "#07a64b", borderColor: "#07a64b", color: "#fff" }}
                  >
                    Subscribe
                  </button>
                </form>
                {newsletterSubscribed && (
                  <p className="text-success font-size-12 mt-1 mb-0 fw-semibold">
                    ✓ Thank you for subscribing!
                  </p>
                )}
              </div>
            </div>

            {/* Horizontal Line Divider */}
            <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.2)", paddingTop: "30px", marginBottom: "30px" }}></div>

            {/* SEO Categorized Course Directory Links */}
            <div className="font-size-13" style={{ lineHeight: "1.9" }}>
              <div className="mb-3">
                <h6 className="text-white fw-bold mb-1 font-size-14">Trending MBA Programs</h6>
                <div>
                  <Link href="/courses/masters-industrial-organizational-psychology" className="text-decoration-none hover-text-white" style={{ color: "#969696" }}>
                    Masters in Industrial &amp; Organizational Psychology
                  </Link>
                </div>
              </div>

              <div className="mb-3">
                <h6 className="text-white fw-bold mb-1 font-size-14">Master&apos;s Programs</h6>
                <div>
                  <Link href="/courses/counselling-master-course-advanced" className="text-decoration-none hover-text-white" style={{ color: "#969696" }}>
                    Counselling Master Course- Advanced
                  </Link>
                  <span className="mx-2" style={{ color: "#969696" }}>|</span>
                  <Link href="/courses/counselling-master-course-intermediate" className="text-decoration-none hover-text-white" style={{ color: "#969696" }}>
                    Counselling Master Course - Intermediate
                  </Link>
                  <span className="mx-2" style={{ color: "#969696" }}>|</span>
                  <Link href="/courses/counselling-master-course-foundation" className="text-decoration-none hover-text-white" style={{ color: "#969696" }}>
                    Counselling Master Course- Foundation
                  </Link>
                </div>
              </div>

              <div className="mb-3">
                <h6 className="text-white fw-bold mb-1 font-size-14">PG Diploma Programs</h6>
                <div>
                  <Link href="/courses/pg-diploma-clinical-psychology" className="text-decoration-none hover-text-white" style={{ color: "#969696" }}>
                    PG Diploma in Clinical Psychology
                  </Link>
                  <span className="mx-2" style={{ color: "#969696" }}>|</span>
                  <Link href="/courses/pg-diploma-child-psychology" className="text-decoration-none hover-text-white" style={{ color: "#969696" }}>
                    PG Diploma in Child Psychology
                  </Link>
                  <span className="mx-2" style={{ color: "#969696" }}>|</span>
                  <Link href="/courses/pg-diploma-counselling-psychology" className="text-decoration-none hover-text-white" style={{ color: "#969696" }}>
                    PG Diploma in Counselling Psychology
                  </Link>
                </div>
              </div>

              <div className="mb-3">
                <h6 className="text-white fw-bold mb-1 font-size-14">Certification Programs</h6>
                <div>
                  <Link href="/courses/certificate-cbt" className="text-decoration-none hover-text-white" style={{ color: "#969696" }}>
                    Certificate in Cognitive Behavioural Therapy (CBT)
                  </Link>
                  <span className="mx-2" style={{ color: "#969696" }}>|</span>
                  <Link href="/courses/certificate-art-therapy" className="text-decoration-none hover-text-white" style={{ color: "#969696" }}>
                    Certificate in Art Therapy
                  </Link>
                  <span className="mx-2" style={{ color: "#969696" }}>|</span>
                  <Link href="/courses/certificate-rebt" className="text-decoration-none hover-text-white" style={{ color: "#969696" }}>
                    Certificate in Rational Emotive Behaviour Therapy (REBT)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="footer-copyright py-3" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", backgroundColor: "#171c26" }}>
          <div className="container">
            <p className="text-center mb-0 font-size-13 text-white">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-white">CounselIndia Services Private Limited. All Rights Reserved</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Counselor Login Modal */}
      {showLoginModal && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", zIndex: 1050 }}
          onClick={() => setShowLoginModal(false)}
        >
          <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content rounded-3 overflow-hidden shadow-lg border-0">
              <div className="modal-header border-0 bg-light p-4">
                <h5 className="modal-title fw-bold text-dark font-size-18">Counselor Portal Login</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowLoginModal(false)}
                ></button>
              </div>
              <div className="modal-body p-4">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Counselor credentials verified.");
                    setShowLoginModal(false);
                  }}
                >
                  <div className="mb-3">
                    <label className="form-label font-size-13 fw-semibold text-muted">Registered Email</label>
                    <input
                      type="email"
                      required
                      placeholder="counselor@counselindia.com"
                      className="form-control font-size-14"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label font-size-13 fw-semibold text-muted">Password</label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      className="form-control font-size-14"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2 font-size-14 fw-semibold"
                    style={{ backgroundColor: "#07a64b", borderColor: "#07a64b" }}
                  >
                    Login to Portal
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
