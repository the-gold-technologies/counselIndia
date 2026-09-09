"use client";
import React from "react";

export default function AcademicHero() {
  return (
    <div className="page-banner bg-color-04">
      <div className="page-banner__wrapper">
        <div className="page-banner__shape-01" />
        <div className="page-banner__shape-02" />
        <div className="page-banner__shape-03" />

        <div className="container custom-container">
          {/* Page Breadcrumb Start */}
          <div className="page-breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="#"></a></li>
              <li className="breadcrumb-item"><a href="#"></a></li>
              <li className="breadcrumb-item active"></li>
            </ul>
          </div>
          {/* Page Breadcrumb End */}

          {/* Page Banner Caption Start */}
          <div className="page-banner__caption-02">
            <h2 className="page-banner__main-title-02">Academic Policy</h2>
          </div>
          {/* Page Banner Caption End */}
        </div>
      </div>
    </div>
  );
}
