"use client";
import React from "react";

export default function AboutStory() {
  return (
    <div className="about-story-section bg-white py-4">
      <div className="container custom-container">
        {/* Section Heading: Our Story */}
        <h2
          className="about-section-title__main-title text-center"
          style={{ marginBottom: "5%", marginTop: "3%" }}
        >
          Our Story
        </h2>

        <div className="story-content">
          {/* Chapter 1 */}
          <p style={{ marginTop: "2%" }}>
            <strong style={{ fontWeight: "bold", fontSize: "19px", color: "#212529" }}>
              The Story Behind Counsel India: A Movement Born from Purpose, Not Just a Business
            </strong>
          </p>

          <p className="font-size-15 text-muted lh-base mb-4">
            In 2016, in the heart of India, a seed was planted — not in a
            boardroom, but in the corridors of schools, the classrooms of
            universities, and the untouched corners of villages. It was here that
            Mr. Bobby Thakur, a young psychologist from a humble middle-class
            background, began offering free mental health awareness programs —
            without expecting a single rupee in return.
            <br />
            <br />
            No grand funding. No team. Just a vision.
            <br />
            <br />
            A vision to change the way India understands psychology — not just as
            a subject, but as a solution to everyday life challenges.
            <br />
            <br />
            He called it Counsel India.
            <br />
            <br />
            What began from the basement of a rented flat, with a few volunteers
            and handwritten brochures, soon evolved into one of India&apos;s most
            impactful psychology education ecosystems.
            <br />
            <br />
            But this wasn&apos;t just about education. This was about transformation.
          </p>

          {/* Chapter 2 */}
          <p style={{ marginTop: "2%" }}>
            <strong style={{ fontWeight: "bold", fontSize: "19px", color: "#212529" }}>
              🎯 Why We Exist: Beyond Learning, Toward Lasting Social Impact
            </strong>
          </p>

          <p className="font-size-15 text-muted lh-base mb-4">
            Yes, on the surface, we offer psychology learning programs —
            diplomas, masterclasses, skill certifications.
            <br />
            <br />
            But dig deeper, and you&apos;ll see: we are a movement.
            <br />
            <br />
            A movement designed to improve the quality of people&apos;s lives —
            through the power of psychology, emotional intelligence, and
            self-awareness.
            <br />
            <br />
            From Teacher Training to Counseling Master Programs, every initiative
            at Counsel India echoes a deeper purpose — to make mental health and
            emotional wellness accessible, actionable, and aspirational.
          </p>

          {/* Chapter 3 */}
          <p style={{ marginTop: "2%" }}>
            <strong style={{ fontWeight: "bold", fontSize: "19px", color: "#212529" }}>
              The Turning Point: When Psychology Met Purpose
            </strong>
          </p>

          <p className="font-size-15 text-muted lh-base mb-4">
            In a quiet spiritual retreat in 2016, Bobby crossed paths with a
            fellow changemaker. A shared passion for holistic growth and social
            upliftment sparked something deeper. They joined hands — and from that
            moment, what was once a solo mission turned into an unstoppable
            revolution.
            <br />
            <br />
            They believed in one mantra:
            <br />
            <br />
            <strong className="text-dark">
              &ldquo;GYAN&rdquo; (knowledge) has the power to transform your entire life.
            </strong>
            <br />
            <br />
            Because when you understand psychology, you don&apos;t just learn —
            you evolve. You don&apos;t just get degrees — you gain clarity,
            confidence, and control over your emotions.
          </p>

          {/* Chapter 4 */}
          <p style={{ marginTop: "2%" }}>
            <strong style={{ fontWeight: "bold", fontSize: "19px", color: "#212529" }}>
              From Rejection to Revolution: The Grit Behind the Growth
            </strong>
          </p>

          <p className="font-size-15 text-muted lh-base mb-4">
            The journey wasn&apos;t easy. Rejections were common. Doubts were
            louder than support. But the mission never wavered.
            <br />
            <br />
            Working from a small basement, they faced power cuts, zero marketing
            budgets, and more &quot;no&quot;s than &quot;yes&quot;s — but what they had was belief.
            <br />
            <br />
            Today, that belief has created:
            <br />
            <br />
            🔹 10,000+ Certified Counsellors
            <br />
            🔹 2,00,000+ lives transformed
            <br />
            🔹 A global alumni community in over 15 countries
            <br />
            🔹 A government-supported mission that aligns with MEPSE and Skill
            India initiatives
          </p>

          {/* Chapter 5 */}
          <p style={{ marginTop: "2%" }}>
            <strong style={{ fontWeight: "bold", fontSize: "19px", color: "#212529" }}>
              Our Why is Bigger Than Us
            </strong>
          </p>

          <p className="font-size-15 text-muted lh-base mb-0">
            Every learner at Counsel India becomes a torchbearer of change. Be it
            a mother learning child psychology to raise emotionally strong kids, a
            teacher improving classroom dynamics, or a professional unlocking
            leadership through emotional intelligence — each one walks out more
            aware, empowered, and unstoppable.
            <br />
            <br />
            Because we believe — a nation can only rise when its people are
            emotionally resilient.
          </p>
        </div>
      </div>

      <style jsx>{`
        .about-section-title__main-title {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          font-size: 40px;
          line-height: 1.4;
          color: #212529;
          font-weight: 700;
        }

        @media (max-width: 991px) {
          .about-section-title__main-title {
            font-size: 32px;
          }
        }
      `}</style>
    </div>
  );
}
