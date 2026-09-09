"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Accreditations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const accreditationCards = [
    {
      id: 1,
      image: "/assets/images/counsel2.jpg",
      alt: "IAOTH Accredited Training Provider",
    },
    {
      id: 2,
      image: "/assets/images/counsel5.jpg",
      alt: "Counsel India Academic Council",
    },
    {
      id: 3,
      image: "/assets/images/counselindia11.jpg",
      alt: "K.R. Mangalam University",
    },
    {
      id: 4,
      image: "/assets/images/counsel1.jpg",
      alt: "MEPSC & Skill India Accreditation",
    },
    {
      id: 5,
      image: "/assets/images/counsel3.jpg",
      alt: "Medhavi Skills University",
    },
  ];

  const slides = [...accreditationCards, ...accreditationCards];

  useEffect(() => {
    let pollTimer: any = null;

    const initSwiper = () => {
      if (typeof window !== "undefined" && (window as any).Swiper) {
        if (swiperRef.current) {
          try {
            swiperRef.current.destroy(true, true);
          } catch (e) {}
        }

        const instance = new (window as any).Swiper(".program-active .swiper", {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".program-active .swiper-pagination",
            clickable: true,
          },
          speed: 800,
          breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
          on: {
            slideChange: function (this: any) {
              setActiveIndex(this.realIndex % accreditationCards.length);
            },
          },
        });
        swiperRef.current = instance;
        return true;
      }
      return false;
    };

    if (!initSwiper()) {
      let attempts = 0;
      pollTimer = setInterval(() => {
        attempts++;
        if (initSwiper() || attempts > 25) {
          clearInterval(pollTimer);
        }
      }, 150);
    }

    return () => {
      if (pollTimer) clearInterval(pollTimer);
      if (swiperRef.current && swiperRef.current.destroy) {
        try {
          swiperRef.current.destroy(true, true);
        } catch (e) {}
      }
    };
  }, [accreditationCards.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      if (swiperRef.current.slideToLoop) {
        swiperRef.current.slideToLoop(index);
      } else if (swiperRef.current.slideTo) {
        swiperRef.current.slideTo(index);
      }
    }
  };

  return (
    <div className="blog-section section-padding-01 bg-white">
      <div className="container custom-container">
        <div className="row gy-10 flex-row-reverse">
          <div className="col-lg-12">
            <div className="section-title text-center mb-5">
              <h2 className="section-title__title-03">
                <mark>Accreditations and Associations by World’s Top and Best</mark>
              </h2>
            </div>

            <div
              className="program-active swiper-dots-style"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="swiper">
                <div className="swiper-wrapper py-3">
                  {slides.map((card, idx) => (
                    <div className="swiper-slide" key={`${card.id}-${idx}`}>
                      <div className="partner-logo w-100">
                        <div className="partner-logo__logo w-100">
                          <img
                            src={card.image}
                            alt={card.alt}
                            style={{
                              width: "100%",
                              height: "auto",
                              display: "block",
                              borderRadius: "8px",
                              boxShadow: "0 6px 25px rgba(0, 0, 0, 0.08)",
                              transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Swiper native pagination element */}
                <div className="swiper-pagination"></div>

                {/* Fallback & Interactive dot pointers matching exact markup */}
                <div className="custom-pagination-dots d-flex justify-content-center align-items-center mt-4">
                  {accreditationCards.map((_, idx) => (
                    <span
                      key={idx}
                      className={`custom-dot-bullet ${activeIndex === idx ? "active" : ""}`}
                      onClick={() => handleDotClick(idx)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Go to slide ${idx + 1}`}
                      style={{
                        display: "inline-block",
                        width: activeIndex === idx ? "26px" : "10px",
                        height: "10px",
                        borderRadius: activeIndex === idx ? "5px" : "50%",
                        backgroundColor: activeIndex === idx ? "#07a64b" : "#b0b0b0",
                        margin: "0 5px",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.program-active .swiper-pagination) {
          display: none !important;
        }
        .custom-pagination-dots {
          position: relative;
          z-index: 5;
        }
        .custom-dot-bullet:hover {
          background-color: #07a64b !important;
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}
