"use client";
import React, { useEffect } from "react";

export default function StatsCounter() {
  const stats = [
    {
      icon: "/assets/images/3.svg",
      count: "10000",
      text: "Certified Counsellors Produced",
    },
    {
      icon: "/assets/images/7.svg",
      count: "200000",
      text: "Happy Learners & Still Counting",
    },
    {
      icon: "/assets/images/2.svg",
      count: "22",
      text: "Countries where our participants come from",
    },
    {
      icon: "/assets/images/6.svg",
      count: "5000",
      text: "Network of Psychologists & Counsellors",
    },
    {
      icon: "/assets/images/1.svg",
      count: "20",
      text: "Awards & Accreditations",
    },
  ];

  useEffect(() => {
    let swiperInstance: any = null;
    const init = () => {
      if (typeof window !== "undefined" && (window as any).Swiper) {
        swiperInstance = new (window as any).Swiper(".banner-active .swiper", {
          slidesPerView: 5,
          spaceBetween: 30,
          speed: 1000,
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          breakpoints: {
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 5 },
          },
        });
      }
    };
    init();
    const t = setTimeout(init, 400);
    return () => {
      clearTimeout(t);
      if (swiperInstance?.destroy) swiperInstance.destroy(true, true);
    };
  }, []);

  return (
    <div className="why-choose-section section-padding-01 bg-white">
      <div className="container">
        {/* Counter Start */}
        <div className="counter">
          <div className="row banner-active">
            <div className="swiper">
              <div className="swiper-wrapper py-3">
                {stats.map((stat, idx) => (
                  <div className="swiper-slide" key={idx}>
                    {/* Counter Item Start */}
                    <div className="counter-item-03 text-center">
                      <div
                        className="counter-item-03__icon mb-3 d-flex align-items-center justify-content-center"
                        style={{ height: "70px" }}
                      >
                        <img
                          src={stat.icon}
                          alt="Psychology Statistics"
                          style={{
                            maxHeight: "70px",
                            maxWidth: "80px",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                      <div className="counter-item-03__content">
                        <span
                          className="counter-item-03__count fw-bold d-block"
                          style={{
                            color: "#07a64b",
                            fontSize: "34px",
                            lineHeight: "1.2",
                          }}
                        >
                          <span className="count">{stat.count}</span>+
                        </span>
                        <p
                          className="counter-item-03__text mb-0"
                          style={{
                            color: "rgba(3, 31, 66, 0.7)",
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: "1.6",
                            maxWidth: "200px",
                            margin: "10px auto 0",
                          }}
                        >
                          {stat.text}
                        </p>
                      </div>
                    </div>
                    {/* Counter Item End */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Counter End */}
      </div>
    </div>
  );
}
