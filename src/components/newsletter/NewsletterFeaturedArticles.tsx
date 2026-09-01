"use client";
import React, { useEffect } from "react";

interface NewsletterItem {
  id: number;
  name: string;
  monthTitle?: string;
  image: string;
}

const NEWSLETTERS: NewsletterItem[] = [
  {
    id: 1,
    name: "Counsel India's",
    monthTitle: "February Newsletter",
    image:
      "https://prod-s3.counselindia.com/blog/Color Theory Presentation In Colorful Simple Style (1)_1741849717.jpg",
  },
  {
    id: 2,
    name: "Counsel India's",
    monthTitle: "January Newsletter",
    image:
      "https://prod-s3.counselindia.com/blog/Art Therapy for Kids. (3)_1741849646.jpg",
  },
  {
    id: 3,
    name: "Counsel India",
    monthTitle: "November Newsletter",
    image: "/assets/images/blog/blog-01.jpg",
  },
  {
    id: 4,
    name: "Counsel India's",
    monthTitle: "December Newsletter",
    image: "/assets/images/blog/blog-04.jpg",
  },
  {
    id: 5,
    name: "Counsel India's",
    monthTitle: "October Newsletter",
    image: "/assets/images/blog/blog-05.jpg",
  },
];

interface Props {
  newsletters?: NewsletterItem[];
  onDownloadClick: (item: NewsletterItem) => void;
  onSubscribeClick: () => void;
}

export default function NewsletterFeaturedArticles({
  newsletters = NEWSLETTERS,
  onDownloadClick,
  onSubscribeClick,
}: Props) {
  useEffect(() => {
    let swiperInstance: any = null;
    const initSwiper = () => {
      if (typeof window !== "undefined" && (window as any).Swiper) {
        swiperInstance = new (window as any).Swiper(".event-active .swiper", {
          slidesPerView: 3,
          spaceBetween: 20,
          loop: true,
          autoplay: { delay: 3000, disableOnInteraction: false },
          navigation: {
            nextEl: ".event-active .swiper-button-next",
            prevEl: ".event-active .swiper-button-prev",
          },
          breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          },
        });
      }
    };

    initSwiper();
    const timer = setTimeout(initSwiper, 400);

    return () => {
      clearTimeout(timer);
      if (swiperInstance?.destroy) swiperInstance.destroy(true, true);
    };
  }, []);

  return (
    <div className="event-section section-padding-01">
      <div className="container">
        <div className="row gy-10 align-items-center">
          {/* Left Column */}
          <div className="col-xl-3 col-lg-5 col-md-6 col-sm-7">
            <div
              className="section-title mb-0 pe-lg-8"
              style={{ marginBottom: "5%" }}
            >
              <h4 className="section-title__sub-title">NEWSLETTERS</h4>
              <h2 className="section-title__title-02">
                {" "}
                <mark>Featured Articles</mark>
              </h2>
              <p style={{ marginBottom: "10%" }}>
                &quot;Discover our latest featured article: an in-depth
                exploration, offering valuable insights and practical
                advice.&quot;
              </p>
            </div>
            <div className="footer-widget__form footer-widget__form-02">
              <button
                type="button"
                className="btn btn-secondary btn-hover-primary"
                onClick={onSubscribeClick}
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Column: Swiper Carousel */}
          <div className="col-xl-9">
            <div className="event-active swiper-button-style position-relative">
              <div className="swiper">
                <div className="swiper-wrapper">
                  {newsletters.map((e) => (
                    <div className="swiper-slide" key={e.id}>
                      <div
                        className="event-item"
                        style={{
                          border: "1px solid #e5e5e5",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          padding: "20px",
                          backgroundColor: "#fff",
                          borderRadius: "8px",
                          height: "100%",
                        }}
                      >
                        <div
                          className="event-item__image"
                          style={{ marginBottom: "10px" }}
                        >
                          <img
                            src={e.image}
                            alt="Blog"
                            width="370"
                            height="201"
                            style={{
                              width: "100%",
                              height: "200px",
                              objectFit: "cover",
                              borderRadius: "4px",
                            }}
                            onError={(ev) => {
                              ev.currentTarget.onerror = null;
                              ev.currentTarget.src =
                                "/assets/images/blog/skills.jpg";
                            }}
                          />
                        </div>
                        <div
                          className="blog-item-02__content"
                          style={{ flexGrow: 1 }}
                        >
                          <h3
                            className="blog-item-02__title font-size-16"
                            style={{ minHeight: "44px" }}
                          >
                            <a
                              href="javascript:void(0)"
                              onClick={() => onDownloadClick(e)}
                            >
                              {e.name} {e.monthTitle ? `${e.monthTitle}` : ""}
                            </a>
                          </h3>
                          <div
                            className="blog-item-02__button"
                            style={{ marginTop: "10px" }}
                          >
                            <button
                              type="button"
                              className="btn btn-custom d-inline-flex align-items-center gap-2"
                              onClick={() => onDownloadClick(e)}
                            >
                              <span>Download Now</span>
                              <i className="fal fa-long-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="swiper-button-next d-none d-md-flex align-items-center justify-content-center">
                <i className="fal fa-angle-right"></i>
              </div>
              <div className="swiper-button-prev d-none d-md-flex align-items-center justify-content-center">
                <i className="fal fa-angle-left"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .btn-custom {
          background-color: #0da74b;
          border-color: rgb(2, 61, 2);
          color: white;
          padding: 8px 18px;
          border-radius: 4px;
          font-weight: 500;
          cursor: pointer;
        }

        .btn-custom:hover,
        .btn-custom:focus {
          background-color: darkgreen;
          border-color: darkgreen;
          color: white;
        }

        .event-item {
          display: flex;
          flex-direction: column;
        }

        .event-item__image {
          margin-bottom: 10px;
        }

        .blog-item-02__content {
          flex-grow: 1;
        }

        .blog-item-02__button {
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}
