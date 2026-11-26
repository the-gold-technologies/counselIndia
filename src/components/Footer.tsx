"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import CounselorLoginModal from "./auth/CounselorLoginModal";

import { submitLead } from "@/services/leadService";
import { getActiveCourses } from "@/services/courseService";

// Accreditation / membership badges shown in the footer (same logos as the live site footer)
const FOOTER_BADGES = [
  {
    src: "https://prod-s3.counselindia.com/footerlogo/gallery_foot2_1695194837.webp",
    alt: "World Federation for Mental Health (WFMH)",
  },
  {
    src: "https://prod-s3.counselindia.com/footerlogo/gallery_foot3_1695194847.webp",
    alt: "ISO 9001:2015 Certified Company",
  },
  {
    src: "https://prod-s3.counselindia.com/footerlogo/gallery_foot5_1695194868.webp",
    alt: "National Career Service",
  },
  {
    src: "https://prod-s3.counselindia.com/footerlogo/gallery_foot7_1695194890.webp",
    alt: "International Association of Therapists (IAOTH)",
  },
];

// Footer course directory is built from active courses in the Admin panel, grouped by category.
// Categories listed here are shown first, in this order; any other category follows.
const FOOTER_CATEGORY_ORDER = [
  "Masters Programs",
  "PG Diploma Programs",
  "Certification Programs",
  "Entrepreneurship Programs",
];

type FooterCourseGroup = { title: string; courses: { name: string; slug: string }[] };

