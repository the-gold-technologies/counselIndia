export interface CourseDetailData {
  id: number;
  name: string;
  slug: string;
  badgeSale?: string;
  category: string;
  bgImage: string;
  partnerLogo?: string;
  description: string;
  rating: number;
  enrollUrl: string;
  phone: string;
  highlights: {
    title: string;
    desc: string;
  }[];
  benefits: string[];
  about: string[];
  learningObjectives: string[];
  credentials: {
    id: string;
    label: string;
    text: string;
    image: string;
  }[];
  curriculum: {
    totalSessions: string;
    totalHours: string;
    stats: { count: string; text: string }[];
    modules: {
      title: string;
      topics: string[];
    }[];
  };
  whoCanJoin: string[];
  scholarship: {
    title: string;
    subtitle: string;
    image: string;
    points: { label: string; desc: string }[];
  };
  faculty: {
    name: string;
    title: string;
    image: string;
  }[];
  referEarn: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
  reviews: {
    quote: string;
    name: string;
    city: string;
    image: string;
  }[];
  partners: string[];
  faqs: {
    question: string;
    answer: string[];
  }[];
}

export const COURSE_DETAILS_MAP: Record<string, CourseDetailData> = {
  "counselling-master-course-foundation": {
    id: 10,
    name: "Counselling Master Course- Foundation",
    slug: "counselling-master-course-foundation",
    badgeSale: "50% OFF",
    category: "Course",
    bgImage:
      "https://prod-s3.counselindia.com/courses/background_image/counselling-master-course-basic_1687158429.webp",
    partnerLogo: "https://www.counselindia.com/assets/images/logo/icpemci.png",
    description:
      "The Counselling Master Course is a foundation course on various psychological problems that a professional counsellor must have to cater to the needs of the client. Counselling is a noble profession as you get to be directly involved in helping people who are suffering from any mental disturbance or emotional imbalance such as depression, anxiety, addiction, etc. Recognized by the UGC and accredited with an A+ rating by NAAC in 2022, this collaboration with Galgotia’s University offers UGC-approved psychology courses, providing learners with a solid foundation for a successful career in mental health.",
    rating: 5,
    enrollUrl: "https://rzp.io/rzp/X5Q7xhF",
    phone: "+918031320449",
    highlights: [
      {
        title: "Credentials",
        desc: "Counselling Master Course- Foundation, Grade Sheets, Skill Certificates, and Letter of Recommendation",
      },
      {
        title: "Duration",
        desc: "3 Months",
      },
      {
        title: "Eligibility",
        desc: "12th & Above",
      },
      {
        title: "3 Core Modules",
        desc: "Understanding Psychology/Counselling, Basics, Goals and Ethics of Counselling, Practice and Go to Market",
      },
      {
        title: "Program Credits",
        desc: "1 (as per NSQF)",
      },
      {
        title: "Program Start Date",
        desc: "22 August 2026",
      },
    ],
    benefits: [
      "12 sessions with a comprehensive course roadmap and milestones.",
      "Key therapy skills and learning objectives defined.",
      "The program curriculum is designed in a comprehensive manner focusing on counselling skills, testings, case discussions, marketing skills and other skills.",
      "All sessions to be conducted live online by RCI certified trainers and industry experts.",
      "Personalized Mentorship",
      "Job Support",
      "Western Style of Psychology Learning",
      "Support to start your own practice or business setup",
      "5 Core Modules + Practical Assignments and Case Studies for each module.",
    ],
    about: [
      "Become a skilled counsellor with a stronghold over understanding human psychology with the Counselling Master Course Foundation level.",
      "This certification program has been extensively designed for people who are eager to learn the basic skills of Counselling and looking forward to enhancing their skills to become a better Counsellor.",
      "CMC Foundation will allow the participants to get upskilled as counsellors and motivate any person passionate about counselling and therapies.",
    ],
    learningObjectives: [
      "Understanding of counselling techniques",
      "Exposure to more career opportunities",
      "Upskill as a counsellor",
    ],
    credentials: [
      {
        id: "ci-certificate",
        label: "CI Certificate",
        text: "Upon successful completion of the course, you will receive a recognized certificate from Counsel India, validating your skills and expertise in the field.",
        image:
          "https://prod-s3.counselindia.com/credential/%20CMC%20Foundation-3_1728552205.png",
      },
      {
        id: "lor",
        label: "Letter of Recommendation",
        text: "Upon successful completion of the course, you will be eligible to receive a Letter of Recommendation from Counsel India, endorsing your expertise and professional capabilities in the field.",
        image:
          "https://prod-s3.counselindia.com/credential/Letter%20of%20recommendation%20for%20Jon%20Doe%20(1)_1755835658.png",
      },
    ],
    curriculum: {
      totalSessions: "9 Sessions",
      totalHours: "30 hours",
      stats: [
        { count: "3", text: "Months" },
        { count: "3", text: "Core Modules" },
        { count: "3+", text: "Topics" },
        { count: "12+", text: "Live Sessions" },
      ],
      modules: [
        {
          title: "Understanding Psychology/Counselling",
          topics: [
            "Introduction to Mental Health: What is Mental Health, Purpose and Areas.",
            "Need of Learning Psychology/Counseling and Current Trends.",
            "Differentiating between normal variations and clinical conditions.",
            "Basic Counseling Skills",
          ],
        },
        {
          title: "Basics , Goals and Ethics of Counselling",
          topics: [
            "Introduction to basic counseling techniques (reflection, paraphrasing, summarizing)",
            "Goal setting and treatment planning",
            "Ethical considerations and professional standards in counseling and psychology",
            "What is Case Studies and Analysis",
          ],
        },
        {
          title: "Practice and Go to Market",
          topics: [
            "Practical Class: Case Study / Discussion / Research Article Discussion / Session Structure",
            "Self-Care and Wellness",
            "Basics of marketing for Counsellors",
            "How to build Online Setup",
          ],
        },
      ],
    },
    whoCanJoin: [
      "All Manager",
      "All Professionals",
      "Coordinators",
      "VPs / VCs",
      "Government Officers",
      "Entrepreneur",
      "Psychology Aspirants",
      "Health / Wellness Experts",
      "Psychology Students/Professionals",
      "HOD's/Team Leaders",
    ],
    scholarship: {
      title: "Get Upto 30% Scholarship",
      subtitle:
        '"Avail up to a 30% scholarship and receive exclusive additional benefits."',
      image:
        "https://prod-s3.counselindia.com/mastergalaxyimages/Untitled%20design-23_1734162900.png",
      points: [
        {
          label: "Alumni Network of 12,500+ Members -",
          desc: "Gain access to a vast network of over 12,500 alumni who can support and guide you in your professional ventures.",
        },
        {
          label: "90+ Hiring Partners -",
          desc: "Benefit from dedicated job assistance through our extensive network of over 90 hiring partners, ensuring you have the best opportunities in the industry.",
        },
        {
          label: "Exclusive Membership -",
          desc: "Enroll now and enjoy a complimentary membership, providing access to valuable resources and opportunities.",
        },
        {
          label: "Personalized Mentoring Sessions -",
          desc: "Receive multiple one-on-one mentoring sessions with industry professionals throughout the course, helping you navigate your career path.",
        },
        {
          label: "Workshops, Events, and Bootcamps -",
          desc: "Get free access to a wide range of workshops, events, bootcamps, and networking meetings, designed to enhance your skills and expand your professional network.",
        },
      ],
    },
    faculty: [
      {
        name: "Aanchal Harjai",
        title: "Clinical Psychologist",
        image:
          "https://prod-s3.counselindia.com/counsellor/anchal-counselor_1729331864.jpg",
      },
      {
        name: "Himanshi Singh",
        title: "Clinical Psychologist",
        image:
          "https://prod-s3.counselindia.com/counsellor/counsellor_Himanshi%20Singh_1673871256.png",
      },
      {
        name: "Ayushi Madaan",
        title: "Clinical Psychologist",
        image:
          "https://prod-s3.counselindia.com/counsellor/counsellor_Ayushi%20Madaan_1673869282.png",
      },
      {
        name: "Kriti Kamal",
        title: "Psychologist",
        image:
          "https://prod-s3.counselindia.com/counsellor/1805846751698661506.jpeg",
      },
      {
        name: "Shruti Mittal",
        title: "Art Therapist",
        image:
          "https://prod-s3.counselindia.com/counsellor/10706649631693060552.jpg",
      },
    ],
    referEarn: {
      title:
        "Refer someone and Earn upto INR 12,000 Cashback/Vouchers, on every successful enrollment",
      subtitle: "Your friend also gets an instant scholarship!",
      buttonText: "Start Referring",
      buttonLink: "/refer-and-earn?course_id=10",
    },
    reviews: [
      {
        quote:
          "Counselling Master Course is really a great Course. Efforts made by experts is really appreciable. I suggest everyone to take this course and learning Counselling Framework to be successful in life.",
        name: "Esha Sharma",
        city: "Ajmer",
        image: "https://prod-s3.counselindia.com/success_stories/esha.jpg",
      },
      {
        quote:
          "I have experienced Counselling Master Course which is a great learning experience to get success in life.",
        name: "Neha Gupta",
        city: "Manali",
        image: "https://prod-s3.counselindia.com/success_stories/nehaa.jpg",
      },
      {
        quote:
          "The overall experience was top notch. The classes were perfectly on time and trainers were very professional.",
        name: "Maninder Kaur",
        city: "Chandigarh",
        image: "https://prod-s3.counselindia.com/success_stories/maninder-kaur.jpg",
      },
    ],
    partners: [
      "/images/partner1.jpg",
      "/images/partner2.jpg",
      "/images/partner3.jpg",
      "/images/partner4.jpg",
      "/images/partner5.jpg",
      "/images/partner6.jpg",
      "/images/partner7.jpg",
      "/images/partner8.jpg",
    ],
    faqs: [
      {
        question: "What is a Practical and activity based session?",
        answer: [
          "a) You will love each and every class as all sessions are practically conducted and participation in psychology activities is very easy and effective.",
          "b) You will get practical exposure on how to deal with real life clients and not just cover the theory part.",
          "c) Online training sessions will also help you to understand how to take online sessions as a counsellor across the globe and not just limit your client base in your area which is a big challenge for offline mode of training.",
        ],
      },
      {
        question: "What is Marketing and branding support?",
        answer: [
          "a) Thousands of people get to know about you with the help of marketing sessions.",
          "b) You reach to needy people by learning Marketing tactics.",
          "c) You can never get clients till the time you master the skills of marketing and self branding",
        ],
      },
      {
        question: "What kind of Study Material I will get?",
        answer: [
          "a) You can read notes over a soft copy at your comfort which is accessible on your phone, laptop or desktop.",
          "b) You will also receive Hard copies of the study material at your doorstep after the completion of the course for lifetime reference and support.",
        ],
      },
      {
        question: "What is Western style of learning?",
        answer: [
          "a) You take one class every week and start applying it for the rest of your week days.",
          "b) Free yourself from the burden of being disturbed in your working schedule.",
        ],
      },
    ],
  },
};

export function getCourseDetailBySlug(slug: string): CourseDetailData {
  if (COURSE_DETAILS_MAP[slug]) {
    return COURSE_DETAILS_MAP[slug];
  }
  // Generate structured fallback based on default foundation template
  const fallback = COURSE_DETAILS_MAP["counselling-master-course-foundation"];
  const formattedTitle = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    ...fallback,
    name: formattedTitle,
    slug: slug,
  };
}
