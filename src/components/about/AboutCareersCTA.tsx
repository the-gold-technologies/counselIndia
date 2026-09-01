"use client";
import React from "react";
import Link from "next/link";

export default function AboutCareersCTA() {
  return (
    <div className="banner-section section-padding-01 py-5 bg-white">
      <div className="container custom-container py-3">
        {/* Banner Box Start */}
        <div className="banner-big-box banner-bg-4 position-relative rounded-3">
          <img
            className="banner-big-box__arrow"
            src="https://prod-s3.counselindia.com/images/curve-arrow.png"
            alt="arrow"
            width={50}
            height={45}
          />
          <div className="banner-caption-03">
            <h3 className="banner-caption-03__title">Explore Opportunities with CI</h3>
            <p>
              Being a mental health education company, we ensure our employees a greater level of care, support, and work-life balance. We provide a healthy, zero-burnout, skill-focused working environment as opposed to over-working and highly stressful culture across most of the workplaces. The Individual Development Plans (IDPs), regular personal counselling sessions, flexible working hours, incentives &amp; bonuses, female health care plans, rapid growth opportunities and perfect work-life balance are just some of the reasons that people prefer to work with us.
            </p>
            <p>
              We aren’t looking for long resumes or high qualifications. We make our hiring decisions based on your skill sets passion to excel and succeed in your domain. Our hardworking and passionate employees are rightfully rewarded with increments and perks. If you have it yourself then Counsel India is a place for you to thrive and grow.
            </p>
            <Link
              href="/career"
              className="banner-caption-03__btn btn btn-primary btn-hover-primary"
            >
              Current Openings
            </Link>
          </div>
        </div>
        {/* Banner Box End */}
      </div>

      <style jsx>{`
        .banner-bg-4 {
          background-color: #f1f3f2;
          padding: 40px 45px 42px 95px;
          border-radius: 8px;
          position: relative;
        }

        .banner-big-box__arrow {
          position: absolute;
          left: 32px;
          bottom: 50px;
        }

        .banner-caption-03__title {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          font-size: 28px;
          font-weight: 700;
          color: #212529;
          margin-bottom: 16px;
        }

        .banner-caption-03 p {
          font-size: 14px;
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .banner-caption-03__btn {
          background-color: #07a64b;
          border-color: #07a64b;
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          padding: 10px 24px;
          border-radius: 4px;
          display: inline-block;
          margin-top: 10px;
          text-decoration: none;
        }

        .banner-caption-03__btn:hover {
          background-color: #05853c;
          border-color: #05853c;
        }

        @media (max-width: 768px) {
          .banner-bg-4 {
            padding: 30px 20px;
          }
          .banner-big-box__arrow {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
