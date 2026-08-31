"use client";
import React, { useEffect } from "react";
import Link from "next/link";

export default function GlobalHiringPartners() {
  const hiringPartners = [
    { id: 1, image: "/assets/images/partners-logo/partner1.jpg", slug: "partner-1" },
    { id: 2, image: "/assets/images/partners-logo/partner2.jpg", slug: "partner-2" },
    { id: 3, image: "/assets/images/partners-logo/partner3.jpg", slug: "partner-3" },
    { id: 4, image: "/assets/images/partners-logo/partner4.jpg", slug: "partner-4" },
    { id: 5, image: "/assets/images/partners-logo/partner5.jpg", slug: "partner-5" },
    { id: 6, image: "/assets/images/partners-logo/partner6.jpg", slug: "partner-6" },
    { id: 7, image: "/assets/images/partners-logo/partner7.jpg", slug: "partner-7" },
    { id: 8, image: "/assets/images/partners-logo/partner8.jpg", slug: "partner-8" },
    { id: 9, image: "/assets/images/partners-logo/partner9.jpg", slug: "partner-9" },
    { id: 10, image: "/assets/images/partners-logo/partner10.jpg", slug: "partner-10" },
    { id: 11, image: "/assets/images/partners-logo/partner11.jpg", slug: "partner-11" },
    { id: 12, image: "/assets/images/partners-logo/partner12.jpg", slug: "partner-12" },
    { id: 13, image: "/assets/images/partners-logo/partner13.jpg", slug: "partner-13" },
  ];

  useEffect(() => {
    let swiperInstance: any = null;
    const init = () => {
      if (typeof window !== "undefined" && (window as any).Swiper) {
        swiperInstance = new (window as any).Swiper(".hiring-active .swiper", {
          slidesPerView: 6,
          spaceBetween: 30,
          loop: true,
          autoplay: { delay: 2000, disableOnInteraction: false },
          speed: 1000,
          pagination: {
            el: ".hiring-active .swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            0: { slidesPerView: 2, spaceBetween: 15 },
            576: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 25 },
            992: { slidesPerView: 6, spaceBetween: 30 },
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
    <div className="partners-seaction section-padding-02 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {/* Section Title Start */}
            <div className="section-title">
              <h2 className="section-title__title">
                Our Global Hiring Partner <mark> Network</mark>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        {/* Partners Active Start */}
        <div className="partners-active hiring-active swiper-dots-style">
          <div className="swiper">
            <div className="swiper-wrapper py-3">
              {hiringPartners.map((item) => (
                <div className="swiper-slide h-auto" key={item.id}>
                  {/* Partners Logo Start */}
                  <Link href={`/hiring-partner/${item.slug}`} className="d-block w-100">
                    <div className="partner-logo d-flex align-items-center justify-content-center h-100 p-2">
                      <div className="partner-logo__logo">
                        <img
                          src={item.image}
                          alt="Psychology Hiring Partner"
                          style={{
                            maxHeight: "65px",
                            maxWidth: "140px",
                            objectFit: "contain",
                            display: "block",
                            margin: "0 auto",
                          }}
                        />
                      </div>
                    </div>
                  </Link>
                  {/* Partners Logo End */}
                </div>
              ))}
            </div>
            <div className="swiper-pagination mt-4"></div>
          </div>
        </div>
        {/* Partners Active End */}
      </div>
    </div>
  );
}
