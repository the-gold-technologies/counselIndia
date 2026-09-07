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
  programBenefit?: string[];
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
    "id": 1,
    "name": "Counselling Master Course- Foundation",
    "slug": "counselling-master-course-foundation",
    "badgeSale": "50% OFF",
    "category": "Course",
    "bgImage": "https://prod-s3.counselindia.com/courses/background_image/counselling-master-course-basic_1687158429.webp",
    "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
    "description": "The Counselling Master Course is a foundation course on various psychological problems that a professional counsellor must have to cater to the needs of the client. Counselling is a noble profession as you get to be directly involved in helping people who are suffering from any mental disturbance or emotional imbalance such as depression, anxiety, addiction, etc. Recognized by the UGC and accredited with an A+ rating by NAAC in 2022, this collaboration with Galgotia’s University offers UGC-approved psychology courses, providing learners with a solid foundation for a successful career in mental health.",
    "rating": 5,
    "enrollUrl": "https://rzp.io/rzp/X5Q7xhF",
    "phone": "+918031320449",
    "highlights": [
      {
        "title": "Credentials",
        "desc": "Counselling Master Course- Foundation, Grade Sheets, Skill Certificates, and Letter of Recommendation"
      },
      {
        "title": "Duration",
        "desc": "3 Months"
      },
      {
        "title": "Eligibility",
        "desc": "12th & Above"
      },
      {
        "title": "3 Core Modules",
        "desc": "Understanding Psychology/Counselling, Basics , Goals and Ethics of Counselling, Practice and Go to Market"
      },
      {
        "title": "Program Credits",
        "desc": "1 (as per.NSQF)"
      },
      {
        "title": "Program Start Date",
        "desc": "22 August 2026"
      }
    ],
    "benefits": [
      "12 sessions with a comprehensive course roadmap and milestones.",
      "Key therapy skills and learning objectives defined.",
      "The program curriculum is designed in a comprehensive manner focusing on counselling skills, testings, case discussions, marketing skills and other skills.",
      "All sessions to be conducted live online by RCI certified trainers and industry experts.",
      "Personalized Mentorship",
      "Job Support",
      "Western Style of Psychology Learning",
      "Support to start your own practice or business setup",
      "5 Core Modules + Practical Assignments and Case Studies for each module."
    ],
    "about": [
      "Become a skilled counsellor with a stronghold over understanding human psychology with the Counselling Master Course Foundation level.",
      "This certification program has been extensively designed for people who are eager to learn the basic skills of Counselling and looking forward to enhancing their skills to become a better Counsellor.",
      "CMC Foundation will allow the participants to get upskilled as counsellors and motivate any person passionate about counselling and therapies."
    ],
    "learningObjectives": [
      "Understanding of counselling techniques",
      "Exposure to more career opportunities",
      "Upskill as a counsellor"
    ],
    "credentials": [
      {
        "id": "tab170",
        "label": "CI Certificate",
        "text": "Upon successful completion of the course, you will receive a recognized certificate from Counsel India, validating your skills and expertise in the field.",
        "image": "https://prod-s3.counselindia.com/credential/ CMC Foundation-3_1728552205.png"
      },
      {
        "id": "tab167",
        "label": "Letter of Recommendation",
        "text": "Upon successful completion of the course, you will be eligible to receive a Letter of Recommendation from Counsel India, endorsing your expertise and professional capabilities in the field.",
        "image": "https://prod-s3.counselindia.com/credential/Letter of recommendation for Jon Doe (1)_1755835658.png"
      }
    ],
    "curriculum": {
      "totalSessions": "9 Sessions",
      "totalHours": "30 hours",
      "stats": [
        {
          "count": "3",
          "text": "Months"
        },
        {
          "count": "3",
          "text": "Core Modules"
        },
        {
          "count": "3+",
          "text": "Topics"
        },
        {
          "count": "12+",
          "text": "Live Sessions"
        }
      ],
      "modules": [
        {
          "title": "Module 1: Foundations & Theoretical Frameworks",
          "topics": [
            "Introduction to Psychology & Psychological Dynamics",
            "Major Schools of Thought (CBT, Humanistic, Psychodynamic)",
            "The Role & Ethics of a Professional Counsellor"
          ]
        },
        {
          "title": "Module 2: Practical Skills & Intervention Strategies",
          "topics": [
            "Active Listening, Empathy, & Clinical Rapport Building",
            "Identifying Distortions & Emotional Imbalances",
            "Structured Therapy Sessions & Treatment Planning"
          ]
        },
        {
          "title": "Module 3: Clinical Application & Professional Practice",
          "topics": [
            "Live Case Studies & Supervised Roleplay Practice",
            "Documentation, Ethics, & Client Confidentiality",
            "Setting Up Your Private Practice & Career Pathways"
          ]
        }
      ]
    },
    "programBenefit": [
      "CMC is the perfect dose of counselling knowledge you require to qualify as a primary counsellor. With LIVE practice sessions and flexible timings for online learning, this is the program tailor-made for your passion for learning counselling.",
      "The participants who complete our program will get an opportunity to have a profile on the social network of psychologists. This means, by the time you finish your certification, job opportunities and networking are already waiting for you. Our practical learning is unique because the mentors are RCI Certified, field psychologists who bring actual practical knowledge to the table.",
      "Special features of this program include Counselling Procedure Class, case study discussions, Lifetime access to a psychology E-library (5000+ books), and volunteer participation in mental health awareness campaigns. Needless to say, this program also offers self-branding and marketing sessions and participants shall get job vacancy information every 30 days. A smart way to become an expert in counselling is right here, at Counsel India."
    ],
    "whoCanJoin": [
      "All Manager",
      "All Professionals",
      "Coordinators",
      "VPs / VCs",
      "Government Officers",
      "Entrepreneur",
      "Psychology Aspirants",
      "Health / Wellness Experts",
      "Psychology Students/Professionals",
      "HOD's/Team Leaders"
    ],
    "scholarship": {
      "title": "Get Upto 30% Scholarship",
      "subtitle": "\"Avail up to a 30% scholarship and receive exclusive additional benefits.\"",
      "image": "https://www.counselindia.com/assets/images/about/about-13.png",
      "points": [
        {
          "label": "Alumni Network of 12,500+ Members",
          "desc": "Gain access to a vast network of over 12,500 alumni who can support and guide you in your professional ventures."
        },
        {
          "label": "90+ Hiring Partners",
          "desc": "Benefit from dedicated job assistance through our extensive network of over 90 hiring partners, ensuring you have the best opportunities in the industry."
        },
        {
          "label": "Exclusive Membership",
          "desc": "Enroll now and enjoy a complimentary membership, providing access to valuable resources and opportunities."
        },
        {
          "label": "Personalized Mentoring Sessions",
          "desc": "Receive multiple one-on-one mentoring sessions with industry professionals throughout the course, helping you navigate your career path."
        },
        {
          "label": "Workshops, Events, and Bootcamps",
          "desc": "Get free access to a wide range of workshops, events, bootcamps, and networking meetings, designed to enhance your skills and expand your professional network."
        }
      ]
    },
    "faculty": [
      {
        "name": "Aanchal Harjai",
        "title": "Clinical Psychologist",
        "image": "https://prod-s3.counselindia.com/counsellor/anchal-counselor_1729331864.jpg"
      },
      {
        "name": "Himanshi Singh",
        "title": "Clinical Psychologist",
        "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Himanshi Singh_1673871256.png"
      },
      {
        "name": "Ayushi Madaan",
        "title": "Clinical Psychologist",
        "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Ayushi Madaan_1673869282.png"
      },
      {
        "name": "Kriti Kamal",
        "title": "Psychologist",
        "image": "https://prod-s3.counselindia.com/counsellor/1805846751698661506.jpeg"
      },
      {
        "name": "Shruti Mittal",
        "title": "Art Therapist",
        "image": "https://prod-s3.counselindia.com/counsellor/10706649631693060552.jpg"
      }
    ],
    "referEarn": {
      "title": "Refer someone and Earn upto INR 12,000 Cashback/Vouchers, on every successful enrollment",
      "subtitle": "Your friend also gets an instant scholarship!",
      "buttonText": "Start Referring",
      "buttonLink": "https://www.counselindia.com/membership"
    },
    "reviews": [
      {
        "quote": "Counselling Master Course is really a great Course. Efforts made by experts is really appreciable. I suggest everyone to take this course and learning Counselling Framework to be successful in life.",
        "name": "Esha Sharma",
        "city": "Ajmer",
        "image": "/assets/images/avatar/esha.jpg"
      },
      {
        "quote": "I have experienced Counselling Master Course which is a great learning experience to get success in life.",
        "name": "Neha Gupta",
        "city": "Manali",
        "image": "/assets/images/avatar/neha.jpg"
      },
      {
        "quote": "The overall experience was top notch. The classes were perfectly on time and trainers were very professional.",
        "name": "Maninder Kaur",
        "city": "Chandigarh",
        "image": "/assets/images/avatar/maninder-kaur.jpg"
      },
      {
        "quote": "Counselling psychology is one such course that requires more of practical knowledge. Inspite of COVID situation, the team managed well through online platform , coming from a psychology background got my basics even more stronger from this experience.",
        "name": "Vishal Yadav",
        "city": "Patna",
        "image": "/assets/images/avatar/vishal.jpg"
      },
      {
        "quote": "It was the best experience to be a part of Counsel India. A great initiative by the team for building people into professionals. The organization has such friendly experts and they just simplify the counselling technique to make us understand in depth.I took up Counselling Master Course from them and am fully satisfied.",
        "name": "Anand Sinha",
        "city": "Chennai",
        "image": "/assets/images/avatar/anand.jpg"
      },
      {
        "quote": "Great opportunity to explore, discover & learn topics related to psychology. Counsel India enables you to acquire relevant workspace skills and specialisations.",
        "name": "Renuka Rai",
        "city": "Mumbai",
        "image": "/assets/images/avatar/renuka.jpg"
      }
    ],
    "partners": [
      "https://www.counselindia.com/assets/images/logo/GU_logo.png",
      "https://www.counselindia.com/assets/images/logo/msu_logo.png",
      "https://www.counselindia.com/assets/images/logo/icpemci.png",
      "https://www.counselindia.com/assets/images/logo/VGU.png"
    ],
    "faqs": [
      {
        "question": "What is a Practical and activity based session?",
        "answer": [
          "a) You will love each and every class as all sessions are practically conducted and participation in psychology activities is very easy and effective. b) You will get practical exposure on how to deal with real life clients and not just cover the theory part. c) Online training sessions will also help you to understand how to take online sessions as a counsellor across the globe and not just limit your client base in your area which is a big challenge for offline mode of training."
        ]
      },
      {
        "question": "What is Marketing and branding support?",
        "answer": [
          "a) Thousands of people get to know about you with the help of marketing sessions. b) You reach to needy people by learning Marketing tactics. c) You can never get clients till the time you master the skills of marketing and self branding"
        ]
      },
      {
        "question": "What kind of Study Material I will get?",
        "answer": [
          "a) You can read notes over a soft copy at your comfort which is accessible on your phone, laptop or desktop. b) You will also receive Hard copies of the study material at your doorstep after the completion of the course for lifetime reference and support."
        ]
      },
      {
        "question": "What is Western style of learning?",
        "answer": [
          "a) You take one class every week and start applying it for the rest of your week days. b) Free yourself from the burden of being disturbed in your working schedule."
        ]
      }
    ]
  },
  "certificate-in-child-psychology": {
    "id": 2,
    "name": "Certificate in Child Psychology",
    "slug": "certificate-in-child-psychology",
    "badgeSale": "50% OFF",
    "category": "Course",
    "bgImage": "https://prod-s3.counselindia.com/courses/background_image/certificate-in-child-psychologynorm_1706710734.png",
    "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
    "description": "The Certificate in Child Psychology stands out for its comprehensive curriculum, meticulously crafted by seasoned psychologists and education experts. Participants delve into a wide spectrum of topics, ranging from developmental psychology to behavioral interventions, ensuring a well-rounded understanding of the intricacies involved in comprehending and addressing the unique needs of children. The Certificate in Child Psychology program is a gateway to a fulfilling and impactful career, where professionals contribute to the well-being and growth of the youngest members of our society. This course is supported by the Indian Council for Professional Education Mission (ICPEM) which enables Counsel India's learners to access skill-focused programs designed for immediate private sector employment, offering excellent job opportunities with strong career prospects.",
    "rating": 5,
    "enrollUrl": "https://rzp.io/rzp/X5Q7xhF",
    "phone": "+918031320449",
    "highlights": [
      {
        "title": "Duration",
        "desc": "3 Months"
      },
      {
        "title": "Eligibility",
        "desc": "12th Standard and above"
      },
      {
        "title": "Program Credits",
        "desc": "1"
      },
      {
        "title": "Program start date",
        "desc": "22 August 2026"
      }
    ],
    "benefits": [
      "The program features a meticulously designed curriculum created by experienced psychologists and education experts. It covers a wide array of topics within child psychology, ensuring a holistic understanding of the field.",
      "Emphasis is placed on practical application, with participants engaging in case studies, interactive sessions, and hands-on projects. This experiential learning approach enables them to apply theoretical knowledge to real-world scenarios.",
      "The program places a special focus on developmental psychology, enabling participants to grasp the intricacies of a child's cognitive, emotional, and social development at different stages.",
      "Learn effective behavioral interventions, equipping them with the tools to address and manage various behavioral challenges that may arise in children.",
      "Counsel India's expertise in mental well-being is seamlessly integrated into the program, providing participants with a deeper understanding of the psychological and emotional aspects of child development.",
      "The inclusion of case studies and exposure to real-world scenarios ensures that participants are well-prepared to handle the complexities of child psychology in diverse settings.",
      "Successful completion of the program results in a recognized certification, validating participants' expertise in child psychology and enhancing their credibility in the field."
    ],
    "about": [
      "The Certificate in Child Psychology stands out for its comprehensive curriculum, meticulously crafted by seasoned psychologists and education experts. Participants delve into a wide spectrum of topics, ranging from developmental psychology to behavioral interventions, ensuring a well-rounded understanding of the intricacies involved in comprehending and addressing the unique needs of children. The Certificate in Child Psychology program is a gateway to a fulfilling and impactful career, where professionals contribute to the well-being and growth of the youngest members of our society. This course is supported by the Indian Council for Professional Education Mission (ICPEM) which enables Counsel India's learners to access skill-focused programs designed for immediate private sector employment, offering excellent job opportunities with strong career prospects."
    ],
    "learningObjectives": [
      "Develop a foundational understanding of evidence-based psychological theories and counselling models.",
      "Master essential micro-skills: active listening, empathetic reflection, goal setting, and therapeutic rapport.",
      "Acquire hands-on expertise in conducting intake assessments, case conceptualization, and structured interventions."
    ],
    "credentials": [
      {
        "id": "tab147",
        "label": "CI Certificate",
        "text": "Upon completing UGC-approved programs aligned with NEP 2020 at Counsel India, receive a prestigious certificate endorsed by the Counsel, India—validating your expertise in your chosen field.",
        "image": "https://prod-s3.counselindia.com/credential/ Child Psychology_1728552794.png"
      },
      {
        "id": "tab148",
        "label": "Letter of Recommendation",
        "text": "This globally recognized credential showcases your expertise and commitment in your field.",
        "image": "https://prod-s3.counselindia.com/credential/Letter of recommendation for Jon Doe (1)_1755835717.png"
      },
      {
        "id": "tab149",
        "label": "Certificate of Specialization",
        "text": "Earn distinction with this Certificate of Specialization. Empower your career with expertise, a prized validation in your field.",
        "image": "https://prod-s3.counselindia.com/credential/Child Psychology_1727068538.jpg"
      }
    ],
    "curriculum": {
      "totalSessions": "24 Sessions",
      "totalHours": "120 hours",
      "stats": [
        {
          "count": "1",
          "text": "Program Credits"
        },
        {
          "count": "4",
          "text": "Subjects"
        },
        {
          "count": "36",
          "text": "Live Session Hours"
        },
        {
          "count": "60",
          "text": "Psychology Lab"
        },
        {
          "count": "90",
          "text": "Apprenticeship (optional)"
        }
      ],
      "modules": [
        {
          "title": "Module 1: Foundations & Theoretical Frameworks",
          "topics": [
            "Introduction to Psychology & Psychological Dynamics",
            "Major Schools of Thought (CBT, Humanistic, Psychodynamic)",
            "The Role & Ethics of a Professional Counsellor"
          ]
        },
        {
          "title": "Module 2: Practical Skills & Intervention Strategies",
          "topics": [
            "Active Listening, Empathy, & Clinical Rapport Building",
            "Identifying Distortions & Emotional Imbalances",
            "Structured Therapy Sessions & Treatment Planning"
          ]
        },
        {
          "title": "Module 3: Clinical Application & Professional Practice",
          "topics": [
            "Live Case Studies & Supervised Roleplay Practice",
            "Documentation, Ethics, & Client Confidentiality",
            "Setting Up Your Private Practice & Career Pathways"
          ]
        }
      ]
    },
    "whoCanJoin": [
      "Aspiring Counsellors & Psychology Students",
      "Mental Health Professionals & Social Workers",
      "Doctors, Nurses & Healthcare Practitioners",
      "School Teachers, Educators & Academic Mentors",
      "HR Professionals & Corporate Wellness Coaches",
      "Parents, Homemakers & Career Changers Passionate About Mental Health"
    ],
    "scholarship": {
      "title": "Scholarship & Practical Learning Support",
      "subtitle": "Guaranteed practical internship & training support under our Har Ghar Counsellor initiative.",
      "image": "https://www.counselindia.com/assets/images/about/about-13.png",
      "points": [
        {
          "label": "Direct Mentorship",
          "desc": "One-on-one supervision by senior counselling psychologists."
        },
        {
          "label": "Hands-on Practice",
          "desc": "Live case discussions and clinical roleplay sessions."
        },
        {
          "label": "Fee Assistance",
          "desc": "Flexible installment plans and merit-based fee support."
        }
      ]
    },
    "faculty": [
      {
        "name": "Dr. Bobby Archer",
        "title": "Senior Clinical Psychologist & Master Trainer",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-01.jpg"
      },
      {
        "name": "Prof. Meenakshi Sharma",
        "title": "Head of Counselling Psychology & CBT Specialist",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-02.jpg"
      }
    ],
    "referEarn": {
      "title": "Refer & Earn with Counsel India",
      "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
      "buttonText": "Refer a Friend",
      "buttonLink": "https://www.counselindia.com/membership"
    },
    "reviews": [
      {
        "quote": "The practical exposure and case discussions helped me build immense confidence in dealing with real client scenarios. The mentors are always accessible and supportive.",
        "name": "Priyanka S.",
        "city": "New Delhi",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-01.jpg"
      },
      {
        "quote": "The curriculum is thorough and grounded in real-world application. Counsel India's approach makes practical psychology understandable and actionable.",
        "name": "Rahul Verma",
        "city": "Mumbai",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-02.jpg"
      }
    ],
    "partners": [
      "https://www.counselindia.com/assets/images/logo/GU_logo.png",
      "https://www.counselindia.com/assets/images/logo/msu_logo.png",
      "https://www.counselindia.com/assets/images/logo/icpemci.png",
      "https://www.counselindia.com/assets/images/logo/VGU.png"
    ],
    "faqs": [
      {
        "question": "Can I pursue this program if I'm not from a psychology background?",
        "answer": [
          "Absolutely! Our program is designed to cater to individuals from diverse educational backgrounds. We provide comprehensive knowledge and practical skills necessary to excel in child psychology, regardless of your prior experience."
        ]
      },
      {
        "question": "What makes this program unique compared to others available in the market?",
        "answer": [
          "Our program integrates the expertise of Counsel India, renowned for its counseling and psychological services, with the academic rigor of Medhavi Skills University. This combination ensures a holistic approach to child psychology, blending theoretical knowledge with practical applications."
        ]
      },
      {
        "question": "How will this program enhance my career prospects in the field of child psychology?",
        "answer": [
          "Upon completion of the program, you'll understand child development, behavior analysis, and therapeutic interventions. This will open doors to various career opportunities such as child counselor, educational psychologist, child life specialist, or behavioral therapist."
        ]
      },
      {
        "question": "How does the curriculum address the unique challenges and needs of children in today's society?",
        "answer": [
          "Our curriculum is continuously updated to reflect the latest research and trends in child psychology. We address contemporary issues such as technology addiction, bullying, and mental health awareness, equipping you with relevant knowledge and tools to address these challenges effectively."
        ]
      },
      {
        "question": "How can I enroll in the Child Psychology Program powered by Counsel India?",
        "answer": [
          "Enrolling is easy! Simply visit our website or contact our admissions team to learn more about the program, admission requirements, and application process. We're here to assist you every step of the way in joining this transformative journey in child psychology."
        ]
      }
    ]
  },
  "advanced-certificate-in-child-psychology": {
    "id": 3,
    "name": "Advanced Certificate in Child Psychology",
    "slug": "advanced-certificate-in-child-psychology",
    "badgeSale": "50% OFF",
    "category": "Course",
    "bgImage": "https://prod-s3.counselindia.com/courses/background_image/advanced-certificate-in-child-psychology_1707116756.png",
    "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
    "description": "Gain expertise in specialized topics such as behavioral disorders, learning disabilities, and effective therapeutic interventions, setting you apart in child psychology. Understand the intricacies of child psychology with our comprehensive program designed to equip you with advanced knowledge and skills. This course is supported by the Indian Council for Professional Education Mission (ICPEM) which enables Counsel India's learners to access skill-focused programs designed for immediate private sector employment, offering excellent job opportunities with strong career prospects.",
    "rating": 5,
    "enrollUrl": "https://rzp.io/rzp/X5Q7xhF",
    "phone": "+918031320449",
    "highlights": [
      {
        "title": "Duration",
        "desc": "6 Months"
      },
      {
        "title": "Eligibility",
        "desc": "Graduation & Above"
      },
      {
        "title": "Program Credits",
        "desc": "2 Points"
      },
      {
        "title": "Program Start Date",
        "desc": "22 August 2026"
      }
    ],
    "benefits": [
      "Psychological theories covered: psychodynamic, cognitive-behavioral, humanistic, and systemic approaches.",
      "Counseling techniques taught: active listening, empathy building, reflective questioning, etc.",
      "Clinical assessment methods: intake interviews, mental status examinations, etc.",
      "Emphasis on building a therapeutic alliance: trust, empathy, rapport, and boundaries.",
      "Study of psychological disorders: mood disorders, anxiety disorders, etc.",
      "Exploration of cultural diversity: cultural competence, sensitivity, awareness."
    ],
    "about": [
      "Gain expertise in specialized topics such as behavioral disorders, learning disabilities, and effective therapeutic interventions, setting you apart in child psychology. Understand the intricacies of child psychology with our comprehensive program designed to equip you with advanced knowledge and skills. This course is supported by the Indian Council for Professional Education Mission (ICPEM) which enables Counsel India's learners to access skill-focused programs designed for immediate private sector employment, offering excellent job opportunities with strong career prospects."
    ],
    "learningObjectives": [
      "Develop a foundational understanding of evidence-based psychological theories and counselling models.",
      "Master essential micro-skills: active listening, empathetic reflection, goal setting, and therapeutic rapport.",
      "Acquire hands-on expertise in conducting intake assessments, case conceptualization, and structured interventions."
    ],
    "credentials": [
      {
        "id": "tab143",
        "label": "CI Advanced Certificate",
        "text": "Upon completing UGC-approved programs aligned with NEP 2020 at Counsel India, receive a prestigious certificate endorsed by the Counsel, India—validating your expertise in your chosen field.",
        "image": "https://prod-s3.counselindia.com/credential/Advanced Certificate in Child Psychology_1728552855.png"
      },
      {
        "id": "tab144",
        "label": "Letter of Recommendation",
        "text": "Official Letter of Recommendation awarded upon successful completion of the course and practical assessments.",
        "image": "https://www.counselindia.com/assets/images/certificate/certificate.png"
      },
      {
        "id": "tab145",
        "label": "Certificate of Specialization",
        "text": "Earn distinction with this Certificate of Specialization. Empower your career with expertise, a prized validation in your field.",
        "image": "https://prod-s3.counselindia.com/credential/Advanced Child Psychology_1727068369.jpg"
      }
    ],
    "curriculum": {
      "totalSessions": "60 Sessions",
      "totalHours": "570 hours",
      "stats": [
        {
          "count": "2",
          "text": "Program Credits"
        },
        {
          "count": "5",
          "text": "Subjects"
        },
        {
          "count": "120",
          "text": "Live Session Hours"
        },
        {
          "count": "180",
          "text": "Project Hours"
        },
        {
          "count": "270",
          "text": "OJL Hours"
        },
        {
          "count": "1",
          "text": "Project"
        }
      ],
      "modules": [
        {
          "title": "Module 1: Foundations & Theoretical Frameworks",
          "topics": [
            "Introduction to Psychology & Psychological Dynamics",
            "Major Schools of Thought (CBT, Humanistic, Psychodynamic)",
            "The Role & Ethics of a Professional Counsellor"
          ]
        },
        {
          "title": "Module 2: Practical Skills & Intervention Strategies",
          "topics": [
            "Active Listening, Empathy, & Clinical Rapport Building",
            "Identifying Distortions & Emotional Imbalances",
            "Structured Therapy Sessions & Treatment Planning"
          ]
        },
        {
          "title": "Module 3: Clinical Application & Professional Practice",
          "topics": [
            "Live Case Studies & Supervised Roleplay Practice",
            "Documentation, Ethics, & Client Confidentiality",
            "Setting Up Your Private Practice & Career Pathways"
          ]
        }
      ]
    },
    "whoCanJoin": [
      "Aspiring Counsellors & Psychology Students",
      "Mental Health Professionals & Social Workers",
      "Doctors, Nurses & Healthcare Practitioners",
      "School Teachers, Educators & Academic Mentors",
      "HR Professionals & Corporate Wellness Coaches",
      "Parents, Homemakers & Career Changers Passionate About Mental Health"
    ],
    "scholarship": {
      "title": "Scholarship & Practical Learning Support",
      "subtitle": "Guaranteed practical internship & training support under our Har Ghar Counsellor initiative.",
      "image": "https://www.counselindia.com/assets/images/about/about-13.png",
      "points": [
        {
          "label": "Direct Mentorship",
          "desc": "One-on-one supervision by senior counselling psychologists."
        },
        {
          "label": "Hands-on Practice",
          "desc": "Live case discussions and clinical roleplay sessions."
        },
        {
          "label": "Fee Assistance",
          "desc": "Flexible installment plans and merit-based fee support."
        }
      ]
    },
    "faculty": [
      {
        "name": "Dr. Bobby Archer",
        "title": "Senior Clinical Psychologist & Master Trainer",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-01.jpg"
      },
      {
        "name": "Prof. Meenakshi Sharma",
        "title": "Head of Counselling Psychology & CBT Specialist",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-02.jpg"
      }
    ],
    "referEarn": {
      "title": "Refer & Earn with Counsel India",
      "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
      "buttonText": "Refer a Friend",
      "buttonLink": "https://www.counselindia.com/membership"
    },
    "reviews": [
      {
        "quote": "The practical exposure and case discussions helped me build immense confidence in dealing with real client scenarios. The mentors are always accessible and supportive.",
        "name": "Priyanka S.",
        "city": "New Delhi",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-01.jpg"
      },
      {
        "quote": "The curriculum is thorough and grounded in real-world application. Counsel India's approach makes practical psychology understandable and actionable.",
        "name": "Rahul Verma",
        "city": "Mumbai",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-02.jpg"
      }
    ],
    "partners": [
      "https://www.counselindia.com/assets/images/logo/GU_logo.png",
      "https://www.counselindia.com/assets/images/logo/msu_logo.png",
      "https://www.counselindia.com/assets/images/logo/icpemci.png",
      "https://www.counselindia.com/assets/images/logo/VGU.png"
    ],
    "faqs": [
      {
        "question": "How does this program incorporate the latest research findings and evidence-based practices in child psychology?",
        "answer": [
          "Our program integrates cutting-edge research and evidence-based practices into the curriculum, ensuring that students are equipped with the most up-to-date knowledge and skills in child psychology. Faculty members are actively engaged in research and bring their expertise into the classroom to enrich students' learning experience."
        ]
      },
      {
        "question": "How does this program prepare graduates to address the mental health needs of children in today's complex world?",
        "answer": [
          "Our program provides training in evidence-based assessment and intervention techniques to address a wide range of mental health issues affecting children, including anxiety, depression, trauma, behavioral disorders, and developmental disabilities. Students learn how to collaborate with families, educators, and other professionals to provide comprehensive support for children's mental well-being"
        ]
      },
      {
        "question": "What career pathways can I pursue after completing this program?",
        "answer": [
          "Graduates of the Advanced Certification in Child Psychology program can pursue various career paths, including roles as child psychologists, school counselors, behavior analysts, child life specialists, and researchers in educational, clinical, healthcare, and social service settings."
        ]
      },
      {
        "question": "What opportunities are available for hands-on experience in child psychology during the program?",
        "answer": [
          "Students can gain practical experience through supervised internships, clinical placements, and applied projects in settings such as schools, clinics, hospitals, and community organizations. They work directly with children and families, applying evidence-based interventions and assessment techniques under the guidance of experienced professionals."
        ]
      },
      {
        "question": "Can the credits earned in this program be transferred to other academic programs or institutions?",
        "answer": [
          "Yes, our program follows a stackable system of education, allowing students to earn credits that may be transferable to other academic programs or institutions. This flexibility enables students to build upon their existing qualifications and pursue further education or specialization in Child Psychology."
        ]
      }
    ]
  },
  "pg-diploma-in-counselling-psychology-clinical-skills": {
    "id": 4,
    "name": "PG Diploma in Counselling Psychology & Clinical Skills",
    "slug": "pg-diploma-in-counselling-psychology-clinical-skills",
    "badgeSale": "50% OFF",
    "category": "Course",
    "bgImage": "https://prod-s3.counselindia.com/courses/background_image/Counselling psychology and clinical skills_1722430554.jpg",
    "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
    "description": "The PG Diploma in Counselling Psychology & Clinical Skills at Counsel India offers a holistic, one-year program bringing together theoretical knowledge with hands-on clinical training.",
    "rating": 5,
    "enrollUrl": "https://rzp.io/rzp/X5Q7xhF",
    "phone": "+918031320449",
    "highlights": [
      {
        "title": "Duration",
        "desc": "12 Months"
      },
      {
        "title": "Eligiblity",
        "desc": "Graduation and above"
      },
      {
        "title": "Program Credits",
        "desc": "20"
      },
      {
        "title": "Program Start Date",
        "desc": "22 August 2026"
      }
    ],
    "benefits": [
      "Live Interactive Classes by Senior Psychologists & Industry Experts",
      "Supervised Case Discussions & Hands-on Clinical Roleplay",
      "Practical Assessment Tools & Psychological Test Training",
      "1-on-1 Mentorship and Career Guidance Support",
      "Lifetime Access to Alumni Network and Community Forums",
      "Recognized Certification with National & International Accreditations"
    ],
    "about": [
      "The PG Diploma in Counselling Psychology & Clinical Skills at Counsel India offers a holistic, one-year program bringing together theoretical knowledge with hands-on clinical training."
    ],
    "learningObjectives": [
      "Develop a foundational understanding of evidence-based psychological theories and counselling models.",
      "Master essential micro-skills: active listening, empathetic reflection, goal setting, and therapeutic rapport.",
      "Acquire hands-on expertise in conducting intake assessments, case conceptualization, and structured interventions."
    ],
    "credentials": [
      {
        "id": "tab177",
        "label": "Certificate of Completion",
        "text": "Official Certificate of Completion awarded upon successful completion of the course and practical assessments.",
        "image": "https://www.counselindia.com/assets/images/certificate/certificate.png"
      },
      {
        "id": "tab176",
        "label": "Letter of Recommendation",
        "text": "This Letter of Recommendation acknowledges your successful completion of this program, demonstrating exceptional commitment and skill in your field. This certificate reflects the high standards and rigorous training of this program.",
        "image": "https://prod-s3.counselindia.com/credential/Letter of recommendation for Jon Doe (1)_1755835619.png"
      }
    ],
    "curriculum": {
      "totalSessions": "14 Sessions",
      "totalHours": "1100+ Hours",
      "stats": [
        {
          "count": "20",
          "text": "Program Credits"
        },
        {
          "count": "12",
          "text": "Modules"
        },
        {
          "count": "570",
          "text": "Live Session Hours"
        },
        {
          "count": "120",
          "text": "Project Hours"
        },
        {
          "count": "270",
          "text": "OJL Hours"
        }
      ],
      "modules": [
        {
          "title": "Module 1: Foundations & Theoretical Frameworks",
          "topics": [
            "Introduction to Psychology & Psychological Dynamics",
            "Major Schools of Thought (CBT, Humanistic, Psychodynamic)",
            "The Role & Ethics of a Professional Counsellor"
          ]
        },
        {
          "title": "Module 2: Practical Skills & Intervention Strategies",
          "topics": [
            "Active Listening, Empathy, & Clinical Rapport Building",
            "Identifying Distortions & Emotional Imbalances",
            "Structured Therapy Sessions & Treatment Planning"
          ]
        },
        {
          "title": "Module 3: Clinical Application & Professional Practice",
          "topics": [
            "Live Case Studies & Supervised Roleplay Practice",
            "Documentation, Ethics, & Client Confidentiality",
            "Setting Up Your Private Practice & Career Pathways"
          ]
        }
      ]
    },
    "whoCanJoin": [
      "Aspiring Counsellors & Psychology Students",
      "Mental Health Professionals & Social Workers",
      "Doctors, Nurses & Healthcare Practitioners",
      "School Teachers, Educators & Academic Mentors",
      "HR Professionals & Corporate Wellness Coaches",
      "Parents, Homemakers & Career Changers Passionate About Mental Health"
    ],
    "scholarship": {
      "title": "Scholarship & Practical Learning Support",
      "subtitle": "Guaranteed practical internship & training support under our Har Ghar Counsellor initiative.",
      "image": "https://www.counselindia.com/assets/images/about/about-13.png",
      "points": [
        {
          "label": "Direct Mentorship",
          "desc": "One-on-one supervision by senior counselling psychologists."
        },
        {
          "label": "Hands-on Practice",
          "desc": "Live case discussions and clinical roleplay sessions."
        },
        {
          "label": "Fee Assistance",
          "desc": "Flexible installment plans and merit-based fee support."
        }
      ]
    },
    "faculty": [
      {
        "name": "Dr. Bobby Archer",
        "title": "Senior Clinical Psychologist & Master Trainer",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-01.jpg"
      },
      {
        "name": "Prof. Meenakshi Sharma",
        "title": "Head of Counselling Psychology & CBT Specialist",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-02.jpg"
      }
    ],
    "referEarn": {
      "title": "Refer & Earn with Counsel India",
      "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
      "buttonText": "Refer a Friend",
      "buttonLink": "https://www.counselindia.com/membership"
    },
    "reviews": [
      {
        "quote": "The practical exposure and case discussions helped me build immense confidence in dealing with real client scenarios. The mentors are always accessible and supportive.",
        "name": "Priyanka S.",
        "city": "New Delhi",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-01.jpg"
      },
      {
        "quote": "The curriculum is thorough and grounded in real-world application. Counsel India's approach makes practical psychology understandable and actionable.",
        "name": "Rahul Verma",
        "city": "Mumbai",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-02.jpg"
      }
    ],
    "partners": [
      "https://www.counselindia.com/assets/images/logo/GU_logo.png",
      "https://www.counselindia.com/assets/images/logo/msu_logo.png",
      "https://www.counselindia.com/assets/images/logo/icpemci.png",
      "https://www.counselindia.com/assets/images/logo/VGU.png"
    ],
    "faqs": [
      {
        "question": "Is it mandatory to complete the Psychology Foundation Course, and what are the details?",
        "answer": [
          "Yes, completing the Psychology Foundation Course is mandatory and complimentary for all enrolled learners. This foundational course must be completed within 3 months to qualify for the final certificate. It is designed to strengthen your basics in psychology, ensuring you have a solid understanding to excel in advanced modules of the program."
        ]
      },
      {
        "question": "What is Marketing and branding support?",
        "answer": [
          "a) Thousands of people get to know about you with the help of marketing sessions. b) You reach to needy people by learning Marketing tactics. c) You can never get clients till the time you master the skills of marketing and self branding"
        ]
      },
      {
        "question": "What kind of Study Material I will get?",
        "answer": [
          "a) You can read notes over a soft copy at your comfort which is accessible on your phone, laptop or desktop. b) You will also receive Hard copies of the study material at your doorstep after the completion of the course for lifetime reference and support."
        ]
      }
    ]
  },
  "business-growth-master-course": {
    "id": 5,
    "name": "Business Growth Master Course",
    "slug": "business-growth-master-course",
    "badgeSale": "50% OFF",
    "category": "Course",
    "bgImage": "https://prod-s3.counselindia.com/courses/background_image/Untitled design-19_1727090924.png",
    "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
    "description": "Are you a psychologist, counsellor or mental health professional with the skills to transform lives but struggling to grow your practice? In this action-packed course, you’ll master the entrepreneurial, marketing and business strategies to attract more clients, increase your reach, and scale your venture. Learn how to build a brand that resonates with your audience and implement proven techniques to stand out in a crowded market.",
    "rating": 5,
    "enrollUrl": "https://rzp.io/rzp/X5Q7xhF",
    "phone": "+918031320449",
    "highlights": [
      {
        "title": "Duration",
        "desc": "3 Month"
      },
      {
        "title": "Format",
        "desc": "Online Live Instructor Led Classes"
      },
      {
        "title": "Delivery Model",
        "desc": "Online"
      },
      {
        "title": "Credentials",
        "desc": "Certificate of Completion"
      },
      {
        "title": "Core Modules",
        "desc": "8 Modules"
      }
    ],
    "benefits": [
      "Live Interactive Classes by Senior Psychologists & Industry Experts",
      "Supervised Case Discussions & Hands-on Clinical Roleplay",
      "Practical Assessment Tools & Psychological Test Training",
      "1-on-1 Mentorship and Career Guidance Support",
      "Lifetime Access to Alumni Network and Community Forums",
      "Recognized Certification with National & International Accreditations"
    ],
    "about": [
      "Are you a psychologist, counsellor or mental health professional with the skills to transform lives but struggling to grow your practice? In this action-packed course, you’ll master the entrepreneurial, marketing and business strategies to attract more clients, increase your reach, and scale your venture. Learn how to build a brand that resonates with your audience and implement proven techniques to stand out in a crowded market."
    ],
    "learningObjectives": [
      "100+ AI Tools Training for Marketing",
      "Automate your marketing process",
      "Understand the basics of marketing psychology and how to position your services.",
      "Learn how to build a personal brand that establishes authority and trust.",
      "Master digital marketing strategies like social media, email marketing, and search engine optimization (SEO) to reach a larger audience.",
      "Develop business skills such as pricing, creating packages, and financial management for a thriving practice.",
      "Create a sustainable client acquisition funnel to ensure consistent growth.",
      "Implement networking and collaboration strategies to expand your reach."
    ],
    "credentials": [
      {
        "id": "tab192",
        "label": "Certificate of Completion",
        "text": "This certificate honors your dedication, hard work, and mastery of essential skills and specializations. It celebrates your commitment to excellence and acknowledges your achievement in making a meaningful impact in your field moving forward.",
        "image": "https://prod-s3.counselindia.com/credential/ CMC - Intermediate-4_1728552416.png"
      }
    ],
    "curriculum": {
      "totalSessions": "12 Sessions",
      "totalHours": "3 months",
      "stats": [
        {
          "count": "Projects",
          "text": "3"
        },
        {
          "count": "Live Session Hours",
          "text": "30 Hours"
        },
        {
          "count": "Project Hours",
          "text": "30 Hours"
        }
      ],
      "modules": [
        {
          "title": "Module 1: Foundations & Theoretical Frameworks",
          "topics": [
            "Introduction to Psychology & Psychological Dynamics",
            "Major Schools of Thought (CBT, Humanistic, Psychodynamic)",
            "The Role & Ethics of a Professional Counsellor"
          ]
        },
        {
          "title": "Module 2: Practical Skills & Intervention Strategies",
          "topics": [
            "Active Listening, Empathy, & Clinical Rapport Building",
            "Identifying Distortions & Emotional Imbalances",
            "Structured Therapy Sessions & Treatment Planning"
          ]
        },
        {
          "title": "Module 3: Clinical Application & Professional Practice",
          "topics": [
            "Live Case Studies & Supervised Roleplay Practice",
            "Documentation, Ethics, & Client Confidentiality",
            "Setting Up Your Private Practice & Career Pathways"
          ]
        }
      ]
    },
    "whoCanJoin": [
      "Aspiring Counsellors & Psychology Students",
      "Mental Health Professionals & Social Workers",
      "Doctors, Nurses & Healthcare Practitioners",
      "School Teachers, Educators & Academic Mentors",
      "HR Professionals & Corporate Wellness Coaches",
      "Parents, Homemakers & Career Changers Passionate About Mental Health"
    ],
    "scholarship": {
      "title": "Scholarship & Practical Learning Support",
      "subtitle": "Guaranteed practical internship & training support under our Har Ghar Counsellor initiative.",
      "image": "https://www.counselindia.com/assets/images/about/about-13.png",
      "points": [
        {
          "label": "Direct Mentorship",
          "desc": "One-on-one supervision by senior counselling psychologists."
        },
        {
          "label": "Hands-on Practice",
          "desc": "Live case discussions and clinical roleplay sessions."
        },
        {
          "label": "Fee Assistance",
          "desc": "Flexible installment plans and merit-based fee support."
        }
      ]
    },
    "faculty": [
      {
        "name": "Dr. Bobby Archer",
        "title": "Senior Clinical Psychologist & Master Trainer",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-01.jpg"
      },
      {
        "name": "Prof. Meenakshi Sharma",
        "title": "Head of Counselling Psychology & CBT Specialist",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-02.jpg"
      }
    ],
    "referEarn": {
      "title": "Refer & Earn with Counsel India",
      "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
      "buttonText": "Refer a Friend",
      "buttonLink": "https://www.counselindia.com/membership"
    },
    "reviews": [
      {
        "quote": "The practical exposure and case discussions helped me build immense confidence in dealing with real client scenarios. The mentors are always accessible and supportive.",
        "name": "Priyanka S.",
        "city": "New Delhi",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-01.jpg"
      },
      {
        "quote": "The curriculum is thorough and grounded in real-world application. Counsel India's approach makes practical psychology understandable and actionable.",
        "name": "Rahul Verma",
        "city": "Mumbai",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-02.jpg"
      }
    ],
    "partners": [
      "https://www.counselindia.com/assets/images/logo/GU_logo.png",
      "https://www.counselindia.com/assets/images/logo/msu_logo.png",
      "https://www.counselindia.com/assets/images/logo/icpemci.png",
      "https://www.counselindia.com/assets/images/logo/VGU.png"
    ],
    "faqs": [
      {
        "question": "Understanding Marketing Psychology for Mental Health Services",
        "answer": [
          "a) Thousands of people get to know about you with the help of marketing sessions. b) You reach to needy people by learning Marketing tactics. c) You can never get clients till the time you master the skills of marketing and self branding"
        ]
      },
      {
        "question": "Will I receive a certification upon completion?",
        "answer": [
          "Yes, absolutely! Upon the successful completion of our enriching bootcamp, each attendee will be presented with a prestigious certification of completion. This certificate serves as an acknowledgment of your dedicated participation and the mastery you've achieved in honing your counselling skills throughout the session."
        ]
      },
      {
        "question": "What if I have a busy schedule?",
        "answer": [
          "We understand! Our course offers flexible learning options to accommodate your busy lifestyle. You can choose from various schedules and formats to fit your needs."
        ]
      },
      {
        "question": "What kind of practical experience will I gain?",
        "answer": [
          "You'll gain invaluable experience through supervised internships where you'll work directly with clients in real-world scenarios. This hands-on approach ensures that you not only learn the theory but also develop the practical skills needed to handle various counselling situations effectively. Think of it as a launchpad for your counselling career!"
        ]
      },
      {
        "question": "How flexible is the program for working professionals?",
        "answer": [
          "We understand the demands of a busy schedule, so our program is designed with flexibility in mind. You can choose from online classes, evening sessions, and weekend workshops, allowing you to balance your work and studies without missing a beat. It’s all about fitting your education into your life, not the other way around."
        ]
      },
      {
        "question": "Can students expect to receive practical training in evidence-based therapeutic techniques?",
        "answer": [
          "Yes, the program emphasizes the application of evidence-based therapeutic approaches such as cognitive-behavioral therapy (CBT), psychodynamic therapy, mindfulness-based interventions, and solution-focused therapy. Students receive practical training in these techniques through coursework, supervised clinical practice, and experiential learning opportunities."
        ]
      }
    ]
  },
  "masters-in-psychology-work-integrated-skill-based-program": {
    "id": 6,
    "name": "Masters in Psychology",
    "slug": "masters-in-psychology-work-integrated-skill-based-program",
    "badgeSale": "40% OFF",
    "category": "Course",
    "bgImage": "https://prod-s3.counselindia.com/courses/background_image/MA Psychology_1728647201.jpg",
    "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
    "description": "(Internship/Apprenticeship Embedded) - Our Masters in Psychology program is designed to help you understand human behavior more effectively, look at the mental processes, and comprehend emotional well-being. With advanced coursework ensuring the highest standards, hands-on training, and research potential, you will gain the skills needed to succeed in diverse areas of psychology, such as counselling and organizational behavior. Explore the complexities of the human mind and build a rewarding career in psychology. This course, In partnership with IPA(International Psychology Association) & Skill India, provides you a strong foundation for a successful career in mental health.",
    "rating": 5,
    "enrollUrl": "https://rzp.io/rzp/X5Q7xhF",
    "phone": "+918031320449",
    "highlights": [
      {
        "title": "Eligibility",
        "desc": "Graduation & above"
      },
      {
        "title": "Duration",
        "desc": "24 Months"
      },
      {
        "title": "Semesters",
        "desc": "4"
      },
      {
        "title": "Program Credits",
        "desc": "Standard"
      },
      {
        "title": "Program Start Date",
        "desc": "22 August 2026"
      }
    ],
    "benefits": [
      "Comprehensive Curriculum: The program offers a broad study of psychology, covering key areas such as clinical psychology, counseling, organizational behavior, and psychological research. Students will gain both foundational knowledge and advanced insights, preparing them to excel in various fields of psychology.",
      "Expert-Led Classes: Classes are delivered by seasoned psychologists and industry professionals who bring their practical experiences into the classroom, ensuring students receive an education that is both academically robust and relevant to the modern psychological landscape.",
      "Hands-On Training: Students will engage in practical experiences through internships, live case studies, and hands-on workshops. This real-world training equips them with essential skills to apply psychological theories and methods in clinical, organizational, and research settings.",
      "Research Opportunities: The program provides multiple opportunities for students to undertake advanced research projects. These projects help students develop critical thinking, problem-solving skills, and a deeper understanding of psychological phenomena, preparing them for future roles in academia, research, or professional practice.",
      "Career-Ready Skills: Graduates will emerge with skills essential for careers in mental health counseling, clinical psychology, corporate psychology, and academic research. The program emphasizes psychological assessments, therapy techniques, and organizational behavior analysis to ensure students are ready for a diverse range of professional roles.",
      "Specialization Options: Students can personalize their education by selecting from various specializations in psychology, such as clinical counseling, corporate psychology, or advanced research. This allows them to focus on areas that align with their career goals and interests.",
      "Focus on Practical Application: Beyond theory, the program stresses practical application, equipping students to address real-world mental health challenges, improve organizational performance, and contribute to psychological research. Case-based learning ensures students can immediately apply what they learn.",
      "Academic Bank of Credits (ABC): The program follows UGC guidelines and allows students to earn credit points that can be added to their Academic Bank of Credits (ABC). This feature gives students the flexibility to accumulate, store, and transfer their credits across institutions, making the learning process more adaptable to their professional and academic growth.",
      "Credit Points: Each course within the program earns students valuable credit points that contribute toward their overall degree. These points can be used to build their Academic Bank of Credits, enabling them to continue their education in other UGC-approved programs or institutions if they choose to pursue further studies.",
      "Flexible Learning Environment: The MA in Psychology offers a blend of online and on-campus learning options, accommodating the needs of working professionals and full-time students. Interactive workshops, peer discussions, and hands-on projects make learning engaging and practical."
    ],
    "about": [
      "(Internship/Apprenticeship Embedded) - Our Masters in Psychology program is designed to help you understand human behavior more effectively, look at the mental processes, and comprehend emotional well-being. With advanced coursework ensuring the highest standards, hands-on training, and research potential, you will gain the skills needed to succeed in diverse areas of psychology, such as counselling and organizational behavior. Explore the complexities of the human mind and build a rewarding career in psychology. This course, In partnership with IPA(International Psychology Association) & Skill India, provides you a strong foundation for a successful career in mental health."
    ],
    "learningObjectives": [
      "Develop a foundational understanding of evidence-based psychological theories and counselling models.",
      "Master essential micro-skills: active listening, empathetic reflection, goal setting, and therapeutic rapport.",
      "Acquire hands-on expertise in conducting intake assessments, case conceptualization, and structured interventions."
    ],
    "credentials": [
      {
        "id": "tab201",
        "label": "IPA certificate",
        "text": "Upon successful completion of the course, you will be awarded a prestigious certificate from IPA( International Psychology Association)",
        "image": "https://prod-s3.counselindia.com/credential/Screenshot 2025-08-04 114105_1754288577.png"
      },
      {
        "id": "tab204",
        "label": "MEPSC Certificate",
        "text": "After the successful training and assessment, the Management & Entrepreneurship and Professionals Skills Council (MEPSC) will issue a skill certificate, add your database in the central skills qualification database which can be accessed online for verification and due-diligence by employers. This skills certification will be valid across all G20 nations.",
        "image": "https://prod-s3.counselindia.com/credential/Certificate Template - Job Role (1)_1753183761.jpg"
      },
      {
        "id": "tab195",
        "label": "Certificate of Completion",
        "text": "This certificate honors your dedication, hard work, and mastery of essential skills and specializations. It celebrates your commitment to excellence and acknowledges your achievement in making a meaningful impact in your field moving forward.",
        "image": "https://prod-s3.counselindia.com/credential/Advanced Certificate in Child Psychology-2_1728648469.png"
      },
      {
        "id": "tab196",
        "label": "Letter of Recommendation",
        "text": "This globally recognized credential showcases your expertise and commitment in your field",
        "image": "https://prod-s3.counselindia.com/credential/Letter of recommendation for Jon Doe (1)_1755835833.png"
      }
    ],
    "curriculum": {
      "totalSessions": "320 Sessions",
      "totalHours": "2160 hr",
      "stats": [
        {
          "count": "Program Credits",
          "text": "Standard"
        },
        {
          "count": "Subjects",
          "text": "20"
        },
        {
          "count": "Live Session Hours",
          "text": "375"
        },
        {
          "count": "Project Hours",
          "text": "480"
        },
        {
          "count": "OJL Hours",
          "text": "900"
        },
        {
          "count": "Projects",
          "text": "4"
        }
      ],
      "modules": [
        {
          "title": "Module 1: Foundations & Theoretical Frameworks",
          "topics": [
            "Introduction to Psychology & Psychological Dynamics",
            "Major Schools of Thought (CBT, Humanistic, Psychodynamic)",
            "The Role & Ethics of a Professional Counsellor"
          ]
        },
        {
          "title": "Module 2: Practical Skills & Intervention Strategies",
          "topics": [
            "Active Listening, Empathy, & Clinical Rapport Building",
            "Identifying Distortions & Emotional Imbalances",
            "Structured Therapy Sessions & Treatment Planning"
          ]
        },
        {
          "title": "Module 3: Clinical Application & Professional Practice",
          "topics": [
            "Live Case Studies & Supervised Roleplay Practice",
            "Documentation, Ethics, & Client Confidentiality",
            "Setting Up Your Private Practice & Career Pathways"
          ]
        }
      ]
    },
    "whoCanJoin": [
      "Aspiring Counsellors & Psychology Students",
      "Mental Health Professionals & Social Workers",
      "Doctors, Nurses & Healthcare Practitioners",
      "School Teachers, Educators & Academic Mentors",
      "HR Professionals & Corporate Wellness Coaches",
      "Parents, Homemakers & Career Changers Passionate About Mental Health"
    ],
    "scholarship": {
      "title": "Scholarship & Practical Learning Support",
      "subtitle": "Guaranteed practical internship & training support under our Har Ghar Counsellor initiative.",
      "image": "https://www.counselindia.com/assets/images/about/about-13.png",
      "points": [
        {
          "label": "Direct Mentorship",
          "desc": "One-on-one supervision by senior counselling psychologists."
        },
        {
          "label": "Hands-on Practice",
          "desc": "Live case discussions and clinical roleplay sessions."
        },
        {
          "label": "Fee Assistance",
          "desc": "Flexible installment plans and merit-based fee support."
        }
      ]
    },
    "faculty": [
      {
        "name": "Dr. Bobby Archer",
        "title": "Senior Clinical Psychologist & Master Trainer",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-01.jpg"
      },
      {
        "name": "Prof. Meenakshi Sharma",
        "title": "Head of Counselling Psychology & CBT Specialist",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-02.jpg"
      }
    ],
    "referEarn": {
      "title": "Refer & Earn with Counsel India",
      "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
      "buttonText": "Refer a Friend",
      "buttonLink": "https://www.counselindia.com/membership"
    },
    "reviews": [
      {
        "quote": "The practical exposure and case discussions helped me build immense confidence in dealing with real client scenarios. The mentors are always accessible and supportive.",
        "name": "Priyanka S.",
        "city": "New Delhi",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-01.jpg"
      },
      {
        "quote": "The curriculum is thorough and grounded in real-world application. Counsel India's approach makes practical psychology understandable and actionable.",
        "name": "Rahul Verma",
        "city": "Mumbai",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-02.jpg"
      }
    ],
    "partners": [
      "https://www.counselindia.com/assets/images/logo/GU_logo.png",
      "https://www.counselindia.com/assets/images/logo/msu_logo.png",
      "https://www.counselindia.com/assets/images/logo/icpemci.png",
      "https://www.counselindia.com/assets/images/logo/VGU.png"
    ],
    "faqs": [
      {
        "question": "Introduction to Human Psychology",
        "answer": [
          "Yes, completing the Psychology Foundation Course is mandatory and complimentary for all enrolled learners. This foundational course must be completed within 3 months to qualify for the final certificate. It is designed to strengthen your basics in psychology, ensuring you have a solid understanding to excel in advanced modules of the program."
        ]
      },
      {
        "question": "What career opportunities can I pursue after completing this program?",
        "answer": [
          "Graduates of the MA in Psychology program can pursue various careers in fields such as counseling, clinical psychology, human resources, organizational behavior, mental health advocacy, and research. Many graduates also choose to continue their education by pursuing doctoral degrees in psychology or related disciplines."
        ]
      },
      {
        "question": "⁠Will I have the opportunity to gain practical experience during the program?",
        "answer": [
          "Yes, the MA in Psychology program often includes practical training components such as internships, practicum placements, or supervised research projects. These opportunities allow students to apply their theoretical knowledge in real-world settings and gain valuable hands-on experience."
        ]
      },
      {
        "question": "⁠Is the program accredited, and will it meet licensure requirements?",
        "answer": [
          "The accreditation status of the Masters in Psychology program may vary by institution. It’s essential to verify that the program is accredited by a recognized accrediting body. Additionally, while many programs provide a strong foundation for licensure, specific licensure requirements vary by state or country, so it's important to research the requirements in your desired location."
        ]
      }
    ]
  },
  "masters-in-clinical-psychology": {
    "id": 7,
    "name": "Masters In Clinical Psychology",
    "slug": "masters-in-clinical-psychology",
    "badgeSale": "40% OFF",
    "category": "Course",
    "bgImage": "https://prod-s3.counselindia.com/courses/background_image/ma2_1784655771.jpg",
    "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
    "description": "(Internship/Apprenticeship Embedded) - Our Masters In Clinical Psychology program is designed to help you understand human behavior more effectively, look at the mental processes, and comprehend emotional well-being. With advanced coursework ensuring the highest standards, hands-on training, and research potential, you will gain the skills needed to succeed in diverse areas of psychology, such as counselling and organizational behavior. Explore the complexities of the human mind and build a rewarding career in psychology. This course, In partnership with IPA(International Psychology Association) & Skill India, provides you a strong foundation for a successful career in mental health.",
    "rating": 5,
    "enrollUrl": "https://rzp.io/rzp/X5Q7xhF",
    "phone": "+918031320449",
    "highlights": [
      {
        "title": "Eligibility",
        "desc": "Graduation & Above"
      },
      {
        "title": "Duration",
        "desc": "24 Months"
      },
      {
        "title": "Semesters",
        "desc": "4"
      },
      {
        "title": "Program Credits",
        "desc": "Standard"
      },
      {
        "title": "Program Start Date",
        "desc": "22 August 2026"
      }
    ],
    "benefits": [
      "Live Interactive Classes by Senior Psychologists & Industry Experts",
      "Supervised Case Discussions & Hands-on Clinical Roleplay",
      "Practical Assessment Tools & Psychological Test Training",
      "1-on-1 Mentorship and Career Guidance Support",
      "Lifetime Access to Alumni Network and Community Forums",
      "Recognized Certification with National & International Accreditations"
    ],
    "about": [
      "(Internship/Apprenticeship Embedded) - Our Masters In Clinical Psychology program is designed to help you understand human behavior more effectively, look at the mental processes, and comprehend emotional well-being. With advanced coursework ensuring the highest standards, hands-on training, and research potential, you will gain the skills needed to succeed in diverse areas of psychology, such as counselling and organizational behavior. Explore the complexities of the human mind and build a rewarding career in psychology. This course, In partnership with IPA(International Psychology Association) & Skill India, provides you a strong foundation for a successful career in mental health."
    ],
    "learningObjectives": [
      "Develop a foundational understanding of evidence-based psychological theories and counselling models.",
      "Master essential micro-skills: active listening, empathetic reflection, goal setting, and therapeutic rapport.",
      "Acquire hands-on expertise in conducting intake assessments, case conceptualization, and structured interventions."
    ],
    "credentials": [
      {
        "id": "tab1",
        "label": "CI Certificate",
        "text": "Authorized Certificate awarded by Counsel India verifying core counselling competency and hours completed.",
        "image": "https://www.counselindia.com/assets/images/certificate/certificate.png"
      },
      {
        "id": "tab2",
        "label": "Letter of Recommendation",
        "text": "Personalized Letter of Recommendation for top performing learners to bolster higher education and clinical applications.",
        "image": "https://www.counselindia.com/assets/images/certificate/certificate.png"
      }
    ],
    "curriculum": {
      "totalSessions": "320 Sessions",
      "totalHours": "2160 hr",
      "stats": [
        {
          "count": "Standard",
          "text": "Program Credits"
        },
        {
          "count": "20",
          "text": "Subjects"
        },
        {
          "count": "375",
          "text": "Live Session Hours"
        },
        {
          "count": "900",
          "text": "OJL Hours"
        },
        {
          "count": "4",
          "text": "Projects"
        }
      ],
      "modules": [
        {
          "title": "Module 1: Foundations & Theoretical Frameworks",
          "topics": [
            "Introduction to Psychology & Psychological Dynamics",
            "Major Schools of Thought (CBT, Humanistic, Psychodynamic)",
            "The Role & Ethics of a Professional Counsellor"
          ]
        },
        {
          "title": "Module 2: Practical Skills & Intervention Strategies",
          "topics": [
            "Active Listening, Empathy, & Clinical Rapport Building",
            "Identifying Distortions & Emotional Imbalances",
            "Structured Therapy Sessions & Treatment Planning"
          ]
        },
        {
          "title": "Module 3: Clinical Application & Professional Practice",
          "topics": [
            "Live Case Studies & Supervised Roleplay Practice",
            "Documentation, Ethics, & Client Confidentiality",
            "Setting Up Your Private Practice & Career Pathways"
          ]
        }
      ]
    },
    "whoCanJoin": [
      "Aspiring Counsellors & Psychology Students",
      "Mental Health Professionals & Social Workers",
      "Doctors, Nurses & Healthcare Practitioners",
      "School Teachers, Educators & Academic Mentors",
      "HR Professionals & Corporate Wellness Coaches",
      "Parents, Homemakers & Career Changers Passionate About Mental Health"
    ],
    "scholarship": {
      "title": "Scholarship & Practical Learning Support",
      "subtitle": "Guaranteed practical internship & training support under our Har Ghar Counsellor initiative.",
      "image": "https://www.counselindia.com/assets/images/about/about-13.png",
      "points": [
        {
          "label": "Direct Mentorship",
          "desc": "One-on-one supervision by senior counselling psychologists."
        },
        {
          "label": "Hands-on Practice",
          "desc": "Live case discussions and clinical roleplay sessions."
        },
        {
          "label": "Fee Assistance",
          "desc": "Flexible installment plans and merit-based fee support."
        }
      ]
    },
    "faculty": [
      {
        "name": "Dr. Bobby Archer",
        "title": "Senior Clinical Psychologist & Master Trainer",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-01.jpg"
      },
      {
        "name": "Prof. Meenakshi Sharma",
        "title": "Head of Counselling Psychology & CBT Specialist",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-02.jpg"
      }
    ],
    "referEarn": {
      "title": "Refer & Earn with Counsel India",
      "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
      "buttonText": "Refer a Friend",
      "buttonLink": "https://www.counselindia.com/membership"
    },
    "reviews": [
      {
        "quote": "The practical exposure and case discussions helped me build immense confidence in dealing with real client scenarios. The mentors are always accessible and supportive.",
        "name": "Priyanka S.",
        "city": "New Delhi",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-01.jpg"
      },
      {
        "quote": "The curriculum is thorough and grounded in real-world application. Counsel India's approach makes practical psychology understandable and actionable.",
        "name": "Rahul Verma",
        "city": "Mumbai",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-02.jpg"
      }
    ],
    "partners": [
      "https://www.counselindia.com/assets/images/logo/GU_logo.png",
      "https://www.counselindia.com/assets/images/logo/msu_logo.png",
      "https://www.counselindia.com/assets/images/logo/icpemci.png",
      "https://www.counselindia.com/assets/images/logo/VGU.png"
    ],
    "faqs": [
      {
        "question": "Is it mandatory to complete the Psychology Foundation Course, and what are the details?",
        "answer": [
          "Yes, completing the Psychology Foundation Course is mandatory and complimentary for all enrolled learners. This foundational course must be completed within 3 months to qualify for the final certificate. It is designed to strengthen your basics in psychology, ensuring you have a solid understanding to excel in advanced modules of the program."
        ]
      },
      {
        "question": "⁠Will I have the opportunity to gain practical experience during the program?",
        "answer": [
          "Yes, the MA in Psychology program often includes practical training components such as internships, practicum placements, or supervised research projects. These opportunities allow students to apply their theoretical knowledge in real-world settings and gain valuable hands-on experience."
        ]
      },
      {
        "question": "⁠Is the program accredited, and will it meet licensure requirements?",
        "answer": [
          "The accreditation status of the Masters in Psychology program may vary by institution. It’s essential to verify that the program is accredited by a recognized accrediting body. Additionally, while many programs provide a strong foundation for licensure, specific licensure requirements vary by state or country, so it's important to research the requirements in your desired location."
        ]
      },
      {
        "question": "What career pathways can I pursue after completing this program?",
        "answer": [
          "Graduates of the Advanced Certificate in IO Psychology program can pursue various career paths, including roles in human resources management, organizational development, talent management, training and development, and consulting. They are well-equipped to work in a wide range of industries and organizational settings, contributing to positive organizational outcomes."
        ]
      }
    ]
  },
  "counselling-master-course-intermediate": {
    "id": 8,
    "name": "Counselling Master Course - Intermediate",
    "slug": "counselling-master-course-intermediate",
    "badgeSale": "50% OFF",
    "category": "Course",
    "bgImage": "https://prod-s3.counselindia.com/courses/background_image/counseling-master-course-moderate_1687158379.webp",
    "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
    "description": "The Counselling Master Course is a comprehensive program on various kinds of counselling techniques that a professional employs in order to cater to the needs of counselling. It is a noble profession as you get to directly help people suffering from any mental disturbance, like depression, anxiety, and addiction, etc. Recognized by the UGC and accredited with an A+ rating by NAAC in 2022, this collaboration with Galgotia’s University offers UGC-approved psychology courses, providing learners with a solid foundation for a successful career in mental health.",
    "rating": 5,
    "enrollUrl": "https://rzp.io/rzp/X5Q7xhF",
    "phone": "+918031320449",
    "highlights": [
      {
        "title": "Credentials",
        "desc": "Counselling Master Course, Grade Sheets, Skill Certificates, and Letter of Recommendation"
      },
      {
        "title": "Duration",
        "desc": "6 Months"
      },
      {
        "title": "Eligibility",
        "desc": "12th & Above"
      },
      {
        "title": "6 Core Modules",
        "desc": "Understanding Counselling, Counselling for Self Improvement and well-being, Life Rebuilding Counselling, Family and Relationship Counselling, Academic and Career Counselling"
      },
      {
        "title": "Program Credits",
        "desc": "2 (as per.NSQF)"
      },
      {
        "title": "Program Start Date",
        "desc": "22 August 2026"
      }
    ],
    "benefits": [
      "20 sessions with a comprehensive course roadmap and milestones.",
      "Key therapy skills and learning objectives defined.",
      "The program curriculum is designed in a comprehensive manner focusing on counselling skills, testings, case discussions, marketing skills and other skills.",
      "All sessions to be conducted live online by RCI certified trainers and industry experts.",
      "Personalized Mentorship",
      "Job Support",
      "Western Style of Psychology Learning",
      "Support to start your own practice or business setup",
      "5 Core Modules + Practical Assignments and Case Studies for each module."
    ],
    "about": [
      "The Counselling Master Course is a comprehensive program on various kinds of counselling techniques that a professional employs in order to cater to the needs of counselling. It is a noble profession as you get to directly help people suffering from any mental disturbance, like depression, anxiety, and addiction, etc. Recognized by the UGC and accredited with an A+ rating by NAAC in 2022, this collaboration with Galgotia’s University offers UGC-approved psychology courses, providing learners with a solid foundation for a successful career in mental health."
    ],
    "learningObjectives": [
      "Get a thorough understanding of Counselling skills",
      "Exposure to more career opportunities",
      "Upskill as a counsellor",
      "Evoke the counsellor in you",
      "CMC is the perfect dose of counselling knowledge you require to qualify as a primary counsellor.",
      "Become a skilled counsellor with a stronghold over understanding human psychology!"
    ],
    "credentials": [
      {
        "id": "tab169",
        "label": "CI Certificate",
        "text": "Upon successful completion of the course, you will receive a recognized certificate from Counsel India, validating your skills and expertise in the field.",
        "image": "https://prod-s3.counselindia.com/credential/ CMC - Intermediate-3_1728552153.png"
      },
      {
        "id": "tab168",
        "label": "Letter of Recommendation",
        "text": "This globally recognized credential showcases your expertise and commitment in your field.",
        "image": "https://prod-s3.counselindia.com/credential/Letter of recommendation for Jon Doe (1)_1755835699.png"
      }
    ],
    "curriculum": {
      "totalSessions": "24 Sessions",
      "totalHours": "36 Hours",
      "stats": [
        {
          "count": "6",
          "text": "Months"
        },
        {
          "count": "6",
          "text": "Core Modules"
        },
        {
          "count": "3+",
          "text": "Counselling Skills"
        },
        {
          "count": "10+",
          "text": "Case Studies"
        }
      ],
      "modules": [
        {
          "title": "Module 1: Foundations & Theoretical Frameworks",
          "topics": [
            "Introduction to Psychology & Psychological Dynamics",
            "Major Schools of Thought (CBT, Humanistic, Psychodynamic)",
            "The Role & Ethics of a Professional Counsellor"
          ]
        },
        {
          "title": "Module 2: Practical Skills & Intervention Strategies",
          "topics": [
            "Active Listening, Empathy, & Clinical Rapport Building",
            "Identifying Distortions & Emotional Imbalances",
            "Structured Therapy Sessions & Treatment Planning"
          ]
        },
        {
          "title": "Module 3: Clinical Application & Professional Practice",
          "topics": [
            "Live Case Studies & Supervised Roleplay Practice",
            "Documentation, Ethics, & Client Confidentiality",
            "Setting Up Your Private Practice & Career Pathways"
          ]
        }
      ]
    },
    "whoCanJoin": [
      "Aspiring Counsellors & Psychology Students",
      "Mental Health Professionals & Social Workers",
      "Doctors, Nurses & Healthcare Practitioners",
      "School Teachers, Educators & Academic Mentors",
      "HR Professionals & Corporate Wellness Coaches",
      "Parents, Homemakers & Career Changers Passionate About Mental Health"
    ],
    "scholarship": {
      "title": "Scholarship & Practical Learning Support",
      "subtitle": "Guaranteed practical internship & training support under our Har Ghar Counsellor initiative.",
      "image": "https://www.counselindia.com/assets/images/about/about-13.png",
      "points": [
        {
          "label": "Direct Mentorship",
          "desc": "One-on-one supervision by senior counselling psychologists."
        },
        {
          "label": "Hands-on Practice",
          "desc": "Live case discussions and clinical roleplay sessions."
        },
        {
          "label": "Fee Assistance",
          "desc": "Flexible installment plans and merit-based fee support."
        }
      ]
    },
    "faculty": [
      {
        "name": "Dr. Bobby Archer",
        "title": "Senior Clinical Psychologist & Master Trainer",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-01.jpg"
      },
      {
        "name": "Prof. Meenakshi Sharma",
        "title": "Head of Counselling Psychology & CBT Specialist",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-02.jpg"
      }
    ],
    "referEarn": {
      "title": "Refer & Earn with Counsel India",
      "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
      "buttonText": "Refer a Friend",
      "buttonLink": "https://www.counselindia.com/membership"
    },
    "reviews": [
      {
        "quote": "The practical exposure and case discussions helped me build immense confidence in dealing with real client scenarios. The mentors are always accessible and supportive.",
        "name": "Priyanka S.",
        "city": "New Delhi",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-01.jpg"
      },
      {
        "quote": "The curriculum is thorough and grounded in real-world application. Counsel India's approach makes practical psychology understandable and actionable.",
        "name": "Rahul Verma",
        "city": "Mumbai",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-02.jpg"
      }
    ],
    "partners": [
      "https://www.counselindia.com/assets/images/logo/GU_logo.png",
      "https://www.counselindia.com/assets/images/logo/msu_logo.png",
      "https://www.counselindia.com/assets/images/logo/icpemci.png",
      "https://www.counselindia.com/assets/images/logo/VGU.png"
    ],
    "faqs": [
      {
        "question": "What is Marketing and branding support?",
        "answer": [
          "a) Thousands of people get to know about you with the help of marketing sessions. b) You reach to needy people by learning Marketing tactics. c) You can never get clients till the time you master the skills of marketing and self branding"
        ]
      },
      {
        "question": "What kind of Study Material I will get?",
        "answer": [
          "a) You can read notes over a soft copy at your comfort which is accessible on your phone, laptop or desktop. b) You will also receive Hard copies of the study material at your doorstep after the completion of the course for lifetime reference and support."
        ]
      },
      {
        "question": "What is Western style of learning?",
        "answer": [
          "a) You take one class every week and start applying it for the rest of your week days. b) Free yourself from the burden of being disturbed in your working schedule."
        ]
      }
    ]
  },
  "psychology-internship-clinical-psychology": {
    "id": 9,
    "name": "Psychology Internship (Clinical Psychology)",
    "slug": "psychology-internship-clinical-psychology",
    "badgeSale": "50% OFF",
    "category": "Course",
    "bgImage": "https://prod-s3.counselindia.com/courses/background_image/psychology-internship-clinical-psychology_1687158314.webp",
    "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
    "description": "If you are looking for an opportunity to get trained in practical aspects of psychology, this is the perfect program for you. Counsel India brings the ultimate internship program for all psychology aspirants. As an intern at Counsel India’s LIVE internship program, the participants will receive lifetime access to India’s first social network of psychology, and an Internship under RCI Certified Psychologists. Your search for the perfect psychology internship ends right here. From understanding the ethics and nuances of online counselling with the advent of the online era to practicing counselling under the direct observation of psychologists, this internship program will serve as a great stepping stone to your career in psychology.",
    "rating": 5,
    "enrollUrl": "https://rzp.io/rzp/X5Q7xhF",
    "phone": "+918031320449",
    "highlights": [
      {
        "title": "Credentials",
        "desc": "Psychology Internship (Clinical Psychology), Project Certificates, and Letter of Appreciation"
      },
      {
        "title": "Duration",
        "desc": "12 weeks"
      },
      {
        "title": "5 Core Modules",
        "desc": "Practice Module, Training Module, Testing Module, Self Branding Module, Case Studies Module"
      },
      {
        "title": "Program start Date",
        "desc": "22 August 2026"
      }
    ],
    "benefits": [
      "Case Studies Discussion",
      "Role Play sessions",
      "Work as Mental Health Ambassador",
      "Project work",
      "Western style of Psychology Learning"
    ],
    "about": [
      "If you are looking for an opportunity to get trained in practical aspects of psychology, this is the perfect program for you. Counsel India brings the ultimate internship program for all psychology aspirants. As an intern at Counsel India’s LIVE internship program, the participants will receive lifetime access to India’s first social network of psychology, and an Internship under RCI Certified Psychologists. Your search for the perfect psychology internship ends right here. From understanding the ethics and nuances of online counselling with the advent of the online era to practicing counselling under the direct observation of psychologists, this internship program will serve as a great stepping stone to your career in psychology."
    ],
    "learningObjectives": [
      "Letter of Appreciation & Certificate of Internship",
      "Get practical exposure",
      "Enhance your Resume and practical professional experience.",
      "Learn directly under field psychologists"
    ],
    "credentials": [
      {
        "id": "tab172",
        "label": "certificate",
        "text": "Psychology Internship (Clinical Psychology) Letter of Recommendation These certificates will get you recognized as a certified counsellor and start your career as a primary counsellor anywhere in the world.",
        "image": "https://prod-s3.counselindia.com/credential/Psychology Internship (Clinical Psychology)_1728552630.png"
      }
    ],
    "curriculum": {
      "totalSessions": "10 Sessions",
      "totalHours": "18h",
      "stats": [
        {
          "count": "12",
          "text": "Week"
        },
        {
          "count": "5",
          "text": "Core Modules"
        },
        {
          "count": "6+",
          "text": "Topics"
        },
        {
          "count": "10+",
          "text": "Live Sessions"
        },
        {
          "count": "2",
          "text": "Practice Sessions"
        },
        {
          "count": "1",
          "text": "Test/Case Study"
        }
      ],
      "modules": [
        {
          "title": "Module 1: Foundations & Theoretical Frameworks",
          "topics": [
            "Introduction to Psychology & Psychological Dynamics",
            "Major Schools of Thought (CBT, Humanistic, Psychodynamic)",
            "The Role & Ethics of a Professional Counsellor"
          ]
        },
        {
          "title": "Module 2: Practical Skills & Intervention Strategies",
          "topics": [
            "Active Listening, Empathy, & Clinical Rapport Building",
            "Identifying Distortions & Emotional Imbalances",
            "Structured Therapy Sessions & Treatment Planning"
          ]
        },
        {
          "title": "Module 3: Clinical Application & Professional Practice",
          "topics": [
            "Live Case Studies & Supervised Roleplay Practice",
            "Documentation, Ethics, & Client Confidentiality",
            "Setting Up Your Private Practice & Career Pathways"
          ]
        }
      ]
    },
    "whoCanJoin": [
      "Aspiring Counsellors & Psychology Students",
      "Mental Health Professionals & Social Workers",
      "Doctors, Nurses & Healthcare Practitioners",
      "School Teachers, Educators & Academic Mentors",
      "HR Professionals & Corporate Wellness Coaches",
      "Parents, Homemakers & Career Changers Passionate About Mental Health"
    ],
    "scholarship": {
      "title": "Scholarship & Practical Learning Support",
      "subtitle": "Guaranteed practical internship & training support under our Har Ghar Counsellor initiative.",
      "image": "https://www.counselindia.com/assets/images/about/about-13.png",
      "points": [
        {
          "label": "Direct Mentorship",
          "desc": "One-on-one supervision by senior counselling psychologists."
        },
        {
          "label": "Hands-on Practice",
          "desc": "Live case discussions and clinical roleplay sessions."
        },
        {
          "label": "Fee Assistance",
          "desc": "Flexible installment plans and merit-based fee support."
        }
      ]
    },
    "faculty": [
      {
        "name": "Dr. Bobby Archer",
        "title": "Senior Clinical Psychologist & Master Trainer",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-01.jpg"
      },
      {
        "name": "Prof. Meenakshi Sharma",
        "title": "Head of Counselling Psychology & CBT Specialist",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-02.jpg"
      }
    ],
    "referEarn": {
      "title": "Refer & Earn with Counsel India",
      "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
      "buttonText": "Refer a Friend",
      "buttonLink": "https://www.counselindia.com/membership"
    },
    "reviews": [
      {
        "quote": "The practical exposure and case discussions helped me build immense confidence in dealing with real client scenarios. The mentors are always accessible and supportive.",
        "name": "Priyanka S.",
        "city": "New Delhi",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-01.jpg"
      },
      {
        "quote": "The curriculum is thorough and grounded in real-world application. Counsel India's approach makes practical psychology understandable and actionable.",
        "name": "Rahul Verma",
        "city": "Mumbai",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-02.jpg"
      }
    ],
    "partners": [
      "https://www.counselindia.com/assets/images/logo/GU_logo.png",
      "https://www.counselindia.com/assets/images/logo/msu_logo.png",
      "https://www.counselindia.com/assets/images/logo/icpemci.png",
      "https://www.counselindia.com/assets/images/logo/VGU.png"
    ],
    "faqs": [
      {
        "question": "Course Curriculum",
        "answer": [
          "a) You will love each and every class as all sessions are practically conducted and participation in psychology activities is very easy and effective. b) You will get practical exposure on how to deal with real life clients and not just cover the theory part. c) Online training sessions will also help you to understand how to take online sessions as a counsellor across the globe and not just limit your client base in your area which is a big challenge for offline mode of training."
        ]
      },
      {
        "question": "Who is this program designed for?",
        "answer": [
          "This program is designed for a variety of individuals, including recent psychology graduates, HR professionals, managers, and anyone interested in pursuing a career related to improving workplace behavior and performance."
        ]
      },
      {
        "question": "What kind of Study Material I will get?",
        "answer": [
          "a) You can read notes over a soft copy at your comfort which is accessible on your phone, laptop or desktop. b) You will also receive Hard copies of the study material at your doorstep after the completion of the course for lifetime reference and support."
        ]
      },
      {
        "question": "What is Western style of learning?",
        "answer": [
          "a) You take one class every week and start applying it for the rest of your week days. b) Free yourself from the burden of being disturbed in your working schedule."
        ]
      },
      {
        "question": "Mode of communication?",
        "answer": [
          "The mode of communication in the session will be only English."
        ]
      },
      {
        "question": "How do I access lectures, assignments, and other course materials online?",
        "answer": [
          "We will provide you login credentials for Counsel India’s Learning Management System."
        ]
      },
      {
        "question": "What are the career prospects after completing this program?",
        "answer": [
          "Graduates can pursue careers as HR consultants, talent acquisition specialists, organizational development specialists, training and development managers, research analysts in I-O Psychology, and more. The program equips students with skills relevant to improving workplace performance and well-being."
        ]
      }
    ]
  },
  "masters-in-child-psychology-work-integrated-skill-based-program%29": {
    "id": 10,
    "name": "Masters in Child Psychology",
    "slug": "masters-in-child-psychology-work-integrated-skill-based-program%29",
    "badgeSale": "40% OFF",
    "category": "Course",
    "bgImage": "https://prod-s3.counselindia.com/courses/background_image/New Project (41)_1713437634.webp",
    "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
    "description": "(Internship/Apprenticeship Embedded) - Essentially designed for individuals passionate about understanding and nurturing children, this comprehensive, detailed program combines theoretical insights with practical training. It covers a broad range of topics, starting from cognitive development to social and emotional well-being. Learners will gain an in-depth understanding of the complexities of Child Psychology. Engage in ground-breaking research initiatives that ultimately contribute to Child Psychology. Recognised by the IPA(International Psychology Association) & Skill India, provides learners with a solid foundation for a successful career in mental health.",
    "rating": 5,
    "enrollUrl": "https://rzp.io/rzp/X5Q7xhF",
    "phone": "+918031320449",
    "highlights": [
      {
        "title": "Duration",
        "desc": "24 Months"
      },
      {
        "title": "Eligibility",
        "desc": "Graduation & above"
      },
      {
        "title": "Semesters",
        "desc": "4"
      },
      {
        "title": "Program Credits",
        "desc": "Standard"
      },
      {
        "title": "Program start date",
        "desc": "22 August 2026"
      }
    ],
    "benefits": [
      "Learn about the multiple aspects of a child’s growth, covering physical, cognitive, social, and emotional aspects, to develop an overall understanding of their developmental phase.",
      "Explore the sequential milestones that show the key stages of development in childhood, examining the behavioral patterns, abilities in children, and challenges they encounter at each phase, providing important insights for observation and effective intervention.",
      "Learn about the underlying factors which influence children's behaviors, including environmental, social, and biological factors, and master countless evidence-based techniques to help manage and redirect behavior positively, and foster healthy development.",
      "Examine the interplay of family dynamics, parenting styles, socioeconomic factors, and cultural influences which impact the development of children, recognizing the significant role played by families in shaping their experiences and outcomes.",
      "Access a diverse toolkit of intervention strategies to address diverse challenges that are commonly encountered by children, like academic difficulties, emotional disturbances, or social adjustment issues, and help promote resilience and well-being.",
      "Build observational abilities and assess and interpret children's behaviors, interactions, and developmental progress accurately, by employing systematic observation techniques and assessment tools and develop tailored interventions.",
      "Get practical training, including supervised internships, hands-on exercises, or fieldwork, to apply theoretical insights in real-world settings, developing and enhancing practical skills and building your professional competency.",
      "Stay updated about latest research and empirical findings in the field, critically evaluating research material to make use of evidence-based practices and innovative approaches to promoting children's well-being.",
      "Explore diverse career pathways in education, counselling, clinical psychology, social work, or child advocacy, and get equipped with a strong foundation of knowledge, practical skills, and ethical principles to make meaningful contributions to children's lives and society."
    ],
    "about": [
      "(Internship/Apprenticeship Embedded) - Essentially designed for individuals passionate about understanding and nurturing children, this comprehensive, detailed program combines theoretical insights with practical training. It covers a broad range of topics, starting from cognitive development to social and emotional well-being. Learners will gain an in-depth understanding of the complexities of Child Psychology. Engage in ground-breaking research initiatives that ultimately contribute to Child Psychology. Recognised by the IPA(International Psychology Association) & Skill India, provides learners with a solid foundation for a successful career in mental health."
    ],
    "learningObjectives": [
      "Develop a foundational understanding of evidence-based psychological theories and counselling models.",
      "Master essential micro-skills: active listening, empathetic reflection, goal setting, and therapeutic rapport.",
      "Acquire hands-on expertise in conducting intake assessments, case conceptualization, and structured interventions."
    ],
    "credentials": [
      {
        "id": "tab85",
        "label": "IPA Certificate",
        "text": "Upon successful completion of the course, you will be awarded a prestigious cerificate from IPA( International Psychology Association)",
        "image": "https://prod-s3.counselindia.com/credential/Screenshot 2025-08-04 114105_1754288852.png"
      },
      {
        "id": "tab86",
        "label": "MEPSC Certificate",
        "text": "After the successful training and assessment, the Management & Entrepreneurship and Professionals Skills Council (MEPSC) will issue a skill certificate, add your database in the central skills qualification database which can be accessed online for verification and due-diligence by employers. This skills certification will be valid across all G20 nations.",
        "image": "https://prod-s3.counselindia.com/credential/Certificate Template - Job Role (1)_1753182320.jpg"
      },
      {
        "id": "tab194",
        "label": "Certificate of Completion",
        "text": "This certificate honors your dedication, hard work, and mastery of essential skills and specializations. It celebrates your commitment to excellence and acknowledges your achievement in making a meaningful impact in your field moving forward.",
        "image": "https://prod-s3.counselindia.com/credential/M.A Child Psychology & Developemnt_1728551938.png"
      },
      {
        "id": "tab84",
        "label": "Letter of Recommendation",
        "text": "This globally recognized credential showcases your expertise and commitment in your field.",
        "image": "https://prod-s3.counselindia.com/credential/Letter of recommendation for Jon Doe (1)_1755835795.png"
      }
    ],
    "curriculum": {
      "totalSessions": "480 Sessions",
      "totalHours": "2220 Hrs",
      "stats": [
        {
          "count": "Standard",
          "text": "Program Credits"
        },
        {
          "count": "21",
          "text": "Subjects"
        },
        {
          "count": "480",
          "text": "Live Session Hours"
        },
        {
          "count": "840",
          "text": "Project Hours"
        },
        {
          "count": "900",
          "text": "OJL Hours"
        },
        {
          "count": "3",
          "text": "Projects"
        }
      ],
      "modules": [
        {
          "title": "Module 1: Foundations & Theoretical Frameworks",
          "topics": [
            "Introduction to Psychology & Psychological Dynamics",
            "Major Schools of Thought (CBT, Humanistic, Psychodynamic)",
            "The Role & Ethics of a Professional Counsellor"
          ]
        },
        {
          "title": "Module 2: Practical Skills & Intervention Strategies",
          "topics": [
            "Active Listening, Empathy, & Clinical Rapport Building",
            "Identifying Distortions & Emotional Imbalances",
            "Structured Therapy Sessions & Treatment Planning"
          ]
        },
        {
          "title": "Module 3: Clinical Application & Professional Practice",
          "topics": [
            "Live Case Studies & Supervised Roleplay Practice",
            "Documentation, Ethics, & Client Confidentiality",
            "Setting Up Your Private Practice & Career Pathways"
          ]
        }
      ]
    },
    "whoCanJoin": [
      "Aspiring Counsellors & Psychology Students",
      "Mental Health Professionals & Social Workers",
      "Doctors, Nurses & Healthcare Practitioners",
      "School Teachers, Educators & Academic Mentors",
      "HR Professionals & Corporate Wellness Coaches",
      "Parents, Homemakers & Career Changers Passionate About Mental Health"
    ],
    "scholarship": {
      "title": "Scholarship & Practical Learning Support",
      "subtitle": "Guaranteed practical internship & training support under our Har Ghar Counsellor initiative.",
      "image": "https://www.counselindia.com/assets/images/about/about-13.png",
      "points": [
        {
          "label": "Direct Mentorship",
          "desc": "One-on-one supervision by senior counselling psychologists."
        },
        {
          "label": "Hands-on Practice",
          "desc": "Live case discussions and clinical roleplay sessions."
        },
        {
          "label": "Fee Assistance",
          "desc": "Flexible installment plans and merit-based fee support."
        }
      ]
    },
    "faculty": [
      {
        "name": "Dr. Bobby Archer",
        "title": "Senior Clinical Psychologist & Master Trainer",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-01.jpg"
      },
      {
        "name": "Prof. Meenakshi Sharma",
        "title": "Head of Counselling Psychology & CBT Specialist",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-02.jpg"
      }
    ],
    "referEarn": {
      "title": "Refer & Earn with Counsel India",
      "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
      "buttonText": "Refer a Friend",
      "buttonLink": "https://www.counselindia.com/membership"
    },
    "reviews": [
      {
        "quote": "The practical exposure and case discussions helped me build immense confidence in dealing with real client scenarios. The mentors are always accessible and supportive.",
        "name": "Priyanka S.",
        "city": "New Delhi",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-01.jpg"
      },
      {
        "quote": "The curriculum is thorough and grounded in real-world application. Counsel India's approach makes practical psychology understandable and actionable.",
        "name": "Rahul Verma",
        "city": "Mumbai",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-02.jpg"
      }
    ],
    "partners": [
      "https://www.counselindia.com/assets/images/logo/GU_logo.png",
      "https://www.counselindia.com/assets/images/logo/msu_logo.png",
      "https://www.counselindia.com/assets/images/logo/icpemci.png",
      "https://www.counselindia.com/assets/images/logo/VGU.png"
    ],
    "faqs": [
      {
        "question": "Introduction to Human Psychology",
        "answer": [
          "Yes, completing the Psychology Foundation Course is mandatory and complimentary for all enrolled learners. This foundational course must be completed within 3 months to qualify for the final certificate. It is designed to strengthen your basics in psychology, ensuring you have a solid understanding to excel in advanced modules of the program."
        ]
      },
      {
        "question": "How does this program prepare graduates to work with children with special needs or developmental disabilities?",
        "answer": [
          "This Pr ogram include s coursework and practical training in assessing and supporting children with a wide range of developmental challenges, including autism spectrum disorder, learning disabilities, ADHD, emotional and behavioral disorders, and trauma-related difficulties. Students learn evidence-based interventions and strategies to promote positive outcomes for children with special needs."
        ]
      },
      {
        "question": "How does this program address ethical considerations in working with children and families?",
        "answer": [
          "Ethical principles and guidelines are integrated into the curriculum to ensure that students develop a strong understanding of professional ethics and legal standards in child psychology practice. Students learn about informed consent, confidentiality, boundary issues, cultural competence, and ethical decision-making in their interactions with children and families."
        ]
      },
      {
        "question": "Can the credits earned in this program be transferred to other academic programs or institutions?",
        "answer": [
          "Yes, our program follows a stackable system of education, allowing students to earn credits that may be transferable to other academic programs or institutions. This flexibility enables students to build upon their existing qualifications and pursue further education or specialization in Career Counselling."
        ]
      }
    ]
  },
  "counselling-master-course-advanced": {
    "id": 11,
    "name": "Counselling Master Course- Advanced",
    "slug": "counselling-master-course-advanced",
    "badgeSale": "50% OFF",
    "category": "Course",
    "bgImage": "https://prod-s3.counselindia.com/courses/background_image/counselling-master-course-advance_1687158021.webp",
    "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
    "description": "The Counselling Master Course – Advanced is a comprehensive 12-month certification program designed for aspiring counsellors, psychology graduates, and individuals passionate about mental health and personal development. Supported by the Indian Council for Professional Education Mission (ICPEM) and aligned with the National Education Policy (NEP) 2020, the course awards 4 academic credits that are stored in the Academic Bank of Credit. Learners gain hands-on training in more than 25 key counselling domains—including anxiety, depression, trauma, addiction, relationship issues, workplace challenges, and child counselling—alongside a foundational understanding of psychology. With 120+ hours of structured, cohort-based online learning, the program emphasizes practical exposure through case studies, assignments, workshops, and 1-on-1 mentorship from RCI-certified trainers and expert psychologists. The course also provides 100% job assistance, business venture support, and the opportunity to earn co-branded certifications from Counsel India, ICPEM, and affiliated national and international universities. Designed to be career-focused and application-driven, this program is ideal for educators, life coaches, working professionals, and social change-makers looking to establish a meaningful career in the mental health space.",
    "rating": 5,
    "enrollUrl": "https://rzp.io/rzp/X5Q7xhF",
    "phone": "+918031320449",
    "highlights": [
      {
        "title": "Credentials",
        "desc": "Counselling Master Course-Advanced, Grade Sheets, Skills Certificates, and Letter of Recommendation"
      },
      {
        "title": "Duration",
        "desc": "12 Months"
      },
      {
        "title": "Eligibility",
        "desc": "Graduation & Above"
      },
      {
        "title": "5 Core Modules",
        "desc": "Practice Module, Training Module, Testing Module, Self Branding Module, Case Studies Module"
      },
      {
        "title": "Program Credits",
        "desc": "4 (as per.NSQF)"
      },
      {
        "title": "Program Start Date",
        "desc": "22 August 2026"
      }
    ],
    "benefits": [
      "84+ Live Online Sessions Structured around a clear roadmap and milestones, delivered by RCI-certified trainers and industry experts",
      "Comprehensive Curriculum across 25+ Counselling Domains Covers a wide range of specializations including anxiety, trauma, addiction, relationship counselling, and more",
      "Psychology Foundation Course (Mandatory) Complimentary 3-month foundational module to strengthen your core psychological understanding.",
      "Cohort-Based Western Learning Model Two live sessions weekly with 5 days of assignments, mimicking global psychology learning approaches",
      "Hands-On Practical Learning Includes capstone projects, real-life case discussions, role plays, and assignments after every module.",
      "1-on-1 Personalized Mentorship Tailored guidance from industry professionals to help you navigate your personal and career goals.",
      "100% Job Support & Career Assistance Dedicated placement help, interview preparation, and internship opportunities post-course.",
      "Business & Practice Set-up Guidance Support to establish your private practice, from legalities to branding and client management.",
      "Self-Marketing & Branding Classes Learn how to position yourself, build a presence, and attract clients through digital branding.",
      "NEP-Aligned with Academic Credits Earn 4 academic credits stored in the Academic Bank of Credit under NEP 2020 & NCrF guidelines.",
      "Ask Me Anything Sessions & Practice Classes Regular AMA sessions, feedback loops, and doubt-clearing for consistent support throughout."
    ],
    "about": [
      "The Counselling Master Course – Advanced is a comprehensive 12-month certification program designed for aspiring counsellors, psychology graduates, and individuals passionate about mental health and personal development. Supported by the Indian Council for Professional Education Mission (ICPEM) and aligned with the National Education Policy (NEP) 2020, the course awards 4 academic credits that are stored in the Academic Bank of Credit. Learners gain hands-on training in more than 25 key counselling domains—including anxiety, depression, trauma, addiction, relationship issues, workplace challenges, and child counselling—alongside a foundational understanding of psychology. With 120+ hours of structured, cohort-based online learning, the program emphasizes practical exposure through case studies, assignments, workshops, and 1-on-1 mentorship from RCI-certified trainers and expert psychologists. The course also provides 100% job assistance, business venture support, and the opportunity to earn co-branded certifications from Counsel India, ICPEM, and affiliated national and international universities. Designed to be career-focused and application-driven, this program is ideal for educators, life coaches, working professionals, and social change-makers looking to establish a meaningful career in the mental health space."
    ],
    "learningObjectives": [
      "Gain Mastery in 25+ Advanced Counselling Domains Develop in-depth knowledge and practical expertise across multiple areas like anxiety, trauma, grief, addiction, relationship, and workplace counselling.",
      "Build a Strong Foundation in Psychological Concepts Strengthen your understanding of the human mind, behavior, emotions, and therapeutic approaches through the foundational psychology course.",
      "Develop Real-World Counselling Skills Learn to apply techniques such as CBT, mindfulness, crisis intervention, and psychodynamic methods through live sessions, projects, and role plays.",
      "Earn Recognized Academic Credits (NEP 2020) Acquire 4 academic credits stored in the Academic Bank of Credit, boosting your academic and professional profile.",
      "Enhance Employability in the Mental Health Sector Prepare for job opportunities in schools, NGOs, hospitals, corporates, and private clinics with 100% job support and placement guidance.",
      "Become Entrepreneur-Ready Learn business development, self-branding, and marketing strategies to launch and grow your independent counselling practice.",
      "Develop Ethical & Culturally Competent Counselling Practices Understand client boundaries, ethical responsibilities, and cultural sensitivity in counselling environments.",
      "Get Personalized Mentorship for Career & Personal Growth Receive guidance from RCI-certified experts to align your career path with your strengths and goals.",
      "Create Meaningful Social Impact Be equipped to make a real difference in people’s lives by helping them navigate emotional, psychological, and life challenges with confidence."
    ],
    "credentials": [
      {
        "id": "tab171",
        "label": "CI Certificate",
        "text": "Upon successful completion of the program, you will be awarded a prestigious, co-branded certificate from Counsel India and ICPEM, affirming your advanced skills and specialized training in counselling psychology. This certificate not only validates your theoretical knowledge and practical expertise but also enhances your professional credibility in the mental health field. Recognized by academic and industry bodies, your certification reflects your readiness to make a real-world impact—whether through employment, private practice, or further academic pursuits. It serves as a powerful testament to your dedication, growth, and competence as a trained counsellor.",
        "image": "https://prod-s3.counselindia.com/credential/ CMC - Advanced-2_1728552024.png"
      },
      {
        "id": "tab166",
        "label": "Letter of Recommendation",
        "text": "Upon successful completion of the course, you become eligible to receive a personalized Letter of Recommendation from Counsel India, formally endorsing your counselling expertise, skillset, and professional readiness. This LOR serves as a strong testament to your capabilities, helping you stand out in academic, clinical, and job-related opportunities. It reflects your commitment, performance, and practical training—backed by India's leading psychology education platform.",
        "image": "https://prod-s3.counselindia.com/credential/Letter of recommendation for Jon Doe (1)_1755835777.png"
      }
    ],
    "curriculum": {
      "totalSessions": "84 Sessions",
      "totalHours": "120 Hours",
      "stats": [
        {
          "count": "12",
          "text": "Months"
        },
        {
          "count": "5",
          "text": "Core Modules"
        },
        {
          "count": "84",
          "text": "Core Module Session"
        },
        {
          "count": "35+",
          "text": "Case Studies Sessions"
        }
      ],
      "modules": [
        {
          "title": "Module 1: Foundations & Theoretical Frameworks",
          "topics": [
            "Introduction to Psychology & Psychological Dynamics",
            "Major Schools of Thought (CBT, Humanistic, Psychodynamic)",
            "The Role & Ethics of a Professional Counsellor"
          ]
        },
        {
          "title": "Module 2: Practical Skills & Intervention Strategies",
          "topics": [
            "Active Listening, Empathy, & Clinical Rapport Building",
            "Identifying Distortions & Emotional Imbalances",
            "Structured Therapy Sessions & Treatment Planning"
          ]
        },
        {
          "title": "Module 3: Clinical Application & Professional Practice",
          "topics": [
            "Live Case Studies & Supervised Roleplay Practice",
            "Documentation, Ethics, & Client Confidentiality",
            "Setting Up Your Private Practice & Career Pathways"
          ]
        }
      ]
    },
    "whoCanJoin": [
      "Aspiring Counsellors & Psychology Students",
      "Mental Health Professionals & Social Workers",
      "Doctors, Nurses & Healthcare Practitioners",
      "School Teachers, Educators & Academic Mentors",
      "HR Professionals & Corporate Wellness Coaches",
      "Parents, Homemakers & Career Changers Passionate About Mental Health"
    ],
    "scholarship": {
      "title": "Scholarship & Practical Learning Support",
      "subtitle": "Guaranteed practical internship & training support under our Har Ghar Counsellor initiative.",
      "image": "https://www.counselindia.com/assets/images/about/about-13.png",
      "points": [
        {
          "label": "Direct Mentorship",
          "desc": "One-on-one supervision by senior counselling psychologists."
        },
        {
          "label": "Hands-on Practice",
          "desc": "Live case discussions and clinical roleplay sessions."
        },
        {
          "label": "Fee Assistance",
          "desc": "Flexible installment plans and merit-based fee support."
        }
      ]
    },
    "faculty": [
      {
        "name": "Dr. Bobby Archer",
        "title": "Senior Clinical Psychologist & Master Trainer",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-01.jpg"
      },
      {
        "name": "Prof. Meenakshi Sharma",
        "title": "Head of Counselling Psychology & CBT Specialist",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-02.jpg"
      }
    ],
    "referEarn": {
      "title": "Refer & Earn with Counsel India",
      "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
      "buttonText": "Refer a Friend",
      "buttonLink": "https://www.counselindia.com/membership"
    },
    "reviews": [
      {
        "quote": "The practical exposure and case discussions helped me build immense confidence in dealing with real client scenarios. The mentors are always accessible and supportive.",
        "name": "Priyanka S.",
        "city": "New Delhi",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-01.jpg"
      },
      {
        "quote": "The curriculum is thorough and grounded in real-world application. Counsel India's approach makes practical psychology understandable and actionable.",
        "name": "Rahul Verma",
        "city": "Mumbai",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-02.jpg"
      }
    ],
    "partners": [
      "https://www.counselindia.com/assets/images/logo/GU_logo.png",
      "https://www.counselindia.com/assets/images/logo/msu_logo.png",
      "https://www.counselindia.com/assets/images/logo/icpemci.png",
      "https://www.counselindia.com/assets/images/logo/VGU.png"
    ],
    "faqs": [
      {
        "question": "Depression Counselling",
        "answer": [
          "a) You will love each and every class as all sessions are practically conducted and participation in psychology activities is very easy and effective. b) You will get practical exposure on how to deal with real life clients and not just cover the theory part. c) Online training sessions will also help you to understand how to take online sessions as a counsellor across the globe and not just limit your client base in your area which is a big challenge for offline mode of training."
        ]
      },
      {
        "question": "Is it mandatory to complete the Psychology Foundation Course, and what are the details?",
        "answer": [
          "Yes, completing the Psychology Foundation Course is mandatory and complimentary for all enrolled learners. This foundational course must be completed within 3 months to qualify for the final certificate. It is designed to strengthen your basics in psychology, ensuring you have a solid understanding to excel in advanced modules of the program."
        ]
      },
      {
        "question": "What is Marketing and branding support?",
        "answer": [
          "a) Thousands of people get to know about you with the help of marketing sessions. b) You reach to needy people by learning Marketing tactics. c) You can never get clients till the time you master the skills of marketing and self branding"
        ]
      },
      {
        "question": "What kind of Study Material I will get?",
        "answer": [
          "a) You can read notes over a soft copy at your comfort which is accessible on your phone, laptop or desktop. b) You will also receive Hard copies of the study material at your doorstep after the completion of the course for lifetime reference and support."
        ]
      },
      {
        "question": "What is Western style of learning?",
        "answer": [
          "a) You take one class every week and start applying it for the rest of your week days. b) Free yourself from the burden of being disturbed in your working schedule."
        ]
      }
    ]
  },
  "masters-in-industrial-organizational-psychology": {
    "id": 12,
    "name": "Masters in Industrial & Organizational Psychology",
    "slug": "masters-in-industrial-organizational-psychology",
    "badgeSale": "60% OFF",
    "category": "Course",
    "bgImage": "https://prod-s3.counselindia.com/courses/background_image/mba-in-business-psychology_1706702423.png",
    "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
    "description": "Ready to reshape workplaces and boost careers? Our Masters in Industrial/Organizational Psychology In partnership with IPA(International Psychology Association) & Skill India, is the secret skill you need to understand how people tick and how to make work environments thrive. This isn’t just about theories—it’s about real-world impact. Understand the psychology behind workplace dynamics, learn to apply data-driven insights to talent management, and master the art of leading teams through change. Imagine being the person who sparks employee engagement, boosts productivity, and makes the office a better place for everyone. This program gives you the tools to make it happen. The future of work is waiting, and it starts with you.",
    "rating": 5,
    "enrollUrl": "https://payment.collexo.com/medhavi-skills-university-counsel-india-49669/applicant/add/",
    "phone": "+918031320449",
    "highlights": [
      {
        "title": "Duration",
        "desc": "24 Months"
      },
      {
        "title": "Eligibility",
        "desc": "Graduation & above"
      },
      {
        "title": "Semesters",
        "desc": "4"
      },
      {
        "title": "Program Credits",
        "desc": "Standard"
      },
      {
        "title": "Batch Start Date",
        "desc": "22 August 2026"
      }
    ],
    "benefits": [
      "Mathematical and Statistical Foundations Start your journey with a strong foundation in mathematics and statistics, essential for data-driven decision-making in business. The course covers four core functions—linear, power, exponential, and logarithmic—and introduces you to the basics of calculus and descriptive statistics. These concepts will help you navigate complex data and enhance your problem-solving abilities in managerial settings.",
      "Managerial Accounting & Financial Decision-Making Gain a solid understanding of accounting principles, focusing on how business managers can effectively manage financial resources. The course begins with fundamental concepts like cash flow analysis and financial statement interpretation, then advances to topics such as capital budgeting, risk and return, and investment decision-making. You’ll explore how organizations secure short-term and long-term funding, with case analyses demonstrating how the capital markets can play a key role in this process.",
      "Principles of Economics and Finance This foundational course introduces you to the practicalities of economics and finance with real-world applications. Topics covered include classical vs. modern economic thought, supply and demand, inflation, and unemployment. On the finance side, you’ll dive into the workings of the Federal Reserve, interest rates, and how financial markets influence decision-making. The course gives you a deep understanding of how these economic and financial principles drive organizational success.",
      "Managerial Economics: Strategic Decision-Making Explore how economic theory can guide strategic decision-making in the business world. You’ll learn to apply economic variables like output, pricing, interest rates, and competition to solve real business challenges. This course covers profit measurement, economic optimization, demand estimation, and long-term investment decisions—all crucial for leaders in the field of industrial and organizational psychology.",
      "Managerial Marketing: Bridging Psychology and Business Understand how to leverage psychological insights in marketing and consumer behavior to boost organizational success. This course integrates marketing principles with the study of human behavior to help you craft effective marketing strategies that align with both organizational goals and consumer needs.",
      "Whether you’re working within a corporation or launching your own venture, this course explores entrepreneurial skills in both settings. You’ll learn how to identify and develop your leadership skills, fostering an entrepreneurial mindset within your organization. Topics include project management, innovation, and leadership development, all of which are essential for driving organizational change and success."
    ],
    "about": [
      "Ready to reshape workplaces and boost careers? Our Masters in Industrial/Organizational Psychology In partnership with IPA(International Psychology Association) & Skill India, is the secret skill you need to understand how people tick and how to make work environments thrive. This isn’t just about theories—it’s about real-world impact. Understand the psychology behind workplace dynamics, learn to apply data-driven insights to talent management, and master the art of leading teams through change. Imagine being the person who sparks employee engagement, boosts productivity, and makes the office a better place for everyone. This program gives you the tools to make it happen. The future of work is waiting, and it starts with you."
    ],
    "learningObjectives": [
      "Develop a foundational understanding of evidence-based psychological theories and counselling models.",
      "Master essential micro-skills: active listening, empathetic reflection, goal setting, and therapeutic rapport.",
      "Acquire hands-on expertise in conducting intake assessments, case conceptualization, and structured interventions."
    ],
    "credentials": [
      {
        "id": "tab202",
        "label": "IPA Certificate",
        "text": "Upon successful completion of the course, you will be awarded a prestigious certificate from IPA( International Psychology Association)",
        "image": "https://prod-s3.counselindia.com/credential/Screenshot 2025-08-04 114105_1754288504.png"
      },
      {
        "id": "tab88",
        "label": "Letter of Recommendation",
        "text": "This globally recognized credential showcases your expertise and commitment in your field.",
        "image": "https://prod-s3.counselindia.com/credential/Letter of recommendation for Jon Doe (1)_1755835814.png"
      },
      {
        "id": "tab205",
        "label": "MEPSC Certificate",
        "text": "After the successful training and assessment, the Management & Entrepreneurship and Professionals Skills Council (MEPSC) will issue a skill certificate, add your database in the central skills qualification database which can be accessed online for verification and due-diligence by employers. This skills certification will be valid across all G20 nations.",
        "image": "https://prod-s3.counselindia.com/credential/Certificate Template - Job Role (1)_1753183776.jpg"
      }
    ],
    "curriculum": {
      "totalSessions": "240 Sessions",
      "totalHours": "2220",
      "stats": [
        {
          "count": "Standard",
          "text": "Program Credits"
        },
        {
          "count": "21",
          "text": "Subjects"
        },
        {
          "count": "480",
          "text": "Live Sessions Hours"
        },
        {
          "count": "840",
          "text": "Project Hours"
        },
        {
          "count": "3",
          "text": "Projects"
        }
      ],
      "modules": [
        {
          "title": "Module 1: Foundations & Theoretical Frameworks",
          "topics": [
            "Introduction to Psychology & Psychological Dynamics",
            "Major Schools of Thought (CBT, Humanistic, Psychodynamic)",
            "The Role & Ethics of a Professional Counsellor"
          ]
        },
        {
          "title": "Module 2: Practical Skills & Intervention Strategies",
          "topics": [
            "Active Listening, Empathy, & Clinical Rapport Building",
            "Identifying Distortions & Emotional Imbalances",
            "Structured Therapy Sessions & Treatment Planning"
          ]
        },
        {
          "title": "Module 3: Clinical Application & Professional Practice",
          "topics": [
            "Live Case Studies & Supervised Roleplay Practice",
            "Documentation, Ethics, & Client Confidentiality",
            "Setting Up Your Private Practice & Career Pathways"
          ]
        }
      ]
    },
    "whoCanJoin": [
      "Aspiring Counsellors & Psychology Students",
      "Mental Health Professionals & Social Workers",
      "Doctors, Nurses & Healthcare Practitioners",
      "School Teachers, Educators & Academic Mentors",
      "HR Professionals & Corporate Wellness Coaches",
      "Parents, Homemakers & Career Changers Passionate About Mental Health"
    ],
    "scholarship": {
      "title": "Scholarship & Practical Learning Support",
      "subtitle": "Guaranteed practical internship & training support under our Har Ghar Counsellor initiative.",
      "image": "https://www.counselindia.com/assets/images/about/about-13.png",
      "points": [
        {
          "label": "Direct Mentorship",
          "desc": "One-on-one supervision by senior counselling psychologists."
        },
        {
          "label": "Hands-on Practice",
          "desc": "Live case discussions and clinical roleplay sessions."
        },
        {
          "label": "Fee Assistance",
          "desc": "Flexible installment plans and merit-based fee support."
        }
      ]
    },
    "faculty": [
      {
        "name": "Dr. Bobby Archer",
        "title": "Senior Clinical Psychologist & Master Trainer",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-01.jpg"
      },
      {
        "name": "Prof. Meenakshi Sharma",
        "title": "Head of Counselling Psychology & CBT Specialist",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-02.jpg"
      }
    ],
    "referEarn": {
      "title": "Refer & Earn with Counsel India",
      "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
      "buttonText": "Refer a Friend",
      "buttonLink": "https://www.counselindia.com/membership"
    },
    "reviews": [
      {
        "quote": "The practical exposure and case discussions helped me build immense confidence in dealing with real client scenarios. The mentors are always accessible and supportive.",
        "name": "Priyanka S.",
        "city": "New Delhi",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-01.jpg"
      },
      {
        "quote": "The curriculum is thorough and grounded in real-world application. Counsel India's approach makes practical psychology understandable and actionable.",
        "name": "Rahul Verma",
        "city": "Mumbai",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-02.jpg"
      }
    ],
    "partners": [
      "https://www.counselindia.com/assets/images/logo/GU_logo.png",
      "https://www.counselindia.com/assets/images/logo/msu_logo.png",
      "https://www.counselindia.com/assets/images/logo/icpemci.png",
      "https://www.counselindia.com/assets/images/logo/VGU.png"
    ],
    "faqs": [
      {
        "question": "PRINCIPLES OF ECONOMICS AND FINANCE",
        "answer": [
          "While a background in psychology can be helpful, it’s not mandatory . The course is designed to cater to individuals from diverse academic backgrounds, including business, management, and social sciences. We provide all the necessary foundational knowledge to help you succeed, no matter your prior education."
        ]
      },
      {
        "question": "What are the career opportunities after completing this MBA program?",
        "answer": [
          "Graduates of the Masters in Industrial/Organizational Psychology can pursue a wide range of careers, including:"
        ]
      },
      {
        "question": "Is the course available online or in-person?",
        "answer": [
          "Yes! The Masters in Industrial/Organizational Psychology program is available in online formats . We offer flexibility to cater to students' needs, by providing them with online learning environment that fits into your busy schedule."
        ]
      },
      {
        "question": "Will this program provide practical, real-world experience?",
        "answer": [
          "Absolutely! The program is designed to be highly practical , with a focus on applying psychological principles to real-world business challenges. You will engage in case studies , hands-on projects , and internship opportunities that allow you to work with actual organizations, developing strategies for talent management, employee engagement, and organizational development."
        ]
      }
    ]
  },
  "counsellor-entrepreneurship-program": {
    "id": 13,
    "name": "Counsellor Entrepreneurship Program",
    "slug": "counsellor-entrepreneurship-program",
    "badgeSale": "50% OFF",
    "category": "Course",
    "bgImage": "https://prod-s3.counselindia.com/courses/background_image/CLEP_bg_1722058281.jpg",
    "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
    "description": "This is a triple certification program designed for aspiring counsellors and therapists who want to grow and scale their business and entrepreneurial skills. Certified by the MEPSC, and featuring a specialization certificate from Counsel India, this program combines advanced knowledge in psychology and mental health with a focus on entrepreneurship. This comprehensive program empowers you to not only succeed in mental health counseling but also to grow and manage a successful counselling practice.",
    "rating": 5,
    "enrollUrl": "https://rzp.io/rzp/X5Q7xhF",
    "phone": "+918031320449",
    "highlights": [
      {
        "title": "Duration",
        "desc": "12 Months"
      },
      {
        "title": "Eligibility",
        "desc": "Graduation & Above OR 12th with 10 years of experience"
      },
      {
        "title": "Program Credits",
        "desc": "4"
      },
      {
        "title": "Program Start Date",
        "desc": "22 August 2026"
      }
    ],
    "benefits": [
      "Triple Certification: Our program offers a unique dual certification, granting you credentials from Counsel India.",
      "70% Skill-Driven: The curriculum is designed to equip you with practical skills. 70% of the curriculum is dedicated to hands-on training and real-world applications. This ensures that you are prepared to handle real-life counselling cases and entrepreneurial challenges.",
      "Entrepreneurial Skills in Counselling: Build a business acumen through project work and practical training. Our program integrates the latest research and best practices to ensure you are prepared for the evolving needs of the market.",
      "Cohort Based Learning with Project Work: Engage in projects, focusing on entrepreneurial activities such as business idea development, case studies, workshops and capstone projects.",
      "Marketing, Branding & Mentorship: Get mentoring sessions throughout the program. These sessions provide a personalized career roadmap and mentorship from experienced professionals. Also learn how to market your counselling services and build a strong personal brand.",
      "Community Building: Participate in community-building activities including podcasts, guest meetings, workshops, alumni meet, and doubt-clearing sessions. These activities engage you in an interactive learning environment and enhance your professional network."
    ],
    "about": [
      "This is a triple certification program designed for aspiring counsellors and therapists who want to grow and scale their business and entrepreneurial skills. Certified by the MEPSC, and featuring a specialization certificate from Counsel India, this program combines advanced knowledge in psychology and mental health with a focus on entrepreneurship. This comprehensive program empowers you to not only succeed in mental health counseling but also to grow and manage a successful counselling practice."
    ],
    "learningObjectives": [
      "Entrepreneurial Training with Experiential Learning",
      "Online Cohort Based Learning",
      "Real Life Case Studies & Role Plays",
      "On the Job Learning",
      "Capstone Projects, Assignments, & Workshops",
      "Work as a Mental Health Ambassador"
    ],
    "credentials": [
      {
        "id": "tab189",
        "label": "Certificate of Completion",
        "text": "This certificate honors your dedication, hard work, and mastery of essential skills and specializations. It celebrates your commitment to excellence and acknowledges your achievement in making a meaningful impact in your field moving forward.",
        "image": "https://prod-s3.counselindia.com/credential/CLEP_1728551796.png"
      },
      {
        "id": "tab190",
        "label": "Letter of Recommendation",
        "text": "This Letter of Recommendation acknowledges your successful completion of this program, demonstrating exceptional commitment and skill in your field. This certificate reflects the high standards and rigorous training of this program.",
        "image": "https://prod-s3.counselindia.com/credential/Letter of recommendation for Jon Doe (1)_1755835754.png"
      },
      {
        "id": "tab199",
        "label": "MEPSC Certificate",
        "text": "Upon successful completion of the course, you will also receive a MEPSC certification.",
        "image": "https://prod-s3.counselindia.com/credential/WhatsApp Image 2025-05-27 at 16.50.25_1748587499.jpeg"
      },
      {
        "id": "tab200",
        "label": "Psychology foundation course certificate",
        "text": "This certificate is a testament to your dedication, hard work, and mastery of essential skills and specializations. It recognizes your commitment to excellence and marks your achievement in creating meaningful impact in your field. You will receive this additional certificate upon completing the program, making your profile truly future-ready and industry-recognized.",
        "image": "https://prod-s3.counselindia.com/credential/WhatsApp Image 2025-05-30 at 12.13.37_1748587672.jpeg"
      }
    ],
    "curriculum": {
      "totalSessions": "246 Sessions",
      "totalHours": "450 hrs",
      "stats": [
        {
          "count": "12",
          "text": "Program Credits"
        },
        {
          "count": "4",
          "text": "Modules"
        },
        {
          "count": "246",
          "text": "Session hours"
        },
        {
          "count": "86",
          "text": "Practical hours"
        },
        {
          "count": "90",
          "text": "OJL hours"
        }
      ],
      "modules": [
        {
          "title": "Module 1: Foundations & Theoretical Frameworks",
          "topics": [
            "Introduction to Psychology & Psychological Dynamics",
            "Major Schools of Thought (CBT, Humanistic, Psychodynamic)",
            "The Role & Ethics of a Professional Counsellor"
          ]
        },
        {
          "title": "Module 2: Practical Skills & Intervention Strategies",
          "topics": [
            "Active Listening, Empathy, & Clinical Rapport Building",
            "Identifying Distortions & Emotional Imbalances",
            "Structured Therapy Sessions & Treatment Planning"
          ]
        },
        {
          "title": "Module 3: Clinical Application & Professional Practice",
          "topics": [
            "Live Case Studies & Supervised Roleplay Practice",
            "Documentation, Ethics, & Client Confidentiality",
            "Setting Up Your Private Practice & Career Pathways"
          ]
        }
      ]
    },
    "whoCanJoin": [
      "Aspiring Counsellors & Psychology Students",
      "Mental Health Professionals & Social Workers",
      "Doctors, Nurses & Healthcare Practitioners",
      "School Teachers, Educators & Academic Mentors",
      "HR Professionals & Corporate Wellness Coaches",
      "Parents, Homemakers & Career Changers Passionate About Mental Health"
    ],
    "scholarship": {
      "title": "Scholarship & Practical Learning Support",
      "subtitle": "Guaranteed practical internship & training support under our Har Ghar Counsellor initiative.",
      "image": "https://www.counselindia.com/assets/images/about/about-13.png",
      "points": [
        {
          "label": "Direct Mentorship",
          "desc": "One-on-one supervision by senior counselling psychologists."
        },
        {
          "label": "Hands-on Practice",
          "desc": "Live case discussions and clinical roleplay sessions."
        },
        {
          "label": "Fee Assistance",
          "desc": "Flexible installment plans and merit-based fee support."
        }
      ]
    },
    "faculty": [
      {
        "name": "Dr. Bobby Archer",
        "title": "Senior Clinical Psychologist & Master Trainer",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-01.jpg"
      },
      {
        "name": "Prof. Meenakshi Sharma",
        "title": "Head of Counselling Psychology & CBT Specialist",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-02.jpg"
      }
    ],
    "referEarn": {
      "title": "Refer & Earn with Counsel India",
      "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
      "buttonText": "Refer a Friend",
      "buttonLink": "https://www.counselindia.com/membership"
    },
    "reviews": [
      {
        "quote": "The practical exposure and case discussions helped me build immense confidence in dealing with real client scenarios. The mentors are always accessible and supportive.",
        "name": "Priyanka S.",
        "city": "New Delhi",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-01.jpg"
      },
      {
        "quote": "The curriculum is thorough and grounded in real-world application. Counsel India's approach makes practical psychology understandable and actionable.",
        "name": "Rahul Verma",
        "city": "Mumbai",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-02.jpg"
      }
    ],
    "partners": [
      "https://www.counselindia.com/assets/images/logo/GU_logo.png",
      "https://www.counselindia.com/assets/images/logo/msu_logo.png",
      "https://www.counselindia.com/assets/images/logo/icpemci.png",
      "https://www.counselindia.com/assets/images/logo/VGU.png"
    ],
    "faqs": [
      {
        "question": "Is it mandatory to complete the Psychology Foundation Course, and what are the details?",
        "answer": [
          "Yes, completing the Psychology Foundation Course is mandatory and complimentary for all enrolled learners. This foundational course must be completed within 3 months to qualify for the final certificate. It is designed to strengthen your basics in psychology, ensuring you have a solid understanding to excel in advanced modules of the program."
        ]
      },
      {
        "question": "Who can join the CLEP?",
        "answer": [
          "Anyone interested in becoming a professional counsellor or starting their own counselling venture can join. You don’t need prior experience, but a passion for helping others is essential."
        ]
      },
      {
        "question": "What will I learn in CLEP?",
        "answer": [
          "You’ll learn how to set up your own practice, understand business strategies, develop counselling skills, and effectively market your services."
        ]
      },
      {
        "question": "How long is the program?",
        "answer": [
          "The program typically lasts 12 months, with flexible learning modules that you can complete at your own pace."
        ]
      },
      {
        "question": "Do I need any special qualifications to enroll?",
        "answer": [
          "No special qualifications are required to enroll, but having a background in psychology or counselling can be helpful. The program is designed for both beginners and those with some experience."
        ]
      },
      {
        "question": "What kind of support will I receive during the program?",
        "answer": [
          "You’ll receive ongoing support from experienced industry leaders, access to a network of peers, and resources to help you succeed in both counselling and business aspects."
        ]
      },
      {
        "question": "Will I get a certificate after completing the program?",
        "answer": [
          "Yes, upon successful completion, you’ll receive a certificate that recognizes your achievement and readiness to start your counselling practice."
        ]
      },
      {
        "question": "What are the benefits of joining CLEP?",
        "answer": [
          "Joining CLEP provides you with the skills and knowledge to start your own practice, develop effective counselling strategies, and connect with a supportive community of professionals."
        ]
      },
      {
        "question": "How do I apply for the CLEP?",
        "answer": [
          "You can apply by visiting our website link, filling out the application form, and submitting any required documents. Our academic counsellor will get in touch with you to guide you through the next steps."
        ]
      }
    ]
  },
  "diploma-in-child-psychology-parenting": {
    "id": 14,
    "name": "Diploma in Child Psychology & Parenting",
    "slug": "diploma-in-child-psychology-parenting",
    "badgeSale": "50% OFF",
    "category": "Course",
    "bgImage": "https://prod-s3.counselindia.com/courses/background_image/child psychology_1722431559.jpg",
    "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
    "description": "Counsel India's Diploma in Child Psychology offers an unparalleled opportunity for educators, parents, aspiring child psychologists, and professionals working with children to deepen their understanding of childhood development and behavior. This program stands out with its expert-led curriculum, practical hands-on learning, and cutting-edge content tailored to contemporary needs. You'll gain valuable skills to support and guide children effectively, whether in educational settings, counseling, or personal interactions",
    "rating": 5,
    "enrollUrl": "https://rzp.io/rzp/X5Q7xhF",
    "phone": "+918031320449",
    "highlights": [
      {
        "title": "Duration",
        "desc": "1 year"
      },
      {
        "title": "Eligibility",
        "desc": "Graduation and above"
      },
      {
        "title": "Dual credentials",
        "desc": "CI certificate, Grade Sheet & Letter of Recommendation"
      },
      {
        "title": "Modules",
        "desc": "7"
      }
    ],
    "benefits": [
      "Live Interactive Classes by Senior Psychologists & Industry Experts",
      "Supervised Case Discussions & Hands-on Clinical Roleplay",
      "Practical Assessment Tools & Psychological Test Training",
      "1-on-1 Mentorship and Career Guidance Support",
      "Lifetime Access to Alumni Network and Community Forums",
      "Recognized Certification with National & International Accreditations"
    ],
    "about": [
      "Counsel India's Diploma in Child Psychology offers an unparalleled opportunity for educators, parents, aspiring child psychologists, and professionals working with children to deepen their understanding of childhood development and behavior. This program stands out with its expert-led curriculum, practical hands-on learning, and cutting-edge content tailored to contemporary needs. You'll gain valuable skills to support and guide children effectively, whether in educational settings, counseling, or personal interactions"
    ],
    "learningObjectives": [
      "Develop a foundational understanding of evidence-based psychological theories and counselling models.",
      "Master essential micro-skills: active listening, empathetic reflection, goal setting, and therapeutic rapport.",
      "Acquire hands-on expertise in conducting intake assessments, case conceptualization, and structured interventions."
    ],
    "credentials": [
      {
        "id": "tab186",
        "label": "Certificate of Completion",
        "text": "This certificate acknowledges your sincere dedication and mastery of key skills throughout the program. Your commitment to excellence is truly commendable, and we are confident that you will make a significant impact in your professional endeavors.",
        "image": "https://prod-s3.counselindia.com/credential/Diploma Child Psychology & Parenting-2_1728553068.png"
      },
      {
        "id": "tab188",
        "label": "LOR",
        "text": "This Letter of Recommendation acknowledges your successful completion of this program, demonstrating exceptional commitment and skill in your field. This certificate reflects the high standards and rigorous training of this program.",
        "image": "https://prod-s3.counselindia.com/credential/Letter of recommendation for Jon Doe (1)_1755835645.png"
      }
    ],
    "curriculum": {
      "totalSessions": "120 Sessions",
      "totalHours": "1110",
      "stats": [
        {
          "count": "20",
          "text": "Program Credit"
        },
        {
          "count": "4",
          "text": "Modules"
        },
        {
          "count": "630",
          "text": "Live Session Hours"
        },
        {
          "count": "204",
          "text": "Project hours"
        },
        {
          "count": "270",
          "text": "OJL hours"
        },
        {
          "count": "156",
          "text": "Theory hours"
        }
      ],
      "modules": [
        {
          "title": "Module 1: Foundations & Theoretical Frameworks",
          "topics": [
            "Introduction to Psychology & Psychological Dynamics",
            "Major Schools of Thought (CBT, Humanistic, Psychodynamic)",
            "The Role & Ethics of a Professional Counsellor"
          ]
        },
        {
          "title": "Module 2: Practical Skills & Intervention Strategies",
          "topics": [
            "Active Listening, Empathy, & Clinical Rapport Building",
            "Identifying Distortions & Emotional Imbalances",
            "Structured Therapy Sessions & Treatment Planning"
          ]
        },
        {
          "title": "Module 3: Clinical Application & Professional Practice",
          "topics": [
            "Live Case Studies & Supervised Roleplay Practice",
            "Documentation, Ethics, & Client Confidentiality",
            "Setting Up Your Private Practice & Career Pathways"
          ]
        }
      ]
    },
    "whoCanJoin": [
      "Aspiring Counsellors & Psychology Students",
      "Mental Health Professionals & Social Workers",
      "Doctors, Nurses & Healthcare Practitioners",
      "School Teachers, Educators & Academic Mentors",
      "HR Professionals & Corporate Wellness Coaches",
      "Parents, Homemakers & Career Changers Passionate About Mental Health"
    ],
    "scholarship": {
      "title": "Scholarship & Practical Learning Support",
      "subtitle": "Guaranteed practical internship & training support under our Har Ghar Counsellor initiative.",
      "image": "https://www.counselindia.com/assets/images/about/about-13.png",
      "points": [
        {
          "label": "Direct Mentorship",
          "desc": "One-on-one supervision by senior counselling psychologists."
        },
        {
          "label": "Hands-on Practice",
          "desc": "Live case discussions and clinical roleplay sessions."
        },
        {
          "label": "Fee Assistance",
          "desc": "Flexible installment plans and merit-based fee support."
        }
      ]
    },
    "faculty": [
      {
        "name": "Dr. Bobby Archer",
        "title": "Senior Clinical Psychologist & Master Trainer",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-01.jpg"
      },
      {
        "name": "Prof. Meenakshi Sharma",
        "title": "Head of Counselling Psychology & CBT Specialist",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-02.jpg"
      }
    ],
    "referEarn": {
      "title": "Refer & Earn with Counsel India",
      "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
      "buttonText": "Refer a Friend",
      "buttonLink": "https://www.counselindia.com/membership"
    },
    "reviews": [
      {
        "quote": "The practical exposure and case discussions helped me build immense confidence in dealing with real client scenarios. The mentors are always accessible and supportive.",
        "name": "Priyanka S.",
        "city": "New Delhi",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-01.jpg"
      },
      {
        "quote": "The curriculum is thorough and grounded in real-world application. Counsel India's approach makes practical psychology understandable and actionable.",
        "name": "Rahul Verma",
        "city": "Mumbai",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-02.jpg"
      }
    ],
    "partners": [
      "https://www.counselindia.com/assets/images/logo/GU_logo.png",
      "https://www.counselindia.com/assets/images/logo/msu_logo.png",
      "https://www.counselindia.com/assets/images/logo/icpemci.png",
      "https://www.counselindia.com/assets/images/logo/VGU.png"
    ],
    "faqs": [
      {
        "question": "Who all can attend this Event?",
        "answer": [
          "BA/MA I/O Psychology Students, Practicing psychologists, Counsellors, NLP Trainers, Managers, Leaders, Entrepreneurs, Research Scholars Psychology Masters Students of I/O Counselling Students Management Professionals Teachers/Principals"
        ]
      },
      {
        "question": "Who all can attend this Workshop?",
        "answer": [
          "BA/MA I/O Psychology Students, Practicing psychologists, NLP Trainers, HR Professionals, Managers, Executives, Leaders, Entrepreneurs, Research Scholars Psychology Masters Students of I/O Counselling Students Management Professionals Teachers/Principals"
        ]
      },
      {
        "question": "Who is this program designed for?",
        "answer": [
          "This program is designed for a variety of individuals, including recent psychology graduates, HR professionals, managers, and anyone interested in pursuing a career related to improving workplace behavior and performance."
        ]
      }
    ]
  },
  "therapy-master-course": {
    "id": 15,
    "name": "Therapy Master Course",
    "slug": "therapy-master-course",
    "badgeSale": "50% OFF",
    "category": "Course",
    "bgImage": "https://prod-s3.counselindia.com/courses/background_image/therapy-master-course_1687158237.webp",
    "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
    "description": "Welcome to our comprehensive Therapy Master Course! In this transformative program, we will embark on a journey through the vast landscape of therapeutic modalities, equipping you with a deep understanding and practical skills to help individuals overcome emotional, psychological, and behavioral challenges. Our course encompasses a diverse range of therapeutic approaches and techniques, ensuring you are well-prepared to make a positive impact in the lives of those seeking help. This course is supported by the European Institute of Management and Technology (EIMT) and offers learners valuable opportunities to gain practical skills and industry connections through both on-campus and online programs. .",
    "rating": 5,
    "enrollUrl": "https://rzp.io/rzp/X5Q7xhF",
    "phone": "+918031320449",
    "highlights": [
      {
        "title": "Dual Credentials",
        "desc": "CI Certificate , Grade Sheets"
      },
      {
        "title": "Duration",
        "desc": "6 Months"
      },
      {
        "title": "4 Core Modules",
        "desc": "Understanding Psychology & Therapy, Therapies & its practices, Assessment, Marketing & Customer Acquisition"
      },
      {
        "title": "Program start Date",
        "desc": "22 August 2026"
      }
    ],
    "benefits": [
      "15 core therapy sessions with a comprehensive course roadmap and milestones.",
      "Key therapy skills and learning objectives defined.",
      "All sessions to be conducted live online by RCI certified trainers and industry experts.",
      "Personalized Mentorship",
      "Job Support",
      "Western Style of Psychology Learning",
      "Support to start your own practice or business setup",
      "4 Core Modules + Practical Assignments, Assessments, Role Plays and Case Studies for each module.",
      "Attendance will be recorded at each session. Students must meet the 75% threshold to qualify for the full 10 marks."
    ],
    "about": [
      "Welcome to our comprehensive Therapy Master Course! In this transformative program, we will embark on a journey through the vast landscape of therapeutic modalities, equipping you with a deep understanding and practical skills to help individuals overcome emotional, psychological, and behavioral challenges. Our course encompasses a diverse range of therapeutic approaches and techniques, ensuring you are well-prepared to make a positive impact in the lives of those seeking help. This course is supported by the European Institute of Management and Technology (EIMT) and offers learners valuable opportunities to gain practical skills and industry connections through both on-campus and online programs. ."
    ],
    "learningObjectives": [
      "Gain a comprehensive understanding of various therapeutic techniques through hands-on experience.",
      "Exposure to more career opportunities as Counsellor",
      "Upskill as a counsellor with multiple therapy skills",
      "Participate in instructor-led training sessions for expert guidance and knowledge."
    ],
    "credentials": [
      {
        "id": "tab161",
        "label": "Counsel India Certificate",
        "text": "Upon successful completion of the course, you will receive a recognized certificate from Counsel India, validating your skills and expertise in the field.",
        "image": "https://prod-s3.counselindia.com/credential/TMC-2_1728552083.png"
      },
      {
        "id": "tab45",
        "label": "Letter Of Recommendation",
        "text": "Upon successful completion of the course, you will be eligible to receive a Letter of Recommendation from Counsel India, endorsing your expertise and professional capabilities in the field .",
        "image": "https://prod-s3.counselindia.com/credential/Letter of recommendation for Jon Doe (1)_1755835676.png"
      },
      {
        "id": "tab193",
        "label": "EIMT certificates",
        "text": "Upon successful completion of the course, you will be awarded with a prestigious certificate from the European Institute of Manage ment & Training, offering you with valuable opportunities to gain practical skills and industry connections through both on-campus and online programs.",
        "image": "https://prod-s3.counselindia.com/credential/EIMT Certificate_1728045371.png"
      }
    ],
    "curriculum": {
      "totalSessions": "36 Sessions",
      "totalHours": "96 Hours",
      "stats": [
        {
          "count": "3",
          "text": "Months"
        },
        {
          "count": "3",
          "text": "Core Modules"
        },
        {
          "count": "20+",
          "text": "Topics Covered"
        },
        {
          "count": "24+",
          "text": "Live Sessions"
        }
      ],
      "modules": [
        {
          "title": "Module 1: Foundations & Theoretical Frameworks",
          "topics": [
            "Introduction to Psychology & Psychological Dynamics",
            "Major Schools of Thought (CBT, Humanistic, Psychodynamic)",
            "The Role & Ethics of a Professional Counsellor"
          ]
        },
        {
          "title": "Module 2: Practical Skills & Intervention Strategies",
          "topics": [
            "Active Listening, Empathy, & Clinical Rapport Building",
            "Identifying Distortions & Emotional Imbalances",
            "Structured Therapy Sessions & Treatment Planning"
          ]
        },
        {
          "title": "Module 3: Clinical Application & Professional Practice",
          "topics": [
            "Live Case Studies & Supervised Roleplay Practice",
            "Documentation, Ethics, & Client Confidentiality",
            "Setting Up Your Private Practice & Career Pathways"
          ]
        }
      ]
    },
    "whoCanJoin": [
      "Aspiring Counsellors & Psychology Students",
      "Mental Health Professionals & Social Workers",
      "Doctors, Nurses & Healthcare Practitioners",
      "School Teachers, Educators & Academic Mentors",
      "HR Professionals & Corporate Wellness Coaches",
      "Parents, Homemakers & Career Changers Passionate About Mental Health"
    ],
    "scholarship": {
      "title": "Scholarship & Practical Learning Support",
      "subtitle": "Guaranteed practical internship & training support under our Har Ghar Counsellor initiative.",
      "image": "https://www.counselindia.com/assets/images/about/about-13.png",
      "points": [
        {
          "label": "Direct Mentorship",
          "desc": "One-on-one supervision by senior counselling psychologists."
        },
        {
          "label": "Hands-on Practice",
          "desc": "Live case discussions and clinical roleplay sessions."
        },
        {
          "label": "Fee Assistance",
          "desc": "Flexible installment plans and merit-based fee support."
        }
      ]
    },
    "faculty": [
      {
        "name": "Dr. Bobby Archer",
        "title": "Senior Clinical Psychologist & Master Trainer",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-01.jpg"
      },
      {
        "name": "Prof. Meenakshi Sharma",
        "title": "Head of Counselling Psychology & CBT Specialist",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-02.jpg"
      }
    ],
    "referEarn": {
      "title": "Refer & Earn with Counsel India",
      "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
      "buttonText": "Refer a Friend",
      "buttonLink": "https://www.counselindia.com/membership"
    },
    "reviews": [
      {
        "quote": "The practical exposure and case discussions helped me build immense confidence in dealing with real client scenarios. The mentors are always accessible and supportive.",
        "name": "Priyanka S.",
        "city": "New Delhi",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-01.jpg"
      },
      {
        "quote": "The curriculum is thorough and grounded in real-world application. Counsel India's approach makes practical psychology understandable and actionable.",
        "name": "Rahul Verma",
        "city": "Mumbai",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-02.jpg"
      }
    ],
    "partners": [
      "https://www.counselindia.com/assets/images/logo/GU_logo.png",
      "https://www.counselindia.com/assets/images/logo/msu_logo.png",
      "https://www.counselindia.com/assets/images/logo/icpemci.png",
      "https://www.counselindia.com/assets/images/logo/VGU.png"
    ],
    "faqs": [
      {
        "question": "Existential Therapy",
        "answer": [
          "The Therapy Master Course typically lasts for 6 months, depending on the pace of learning and course format."
        ]
      },
      {
        "question": "Is it mandatory to complete the Psychology Foundation Course, and what are the details?",
        "answer": [
          "Yes, completing the Psychology Foundation Course is mandatory and complimentary for all enrolled learners. This foundational course must be completed within 3 months to qualify for the final certificate. It is designed to strengthen your basics in psychology, ensuring you have a solid understanding to excel in advanced modules of the program."
        ]
      },
      {
        "question": "Will I receive a certification upon completion?",
        "answer": [
          "Yes, absolutely! Upon the successful completion of our enriching bootcamp, each attendee will be presented with a prestigious certification of completion. This certificate serves as an acknowledgment of your dedicated participation and the mastery you've achieved in honing your counselling skills throughout the session."
        ]
      },
      {
        "question": "Is the course suitable for beginners in psychology or therapy?",
        "answer": [
          "Absolutely. The Therapy Master Course is designed for both beginners and professionals, providing foundational and advanced knowledge in therapy practices."
        ]
      },
      {
        "question": "What practical experience will I gain during the course?",
        "answer": [
          "The course includes hands-on training, case studies, and supervised practice sessions to ensure you are well-prepared for real-world therapy settings."
        ]
      }
    ]
  },
  "masters-in-child-psychology-work-integrated-skill-based-program)": {
    "id": 10,
    "name": "Masters in Child Psychology",
    "slug": "masters-in-child-psychology-work-integrated-skill-based-program%29",
    "badgeSale": "40% OFF",
    "category": "Course",
    "bgImage": "https://prod-s3.counselindia.com/courses/background_image/New Project (41)_1713437634.webp",
    "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
    "description": "(Internship/Apprenticeship Embedded) - Essentially designed for individuals passionate about understanding and nurturing children, this comprehensive, detailed program combines theoretical insights with practical training. It covers a broad range of topics, starting from cognitive development to social and emotional well-being. Learners will gain an in-depth understanding of the complexities of Child Psychology. Engage in ground-breaking research initiatives that ultimately contribute to Child Psychology. Recognised by the IPA(International Psychology Association) & Skill India, provides learners with a solid foundation for a successful career in mental health.",
    "rating": 5,
    "enrollUrl": "https://rzp.io/rzp/X5Q7xhF",
    "phone": "+918031320449",
    "highlights": [
      {
        "title": "Duration",
        "desc": "24 Months"
      },
      {
        "title": "Eligibility",
        "desc": "Graduation & above"
      },
      {
        "title": "Semesters",
        "desc": "4"
      },
      {
        "title": "Program Credits",
        "desc": "Standard"
      },
      {
        "title": "Program start date",
        "desc": "22 August 2026"
      }
    ],
    "benefits": [
      "Learn about the multiple aspects of a child’s growth, covering physical, cognitive, social, and emotional aspects, to develop an overall understanding of their developmental phase.",
      "Explore the sequential milestones that show the key stages of development in childhood, examining the behavioral patterns, abilities in children, and challenges they encounter at each phase, providing important insights for observation and effective intervention.",
      "Learn about the underlying factors which influence children's behaviors, including environmental, social, and biological factors, and master countless evidence-based techniques to help manage and redirect behavior positively, and foster healthy development.",
      "Examine the interplay of family dynamics, parenting styles, socioeconomic factors, and cultural influences which impact the development of children, recognizing the significant role played by families in shaping their experiences and outcomes.",
      "Access a diverse toolkit of intervention strategies to address diverse challenges that are commonly encountered by children, like academic difficulties, emotional disturbances, or social adjustment issues, and help promote resilience and well-being.",
      "Build observational abilities and assess and interpret children's behaviors, interactions, and developmental progress accurately, by employing systematic observation techniques and assessment tools and develop tailored interventions.",
      "Get practical training, including supervised internships, hands-on exercises, or fieldwork, to apply theoretical insights in real-world settings, developing and enhancing practical skills and building your professional competency.",
      "Stay updated about latest research and empirical findings in the field, critically evaluating research material to make use of evidence-based practices and innovative approaches to promoting children's well-being.",
      "Explore diverse career pathways in education, counselling, clinical psychology, social work, or child advocacy, and get equipped with a strong foundation of knowledge, practical skills, and ethical principles to make meaningful contributions to children's lives and society."
    ],
    "about": [
      "(Internship/Apprenticeship Embedded) - Essentially designed for individuals passionate about understanding and nurturing children, this comprehensive, detailed program combines theoretical insights with practical training. It covers a broad range of topics, starting from cognitive development to social and emotional well-being. Learners will gain an in-depth understanding of the complexities of Child Psychology. Engage in ground-breaking research initiatives that ultimately contribute to Child Psychology. Recognised by the IPA(International Psychology Association) & Skill India, provides learners with a solid foundation for a successful career in mental health."
    ],
    "learningObjectives": [
      "Develop a foundational understanding of evidence-based psychological theories and counselling models.",
      "Master essential micro-skills: active listening, empathetic reflection, goal setting, and therapeutic rapport.",
      "Acquire hands-on expertise in conducting intake assessments, case conceptualization, and structured interventions."
    ],
    "credentials": [
      {
        "id": "tab85",
        "label": "IPA Certificate",
        "text": "Upon successful completion of the course, you will be awarded a prestigious cerificate from IPA( International Psychology Association)",
        "image": "https://prod-s3.counselindia.com/credential/Screenshot 2025-08-04 114105_1754288852.png"
      },
      {
        "id": "tab86",
        "label": "MEPSC Certificate",
        "text": "After the successful training and assessment, the Management & Entrepreneurship and Professionals Skills Council (MEPSC) will issue a skill certificate, add your database in the central skills qualification database which can be accessed online for verification and due-diligence by employers. This skills certification will be valid across all G20 nations.",
        "image": "https://prod-s3.counselindia.com/credential/Certificate Template - Job Role (1)_1753182320.jpg"
      },
      {
        "id": "tab194",
        "label": "Certificate of Completion",
        "text": "This certificate honors your dedication, hard work, and mastery of essential skills and specializations. It celebrates your commitment to excellence and acknowledges your achievement in making a meaningful impact in your field moving forward.",
        "image": "https://prod-s3.counselindia.com/credential/M.A Child Psychology & Developemnt_1728551938.png"
      },
      {
        "id": "tab84",
        "label": "Letter of Recommendation",
        "text": "This globally recognized credential showcases your expertise and commitment in your field.",
        "image": "https://prod-s3.counselindia.com/credential/Letter of recommendation for Jon Doe (1)_1755835795.png"
      }
    ],
    "curriculum": {
      "totalSessions": "480 Sessions",
      "totalHours": "2220 Hrs",
      "stats": [
        {
          "count": "Standard",
          "text": "Program Credits"
        },
        {
          "count": "21",
          "text": "Subjects"
        },
        {
          "count": "480",
          "text": "Live Session Hours"
        },
        {
          "count": "840",
          "text": "Project Hours"
        },
        {
          "count": "900",
          "text": "OJL Hours"
        },
        {
          "count": "3",
          "text": "Projects"
        }
      ],
      "modules": [
        {
          "title": "Module 1: Foundations & Theoretical Frameworks",
          "topics": [
            "Introduction to Psychology & Psychological Dynamics",
            "Major Schools of Thought (CBT, Humanistic, Psychodynamic)",
            "The Role & Ethics of a Professional Counsellor"
          ]
        },
        {
          "title": "Module 2: Practical Skills & Intervention Strategies",
          "topics": [
            "Active Listening, Empathy, & Clinical Rapport Building",
            "Identifying Distortions & Emotional Imbalances",
            "Structured Therapy Sessions & Treatment Planning"
          ]
        },
        {
          "title": "Module 3: Clinical Application & Professional Practice",
          "topics": [
            "Live Case Studies & Supervised Roleplay Practice",
            "Documentation, Ethics, & Client Confidentiality",
            "Setting Up Your Private Practice & Career Pathways"
          ]
        }
      ]
    },
    "whoCanJoin": [
      "Aspiring Counsellors & Psychology Students",
      "Mental Health Professionals & Social Workers",
      "Doctors, Nurses & Healthcare Practitioners",
      "School Teachers, Educators & Academic Mentors",
      "HR Professionals & Corporate Wellness Coaches",
      "Parents, Homemakers & Career Changers Passionate About Mental Health"
    ],
    "scholarship": {
      "title": "Scholarship & Practical Learning Support",
      "subtitle": "Guaranteed practical internship & training support under our Har Ghar Counsellor initiative.",
      "image": "https://www.counselindia.com/assets/images/about/about-13.png",
      "points": [
        {
          "label": "Direct Mentorship",
          "desc": "One-on-one supervision by senior counselling psychologists."
        },
        {
          "label": "Hands-on Practice",
          "desc": "Live case discussions and clinical roleplay sessions."
        },
        {
          "label": "Fee Assistance",
          "desc": "Flexible installment plans and merit-based fee support."
        }
      ]
    },
    "faculty": [
      {
        "name": "Dr. Bobby Archer",
        "title": "Senior Clinical Psychologist & Master Trainer",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-01.jpg"
      },
      {
        "name": "Prof. Meenakshi Sharma",
        "title": "Head of Counselling Psychology & CBT Specialist",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-02.jpg"
      }
    ],
    "referEarn": {
      "title": "Refer & Earn with Counsel India",
      "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
      "buttonText": "Refer a Friend",
      "buttonLink": "https://www.counselindia.com/membership"
    },
    "reviews": [
      {
        "quote": "The practical exposure and case discussions helped me build immense confidence in dealing with real client scenarios. The mentors are always accessible and supportive.",
        "name": "Priyanka S.",
        "city": "New Delhi",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-01.jpg"
      },
      {
        "quote": "The curriculum is thorough and grounded in real-world application. Counsel India's approach makes practical psychology understandable and actionable.",
        "name": "Rahul Verma",
        "city": "Mumbai",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-02.jpg"
      }
    ],
    "partners": [
      "https://www.counselindia.com/assets/images/logo/GU_logo.png",
      "https://www.counselindia.com/assets/images/logo/msu_logo.png",
      "https://www.counselindia.com/assets/images/logo/icpemci.png",
      "https://www.counselindia.com/assets/images/logo/VGU.png"
    ],
    "faqs": [
      {
        "question": "Introduction to Human Psychology",
        "answer": [
          "Yes, completing the Psychology Foundation Course is mandatory and complimentary for all enrolled learners. This foundational course must be completed within 3 months to qualify for the final certificate. It is designed to strengthen your basics in psychology, ensuring you have a solid understanding to excel in advanced modules of the program."
        ]
      },
      {
        "question": "How does this program prepare graduates to work with children with special needs or developmental disabilities?",
        "answer": [
          "This Pr ogram include s coursework and practical training in assessing and supporting children with a wide range of developmental challenges, including autism spectrum disorder, learning disabilities, ADHD, emotional and behavioral disorders, and trauma-related difficulties. Students learn evidence-based interventions and strategies to promote positive outcomes for children with special needs."
        ]
      },
      {
        "question": "How does this program address ethical considerations in working with children and families?",
        "answer": [
          "Ethical principles and guidelines are integrated into the curriculum to ensure that students develop a strong understanding of professional ethics and legal standards in child psychology practice. Students learn about informed consent, confidentiality, boundary issues, cultural competence, and ethical decision-making in their interactions with children and families."
        ]
      },
      {
        "question": "Can the credits earned in this program be transferred to other academic programs or institutions?",
        "answer": [
          "Yes, our program follows a stackable system of education, allowing students to earn credits that may be transferable to other academic programs or institutions. This flexibility enables students to build upon their existing qualifications and pursue further education or specialization in Career Counselling."
        ]
      }
    ]
  },
  "masters-in-child-psychology-work-integrated-skill-based-program": {
    "id": 10,
    "name": "Masters in Child Psychology",
    "slug": "masters-in-child-psychology-work-integrated-skill-based-program%29",
    "badgeSale": "40% OFF",
    "category": "Course",
    "bgImage": "https://prod-s3.counselindia.com/courses/background_image/New Project (41)_1713437634.webp",
    "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
    "description": "(Internship/Apprenticeship Embedded) - Essentially designed for individuals passionate about understanding and nurturing children, this comprehensive, detailed program combines theoretical insights with practical training. It covers a broad range of topics, starting from cognitive development to social and emotional well-being. Learners will gain an in-depth understanding of the complexities of Child Psychology. Engage in ground-breaking research initiatives that ultimately contribute to Child Psychology. Recognised by the IPA(International Psychology Association) & Skill India, provides learners with a solid foundation for a successful career in mental health.",
    "rating": 5,
    "enrollUrl": "https://rzp.io/rzp/X5Q7xhF",
    "phone": "+918031320449",
    "highlights": [
      {
        "title": "Duration",
        "desc": "24 Months"
      },
      {
        "title": "Eligibility",
        "desc": "Graduation & above"
      },
      {
        "title": "Semesters",
        "desc": "4"
      },
      {
        "title": "Program Credits",
        "desc": "Standard"
      },
      {
        "title": "Program start date",
        "desc": "22 August 2026"
      }
    ],
    "benefits": [
      "Learn about the multiple aspects of a child’s growth, covering physical, cognitive, social, and emotional aspects, to develop an overall understanding of their developmental phase.",
      "Explore the sequential milestones that show the key stages of development in childhood, examining the behavioral patterns, abilities in children, and challenges they encounter at each phase, providing important insights for observation and effective intervention.",
      "Learn about the underlying factors which influence children's behaviors, including environmental, social, and biological factors, and master countless evidence-based techniques to help manage and redirect behavior positively, and foster healthy development.",
      "Examine the interplay of family dynamics, parenting styles, socioeconomic factors, and cultural influences which impact the development of children, recognizing the significant role played by families in shaping their experiences and outcomes.",
      "Access a diverse toolkit of intervention strategies to address diverse challenges that are commonly encountered by children, like academic difficulties, emotional disturbances, or social adjustment issues, and help promote resilience and well-being.",
      "Build observational abilities and assess and interpret children's behaviors, interactions, and developmental progress accurately, by employing systematic observation techniques and assessment tools and develop tailored interventions.",
      "Get practical training, including supervised internships, hands-on exercises, or fieldwork, to apply theoretical insights in real-world settings, developing and enhancing practical skills and building your professional competency.",
      "Stay updated about latest research and empirical findings in the field, critically evaluating research material to make use of evidence-based practices and innovative approaches to promoting children's well-being.",
      "Explore diverse career pathways in education, counselling, clinical psychology, social work, or child advocacy, and get equipped with a strong foundation of knowledge, practical skills, and ethical principles to make meaningful contributions to children's lives and society."
    ],
    "about": [
      "(Internship/Apprenticeship Embedded) - Essentially designed for individuals passionate about understanding and nurturing children, this comprehensive, detailed program combines theoretical insights with practical training. It covers a broad range of topics, starting from cognitive development to social and emotional well-being. Learners will gain an in-depth understanding of the complexities of Child Psychology. Engage in ground-breaking research initiatives that ultimately contribute to Child Psychology. Recognised by the IPA(International Psychology Association) & Skill India, provides learners with a solid foundation for a successful career in mental health."
    ],
    "learningObjectives": [
      "Develop a foundational understanding of evidence-based psychological theories and counselling models.",
      "Master essential micro-skills: active listening, empathetic reflection, goal setting, and therapeutic rapport.",
      "Acquire hands-on expertise in conducting intake assessments, case conceptualization, and structured interventions."
    ],
    "credentials": [
      {
        "id": "tab85",
        "label": "IPA Certificate",
        "text": "Upon successful completion of the course, you will be awarded a prestigious cerificate from IPA( International Psychology Association)",
        "image": "https://prod-s3.counselindia.com/credential/Screenshot 2025-08-04 114105_1754288852.png"
      },
      {
        "id": "tab86",
        "label": "MEPSC Certificate",
        "text": "After the successful training and assessment, the Management & Entrepreneurship and Professionals Skills Council (MEPSC) will issue a skill certificate, add your database in the central skills qualification database which can be accessed online for verification and due-diligence by employers. This skills certification will be valid across all G20 nations.",
        "image": "https://prod-s3.counselindia.com/credential/Certificate Template - Job Role (1)_1753182320.jpg"
      },
      {
        "id": "tab194",
        "label": "Certificate of Completion",
        "text": "This certificate honors your dedication, hard work, and mastery of essential skills and specializations. It celebrates your commitment to excellence and acknowledges your achievement in making a meaningful impact in your field moving forward.",
        "image": "https://prod-s3.counselindia.com/credential/M.A Child Psychology & Developemnt_1728551938.png"
      },
      {
        "id": "tab84",
        "label": "Letter of Recommendation",
        "text": "This globally recognized credential showcases your expertise and commitment in your field.",
        "image": "https://prod-s3.counselindia.com/credential/Letter of recommendation for Jon Doe (1)_1755835795.png"
      }
    ],
    "curriculum": {
      "totalSessions": "480 Sessions",
      "totalHours": "2220 Hrs",
      "stats": [
        {
          "count": "Standard",
          "text": "Program Credits"
        },
        {
          "count": "21",
          "text": "Subjects"
        },
        {
          "count": "480",
          "text": "Live Session Hours"
        },
        {
          "count": "840",
          "text": "Project Hours"
        },
        {
          "count": "900",
          "text": "OJL Hours"
        },
        {
          "count": "3",
          "text": "Projects"
        }
      ],
      "modules": [
        {
          "title": "Module 1: Foundations & Theoretical Frameworks",
          "topics": [
            "Introduction to Psychology & Psychological Dynamics",
            "Major Schools of Thought (CBT, Humanistic, Psychodynamic)",
            "The Role & Ethics of a Professional Counsellor"
          ]
        },
        {
          "title": "Module 2: Practical Skills & Intervention Strategies",
          "topics": [
            "Active Listening, Empathy, & Clinical Rapport Building",
            "Identifying Distortions & Emotional Imbalances",
            "Structured Therapy Sessions & Treatment Planning"
          ]
        },
        {
          "title": "Module 3: Clinical Application & Professional Practice",
          "topics": [
            "Live Case Studies & Supervised Roleplay Practice",
            "Documentation, Ethics, & Client Confidentiality",
            "Setting Up Your Private Practice & Career Pathways"
          ]
        }
      ]
    },
    "whoCanJoin": [
      "Aspiring Counsellors & Psychology Students",
      "Mental Health Professionals & Social Workers",
      "Doctors, Nurses & Healthcare Practitioners",
      "School Teachers, Educators & Academic Mentors",
      "HR Professionals & Corporate Wellness Coaches",
      "Parents, Homemakers & Career Changers Passionate About Mental Health"
    ],
    "scholarship": {
      "title": "Scholarship & Practical Learning Support",
      "subtitle": "Guaranteed practical internship & training support under our Har Ghar Counsellor initiative.",
      "image": "https://www.counselindia.com/assets/images/about/about-13.png",
      "points": [
        {
          "label": "Direct Mentorship",
          "desc": "One-on-one supervision by senior counselling psychologists."
        },
        {
          "label": "Hands-on Practice",
          "desc": "Live case discussions and clinical roleplay sessions."
        },
        {
          "label": "Fee Assistance",
          "desc": "Flexible installment plans and merit-based fee support."
        }
      ]
    },
    "faculty": [
      {
        "name": "Dr. Bobby Archer",
        "title": "Senior Clinical Psychologist & Master Trainer",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-01.jpg"
      },
      {
        "name": "Prof. Meenakshi Sharma",
        "title": "Head of Counselling Psychology & CBT Specialist",
        "image": "https://www.counselindia.com/assets/images/instructor/instructor-02.jpg"
      }
    ],
    "referEarn": {
      "title": "Refer & Earn with Counsel India",
      "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
      "buttonText": "Refer a Friend",
      "buttonLink": "https://www.counselindia.com/membership"
    },
    "reviews": [
      {
        "quote": "The practical exposure and case discussions helped me build immense confidence in dealing with real client scenarios. The mentors are always accessible and supportive.",
        "name": "Priyanka S.",
        "city": "New Delhi",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-01.jpg"
      },
      {
        "quote": "The curriculum is thorough and grounded in real-world application. Counsel India's approach makes practical psychology understandable and actionable.",
        "name": "Rahul Verma",
        "city": "Mumbai",
        "image": "https://www.counselindia.com/assets/images/testimonial/testimonial-02.jpg"
      }
    ],
    "partners": [
      "https://www.counselindia.com/assets/images/logo/GU_logo.png",
      "https://www.counselindia.com/assets/images/logo/msu_logo.png",
      "https://www.counselindia.com/assets/images/logo/icpemci.png",
      "https://www.counselindia.com/assets/images/logo/VGU.png"
    ],
    "faqs": [
      {
        "question": "Introduction to Human Psychology",
        "answer": [
          "Yes, completing the Psychology Foundation Course is mandatory and complimentary for all enrolled learners. This foundational course must be completed within 3 months to qualify for the final certificate. It is designed to strengthen your basics in psychology, ensuring you have a solid understanding to excel in advanced modules of the program."
        ]
      },
      {
        "question": "How does this program prepare graduates to work with children with special needs or developmental disabilities?",
        "answer": [
          "This Pr ogram include s coursework and practical training in assessing and supporting children with a wide range of developmental challenges, including autism spectrum disorder, learning disabilities, ADHD, emotional and behavioral disorders, and trauma-related difficulties. Students learn evidence-based interventions and strategies to promote positive outcomes for children with special needs."
        ]
      },
      {
        "question": "How does this program address ethical considerations in working with children and families?",
        "answer": [
          "Ethical principles and guidelines are integrated into the curriculum to ensure that students develop a strong understanding of professional ethics and legal standards in child psychology practice. Students learn about informed consent, confidentiality, boundary issues, cultural competence, and ethical decision-making in their interactions with children and families."
        ]
      },
      {
        "question": "Can the credits earned in this program be transferred to other academic programs or institutions?",
        "answer": [
          "Yes, our program follows a stackable system of education, allowing students to earn credits that may be transferable to other academic programs or institutions. This flexibility enables students to build upon their existing qualifications and pursue further education or specialization in Career Counselling."
        ]
      }
    ]
  }
};

export function getCourseDetailBySlug(slug: string): CourseDetailData {
  const decodedSlug = decodeURIComponent(slug);
  if (COURSE_DETAILS_MAP[slug]) {
    return COURSE_DETAILS_MAP[slug];
  }
  if (COURSE_DETAILS_MAP[decodedSlug]) {
    return COURSE_DETAILS_MAP[decodedSlug];
  }
  // Try matching without trailing parenthesis or special symbols
  const cleanSlug = slug.replace(/[%29)]/g, '');
  if (COURSE_DETAILS_MAP[cleanSlug]) {
    return COURSE_DETAILS_MAP[cleanSlug];
  }
  return COURSE_DETAILS_MAP["counselling-master-course-foundation"];
}
