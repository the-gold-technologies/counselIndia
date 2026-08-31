"use client";
import React from "react";

export default function SignedMous() {
  return (
    <div className="partners-seaction section-padding-02 bg-white">
      <div className="container custom-container">
        <div className="row">
          <div className="col-sm-12">
            {/* Section Title Start */}
            <div className="section-title mb-4">
              <h2 className="section-title__title">
                Expanding Horizons: <mark>Signed MOUs</mark>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        {/* MOU Image Start */}
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div
              className="partner-logo d-inline-block"
              style={{
                borderRadius: "4px",
                overflow: "hidden",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div className="partner-logo__logo">
                <img
                  src="/assets/images/partners-logo/client_logo.jpg"
                  alt="Psychology University MOU Certificate"
                  style={{
                    width: "100%",
                    maxWidth: "240px",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* MOU Image End */}
      </div>
    </div>
  );
}
