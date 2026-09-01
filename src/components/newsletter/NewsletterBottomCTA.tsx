"use client";
import React from "react";

interface Props {
  onSubscribeClick: () => void;
}

export default function NewsletterBottomCTA({ onSubscribeClick }: Props) {
  return (
    <div className="container" style={{ margin: "40px auto 60px" }}>
      <div className="cta-section" style={{ borderRadius: "20px" }}>
        <div className="cta-content">
          <h1
            className="cta-heading"
            style={{
              fontFamily: "'Arial Black', sans-serif",
              fontSize: "36px",
              color: "#000000",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "10px",
              lineHeight: "1.2",
            }}
          >
            &quot;Unlock Psychology <br />
            Mastery with Our <br />
            Guidance&quot;
          </h1>
          <p
            className="cta-subheading"
            style={{
              fontFamily: "'Arial', sans-serif",
              fontSize: "18px",
              color: "#ffffff",
              marginBottom: "20px",
            }}
          >
            Empower yourself with insights from your personal newsletter.
          </p>
        </div>

        <div className="footer-widget__form footer-widget__form-02 cta-right" id="footer-poster">
          <button
            type="button"
            id="footer-btn"
            className="btn btn-secondary btn-hover-primary"
            onClick={onSubscribeClick}
            style={{
              fontSize: "18px",
              padding: "12px 32px",
              borderRadius: "5px",
              fontWeight: 600,
            }}
          >
            Subscribe
          </button>

          <div
            className="subscriber-section footer-section2"
            style={{
              display: "inline-block",
              verticalAlign: "top",
              marginLeft: "20px",
            }}
          >
            <p
              className="subscriber-text"
              style={{
                marginBottom: "5px",
                marginTop: "10%",
                fontSize: "14px",
                color: "#ffffff",
              }}
            >
              10k+ Subscribers enjoying their newsletter insights.
            </p>
            <div className="subscriber-images" style={{ display: "flex", marginTop: "10px" }}>
              <img
                className="subscriber-image"
                src="https://i.ibb.co/s5wXg5m/Rectangle-1978.png"
                alt="Subscriber Image 1"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "25px",
                  marginRight: "-16px",
                }}
              />
              <img
                className="subscriber-image"
                src="https://i.ibb.co/5rPBSs1/Rectangle-1979.png"
                alt="Subscriber Image 2"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "25px",
                  marginRight: "-16px",
                }}
              />
              <img
                className="subscriber-image"
                src="https://i.ibb.co/CMxjxdR/Rectangle-1976.png"
                alt="Subscriber Image 3"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "25px",
                  marginRight: "-16px",
                }}
              />
              <img
                className="subscriber-image"
                src="https://i.ibb.co/jbj1mCc/Rectangle-1977.png"
                alt="Subscriber Image 4"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "25px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          display: flex;
          background-image: url("https://i.ibb.co/xhDq9kR/Frame-716.png");
          background-size: cover;
          background-position: center;
          min-height: 250px;
          padding: 24px 32px;
          box-sizing: border-box;
          align-items: center;
          justify-content: space-between;
        }

        .cta-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          color: #fff;
        }

        .cta-right {
          display: flex;
          align-items: center;
        }

        @media only screen and (max-width: 900px) {
          .cta-section {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 24px 16px;
            min-height: auto;
          }

          .cta-content {
            align-items: center;
          }

          .cta-heading {
            font-size: 22px !important;
            text-align: center;
          }

          .cta-subheading {
            font-size: 14px !important;
            text-align: center;
          }

          .cta-right {
            flex-direction: column;
            margin-top: 15px;
          }

          .subscriber-section {
            margin-left: 0 !important;
            margin-top: 15px !important;
            text-align: center;
          }

          .subscriber-images {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
