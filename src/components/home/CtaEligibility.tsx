"use client";
import React from "react";
import Link from "next/link";

export default function CtaEligibility() {
  return (
    <div className="call-to-action section-padding-02">
      <div className="container">
        <div className="call-to-action__wrapper">
          <div className="call-to-action__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <div className="call-to-action__content">
            <div className="call-to-action__shape-01"></div>
            <div className="call-to-action__shape-02"></div>
            <div className="call-to-action__shape-03"></div>
            <div className="call-to-action__caption">
              <h3 className="call-to-action__main-title">
                Wondering if Psychology is the Right Fit for You?
              </h3>
            </div>
            <div className="call-to-action__btn">
              <Link href="/eligibility-test" className="btn btn-secondary btn-hover-primary">
                Check Your Eligibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
