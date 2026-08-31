"use client";
import React from "react";
import Link from "next/link";

export default function AboutSection() {
  const popularCourses = [
    { title: "General Psychology", href: "/course/general-psychology" },
    { title: "Sports Psychology", href: "/course/sports-psychology" },
    { title: "Educational Psychology", href: "/course/educational-psychology" },
    { title: "Addictions & Relationships", href: "/course/counselling-psychology" },
    { title: "Child Psychology", href: "/course/child-psychology" },
    { title: "Industrial/Organizational Psychology", href: "/course/organizational-psychology" },
  ];

  return (
    <div className="about-section section-padding-02 scene">
      <div className="container">
        <div className="about-wrapper scene">
          <div className="about-main-content">
            <div className="row align-items-center gy-10">
              <div className="col-md-12">
                <div className="about-content">
                  <div className="section-title mb-2">
                    <h3 className="section-title__title-02">
                      <span>Learn from the Best</span>
                    </h3>
                    <h2 className="section-title__title-03">
                      <mark>Transform Lives through Expert Learning</mark>
                    </h2>
                  </div>
                  <p className="mb-2">
                    India&apos;s first{" "}
                    <span className="fw-bold text-success">
                      Practical Psychology Learning Platform
                    </span>{" "}
                    for counsellors and psychologists to connect, learn, grow, and explore lifelong opportunities in psychology.
                  </p>
                  <p>
                    We simplify learning psychology and emphasize practical application, helping you gain tangible skills. Our classes, led by experts, blend psychology&apos;s academic traditions with modern scientific applications, allowing you to specialize in various concentrations.<br />
                    Some of our popular courses include:
                  </p>
                  <div className="row pt-4">
                    <div className="col-md-6">
                      <ul className="tutor-course-segment__list-style-03 font-size-16">
                        {popularCourses.slice(0, 3).map((item, idx) => (
                          <li key={idx}>
                            <Link href={item.href} className="text-dark fw-medium">
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="tutor-course-segment__list-style-03 font-size-16">
                        {popularCourses.slice(3).map((item, idx) => (
                          <li key={idx}>
                            <Link href={item.href} className="text-dark fw-medium">
                              {item.title}
                            </Link>
                          </li>
                        ))}
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
  );
}
