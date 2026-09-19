"use client";
import React from "react";
import { LEADERS } from "./data/aboutData";

export default function AboutLeadership() {
  return (
    <div className="team-section section-padding-02">
      <div className="container custom-container">
        <div className="row">
          <div className="col-md-12">
            {/* Section Title Start */}
            <div
              className="section-title"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h2 className="section-title__title">
                <mark>Meet the Visionaries Behind Counsel India</mark>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row gy-6">
          {LEADERS.map((leader, idx) => (
            <div
              key={idx}
              className="col-lg-3 col-md-4 col-sm-6 mb-4 mb-lg-0"
              style={{ marginRight: "100px" }}
            >
              {/* Team Item Start */}
              <div
                className="team-item"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="team-item__image position-relative overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    width={270}
                    height={332}
                    className="img-fluid w-100"
                  />
                  <div className="team-item__social">
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin text-white text-decoration-none"
                    >
                      Linkedin <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="team-item__content">
                  <h3 className="team-item__name">{leader.name}</h3>
                  <p className="team-item__position mt-0 mb-0">
                    {leader.designation}
                  </p>
                </div>
              </div>
              {/* Team Item End */}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-padding-02 {
          padding-top: 50px;
        }

        .custom-container {
          max-width: 1200px;
          padding-left: 15px;
          padding-right: 15px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-title {
          margin-bottom: 37px;
        }

        .section-title__title {
          font-family: "Playfair Display", serif;
          font-size: 28px;
          line-height: 1.5;
          font-weight: 700;
          color: #232937;
        }

        .section-title__title mark {
          position: relative;
          z-index: 0;
          padding: 0 0 10px;
          color: inherit;
          background-color: transparent;
          display: inline-block;
        }

        .section-title__title mark::after {
          content: "";
          position: absolute;
          width: 91px;
          height: 12px;
          bottom: 0;
          left: 50%;
          z-index: -1;
          transform: translate(-45px);
          background-color: #07a64b;
          mask-repeat: no-repeat;
          mask-size: contain;
          mask-image: url("https://www.counselindia.com/assets/images/headline-curve-02.svg");
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          -webkit-mask-image: url("https://www.counselindia.com/assets/images/headline-curve-02.svg");
        }

        .team-item {
          max-width: 270px;
        }

        .team-item__image {
          position: relative;
          overflow: hidden;
          border-radius: 5px;
        }

        .team-item__image img {
          border-radius: 5px;
          width: 100%;
          height: auto;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .team-item:hover .team-item__image img {
          transform: scale(1.05);
        }

        .team-item__social {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.7);
          padding: 8px 10px;
          text-align: center;
          font-size: 13px;
        }

        .team-item__social a {
          color: #fff;
          font-size: 13px;
        }

        .team-item__social a:hover {
          color: #07a64b;
        }

        .team-item__content {
          text-align: center;
          padding: 15px 0 7px;
        }

        .team-item__name {
          font-family: "Poppins", sans-serif;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.6;
          margin: 0;
          color: #232937;
        }

        .team-item__position {
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          color: #777;
          margin-top: 6px;
        }
      `}</style>
    </div>
  );
}
