"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import AiCounsellingModal from "./common/AiCounsellingModal";
import LoginModal from "./auth/LoginModal";
import { getActiveCourses } from "@/services/courseService";
import type { CourseItem } from "@/types/course";

export interface NavCourse {
  id: number;
  name: string;
  slug: string;
  isActive?: boolean;
}

export interface NavSubCategory {
  id: number;
  name: string;
  slug: string;
  courses: NavCourse[];
}

export interface NavCategory {
  id: number;
  name: string;
  slug: string;
  icon: string;
  subCategories: NavSubCategory[];
}

// Course mega menu is built from the active courses in the Admin panel:
// main category (CI Programs / IPA / AIU / MIT) -> sub-category -> courses.
const MAIN_CATEGORY_ORDER = ["CI Programs", "IPA", "AIU", "MIT"];
const MAIN_CATEGORY_ICONS: Record<string, string> = {
  "CI Programs": "https://www.counselindia.com/assets/images/icon/ci_icon.png",
  IPA: "https://www.counselindia.com/assets/images/icon/VGU.png",
};
const DEFAULT_CATEGORY_ICON = "https://www.counselindia.com/assets/images/icon/ci_icon.png";

const toSlug = (v: string) =>
  v
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function buildNavCategories(courses: CourseItem[]): NavCategory[] {
  const mains = new Map<string, Map<string, NavCourse[]>>();
  courses.forEach((c, i) => {
    const main = c.mainCategory || "CI Programs";
    const sub = c.category || "Other Programs";
    if (!mains.has(main)) mains.set(main, new Map());
    const subs = mains.get(main)!;
    if (!subs.has(sub)) subs.set(sub, []);
    subs.get(sub)!.push({ id: i + 1, name: c.name, slug: c.slug, isActive: true });
  });
  const rank = (m: string) => {
    const i = MAIN_CATEGORY_ORDER.indexOf(m);
    return i === -1 ? MAIN_CATEGORY_ORDER.length : i;
  };
  let subId = 0;
  return [...mains.entries()]
    .sort(([a], [b]) => rank(a) - rank(b))
    .map(([name, subs], idx) => ({
      id: idx + 1,
      name,
      slug: toSlug(name),
      icon: MAIN_CATEGORY_ICONS[name] || DEFAULT_CATEGORY_ICON,
      subCategories: [...subs.entries()].map(([subName, list]) => ({
        id: ++subId,
        name: subName,
        slug: toSlug(subName),
        courses: list,
      })),
    }));
}

