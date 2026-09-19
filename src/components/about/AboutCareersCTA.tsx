"use client";
import React from "react";
import Link from "next/link";

export default function AboutCareersCTA() {
  return (
    <div className="banner-section section-padding-01">
      <div className="container">
        {/* Banner Box Start */}
        <div
          className="banner-big-box banner-bg-4 position-relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            className="banner-big-box__arrow"
            src="https://prod-s3.counselindia.com/images/curve-arrow.png"
            alt="arrow"
            width={50}
            height={45}
          />
          <div className="banner-caption-03">
            <h3 className="banner-caption-03__title">
              Explore Opportunities with CI
            </h3>
            <p>
              Being a mental health education company, we ensure our employees a
              greater level of care, support, and work-life balance. We provide a
              healthy, zero-burnout, skill-focused working environment as opposed
              to over-working and highly stressful culture across most of the
              workplaces. The Individual Development Plans (IDPs), regular
              personal counselling sessions, flexible working hours, incentives
              &amp; bonuses, female health care plans, rapid growth opportunities
              and perfect work-life balance are just some of the reasons that
              people prefer to work with us.
            </p>
            <p>
              We aren’t looking for long resumes or high qualifications. We make
              our hiring decisions based on your skill sets passion to excel and
              succeed in your domain. Our hardworking and passionate employees
              are rightfully rewarded with increments and perks. If you have it
              yourself then Counsel India is a place for you to thrive and grow.
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
        .section-padding-01 {
          padding-top: 50px;
          padding-bottom: 50px;
        }

        .banner-bg-4 {
          background-color: #f2f2f2;
          padding: 45px 50px 45px 85px;
          border-radius: 8px;
          position: relative;
        }

        .banner-big-box__arrow {
          position: absolute;
          left: 45px;
          bottom: 72px;
        }

        .banner-caption-03__title {
          font-family: "Playfair Display", serif;
          font-size: 26px;
          font-weight: 700;
          line-height: 1.4;
          color: #232937;
          margin-bottom: 16px;
        }

        .banner-caption-03 p {
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #333;
          line-height: 1.75;
          margin-bottom: 16px;
        }

        .banner-caption-03__btn {
          background-color: #07a64b;
          border-color: #07a64b;
          color: #ffffff;
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          font-weight: 500;
          padding: 12px 28px;
          border-radius: 5px;
          display: inline-block;
          margin-top: 10px;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
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
