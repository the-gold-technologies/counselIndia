"use client";
import React, { useState } from "react";

export default function StatsBannerAndVideo() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videoItems = [
    {
      id: 1,
      image: "https://prod-s3.counselindia.com/mastergalaxyimages/12345678_1728475516.png",
      videoUrl: "https://www.youtube.com/embed/sR6ZHd2nar8?autoplay=1&si=8kPi9XCt0ToNh-MO",
    },
    {
      id: 2,
      image: "https://prod-s3.counselindia.com/mastergalaxyimages/utyfv86fugytf_1728475536.png",
      videoUrl: "https://www.youtube.com/embed/h3RPQVRnux4?autoplay=1&si=1w8gouQhY6A8wiI5",
    },
    {
      id: 3,
      image: "https://prod-s3.counselindia.com/mastergalaxyimages/8g7g86gf_1728475548.png",
      videoUrl: "https://www.youtube.com/embed/wTgBtaYRhDE?autoplay=1&si=YlL2rHLeazFeOsYl",
    },
    {
      id: 4,
      image: "https://prod-s3.counselindia.com/mastergalaxyimages/uf65vr7_1728475585.png",
      videoUrl: "https://www.youtube.com/embed/Xd2Cj8T0YRo?autoplay=1&si=UbZrihxA5S1CpIpo",
    },
    {
      id: 5,
      image: "https://prod-s3.counselindia.com/mastergalaxyimages/86o7tfytcv_1728475571.png",
      videoUrl: "https://www.youtube.com/embed/JO-3s5Wud1o?autoplay=1&si=cte3_yKnRGZrF0FF",
    },
    {
      id: 6,
      image: "https://prod-s3.counselindia.com/mastergalaxyimages/86r5v7t_1728475596.png",
      videoUrl: "https://www.youtube.com/embed/92tlg6pzPZo?autoplay=1&si=RZzr0V4tGhKUBmUt",
    },
    {
      id: 7,
      image: "https://prod-s3.counselindia.com/mastergalaxyimages/7f76f6_1728475558.png",
      videoUrl: "https://www.youtube.com/embed/gMmBOis8Alw?autoplay=1&si=4RcBWDEH_koitT0T",
    },
    {
      id: 8,
      image: "https://prod-s3.counselindia.com/mastergalaxyimages/987654_1728475526.png",
      videoUrl: "https://www.youtube.com/embed/gAaWN_CoOt4?autoplay=1&si=Rj8a6t1d_lOr0FDl",
    },
  ];

  return (
    <>
      {/* stats starts */}
      <div className="stats-section">
        <a
          className="link1"
          href="https://in.linkedin.com/company/counsel-india"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        ></a>
        <a
          className="link2"
          href="https://www.youtube.com/watch?v=UJ1gDnbgozI&list=PLHQpk8l3QxXAbt5asTdhCzWTPElfevZqB"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube"
        ></a>
        <a
          className="link3"
          href="https://g.page/r/CeF8AKdxnSRkEBM/review"
          target="_blank"
          rel="noreferrer"
          aria-label="Google Review"
        ></a>
      </div>

      <style jsx>{`
        .stats-section {
          position: relative;
          width: 100%;
          height: 248px;
          margin-top: 40px;
          background-image: url("https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/images/stats.svg");
          background-size: cover;
          background-position: center;
        }

        .stats-section a {
          position: absolute;
          display: block;
          width: 33.33%;
          height: 100%;
          top: 0;
          cursor: pointer;
        }

        .stats-section .link1 {
          left: 0;
        }

        .stats-section .link2 {
          left: 33.33%;
        }

        .stats-section .link3 {
          left: 66.66%;
        }

        @media screen and (max-width: 600px) {
          .stats-section {
            max-width: 600px;
            width: 100%;
            background-size: contain;
            height: 80px;
          }
        }

        .videoTestimonials.new_video_wrp .container-fluid {
          padding: 20px;
        }

        .videoTestimonials.new_video_wrp .row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .videoTestimonials.new_video_wrp .videowrp {
          margin-bottom: 20px;
          position: relative;
          cursor: pointer;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        .videoTestimonials.new_video_wrp .videowrp:hover {
          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.7);
          transform: translateY(-4px);
        }

        .videoTestimonials.new_video_wrp .videowrp img {
          width: 100%;
          display: block;
        }

        .videoTestimonials.new_video_wrp .video_icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.6);
          border-radius: 50%;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .videoTestimonials.new_video_wrp .video_icon img {
          width: 40px;
          height: 40px;
        }

        .videoTestimonials.new_video_wrp .col-lg-3 {
          width: 23.5%;
          margin-bottom: 20px;
        }

        @media (max-width: 1200px) {
          .videoTestimonials.new_video_wrp .col-lg-3 {
            width: 48%;
          }
        }

        @media (max-width: 576px) {
          .videoTestimonials.new_video_wrp .col-lg-3 {
            width: 100%;
          }
        }
      `}</style>

      {/* video section start */}
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="section-title">
          <h2 className="section-title__title">
            <mark>Inspiring </mark> Success Stories
          </h2>
        </div>

        <div className="videoTestimonials new_video_wrp">
          <div className="container-fluid px-0">
            <div className="row">
              {videoItems.map((item) => (
                <div className="col-lg-3" key={item.id}>
                  <div
                    className="videowrp"
                    onClick={() => setActiveVideo(item.videoUrl)}
                  >
                    <img
                      loading="lazy"
                      alt="Psychology Success Stories"
                      src={item.image}
                    />
                    <div className="video_icon">
                      <img
                        loading="lazy"
                        src="https://lawsikho.com/uploads/media-library/play2-1701142192.png"
                        alt="Play Video"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* video section end */}

      {/* Video Modal */}
      {activeVideo && (
        <div
          style={{
            position: "fixed",
            zIndex: 9999,
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setActiveVideo(null)}
        >
          <div
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "800px",
              height: "480px",
              backgroundColor: "black",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                color: "white",
                fontSize: "28px",
                fontWeight: "bold",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                zIndex: 10,
              }}
              aria-label="Close modal"
            >
              &times;
            </button>
            <iframe
              src={activeVideo}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
