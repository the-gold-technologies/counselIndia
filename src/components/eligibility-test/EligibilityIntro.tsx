"use client";
import React from "react";

export default function EligibilityIntro() {
  return (
    <div
      className="contact-section"
      style={{ backgroundColor: "#ffffff", paddingBottom: "50px" }}
    >
      <div className="container custom-container">
        {/* Contact Title matching exact screenshot line-wraps and typography */}
        <div
          className="contact-title text-center mx-auto"
          style={{ maxWidth: "1260px" }}
        >
          <h2
            className="contact-title__title"
            style={{
              fontSize: "clamp(32px, 3.8vw, 38px)",
              fontWeight: 700,
              fontFamily:
                "'Playfair Display', Georgia, 'Times New Roman', serif",
              color: "#1e293b",
              marginBottom: "24px",
            }}
          >
            Eligibility Test
          </h2>

          <p
            style={{
              fontSize: "13.5px",
              lineHeight: "1.65",
              color: "#52525b",
              marginBottom: "18px",
            }}
          >
            This is a simple and easiest way to analyze your interest level in
            Psychology that helps you to know yourself better. Whether you are
            looking for a job, an internship, or want to kickstart your career
            in mental health industry, this Personality Test will help you in
            every possible way.
          </p>

          <p
            style={{
              fontSize: "13.5px",
              lineHeight: "1.65",
              color: "#52525b",
              marginBottom: "18px",
            }}
          >
            You can get your psychology knowledge tested through our free
            psychology personality test. The test will help you understand your
            behavioural traits, personality traits and the way you relate to
            people around you.
          </p>

          <p
            style={{
              fontSize: "13.5px",
              lineHeight: "1.65",
              color: "#52525b",
              marginBottom: "0",
            }}
          >
            Personality tests provide a model to understand yourself and others
            by asking questions that probe your thoughts, emotions, and
            behaviors. The personality test will help you to understand about
            the multiple dimensions of personality through 10+ validated
            questions. The results from this test could be used for different
            purposes such as career development, personal growth or simply just
            for fun!
          </p>
        </div>
      </div>
    </div>
  );
}
