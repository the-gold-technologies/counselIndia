"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer-section bg-color-12">
      <div className="footer-widget-area section-padding-01">
        <div className="container custom-container pb-5">
          <div className="row gy-6">
            <div className="col-sm-2 col-6">
              <div className="footer-widget">
                <h4 className="footer-widget__title">Products</h4>
                <ul className="footer-widget__link footer-widget__link-02">
                  <li><Link href="/courses">Courses</Link></li>
                  <li><Link href="/counsellors-network">Counselling</Link></li>
                  <li><Link href="/ci-business">CI for Business</Link></li>
                  <li><Link href="/counsellors-network">Counsellors Network</Link></li>
                  <li><Link href="/membership">Memberships/<br />Registrations</Link></li>
                  <li><Link href="/eligibility-test">Check Your Eligibility</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="col-sm-2 col-6">
              <div className="footer-widget">
                <h4 className="footer-widget__title">Company</h4>
                <ul className="footer-widget__link footer-widget__link-02">
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/event">Events</Link></li>
                  <li><Link href="/success-stories">Success Stories</Link></li>
                  <li><Link href="/career">Careers</Link></li>
                  <li><Link href="/contact-us">Contact Us</Link></li>
                  <li><Link href="/alumni">Alumni Network</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-sm-2 col-6">
              <div className="footer-widget">
                <h4 className="footer-widget__title">Resources</h4>
                <ul className="footer-widget__link footer-widget__link-02">
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/newsletter">Newsletter</Link></li>
                  <li><Link href="/news">News/Media</Link></li>
                  <li><Link href="/ebook">eBooks</Link></li>
                  <li><a href="https://rzp.io/l/counselindiapayment">Online Payment</a></li>
                  <li><Link href="/faq">FAQs</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-sm-2 col-6">
              <div className="footer-widget">
                <h4 className="footer-widget__title">Support</h4>
                <ul className="footer-widget__link footer-widget__link-02">
                  <li><Link href="/terms-condition">Terms &amp; Conditions</Link></li>
                  <li><Link href="/refund-policy">Refund Policy</Link></li>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/academic-policy">Academic Policy</Link></li>
                  <li><Link href="/grievance-form">Grievance Form</Link></li>
                  <li><Link href="/ask-question">Ask a Question</Link></li>
                  <li><a href="#" data-bs-toggle="modal" data-bs-target="#counloginModal">Counselor Login</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="footer-widget">
                <a href="#" className="footer-widget__logo">
                  <img src="/assets/images/logo-light.png" alt="Logo" width="150" height="32" />
                </a>
                <p className="footer-widget__description mb-1">
                  Counsel India is Indias fastest growing Counsellors and Psychologists network
                  <Link href="/about" className="primary-text-color"><u>More</u></Link>
                </p>
                <div className="footer-widget__info">
                  <span className="text-white fw-semibold">COUNSELINDIA SERVICES PRIVATE LIMITED</span>
                  <br />
                  <span className="text-white fw-semibold">GST : 09AAICC6447N1Z0</span>
                  <address className="text-white">
                    <i className="fas fa-map-marker-alt"></i>&nbsp;
                    C-106, SECTOR-2, Noida, Gautam Buddha Nagar,<br /> Uttar Pradesh, 201301
                    <br />
                    <i className="fas fa-map-marker-alt"></i>&nbsp;
                    For Client Visit : Office no 12A20, Floor No-13, E-Square sector 96, Noida, Uttar Pradesh 201301
                    <br />
                  </address>
                </div>
                <div className="footer-widget__social-02">
                  <a href="https://twitter.com/counselindia1?lang=en" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                  <a href="https://www.facebook.com/counselindia/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/counsel_india_/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                  <a href="https://www.youtube.com/channel/UCWnALe3hLVdGJzVOuEgGoYg" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
                  <a href="https://www.linkedin.com/company/28905636/admin/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mt-4">
              <div className="footer_logo">
                <img src="/assets/images/mpsc.png" alt="" />
                <img src="/assets/images/internation5.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <h6 className="text-white">Subscribe to our Newsletter</h6>
              <div className="footer-widget__form footer-widget__form-02">
                <input type="text" id="emailTextarea" placeholder="Your Email Address" required className="border-color-radius" />
                <button type="button" className="btn btn-secondary btn-hover-primary">Subscribe</button>
              </div>
            </div>
          </div>
          <div style={{ borderBottom: "1px solid white", paddingTop: "20px" }}></div>
        </div>

        <div className="container custom-container">
          <div className="footer-copyright">
            <div className="container">
              <div className="copyright-wrapper">
                <p className="footer-widget__copyright mt-0 text-center">&copy; {new Date().getFullYear()}
                  <span> CounselIndia Services Private Limited. All Rights Reserved</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
