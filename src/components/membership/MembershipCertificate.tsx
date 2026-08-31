"use client";
import React from "react";

export default function MembershipCertificate() {
  return (
    <>
      <div className="campus-wrapper scene bg-imgg">
        <div className="campus" style={{ padding: "50px 0 70px" }}>
          <div className="container custom-container" style={{ maxWidth: "1240px" }}>
            {/* Centered Heading at Top */}
            <div className="section-title text-center" data-aos="fade-up" data-aos-duration="1000" style={{ marginBottom: "50px" }}>
              <h2
                className="section-title__title-03 mark-title"
                style={{
                  fontSize: "44px",
                  fontWeight: 700,
                  color: "#1a2638",
                  margin: "0 auto",
                }}
              >
                Membership Certificate
              </h2>
            </div>

            <div className="row gy-5 flex-row-reverse align-items-center justify-content-between">
              {/* Certificate Image on Right */}
              <div className="col-md-6 col-lg-7 text-center text-md-end">
                <div className="campus-image">
                  <div className="campus-image__image" data-aos="fade-up" data-aos-duration="1000">
                    <img
                      src="https://prod-s3.counselindia.com/mastergalaxyimages/WhatsApp%20Image%202024-09-12%20at%2015.08.40_1726134061.jpeg"
                      alt="Certificate Sample"
                      width="570"
                      height="399"
                      loading="lazy"
                      decoding="async"
                      className="img-fluid"
                      style={{
                        maxWidth: "580px",
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                        display: "inline-block",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Text Widget on Left */}
              <div className="col-md-6 col-lg-5">
                <div className="campus-widget" style={{ paddingLeft: "15px" }}>
                  <div className="campus-widget-item" data-aos="fade-up" data-aos-duration="1000">
                    <div className="campus-widget-item__content">
                      <h3
                        className="fw-bold"
                        style={{
                          fontSize: "32px",
                          color: "#07a64b",
                          marginBottom: "24px",
                          fontWeight: 800,
                          letterSpacing: "-0.3px",
                        }}
                      >
                        Hey awesome members!
                      </h3>
                      <p
                        className="fw-bold"
                        style={{
                          color: "#1a2638",
                          fontSize: "20px",
                          lineHeight: "1.55",
                          fontWeight: 700,
                          margin: 0,
                        }}
                      >
                        As if being part of Counsel India wasn&apos;t already amazing enough, we&apos;re adding a cherry on top! Complete your membership journey with us, and you&apos;ll earn a certificate to show off.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .campus-wrapper {
          background-image: url("https://prod-s3.counselindia.com/mastergalaxyimages/Untitled%20design-12_1726055378.png");
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          width: 100%;
        }

        @media only screen and (max-width: 767px) {
          .campus-wrapper {
            background-image: none !important;
            background-color: #e6f0e2 !important;
          }
        }
      `}</style>
    </>
  );
}