export default function Header() {
  const { settings } = useSiteSettings();
  const logoSrc = settings.logo;
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Desktop Mega Menu state
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [navCategories, setNavCategories] = useState<NavCategory[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState<number>(1);
  const [activeSubCategoryId, setActiveSubCategoryId] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Course menu comes from the Admin panel (Courses → main category / sub-category)
  useEffect(() => {
    let alive = true;
    getActiveCourses().then((courses) => {
      if (alive) setNavCategories(buildNavCategories(courses));
    });
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    const handleOpenLogin = () => setIsLoginModalOpen(true);
    window.addEventListener("openLoginModal", handleOpenLogin);

    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        '[data-bs-target="#loginModal"], [href="#loginModal"]'
      );
      if (target) {
        e.preventDefault();
        setIsLoginModalOpen(true);
      }
    };
    document.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("openLoginModal", handleOpenLogin);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

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

  // Current active category and subcategory
  const activeCategory: NavCategory | undefined =
    navCategories.find((c) => c.id === activeCategoryId) || navCategories[0];

  const activeSubCategory = activeSubCategoryId
    ? activeCategory?.subCategories.find((s) => s.id === activeSubCategoryId)
    : null;

  return (
    <div className="header-section header-sticky" style={{ position: "relative", zIndex: 999 }}>
      <div className="header-main-06" style={{ paddingTop: 0, backgroundColor: "#ffffff" }}>
        {/* Top Announcement Bar */}
        <div className="main22">
          <div className="marquee22">
            <div className="geek22">
              <a href="/membership" target="_blank" rel="noreferrer">
                <strong>
                  Join our exclusive membership for a personalized wellbeing routine crafted by
                  expert psychologists—starting at just Rs 199/month!
                </strong>
                <span className="register-now">&nbsp;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="container position-relative">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "76px",
              width: "100%",
            }}
          >
            {/* Header Logo (Left) */}
            <div style={{ flexShrink: 0, marginRight: "10px" }}>
              <Link href="/" className="header-logo__logo" style={{ display: "block" }}>
                <img
                  src={logoSrc}
                  width="248"
                  height="54"
                  alt={settings.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/assets/images/dark-logo.png";
                  }}
                  style={{
                    maxHeight: "54px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </Link>
            </div>

            {/* Header Navigation (Center) */}
            <div
              className="d-none d-xl-flex align-items-center justify-content-center"
              style={{ flex: "1 1 auto" }}
            >
              <nav className="menu-primary">
                <ul
                  className="menu-primary__container d-flex align-items-center justify-content-center mb-0"
                  style={{
                    gap: "20px",
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {/* COURSES MEGA MENU DROPDOWN */}
                  <li
                    className="position-relative"
                    onMouseEnter={() => {
                      setIsCoursesOpen(true);
                      if (!navCategories.some((c) => c.id === activeCategoryId))
                        setActiveCategoryId(navCategories[0]?.id ?? 1);
                      setActiveSubCategoryId(null);
                    }}
                    onMouseLeave={() => {
                      setIsCoursesOpen(false);
                      setActiveSubCategoryId(null);
                    }}
                  >
                    <Link href="/all-courses-list">
                      <span
                        className="custom-btn"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span>Courses</span>
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#07a64b"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            transform: isCoursesOpen ? "rotate(180deg)" : "none",
                            transition: "transform 0.2s",
                          }}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </Link>

                    {/* 3-COLUMN MEGA MENU DROPDOWN */}
                    {isCoursesOpen && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: "0",
                          paddingTop: "10px",
                          zIndex: 1000,
                        }}
                      >
                        <div
                          style={{
                            width: "740px",
                            backgroundColor: "#ffffff",
                            borderRadius: "14px",
                            boxShadow: "0 18px 45px rgba(0, 0, 0, 0.14)",
                            border: "1px solid #e2e8f0",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr",
                            overflow: "hidden",
                            minHeight: "360px",
                            animation: "fadeIn 0.2s ease-out",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          {/* Column 1: COURSE CATEGORIES */}
                          <div
                            style={{
                              padding: "18px 14px",
                              borderRight: "5px solid #b3dfb3",
                              backgroundColor: "#ffffff",
                              overflowY: "auto",
                              maxHeight: "420px",
                            }}
                          >
                            <h6
                              style={{
                                margin: "0 0 14px 4px",
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "#7e7e7e",
                                letterSpacing: "0.5px",
                                textTransform: "uppercase",
                              }}
                            >
                              COURSE CATEGORIES
                            </h6>

                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                              }}
                            >
                              {navCategories.map((cat) => {
                                const isSelected = cat.id === activeCategoryId;
                                return (
                                  <div
                                    key={cat.id}
                                    onMouseEnter={() => {
                                      setActiveCategoryId(cat.id);
                                      setActiveSubCategoryId(null);
                                    }}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                      padding: "9px 12px",
                                      backgroundColor: "#e7f6ed",
                                      border: isSelected
                                        ? "1.5px solid #07a64b"
                                        : "1px solid transparent",
                                      borderRadius: "6px",
                                      cursor: "pointer",
                                      transition: "all 0.15s ease",
                                      gap: "8px",
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        minWidth: 0,
                                      }}
                                    >
                                      <img
                                        src={cat.icon}
                                        alt={cat.name}
                                        style={{
                                          width: "24px",
                                          height: "24px",
                                          borderRadius: "50%",
                                          objectFit: "contain",
                                          flexShrink: 0,
                                        }}
                                      />
                                      <span
                                        style={{
                                          fontSize: "13.5px",
                                          fontWeight: 600,
                                          color: "#07a64b",
                                          whiteSpace: "normal",
                                          wordBreak: "break-word",
                                          lineHeight: "1.3",
                                        }}
                                      >
                                        {cat.name}
                                      </span>
                                    </div>
                                    <svg
                                      width="13"
                                      height="13"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="#07a64b"
                                      strokeWidth="2.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      style={{ flexShrink: 0 }}
                                    >
                                      <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Column 2: SUB CATEGORIES */}
                          <div
                            style={{
                              padding: "18px 14px",
                              borderRight: "5px solid #b3dfb3",
                              backgroundColor: "#ffffff",
                              overflowY: "auto",
                              maxHeight: "420px",
                            }}
                          >
                            <h6
                              style={{
                                margin: "0 0 14px 4px",
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "#7e7e7e",
                                letterSpacing: "0.5px",
                                textTransform: "uppercase",
                              }}
                            >
                              SUB CATEGORIES
                            </h6>

                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                              }}
                            >
                              {(activeCategory?.subCategories ?? []).map((sub) => {
                                const isSubSelected = sub.id === activeSubCategoryId;
                                return (
                                  <div
                                    key={sub.id}
                                    onMouseEnter={() => setActiveSubCategoryId(sub.id)}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                      padding: "9px 12px",
                                      backgroundColor: isSubSelected ? "#07a64b" : "#e7f6ed",
                                      color: isSubSelected ? "#ffffff" : "#07a64b",
                                      borderRadius: "6px",
                                      cursor: "pointer",
                                      transition: "all 0.15s ease",
                                      gap: "8px",
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontSize: "13.5px",
                                        fontWeight: 600,
                                        color: isSubSelected ? "#ffffff" : "#07a64b",
                                        whiteSpace: "normal",
                                        wordBreak: "break-word",
                                        lineHeight: "1.3",
                                      }}
                                    >
                                      {sub.name}
                                    </span>
                                    <svg
                                      width="13"
                                      height="13"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke={isSubSelected ? "#ffffff" : "#07a64b"}
                                      strokeWidth="2.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      style={{ flexShrink: 0 }}
                                    >
                                      <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Column 3: COURSES */}
                          <div
                            style={{
                              padding: "18px 16px",
                              backgroundColor: "#ffffff",
                              overflowY: "auto",
                              maxHeight: "420px",
                            }}
                          >
                            <h6
                              style={{
                                margin: "0 0 14px 4px",
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "#7e7e7e",
                                letterSpacing: "0.5px",
                                textTransform: "uppercase",
                              }}
                            >
                              COURSES
                            </h6>

                            {activeSubCategory ? (
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "10px",
                                }}
                              >
                                {activeSubCategory.courses.map((course) => (
                                  <Link
                                    key={course.id}
                                    href={`/course/${course.slug}`}
                                    onClick={() => setIsCoursesOpen(false)}
                                    style={{
                                      display: "block",
                                      padding: "10px 14px",
                                      borderRadius: "6px",
                                      textDecoration: "none",
                                      backgroundColor: "#e7f6ed",
                                      color: "#07a64b",
                                      fontSize: "13.5px",
                                      fontWeight: 500,
                                      lineHeight: "1.4",
                                      whiteSpace: "normal",
                                      wordBreak: "break-word",
                                      transition: "all 0.15s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.backgroundColor = "#07a64b";
                                      e.currentTarget.style.color = "#ffffff";
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.backgroundColor = "#e7f6ed";
                                      e.currentTarget.style.color = "#07a64b";
                                    }}
                                  >
                                    {course.name}
                                  </Link>
                                ))}
                              </div>
                            ) : (
                              <div
                                style={{
                                  padding: "6px 4px",
                                  color: "#7e7e7e",
                                  fontSize: "14px",
                                  fontWeight: 400,
                                }}
                              >
                                Hover over a subcategory
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>

                  {/* COUNSELLING MENU */}
                  <li className="menu-item-has-children">
                    <Link href="/counsellors-network">
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <span>Counselling</span>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
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

                  {/* RESOURCES MENU */}
                  <li className="menu-item-has-children">
                    <Link href="/">
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <span>Resources</span>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/mentalhealthtest">
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

                  {/* MEMBERSHIP */}
                  <li>
                    <Link href="/membership">
                      <span>Membership</span>
                    </Link>
                  </li>

                  {/* GROWTH COURSES */}
                  <li>
                    <Link href="/growth-courses">
                      <span>Growth Courses</span>
                    </Link>
                  </li>

                  {/* MORE MENU */}
                  <li className="menu-item-has-children">
                    <Link href="/">
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <span>More</span>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
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
                        <Link href="/Har-Ghar-Counsellor">
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

            {/* Header User Buttons (Right) */}
            <div
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                className="header-user d-none d-lg-flex"
                style={{
                  marginLeft: "0",
                  paddingLeft: "20px",
                  paddingRight: "0",
                  marginRight: "0",
                  position: "relative",
                }}
              >
                <div
                  className="header-user__button"
                  style={{ padding: "0 10px", margin: "0 10px 0 0" }}
                >
                  <button className="header-user__login" onClick={() => setIsLoginModalOpen(true)}>
                    Log In
                  </button>
                </div>
                <div className="header-user__button" style={{ padding: "0", margin: "0" }}>
                  <Link
                    href="/mentor-registration"
                    className="header-user__signup btn btn-hover-primary"
                    style={{
                      padding: "8px 18px",
                      backgroundColor: "#07a64b",
                      color: "#ffffff",
                      borderRadius: "6px",
                      fontSize: "14.5px",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      lineHeight: "normal",
                      height: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0",
                    }}
                  >
                    Be a Counsellor
                  </Link>
                </div>
              </div>

              {/* Mobile Toggle Button */}
              <div className="header-toggle d-xl-none">
                <button
                  className="header-toggle__btn"
                  onClick={() => setIsMobileOpen(true)}
                  aria-label="Open mobile navigation menu"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "8px",
                  }}
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

      {/* Mobile Offcanvas Drawer rendered via Portal to prevent layout/z-index clipping */}
      {mounted &&
        createPortal(
          <>
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
                  zIndex: 99998,
                }}
              />
            )}

            {/* Mobile Offcanvas Menu */}
            <div
              className={`offcanvas offcanvas-end offcanvas-mobile ${isMobileOpen ? "show" : ""}`}
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
                zIndex: 99999,
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
                      src={logoSrc}
                      alt={settings.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/assets/images/dark-logo.png";
                      }}
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
                    fontSize: "22px",
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
                style={{
                  overscrollBehavior: "contain",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                <nav className="canvas-menu">
                  <ul className="offcanvas-menu list-unstyled mb-0">
                    {/* Courses */}
                    <li style={{ position: "relative" }}>
                      <Link
                        href="/all-courses-list"
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
                              href="/mentalhealthtest"
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
                              href="/Har-Ghar-Counsellor"
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
                    onClick={() => {
                      closeMobileMenu();
                      setIsLoginModalOpen(true);
                    }}
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
                      cursor: "pointer",
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
          </>,
          document.body
        )}

      {/* AI Counselling Lead Capture Modal */}
      <AiCounsellingModal isOpen={isAiModalOpen} onClose={() => setIsAiModalOpen(false)} />

      {/* Login & Sign Up Pop-Up Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
}
