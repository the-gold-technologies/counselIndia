"use client";
import React, { useEffect } from "react";

export default function CorporateClients() {
  const clientLogos = [
    { id: 1, image: "/assets/images/partners-logo/client-logo-01.jpg", alt: "Manav Rachna" },
    { id: 2, image: "/assets/images/partners-logo/client-logo-02.jpg", alt: "Zakir Husain Delhi College" },
    { id: 3, image: "/assets/images/partners-logo/client-logo-03.jpg", alt: "HDFC Bank" },
    { id: 4, image: "/assets/images/partners-logo/client-logo-04.jpg", alt: "American Express" },
    { id: 5, image: "/assets/images/partners-logo/client-logo-05.jpg", alt: "Indiabulls" },
    { id: 6, image: "/assets/images/partners-logo/client-logo-06.jpg", alt: "HDFC Credila" },
    { id: 7, image: "/assets/images/partners-logo/client-logo-111.jpg", alt: "JBM Group" },
    { id: 8, image: "/assets/images/partners-logo/client-logo-121.jpg", alt: "Corporate Partner 8" },
    { id: 9, image: "/assets/images/partners-logo/client-logo-131.jpg", alt: "Corporate Partner 9" },
  ];

  useEffect(() => {
    let swiperInstance: any = null;
    const init = () => {
      if (typeof window !== "undefined" && (window as any).Swiper) {
        swiperInstance = new (window as any).Swiper(".corporate-active .swiper", {
          slidesPerView: 7,
          spaceBetween: 20,
          loop: true,
          autoplay: { delay: 2000, disableOnInteraction: false },
          speed: 1000,
          breakpoints: {
            0: { slidesPerView: 2, spaceBetween: 12 },
            576: { slidesPerView: 3, spaceBetween: 15 },
            768: { slidesPerView: 4, spaceBetween: 15 },
            992: { slidesPerView: 5, spaceBetween: 18 },
            1200: { slidesPerView: 7, spaceBetween: 20 },
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
      <div className="container custom-container">
        <div className="row">
          <div className="col-sm-12">
            {/* Section Title Start */}
            <div className="section-title mb-4">
              <h2 className="section-title__title">
                Our <mark>Valued Corporate</mark> Clients
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        {/* Partners Active Start */}
        <div className="partners-active corporate-active">
          <div className="swiper">
            <div className="swiper-wrapper py-2">
              {clientLogos.map((client) => (
                <div className="swiper-slide" key={client.id}>
                  {/* Partners Logo Box */}
                  <div
                    className="bg-white d-flex align-items-center justify-content-center w-100"
                    style={{
                      height: "115px",
                      borderRadius: "8px",
                      border: "1px solid #edf0f4",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.04)",
                      padding: "15px",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    <img
                      src={client.image}
                      alt={client.alt}
                      style={{
                        maxHeight: "55px",
                        maxWidth: "88%",
                        objectFit: "contain",
                        display: "block",
                        margin: "0 auto",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Partners Active End */}
      </div>
    </div>
  );
}
