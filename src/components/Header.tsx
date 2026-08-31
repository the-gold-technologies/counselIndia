"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import AiCounsellingModal from "./common/AiCounsellingModal";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMobileOpen]);

  const toggleSubmenu = (menuName: string) => {
    setExpandedMenu(expandedMenu === menuName ? null : menuName);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setExpandedMenu(null);
  };

  return (
    <div className="header-section header-sticky" style={{ position: "relative", zIndex: 999 }}>
      <div className="header-main-06" style={{ paddingTop: 0, backgroundColor: "#ffffff" }}>
        {/* Top Announcement Bar */}
        <div className="main22">
          <div className="marquee22">
            <div className="geek22">
              <a
                href="https://www.counselindia.com/membership"
                target="_blank"
                rel="noreferrer"
              >
                <strong>
                  Join our exclusive membership for a personalized wellbeing
                  routine crafted by expert psychologists—starting at just Rs
                  199/month!
                </strong>
                <span className="register-now">&nbsp;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="container custom-container position-relative">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-xl-3 col-6">
              <div className="header-logo" style={{ marginTop: "10px" }}>
                <Link className="header-logo__logo" href="/">
                  <img
                    src="/assets/images/dark-logo.png"
                    width="260"
                    height="56"
                    alt="Counsel India Logo"
                    style={{ objectFit: "contain", maxHeight: "56px" }}
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="col-xl-6 d-none d-xl-block">
              <div className="header-navigation">
                <nav className="menu-primary">
                  <ul className="menu-primary__container justify-content-center">
                    <li>
                      <Link href="/courses">
                        <span className="custom-btn">Courses</span>
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/counsellors-network">
                        <span>Counselling</span>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <a
                            onClick={() => setIsAiModalOpen(true)}
                            id="gradientButton"
                            style={{ cursor: "pointer" }}
                          >
                            <span>AI Counselling</span>
                          </a>
                        </li>
                        <li>
                          <Link href="/counsellors-network">
                            <span>Counsellors Network</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/resources">
                        <span>Resources</span>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/mental-health-test">
                            <span>Mental Health Test</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ebook">
                            <span>EBook</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            <span>Blogs</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/newsletter">
                            <span>Newsletter</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/membership">
                        <span>Membership</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/growth-courses">
                        <span>Growth Courses</span>
                      </Link>
                    </li>
                    <li
                      className="menu-item-has-children"
                      style={{ marginRight: "10px" }}
                    >
                      <Link href="/more">
                        <span>More</span>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/about">
                            <span>About Us</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/alumni">
                            <span>Alumni Network</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/charity">
                            <span>Har Ghar Counsellor</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/success-stories">
                            <span>Success Stories</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/eligibility-test">
                            <span>Check Your Eligibility</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ci-business">
                            <span>Corporate Wellness</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/news">
                            <span>News/Media</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/events">
                            <span>Events</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Desktop User CTA & Mobile Hamburger Toggle */}
            <div className="col-xl-3 col-6">
              <div className="header-inner d-flex align-items-center justify-content-end">
                {/* Desktop Buttons */}
                <div className="header-user d-none d-lg-flex align-items-center gap-2">
                  <div className="header-user__button">
                    <button
                      className="header-user__login"
                      data-bs-toggle="modal"
                      data-bs-target="#loginModal"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      Log In
                    </button>
                  </div>
                  <div className="header-user__button">
                    <Link
                      href="/mentor-registration"
                      className="header-user__signup btn btn-hover-primary"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        padding: "8px 16px",
                      }}
                    >
                      Be a Counsellor
                    </Link>
                  </div>
                </div>

                {/* Mobile Hamburger Toggle Button */}
                <div className="header-toggle d-xl-none">
                  <button
                    className="header-toggle__btn"
                    onClick={() => setIsMobileOpen(true)}
                    aria-label="Open mobile navigation menu"
                  >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Offcanvas Drawer Backdrop */}
      {isMobileOpen && (
        <div
          className="offcanvas-backdrop fade show"
          onClick={closeMobileMenu}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1050,
          }}
        />
      )}

      {/* Mobile Offcanvas Menu */}
      <div
        className={`offcanvas offcanvas-end offcanvas-mobile ${
          isMobileOpen ? "show" : ""
        }`}
        id="offcanvasMobileMenu"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "320px",
          maxWidth: "85vw",
          height: "100%",
          maxHeight: "100dvh",
          backgroundColor: "#ffffff",
          zIndex: 1060,
          transform: isMobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
          boxShadow: isMobileOpen ? "-5px 0 30px rgba(0, 0, 0, 0.2)" : "none",
          display: "flex",
          flexDirection: "column",
          visibility: isMobileOpen ? "visible" : "hidden",
          overflow: "hidden",
        }}
      >
        {/* Offcanvas Header */}
        <div className="offcanvas-header bg-white d-flex align-items-center justify-content-between p-3 border-bottom flex-shrink-0">
          <div className="offcanvas-logo">
            <Link className="offcanvas-logo__logo" href="/" onClick={closeMobileMenu}>
              <img
                src="/assets/images/dark-logo.png"
                alt="Counsel India"
                style={{ width: "150px", height: "auto", display: "block" }}
              />
            </Link>
          </div>
          <button
            type="button"
            className="offcanvas-close border-0 bg-transparent p-1 d-flex align-items-center justify-content-center"
            onClick={closeMobileMenu}
            aria-label="Close menu"
            style={{
              fontSize: "24px",
              color: "#222736",
              lineHeight: 1,
              cursor: "pointer",
              width: "36px",
              height: "36px",
            }}
          >
            <i className="fal fa-times"></i>
          </button>
        </div>

        {/* Offcanvas Navigation Body */}
        <div
          className="offcanvas-body p-3 overflow-auto flex-grow-1"
          style={{ overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" }}
        >
          <nav className="canvas-menu">
            <ul className="offcanvas-menu list-unstyled mb-0">
              {/* Courses */}
              <li style={{ position: "relative" }}>
                <Link
                  href="/courses"
                  onClick={closeMobileMenu}
                  style={{
                    padding: "16px 0",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#242a37",
                    display: "block",
                    borderBottom: "1px solid #d9dadd",
                    textDecoration: "none",
                  }}
                >
                  <span>Courses</span>
                </Link>
              </li>

              {/* Counselling Accordion */}
              <li style={{ position: "relative" }}>
                <div
                  className="d-flex align-items-center justify-content-between"
                  style={{ borderBottom: "1px solid #d9dadd" }}
                >
                  <Link
                    href="/counsellors-network"
                    onClick={closeMobileMenu}
                    style={{
                      padding: "16px 0",
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "#242a37",
                      textDecoration: "none",
                      flexGrow: 1,
                    }}
                  >
                    <span>Counselling</span>
                  </Link>
                  <button
                    onClick={() => toggleSubmenu("counselling")}
                    className="border-0 bg-transparent p-2 text-muted"
                    aria-label="Toggle counselling submenu"
                    style={{ cursor: "pointer" }}
                  >
                    <i
                      className={`fas fa-chevron-${
                        expandedMenu === "counselling" ? "up" : "down"
                      } font-size-12`}
                    ></i>
                  </button>
                </div>
                {expandedMenu === "counselling" && (
                  <ul className="list-unstyled ps-3 py-2 bg-light rounded mt-1">
                    <li className="py-1">
                      <a
                        onClick={() => {
                          closeMobileMenu();
                          setIsAiModalOpen(true);
                        }}
                        className="text-decoration-none font-size-14 d-block py-1 fw-medium"
                        style={{ color: "#242a37", cursor: "pointer" }}
                      >
                        AI Counselling
                      </a>
                    </li>
                    <li className="py-1">
                      <Link
                        href="/counsellors-network"
                        onClick={closeMobileMenu}
                        className="text-decoration-none font-size-14 d-block py-1 fw-medium"
                        style={{ color: "#242a37" }}
                      >
                        Counsellors Network
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Resources Accordion */}
              <li style={{ position: "relative" }}>
                <div
                  className="d-flex align-items-center justify-content-between"
                  style={{ borderBottom: "1px solid #d9dadd" }}
                >
                  <Link
                    href="/resources"
                    onClick={closeMobileMenu}
                    style={{
                      padding: "16px 0",
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "#242a37",
                      textDecoration: "none",
                      flexGrow: 1,
                    }}
                  >
                    <span>Resources</span>
                  </Link>
                  <button
                    onClick={() => toggleSubmenu("resources")}
                    className="border-0 bg-transparent p-2 text-muted"
                    aria-label="Toggle resources submenu"
                    style={{ cursor: "pointer" }}
                  >
                    <i
                      className={`fas fa-chevron-${
                        expandedMenu === "resources" ? "up" : "down"
                      } font-size-12`}
                    ></i>
                  </button>
                </div>
                {expandedMenu === "resources" && (
                  <ul className="list-unstyled ps-3 py-2 bg-light rounded mt-1">
                    <li className="py-1">
                      <Link
                        href="/mental-health-test"
                        onClick={closeMobileMenu}
                        className="text-decoration-none font-size-14 d-block py-1 fw-medium"
                        style={{ color: "#242a37" }}
                      >
                        Mental Health Test
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link
                        href="/ebook"
                        onClick={closeMobileMenu}
                        className="text-decoration-none font-size-14 d-block py-1 fw-medium"
                        style={{ color: "#242a37" }}
                      >
                        EBook
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link
                        href="/blog"
                        onClick={closeMobileMenu}
                        className="text-decoration-none font-size-14 d-block py-1 fw-medium"
                        style={{ color: "#242a37" }}
                      >
                        Blogs
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link
                        href="/newsletter"
                        onClick={closeMobileMenu}
                        className="text-decoration-none font-size-14 d-block py-1 fw-medium"
                        style={{ color: "#242a37" }}
                      >
                        Newsletter
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Membership */}
              <li style={{ position: "relative" }}>
                <Link
                  href="/membership"
                  onClick={closeMobileMenu}
                  style={{
                    padding: "16px 0",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#242a37",
                    display: "block",
                    borderBottom: "1px solid #d9dadd",
                    textDecoration: "none",
                  }}
                >
                  <span>Membership</span>
                </Link>
              </li>

              {/* Growth Courses */}
              <li style={{ position: "relative" }}>
                <Link
                  href="/growth-courses"
                  onClick={closeMobileMenu}
                  style={{
                    padding: "16px 0",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#242a37",
                    display: "block",
                    borderBottom: "1px solid #d9dadd",
                    textDecoration: "none",
                  }}
                >
                  <span>Growth Courses</span>
                </Link>
              </li>

              {/* More Accordion */}
              <li style={{ position: "relative" }}>
                <div
                  className="d-flex align-items-center justify-content-between"
                  style={{ borderBottom: "1px solid #d9dadd" }}
                >
                  <span
                    style={{
                      padding: "16px 0",
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "#242a37",
                      flexGrow: 1,
                    }}
                  >
                    More
                  </span>
                  <button
                    onClick={() => toggleSubmenu("more")}
                    className="border-0 bg-transparent p-2 text-muted"
                    aria-label="Toggle more submenu"
                    style={{ cursor: "pointer" }}
                  >
                    <i
                      className={`fas fa-chevron-${
                        expandedMenu === "more" ? "up" : "down"
                      } font-size-12`}
                    ></i>
                  </button>
                </div>
                {expandedMenu === "more" && (
                  <ul className="list-unstyled ps-3 py-2 bg-light rounded mt-1">
                    <li className="py-1">
                      <Link
                        href="/about"
                        onClick={closeMobileMenu}
                        className="text-decoration-none font-size-14 d-block py-1 fw-medium"
                        style={{ color: "#242a37" }}
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link
                        href="/alumni"
                        onClick={closeMobileMenu}
                        className="text-decoration-none font-size-14 d-block py-1 fw-medium"
                        style={{ color: "#242a37" }}
                      >
                        Alumni Network
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link
                        href="/charity"
                        onClick={closeMobileMenu}
                        className="text-decoration-none font-size-14 d-block py-1 fw-medium"
                        style={{ color: "#242a37" }}
                      >
                        Har Ghar Counsellor
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link
                        href="/success-stories"
                        onClick={closeMobileMenu}
                        className="text-decoration-none font-size-14 d-block py-1 fw-medium"
                        style={{ color: "#242a37" }}
                      >
                        Success Stories
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link
                        href="/eligibility-test"
                        onClick={closeMobileMenu}
                        className="text-decoration-none font-size-14 d-block py-1 fw-medium"
                        style={{ color: "#242a37" }}
                      >
                        Check Your Eligibility
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link
                        href="/ci-business"
                        onClick={closeMobileMenu}
                        className="text-decoration-none font-size-14 d-block py-1 fw-medium"
                        style={{ color: "#242a37" }}
                      >
                        Corporate Wellness
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link
                        href="/news"
                        onClick={closeMobileMenu}
                        className="text-decoration-none font-size-14 d-block py-1 fw-medium"
                        style={{ color: "#242a37" }}
                      >
                        News/Media
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link
                        href="/events"
                        onClick={closeMobileMenu}
                        className="text-decoration-none font-size-14 d-block py-1 fw-medium"
                        style={{ color: "#242a37" }}
                      >
                        Events
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>

        {/* Offcanvas Footer / User Buttons */}
        <div className="offcanvas-user p-3 border-top bg-light flex-shrink-0">
          <div className="d-flex align-items-center gap-2" style={{ width: "100%" }}>
            <button
              className="btn fw-semibold"
              onClick={closeMobileMenu}
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
              style={{
                flex: "1 1 0%",
                height: "44px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                backgroundColor: "#ffffff",
                color: "#242a37",
                border: "1px solid #d9dadd",
                borderRadius: "6px",
                fontSize: "14px",
                padding: "0 10px",
                whiteSpace: "nowrap",
              }}
            >
              Log In
            </button>
            <Link
              href="/mentor-registration"
              onClick={closeMobileMenu}
              className="btn fw-semibold text-decoration-none"
              style={{
                flex: "1.3 1 0%",
                height: "44px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                backgroundColor: "#07a64b",
                borderColor: "#07a64b",
                color: "#ffffff",
                borderRadius: "6px",
                fontSize: "14px",
                padding: "0 10px",
                whiteSpace: "nowrap",
              }}
            >
              Be a Counsellor
            </Link>
          </div>
        </div>
      </div>

      {/* AI Counselling Lead Capture Modal (Matching PHP #viewModalCourse99) */}
      <AiCounsellingModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
      />
    </div>
  );
}
