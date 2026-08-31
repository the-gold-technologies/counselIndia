"use client";
import React, { useRef, useEffect } from "react";

export default function MembershipVideoCheers() {
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
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="test-women">
        <div className="container" style={{ paddingTop: "5%", paddingBottom: "5%" }}>
          <div className="section-title text-center mb-4">
            <h2 className="section-title__title-03 mark-title">
              Cheers from Our <mark>Member</mark>
            </h2>
          </div>

          <div className="video-container" id="videoContainer">
            <video
              ref={videoRef}
              id="videoElement"
              controls
              playsInline
              preload="none"
              poster="https://prod-s3.counselindia.com/mastergalaxyimages/WhatsApp%20Image%202024-09-11%20at%2015.29.02_1726049092.jpeg"
              style={{
                width: "100%",
                maxWidth: "700px",
                height: "auto",
                maxHeight: "450px",
                borderRadius: "12px",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                objectFit: "cover",
              }}
            >
              <source src="/assets/videos/mentestt.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <style jsx>{`
        .test-women {
          background-color: #e6f0e2;
          background-image: url("https://prod-s3.counselindia.com/mastergalaxyimages/Green%20Modern%20Digital%20Marketing%20Agency%20Banner%20(1500%20x%20700%20px)-3_1726032239.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .video-container {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }
      `}</style>
    </>
  );
}
