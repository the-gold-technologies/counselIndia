"use client";
import React from "react";
import Link from "next/link";

export default function AboutCareersCTA() {
  return (
    <section className="banner-section py-5 bg-white">
      <div className="container custom-container py-3">
        <div className="banner-big-box p-4 p-lg-5 rounded-4 position-relative overflow-hidden shadow-sm">
          {/* Arrow Decoration */}
          <img
            className="banner-big-box__arrow position-absolute d-none d-md-block"
            src="/assets/images/curve-arrow.png"
            alt="Arrow"
            width={50}
            height={45}
            style={{ top: "30px", right: "50px", opacity: 0.8 }}
          />

          <div className="banner-caption-03 position-relative z-1" style={{ maxWidth: "880px" }}>
            <span className="badge bg-success-subtle text-success font-size-12 fw-bold text-uppercase px-3 py-1 mb-3 d-inline-block">
              We Are Hiring!
            </span>
            <h3 className="banner-caption-03__title font-size-32 fw-bold text-dark mb-3" style={{ fontFamily: "Georgia, serif" }}>
              Explore Opportunities with Counsel India
            </h3>
            <p className="font-size-15 text-muted lh-lg mb-3 text-justify">
              Being a mental health education company, we ensure our employees a greater level of care, support, and work-life balance. We provide a healthy, zero-burnout, skill-focused working environment as opposed to over-working and highly stressful culture across most workplaces. The Individual Development Plans (IDPs), regular personal counselling sessions, flexible working hours, incentives &amp; bonuses, female healthcare plans, rapid growth opportunities and perfect work-life balance are just some of the reasons that people prefer to work with us.
            </p>
            <p className="font-size-15 text-muted lh-lg mb-4 text-justify">
              We aren’t looking for long resumes or high qualifications. We make our hiring decisions based on your skill sets, passion to excel and succeed in your domain. Our hardworking and passionate employees are rightfully rewarded with increments and perks. If you have it yourself then Counsel India is a place for you to thrive and grow.
            </p>

            <Link
              href="/career"
              className="btn btn-primary px-4 py-3 font-size-15 fw-bold rounded-pill shadow-sm text-decoration-none d-inline-flex align-items-center"
              style={{ backgroundColor: "#07a64b", borderColor: "#07a64b" }}
            >
              Current Openings <i className="fal fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .banner-big-box {
          background: linear-gradient(135deg, #e6f6ed 0%, #f4fbf7 50%, #ffffff 100%);
          border: 1px solid #dceed5;
        }

        .banner-caption-03__title {
          color: #1e293b;
        }
      `}</style>
    </section>
  );
}
