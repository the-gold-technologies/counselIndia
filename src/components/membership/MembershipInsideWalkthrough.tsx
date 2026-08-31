"use client";
import React, { useRef, useEffect } from "react";

export default function MembershipInsideWalkthrough() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Full-width Walkthrough Video */}
      <div className="test-walk">
        <div className="video-container2" id="videoContainer2">
          <video
            ref={videoRef}
            id="videoElement2"
            controls
            playsInline
            preload="none"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          >
            <source src="/assets/videos/walkthroughc11.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Inside The Membership Section with Graph */}
      <div className="section-2nd">
        <div className="container custom-container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center">
                <h2
                  className="section-title__title-03"
                  style={{ marginTop: "5%", marginBottom: "3%", fontSize: "38px", color: "#1a2638", fontWeight: 700 }}
                >
                  Inside The Membership
                </h2>

                <img
                  src="https://prod-s3.counselindia.com/mastergalaxyimages/Professional%205%20Steps%20Women%20Career%20Tips%20Graph%20(1500%20x%20700%20px)-2_1725972064.png"
                  alt="Inside The Membership 5 Steps"
                  className="img-fluid"
                  loading="lazy"
                  style={{ width: "100%", height: "auto" }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .test-walk {
          margin: 0;
          width: 100%;
          background-color: #000000;
        }

        .video-container2 {
          max-width: 1600px;
          width: 100%;
          height: 700px;
          margin: 0 auto;
          text-align: center;
          background-color: #000000;
        }

        @media (max-width: 992px) {
          .video-container2 {
            height: 450px;
          }
        }

        @media (max-width: 768px) {
          .video-container2 {
            height: 250px;
          }
        }
      `}</style>
    </>
  );
}
