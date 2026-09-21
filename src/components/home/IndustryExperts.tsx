"use client";
import React, { useEffect } from "react";
import Link from "next/link";

interface Expert {
  id: number;
  name: string;
  role: string;
  slug: string;
  image: string;
  shortAbout: string;
}

export default function IndustryExperts() {
  const experts: Expert[] = [
    {
      id: 1,
      name: "Ayushi Madaan",
      role: "RCI Certified Psychologist",
      slug: "ayushi-madaan-clinical-psychologist-18",
      image: "https://prod-s3.counselindia.com/images/3241_shopping-designify.png",
      shortAbout:
        "Ayushi Madaan, has an experience of around 8 years in this field. I have completed my Graduation and Masters's from Delhi University. I was the rank holder in all my academic years. I have done my M.Phil from Gautam Buddha University.",
    },
    {
      id: 2,
      name: "Anastasiia Maksymovska",
      role: "Psychologist – Psychotherapist – Sexologist",
      slug: "anastasiia-maksymovska-psychologist-psychotherapist-sexologist-19",
      image: "https://prod-s3.counselindia.com/images/654_D402990F-A501-4AFF-BE6B-F14B2C4ABE27.jpg",
      shortAbout:
        "I am a psychologist-psychotherapist-sexologist, all my life I have been fond of education. Human nature is my passion. I believe that every person can do their best if they are willing to ask themselves the right questions.",
    },
    {
      id: 3,
      name: "Darline Gonzalez",
      role: "Cognitive psychology",
      slug: "darline-gonzalez-psychoogist-20",
      image: "https://prod-s3.counselindia.com/images/6564_8061E0FC-D47C-4E6C-8CAB-4AE815622A0A.png",
      shortAbout:
        "Doctor of Philosophy in Psychology with an Emphasis in Cognition and Instruction (Ph.D.) – Grand Canyon University (GCU), Phoenix, Arizona (AZ)- 2021. Master of Science in Psychology with an Emphasis in General Psychology- 2015 GCU, Phoenix, AZ Bachelor",
    },
    {
      id: 4,
      name: "Ms. Monica",
      role: "Consultant Psychologist",
      slug: "ms-monica-consultant-psychologist-23",
      image: "https://prod-s3.counselindia.com/counsellor/counsellor_Ms. Monica_1673870342.webp",
      shortAbout:
        "More than 16 years of experience in the field of mental health areas of adolescent mental health (stress, anxiety, depression), girl child development, women empowerment, youth empowerment, drug addiction, special education. RCI registered.",
    },
    {
      id: 5,
      name: "Aanchal Harjai",
      role: "Clinical Psychologist",
      slug: "aanchal-harjai-clinical-psychologist-33",
      image: "https://prod-s3.counselindia.com/counsellor/anchal-counselor_1729331864.jpg",
      shortAbout:
        "Worked with the Ministry of Health and Family Welfare, psychiatric department. Skilled in assessments, diagnosis, psychotherapeutic treatment plans, psychoeducation, child development, rehabilitation, training and cognition.",
    },
    {
      id: 6,
      name: "Nupur Gupta",
      role: "Clinical Psychologist",
      slug: "nupur-gupta-clinical-psychologist-31",
      image: "https://prod-s3.counselindia.com/counsellor/counsellor_nupur gupta_1673871719.jpg",
      shortAbout:
        "Awarded for excellent services. Experienced in Mental Retardation Clinic, Marital and Psychosocial Clinic, Neuro Behavioural Clinic, Drug Abuse Treatment, Behaviour Therapy Unit, Clinical intervention of various psychiatric disorders.",
    },
    {
      id: 7,
      name: "Pooja S. Naragachche",
      role: "Gestalt Therapist",
      slug: "pooja-s-naragachche-gestalt-therapist-30",
      image: "https://prod-s3.counselindia.com/counsellor/pooja-counselor_1729331999.jpg",
      shortAbout:
        "MA in Clinical Psychology, PG Diploma in Rehabilitation Psychology. Specialized in Gestalt therapy, emotional wellness, interpersonal relationship healing and holistic behavioral therapy.",
    },
    {
      id: 8,
      name: "Himanshi Singh",
      role: "Clinical Psychologist",
      slug: "himanshi-singh-clinical-psychologist-28",
      image: "https://prod-s3.counselindia.com/counsellor/counsellor_Himanshi Singh_1673871256.png",
      shortAbout:
        "Gold medalist, M.Phil. UGC NET qualified. Experienced in diagnosing and evaluating mental and emotional disorders of individuals through appropriate assessment, observation, interview, and psychological tests.",
    },
    {
      id: 9,
      name: "Radhika Gulati",
      role: "Child Psychologist",
      slug: "radhika-gulati-child-psychologist-27",
      image: "https://prod-s3.counselindia.com/counsellor/counsellor_Radhika Gulati_1673871027.jpg",
      shortAbout:
        "I am a Child Psychologist with a Master's in counselling psychology and a diploma in Rehabilitation Psychology. Remedial tutor experienced with Dyslexia and Dysgraphia.",
    },
    {
      id: 10,
      name: "Jyoti S Sharma",
      role: "Music Therapist & Psychologist",
      slug: "jyoti-s-sharma-music-therapist-and-psychologist45-26",
      image: "https://prod-s3.counselindia.com/counsellor/counsellor_Jyoti S Sharma_1673870887.webp",
      shortAbout:
        "Consultant music therapist and Psychologist at World Brain Centre Hospital, New Delhi. Esteemed Member of Indian Music Therapy Association (IMTA) with CSMT certification.",
    },
    {
      id: 11,
      name: "Rashmi Soin",
      role: "Parenting Coach",
      slug: "rashmi-soin-parenting-coach-25",
      image: "https://prod-s3.counselindia.com/counsellor/counsellor_Rashmi Soin_1673870631.webp",
      shortAbout:
        "She is a Parenting Coach, Counsellor and Motivational Speaker. Working in the field for 10+ years helping families and children thrive with compassionate guidance.",
    },
    {
      id: 12,
      name: "Medhavi Sood",
      role: "Clinical Psychologist",
      slug: "medhavi-sood-clinical-psychologist-24",
      image: "https://prod-s3.counselindia.com/counsellor/counsellor_Medhavi Sood_1673870486.webp",
      shortAbout:
        "Doctorate in Clinical Psychology, Professional diploma in Clinical Psychology (RCI licensed). Associated with leading healthcare institutions and published researcher.",
    },
    {
      id: 13,
      name: "Michelle Luis",
      role: "Psychologist & Wellness Coach",
      slug: "michelle-luis-psychologist-13",
      image: "https://prod-s3.counselindia.com/counsellor/counsellor_Michelle Luis_1673865947.jpeg",
      shortAbout:
        "Michelle has 4+ years of first-hand experience in patient counselling from AIISH Mysore and Millennium Group of Schools. Former Corporate Wellness Coach.",
    },
    {
      id: 14,
      name: "Kavya.C",
      role: "Career Counsellor & Psychologist",
      slug: "kavyac-career-counsellor-and-counsellor-17",
      image: "https://prod-s3.counselindia.com/counsellor/kavya-counselor_1729330965.jpg",
      shortAbout:
        "Graduate in Science from Mysore University and Post Graduate in Psychology at University of Madras. Trained in Cognitive Behavior Therapy (CBT) and career guidance.",
    },
    {
      id: 15,
      name: "Yashasvini Rathore",
      role: "Career Counsellor & Life Skills Trainer",
      slug: "yashasvini-rathore-career-counsellor-and-life-skills-trainer-16",
      image: "https://prod-s3.counselindia.com/counsellor/yash-counselor_1729331668.jpg",
      shortAbout:
        "Certified career success coach with Masters in Psychology and English (NET qualified in both). 5+ years creating empathetic safe spaces for student growth and self-discovery.",
    },
    {
      id: 16,
      name: "P Hanumanth Rao",
      role: "Career Counsellor & Life Skills Trainer",
      slug: "p-hanumanth-rao-career-counsellor-and-life-skills-trainer-15",
      image: "https://prod-s3.counselindia.com/counsellor/hanumant-counselor_1729331562.jpg",
      shortAbout:
        "Transforming lives of students aged 14 to 24 seeking career clarity. Over 18 years of proven leadership across Banking, Finance and Education sectors.",
    },
    {
      id: 17,
      name: "Priyancy Goyal",
      role: "Clinical Psychologist",
      slug: "priyancy-goyal-clinical-psychologist-14",
      image: "https://prod-s3.counselindia.com/counsellor/goyal-counselor_1729331754.jpg",
      shortAbout:
        "NCERT-affiliated Queer Affirmative Counselling Psychologist and Organizational Psychologist. Post Graduate in Psychology dedicated to inclusive mental health care.",
    },
  ];

  useEffect(() => {
    let swiperInstance: any = null;
    const init = () => {
      if (typeof window !== "undefined" && (window as any).Swiper) {
        swiperInstance = new (window as any).Swiper(".experts-active .swiper", {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          autoplay: { delay: 3500, disableOnInteraction: false },
          speed: 1000,
          breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 30 },
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
    <div className="edumall-box-section section-padding-01 bg-white">
      <div className="container custom-container">
        {/* Section Title Start */}
        <div className="section-title mb-5">
          <h2 className="section-title__title">
            Learn from the leading <mark>industry Experts</mark>
          </h2>
          <p className="mt-2 text-muted" style={{ maxWidth: "800px" }}>
            We partner with top-notch RCI-certified psychologists and global experts who teach 55+ courses and programs. With close to 1,000+ members, our extensive network of psychologists, counsellors, and mental health professionals is ever-growing.
          </p>
        </div>
        {/* Section Title End */}

        <div className="experts-active swiper-dots-style">
          <div className="swiper">
            <div className="swiper-wrapper py-3">
              {experts.map((expert) => (
                <div className="swiper-slide h-auto" key={expert.id}>
                  {/* Box Item Start */}
                  <div className="edumall-box-item-03 w-100 d-flex flex-column justify-content-between h-100">
                    <div>
                      <div className="speaker-item__thumbnail text-center mb-4">
                        <Link href={`/counsellors-details/${expert.slug}`}>
                          <img
                            src={expert.image}
                            alt={expert.name}
                            style={{
                              width: "140px",
                              height: "140px",
                              borderRadius: "50%",
                              objectFit: "cover",
                              display: "block",
                              margin: "0 auto",
                              border: "3px solid #f0f2f5",
                              cursor: "pointer",
                            }}
                          />
                        </Link>
                      </div>

                      <div className="edumall-box-item-03__content">
                        <Link
                          href={`/counsellors-details/${expert.slug}`}
                          className="text-decoration-none"
                        >
                          <h3 className="edumall-box-item-03__title font-size-18 fw-bold text-dark mb-1">
                            {expert.name}
                          </h3>
                        </Link>
                        <span className="primary-text-color d-block font-size-14 fw-semibold text-success mb-3">
                          {expert.role}
                        </span>

                        <p
                          className="text font-size-13 text-muted mb-2"
                          style={{ textAlign: "justify", lineHeight: "1.6" }}
                        >
                          {expert.shortAbout}
                        </p>

                        <Link
                          href={`/counsellors-details/${expert.slug}`}
                          className="read-more-btn text-success font-size-13 fw-semibold text-decoration-none mb-3 d-inline-block"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>

                    <div className="pt-3 mt-auto">
                      <Link
                        href={`/counsellors-details/${expert.slug}`}
                        className="edumall-box-item-03__btn btn btn-light btn-hover-primary w-100 d-flex align-items-center justify-content-center gap-2 text-decoration-none"
                      >
                        Let&apos;s Talk <i className="fas fa-angle-right font-size-12"></i>
                      </Link>
                    </div>
                  </div>
                  {/* Box Item End */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
