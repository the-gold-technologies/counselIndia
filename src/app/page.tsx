"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting && isPlaying) {
              videoRef.current.play().catch(() => {});
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [isPlaying]);

  useEffect(() => {
    // Initialize Swiper instances safely once the DOM is ready
    if (typeof window !== "undefined" && (window as any).Swiper) {
      new (window as any).Swiper(".program-active .swiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        autoplay: { delay: 1500, disableOnInteraction: false },
        breakpoints: {
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 5 },
          992: { slidesPerView: 5 },
          1200: { slidesPerView: 5 }
        }
      });

      new (window as any).Swiper(".banner-active .swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 1000,
        loop: true,
        autoplay: { delay: 2000 },
        breakpoints: {
          0: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          992: { slidesPerView: 5 }
        }
      });
    }
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <main>
      <div className="slider-section pt-0 pb-0">
        <div className="slider-wrapper scene">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="slider-widget">
                  <div className="slider-caption" style={{ marginBottom: "7%" }}>
                    <h1 className="slider-caption__main-title">
                      India&apos;s Best <mark>Online Psychology</mark> Courses
                    </h1>
                    <h3 className="slider-caption__sub-title">
                      Gain a deeper understanding of human behaviour
                    </h3>
                    <p>
                      Be part of a growing community of 200,000+ learners &amp; skilled counsellors from 22+ countries.
                    </p>
                  </div>
                  <Link href="/courses" className="btn btn-secondary btn-hover-primary course-btn-hero1">
                    Explore Our Courses
                  </Link>
                  <Link href="/eligibility-test" style={{ marginLeft: "3%" }} className="btn btn-secondary btn-hover-primary course-btn-hero2">
                    Check Your Eligibility
                  </Link>
                  <div className="slider-search mt-4">
                    <div className="download-content-02__btn">
                      <a href="#" className="ios_img_but mr-2">
                        <img src="/assets/images/ios.png" alt="Psychology App iOS" width="170" height="52" />
                      </a>
                      <a href="https://play.google.com/store/apps/details?id=co.alicia.qcmiv&pli=1" target="_blank" rel="noreferrer">
                        <img src="/assets/images/android.png" alt="Psychology App Android" width="170" height="52" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="video-container2" id="videoContainer2" style={{ position: 'relative', maxWidth: '100%', height: 'auto', margin: '5% auto', overflow: 'hidden', border: '5px solid rgba(255, 255, 255, 0.8)', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)' }}>
                  {!isPlaying && (
                    <>
                      <img
                        id="coverImage2"
                        src="https://prod-s3.counselindia.com/mastergalaxyimages/WhatsApp%20Image%202024-09-30%20at%2010.35.24_1727673131.jpeg"
                        alt="Psychology mentor Image"
                        className="cover-image"
                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '15px' }}
                      />
                      <button
                        id="playButton2"
                        className="play-button"
                        onClick={handlePlayClick}
                        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'red', color: 'white', border: 'none', borderRadius: '50%', fontSize: '30px', width: '60px', height: '60px', cursor: 'pointer', zIndex: 10, boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)' }}
                      >
                        ▶
                      </button>
                    </>
                  )}
                  <video
                    id="videoElement2"
                    ref={videoRef}
                    controls
                    style={{ width: '100%', height: '100%', display: isPlaying ? 'block' : 'none', borderRadius: '15px' }}
                  >
                    <source src="/assets/videos/sunnyci.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section bg-color-primary">
        <div className="container">
          <div className="row g-6">
            <div className="col-lg-3 col-sm-6" style={{ marginRight: "10%" }}>
              <div className="features-item">
                <div className="features-item__icon text-white">
                  <i className="fas fa-certificate fa-3x" style={{ color: "white" }}></i>
                </div>
                <div className="features-item__caption">
                  <h3 className="features-item__title text-white">Specialized Courses &amp; Diplomas</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6" style={{ marginRight: "10%" }}>
              <div className="features-item">
                <div className="features-item__icon text-white">
                  <i className="fas fa-user-md fa-3x" style={{ color: "white" }}></i>
                </div>
                <div className="features-item__caption">
                  <h3 className="features-item__title text-white">Personal<br />Counselling</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="features-item">
                <div className="features-item__icon text-white">
                  <i className="fas fa-handshake fa-3x" style={{ color: "white" }}></i>
                </div>
                <div className="features-item__caption">
                  <h3 className="features-item__title text-white">Hiring Partners Network</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section section-padding-02 scene">
        <div className="container">
          <div className="about-wrapper scene">
            <div className="about-main-content">
              <div className="row align-items-center gy-10">
                <div className="col-md-12">
                  <div className="about-content">
                    <div className="section-title mb-2">
                      <h3 className="section-title__title-02"><span>Learn from the Best</span></h3>
                      <h2 className="section-title__title-03"><mark>Transform Lives through Expert Learning</mark></h2>
                    </div>
                    <p className="mb-2">
                      India&apos;s first <span className="fw-bold">Practical Psychology Learning Platform</span> for counsellors and psychologists to connect, learn, grow, and explore lifelong opportunities in psychology.
                    </p>
                    <p>
                      We simplify learning psychology and emphasize practical application, helping you gain tangible skills. Our classes, led by experts, blend psychology&apos;s academic traditions with modern scientific applications, allowing you to specialize in various concentrations.<br />Some of our popular courses include:
                    </p>
                    <div className="row pt-4">
                      <div className="col-md-6">
                        <ul className="tutor-course-segment__list-style-03 font-size-16">
                          <li>General Psychology</li>
                          <li>Sports Psychology</li>
                          <li>Educational Psychology</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="tutor-course-segment__list-style-03 font-size-16">
                          <li>Addictions and Relationships</li>
                          <li>Child Psychology</li>
                          <li>Industrial/Organizational Psychology</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog/Accreditation Section */}
      <div className="blog-section section-padding-01">
        <div className="container custom-container">
          <div className="row gy-10 flex-row-reverse">
            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="section-title__title-03">
                  <mark>Accreditations and Associations by World’s Top and Best</mark>
                </h2>
              </div>
              <div className="program-active swiper-dots-style">
                <div className="swiper">
                  <div className="swiper-wrapper" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div className="swiper-slide" style={{ width: 'auto' }}>
                      <div className="partner-logo">
                        <div className="partner-logo__logo">
                          <img src="/assets/images/counsel1.jpg" alt="Psychology Accreditation" />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" style={{ width: 'auto' }}>
                      <div className="partner-logo">
                        <div className="partner-logo__logo">
                          <img src="/assets/images/counsel2.jpg" alt="Psychology Accreditation" />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" style={{ width: 'auto' }}>
                      <div className="partner-logo">
                        <div className="partner-logo__logo">
                          <img src="/assets/images/counsel3.jpg" alt="Psychology Accreditation" />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" style={{ width: 'auto' }}>
                      <div className="partner-logo">
                        <div className="partner-logo__logo">
                          <img src="/assets/images/counsel5.jpg" alt="Psychology Accreditation" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="call-to-action section-padding-02">
        <div className="container">
          <div className="call-to-action__wrapper">
            <div className="call-to-action__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <div className="call-to-action__content">
              <div className="call-to-action__shape-01"></div>
              <div className="call-to-action__shape-02"></div>
              <div className="call-to-action__shape-03"></div>
              <div className="call-to-action__caption">
                <h3 className="call-to-action__main-title">Wondering if Psychology is the Right Fit for You? </h3>
              </div>
              <div className="call-to-action__btn">
                <Link href="/eligibility-test" className="btn btn-secondary btn-hover-primary">
                  Check Your Eligibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Start (Counters) */}
      <div className="why-choose-section section-padding-01">
        <div className="container">
          <div className="counter">
            <div className="row banner-active">
              <div className="swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="counter-item-03 text-center">
                      <div className="counter-item-03__icon mb-3">
                        <img src="/assets/images/3.svg" alt="Psychology Statistics" />
                      </div>
                      <div className="counter-item-03__content">
                        <span className="counter-item-03__count"><span className="count">10000</span>+</span>
                        <p className="counter-item-03__text">Certified Counsellors Produced</p>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="counter-item-03 text-center">
                      <div className="counter-item-03__icon mb-3">
                        <img src="/assets/images/7.svg" alt="Psychology Statistics" />
                      </div>
                      <div className="counter-item-03__content">
                        <span className="counter-item-03__count"><span className="count">200000</span>+</span>
                        <p className="counter-item-03__text">Happy Learners &amp; Still Counting</p>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="counter-item-03 text-center">
                      <div className="counter-item-03__icon mb-3">
                        <img src="/assets/images/2.svg" alt="Psychology Statistics" />
                      </div>
                      <div className="counter-item-03__content">
                        <span className="counter-item-03__count"><span className="count">22</span>+</span>
                        <p className="counter-item-03__text">Countries</p>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="counter-item-03 text-center">
                      <div className="counter-item-03__icon mb-3">
                        <img src="/assets/images/6.svg" alt="Psychology Statistics" />
                      </div>
                      <div className="counter-item-03__content">
                        <span className="counter-item-03__count"><span className="count">5000</span>+</span>
                        <p className="counter-item-03__text">Network of Psychologists &amp; Counsellors</p>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="counter-item-03 text-center">
                      <div className="counter-item-03__icon mb-3">
                        <img src="/assets/images/1.svg" alt="Psychology Statistics" />
                      </div>
                      <div className="counter-item-03__content">
                        <span className="counter-item-03__count"><span className="count">20</span>+</span>
                        <p className="counter-item-03__text">Awards &amp; Accreditations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mental Health Tests */}
      <div className="section-title container mt-5">
        <h2 className="section-title__title-03"><mark>Free Mental Health Tests</mark></h2>
      </div>
      <div className="content-text">
        <div className="blog-section section-padding-01 pt-4">
          <div className="container custom-container">
            <div className="row gy-10">
              <div className="col-lg-12">
                <div className="row gy-10">
                  <div className="col-xl-4 col-md-6">
                    <div className="blog-item-02">
                      <div className="blog-item-02__image">
                        <Link href="#"><img src="https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/mastergalaxyimages/second-cover_converted.webp" alt="Blog" width="370" height="201" /></Link>
                      </div>
                      <div className="blog-item-02__content">
                        <h3 className="blog-item-02__title text-center"><Link href="#">Emotional Well-Being Test</Link></h3>
                        <a className="blog-item-02__more btn btn-light btn-hover-white">Explore Now<i className="fal fa-long-arrow-right"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="blog-item-02">
                      <div className="blog-item-02__image">
                        <Link href="#"><img src="https://prod-s3.counselindia.com/mastergalaxyimages/cover22_1730113051.png" alt="Blog" width="370" height="201" /></Link>
                      </div>
                      <div className="blog-item-02__content">
                        <h3 className="blog-item-02__title text-center"><Link href="#">Quality of Life Test</Link></h3>
                        <a className="blog-item-02__more btn btn-light btn-hover-white">Explore Now<i className="fal fa-long-arrow-right"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="blog-item-02">
                      <div className="blog-item-02__image">
                        <Link href="#"><img src="https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/mastergalaxyimages/coverr_converted.webp" alt="Blog" width="370" height="201" /></Link>
                      </div>
                      <div className="blog-item-02__content">
                        <h3 className="blog-item-02__title text-center"><Link href="#">General Health Test</Link></h3>
                        <a className="blog-item-02__more btn btn-light btn-hover-white">Explore Now<i className="fal fa-long-arrow-right"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
