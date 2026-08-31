"use client";
import React, { useEffect, useRef } from "react";

export default function MembershipPrivileges() {
  const swiperContainerRef = useRef<HTMLDivElement | null>(null);

  const privilegeSlides = [
    "https://prod-s3.counselindia.com/mastergalaxyimages/test11_1726041030.png",
    "https://prod-s3.counselindia.com/mastergalaxyimages/test3232_1726041040.png",
    "https://prod-s3.counselindia.com/mastergalaxyimages/test12323_1726041049.png",
    "https://prod-s3.counselindia.com/mastergalaxyimages/test7824_1726041060.png",
    "https://prod-s3.counselindia.com/mastergalaxyimages/test567_1726041072.png",
    "https://prod-s3.counselindia.com/mastergalaxyimages/test2112_1726041083.png",
    // Duplicated for seamless loop mode
    "https://prod-s3.counselindia.com/mastergalaxyimages/test11_1726041030.png",
    "https://prod-s3.counselindia.com/mastergalaxyimages/test3232_1726041040.png",
    "https://prod-s3.counselindia.com/mastergalaxyimages/test12323_1726041049.png",
    "https://prod-s3.counselindia.com/mastergalaxyimages/test7824_1726041060.png",
    "https://prod-s3.counselindia.com/mastergalaxyimages/test567_1726041072.png",
    "https://prod-s3.counselindia.com/mastergalaxyimages/test2112_1726041083.png",
  ];

  useEffect(() => {
    let swiperInstance: any = null;

    const initSwiper = () => {
      if (typeof window !== "undefined" && (window as any).Swiper && swiperContainerRef.current) {
        try {
          swiperInstance = new (window as any).Swiper(swiperContainerRef.current, {
            slidesPerView: 3,
            spaceBetween: 24,
            loop: true,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".privileges-pagination",
              clickable: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1.2,
                spaceBetween: 15,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            },
          });
        } catch (err) {
          console.error("Swiper init error:", err);
        }
      }
    };

    initSwiper();
    const timer = setTimeout(initSwiper, 400);

    return () => {
      clearTimeout(timer);
      if (swiperInstance && swiperInstance.destroy) {
        swiperInstance.destroy(true, true);
      }
    };
  }, []);

  return (
    <>
      <div className="testimonial-section galaxy section-padding-01" style={{ padding: "60px 0 50px", backgroundColor: "#f8faf9" }}>
        <div className="container custom-container">
          <div className="section-title text-center mb-5">
            <h2 className="section-title__title-03" style={{ fontSize: "42px", fontWeight: 700, color: "#1a2638" }}>
              Glimpse Of Our Membership Privileges
            </h2>
          </div>

          <div className="testimonial-active-02 swiper-dots-style">
            <div className="swiper" ref={swiperContainerRef}>
              <div className="swiper-wrapper">
                {privilegeSlides.map((imgSrc, idx) => (
                  <div className="swiper-slide" key={idx}>
                    <div className="privilege-slide-item">
                      <img
                        src={imgSrc}
                        alt="galaxy images"
                        className="img-fluid rounded"
                        style={{
                          width: "100%",
                          height: "auto",
                          maxHeight: "260px",
                          objectFit: "cover",
                          border: "2px solid #07a64b",
                          borderRadius: "6px",
                          boxShadow: "0 4px 15px rgba(7, 166, 75, 0.12)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination privileges-pagination mt-4"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .privilege-slide-item img {
          transition: transform 0.3s ease;
        }

        .privilege-slide-item:hover img {
          transform: translateY(-3px);
        }
      `}</style>
    </>
  );
}
