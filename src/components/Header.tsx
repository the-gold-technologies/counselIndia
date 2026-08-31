"use client";
import React, { useEffect } from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header-section header-sticky">
      <div className="header-main-06" style={{ paddingTop: 0 }}>
        <div className="main22">
          <div className="marquee22">
            <div className="geek22">
              <a href="https://www.counselindia.com/membership" target="_blank" rel="noreferrer">
                <strong>Join our exclusive membership for a personalized wellbeing routine crafted by expert psychologists—starting at just Rs 199/month!</strong>
                <span className="register-now">&nbsp;</span>
              </a>
            </div>
          </div>
        </div>

        <div className="container custom-container position-relative">
          <div className="row align-items-center">
            <div className="col-xl-3 col-6">
              <div className="header-logo" style={{ marginTop: "10px" }}>
                <Link className="header-logo__logo" href="/">
                  <img src="/assets/images/dark-logo.png" width="296" height="64" alt="Logo" />
                </Link>
              </div>
            </div>
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
                      <Link href="/counselling">
                        <span>Counselling</span>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="#"><span>AI Counselling</span></Link>
                        </li>
                        <li>
                          <Link href="#"><span>Counsellors Network</span></Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/resources">
                        <span>Resources</span>
                      </Link>
                      <ul className="sub-menu">
                        <li><Link href="#"><span>Mental Health Test</span></Link></li>
                        <li><Link href="#"><span>EBook</span></Link></li>
                        <li><Link href="#"><span>Blogs</span></Link></li>
                        <li><Link href="#"><span>Newsletter</span></Link></li>
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
                    <li className="menu-item-has-children" style={{ marginRight: "110px" }}>
                      <Link href="/more">
                        <span>More</span>
                      </Link>
                      <ul className="sub-menu">
                        <li><Link href="/about"><span>About Us</span></Link></li>
                        <li><Link href="/alumni"><span>Alumni Network</span></Link></li>
                        <li><Link href="/charity"><span>Har Ghar Counsellor</span></Link></li>
                        <li><Link href="/success-stories"><span>Success Stories</span></Link></li>
                        <li><Link href="/eligibility-test"><span>Check Your Eligibility</span></Link></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-3 col-6">
              <div className="header-inner">
                <div className="header-user d-none d-lg-flex" style={{ marginLeft: "100px" }}>
                  <div className="header-user__button">
                    <button className="header-user__login" data-bs-toggle="modal" data-bs-target="#loginModal">
                      Log In
                    </button>
                  </div>
                  <div className="header-user__button">
                    <Link href="/mentor-registration" className="header-user__signup btn btn-hover-primary" style={{ padding: "0px 9px" }}>
                      Be a Counsellor
                    </Link>
                  </div>
                </div>
                <div className="header-toggle">
                  <button className="header-toggle__btn d-xl-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMobileMenu">
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
    </div>
  );
}
