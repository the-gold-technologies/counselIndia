"use client";
import React from "react";

export default function SuccessStories() {
  const alumni = [
    {
      name: "Arpita Chatterjee",
      role: "Clinical Psychologist & Counselor",
      image: "https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/alumni/1.jpg",
      fallback: "/assets/images/8519_Nandini-Lahoty.jpg",
    },
    {
      name: "BC Nigam",
      role: "Senior Consultant Psychologist",
      image: "https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/alumni/2.jpg",
      fallback: "/assets/images/7305_Faiz-Kazi.jpg",
    },
    {
      name: "Brinda Chugh",
      role: "Child & Adolescent Specialist",
      image: "https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/alumni/3.jpg",
      fallback: "/assets/images/4340_Nidhi-Priya.jpg",
    },
    {
      name: "Jainendra Prasad",
      role: "Corporate Wellness Mentor",
      image: "https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/alumni/4.jpg",
      fallback: "/assets/images/8798_31_Medhavi-Sood_11zon.webp",
    },
    {
      name: "Pousali Das",
      role: "Expressive Art Therapist",
      image: "https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/alumni/5.jpg",
      fallback: "/assets/images/7040_5805_Ms.Monica_11zon.webp",
    },
    {
      name: "Shikha Sharma",
      role: "Psychotherapist & Educator",
      image: "https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/alumni/6.jpg",
      fallback: "/assets/images/Trainer1.png",
    },
  ];

  return (
    <div className="section-padding-01 bg-light">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h4 className="section-title__sub-title text-success fw-bold">
            INSPIRING SUCCESS STORIES
          </h4>
          <h2 className="section-title__title-02">
            The Counsel India <mark>Impact</mark>
          </h2>
          <p className="text-muted mt-2">
            Discover how thousands of aspiring counselors transformed their passion into rewarding psychology careers.
          </p>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 text-center h-100 bg-white rounded-3">
              <div className="display-5 fw-bold text-success mb-2">94%</div>
              <p className="fw-semibold text-dark mb-1">Career Transition Rate</p>
              <p className="text-muted font-size-14">
                Learners say our courses directly helped launch and shape their professional counselling careers.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 text-center h-100 bg-white rounded-3">
              <div className="display-5 fw-bold text-success mb-2">6 Months</div>
              <p className="fw-semibold text-dark mb-1">Most Popular Track</p>
              <p className="text-muted font-size-14">
                Our comprehensive diploma programs provide hands-on internship hours and live client simulation.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 text-center h-100 bg-white rounded-3">
              <div className="display-5 fw-bold text-success mb-2">22+</div>
              <p className="fw-semibold text-dark mb-1">Global Countries</p>
              <p className="text-muted font-size-14">
                International student network practicing counselling across North America, Europe, and Asia.
              </p>
            </div>
          </div>
        </div>

        <div className="section-title text-center mb-4">
          <h3 className="section-title__title-03">
            Our Esteemed Alumni &amp; Dedicated Counselors
          </h3>
        </div>

        <div className="row g-4">
          {alumni.map((item, idx) => (
            <div key={idx} className="col-lg-2 col-md-4 col-sm-6 text-center">
              <div className="bg-white p-3 rounded-3 shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
                <div
                  className="rounded-circle overflow-hidden mb-3 border border-3 border-success"
                  style={{ width: "90px", height: "90px" }}
                >
                  <img
                    src={item.fallback}
                    alt={item.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <h5 className="fw-bold font-size-16 mb-1 text-dark">
                  {item.name}
                </h5>
                <p className="text-muted font-size-12 mb-0">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
