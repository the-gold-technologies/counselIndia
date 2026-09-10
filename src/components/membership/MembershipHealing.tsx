"use client";
import React from "react";

export default function MembershipHealing() {
  return (
    <>
      <div
        className="section-2nd"
        style={{ marginTop: "5%", marginBottom: "5%" }}
      >
        <div className="container custom-container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Section Title Start */}
              <div
                className="section-title text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h2 className="section-title__title-03">
                  We Are Here For Healing!!
                </h2>

                <h5 className="mb-4 fw-bold" style={{ marginTop: "5%" }}>
                  This community is your safe place for healing and self-growth.
                  No,{" "}
                  <span className="primary-text-color">
                    <strong>
                      {" "}
                      it is NOT limited to self-healers but open to both
                      professionals and clients like yourself!{" "}
                    </strong>
                  </span>
                  Feel free to expose your vulnerable selves as this space is
                  judgement-free.
                </h5>

                <div className="ag-format-container">
                  <div className="ag-courses_box">
                    <div className="ag-courses_item">
                      <a href="#" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>
                        <div className="ag-courses-item_title">
                          You will experience significant growth both personally
                          and professionally!
                        </div>
                      </a>
                    </div>

                    <div className="ag-courses_item">
                      <a href="#" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>
                        <div className="ag-courses-item_title">
                          Yes. You will build your professional competence &amp;
                          learn from the finest experts!
                        </div>
                      </a>
                    </div>

                    <div className="ag-courses_item">
                      <a href="#" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>
                        <div className="ag-courses-item_title">
                          Yes. You will get HOURS &amp; HOURS of empowerment!
                        </div>
                      </a>
                    </div>

                    <div className="ag-courses_item">
                      <a href="#" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>
                        <div className="ag-courses-item_title">
                          Yes. You will get a massive toolkit of personalized
                          resources.
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Section Title End */}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .ag-format-container {
          width: 90%;
          margin: 0 auto;
        }
        .ag-courses_box {
          display: flex;
          flex-wrap: wrap;
          padding: 30px 0;
        }
        .ag-courses_item {
          flex-basis: calc(50% - 20px);
          margin: 0 10px 20px;
          overflow: hidden;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
        }
        .ag-courses-item_link {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px 15px;
          background-color: #2d8325;
          overflow: hidden;
          position: relative;
          flex: 1;
        }
        .ag-courses-item_link:hover,
        .ag-courses-item_link:hover .ag-courses-item_date {
          text-decoration: none;
          color: #FFF;
        }
        .ag-courses-item_link:hover .ag-courses-item_bg {
          transform: scale(6);
        }
        .ag-courses-item_title {
          min-height: 72px;
          margin: 0 0 20px;
          overflow: hidden;
          font-weight: bold;
          font-size: 24px;
          color: #FFF;
          z-index: 2;
          position: relative;
        }
        .ag-courses-item_date-box {
          font-size: 16px;
          color: #FFF;
          z-index: 2;
          position: relative;
        }
        .ag-courses-item_date {
          font-weight: bold;
          color: #0d751c;
          transition: color .5s ease;
        }
        .ag-courses-item_bg {
          height: 100px;
          width: 100px;
          background-color: #0000001f;
          z-index: 1;
          position: absolute;
          top: -50px;
          right: -50px;
          border-radius: 50%;
          transition: all .5s ease;
        }
        .ag-courses_item:nth-child(2n) .ag-courses-item_bg { background-color: #0000001f; }
        .ag-courses_item:nth-child(3n) .ag-courses-item_bg { background-color: #0000001f; }
        .ag-courses_item:nth-child(4n) .ag-courses-item_bg { background-color: #0000001f; }

        @media only screen and (max-width: 979px) {
          .ag-courses_item { flex-basis: calc(50% - 20px); }
          .ag-courses-item_title { font-size: 20px; }
        }
        @media only screen and (max-width: 767px) {
          .ag-format-container { width: 96%; }
          .campus-image { margin-right: 0 !important; }
        }
        @media only screen and (max-width: 639px) {
          .ag-courses_item { flex-basis: 100%; }
          .ag-courses-item_title { min-height: 60px; line-height: 1.2; font-size: 20px; }
          .ag-courses-item_link { padding: 18px 15px; }
          .ag-courses-item_date-box { font-size: 14px; }
        }
      `}</style>
    </>
  );
}
