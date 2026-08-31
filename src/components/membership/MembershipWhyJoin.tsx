"use client";
import React from "react";

export default function MembershipWhyJoin() {
  return (
    <div className="section-2nd" style={{ marginTop: "5%", marginBottom: "5%" }}>
      <div className="container custom-container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Section Title Start */}
            <div className="section-title text-center">
              <h2
                className="section-title__title-03"
                style={{ fontSize: "42px", fontWeight: 700, color: "#1a2638", marginBottom: "15px" }}
              >
                Why should I join?
              </h2>
              <h6
                className="mt-2"
                style={{
                  color: "#212529",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "1.7",
                  maxWidth: "920px",
                  margin: "0 auto",
                }}
              >
                Because life is too long to not be your best self, and we understand this. This membership is a workout for your mind,
                just like a good consistent workout keeps you happy and healthy for longer.
              </h6>
              <a
                className="btn btn-primary btn-hover-primary"
                href="#member"
                style={{
                  marginTop: "30px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  lineHeight: 1,
                  height: "48px",
                  padding: "0 32px",
                  backgroundColor: "#07a64b",
                  borderColor: "#07a64b",
                  color: "#ffffff",
                  borderRadius: "4px",
                  fontSize: "15px",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 4px 12px rgba(7, 166, 75, 0.25)",
                }}
              >
                Claim Your Membership!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
