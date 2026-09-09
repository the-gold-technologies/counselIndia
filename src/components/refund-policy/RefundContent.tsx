"use client";
import React from "react";

export default function RefundContent() {
  return (
    <div className="blog-section section-padding-01">
      <div className="container custom-container">
        <div className="row gy-10">
          <div className="col-lg-12">
            {/* Blog Details Start */}
            <div className="blog-details">
              <div className="blog-details__content">
                <h3 className="blog-details__title" style={{ fontSize: "20px" }}>
                  The present Refund Policy has been framed by Counsel India Services Pvt. Ltd. at
                  Noida
                </h3>
                <h3 className="blog-details__title">
                  Refund of the fees paid shall be entertained only under the following conditions :
                </h3>
                <ul>
                  <li>
                    Request for refund should be made not later than 7 days after the first payment
                    is made to Counsel India.
                  </li>
                  <li>There should be a valid reason for refund.</li>
                  <li>Registration fees is not refundable.</li>
                  <li>
                    Refund request shall not be entertained telephonically. It should be mailed to
                    refund@counselindiaservices.in
                  </li>
                </ul>
              </div>
            </div>
            {/* Blog Details End */}
          </div>
        </div>
      </div>
    </div>
  );
}
