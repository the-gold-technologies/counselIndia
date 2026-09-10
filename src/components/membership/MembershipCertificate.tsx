"use client";
import React from "react";

export default function MembershipCertificate() {
  return (
    <>
      <style>{`
        .campus-wrapper.bg-imgg {
          margin-top: 5%;
          background-image: url('https://prod-s3.counselindia.com/mastergalaxyimages/Untitled%20design-12_1726055378.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        @media only screen and (max-width: 767px) {
          .campus-image { margin-right: 0 !important; }
          .campus-wrapper.bg-imgg {
            background-image: none !important;
            background-color: #E6F0E2 !important;
          }
        }
      `}</style>

      <div className="campus-wrapper scene bg-imgg">
        <div className="campus">
          <div className="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="section-title__title-03 mark-title">Membership Certificate</h2>
          </div>
          <div className="row gy-6 flex-row-reverse align-items-center">
            <div className="col-md-6">
              {/* Campus Image Start */}
              <div className="campus-image" style={{ marginRight: "2%" }}>
                <div className="campus-image__image" data-aos="fade-up" data-aos-duration="1000">
                  <img
                    src="https://prod-s3.counselindia.com/mastergalaxyimages/WhatsApp%20Image%202024-09-12%20at%2015.08.40_1726134061.jpeg"
                    alt="Campus"
                    width="570"
                    height="399"
                  />
                </div>
              </div>
              {/* Campus Image End */}
            </div>
            <div className="col-md-6">
              {/* Campus Widget Start */}
              <div className="campus-widget">
                {/* Campus Widget Item Start */}
                <div className="campus-widget-item" data-aos="fade-up" data-aos-duration="1000">
                  <div className="campus-widget-item__content">
                    <h5 className="mb-4 fw-bold" style={{ marginTop: "3%" }}>
                      <strong style={{ fontSize: "29px", color: "green" }}>
                        Hey awesome members!
                        <br />
                        <br />
                      </strong>
                      As if being part of Counsel India wasn&apos;t already amazing enough, we&apos;re adding a cherry
                      on top! Complete your membership journey with us, and you&apos;ll earn a certificate to show off.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
