"use client";
import React from "react";

export default function NewsletterBenefits() {
  return (
    <div className="newsletter-benefits-wrapper w-100">
      <img
        src="https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/images/MicrosoftTeams-image+(14).png"
        className="benifits"
        alt="Newsletter Benefits"
        style={{ width: "100%", height: "auto", display: "block" }}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />

      <style jsx>{`
        .benifits {
          width: 100%;
          height: auto;
          display: block;
        }

        @media only screen and (max-width: 600px) {
          .benifits {
            height: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
