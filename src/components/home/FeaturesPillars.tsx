"use client";
import React from "react";
import Link from "next/link";

export default function FeaturesPillars() {
  return (
    <div className="features-section bg-color-primary">
      <div className="container">
        <div className="row g-6 justify-content-between align-items-center">
          <div className="col-lg-3 col-sm-6">
            <Link href="/courses" className="text-decoration-none">
              <div className="features-item">
                <div className="features-item__icon text-white">
                  <i className="fas fa-certificate fa-3x" style={{ color: "white" }}></i>
                </div>
                <div className="features-item__caption">
                  <h3 className="features-item__title text-white">
                    Specialized Courses &amp; Diplomas
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-3 col-sm-6">
            <Link href="/counselling" className="text-decoration-none">
              <div className="features-item">
                <div className="features-item__icon text-white">
                  <i className="fas fa-user-md fa-3x" style={{ color: "white" }}></i>
                </div>
                <div className="features-item__caption">
                  <h3 className="features-item__title text-white">
                    Personal<br />Counselling
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-3 col-sm-6">
            <Link href="/hiring-partners" className="text-decoration-none">
              <div className="features-item">
                <div className="features-item__icon text-white">
                  <i className="fas fa-handshake fa-3x" style={{ color: "white" }}></i>
                </div>
                <div className="features-item__caption">
                  <h3 className="features-item__title text-white">
                    Hiring Partners Network
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
