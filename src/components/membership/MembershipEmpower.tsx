"use client";
import React from "react";

export default function MembershipEmpower() {
  return (
    <>
      <div className="container222out">
        <div className="container222s" style={{ margin: "3%" }}>
          <h2
            className="text-center"
            style={{ fontSize: "40px", paddingTop: "6%" }}
          >
            We empower you through...
          </h2>
          <div className="container22s">
            {/* Column 1 */}
            <div className="items2">
              <div className="items-body">
                <div className="items-body-content">
                  <span>
                    <h6 className="mt-2">
                      Bounce back like a boss so you can handle life&apos;s
                      curveballs with grace.
                    </h6>
                  </span>
                  <i className="fa fa-angle-right"></i>
                </div>
                <div className="items-body-content">
                  <span>
                    <h6 className="mt-2">
                      Discover stress-busting hacks that&apos;ll help you keep
                      your cool and turn even the most chaotic days into Zen
                      moments.
                    </h6>
                  </span>
                  <i className="fa fa-angle-right"></i>
                </div>
                <div className="items-body-content">
                  <span>
                    <h6 className="mt-2">
                      Get to know yourself on a whole new level, so you can
                      truly ace that inner confidence and self-love.
                    </h6>
                  </span>
                  <i className="fa fa-angle-right"></i>
                </div>
                <div className="items-body-content">
                  <span>
                    <h6 className="mt-2">
                      Learn to live in the moment and say goodbye to all
                      distractions.
                    </h6>
                  </span>
                  <i className="fa fa-angle-right"></i>
                </div>
                <div className="items-body-content">
                  <span>
                    <h6 className="mt-2">
                      Get a relationship-glow-up with people skills and
                      communication game
                    </h6>
                  </span>
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="items2">
              <div className="items-body">
                <div className="items-body-content">
                  <span>
                    <h6 className="mt-2">
                      Find that perfect balance between work and play, so you
                      can enjoy both without feeling like you&apos;re running on
                      empty.
                    </h6>
                  </span>
                  <i className="fa fa-angle-right"></i>
                </div>
                <div className="items-body-content">
                  <span>
                    <h6 className="mt-2">
                      Sharpen your thinking and decision-making like a pro with
                      tips that&apos;ll clear the mental fog and keep you sharp.
                    </h6>
                  </span>
                  <i className="fa fa-angle-right"></i>
                </div>
                <div className="items-body-content">
                  <span>
                    <h6 className="mt-2">
                      Begin a journey of self-improvement and growth, turning
                      every challenge into a chance to shine and thrive.
                    </h6>
                  </span>
                  <i className="fa fa-angle-right"></i>
                </div>
                <div className="items-body-content">
                  <span>
                    <h6 className="mt-2">
                      Set and smash your goals like a pro, turning your dreams
                      into reality with style and confidence.
                    </h6>
                  </span>
                  <i className="fa fa-angle-right"></i>
                </div>
                <div className="items-body-content">
                  <span>
                    <h6 className="mt-2">
                      Pick up practical, real-world tools to tackle life&apos;s
                      hurdles without breaking a sweat—because you&apos;ve got
                      this!
                    </h6>
                  </span>
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>

          <img
            src="https://prod-s3.counselindia.com/mastergalaxyimages/Untitled%20design-9_1725874373.png"
            alt="Community illustration"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>
      <style>{`
        .container222out {
          background: linear-gradient(to bottom, rgba(112, 136, 102, 0.8), rgba(0, 128, 0, 0) 100%);
        }
        .container22s {
          margin-left: 5%;
          margin-right: 5%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 10px;
          place-items: center;
        }
        .items2 {
          background: #ffffff00;
        }
        .items-head hr {
          width: 20%;
          margin: 0px 30px;
          border: 1px solid #333;
        }
        .items-body {
          padding: 10px;
          margin: 10px;
          display: grid;
          grid-gap: 10px;
        }
        .items-body-content {
          padding: 10px;
          padding-left: 30px;
          display: grid;
          grid-template-columns: auto 1fr;
          font-size: 13px;
          grid-gap: 10px;
          border: 1px solid transparent;
          cursor: pointer;
          position: relative;
        }
        .items-body-content::before {
          content: '\\2605';
          color: gold;
          font-size: 16px;
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
        }
        .items-body-content:hover {
          border-radius: 15px;
          border: 1px solid #333;
        }
        .items-body-content i {
          align-self: center;
          font-size: 15px;
          color: #333;
          font-weight: bold;
          animation: icon 1.5s infinite forwards;
        }
        @keyframes icon {
          0%, 100% { transform: translate(0px); }
          50%       { transform: translate(3px); }
        }
      `}</style>
    </>
  );
}
