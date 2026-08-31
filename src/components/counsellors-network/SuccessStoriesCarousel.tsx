"use client";
import React, { useState } from "react";

interface StoryItem {
  title: string;
  review: string;
  name: string;
  location: string;
  image: string;
}

const SUCCESS_STORIES: StoryItem[] = [
  {
    title: "Great quality!",
    review:
      "I am working as a counselling psychologist. this course was helpful for me as it accelerated my growth in career as a psychologist. The trainers at Counsel India are very knowledgeable, professional and helpful. They shape the course according to the trainee.",
    name: "Ankita Rai",
    location: "Hyderabad",
    image: "/assets/images/avatar/ankita.jpg",
  },
  {
    title: "Great quality!",
    review:
      "I attended counsel India's CLEP, it was worth every penny. Very informative and quick workable solutions provided for budding entrepreneurs. Thank you Counsel India.",
    name: "Hitesh Rawat",
    location: "Dehradun",
    image: "/assets/images/avatar/hitesh.jpg",
  },
  {
    title: "Great quality!",
    review:
      "I was searching for such a program and got to know about the Counsellors Entrepreneurship Program offered by Counsel India. At first I was very hesitated and scared if the program would be useful or not. But after the program had been completed I was very much amazed by the level of deep understandings and learnings I got to learn.",
    name: "Komal Saxena",
    location: "Noida",
    image: "/assets/images/avatar/komal.jpg",
  },
  {
    title: "Great quality!",
    review:
      "Counsel India is one of the finest organizations of India for the field of psychology. I specifically recommend it the the newbies of psychology field who want a promising career in psychology. Not only Counsel India helps with the mastery of psychology it also opens the door for further opportunities involving jobs. I specifically loved the study material that was provided to me after each class that is very helpful till date. In future I'd again prefer to Counsel India to accelerate my knowledge for the subject I dearly love.",
    name: "Sujata",
    location: "Delhi",
    image: "/assets/images/avatar/sujata.jpg",
  },
  {
    title: "Great quality!",
    review:
      "Counselling psychology is one such course that requires more of practical knowledge. Inspite of COVID situation, the team managed well through online platform , coming from a psychology background got my basics even more stronger from this internship experience .Mentor services is truly exceptional , Thank you Sonali. Training from Himanshi Ma'am was very great. Had a wonderful experience overall, Thank you team .Along with this it would be beneficial if technical services such as assignment updates and sessions briefings are provided conveniently.",
    name: "Shivani saha",
    location: "Jammu",
    image: "/assets/images/avatar/shivaniii.jpg",
  },
  {
    title: "Great quality!",
    review:
      "I used to get always confused about how to start career in counselling and here counselling india taught me the best thing in it. The trainers at Counsel India are very knowledgeable, professional and helpful. They shape the course according to the trainee.",
    name: "Jidnyasa",
    location: "South Africa",
    image: "/assets/images/avatar/jidnyasa.jpg",
  },
];

