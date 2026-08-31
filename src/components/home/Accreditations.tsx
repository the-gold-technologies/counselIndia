"use client";
import React, { useEffect } from "react";

export default function Accreditations() {
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

  useEffect(() => {
    let swiperInstance: any = null;
    const init = () => {
      if (typeof window !== "undefined" && (window as any).Swiper) {
        swiperInstance = new (window as any).Swiper(".program-active .swiper", {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          speed: 1000,
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
        });
      }
    };

    init();
    const timer = setTimeout(init, 400);

    return () => {
      clearTimeout(timer);
      if (swiperInstance && swiperInstance.destroy) {
        swiperInstance.destroy(true, true);
      }
    };
  }, []);

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

            <div className="program-active swiper-dots-style">
              <div className="swiper">
                <div className="swiper-wrapper py-3">
                  {accreditationCards.map((card, idx) => (
                    <div className="swiper-slide" key={idx}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
