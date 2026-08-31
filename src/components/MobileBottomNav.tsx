"use client";
import React from "react";
import Link from "next/link";

export default function MobileBottomNav() {
  const navItems = [
    {
      title: "Courses",
      href: "/courses",
      icon: "fas fa-book",
    },
    {
      title: "Membership",
      href: "/membership",
      icon: "fas fa-user-plus",
    },
    {
      title: "Growth Course",
      href: "/growth-courses",
      icon: "fas fa-clock",
    },
    {
      title: "SuccessStories",
      href: "/success-stories",
      icon: "fas fa-trophy",
    },
  ];

  return (
    <div className="mobile-footer-nav d-block d-md-none">
      <div className="mobile-footer-buttons d-flex align-items-center justify-content-between">
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="mobile-footer-button text-decoration-none text-center flex-fill py-2"
          >
            <i
              className={`${item.icon} mb-1 d-block`}
              style={{ fontSize: "18px", color: "#00BF63" }}
            ></i>
            <span
              className="d-block font-size-12 fw-medium text-dark"
              style={{ lineHeight: "1.2", whiteSpace: "nowrap" }}
            >
              {item.title}
            </span>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .mobile-footer-nav {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #ffffff;
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.08);
          border-top: 1px solid #f0f0f0;
          z-index: 999;
          padding: 2px 0;
        }

        .mobile-footer-button:hover {
          background-color: #f8f9fa;
        }
      `}</style>
    </div>
  );
}