export default function SuccessStoriesCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  // Repeat for continuous seamless marquee
  const displayItems = [...SUCCESS_STORIES, ...SUCCESS_STORIES];

  return (
    <div
      className="testimonial-section section-padding-01 py-5"
      style={{ backgroundColor: "#ffffff", overflow: "hidden" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container custom-container">
        {/* Left-Aligned Section Title with Single Clean Underline Mark */}
        <div style={{ marginBottom: "32px" }}>
          <div className="section-title text-start mb-0">
            <h2
              className="section-title__title"
              style={{
                fontFamily: "Georgia, 'Playfair Display', serif",
                fontSize: "36px",
                color: "#1e293b",
                fontWeight: 700,
                position: "relative",
                display: "inline-block",
                margin: 0,
              }}
            >
              Success{" "}
              <span
                style={{
                  position: "relative",
                  display: "inline-block",
                  color: "#1e293b",
                  paddingBottom: "10px",
                }}
              >
                Stories
                <svg
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "-4px",
                    transform: "translateX(-50%)",
                    width: "93px",
                    height: "13px",
                    display: "block",
                    pointerEvents: "none",
                  }}
                  viewBox="0 0 93 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1,3.56626519 C26.0879299,2.94588576 155.063268,-3.39393915 51.2382928,6.52023088 C13.9597432,10.079932 -17.4916024,6.40844901 73.363461,11.2851967"
                    stroke="#07A64B"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>
        </div>

        {/* Continuous Butter-Smooth Auto-Scrolling Track */}
        <div style={{ overflow: "hidden", width: "100%", padding: "10px 0 20px" }}>
          <div
            className="smooth-marquee-track"
            style={{
              display: "flex",
              gap: "30px",
              width: "max-content",
              willChange: "transform",
              transform: "translate3d(0, 0, 0)",
              backfaceVisibility: "hidden",
              animation: "marqueeScroll 32s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {displayItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  width: "370px",
                  flexShrink: 0,
                  boxSizing: "border-box",
                }}
              >
                {/* Testimonial Card */}
                <div
                  style={{
                    backgroundColor: "#f8f8f8",
                    borderRadius: "8px",
                    padding: "32px 35px 35px",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "380px",
                    height: "100%",
                    boxSizing: "border-box",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  {/* Quote Watermark Icon */}
                  <div
                    style={{
                      position: "absolute",
                      top: "18px",
                      right: "24px",
                      lineHeight: 1,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36px"
                      height="30px"
                      viewBox="0 0 50 40"
                      fill="#e0e3e6"
                      style={{ transform: "scale(-1)" }}
                    >
                      <path d="M21.8750977,2.18046875 C22.4503906,2.18046875 22.9167969,1.7140625 22.9167969,1.13876953 C22.9167969,0.563476562 22.4503906,0.0970703125 21.8750977,0.0970703125 C9.79960938,0.110839844 0.0138671875,9.89658203 2.76635467e-06,21.9720703 L2.76635467e-06,28.2220703 C-0.01796875,34.56875 5.11230469,39.728418 11.4588867,39.7465793 C17.8055664,39.7645508 22.9652344,34.6342773 22.9833957,28.2876953 C23.0013672,21.9410156 17.8710938,16.7813477 11.5245117,16.7632813 C7.77705078,16.7526367 4.25966797,18.5698242 2.10009766,21.6325195 C2.29296875,10.8446289 11.0853516,2.19580078 21.8750977,2.18046875 Z"></path>
                      <path d="M38.5416992,16.7638672 C34.8157227,16.7667969 31.3244141,18.5832031 29.1833984,21.6326172 C29.3763672,10.8446289 38.16875,2.19580078 48.9583984,2.18056641 C49.5336914,2.18056641 50.0000977,1.71416016 50.0000977,1.13886719 C50.0000977,0.563574219 49.5336914,0.0971679688 48.9583984,0.0971679688 C36.8829102,0.1109375 27.097168,9.89667969 27.0833984,21.972168 L27.0833984,28.222168 C27.0833984,34.5503906 32.2134766,39.6804687 38.5416992,39.6804687 C44.8699219,39.6804687 50.0000977,34.5503906 50.0000977,28.222168 C50.0000977,21.8939453 44.8700195,16.7638672 38.5416992,16.7638672 Z"></path>
                    </svg>
                  </div>

                  <div>
                    {/* Header in Brand Green */}
                    <h4
                      style={{
                        color: "#07a64b",
                        fontWeight: 700,
                        fontSize: "18px",
                        lineHeight: 1.67,
                        margin: "0 0 12px",
                      }}
                    >
                      {item.title}
                    </h4>

                    {/* Review Text */}
                    <p
                      style={{
                        color: "#555555",
                        fontSize: "14.5px",
                        lineHeight: "1.75",
                        margin: 0,
                      }}
                    >
                      {item.review}
                    </p>
                  </div>

                  {/* Author Information */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      marginTop: "auto",
                      paddingTop: "24px",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        display: "block",
                        backgroundColor: "#e2e8f0",
                        flexShrink: 0,
                      }}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/assets/images/avatar-placeholder.jpg";
                      }}
                    />
                    <div>
                      <h5
                        style={{
                          fontWeight: 700,
                          fontSize: "15.5px",
                          color: "#212529",
                          marginBottom: "2px",
                          lineHeight: 1.2,
                        }}
                      >
                        {item.name}
                      </h5>
                      <span style={{ fontSize: "13.5px", color: "#64748b" }}>
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}
