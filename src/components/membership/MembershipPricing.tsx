"use client";
import React from "react";

export default function MembershipPricing() {
  const monthlyList = [
    "30+ Emotional Exercises",
    "10+ Self-help videos",
    "Emotional Meter Tracker",
    "5 Self-Paced Programs",
    "10+ Psychology Book recommendations",
    "10+ Psychology movie recommendations",
    "1 Newsletter",
    "Refer & Grow:",
  ];

  const yearlyList = [
    "360+ Emotional Exercises",
    "120+ Self-help videos",
    "Emotional Meter Tracker",
    "60 Self Paced Programs",
    "120+ Psychology Book recommendations",
    "120+ Psychology movie recommendations",
    "Lifetime Newsletter Insider access",
    "5% Additional discount on Psychology programs",
  ];

  return (
    <>
      <section id="generic_price_table">
        <div className="container" id="member">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center mb-5">
                <h2 className="section-title__title-03 mark-title">Membership Plans</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container custom-container" style={{ maxWidth: "1200px" }}>
          <div className="row22 row justify-content-center g-4">
            {/* Monthly Plan */}
            <div className="col-md-6 mb-4">
              <div className="generic_content active clearfix">
                <div className="generic_head_price clearfix">
                  <div className="generic_head_content clearfix">
                    <div className="head_bg"></div>
                    <div className="head">
                      <span>MONTHLY</span>
                    </div>
                  </div>

                  <div className="generic_price_tag clearfix">
                    <span className="price">
                      <span className="sign"></span>
                      <span className="currency">299</span>
                      <span className="cent">.</span>
                      <span className="month">/Month</span>
                    </span>
                  </div>
                </div>

                <div className="generic_feature_list">
                  <ul>
                    {monthlyList.map((item, idx) => (
                      <li key={idx}>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="generic_price_btn clearfix">
                  <a
                    href="https://members.internationalpsychologyassociation.org/web/checkout/685f7f1f8940d4ca05cf405f"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <strong>Become a member</strong>
                  </a>
                </div>
              </div>
            </div>

            {/* Yearly Plan */}
            <div className="col-md-6 mb-4">
              <div className="generic_content active clearfix">
                <div className="generic_head_price clearfix">
                  <div className="generic_head_content clearfix">
                    <div className="head_bg"></div>
                    <div className="head">
                      <span>YEARLY</span>
                    </div>
                  </div>

                  <div className="generic_price_tag clearfix">
                    <span className="price">
                      <span className="sign"></span>
                      <span className="currency">999</span>
                      <span className="cent">.</span>
                      <span className="month">/Year</span>
                    </span>
                  </div>
                </div>

                <div className="generic_feature_list">
                  <ul>
                    {yearlyList.map((item, idx) => (
                      <li key={idx}>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="generic_price_btn clearfix">
                  <a
                    href="https://members.internationalpsychologyassociation.org/web/checkout/68592cb4e3087026dbd44bef"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <strong>Become a member</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        #generic_price_table {
          padding: 60px 0;
          font-family: "Raleway", sans-serif;
          background-color: #f7f9f8;
        }

        .generic_content {
          background-color: #ffffff;
          overflow: hidden;
          position: relative;
          text-align: center;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          transition: all 0.3s ease-in-out;
        }

        .generic_head_price {
          margin: 0 0 20px 0;
          background-color: #f6f6f6;
          position: relative;
        }

        .generic_head_content {
          position: relative;
          background: #2ecc71;
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
          padding: 30px 0 40px;
        }

        .generic_head_content .head span {
          font-family: "Raleway", sans-serif;
          font-size: 28px;
          font-weight: 500;
          letter-spacing: 2px;
          color: #ffffff;
          text-transform: uppercase;
          display: block;
        }

        .generic_price_tag {
          padding: 24px 0 30px;
          background-color: #f6f6f6;
        }

        .generic_price_tag .price {
          display: block;
        }

        .generic_price_tag .price .currency {
          font-family: "Lato", sans-serif;
          font-size: 68px;
          font-weight: 300;
          letter-spacing: -2px;
          line-height: 60px;
          color: #414141;
          vertical-align: middle;
        }

        .generic_price_tag .price .cent {
          font-family: "Lato", sans-serif;
          font-size: 26px;
          font-weight: 400;
          color: #414141;
          vertical-align: bottom;
        }

        .generic_price_tag .price .month {
          font-family: "Lato", sans-serif;
          font-size: 20px;
          font-weight: 400;
          letter-spacing: 2px;
          color: #414141;
          vertical-align: bottom;
        }

        .generic_feature_list {
          flex-grow: 1;
          padding: 10px 0;
        }

        .generic_feature_list ul {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: center;
        }

        .generic_feature_list ul li {
          font-family: "Lato", sans-serif;
          font-size: 17px;
          color: #414141;
          padding: 16px 20px;
          transition: all 0.25s ease-in-out;
          border-bottom: 1px solid #f0f0f0;
          text-align: center;
          border-left: 5px solid transparent;
        }

        .generic_feature_list ul li:hover {
          background-color: #e4e4e4;
          border-left: 5px solid #2ecc71;
          color: #1a2638;
        }

        .generic_feature_list ul li:last-child {
          border-bottom: none;
        }

        .generic_price_btn {
          margin: 30px 0 40px;
          padding: 0 40px;
        }

        .generic_price_btn a {
          background-color: #2ecc71;
          border: 1px solid #2ecc71;
          color: #ffffff;
          border-radius: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          line-height: 1;
          height: 52px;
          width: 100%;
          font-family: "Lato", sans-serif;
          font-size: 17px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(46, 204, 113, 0.25);
          transition: all 0.3s ease-in-out;
        }

        .generic_price_btn a:hover {
          background-color: #27ae60;
          border-color: #27ae60;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(46, 204, 113, 0.35);
        }
      `}</style>
    </>
  );
}