export default function Footer() {
  const { settings } = useSiteSettings();
  const [email, setEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [courseGroups, setCourseGroups] = useState<FooterCourseGroup[]>([]);

  useEffect(() => {
    let isMounted = true;
    getActiveCourses().then((courses) => {
      if (!isMounted) return;
      const byCategory = new Map<string, FooterCourseGroup>();
      for (const c of courses) {
        const title = c.category || "Other Programs";
        if (!byCategory.has(title)) byCategory.set(title, { title, courses: [] });
        byCategory.get(title)!.courses.push({ name: c.name, slug: c.slug });
      }
      const rank = (t: string) => {
        const i = FOOTER_CATEGORY_ORDER.indexOf(t);
        return i === -1 ? FOOTER_CATEGORY_ORDER.length : i;
      };
      setCourseGroups([...byCategory.values()].sort((a, b) => rank(a.title) - rank(b.title)));
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterError("");
    const trimmed = email.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmed || !emailRegex.test(trimmed)) {
      setNewsletterError("Please enter a valid email address.");
      return;
    }

    await submitLead({
      category: "subscription",
      email: trimmed,
      source: "Footer Newsletter",
      medium: "Website Footer",
    });
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setEmail("");
    }, 4000);
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
          paddingBottom: "60px",
        }}
      >
        {/* Footer Widget Area Start */}
        <div className="footer-widget-area section-padding-01 pt-5 pb-4">
          <div className="container custom-container pb-4">
            <div className="row gy-6 gx-4">
              {/* Col 1: Products */}
              <div className="col-lg-2 col-md-4 col-6">
                <div className="footer-widget">
                  <h4 className="footer-widget__title text-white font-size-16 fw-bold mb-3">
                    Products
                  </h4>
                  <ul
                    className="footer-widget__link footer-widget__link-02 list-unstyled ps-0 font-size-14"
                    style={{ lineHeight: "2.1" }}
                  >
                    <li>
                      <Link
                        href="/all-courses-list"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/counsellors-network"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        Counselling
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ci-business"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        CI for Business
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/counsellors-network"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        Counsellors Network
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/membership"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        Memberships/
                        <br />
                        Registrations
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/eligibility-test"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        Check Your Eligibility
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Col 2: Company */}
              <div className="col-lg-2 col-md-4 col-6">
                <div className="footer-widget">
                  <h4 className="footer-widget__title text-white font-size-16 fw-bold mb-3">
                    Company
                  </h4>
                  <ul
                    className="footer-widget__link footer-widget__link-02 list-unstyled ps-0 font-size-14"
                    style={{ lineHeight: "2.1" }}
                  >
                    <li>
                      <Link
                        href="/about"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/events"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/success-stories"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        Success Stories
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/careers"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact-us"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/alumni"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        Alumni Network
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/mentor-registration"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        Be a Counsellor
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Col 3: Resources */}
              <div className="col-lg-2 col-md-4 col-6">
                <div className="footer-widget">
                  <h4 className="footer-widget__title text-white font-size-16 fw-bold mb-3">
                    Resources
                  </h4>
                  <ul
                    className="footer-widget__link footer-widget__link-02 list-unstyled ps-0 font-size-14"
                    style={{ lineHeight: "2.1" }}
                  >
                    <li>
                      <Link
                        href="/blog"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/newsletter"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        Newsletter
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/news"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        News/Media
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ebook"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        eBooks
                      </Link>
                    </li>
                    <li>
                      <a
                        href="https://rzp.io/rzp/X5Q7xhF"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        Online Payment
                      </a>
                    </li>
                    <li>
                      <Link
                        href="/faqs"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Col 4: Support */}
              <div className="col-lg-2 col-md-4 col-6">
                <div className="footer-widget">
                  <h4 className="footer-widget__title text-white font-size-16 fw-bold mb-3">
                    Support
                  </h4>
                  <ul
                    className="footer-widget__link footer-widget__link-02 list-unstyled ps-0 font-size-14"
                    style={{ lineHeight: "2.1" }}
                  >
                    <li>
                      <Link
                        href="/terms-and-conditions"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/refund-policy"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        Refund Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/privacy-policy"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/academic-policy"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        Academic Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/grievance-from"
                        className="text-white hover-text-primary text-decoration-none"
                      >
                        Grievance Form
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ask-question"
                        className="text-white hover-text-primary text-decoration-none"
                      >
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
                  <div className="footer-widget__logo mb-3">
                    <Link href="/" className="d-inline-block">
                      <img
                        src="/assets/images/logo-light.png"
                        alt="Counsel India"
                        width={148}
                        height={54}
                        style={{
                          width: "148px",
                          height: "54.06px",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    </Link>
                  </div>
                  <p
                    className="footer-widget__description mb-2 font-size-13 text-white"
                    style={{ lineHeight: "1.6" }}
                  >
                    {settings.footerTitle}{" "}
                    <Link
                      href="/about"
                      className="primary-text-color text-success text-decoration-underline fw-bold"
                    >
                      More
                    </Link>
                  </p>

                  <div className="footer-widget__info font-size-13 mb-3">
                    <span className="text-white fw-bold d-block">{settings.footerCompanyName}</span>
                    <span className="text-white fw-semibold d-block mt-1">
                      GST : {settings.gstNumber}
                    </span>

                    <address
                      className="text-white font-size-13 mt-2 mb-0"
                      style={{ lineHeight: "1.6" }}
                    >
                      <div className="d-flex align-items-start gap-2 mb-1">
                        <i className="fas fa-map-marker-alt text-white mt-1"></i>
                        <span>{settings.footerAddress}</span>
                      </div>
                      <div className="d-flex align-items-start gap-2">
                        <i className="fas fa-map-marker-alt text-white mt-1"></i>
                        <span>
                          For Client Visit : Office no 12A20, Floor No-13, E-Square sector 96,
                          Noida, Uttar Pradesh 201301
                        </span>
                      </div>
                    </address>
                  </div>

                  {/* Social Icons */}
                  <div className="footer-widget__social d-flex align-items-center gap-3 mt-3">
                    <a
                      href={settings.footerTwitterLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover-text-primary font-size-16"
                      aria-label="Twitter Profile"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href={settings.footerFbLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover-text-primary font-size-16"
                      aria-label="Facebook Page"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href={settings.instaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover-text-primary font-size-16"
                      aria-label="Instagram Profile"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href={settings.footerYoutubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover-text-primary font-size-16"
                      aria-label="YouTube Channel"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a
                      href={settings.footerLinkedinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover-text-primary font-size-16"
                      aria-label="LinkedIn Page"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Accreditation Badges (same as live site footer) & Newsletter Bar */}
            <div className="row align-items-center mt-4 pt-3">
              <div className="col-lg-7 col-md-6 mb-4 mb-md-0">
                <div className="d-flex flex-wrap align-items-center gap-3">
                  {FOOTER_BADGES.map((badge) => (
                    <div
                      key={badge.alt}
                      className="rounded-circle bg-white d-flex align-items-center justify-content-center"
                      style={{
                        width: "64px",
                        height: "64px",
                        border: "3px solid #4caf50",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={badge.src}
                        alt={badge.alt}
                        title={badge.alt}
                        loading="lazy"
                        style={{ width: "48px", height: "48px", objectFit: "contain" }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-5 col-md-6">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h6 className="text-white font-size-15 fw-bold mb-0">
                    Subscribe to our Newsletter
                  </h6>
                  <Link
                    href="/newsletter"
                    className="text-white-50 font-size-12 hover-text-white text-decoration-none"
                  >
                    View Newsletter Page &rarr;
                  </Link>
                </div>
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
                    style={{
                      backgroundColor: "#07a64b",
                      borderColor: "#07a64b",
                      color: "#fff",
                    }}
                  >
                    Subscribe
                  </button>
                </form>
                {newsletterError && (
                  <p className="text-danger font-size-12 mt-1 mb-0 fw-semibold">
                    {newsletterError}
                  </p>
                )}
                {newsletterSubscribed && (
                  <p className="text-success font-size-12 mt-1 mb-0 fw-semibold">
                    ✓ Thank you for subscribing!
                  </p>
                )}
              </div>
            </div>

            {/* Horizontal Line Divider */}
            <div
              style={{
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                paddingTop: "30px",
                marginBottom: "30px",
              }}
            ></div>

            {/* SEO Categorized Course Directory Links */}
            <div className="font-size-13" style={{ lineHeight: "1.9" }}>
              {courseGroups.map((group) => (
                <div className="mb-3" key={group.title}>
                  <h6 className="text-white fw-bold mb-1 font-size-14">{group.title}</h6>
                  <div>
                    {group.courses.map((course, idx) => (
                      <React.Fragment key={course.slug}>
                        {idx > 0 && (
                          <span className="mx-2" style={{ color: "#969696" }}>
                            |
                          </span>
                        )}
                        <Link
                          href={`/courses/${course.slug}`}
                          className="text-decoration-none hover-text-white"
                          style={{ color: "#969696" }}
                        >
                          {course.name}
                        </Link>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div
          className="footer-copyright py-3"
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="container">
            <p className="text-center mb-0 font-size-13 text-white">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-white">{settings.footerCompanyName}. All Rights Reserved</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Counselor Login Modal */}
      <CounselorLoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </>
  );
}
