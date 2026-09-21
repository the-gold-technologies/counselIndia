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
        "description": "The Counselling Master Course is a foundation course on various psychological problems that a professional counsellor must have to cater to the needs of the client. Counselling is a noble profession as you get to be directly involved in helping people who are suffering from any mental disturbance or emotional imbalance such as depression, anxiety, addiction, etc. Recognized by the UGC and accredited with an A+ rating by NAAC in 2022, this collaboration with Galgotia\u2019s University offers UGC-approved psychology courses, providing learners with a solid foundation for a successful career in mental health.",
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
                "desc": "26 September 2026"
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
                "image": "https://prod-s3.counselindia.com/credential/%20CMC%20Foundation-3_1728552205.png"
            },
            {
                "id": "tab167",
                "label": "Letter of Recommendation",
                "text": "Upon successful completion of the course, you will be eligible to receive a Letter of Recommendation from Counsel India, endorsing your expertise and professional capabilities in the field.",
                "image": "https://prod-s3.counselindia.com/credential/Letter%20of%20recommendation%20for%20Jon%20Doe%20%281%29_1755835658.png"
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
                    "title": "Understanding Psychology/Counselling",
                    "topics": [
                        "Introduction to Mental Health: What is Mental Health, Purpose and Areas.",
                        "Need of Learning Psychology/Counseling and Current Trends .",
                        "Differentiating between normal variations and clinical conditions.",
                        "Basic Counseling Skills"
                    ]
                },
                {
                    "title": "Basics , Goals and Ethics of Counselling",
                    "topics": [
                        "Introduction to basic counseling techniques (reflection, paraphrasing, summarizing)",
                        "Goal setting and treatment planning",
                        "Ethical considerations and professional standards in counseling and psychology",
                        "What is Case Studies and Analysis"
                    ]
                },
                {
                    "title": "Practice and Go to Market",
                    "topics": [
                        "Practical Class: Case Study / Discussion / Research Article Discussion / Session Structure",
                        "Self-Care and Wellness",
                        "Basics of marketing for Counsellors",
                        "How to build Online Setup"
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
            "image": "https://prod-s3.counselindia.com/mastergalaxyimages/Untitled%20design-23_1734162900.png",
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
                "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Himanshi%20Singh_1673871256.png"
            },
            {
                "name": "Ayushi Madaan",
                "title": "Clinical Psychologist",
                "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Ayushi%20Madaan_1673869282.png"
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
            "buttonLink": "https://www.counselindia.com/refer-and-earn?course_id=10"
        },
        "reviews": [
            {
                "quote": "Counselling Master Course is really a great Course. Efforts made by experts is really appreciable. I suggest everyone to take this course and learning Counselling Framework to be successful in life.",
                "name": "Esha Sharma",
                "city": "Ajmer",
                "image": "https://prod-s3.counselindia.com/success_stories/esha.jpg"
            },
            {
                "quote": "I have experienced Counselling Master Course which is a great learning experience to get success in life.",
                "name": "Neha Gupta",
                "city": "Manali",
                "image": "https://prod-s3.counselindia.com/success_stories/nehaa.jpg"
            },
            {
                "quote": "The overall experience was top notch. The classes were perfectly on time and trainers were very professional.",
                "name": "Maninder Kaur",
                "city": "Chandigarh",
                "image": "https://prod-s3.counselindia.com/success_stories/maninder-kaur.jpg"
            },
            {
                "quote": "Counselling psychology is one such course that requires more of practical knowledge. Inspite of COVID situation, the team managed well through online platform , coming from a psychology background got my basics even more stronger from this experience.",
                "name": "Vishal Yadav",
                "city": "Patna",
                "image": "https://prod-s3.counselindia.com/success_stories/vishal.jpg"
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
  "id": 45,
  "name": "Certificate in Child Psychology",
  "slug": "certificate-in-child-psychology",
  "badgeSale": "50% OFF",
  "category": "Course",
  "bgImage": "https://prod-s3.counselindia.com/courses/background_image/certificate-in-child-psychologynorm_1706710734.png",
  "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
  "description": "The Certificate in Child Psychology stands out for its comprehensive curriculum, meticulously crafted by seasoned psychologists and education experts. Participants dive deep into child development, behavioral patterns, emotional dynamics, and cognitive milestones, gaining an insightful understanding of the intricacies involved in comprehending and addressing the unique needs of children. The Certificate in Child Psychology program is a gateway to a fulfilling and impactful career, where professionals contribute to the well-being and growth of the youngest members of our society.",
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
      "desc": "26 September 2026"
    }
  ],
  "benefits": [
    "Expertise in Child Psychology: Specialized knowledge in cognitive, emotional, and social aspects of child development.",
    "Enhanced Professional Skills: Practical skills in behavioral interventions, psychological assessment, and effective communication with children.",
    "Career Advancement: Open new opportunities in education, counselling, child advocacy, and community mental health.",
    "Increased Effectiveness in Current Role: Equip teachers, caregivers, and parents with strategies to support children's psychological well-being.",
    "In-Depth Understanding of Developmental Milestones: Tailor interactions and support to specific stages of child growth.",
    "Cultural Competence: Apply culturally sensitive approaches in diverse family and educational environments.",
    "Co-branded certificate from a UGC-recognized and international university.",
    "ICPEM-Supported Curriculum designed for practical application and career readiness."
  ],
  "about": [
    "The Certificate in Child Psychology stands out for its comprehensive curriculum, meticulously crafted by seasoned psychologists and education experts. Participants dive deep into child development, behavioral patterns, emotional dynamics, and cognitive milestones, gaining an insightful understanding of the intricacies involved in comprehending and addressing the unique needs of children.",
    "The Certificate in Child Psychology program is a gateway to a fulfilling and impactful career, where professionals contribute to the well-being and growth of the younger generation. Supported by the Indian Council for Professional Education Mission (ICPEM), this program empowers learners with practical skill-focused methodologies suited for schools, clinics, NGOs, and child counselling centers."
  ],
  "learningObjectives": [
    "Gain a solid grounding in fundamental child developmental stages, emotional milestones, and cognitive behaviors.",
    "Learn behavioral observation, communication techniques, and foundational assessment tools for young learners.",
    "Understand intervention strategies for common childhood emotional and behavioral challenges in educational and home settings."
  ],
  "credentials": [
    {
      "id": "tab147",
      "label": "CI Certificate",
      "text": "Upon completing UGC-approved programs aligned with NEP 2020 at Counsel India, receive a prestigious certificate endorsed by the Counsel India\u2014validating your expertise in your chosen field.",
      "image": "https://prod-s3.counselindia.com/credential/%20Child%20Psychology_1728552794.png"
    },
    {
      "id": "tab148",
      "label": "Letter of Recommendation",
      "text": "This globally recognized credential showcases your expertise and commitment in your field.",
      "image": "https://prod-s3.counselindia.com/credential/Letter%20of%20recommendation%20for%20Jon%20Doe%20(1)_1755835717.png"
    },
    {
      "id": "tab149",
      "label": "Certificate of Specialization",
      "text": "Earn distinction with this Certificate of Specialization. Empower your career with expertise, a prized validation in your field.",
      "image": "https://prod-s3.counselindia.com/credential/Child%20Psychology_1727068538.jpg"
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
        "title": "Subject 1: Employability & Foundational Skills",
        "topics": [
          "Employability Skills & Professional Readiness",
          "Communication & Rapport Building with Children and Families",
          "Ethical Standards & Child Safeguarding Guidelines"
        ]
      },
      {
        "title": "Subject 2: Introduction to Child Development",
        "topics": [
          "Physical, Cognitive, and Socio-Emotional Milestones",
          "Environmental and Neurological Influences on Growth",
          "Understanding Age-Appropriate Behavioral Norms"
        ]
      },
      {
        "title": "Subject 3: Theoretical Perspectives in Child Psychology",
        "topics": [
          "Key Developmental Theories (Piaget, Vygotsky, Bowlby, Erikson)",
          "Attachment Patterns and Emotional Resilience in Childhood",
          "Behavioral and Cognitive-Behavioral Approaches for Children"
        ]
      },
      {
        "title": "Subject 4: Psychology Lab - Values Assessment & OJL",
        "topics": [
          "Psychology Lab - Practical Values Assessment for Children",
          "Case Discussions and Practical Intervention Exercises",
          "OJL (On-the-Job Learning) and Real-World Application"
        ]
      }
    ]
  },
  "whoCanJoin": [
    "Aspiring Child Psychologists",
    "Educators and Teachers",
    "Parents and Caregivers",
    "Mental Health Professionals",
    "Social Workers",
    "Students Pursuing Psychology or Related Fields",
    "Childcare Professionals",
    "Anyone Interested in Child Development"
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
      "name": "Himanshi Singh",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Himanshi%20Singh_1673871256.png"
    },
    {
      "name": "VARNICA KOTNALA",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/16451453501691141457.jpg"
    },
    {
      "name": "Durga Gupta",
      "title": "Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/9626930401698298591.jpeg"
    }
  ],
  "referEarn": {
    "title": "Refer & Earn with Counsel India",
    "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
    "buttonText": "Refer a Friend",
    "buttonLink": "https://www.counselindia.com/refer-and-earn?course_id=45"
  },
  "reviews": [
    {
      "quote": "Counsel India helped with my growth and progress. It enhanced my knowledge and also it was helpful along with my Post Graduation. I was been cherished because of the knowledge i had through the course.",
      "name": "Shivani Kumari",
      "city": "Delhi, India",
      "image": "https://prod-s3.counselindia.com/success_stories/shivani.jpg"
    },
    {
      "quote": "The instructors were not just teachers; they were true mentors. Their deep passion for psychology was evident in every lecture, making complex theories and concepts accessible and engrossing, so I would highly recommend this course to everyone.",
      "name": "Anushka Ghosh",
      "city": "Noida",
      "image": "https://prod-s3.counselindia.com/success_stories/image_20221207_163301%20-%20Anushka%20Ghosh%20(2)_1693906637.jpeg"
    },
    {
      "quote": "I started helping my own kids, I understand them in better way.",
      "name": "Riya Raizada",
      "city": "Nagpur",
      "image": "https://prod-s3.counselindia.com/success_stories/riya.jpg"
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
      "question": "How will this program benefit me as a parent or guardian?",
      "answer": [
        "This program offers insights into child development, behavior management techniques, and effective communication strategies, empowering you to understand and support your child's emotional and cognitive growth effectively."
      ]
    },
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
  "id": 52,
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
      "desc": "26 September 2026"
    }
  ],
  "benefits": [
    "Comprehensive Professional Credentials: Earn a recognized certification from ICPEM and Counsel India, validating advanced competence in child psychology.",
    "In-Depth Child Psychology Mastery: Gain specialized knowledge covering cognitive, emotional, and social development, behavioral disorders, and therapeutic interventions.",
    "Hands-on Practical Training: Experience experiential learning through case studies, psychology lab assessments, and real-world project work.",
    "Diverse Career Pathways: Prepare for fulfilling roles in schools, pediatric clinics, child welfare NGOs, and private counseling centers.",
    "Stackable Credit System: Earn academic credits enabling seamless pathway advancement towards higher diplomas and specialized degrees.",
    "Co-branded certificate from a UGC-recognized and international university with ICPEM support."
  ],
  "about": [
    "Gain expertise in specialized topics such as behavioral disorders, learning disabilities, and effective therapeutic interventions, setting you apart in child psychology. Understand the intricacies of child psychology with our comprehensive program designed to equip you with advanced knowledge and skills.",
    "This course is supported by the Indian Council for Professional Education Mission (ICPEM), which enables Counsel India's learners to access skill-focused programs designed for immediate private sector employment, offering excellent job opportunities with strong career prospects across education, healthcare, and clinical wellness settings."
  ],
  "learningObjectives": [
    "Master advanced behavioral and cognitive intervention strategies for childhood psychological, emotional, and developmental challenges.",
    "Conduct comprehensive psychological assessments including developmental tracking, emotional screening, and specialized child assessments.",
    "Synthesize clinical findings into individualized care plans while collaborating with families, educators, and multidisciplinary healthcare teams."
  ],
  "credentials": [
    {
      "id": "tab143",
      "label": "CI Advanced Certificate",
      "text": "Upon completing UGC-approved programs aligned with NEP 2020 at Counsel India, receive a prestigious certificate endorsed by the Counsel India\u2014validating your expertise in your chosen field.",
      "image": "https://prod-s3.counselindia.com/credential/Advanced%20Certificate%20in%20Child%20Psychology_1728552855.png"
    },
    {
      "id": "tab144",
      "label": "Letter of Recommendation",
      "text": "This globally recognized credential showcases your expertise and commitment in your field.",
      "image": "https://prod-s3.counselindia.com/credential/Letter%20of%20recommendation%20for%20Jon%20Doe%20(1)_1755835736.png"
    },
    {
      "id": "tab145",
      "label": "Certificate of Specialization",
      "text": "Earn distinction with this Certificate of Specialization. Empower your career with expertise, a prized validation in your field.",
      "image": "https://prod-s3.counselindia.com/credential/Advanced%20Child%20Psychology_1727068369.jpg"
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
        "title": "Subject 1: Employability Skills & Introduction to Psychology",
        "topics": [
          "Employability Skills & Professional Conduct",
          "Introduction to Psychology & Psychological Dynamics",
          "Ethical Frameworks, Client Confidentiality & Child Rights"
        ]
      },
      {
        "title": "Subject 2: Overview of Child Development",
        "topics": [
          "Physical, Cognitive, and Socio-Emotional Milestones",
          "Environmental, Family, and Neurological Influences on Development",
          "Early Identification of Developmental Delays and Behavioral Anomalies"
        ]
      },
      {
        "title": "Subject 3: Developmental Approaches in Children",
        "topics": [
          "Behavioral and Cognitive-Behavioral Interventions for Children",
          "Addressing Childhood Anxiety, Trauma, and Bullying",
          "Collaborative Counselling Strategies with Parents and Educators"
        ]
      },
      {
        "title": "Subject 4: Psychology Lab - Attitude Towards Emotions",
        "topics": [
          "Psychology Lab - Practical Attitude Towards Emotions Assessment",
          "Standardized Behavioral & Affective Assessment Tools",
          "Supervised Case Conceptualization and Roleplay Simulations"
        ]
      },
      {
        "title": "Subject 5: Project Work & OJL (On-the-Job Learning)",
        "topics": [
          "Supervised Applied Project Work (180 Hours)",
          "Clinical On-the-Job Learning & Practical Apprenticeship (270 Hours)",
          "Comprehensive Case Reporting, Review, and Viva Presentation"
        ]
      }
    ]
  },
  "whoCanJoin": [
    "Business Professionals",
    "HR Professionals",
    "Managers and Executives",
    "Consultants",
    "Entrepreneurs",
    "Psychology Graduates",
    "Career Changers",
    "Government and Nonprofit Professionals",
    "Those Interested in Organizational Improvement",
    "Global Business Leaders"
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
      "name": "Himanshi Singh",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Himanshi%20Singh_1673871256.png"
    },
    {
      "name": "VARNICA KOTNALA",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/16451453501691141457.jpg"
    },
    {
      "name": "Durga Gupta",
      "title": "Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/9626930401698298591.jpeg"
    }
  ],
  "referEarn": {
    "title": "Refer & Earn with Counsel India",
    "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
    "buttonText": "Refer a Friend",
    "buttonLink": "https://www.counselindia.com/refer-and-earn?course_id=52"
  },
  "reviews": [
    {
      "quote": "The instructors were not just teachers; they were true mentors. Their deep passion for psychology was evident in every lecture, making complex theories and concepts accessible and engrossing, so I would highly recommend this course to everyone.",
      "name": "Anushka Ghosh",
      "city": "Noida",
      "image": "https://prod-s3.counselindia.com/success_stories/image_20221207_163301%20-%20Anushka%20Ghosh%20(2)_1693906637.jpeg"
    },
    {
      "quote": "I recently had the privilege of enrolling in this psychology Course that left me utterly impressed and profoundly enriched. This course was nothing short of exceptional, and I would like to share my glowing review to encourage others to embark on this enlightening journey.",
      "name": "Muskan Maan",
      "city": "Delhi",
      "image": "https://prod-s3.counselindia.com/success_stories/image_1658507699678__01%20-%20Muskan%20Maan%20(2)_1693906710.jpeg"
    },
    {
      "quote": "I am a mental health practitioner working as counselling psychologist this course was helpful to develop my knowledge in such a good direction and by this I am doing very well in my professional practice. The trainers at Counsel India are very knowledgeable, professional and helpful. They shape the course according to the trainee.",
      "name": "Shelly John",
      "city": "South Africa",
      "image": "https://prod-s3.counselindia.com/success_stories/shelly.jpg"
    },
    {
      "quote": "It was super session to me & I learned many things regarding child psychology like developmental milestones, learning disability and preventions and more about it... Thanks to counsel India for conducting these type of work shops to acquire more knowledge.",
      "name": "Naveen",
      "city": "Mumbai",
      "image": "https://prod-s3.counselindia.com/success_stories/naveen.jpg"
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
      "question": "How does this program address the specific needs of children with diverse backgrounds and experiences?",
      "answer": [
        "Our program emphasizes cultural competence and inclusivity, providing training to work effectively with children from diverse cultural, linguistic, and socioeconomic backgrounds. Students learn strategies to address systemic inequalities and promote equitable access to mental health services for all children."
      ]
    },
    {
      "question": "How does this program incorporate the latest research findings and evidence-based practices in child psychology?",
      "answer": [
        "Our program integrates cutting-edge research and evidence-based practices into the curriculum, ensuring that students are equipped with the most up-to-date knowledge and skills in child psychology. Faculty members are actively engaged in research and bring their expertise into the classroom to enrich students' learning experience."
      ]
    },
    {
      "question": "How does this program prepare graduates to address the mental health needs of children in today's complex world?",
      "answer": [
        "Our program provides training in evidence-based assessment and intervention techniques to address a wide range of mental health issues affecting children, including anxiety, depression, trauma, behavioral disorders, and developmental disabilities. Students learn how to collaborate with families, educators, and other professionals to provide comprehensive support for children's mental well-being."
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
  "id": 57,
  "name": "PG Diploma in Counselling Psychology & Clinical Skills",
  "slug": "pg-diploma-in-counselling-psychology-clinical-skills",
  "badgeSale": "50% OFF",
  "category": "Course",
  "bgImage": "https://prod-s3.counselindia.com/courses/background_image/Counselling%20psychology%20and%20clinical%20skills_1722430554.jpg",
  "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
  "description": "The PG Diploma in Counselling Psychology & Clinical Skills at Counsel India offers a holistic, one-year program bringing together theoretical knowledge with hands-on clinical training. Equip yourself with specialized expertise in psychotherapy modalities, psychological assessment tools, crisis intervention, and client case formulation.",
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
      "desc": "Graduation and above"
    },
    {
      "title": "Program Credits",
      "desc": "20"
    },
    {
      "title": "Program Start Date",
      "desc": "26 September 2026"
    }
  ],
  "benefits": [
    "Holistic Clinical Capabilities: Master psychological assessment, clinical interviewing, evidence-based psychotherapeutic techniques, and ethical intervention design.",
    "Dual Specialized Internships: Comprehensive hands-on internships in both Counselling Psychology and Clinical Psychology with case history taking and MSE.",
    "Extensive Practical Exposure: 570 live session hours, 120 project hours, and 270 on-the-job learning (OJL) hours for real-world mastery.",
    "Supervised Case Discussions & Labs: Hands-on emotional intelligence assessments, projective testing, and simulated psychiatric case formulations.",
    "Industry Recognition & Credentials: Earn prestigious credentials from Counsel India and ICPEM, opening doors to clinics, hospitals, schools, and private practice.",
    "Marketing & Self-Branding Mastery: Practical coaching on establishing your mental health practice and connecting with clients globally."
  ],
  "about": [
    "The PG Diploma in Counselling Psychology & Clinical Skills at Counsel India offers a holistic, one-year program bringing together theoretical knowledge with hands-on clinical training.",
    "Enrolling in this PG Diploma significantly enhances your professional capabilities and career prospects. You will gain a comprehensive understanding of psychological assessment, therapeutic techniques, and ethical practices, equipped with the skills to design innovative interventions, manage crises effectively, and work with diverse populations with cultural sensitivity."
  ],
  "learningObjectives": [
    "Gain comprehensive mastery of major counseling and clinical theories, ethical standards, and legal issues in mental health practice.",
    "Acquire proficiency in clinical interviewing, mental status examination (MSE), diagnostic frameworks, and psychological assessments.",
    "Master diverse therapeutic modalities (Gestalt, MBCT, Existential, Music, Art, Transactional Analysis) and execute supervised clinical cases."
  ],
  "credentials": [
    {
      "id": "tab177",
      "label": "Certificate of Completion",
      "text": "This certificate acknowledges your sincere dedication and mastery of key skills throughout the program. Your commitment to excellence is truly commendable, and we are confident that you will make a significant impact in the mental health field.",
      "image": "https://prod-s3.counselindia.com/credential/Diploma%20in%20CPCS_1728552271.png"
    },
    {
      "id": "tab176",
      "label": "Letter of Recommendation",
      "text": "This Letter of Recommendation acknowledges your successful completion of this program, demonstrating exceptional commitment and skill in your field. This certificate reflects the high standards and rigorous training of this program.",
      "image": "https://prod-s3.counselindia.com/credential/Letter%20of%20recommendation%20for%20Jon%20Doe%20(1)_1755835619.png"
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
        "title": "Module 1: Foundations, Skills & Psychology Lab",
        "topics": [
          "Introduction to Counselling Psychology & Employability Skills (Basics)",
          "Counseling Skills and Core Micro-Techniques",
          "Ethical and Professional Issues in Mental Health",
          "Psychology Lab - 1 (Emotional Intelligence Assessment), Project Work - 1 & OJL - 1"
        ]
      },
      {
        "title": "Module 2: Advanced Psychotherapies & Expressive Modalities",
        "topics": [
          "Understanding Psychology and Therapeutic Processes",
          "Existential Therapy & Gestalt Therapy in Practice",
          "Psychoanalytic Therapy & Transactional Analysis (TA)",
          "Expressive Therapies: Music Therapy & Art Therapy Applications"
        ]
      },
      {
        "title": "Module 3: Internship in Counselling Psychology",
        "topics": [
          "Counselling Fundamentals, Case History Taking & Mental Status Examination (MSE)",
          "Counseling Ethics, Boundaries & Confidentiality",
          "Distinguishing Counseling vs. Clinical Psychology Practices",
          "Mindfulness-Based Cognitive Therapy (MBCT) & Projective Assessment Techniques"
        ]
      },
      {
        "title": "Module 4: Internship in Clinical Psychology",
        "topics": [
          "Introduction to Clinical Psychology & Major Diagnostic Classifications",
          "Clinical Assessment & Diagnosis: Mood, Anxiety, and Personality Disorders",
          "Clinical Interviewing Skills, Mental Health Formulations & Rapport Building",
          "Supervised Clinical Psychological Assessments & Report Writing"
        ]
      }
    ]
  },
  "whoCanJoin": [
    "Mental Health Professionals",
    "Educators and School Counsellors",
    "Human Resources (HR) Professionals",
    "Social Workers",
    "Recent Graduates",
    "Career Changers"
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
      "name": "Gunjan Sandhani",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/11928981881684153375.jpeg"
    },
    {
      "name": "Gunjan Joshi",
      "title": "Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/5072576481683887478.jpeg"
    },
    {
      "name": "Aanchal Harjai",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/anchal-counselor_1729331864.jpg"
    },
    {
      "name": "Himanshi Singh",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Himanshi%20Singh_1673871256.png"
    },
    {
      "name": "VARNICA KOTNALA",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/16451453501691141457.jpg"
    },
    {
      "name": "Ayushi Madaan",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Ayushi%20Madaan_1673869282.png"
    },
    {
      "name": "Priyancy Goyal",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/goyal-counselor_1729331754.jpg"
    }
  ],
  "referEarn": {
    "title": "Refer & Earn with Counsel India",
    "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
    "buttonText": "Refer a Friend",
    "buttonLink": "https://www.counselindia.com/refer-and-earn?course_id=57"
  },
  "reviews": [
    {
      "quote": "Counsel India helped with my growth and progress. It enhanced my knowledge and also it was helpful along with my Post Graduation. I was been cherished because of the knowledge i had through the course.",
      "name": "Shivani Kumari",
      "city": "Delhi, India",
      "image": "https://prod-s3.counselindia.com/success_stories/shivani.jpg"
    },
    {
      "quote": "The instructors were not just teachers; they were true mentors. Their deep passion for psychology was evident in every lecture, making complex theories and concepts accessible and engrossing, so I would highly recommend this course to everyone.",
      "name": "Anushka Ghosh",
      "city": "Noida",
      "image": "https://prod-s3.counselindia.com/success_stories/image_20221207_163301%20-%20Anushka%20Ghosh%20(2)_1693906637.jpeg"
    },
    {
      "quote": "I recently had the privilege of enrolling in this psychology Course that left me utterly impressed and profoundly enriched. This course was nothing short of exceptional, and I would like to share my glowing review to encourage others to embark on this enlightening journey.",
      "name": "Muskan Maan",
      "city": "Delhi",
      "image": "https://prod-s3.counselindia.com/success_stories/image_1658507699678__01%20-%20Muskan%20Maan%20(2)_1693906710.jpeg"
    },
    {
      "quote": "I started helping my own kids, I understand them in better way.",
      "name": "Riya Raizada",
      "city": "Nagpur",
      "image": "https://prod-s3.counselindia.com/success_stories/riya.jpg"
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
        "a) You will love each and every class as all sessions are practically conducted and participation in psychology activities is very easy and effective.",
        "b) You will get practical exposure on how to deal with real life clients and not just cover the theory part.",
        "c) Online training sessions will also help you to understand how to take online sessions as a counsellor across the globe and not just limit your client base in your area which is a big challenge for offline mode of training."
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
        "a) Thousands of people get to know about you with the help of marketing sessions.",
        "b) You reach to needy people by learning Marketing tactics.",
        "c) You can never get clients till the time you master the skills of marketing and self branding."
      ]
    },
    {
      "question": "What kind of Study Material I will get?",
      "answer": [
        "a) You can read notes over a soft copy at your comfort which is accessible on your phone, laptop or desktop.",
        "b) You will also receive Hard copies of the study material at your doorstep after the completion of the course for lifetime reference and support."
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
        "bgImage": "https://prod-s3.counselindia.com/courses/background_image/Untitled%20design-19_1727090924.png",
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
            "This course is specifically designed for professionals in the mental health space who want to blend their counseling expertise with entrepreneurial skills.",
            "Through a step-by-step process, you'll learn how to effectively market yourself, build a brand, and grow a sustainable business, all without compromising on your core mission of helping people."
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
                "image": "https://prod-s3.counselindia.com/credential/%20CMC%20-%20Intermediate-4_1728552416.png"
            }
        ],
        "curriculum": {
            "totalSessions": "12 Sessions",
            "totalHours": "3 months",
            "stats": [
                {
                    "count": "3",
                    "text": "Projects"
                },
                {
                    "count": "30 Hours",
                    "text": "Live Session Hours"
                },
                {
                    "count": "30 Hours",
                    "text": "Project Hours"
                }
            ],
            "modules": [
                {
                    "title": "Understanding Marketing Psychology for Mental Health Services",
                    "topics": [
                        "The importance of positioning and value propositions.",
                        "Creating client personas: Understanding your target audience."
                    ]
                },
                {
                    "title": "Using AI for Marketing Automation",
                    "topics": [
                        "100+ Tools of AI Automation",
                        "Automation Process of Marketing",
                        "Understanding and Implications of AI Tools"
                    ]
                },
                {
                    "title": "Building a Personal Brand",
                    "topics": [
                        "Defining your brand’s mission, vision, and values.",
                        "Crafting a brand that resonates with your clients.",
                        "Visual identity: Logo, website, and social media presence."
                    ]
                },
                {
                    "title": "Digital Marketing Essentials",
                    "topics": [
                        "Social media marketing strategies for mental health professionals.",
                        "SEO basics: How to make your website rank.",
                        "Email marketing and nurturing potential clients."
                    ]
                },
                {
                    "title": "Client Acquisition and Retention",
                    "topics": [
                        "Building trust through content and testimonials.",
                        "Designing lead magnets and funnels to capture potential clients.",
                        "How to conduct discovery calls and convert leads into paying clients."
                    ]
                },
                {
                    "title": "Pricing Strategies and Service Packaging",
                    "topics": [
                        "How to price your services for different markets.",
                        "Creating value-driven service packages for various client needs.",
                        "Subscription models vs. session-based pricing."
                    ]
                },
                {
                    "title": "Financial Management for Mental Health Practices",
                    "topics": [
                        "Budgeting and managing expenses in a growing practice.",
                        "Tools and techniques for tracking business growth.",
                        "Basic legal considerations for running a practice."
                    ]
                },
                {
                    "title": "Scaling Your Business",
                    "topics": [
                        "Expanding your network: Collaborations and partnerships.",
                        "Outsourcing non-core tasks: Focus on what matters most.",
                        "How to scale without losing the personal touch."
                    ]
                }
            ]
        },
        "programBenefit": [
            "More Clients: Learn how to attract clients consistently, so you never worry about a slow month.",
            "Increased Income: Gain business insights that allow you to charge what you're worth and develop profitable packages.",
            "Brand Authority: Build a recognizable brand in the mental health industry, increasing your trust and credibility.",
            "Confidence in Marketing: Overcome the fear of marketing yourself, and become confident in promoting your services authentically.",
            "Sustainable Growth: With the right strategies in place, watch your venture grow steadily while making a lasting impact."
        ],
        "whoCanJoin": [
            "Aspiring Counsellors/Therapists",
            "Individuals Seeking Additional Income/Side Hustle",
            "Counsellors/Therapists Starting a Venture",
            "Counsellors/Therapists Aspiring to Upskill",
            "Counsellors/Therapists Building a Personal Brand"
        ],
        "scholarship": {
            "title": "Get Upto 30% Scholarship",
            "subtitle": "\"Avail up to a 30% scholarship and receive exclusive additional benefits.\"",
            "image": "https://prod-s3.counselindia.com/mastergalaxyimages/Untitled%20design-23_1734162900.png",
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
                "name": "Shelly Ahuja",
                "title": "Psychologist",
                "image": "https://prod-s3.counselindia.com/counsellor/17150178581701751946.jpg"
            },
            {
                "name": "Sarita Shukla",
                "title": "Psychologist",
                "image": "https://prod-s3.counselindia.com/counsellor/14618756601696371739.jpeg"
            },
            {
                "name": "Nazima Sayyed",
                "title": "Psychologist",
                "image": "https://prod-s3.counselindia.com/counsellor/2906292291693329244.jpg"
            }
        ],
        "referEarn": {
            "title": "Refer someone and Earn upto INR 12,000 Cashback/Vouchers, on every successful enrollment",
            "subtitle": "Your friend also gets an instant scholarship!",
            "buttonText": "Start Referring",
            "buttonLink": "https://www.counselindia.com/refer-and-earn?course_id=61"
        },
        "reviews": [
            {
                "quote": "Counsel India helped with my growth and progress. It enhanced my knowledge and also it was helpful along with my Post Graduation. I was been cherished because of the knowledge i had through the course.",
                "name": "Shivani Kumari",
                "city": "Delhi,India",
                "image": "https://prod-s3.counselindia.com/success_stories/shivani.jpg"
            },
            {
                "quote": "The instructors were not just teachers; they were true mentors. Their deep passion for psychology was evident in every lecture, making complex theories and concepts accessible and engrossing, so I would highly recommend this course to everyone.",
                "name": "Anushka Ghosh",
                "city": "Noida",
                "image": "https://prod-s3.counselindia.com/success_stories/image_20221207_163301%20-%20Anushka%20Ghosh%20(2)_1693906637.jpeg"
            },
            {
                "quote": "I recently had the privilege of enrolling in this psychology Course that left me utterly impressed and profoundly enriched. This course was nothing short of exceptional, and I would like to share my glowing review to encourage others to embark on this enlightening journey.",
                "name": "Muskan Maan",
                "city": "delhi",
                "image": "https://prod-s3.counselindia.com/success_stories/image_1658507699678__01%20-%20Muskan%20Maan%20(2)_1693906710.jpeg"
            },
            {
                "quote": "Amazing Session. To the point Conversation, all questions answered with real life examples and beautifully conveyed. Personalized guidance provided is the best thing. Very thankful to Counsel India and specially trainers.",
                "name": "Balwan Singh",
                "city": "Gurgaon",
                "image": "https://prod-s3.counselindia.com/success_stories/image_passport%20size%20photo_1693906790.jpeg"
            },
            {
                "quote": "When I join counsel india I was unknown to the most of things of psychology and segment wise I understand and step by step also to this situation and most of the time RCI illusion create by the surrounding people but counsel india solve my problem ,No need for this only knowledge and experience basis you can start this.",
                "name": "Garry",
                "city": "UAE",
                "image": "https://prod-s3.counselindia.com/success_stories/garry.jpg"
            },
            {
                "quote": "I started helping my own kids, I understand them in better way.Counsel india has changed my entire level of thinking and understanding behaviour.",
                "name": "Riya",
                "city": "Delhi",
                "image": "https://prod-s3.counselindia.com/success_stories/riyaa.jpg"
            },
            {
                "quote": "I have done the child psychology course under council india. Very good and well efficient organization. Short time course. Loved being here. Gained lots of knowledge.",
                "name": "Anyasa saha",
                "city": "Bangalore",
                "image": "https://prod-s3.counselindia.com/success_stories/anyasa-saha.jpg"
            },
            {
                "quote": "It was awesome to learn more about the subject, that is Psychology, from the experts here. It was such an refreshing experience. Looking forward to more such courses.",
                "name": "Lisha Rao",
                "city": "Chennai",
                "image": "https://prod-s3.counselindia.com/success_stories/lisha-rao.jpg"
            },
            {
                "quote": "I had opted for Child Psychology Certification Program. The coaching was really good, coaches also were very understanding and was clearing our doubts. Thanks Counsel India!",
                "name": "Gurpreet Kaur",
                "city": "Chandigarh",
                "image": "https://prod-s3.counselindia.com/success_stories/gurpreet-kaur.jpg"
            },
            {
                "quote": "I had a really good time during the internship and the case studies were very knowledgeable. The assignments were interesting and easy to follow. It was a really good session and I recommend all the aspiring psychologist to try Counsel India once.",
                "name": "Sneh Kochar",
                "city": "Jammu",
                "image": "https://prod-s3.counselindia.com/success_stories/sneh.jpg"
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
                    "a) Thousands of people get to know about you with the help of marketing sessions.",
                    "b) You reach to needy people by learning Marketing tactics.",
                    "c) You can never get clients till the time you master the skills of marketing and self branding"
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
  "id": 64,
  "name": "Masters in Psychology",
  "slug": "masters-in-psychology-work-integrated-skill-based-program",
  "badgeSale": "40% OFF",
  "category": "Course",
  "bgImage": "https://prod-s3.counselindia.com/courses/background_image/MA%20Psychology_1728647201.jpg",
  "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
  "description": "(Internship/Apprenticeship Embedded) - Our Masters in Psychology program is designed to help you understand human behavior more effectively, look at the mental processes, and comprehend emotional well-being. With advanced coursework ensuring the highest standards, hands-on training, and research potential, you will gain the skills needed to succeed in diverse areas of psychology, such as counselling and organizational behavior. Explore the complexities of the human mind and build a rewarding career in psychology. This course, In partnership with IPA (International Psychology Association) & Skill India, provides you a strong foundation for a successful career in mental health.",
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
      "desc": "26 September 2026"
    }
  ],
  "benefits": [
    "Comprehensive Academic Rigor: In-depth study covering clinical psychology, counselling modalities, organizational behavior, and neurocognitive frameworks.",
    "Dual Embedded Internships & Apprenticeships: 375 live hours, 480 project hours, and 900 on-the-job learning (OJL) hours for practical immersion.",
    "Global Certification & Affiliations: Prestigious co-branded certification from IPA, MEPSC Skill India, and university-recognized degree pathways.",
    "G20 Nation Skills Portability: MEPSC qualification database registration valid across G20 nations for verified global employer due-diligence.",
    "Academic Bank of Credits (ABC): Fully compliant with UGC guidelines and NEP 2020 for seamless credit accumulation and inter-institutional transfer.",
    "Advanced Clinical & Corporate Readiness: Comprehensive training in psychological assessments, diagnostic psychometrics, and structured therapy protocols."
  ],
  "about": [
    "(Internship/Apprenticeship Embedded) - Our Masters in Psychology program is designed to help you understand human behavior more effectively, look at the mental processes, and comprehend emotional well-being. With advanced coursework ensuring the highest standards, hands-on training, and research potential, you will gain the skills needed to succeed in diverse areas of psychology, such as counselling and organizational behavior.",
    "Explore the complexities of the human mind and build a rewarding career in psychology. This course, in partnership with IPA (International Psychology Association) & Skill India, provides you a strong foundation for a successful career in mental health across clinical, corporate, educational, and research sectors."
  ],
  "learningObjectives": [
    "Master core domains of cognitive, social, developmental, biological, and abnormal psychology with evidence-based frameworks.",
    "Develop expertise in psychological assessment batteries, clinical psychometrics, and standardized diagnostic systems (DSM-5 / ICD).",
    "Apply advanced therapeutic approaches (CBT, psychodynamic, humanistic, family systemic) through supervised client cases and research theses."
  ],
  "credentials": [
    {
      "id": "tab201",
      "label": "IPA certificate",
      "text": "Upon successful completion of the course, you will be awarded a prestigious certificate from IPA (International Psychology Association).",
      "image": "https://prod-s3.counselindia.com/credential/Screenshot%202025-08-04%20114105_1754288577.png"
    },
    {
      "id": "tab204",
      "label": "MEPSC Certificate",
      "text": "After the successful training and assessment, the Management & Entrepreneurship and Professional Skills Council (MEPSC) will issue a skill certificate and add your credentials to the central qualification database valid across G20 nations.",
      "image": "https://prod-s3.counselindia.com/credential/Certificate%20Template%20-%20Job%20Role%20%281%29_1753183761.jpg"
    },
    {
      "id": "tab195",
      "label": "Certificate of Completion",
      "text": "This certificate honors your dedication, hard work, and mastery of essential skills and specializations. It celebrates your commitment to excellence and acknowledges your achievement in making a meaningful impact in your field.",
      "image": "https://prod-s3.counselindia.com/credential/Advanced%20Certificate%20in%20Child%20Psychology-2_1728648469.png"
    },
    {
      "id": "tab196",
      "label": "Letter of Recommendation",
      "text": "This globally recognized credential showcases your expertise and commitment in your field.",
      "image": "https://prod-s3.counselindia.com/credential/Letter%20of%20recommendation%20for%20Jon%20Doe%20%281%29_1755835833.png"
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
        "count": "480",
        "text": "Project Hours"
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
        "title": "Semester 1: Foundations of Psychology & Biological Bases",
        "topics": [
          "Introduction to Human Psychology & Lifespan Development",
          "Biological Bases of Behavior: Nervous System, Neurotransmitters & Brain Chemistry",
          "Sensation, Perception, and Perceptual Illusions",
          "Learning Theories: Classical Conditioning, Operant Conditioning & Observational Learning"
        ]
      },
      {
        "title": "Semester 2: Cognitive, Developmental & Social Psychology",
        "topics": [
          "Cognitive Psychology: Working Memory, Attention, Problem Solving & Decision Making",
          "Developmental Psychology: Cognitive & Socio-Emotional Milestones (Piaget, Erikson)",
          "Social Psychology: Social Influence, Group Dynamics, Attitudes & Persuasion",
          "Psychological Assessment & Testing: Psychometrics, Reliability & Validity"
        ]
      },
      {
        "title": "Semester 3: Psychopathology, Clinical Psychology & Therapies",
        "topics": [
          "Psychopathology: DSM-5 Mental Disorders, Etiology & Diagnostic Frameworks",
          "Abnormal Psychology: Psychotic, Mood, and Anxiety Disorders",
          "Therapeutic Approaches: Psychoanalysis, CBT, Humanistic & Family Systems Therapy",
          "Role of Clinical Psychologists, Interviewing Skills & Mental Health Diagnostics"
        ]
      },
      {
        "title": "Semester 4: Health, Neuropsychology, Aging & Applied Projects",
        "topics": [
          "Health Psychology: Biopsychosocial Model, Stress, Coping & Chronic Illness",
          "Neuropsychology: Brain-Behavior Relationships & Neurodegenerative Disorders",
          "Psychology of Aging: Cognitive Aging, Theories & Quality of Life",
          "Master Thesis Project Work (480 Hours) & Supervised OJL Apprenticeship (900 Hours)"
        ]
      }
    ]
  },
  "whoCanJoin": [
    "Graduates in Psychology or Related Fields",
    "Educators and School Professionals",
    "Healthcare and Social Work Professionals",
    "Parents and Caregivers",
    "Early Childhood Practitioners",
    "Career Changers",
    "Aspiring Researchers and Academics"
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
      "name": "Himanshi Singh",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Himanshi%20Singh_1673871256.png"
    },
    {
      "name": "VARNICA KOTNALA",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/16451453501691141457.jpg"
    },
    {
      "name": "Durga Gupta",
      "title": "Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/9626930401698298591.jpeg"
    }
  ],
  "referEarn": {
    "title": "Refer & Earn with Counsel India",
    "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
    "buttonText": "Refer a Friend",
    "buttonLink": "https://www.counselindia.com/refer-and-earn?course_id=64"
  },
  "reviews": [
    {
      "quote": "The instructors were not just teachers; they were true mentors. Their deep passion for psychology was evident in every lecture, making complex theories and concepts accessible and engrossing, so I would highly recommend this course to everyone.",
      "name": "Anushka Ghosh",
      "city": "Noida",
      "image": "https://prod-s3.counselindia.com/success_stories/image_20221207_163301%20-%20Anushka%20Ghosh%20(2)_1693906637.jpeg"
    },
    {
      "quote": "I recently had the privilege of enrolling in this psychology Course that left me utterly impressed and profoundly enriched. This course was nothing short of exceptional, and I would like to share my glowing review to encourage others to embark on this enlightening journey.",
      "name": "Muskan Maan",
      "city": "Delhi",
      "image": "https://prod-s3.counselindia.com/success_stories/image_1658507699678__01%20-%20Muskan%20Maan%20(2)_1693906710.jpeg"
    },
    {
      "quote": "I had a great time. I learnt a lot from the platform and would recommend it to anyone in the field of Counselling. Thank you so much Counsel India for the support.",
      "name": "Komal Joshi",
      "city": "Kotdwar",
      "image": "https://prod-s3.counselindia.com/success_stories/komal.jpg"
    },
    {
      "quote": "I had a really good time during the internship and the case studies were very knowledgeable. The assignments were interesting as well.",
      "name": "Sneh Kochar",
      "city": "Jammu",
      "image": "https://prod-s3.counselindia.com/success_stories/sneh.jpg"
    },
    {
      "quote": "An amazing experience with Counsel India. I did my Industrial Internship with the help of experienced mentors of Counsel India. Sessions were theoretical as well as practical. A good platform to learn more about psychology.",
      "name": "Pragun Sharma",
      "city": "Shimla",
      "image": "https://prod-s3.counselindia.com/success_stories/pragun.jpg"
    },
    {
      "quote": "The moment I joined the course, I felt the positive vibe. The level of details that this course offered was tremendous. Overall the experience was excellent and up to the mark.",
      "name": "Megha Singh",
      "city": "Ahmedabad",
      "image": "https://prod-s3.counselindia.com/success_stories/megha.jpg"
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
      "question": "What career opportunities can I pursue after completing this program?",
      "answer": [
        "Graduates of the MA in Psychology program can pursue various careers in fields such as counseling, clinical psychology, human resources, organizational behavior, mental health advocacy, and research. Many graduates also choose to continue their education by pursuing doctoral degrees in psychology or related disciplines."
      ]
    },
    {
      "question": "Will I have the opportunity to gain practical experience during the program?",
      "answer": [
        "Yes, the MA in Psychology program often includes practical training components such as internships, practicum placements, or supervised research projects. These opportunities allow students to apply their theoretical knowledge in real-world settings and gain valuable hands-on experience."
      ]
    },
    {
      "question": "Is the program accredited, and will it meet licensure requirements?",
      "answer": [
        "The accreditation status of the Masters in Psychology program may vary by institution. It\u2019s essential to verify that the program is accredited by a recognized accrediting body. Additionally, while many programs provide a strong foundation for licensure, specific licensure requirements vary by state or country, so it's important to research the requirements in your desired location."
      ]
    }
  ]
},
  "masters-in-clinical-psychology": {
  "id": 80,
  "name": "Masters In Clinical Psychology",
  "slug": "masters-in-clinical-psychology",
  "badgeSale": "40% OFF",
  "category": "Course",
  "bgImage": "https://prod-s3.counselindia.com/courses/background_image/ma2_1784655771.jpg",
  "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
  "description": "(Internship/Apprenticeship Embedded) - Our Masters In Clinical Psychology program is designed to help you understand human behavior more effectively, look at the mental processes, and comprehend emotional well-being. With advanced coursework ensuring the highest standards, hands-on training, and research potential, you will gain the skills needed to succeed in diverse areas of psychology, such as counselling and clinical practice. Explore the complexities of the human mind and build a rewarding career in mental healthcare. This course, in partnership with IPA (International Psychology Association) & Skill India, provides you a strong foundation for a successful career in clinical psychology.",
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
      "desc": "26 September 2026"
    }
  ],
  "benefits": [
    "Specialized Clinical Psychology Mastery: Advanced coursework in psychopathology, diagnostic psychometrics, psychiatric symptomology, and clinical neuroscience.",
    "Extensive Hands-on Practicum: 375 live clinical session hours, 900 hours of structured On-the-Job Learning (OJL), and 4 comprehensive clinical capstone projects.",
    "Standardized Diagnostic Tool Training: Hands-on mastery of WAIS, WISC, MMPI, 16PF, Rorschach Inkblot, and TAT diagnostic administration.",
    "Dual Global Certification: Prestigious degree credentials co-branded with IPA (International Psychology Association) and MEPSC Skill India.",
    "Academic Bank of Credits (ABC) Integration: UGC-compliant credit points enabling flexible storage and national academic mobility.",
    "Clinical Career Launchpad: Dedicated placement guidance and mentoring for hospitals, psychiatric units, private clinics, and rehabilitation centers."
  ],
  "about": [
    "(Internship/Apprenticeship Embedded) - Our Masters In Clinical Psychology program is designed to help you understand human behavior more effectively, look at the mental processes, and comprehend emotional well-being. With advanced coursework ensuring the highest standards, hands-on training, and research potential, you will gain the skills needed to succeed in diverse areas of psychology, such as counselling and clinical practice.",
    "This program offers a wealth of benefits designed to boost both your professional and personal growth. You'll gain advanced knowledge in psychological theories and practices, along with hands-on experience through internships and real-world case studies across clinical institutions."
  ],
  "learningObjectives": [
    "Acquire rigorous understanding of psychopathology, diagnostic criteria (DSM-5 & ICD-11), and psychiatric differential diagnoses.",
    "Master the administration, scoring, and clinical interpretation of intelligence, personality, and neuropsychological assessment batteries.",
    "Formulate evidence-based therapeutic treatment plans across diverse clinical populations with supervised clinical case reporting."
  ],
  "credentials": [
    {
      "id": "tab201",
      "label": "IPA Certificate",
      "text": "Upon successful completion of the course, you will be awarded a prestigious certificate from IPA (International Psychology Association).",
      "image": "https://prod-s3.counselindia.com/credential/Screenshot%202025-08-04%20114105_1754288577.png"
    },
    {
      "id": "tab204",
      "label": "MEPSC Skill India Certificate",
      "text": "After successful training and assessment, the Management & Entrepreneurship and Professional Skills Council (MEPSC) will issue a skill certificate and add your qualifications to the central database valid across G20 nations.",
      "image": "https://prod-s3.counselindia.com/credential/Certificate%20Template%20-%20Job%20Role%20%281%29_1753183761.jpg"
    },
    {
      "id": "tab196",
      "label": "Letter of Recommendation",
      "text": "This globally recognized credential showcases your expertise, clinical competencies, and commitment to the field of mental healthcare.",
      "image": "https://prod-s3.counselindia.com/credential/Letter%20of%20recommendation%20for%20Jon%20Doe%20(1)_1755835833.png"
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
        "title": "Semester 1: Foundations of Clinical Psychology & Psychopathology",
        "topics": [
          "Introduction to Clinical Psychology & Theoretical Frameworks",
          "Diagnostic Systems: DSM-5, ICD-11 & Clinical Psychopathology",
          "Clinical Assessment: Case History, Mental Status Examination (MSE) & Behavioral Observation",
          "Ethics, Confidentiality, and Professional Boundaries in Clinical Practice"
        ]
      },
      {
        "title": "Semester 2: Psychometrics, Neuropsychology & Diagnostic Testing",
        "topics": [
          "Standardized Psychometric Batteries: Intelligence (WAIS, WISC) & Personality (MMPI, 16PF)",
          "Neuropsychological Assessment & Cognitive Screening",
          "Projective Diagnostic Techniques: Rorschach, TAT & Sentence Completion",
          "Clinical Report Writing, Formulation & Diagnostic Feedback"
        ]
      },
      {
        "title": "Semester 3: Psychotherapeutic Interventions & Clinical Specialties",
        "topics": [
          "Cognitive Behavioral Therapy (CBT) & Rational Emotive Behavior Therapy (REBT)",
          "Psychodynamic, Humanistic & Emotion-Focused Therapies",
          "Child & Adolescent Clinical Psychology & Neurodevelopmental Disorders",
          "Addictions, Trauma-Informed Care & Crisis Intervention"
        ]
      },
      {
        "title": "Semester 4: Advanced Clinical Practicum, OJL & Master's Thesis",
        "topics": [
          "Advanced Psychopathology: Psychotic, Severe Mood & Complex Personality Disorders",
          "Supervised Clinical Rotations & Case Conferences (375 Live Hours)",
          "On-the-Job Learning (OJL) Internship (900 Hours)",
          "Master's Clinical Research Project / Dissertation & Final Viva"
        ]
      }
    ]
  },
  "whoCanJoin": [
    "Graduates In Psychology",
    "Educators And School Professionals",
    "Healthcare And Socialwork Professionals",
    "Parents And Caregivers",
    "Early Childhood Practitioners",
    "Career Changers",
    "Aspiring Researchers And Academics"
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
      "name": "Himanshi Singh",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Himanshi%20Singh_1673871256.png"
    },
    {
      "name": "VARNICA KOTNALA",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/16451453501691141457.jpg"
    },
    {
      "name": "Durga Gupta",
      "title": "Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/9626930401698298591.jpeg"
    }
  ],
  "referEarn": {
    "title": "Refer & Earn with Counsel India",
    "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
    "buttonText": "Refer a Friend",
    "buttonLink": "https://www.counselindia.com/refer-and-earn?course_id=80"
  },
  "reviews": [
    {
      "quote": "The instructors were not just teachers; they were true mentors. Their deep passion for psychology was evident in every lecture, making complex theories and concepts accessible and engrossing, so I would highly recommend this course to everyone.",
      "name": "Anushka Ghosh",
      "city": "Noida",
      "image": "https://prod-s3.counselindia.com/success_stories/image_20221207_163301%20-%20Anushka%20Ghosh%20(2)_1693906637.jpeg"
    },
    {
      "quote": "I recently had the privilege of enrolling in this psychology Course that left me utterly impressed and profoundly enriched. This course was nothing short of exceptional, and I would like to share my glowing review to encourage others to embark on this enlightening journey.",
      "name": "Muskan Maan",
      "city": "Delhi",
      "image": "https://prod-s3.counselindia.com/success_stories/image_1658507699678__01%20-%20Muskan%20Maan%20(2)_1693906710.jpeg"
    },
    {
      "quote": "Counsel India has changed my entire level of thinking and living, thank you sooo much for being an all-time supportive team.",
      "name": "Sachin Soni",
      "city": "Jaipur",
      "image": "https://prod-s3.counselindia.com/success_stories/sachin.jpg"
    },
    {
      "quote": "I am a mental health practitioner working as a counselling psychologist. This course was helpful to develop my knowledge in such a good direction, and because of this I am doing very well in my professional practice.",
      "name": "Shelly John",
      "city": "South Africa",
      "image": "https://prod-s3.counselindia.com/success_stories/shelly.jpg"
    },
    {
      "quote": "It was awesome to learn more about the subject, that is Psychology, from the experts here. It was such a refreshing experience to learn with practical case studies rather than theory-based learning.",
      "name": "Lisha Rao",
      "city": "Bangalore",
      "image": "https://prod-s3.counselindia.com/success_stories/lisha-rao.jpg"
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
      "question": "Will I have the opportunity to gain practical experience during the program?",
      "answer": [
        "Yes, the MA in Psychology program often includes practical training components such as internships, practicum placements, or supervised research projects. These opportunities allow students to apply their theoretical knowledge in real-world settings and gain valuable hands-on experience."
      ]
    },
    {
      "question": "Is the program accredited, and will it meet licensure requirements?",
      "answer": [
        "The accreditation status of the Masters in Psychology program may vary by institution. It\u2019s essential to verify that the program is accredited by a recognized accrediting body. Additionally, while many programs provide a strong foundation for licensure, specific licensure requirements vary by state or country, so it's important to research the requirements in your desired location."
      ]
    },
    {
      "question": "What career pathways can I pursue after completing this program?",
      "answer": [
        "Graduates of the Masters in Clinical Psychology program can pursue various career paths, including roles in psychiatric hospitals, mental health clinics, counseling centers, rehabilitation facilities, organizational wellness, and clinical research. They are equipped to conduct assessments, deliver evidence-based therapies, and collaborate with multidisciplinary healthcare teams."
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
                "desc": "26 September 2026"
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
            "This degree program will extensively explore over 15 kinds of counselling approaches out of which can choose any 5 which are focusing on treatment therapies, diagnosis, and effective recovery. Be it counselling for Depression, Anger, Addiction, Focus & Memory, Stress & Anxiety, Phobia & Fear, or even Life-building, you shall gain a unique grip on the techniques and their implementation."
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
                "image": "https://prod-s3.counselindia.com/credential/%20CMC%20-%20Intermediate-3_1728552153.png"
            },
            {
                "id": "tab168",
                "label": "Letter of Recommendation",
                "text": "This globally recognized credential showcases your expertise and commitment in your field.",
                "image": "https://prod-s3.counselindia.com/credential/Letter%20of%20recommendation%20for%20Jon%20Doe%20%281%29_1755835699.png"
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
                    "count": "13",
                    "text": "Specializations"
                },
                {
                    "count": "24",
                    "text": "Live Sessions"
                }
            ],
            "modules": [
                {
                    "title": "Depression",
                    "topics": [
                        "Understanding Depression: Types, causes, and symptoms.",
                        "Coping Strategies: Healthy routines, stress management, and support systems.",
                        "Crisis Intervention: Managing suicidal ideation, safety planning, and relapse prevention."
                    ]
                },
                {
                    "title": "Stress",
                    "topics": [
                        "Identifying Stressors",
                        "Cognitive Behavioral Strategies for Stress",
                        "Relaxation Techniques",
                        "Stress Reduction Techniques"
                    ]
                },
                {
                    "title": "Anxiety",
                    "topics": [
                        "Understanding Anxiety :Types, causes, and triggers of anxiety disorders.",
                        "Mindfulness and Stress Management :Techniques like deep breathing and mindfulness-based stress reduction (MBSR).",
                        "Building Resilience and Support Systems : Lifestyle changes, exercise, sleep hygiene, and social support.",
                        "Cognitive Behavioral Techniques: Identifying negative thoughts and developing coping strategies."
                    ]
                },
                {
                    "title": "Anger Counseling",
                    "topics": [
                        "Understanding Anger: Identifying triggers and the role of anger in emotional regulation.",
                        "Mindfulness & Relaxation: Practicing mindfulness, breathing exercises, and relaxation to manage anger.",
                        "Improving Communication: Enhancing assertiveness, active listening, and conflict resolution skills.",
                        "Cognitive Behavioral Techniques: Using CBT to challenge negative thoughts and manage impulsive reactions."
                    ]
                },
                {
                    "title": "Addiction",
                    "topics": [
                        "Types of Addiction",
                        "Addiction Treatment Models",
                        "Developing Treatment Plans",
                        "Causes and Risk Factors"
                    ]
                },
                {
                    "title": "Focus and Memory counseling",
                    "topics": [
                        "Improving Attention: Techniques to enhance focus and reduce distractions.",
                        "Managing Cognitive Load: Reducing stress to optimize memory and focus.",
                        "Memory Enhancement: Strategies like visualization and repetition to boost recall.",
                        "Mindfulness Practices: Using mindfulness to improve clarity and mental function."
                    ]
                },
                {
                    "title": "Life rebuilding counseling",
                    "topics": [
                        "Core Values & Strengths : Reconnect with personal beliefs for growth.",
                        "Self-Identity & Purpose : Redefine identity and find meaning.",
                        "Emotional Resilience : Build coping strategies for challenges.",
                        "SMART Goals : Set achievable goals for transformation."
                    ]
                },
                {
                    "title": "Relationship Counseling",
                    "topics": [
                        "Communication: Verbal/non-verbal communication, active listening, and overcoming barriers.",
                        "Trust and Intimacy: Building trust, emotional intimacy, and setting boundaries.",
                        "Conflict Resolution: Different conflict styles and techniques for healthy resolution.",
                        "Expectations: Managing unrealistic expectations and aligning relationship goals."
                    ]
                },
                {
                    "title": "Worklife balance counseling",
                    "topics": [
                        "Time Management: Techniques for prioritizing tasks and reducing stress.",
                        "Setting Boundaries: Creating clear work-life boundaries to avoid burnout.",
                        "Stress Management: Using mindfulness and relaxation to handle work stress.",
                        "Self-Care: Importance of physical and emotional self-care for well-being."
                    ]
                },
                {
                    "title": "Behaviour Counseling",
                    "topics": [
                        "Principles of Behavior Modification: Techniques like reinforcement and punishment to change observable behavior.",
                        "Operant Conditioning: Using reinforcement and punishment to modify behavior.",
                        "Cognitive-Behavioral Techniques: Challenging negative thoughts to change behavior.",
                        "Applied Behavior Analysis (ABA): Systematic approach to improve specific behaviors, often in developmental disorders."
                    ]
                },
                {
                    "title": "Grief and loss counseling",
                    "topics": [
                        "Understanding Grief : Theories of grief (e.g., Kubler-Ross stages) and factors influencing the grieving process.",
                        "Grief Counseling Techniques : Approaches like empathy, active listening, and creative therapies (journaling, art).",
                        "Complicated Grief : Identifying and treating prolonged grief disorder, including therapeutic methods.",
                        "Grief in Special Populations : Supporting children, adolescents, and those facing sudden or traumatic loss."
                    ]
                },
                {
                    "title": "Workplace counseling",
                    "topics": [
                        "Employee Stress Management: Techniques for coping with work-related stress (e.g., mindfulness, time management).",
                        "Conflict Resolution: Approaches to resolving workplace conflicts through communication and mediation.",
                        "Work-Life Balance: Strategies to help employees balance personal and professional life.",
                        "Career Development: Counseling for career growth, skill development, and transitions."
                    ]
                },
                {
                    "title": "Adult counseling",
                    "topics": [
                        "Psychological Assessment – Tools for diagnosing adult mental health issues (e.g., depression, anxiety).",
                        "CBT for Adults – Using Cognitive Behavioral Therapy to address stress, anxiety, and depression.",
                        "Relationship Counseling – Improving communication and resolving conflicts in adult relationships.",
                        "Career Counseling – Helping adults navigate career transitions and work-life balance."
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
            "image": "https://prod-s3.counselindia.com/mastergalaxyimages/Untitled%20design-23_1734162900.png",
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
                "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Himanshi%20Singh_1673871256.png"
            },
            {
                "name": "Ayushi Madaan",
                "title": "Clinical Psychologist",
                "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Ayushi%20Madaan_1673869282.png"
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
            "buttonLink": "https://www.counselindia.com/refer-and-earn?course_id=9"
        },
        "reviews": [
            {
                "quote": "Counselling Master Course is a very beautiful course. It covers one class on one topic which is very practical and important. But the best part is they are keeping practical classes, procedure classes and teaching marketing and branding also at the same time. Which is giving overall learning to us. Because we all have knowledge but don't know how to increase our clients and Counsel India taught me that. Thank you Guys",
                "name": "Neha Yadav",
                "city": "Ahmedabad",
                "image": "https://prod-s3.counselindia.com/success_stories/neha.jpg"
            },
            {
                "quote": "Counselling Master Course is an amazing tool provided by Counsel India. It really helped me to get success in life. Thank you for your support.",
                "name": "Manpreet Malik",
                "city": "Delhi",
                "image": "https://prod-s3.counselindia.com/success_stories/manpreet.jpg"
            },
            {
                "quote": "I have experienced Counselling Master Course which is a great learning experience to get success in life. Thank you for providing such a valuable course to the masses.",
                "name": "Sandeep Maslekar",
                "city": "Gwalior",
                "image": "https://prod-s3.counselindia.com/success_stories/sandeep.jpg"
            },
            {
                "quote": "Counselling Master Course is such an amazing initiative! They train you deal with very practical and field problems. One should definitely join! Keep it up guys.",
                "name": "Divya Verma",
                "city": "Noida",
                "image": "https://prod-s3.counselindia.com/success_stories/divya.jpg"
            },
            {
                "quote": "Counselling Master Course is really a great Course. Efforts made by experts is really appreciable. I suggest everyone to take this course and learning Counselling Framework to be successful in life.",
                "name": "Anjali Kashyap",
                "city": "Dehradun",
                "image": "https://prod-s3.counselindia.com/success_stories/anjali.jpg"
            },
            {
                "quote": "Have done Counselling Master Course from here, Initially I was thinking that it would be like the similar online classes but I was wrong. Got more practical in-depth learning in sessions, and the procedure session added a better clarity to implement my learning.",
                "name": "Sahil Singh",
                "city": "Shimla",
                "image": "https://prod-s3.counselindia.com/success_stories/sahil.jpg"
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
                    "a) You will love each and every class as all sessions are practically conducted and participation in psychology activities is very easy and effective.",
                    "b) You will get practical exposure on how to deal with real life clients and not just cover the theory part.",
                    "c) Online training sessions will also help you to understand how to take online sessions as a counsellor across the globe and not just limit your client base in your area which is a big challenge for offline mode of training."
                ]
            },
            {
                "question": "What is Marketing and branding support?",
                "answer": [
                    "a) Thousands of people get to know about you with the help of marketing sessions.",
                    "b) You reach to needy people by learning Marketing tactics.",
                    "c) You can never get clients till the time you master the skills of marketing and self branding"
                ]
            },
            {
                "question": "What kind of Study Material I will get?",
                "answer": [
                    "a) You can read notes over a soft copy at your comfort which is accessible on your phone, laptop or desktop.",
                    "b) You will also receive Hard copies of the study material at your doorstep after the completion of the course for lifetime reference and support."
                ]
            },
            {
                "question": "What is Western style of learning?",
                "answer": [
                    "a) You take one class every week and start applying it for the rest of your week days.",
                    "b) Free yourself from the burden of being disturbed in your working schedule."
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
                "desc": "26 September 2026"
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
            "Our live internship program is focused on providing psychology students with the required skills and exposure to excel in their field of specialization. Our structured program will give the students a conducive environment to learn and understand aspects of mental health apart from their curriculum.",
            "We understand that your area of focus is pivotal, therefore, we bring to our participants three kinds of internship programs available at Counsel India to choose from. For the Clinical Internship Program, the focus is on various disorders, their symptoms, and the mechanism of recovery in a clinical set-up. Participants can opt for a 1-month or a 3-month duration of the internship.",
            "Key aspects of learning shall include Mood disorders, case studies, PTSD, neurotic spectrum, and management strategies for disorders."
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
                "text": "Psychology Internship (Clinical Psychology), Letter of Recommendation. These certificates will get you recognized as a certified counsellor and start your career as a primary counsellor anywhere in the world.",
                "image": "https://prod-s3.counselindia.com/credential/Psychology%20Internship%20%28Clinical%20Psychology%29_1728552630.png"
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
                    "title": "Clinical Psychology Internship Curriculum",
                    "topics": [
                        "Schizophrenia (Symptoms, Diagnostic Criteria, Types, Clinical Picture)",
                        "Somatoform Disorder",
                        "Autism",
                        "Spectrum Disorder",
                        "Mindfulness based techniques",
                        "Anxiety Disorder (GAD, Panic, Phobias)",
                        "Mood-Disorders (Symptoms, Diagnostics, Criteria, Types, Clinical Picture)",
                        "Case Study",
                        "Practical Classes"
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
            "HOD's/Team Leaders",
            "Coordinators",
            "VPs / VCs",
            "Government Officers",
            "Psychology Students/Professionals",
            "Entrepreneur",
            "Psychology Aspirants",
            "Health / Wellness Experts"
        ],
        "scholarship": {
            "title": "Get Upto 30% Scholarship",
            "subtitle": "\"Avail up to a 30% scholarship and receive exclusive additional benefits.\"",
            "image": "https://prod-s3.counselindia.com/mastergalaxyimages/Untitled%20design-23_1734162900.png",
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
                "name": "Himanshi Singh",
                "title": "Clinical Psychologist",
                "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Himanshi%20Singh_1673871256.png"
            },
            {
                "name": "Medhavi Sood",
                "title": "Clinical Psychologist",
                "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Medhavi%20Sood_1673870486.webp"
            },
            {
                "name": "Ayushi Madaan",
                "title": "Clinical Psychologist",
                "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Ayushi%20Madaan_1673869282.png"
            },
            {
                "name": "Priyancy Goyal",
                "title": "Clinical Psychologist",
                "image": "https://prod-s3.counselindia.com/counsellor/goyal-counselor_1729331754.jpg"
            }
        ],
        "referEarn": {
            "title": "Refer someone and Earn upto INR 12,000 Cashback/Vouchers, on every successful enrollment",
            "subtitle": "Your friend also gets an instant scholarship!",
            "buttonText": "Start Referring",
            "buttonLink": "https://www.counselindia.com/refer-and-earn?course_id=16"
        },
        "reviews": [
            {
                "quote": "I’m a spiritual person and enjoy psychology. I think body, mind and soul must be worked upon together else life is waste. After completing my Masters from IGNOU I was totally confused about my future. Now after completing this internship most of my queries are resolved and I have started working in hospital as a Psychologist.",
                "name": "Shreya Verma",
                "city": "Delhi",
                "image": "https://prod-s3.counselindia.com/success_stories/shreyaa.jpg"
            },
            {
                "quote": "After doing my graduation in Psychology and I was looking for some organization who can train me to understand the real meaning of Psychology. I got to know about Counsel India by my friend and I am really thankful for her. CI is really amazing and I so lucky to have them in my life.",
                "name": "Rhea",
                "city": "Bangalore",
                "image": "https://prod-s3.counselindia.com/success_stories/rhea.jpg"
            },
            {
                "quote": "I'm a Psychology student apart from being a teacher in which I am trained. I want to build my career in Clinical Psychology and want to be a Psychologist. After completing my Internship from Counsel India I really feel I have got what I was actually looking in my career. Special thanks to my Trainers.",
                "name": "Asma",
                "city": "Noida",
                "image": "https://prod-s3.counselindia.com/success_stories/asma.jpg"
            },
            {
                "quote": "If there’s one thing that I would like you to know about me it’s psychology,it has been my passion ever since i’ve dived into this field, After completing my internship from Counsel India I realised Psychology is not about Theory and books. Real Psychology is Implementation and understanding it Practically.",
                "name": "Juanita",
                "city": "Mumbai",
                "image": "https://prod-s3.counselindia.com/success_stories/juanita.jpg"
            },
            {
                "quote": "The Internship Program offered by Counsel India was very useful and helped me a lot in progressing my career ahead.",
                "name": "Rajat Singh",
                "city": "Ahmedabad",
                "image": "https://prod-s3.counselindia.com/success_stories/rajat.jpg"
            },
            {
                "quote": "I had got an amazing opportunity to get skilled with counsel India. Learnt good amount of skills there",
                "name": "Kartik Mudgal",
                "city": "Jaipur",
                "image": "https://prod-s3.counselindia.com/success_stories/kartik.jpg"
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
                    "a) You will love each and every class as all sessions are practically conducted and participation in psychology activities is very easy and effective.",
                    "b) You will get practical exposure on how to deal with real life clients and not just cover the theory part.",
                    "c) Online training sessions will also help you to understand how to take online sessions as a counsellor across the globe and not just limit your client base in your area which is a big challenge for offline mode of training."
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
                    "a) You can read notes over a soft copy at your comfort which is accessible on your phone, laptop or desktop.",
                    "b) You will also receive Hard copies of the study material at your doorstep after the completion of the course for lifetime reference and support."
                ]
            },
            {
                "question": "What is Western style of learning?",
                "answer": [
                    "a) You take one class every week and start applying it for the rest of your week days.",
                    "b) Free yourself from the burden of being disturbed in your working schedule."
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
  "id": 35,
  "name": "Masters in Child Psychology",
  "slug": "masters-in-child-psychology-work-integrated-skill-based-program%29",
  "badgeSale": "40% OFF",
  "category": "Course",
  "bgImage": "https://prod-s3.counselindia.com/courses/background_image/New%20Project%20%2841%29_1713437634.webp",
  "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
  "description": "(Internship/Apprenticeship Embedded) - Essentially designed for individuals passionate about understanding and nurturing children, this comprehensive, detailed program combines theoretical insights with practical training. It covers a broad range of topics, starting from cognitive development to social and emotional well-being. Learners will gain an in-depth understanding of the complexities of Child Psychology. Engage in ground-breaking research initiatives that ultimately contribute to Child Psychology. Recognised by the IPA (International Psychology Association) & Skill India, provides learners with a solid foundation for a successful career in mental health.",
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
      "desc": "26 September 2026"
    }
  ],
  "benefits": [
    "Comprehensive Developmental Mastery: Deeply explore physical, cognitive, social, and emotional milestones across all stages of childhood.",
    "Dual Embedded Internships & Practical Training: 480 live hours, 840 project hours, and 900 on-the-job learning (OJL) hours for practical competence.",
    "Global Certification & Affiliations: Co-branded certification with IPA (International Psychology Association) and MEPSC Skill India.",
    "Specialized Pediatric Clinical Frameworks: Hands-on diagnostic assessment for autism spectrum disorder (ASD), ADHD, and behavioral challenges.",
    "Family Systems & Parenting Counseling: Intervene effectively in family dynamics, attachment security, school adjustment, and adolescent behavioral issues.",
    "Academic Bank of Credits (ABC) Transferable: UGC-recognized stackable credit system supporting nationwide institutional transfer."
  ],
  "about": [
    "(Internship/Apprenticeship Embedded) - Essentially designed for individuals passionate about understanding and nurturing children, this comprehensive, detailed program combines theoretical insights with practical training. It covers a broad range of topics, starting from cognitive development to social and emotional well-being. Learners will gain an in-depth understanding of the complexities of Child Psychology.",
    "Engage in ground-breaking research initiatives that ultimately contribute to Child Psychology. Recognized by the IPA (International Psychology Association) & Skill India, this program provides learners with a solid foundation for a successful career in mental health, schools, pediatric clinics, and child welfare institutions."
  ],
  "learningObjectives": [
    "Understand developmental milestones, emotional regulation, and neurobiological foundations across infancy, childhood, and adolescence.",
    "Acquire hands-on mastery in screening, diagnosing, and assessing pediatric conditions like ADHD, ASD, anxiety, and learning difficulties.",
    "Design evidence-based intervention plans, parent-child counseling frameworks, and behavioral therapies under expert supervision."
  ],
  "credentials": [
    {
      "id": "tab85",
      "label": "IPA Certificate",
      "text": "Upon successful completion of the course, you will be awarded a prestigious certificate from IPA (International Psychology Association).",
      "image": "https://prod-s3.counselindia.com/credential/Screenshot%202025-08-04%20114105_1754288852.png"
    },
    {
      "id": "tab86",
      "label": "MEPSC Certificate",
      "text": "After successful training and assessment, the Management & Entrepreneurship and Professional Skills Council (MEPSC) will issue a skill certificate and add your qualifications to the central database valid across G20 nations.",
      "image": "https://prod-s3.counselindia.com/credential/Certificate%20Template%20-%20Job%20Role%20%281%29_1753182320.jpg"
    },
    {
      "id": "tab194",
      "label": "Certificate of Completion",
      "text": "This certificate honors your dedication, hard work, and mastery of essential skills and specializations. It celebrates your commitment to excellence and acknowledges your achievement in making a meaningful impact in your field.",
      "image": "https://prod-s3.counselindia.com/credential/M.A%20Child%20Psychology%20%26%20Developemnt_1728551938.png"
    },
    {
      "id": "tab84",
      "label": "Letter of Recommendation",
      "text": "This globally recognized credential showcases your expertise and commitment in your field.",
      "image": "https://prod-s3.counselindia.com/credential/Letter%20of%20recommendation%20for%20Jon%20Doe%20(1)_1755835795.png"
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
        "title": "Semester 1: Foundations of Child Development & Biological Bases",
        "topics": [
          "Introduction to Human Psychology & Lifespan Developmental Principles",
          "Genetics, Chromosomal Patterns & Childhood Biological Vulnerabilities",
          "Prenatal Development, Teratogens & Newborn Reflexive Adaptations",
          "Attachment Theory (Bowlby, Ainsworth) & Cross-Cultural Variations"
        ]
      },
      {
        "title": "Semester 2: Cognitive, Language, Temperament & Moral Development",
        "topics": [
          "Cognitive Development in Infancy & Childhood (Piaget, Vygotsky)",
          "Language Acquisition, Environmental Influences & Multilingualism",
          "Temperament, Emotional Regulation & Personality Foundations",
          "Social Play, Peer Interactions & Moral Development (Kohlberg)"
        ]
      },
      {
        "title": "Semester 3: Pediatric Psychopathology & Developmental Disorders",
        "topics": [
          "Childhood Anxiety, Phobias, and Mood Disturbances",
          "Attention-Deficit Hyperactivity Disorder (ADHD) & Behavioral Management",
          "Autism Spectrum Disorder (ASD) & Neurodivergent Interventions",
          "Research Methodologies & Psychometric Assessment in Child Development"
        ]
      },
      {
        "title": "Semester 4: Advanced Child Interventions, Practicum & Master's Thesis",
        "topics": [
          "Child-Centered Counseling, Play Therapy & Expressive Arts Modalities",
          "Parent-Child Relationship Counseling & Behavioral Modification Plans",
          "Supervised OJL Clinical Apprenticeship (900 Hours)",
          "Master's Dissertation / Capstone Research Project & Viva (840 Hours)"
        ]
      }
    ]
  },
  "whoCanJoin": [
    "Graduates in Psychology or Related Fields",
    "Educators and School Professionals",
    "Healthcare and Social Work Professionals",
    "Parents and Caregivers",
    "Early Childhood Practitioners",
    "Career Changers",
    "Aspiring Researchers and Academics"
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
      "name": "Gunjan Sandhani",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/11928981881684153375.jpeg"
    },
    {
      "name": "Himanshi Singh",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Himanshi%20Singh_1673871256.png"
    },
    {
      "name": "VARNICA KOTNALA",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/16451453501691141457.jpg"
    },
    {
      "name": "Durga Gupta",
      "title": "Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/9626930401698298591.jpeg"
    }
  ],
  "referEarn": {
    "title": "Refer & Earn with Counsel India",
    "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
    "buttonText": "Refer a Friend",
    "buttonLink": "https://www.counselindia.com/refer-and-earn?course_id=35"
  },
  "reviews": [
    {
      "quote": "Counsel India helped with my growth and progress. It enhanced my knowledge and also it was helpful along with my Post Graduation. I was been cherished because of the knowledge i had through the course.",
      "name": "Shivani Kumari",
      "city": "Delhi, India",
      "image": "https://prod-s3.counselindia.com/success_stories/shivani.jpg"
    },
    {
      "quote": "The instructors were not just teachers; they were true mentors. Their deep passion for psychology was evident in every lecture, making complex theories and concepts accessible and engrossing, so I would highly recommend this course to everyone.",
      "name": "Anushka Ghosh",
      "city": "Noida",
      "image": "https://prod-s3.counselindia.com/success_stories/image_20221207_163301%20-%20Anushka%20Ghosh%20(2)_1693906637.jpeg"
    },
    {
      "quote": "I recently had the privilege of enrolling in this psychology Course that left me utterly impressed and profoundly enriched. This course was nothing short of exceptional, and I would like to share my glowing review to encourage others to embark on this enlightening journey.",
      "name": "Muskan Maan",
      "city": "Delhi",
      "image": "https://prod-s3.counselindia.com/success_stories/image_1658507699678__01%20-%20Muskan%20Maan%20(2)_1693906710.jpeg"
    },
    {
      "quote": "I started helping my own kids, I understand them in better way.",
      "name": "Riya Raizada",
      "city": "Nagpur",
      "image": "https://prod-s3.counselindia.com/success_stories/riya.jpg"
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
      "question": "How does this program prepare graduates to work with children with special needs or developmental disabilities?",
      "answer": [
        "This program includes coursework and practical training in assessing and supporting children with a wide range of developmental challenges, including autism spectrum disorder, learning disabilities, ADHD, emotional and behavioral disorders, and trauma-related difficulties. Students learn evidence-based interventions and strategies to promote positive outcomes for children with special needs."
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
        "Yes, our program follows a stackable system of education, allowing students to earn credits that may be transferable to other academic programs or institutions. This flexibility enables students to build upon their existing qualifications and pursue further education or specialization in Career Counselling and Child Psychology."
      ]
    },
    {
      "question": "Can the credits earned in this program be transferred to other academic institutions for higher specializations?",
      "answer": [
        "Yes, our program follows a stackable system of education, allowing students to earn credits that may be transferable to other academic programs or institutions. This flexibility enables students to build upon their existing qualifications and pursue further education or specialization in Masters in Child Psychology and Development."
      ]
    }
  ]
},
  "masters-in-child-psychology-work-integrated-skill-based-program": {
  "id": 35,
  "name": "Masters in Child Psychology",
  "slug": "masters-in-child-psychology-work-integrated-skill-based-program%29",
  "badgeSale": "40% OFF",
  "category": "Course",
  "bgImage": "https://prod-s3.counselindia.com/courses/background_image/New%20Project%20%2841%29_1713437634.webp",
  "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
  "description": "(Internship/Apprenticeship Embedded) - Essentially designed for individuals passionate about understanding and nurturing children, this comprehensive, detailed program combines theoretical insights with practical training. It covers a broad range of topics, starting from cognitive development to social and emotional well-being. Learners will gain an in-depth understanding of the complexities of Child Psychology. Engage in ground-breaking research initiatives that ultimately contribute to Child Psychology. Recognised by the IPA (International Psychology Association) & Skill India, provides learners with a solid foundation for a successful career in mental health.",
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
      "desc": "26 September 2026"
    }
  ],
  "benefits": [
    "Comprehensive Developmental Mastery: Deeply explore physical, cognitive, social, and emotional milestones across all stages of childhood.",
    "Dual Embedded Internships & Practical Training: 480 live hours, 840 project hours, and 900 on-the-job learning (OJL) hours for practical competence.",
    "Global Certification & Affiliations: Co-branded certification with IPA (International Psychology Association) and MEPSC Skill India.",
    "Specialized Pediatric Clinical Frameworks: Hands-on diagnostic assessment for autism spectrum disorder (ASD), ADHD, and behavioral challenges.",
    "Family Systems & Parenting Counseling: Intervene effectively in family dynamics, attachment security, school adjustment, and adolescent behavioral issues.",
    "Academic Bank of Credits (ABC) Transferable: UGC-recognized stackable credit system supporting nationwide institutional transfer."
  ],
  "about": [
    "(Internship/Apprenticeship Embedded) - Essentially designed for individuals passionate about understanding and nurturing children, this comprehensive, detailed program combines theoretical insights with practical training. It covers a broad range of topics, starting from cognitive development to social and emotional well-being. Learners will gain an in-depth understanding of the complexities of Child Psychology.",
    "Engage in ground-breaking research initiatives that ultimately contribute to Child Psychology. Recognized by the IPA (International Psychology Association) & Skill India, this program provides learners with a solid foundation for a successful career in mental health, schools, pediatric clinics, and child welfare institutions."
  ],
  "learningObjectives": [
    "Understand developmental milestones, emotional regulation, and neurobiological foundations across infancy, childhood, and adolescence.",
    "Acquire hands-on mastery in screening, diagnosing, and assessing pediatric conditions like ADHD, ASD, anxiety, and learning difficulties.",
    "Design evidence-based intervention plans, parent-child counseling frameworks, and behavioral therapies under expert supervision."
  ],
  "credentials": [
    {
      "id": "tab85",
      "label": "IPA Certificate",
      "text": "Upon successful completion of the course, you will be awarded a prestigious certificate from IPA (International Psychology Association).",
      "image": "https://prod-s3.counselindia.com/credential/Screenshot%202025-08-04%20114105_1754288852.png"
    },
    {
      "id": "tab86",
      "label": "MEPSC Certificate",
      "text": "After successful training and assessment, the Management & Entrepreneurship and Professional Skills Council (MEPSC) will issue a skill certificate and add your qualifications to the central database valid across G20 nations.",
      "image": "https://prod-s3.counselindia.com/credential/Certificate%20Template%20-%20Job%20Role%20%281%29_1753182320.jpg"
    },
    {
      "id": "tab194",
      "label": "Certificate of Completion",
      "text": "This certificate honors your dedication, hard work, and mastery of essential skills and specializations. It celebrates your commitment to excellence and acknowledges your achievement in making a meaningful impact in your field.",
      "image": "https://prod-s3.counselindia.com/credential/M.A%20Child%20Psychology%20%26%20Developemnt_1728551938.png"
    },
    {
      "id": "tab84",
      "label": "Letter of Recommendation",
      "text": "This globally recognized credential showcases your expertise and commitment in your field.",
      "image": "https://prod-s3.counselindia.com/credential/Letter%20of%20recommendation%20for%20Jon%20Doe%20(1)_1755835795.png"
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
        "title": "Semester 1: Foundations of Child Development & Biological Bases",
        "topics": [
          "Introduction to Human Psychology & Lifespan Developmental Principles",
          "Genetics, Chromosomal Patterns & Childhood Biological Vulnerabilities",
          "Prenatal Development, Teratogens & Newborn Reflexive Adaptations",
          "Attachment Theory (Bowlby, Ainsworth) & Cross-Cultural Variations"
        ]
      },
      {
        "title": "Semester 2: Cognitive, Language, Temperament & Moral Development",
        "topics": [
          "Cognitive Development in Infancy & Childhood (Piaget, Vygotsky)",
          "Language Acquisition, Environmental Influences & Multilingualism",
          "Temperament, Emotional Regulation & Personality Foundations",
          "Social Play, Peer Interactions & Moral Development (Kohlberg)"
        ]
      },
      {
        "title": "Semester 3: Pediatric Psychopathology & Developmental Disorders",
        "topics": [
          "Childhood Anxiety, Phobias, and Mood Disturbances",
          "Attention-Deficit Hyperactivity Disorder (ADHD) & Behavioral Management",
          "Autism Spectrum Disorder (ASD) & Neurodivergent Interventions",
          "Research Methodologies & Psychometric Assessment in Child Development"
        ]
      },
      {
        "title": "Semester 4: Advanced Child Interventions, Practicum & Master's Thesis",
        "topics": [
          "Child-Centered Counseling, Play Therapy & Expressive Arts Modalities",
          "Parent-Child Relationship Counseling & Behavioral Modification Plans",
          "Supervised OJL Clinical Apprenticeship (900 Hours)",
          "Master's Dissertation / Capstone Research Project & Viva (840 Hours)"
        ]
      }
    ]
  },
  "whoCanJoin": [
    "Graduates in Psychology or Related Fields",
    "Educators and School Professionals",
    "Healthcare and Social Work Professionals",
    "Parents and Caregivers",
    "Early Childhood Practitioners",
    "Career Changers",
    "Aspiring Researchers and Academics"
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
      "name": "Gunjan Sandhani",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/11928981881684153375.jpeg"
    },
    {
      "name": "Himanshi Singh",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Himanshi%20Singh_1673871256.png"
    },
    {
      "name": "VARNICA KOTNALA",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/16451453501691141457.jpg"
    },
    {
      "name": "Durga Gupta",
      "title": "Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/9626930401698298591.jpeg"
    }
  ],
  "referEarn": {
    "title": "Refer & Earn with Counsel India",
    "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
    "buttonText": "Refer a Friend",
    "buttonLink": "https://www.counselindia.com/refer-and-earn?course_id=35"
  },
  "reviews": [
    {
      "quote": "Counsel India helped with my growth and progress. It enhanced my knowledge and also it was helpful along with my Post Graduation. I was been cherished because of the knowledge i had through the course.",
      "name": "Shivani Kumari",
      "city": "Delhi, India",
      "image": "https://prod-s3.counselindia.com/success_stories/shivani.jpg"
    },
    {
      "quote": "The instructors were not just teachers; they were true mentors. Their deep passion for psychology was evident in every lecture, making complex theories and concepts accessible and engrossing, so I would highly recommend this course to everyone.",
      "name": "Anushka Ghosh",
      "city": "Noida",
      "image": "https://prod-s3.counselindia.com/success_stories/image_20221207_163301%20-%20Anushka%20Ghosh%20(2)_1693906637.jpeg"
    },
    {
      "quote": "I recently had the privilege of enrolling in this psychology Course that left me utterly impressed and profoundly enriched. This course was nothing short of exceptional, and I would like to share my glowing review to encourage others to embark on this enlightening journey.",
      "name": "Muskan Maan",
      "city": "Delhi",
      "image": "https://prod-s3.counselindia.com/success_stories/image_1658507699678__01%20-%20Muskan%20Maan%20(2)_1693906710.jpeg"
    },
    {
      "quote": "I started helping my own kids, I understand them in better way.",
      "name": "Riya Raizada",
      "city": "Nagpur",
      "image": "https://prod-s3.counselindia.com/success_stories/riya.jpg"
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
      "question": "How does this program prepare graduates to work with children with special needs or developmental disabilities?",
      "answer": [
        "This program includes coursework and practical training in assessing and supporting children with a wide range of developmental challenges, including autism spectrum disorder, learning disabilities, ADHD, emotional and behavioral disorders, and trauma-related difficulties. Students learn evidence-based interventions and strategies to promote positive outcomes for children with special needs."
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
        "Yes, our program follows a stackable system of education, allowing students to earn credits that may be transferable to other academic programs or institutions. This flexibility enables students to build upon their existing qualifications and pursue further education or specialization in Career Counselling and Child Psychology."
      ]
    },
    {
      "question": "Can the credits earned in this program be transferred to other academic institutions for higher specializations?",
      "answer": [
        "Yes, our program follows a stackable system of education, allowing students to earn credits that may be transferable to other academic programs or institutions. This flexibility enables students to build upon their existing qualifications and pursue further education or specialization in Masters in Child Psychology and Development."
      ]
    }
  ]
},  "counselling-master-course-advanced": {
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
                "desc": "26 September 2026"
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
            "The Counselling Master Course – Advanced is an intensive, career-focused program crafted for individuals aiming to build specialized expertise in counselling psychology. This 12-month, ICPEM-supported certification blends foundational theory with real-world application, covering over 25 essential counselling domains such as trauma, anxiety, addiction, relationship issues, and more.",
            "The course equips learners with advanced techniques and client-centric approaches, preparing them to effectively address diverse psychological concerns. With a strong emphasis on experiential learning, personalized mentorship, and NEP 2020-aligned academic credits, it offers a unique advantage in today’s evolving mental health landscape.",
            "Backed by ICPEM’s mission to empower underserved communities through flexible, skill-based education, the program also ensures robust placement support, practical exposure, and the opportunity to build a thriving career in counselling across private, institutional, and entrepreneurial settings."
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
                "image": "https://prod-s3.counselindia.com/credential/%20CMC%20-%20Advanced-2_1728552024.png"
            },
            {
                "id": "tab166",
                "label": "Letter of Recommendation",
                "text": "Upon successful completion of the course, you become eligible to receive a personalized Letter of Recommendation from Counsel India, formally endorsing your counselling expertise, skillset, and professional readiness. This LOR serves as a strong testament to your capabilities, helping you stand out in academic, clinical, and job-related opportunities. It reflects your commitment, performance, and practical training—backed by India's leading psychology education platform.",
                "image": "https://prod-s3.counselindia.com/credential/Letter%20of%20recommendation%20for%20Jon%20Doe%20%281%29_1755835777.png"
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
                    "count": "23",
                    "text": "Specializations"
                },
                {
                    "count": "84+",
                    "text": "Live Sessions"
                }
            ],
            "modules": [
                {
                    "title": "Counseling in Spirituality",
                    "topics": [
                        "Integrating Spirituality and Mental Health: Connecting spiritual beliefs with psychological well-being and addressing spiritual crises in therapy.",
                        "Spiritual Assessment in Counseling: Techniques for assessing a client’s spiritual needs and history in therapy.",
                        "Spiritual Coping Mechanisms: Exploring how spiritual practices help clients cope with stress and trauma.",
                        "Ethical Considerations in Spiritual Counseling: Maintaining boundaries between spiritual guidance and psychological therapy while respecting client beliefs."
                    ]
                },
                {
                    "title": "Multicultural Counseling",
                    "topics": [
                        "The Importance of Cultural Awareness",
                        "Culturally Competent Counseling Practices",
                        "Working with Diverse Populations",
                        "Overcoming Bias in Counseling"
                    ]
                },
                {
                    "title": "Relationship Counseling",
                    "topics": [
                        "Communication: Verbal/non-verbal communication, active listening, and overcoming barriers.",
                        "Conflict Resolution: Different conflict styles and techniques for healthy resolution.",
                        "Trust and Intimacy: Building trust, emotional intimacy, and setting boundaries.",
                        "Expectations: Managing unrealistic expectations and aligning relationship goals."
                    ]
                },
                {
                    "title": "Couple Counseling",
                    "topics": [
                        "Effective Communication: Improving listening and expression in relationships.",
                        "Conflict Resolution: Strategies to resolve disagreements constructively.",
                        "Intimacy and Emotional Connection: Strengthening emotional bonds and intimacy.",
                        "Trust and Forgiveness: Rebuilding trust and practicing forgiveness."
                    ]
                },
                {
                    "title": "Behavior Counseling",
                    "topics": [
                        "Behavior Therapy Principles: Modifying behavior using reinforcement and punishment.",
                        "Cognitive-Behavioral Techniques (CBT): Combining cognitive and behavioral methods to change thoughts and behaviors.",
                        "Behavior Modification: Using reinforcement and desensitization to alter behavior.",
                        "Counselor’s Role: Identifying behaviors and developing intervention plans."
                    ]
                },
                {
                    "title": "Phobia Counseling",
                    "topics": [
                        "Types and Causes of Phobias: Different phobias (e.g., specific, social) and their causes (genetic, environmental).",
                        "CBT for Phobias: Techniques like exposure therapy and cognitive restructuring to reduce anxiety.",
                        "Mindfulness and Relaxation: Deep breathing and mindfulness to manage phobic reactions.",
                        "Addressing Triggers and Trauma: Identifying and addressing triggers, using trauma-informed approaches."
                    ]
                },
                {
                    "title": "Workplace Counseling",
                    "topics": [
                        "Employee Stress Management: Techniques for coping with work-related stress (e.g., mindfulness, time management).",
                        "Conflict Resolution: Approaches to resolving workplace conflicts through communication and mediation.",
                        "Work-Life Balance: Strategies to help employees balance personal and professional life.",
                        "Career Development: Counseling for career growth, skill development, and transitions."
                    ]
                },
                {
                    "title": "Parental Counseling",
                    "topics": [
                        "Effective Communication: Active listening, open dialogue, and emotional expression.",
                        "Parenting Styles: Authoritative, authoritarian, permissive, and their impact.",
                        "Discipline Strategies: Positive reinforcement, setting boundaries, and consistent expectations.",
                        "Managing Parental Stress: Coping strategies, self-care, and seeking support."
                    ]
                },
                {
                    "title": "Sexual Counseling",
                    "topics": [
                        "Sexual Health: Focus on physical and emotional well-being, STIs, contraception, and sexual dysfunction.",
                        "Communication in Relationships: Techniques for discussing desires, boundaries, and consent openly.",
                        "Sexual Identity and Orientation: Understanding and supporting diverse sexual orientations and gender identities.",
                        "Sexual Dysfunction: Addressing common dysfunctions like erectile dysfunction and treatment options."
                    ]
                },
                {
                    "title": "Child Counseling",
                    "topics": [
                        "Stages of Child Development",
                        "Play Therapy",
                        "Communication with Children",
                        "Parent-Child Interaction"
                    ]
                },
                {
                    "title": "Adult Counseling",
                    "topics": [
                        "Life Transitions: Coping with major life changes like career shifts or aging.",
                        "Stress Management: Techniques for handling stress and work-life balance.",
                        "Relationship Counseling: Improving communication and resolving conflicts in relationships.",
                        "Mental Health Issues: Addressing anxiety, depression, grief, and trauma through therapy."
                    ]
                },
                {
                    "title": "Geriatric Counseling",
                    "topics": [
                        "Mental Health in Aging: Addressing depression, anxiety, and cognitive decline in older adults.",
                        "Grief and Loss: Coping with loss of loved ones, health, or independence.",
                        "Healthy Aging: Promoting physical and mental well-being through self-care.",
                        "Life Transitions: Adjusting to retirement and new life roles."
                    ]
                },
                {
                    "title": "Rehabilitation Counseling",
                    "topics": [
                        "Introduction to Rehabilitation Counseling: Overview, role of counselor, ethical/legal aspects.",
                        "Types of Disabilities: Physical, sensory, cognitive, and developmental disabilities.",
                        "Assessment and Evaluation: Psychological, vocational, and functional assessments.",
                        "Counseling Techniques and Interventions: CBT, vocational guidance, emotional support strategies."
                    ]
                },
                {
                    "title": "Family Counseling",
                    "topics": [
                        "Family Dynamics",
                        "Family Systems Theory",
                        "Effective Communication in Families",
                        "Conflict Resolution within Families"
                    ]
                },
                {
                    "title": "Trauma Counseling",
                    "topics": [
                        "Understanding Trauma: Types: Acute, chronic, complex",
                        "Causes: Abuse, accidents, violence",
                        "Psychological Impact: Effects: Anxiety, PTSD, depression",
                        "Cognitive and relational changes",
                        "Trauma-Informed Care: Principles: Safety, trust, empowerment",
                        "Creating a safe environment, cultural sensitivity",
                        "Therapeutic Approaches: CBT, EMDR, somatic therapies"
                    ]
                },
                {
                    "title": "Crisis Counseling",
                    "topics": [
                        "Recognizing a Crisis",
                        "Immediate Interventions",
                        "Crisis Management Models",
                        "Post-Crisis Recovery"
                    ]
                },
                {
                    "title": "Introduction to Psychology",
                    "topics": [
                        "Definition and Scope of Psychology",
                        "Key Areas of Psychology: Clinical, Cognitive, Behavioral, Developmental",
                        "Importance of Studying Psychology: Understanding human behavior",
                        "Applications of Psychology: Real-life scenarios and settings"
                    ]
                },
                {
                    "title": "Mental Health and Common Issues",
                    "topics": [
                        "Definition of Mental Health and Mental Illness",
                        "Common Mental Health Issues: Depression, anxiety, stress, PTSD",
                        "Risk Factors and Causes: Biological, environmental, psychological",
                        "Stigma and Its Impact: How stigma affects mental health awareness and treatment"
                    ]
                },
                {
                    "title": "Counseling Skills",
                    "topics": [
                        "Cognitive Behavioral Therapy (CBT): Focus on changing negative thought patterns",
                        "Psychodynamic Therapy: Exploring unconscious processes",
                        "Humanistic Therapy: Emphasizing self-actualization and personal growth",
                        "Other Therapies: Solution-Focused Therapy, Dialectical Behavior Therapy (DBT)"
                    ]
                },
                {
                    "title": "Overview of Common Therapies",
                    "topics": [
                        "Active Listening and Empathy",
                        "Questioning Techniques: Open-ended, reflective, and probing questions",
                        "Building Rapport and Trust with Clients",
                        "Non-Verbal Communication: Significance in counseling"
                    ]
                },
                {
                    "title": "The Counseling Process",
                    "topics": [
                        "Stages of Counseling: Assessment, treatment planning, intervention, and evaluation",
                        "Establishing Rapport and Trust",
                        "Ethical Considerations in Counseling",
                        "Confidentiality and Boundaries"
                    ]
                },
                {
                    "title": "Understanding the Mind vs. Brain",
                    "topics": [
                        "Mind vs. Brain: Psychological vs. biological understanding",
                        "Key Brain Structures: Prefrontal cortex, amygdala, and their roles in behavior",
                        "Mental Health and Brain Function",
                        "Neuroplasticity: How the brain adapts and changes"
                    ]
                },
                {
                    "title": "Thoughts and Emotions",
                    "topics": [
                        "Connection Between Thoughts, Feelings, and Behavior",
                        "Cognitive Distortions: Their impact on emotional well-being",
                        "Emotional Regulation: Techniques for managing emotions",
                        "Mindfulness: Role in managing thoughts and emotions"
                    ]
                }
            ]
        },
        "programBenefit": [
            "Worldwide validity and credibility of programs.",
            "Practical, industry-based, and updated curriculum.",
            "Live interactive online classes with recordings available for missed sessions.",
            "Instructors are RCI certified and industry experts.",
            "Opportunity to study alongside like-minded individuals.",
            "Western-style learning approach with weekly 2 days classes and 5 days assignments.",
            "Access to practical workbooks and study materials.",
            "Personalized one-on-one mentoring sessions with industry leaders.",
            "Networking opportunities with various psychologists & counselors through diverse instructors covering various topics.",
            "Programs consist of 70% practical and 30% theory components.",
            "Programs support the Skill Education Movement initiated by the Government of India through Skill India.",
            "The programs deliver ten times the value of its cost.",
            "Guaranteed placement assistance for diploma and degree programs.",
            "Guaranteed interview opportunity with Counsel India for students who achieve 85% or higher in their courses (job role is dependent on skill set and interview evaluation).",
            "Doubt-clearing portal available to address questions after classes.",
            "Opportunity to work as a Mental Health Assistant (MHA) after three months of completing the program, with potential earnings ranging from ₹5,000 to ₹50,000 per month (selection based on interview).",
            "Quarterly 'Man se Man tak' sessions with the CEO, providing industry updates and an open forum for learners to ask questions.",
            "Ongoing support after program completion for any difficulties, with support validity equal to the program duration.",
            "Opportunity to study in a diverse class environment where peers may include doctors, engineers, IAS officers, scientists, housewives, counselors, etc.",
            "Offline One Day at Counsel India invite."
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
            "Psychology Students/Professionals"
        ],
        "scholarship": {
            "title": "Get Upto 30% Scholarship",
            "subtitle": "\"Avail up to a 30% scholarship and receive exclusive additional benefits.\"",
            "image": "https://prod-s3.counselindia.com/mastergalaxyimages/Untitled%20design-23_1734162900.png",
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
                "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Himanshi%20Singh_1673871256.png"
            },
            {
                "name": "Ayushi Madaan",
                "title": "Clinical Psychologist",
                "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Ayushi%20Madaan_1673869282.png"
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
            "buttonLink": "https://www.counselindia.com/refer-and-earn?course_id=8"
        },
        "reviews": [
            {
                "quote": "I have learned a lot from their course. Yet to be incorporated/utilized in my career. But I am very sure that these sessions will definitely come in handy in enhancing my career. It was really a great experience and as a mental health professional learning new concepts and working practically on them is always the best.",
                "name": "Suriyaa M",
                "city": "Kochi",
                "image": "https://prod-s3.counselindia.com/success_stories/suriyaa.jpg"
            },
            {
                "quote": "The actual meaning of work-life balance can be seen here , they provide the best psychological courses to make this world a better place of understanding people. The pandemic had created a lot of struggle in all age groups and it was It was the right moment to join the course and get well aware of the aspects and support your friends and peer to grow and handle difficult situation.",
                "name": "Shubham Rai",
                "city": "Patna",
                "image": "https://prod-s3.counselindia.com/success_stories/shubham.jpg"
            },
            {
                "quote": "Counselling psychology is one such course that requires more of practical knowledge. Inspite of COVID situation,the team managed well through online platform , coming from a psychology background got my basics even more stronger from this experience.",
                "name": "Vishal Yadav",
                "city": "Ranchi",
                "image": "https://prod-s3.counselindia.com/success_stories/vishall.jpg"
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
                    "a) You will love each and every class as all sessions are practically conducted and participation in psychology activities is very easy and effective.",
                    "b) You will get practical exposure on how to deal with real life clients and not just cover the theory part.",
                    "c) Online training sessions will also help you to understand how to take online sessions as a counsellor across the globe and not just limit your client base in your area which is a big challenge for offline mode of training."
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
                    "a) Thousands of people get to know about you with the help of marketing sessions.",
                    "b) You reach to needy people by learning Marketing tactics.",
                    "c) You can never get clients till the time you master the skills of marketing and self branding"
                ]
            },
            {
                "question": "What kind of Study Material I will get?",
                "answer": [
                    "a) You can read notes over a soft copy at your comfort which is accessible on your phone, laptop or desktop.",
                    "b) You will also receive Hard copies of the study material at your doorstep after the completion of the course for lifetime reference and support."
                ]
            },
            {
                "question": "What is Western style of learning?",
                "answer": [
                    "a) You take one class every week and start applying it for the rest of your week days.",
                    "b) Free yourself from the burden of being disturbed in your working schedule."
                ]
            }
        ]
    },
  "masters-in-industrial-organizational-psychology": {
  "id": 37,
  "name": "Masters in Industrial & Organizational Psychology",
  "slug": "masters-in-industrial-organizational-psychology",
  "badgeSale": "60% OFF",
  "category": "Course",
  "bgImage": "https://prod-s3.counselindia.com/courses/background_image/mba-in-business-psychology_1706702423.png",
  "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
  "description": "Ready to reshape workplaces and boost careers? Our Masters in Industrial/Organizational Psychology In partnership with IPA(International Psychology Association) & Skill India, is the secret skill you need to understand how people tick and how to make work environments thrive. This isn\u2019t just about theories\u2014it\u2019s about real-world impact. Understand the psychology behind workplace dynamics, learn to apply data-driven insights to talent management, and master the art of leading teams through change. Imagine being the person who sparks employee engagement, boosts productivity, and makes the office a better place for everyone. This program gives you the tools to make it happen. The future of work is waiting, and it starts with you.",
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
      "desc": "26 September 2026"
    }
  ],
  "benefits": [
    "Mathematical and Statistical Foundations Start your journey with a strong foundation in mathematics and statistics, essential for data-driven decision-making in business. The course covers four core functions\u2014linear, power, exponential, and logarithmic\u2014and introduces you to the basics of calculus and descriptive statistics. These concepts will help you navigate complex data and enhance your problem-solving abilities in managerial settings.",
    "Managerial Accounting & Financial Decision-Making Gain a solid understanding of accounting principles, focusing on how business managers can effectively manage financial resources. The course begins with fundamental concepts like cash flow analysis and financial statement interpretation, then advances to topics such as capital budgeting, risk and return, and investment decision-making. You\u2019ll explore how organizations secure short-term and long-term funding, with case analyses demonstrating how the capital markets can play a key role in this process.",
    "Principles of Economics and Finance This foundational course introduces you to the practicalities of economics and finance with real-world applications. Topics covered include classical vs. modern economic thought, supply and demand, inflation, and unemployment. On the finance side, you\u2019ll dive into the workings of the Federal Reserve, interest rates, and how financial markets influence decision-making. The course gives you a deep understanding of how these economic and financial principles drive organizational success.",
    "Managerial Economics: Strategic Decision-Making Explore how economic theory can guide strategic decision-making in the business world. You\u2019ll learn to apply economic variables like output, pricing, interest rates, and competition to solve real business challenges. This course covers profit measurement, economic optimization, demand estimation, and long-term investment decisions\u2014all crucial for leaders in the field of industrial and organizational psychology.",
    "Managerial Marketing: Bridging Psychology and Business Understand how to leverage psychological insights in marketing and consumer behavior to boost organizational success. This course integrates marketing principles with the study of human behavior to help you craft effective marketing strategies that align with both organizational goals and consumer needs.",
    "Whether you\u2019re working within a corporation or launching your own venture, this course explores entrepreneurial skills in both settings. You\u2019ll learn how to identify and develop your leadership skills, fostering an entrepreneurial mindset within your organization. Topics include project management, innovation, and leadership development, all of which are essential for driving organizational change and success."
  ],
  "about": [
    "The Masters in Industrial/Organizational Psychology is designed for those who want to bridge the gap between human behavior and business success. This course combines the fundamentals of psychology with essential business management skills, empowering you to optimize organizational performance, enhance employee well-being, and create thriving workplace cultures. You\u2019ll gain deep insights into workplace dynamics, improve decision-making through data analytics, and develop leadership skills to manage change and foster collaboration. With a strong foundation in finance, economics, and marketing, you\u2019ll be equipped to handle the complexities of organizational challenges. Whether you're aiming to advance in leadership or pursue a career in consulting, this course prepares you to make a tangible impact by applying psychological principles to real-world business scenarios."
  ],
  "learningObjectives": [
    "Apply evidence-based psychological principles and behavioral insights to optimize organizational productivity, talent retention, and corporate culture.",
    "Master quantitative analytical tools, managerial economics, statistics, and financial decision-making frameworks tailored for organizational leaders.",
    "Design and execute strategic change management interventions, team leadership protocols, and conflict resolution mechanisms in diverse corporate environments.",
    "Lead human resources consulting, organizational development, executive coaching, and talent development programs across global enterprise settings."
  ],
  "credentials": [
    {
      "id": "tab202",
      "label": "IPA Certificate",
      "text": "Upon successful completion of the course, you will be awarded a prestigious certificate from IPA( International Psychology Association)",
      "image": "https://prod-s3.counselindia.com/credential/Screenshot%202025-08-04%20114105_1754288504.png"
    },
    {
      "id": "tab88",
      "label": "Letter of Recommendation",
      "text": "This globally recognized credential showcases your expertise and commitment in your field.",
      "image": "https://prod-s3.counselindia.com/credential/Letter%20of%20recommendation%20for%20Jon%20Doe%20%281%29_1755835814.png"
    },
    {
      "id": "tab205",
      "label": "MEPSC Certificate",
      "text": "After the successful training and assessment, the Management & Entrepreneurship and Professionals Skills Council (MEPSC) will issue a skill certificate, add your database in the central skills qualification database which can be accessed online for verification and due-diligence by employers. This skills certification will be valid across all G20 nations.",
      "image": "https://prod-s3.counselindia.com/credential/Certificate%20Template%20-%20Job%20Role%20%281%29_1753183776.jpg"
    }
  ],
  "curriculum": {
    "totalSessions": "240 Sessions",
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
        "title": "Semester 1: Foundations of Business & Quantitative Methods",
        "topics": [
          "PRINCIPLES OF ECONOMICS AND FINANCE: This foundation course helps students to understand the practicality and relevance of economics and finance with a variety of real-world applications. Topics include classical vs. modern economic thought, supply and demand, inflation, unemployment, the Federal Reserve, interest rates, and financial markets.",
          "PRINCIPLES OF ACCOUNTING: This foundation course teaches fundamental accounting procedures and the uses of accounting information. Topics include cash flow analysis, balance sheet and income statement interpretation, and managerial accounting tools.",
          "MANAGERIAL STATISTICS: This foundation course prepares students for working in courses that require the use of mathematics and descriptive and inferential statistics for business decision-making.",
          "MANAGERIAL ACCOUNTING: This course provides fundamental concepts and tools in accounting that business managers need to manage financial resources, capital budgeting, risk and return, and investment decision-making."
        ]
      },
      {
        "title": "Semester 2: Management, Marketing & Data Systems",
        "topics": [
          "INTRA AND ENTREPRENEURSHIP: Focuses on intrapreneurship within corporate enterprises and applying entrepreneurial skills, leadership identification, project management, innovation, and corporate venturing.",
          "INFORMATION DATA MANAGEMENT: Theoretical, managerial, and hands-on approaches to the study of computers and information technologies for business problem solving and data-driven management.",
          "MANAGERIAL ECONOMICS: The application of economic theory and methodology to strategic management decisions, market structure analysis, pricing strategies, demand forecasting, and profit maximization.",
          "MANAGERIAL MARKETING: Practical tools and techniques for delivering goods and services in a global economy, consumer psychology, brand positioning, and market analysis."
        ]
      },
      {
        "title": "Semester 3: Law, Corporate Finance & Organizational Change",
        "topics": [
          "BUSINESS LAW AND ETHICS: Commercial transactions, legal responsibilities of business entities, regulatory compliance, corporate governance, and ethical decision-making frameworks.",
          "MANAGERIAL FINANCE: Corporate financing decisions, long-term capital investments, working capital management, valuation, and capital market dynamics.",
          "ORGANIZATIONAL CHANGE MANAGEMENT: In-depth study of corporate culture, organizational structure, employee behavior during transitions, change models, and organizational development interventions.",
          "PROJECT TEAM MANAGEMENT: Advanced project management and leadership on strategic change, team formation, cross-functional collaboration, and performance tracking."
        ]
      },
      {
        "title": "Semester 4: Negotiation, Advanced Management & Capstone",
        "topics": [
          "PEOPLE, CONFLICT, NEGOTIATION & RESOLUTION: Essential negotiation strategies, workplace mediation, conflict de-escalation models, and stakeholder alignment techniques in high-stakes business environments.",
          "ADVANCED PROJECT MANAGEMENT: In-depth project execution methodologies integrating financial control, risk management, agile workflows, and stakeholder communication systems.",
          "CAPSTONE PROJECT: Comprehensive real-world applied consulting project addressing complex industrial and organizational challenges in actual enterprise organizations."
        ]
      }
    ]
  },
  "whoCanJoin": [
    "Aspiring Business Leaders",
    "Human Resources Professionals",
    "Mid-Career Professionals",
    "Entrepreneurs and Small Business Owners",
    "Psychology Graduates",
    "Marketing and Sales Professionals",
    "Corporate Trainers",
    "Consultants and Coaches",
    "Government and Nonprofit Leaders",
    "Individuals Seeking Career Change"
  ],
  "scholarship": {
    "title": "Scholarship & Practical Learning Support",
    "subtitle": "Guaranteed practical internship & training support under our Har Ghar Counsellor initiative.",
    "image": "https://www.counselindia.com/assets/images/about/about-13.png",
    "points": [
      {
        "label": "Direct Mentorship",
        "desc": "One-on-one supervision by senior organizational psychologists and HR leaders."
      },
      {
        "label": "Hands-on Practice",
        "desc": "Live case studies, real company consulting projects, and corporate simulations."
      },
      {
        "label": "Fee Assistance",
        "desc": "Flexible EMI options and merit scholarships for deserving candidates."
      }
    ]
  },
  "faculty": [
    {
      "name": "Shrija Narayan",
      "title": "HR Business Partner",
      "image": "https://prod-s3.counselindia.com/counsellor/7160281521710139050.jpg"
    },
    {
      "name": "Capt Purba Panchbhai (Retd)",
      "title": "Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/18678758091703854875.jpg"
    },
    {
      "name": "Nida M P",
      "title": "Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/18193321571701772823.jpg"
    },
    {
      "name": "Himanshi Singh",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Himanshi%20Singh_1673871256.png"
    },
    {
      "name": "VARNICA KOTNALA",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/16451453501691141457.jpg"
    },
    {
      "name": "Durga Gupta",
      "title": "Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/9626930401698298591.jpeg"
    }
  ],
  "referEarn": {
    "title": "Refer & Earn with Counsel India",
    "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
    "buttonText": "Refer a Friend",
    "buttonLink": "https://www.counselindia.com/refer-and-earn?course_id=37"
  },
  "reviews": [
    {
      "quote": "Counsel India helped with my growth and progress. It enhanced my knowledge and also it was helpful along with my Post Graduation. I was been cherished because of the knowledge i had through the course.",
      "name": "Shivani Kumari",
      "city": "Delhi, India",
      "image": "https://prod-s3.counselindia.com/success_stories/shivani.jpg"
    },
    {
      "quote": "The instructors were not just teachers; they were true mentors. Their deep passion for psychology was evident in every lecture, making complex theories and concepts accessible and engrossing, so I would highly recommend this course to everyone.",
      "name": "Anushka Ghosh",
      "city": "Noida",
      "image": "https://prod-s3.counselindia.com/success_stories/image_20221207_163301%20-%20Anushka%20Ghosh%20(2)_1693906637.jpeg"
    },
    {
      "quote": "I recently had the privilege of enrolling in this psychology Course that left me utterly impressed and profoundly enriched. This course was nothing short of exceptional, and I would like to share my glowing review to encourage others to embark on this enlightening journey.",
      "name": "Muskan Maan",
      "city": "Delhi",
      "image": "https://prod-s3.counselindia.com/success_stories/image_1658507699678__01%20-%20Muskan%20Maan%20(2)_1693906710.jpeg"
    },
    {
      "quote": "I started helping my own kids, I understand them in better way. Riya Raizada Nagpur",
      "name": "Riya Raizada",
      "city": "Nagpur",
      "image": "https://prod-s3.counselindia.com/success_stories/riya.jpg"
    },
    {
      "quote": "Counsel india has changed my entire level of thinking and living as thank you sooo much for being all time supportive team",
      "name": "Sachin Soni",
      "city": "Bangalore",
      "image": "https://prod-s3.counselindia.com/success_stories/sachin.jpg"
    },
    {
      "quote": "I have done the child psychology course under council india. Very good and well efficient organization. Short time course but very helpful. I will try to join another course in future",
      "name": "Anyasa saha",
      "city": "Bangalore",
      "image": "https://prod-s3.counselindia.com/success_stories/anyasa-saha.jpg"
    }
  ],
  "partners": [
    "https://www.counselindia.com/assets/images/logo/icpemci.png",
    "https://www.counselindia.com/assets/images/logo/VGU.png"
  ],
  "faqs": [
    {
      "question": "Do I need a background in psychology to apply for this course?",
      "answer": [
        "While a background in psychology can be helpful, it\u2019s not mandatory. The course is designed to cater to individuals from diverse academic backgrounds, including business, management, and social sciences. We provide all the necessary foundational knowledge to help you succeed, no matter your prior education."
      ]
    },
    {
      "question": "What are the career opportunities after completing this MBA program?",
      "answer": [
        "Graduates of the Masters in Industrial/Organizational Psychology can pursue a wide range of careers, including: ",
        "\u2022 Human Resources Manager",
        "\u2022 Organizational Development Consultant",
        "\u2022 Talent Acquisition Specialist",
        "\u2022 Employee Engagement and Well-being Specialist",
        "\u2022 Leadership Coach or Development Expert",
        "\u2022 Corporate Trainer",
        "\u2022 Consultant in Organizational Strategy and Culture",
        "This program also opens doors to leadership roles across various industries, including corporate, healthcare, education, and government sectors."
      ]
    },
    {
      "question": "Is the course available online or in-person?",
      "answer": [
        "Yes! The Masters in Industrial/Organizational Psychology program is available in online formats. We offer flexibility to cater to students' needs, by providing them with online learning environment that fits into your busy schedule."
      ]
    },
    {
      "question": "Will this program provide practical, real-world experience?",
      "answer": [
        "Absolutely! The program is designed to be highly practical, with a focus on applying psychological principles to real-world business challenges. You will engage in case studies, hands-on projects, and internship opportunities that allow you to work with actual organizations, developing strategies for talent management, employee engagement, and organizational development."
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
        "desc": "26 September 2026"
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
      "This course is designed to equip you with essential skills at the intersection of counselling, business psychology, and mental health, offering a comprehensive approach to building a successful career in these growing fields. The program blends theoretical knowledge with entrepreneurial skills to help you launch and manage your own counselling practice, while mastering client management and developing effective strategies to grow your business."
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
        "image": "https://prod-s3.counselindia.com/credential/Letter%20of%20recommendation%20for%20Jon%20Doe%20%281%29_1755835754.png"
      },
      {
        "id": "tab199",
        "label": "MEPSC Certificate",
        "text": "Upon successful completion of the course, you will also receive a MEPSC certification.",
        "image": "https://prod-s3.counselindia.com/credential/WhatsApp%20Image%202025-05-27%20at%2016.50.25_1748587499.jpeg"
      },
      {
        "id": "tab200",
        "label": "Psychology foundation course certificate",
        "text": "This certificate is a testament to your dedication, hard work, and mastery of essential skills and specializations. It recognizes your commitment to excellence and marks your achievement in creating meaningful impact in your field. You will receive this additional certificate upon completing the program, making your profile truly future-ready and industry-recognized.",
        "image": "https://prod-s3.counselindia.com/credential/WhatsApp%20Image%202025-05-30%20at%2012.13.37_1748587672.jpeg"
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
          "title": "Depression",
          "topics": [
            "Understanding Depression: Types, causes, and symptoms.",
            "Therapeuti c Approaches: CBT, MBCT, and psychodynami c methods.",
            "Coping Strateg i es: Healthy routines, stress management, and support systems.",
            "Crisis Intervention: Manag ing sui c i dal i deation, safety planning , and relapse prevention."
          ]
        },
        {
          "title": "Anxiety",
          "topics": [
            "Understanding Anxiety: Types, causes, and triggers of anxiety disorders.",
            "Cognitive Behavioral Techniques: Identifying negative thoughts and developing coping strategies.",
            "Mindfulness and Stress Management: Techniques like deep breathing and mindfulness-based stress reduction (MBSR).",
            "Building Resilience and Support Systems: Lifestyle changes, exercise, sleep hygiene, and social support."
          ]
        },
        {
          "title": "Addiction",
          "topics": [
            "Types of Addiction",
            "Causes and Risk Factors",
            "Addiction Treatment Models",
            "Developing Treatment Plans"
          ]
        },
        {
          "title": "Stress",
          "topics": [
            "Identifying Stressors",
            "Stress Reduction Techniques",
            "Cognitive Behavioral Strategies for Stress& Branding Difference and importance",
            "Relaxation Techniques"
          ]
        },
        {
          "title": "Anger Counseling",
          "topics": [
            "Understanding Anger: Identifying triggers and the role of anger in emotional regulation.",
            "Cognitive Behavioral Techniques: Using CBT to challenge negative thoughts and manage impulsive reactions.",
            "Mindfulness & Relaxation: Practicing mindfulness, breathing exercises, and relaxation to manage anger.",
            "Improving Communication: Enhancing assertiveness, active listening, and conflict resolution skills."
          ]
        },
        {
          "title": "Focus and Memory counseling",
          "topics": [
            "Improving Attention: Techniques to enhance focus and reduce distractions.",
            "Memory Enhancement: Strategies like visualization and repetition to boost recall.",
            "Managing Cognitive Load: Reducing stress to optimize memory and focus.",
            "Mindfulness Practices: Using mindfulness to improve clarity and mental function."
          ]
        },
        {
          "title": "Life re building counseling",
          "topics": [
            "Core Values & Strengths: Reconnect with personal beliefs for growth.",
            "SMART Goals: Set achievable goals for transformation.",
            "Emotional Resilience: Build coping strategies for challenges.",
            "Self-Identity & Purpose: Redefine identity and find meaning."
          ]
        },
        {
          "title": "work life balance counseling",
          "topics": [
            "Time Management: Techniques for prioritizing tasks and reducing stress.",
            "Setting Boundaries: Creating clear work-life boundaries to avoid burnout.",
            "Stress Management: Using mindfulness and relaxation to handle work stress.",
            "Self-Care: Importance of physical and emotional self-care for well-being."
          ]
        },
        {
          "title": "Grief and loss counseling",
          "topics": [
            "Understanding Grief: Theories of grief (e.g., Kubler-Ross stages) and factors influencing the grieving process.",
            "Grief Counseling Techniques: Approaches like empathy, active listening, and creative therapies (journaling, art).",
            "Complicated Grief: Identifying and treating prolonged grief disorder, including therapeutic methods.",
            "Grief in Special Populations: Supporting children, adolescents, and those facing sudden or traumatic loss."
          ]
        },
        {
          "title": "Relationship Counseling",
          "topics": [
            "Communication: Verbal/non-verbal communication, active listening, and overcoming barriers.",
            "Conflict Resolution: Different conflict styles and techniques for healthy resolution.",
            "Trust and Intimacy: Building trust, emotional intimacy, and setting boundaries.",
            "Expectations: Managing unrealistic expectations and aligning relationship goals."
          ]
        },
        {
          "title": "Behaviour Counseling",
          "topics": [
            "Principles of Behavior Modification: Techniques like reinforcement and punishment to change observable behavior.",
            "Operant Conditioning: Using reinforcement and punishment to modify behavior.",
            "Cognitive-Behavioral Techniques: Challenging negative thoughts to change behavior.",
            "Applied Behavior Analysis (ABA): Systematic approach to improve specific behaviors, often in developmental disorders."
          ]
        },
        {
          "title": "Workplace counseling",
          "topics": [
            "Employee Stress Management: Techniques for coping with work-related stress (e.g., mindfulness, time management).",
            "Conflict Resolution: Approaches to resolving workplace conflicts through communication and mediation.",
            "Work-Life Balance: Strategies to help employees balance personal and professional life.",
            "Career Development: Counseling for career growth, skill development, and transitions."
          ]
        },
        {
          "title": "Adult counseling",
          "topics": [
            "Psychological Assessment - Tools for diagnosing adult mental health issues (e.g., depression, anxiety).",
            "CBT for Adults - Using Cognitive Behavioral Therapy to address stress, anxiety, and depression.",
            "Relationship Counseling - Improving communication and resolving conflicts in adult relationships.",
            "Career Counseling - Helping adults navigate career transitions and work-life balance."
          ]
        },
        {
          "title": "Gestalt Therapy",
          "topics": [
            "The Here-and-Now Concept",
            "Self-Awareness and Presence",
            "Empty Chair Technique",
            "Integrating Gestalt in Therapy"
          ]
        },
        {
          "title": "Existential Therapy",
          "topics": [
            "Freedom and Responsibility",
            "Meaning of Life",
            "Existential Guilt",
            "Authenticity in Therapy"
          ]
        },
        {
          "title": "Humanistic Therapy",
          "topics": [
            "Carl Rogers' Person-Centered Therapy",
            "Unconditional Positive Regard",
            "Self-Actualization",
            "Therapeutic Alliance in Humanistic Therapy"
          ]
        },
        {
          "title": "Solution-Focused Therapy",
          "topics": [
            "Goal Setting in Therapy",
            "Miracle Question Technique",
            "Strength-Based Approach",
            "Solution-Oriented Techniques"
          ]
        },
        {
          "title": "Narrative Therapy",
          "topics": [
            "Externalizing Problems",
            "Re-authoring the Client's Story",
            "Therapeutic Conversations",
            "Techniques in Narrative Therapy"
          ]
        },
        {
          "title": "Acceptance and Commitment",
          "topics": [
            "Therapy (ACT)",
            "Principles of ACT",
            "Cognitive Defusion",
            "Mindfulness and Acceptance",
            "Values and Behavioral Commitment"
          ]
        },
        {
          "title": "Behavioral Therapy",
          "topics": [
            "Classical Conditioning",
            "Operant Conditioning",
            "Behavior Modification Techniques",
            "Systematic Desensitization"
          ]
        },
        {
          "title": "Art Therapy",
          "topics": [
            "Expressive Arts for Healing",
            "Techniques in Art Therapy",
            "Benefits of Art Therapy",
            "Art Therapy for Trauma"
          ]
        },
        {
          "title": "Music Therapy",
          "topics": [
            "Using Music for Healing",
            "Techniques in Music Therapy",
            "Psychological Effects of Music",
            "Music Therapy for Emotional Expression"
          ]
        },
        {
          "title": "Transactional Analysis Therapy",
          "topics": [
            "Ego States in Therapy",
            "Script Analysis",
            "Transactions and Communication",
            "Life Positions in Therapy"
          ]
        },
        {
          "title": "Eye Movement Desensitization and Reprocessing (EMDR)",
          "topics": [
            "EMDR Overview",
            "The Phases of EMDR",
            "Bilateral Stimulation",
            "EMDR for Trauma"
          ]
        },
        {
          "title": "Play Therapy",
          "topics": [
            "Role of Play in Child Development",
            "Techniques in Play Therapy",
            "Benefits of Play for Children"
          ]
        },
        {
          "title": "Integrative Therapy",
          "topics": [
            "Combining Approaches in Therapy",
            "Benefits of Integrative Models",
            "Tailoring Therapy for Clients",
            "Multi-Modal Approaches"
          ]
        },
        {
          "title": "Introduction to Counseling Entrepreneurship",
          "topics": [
            "Definition and scope",
            "Key challenges in counseling entrepreneurship",
            "The role of psychology in entrepreneurship"
          ]
        },
        {
          "title": "Identifying Market Needs in Counseling",
          "topics": [
            "Assessing community needs",
            "Target audience analysis",
            "Finding niche markets"
          ]
        },
        {
          "title": "Business Planning for Counseling Practices",
          "topics": [
            "Setting clear goals and objectives",
            "Developing a business model",
            "Financial planning and budgeting"
          ]
        },
        {
          "title": "Legal and Ethical Considerations",
          "topics": [
            "Licensure and certification",
            "Ethical guidelines for counselors in private practice",
            "Legal responsibilities and risk management"
          ]
        },
        {
          "title": "Building a Strong Brand for Counseling Services",
          "topics": [
            "Defining your counseling brand",
            "Creating a unique value proposition",
            "Marketing and promotion strategies"
          ]
        },
        {
          "title": "Setting Up a Counseling Practice",
          "topics": [
            "Choosing the right location",
            "Office setup and client confidentiality",
            "Creating a professional and welcoming space"
          ]
        },
        {
          "title": "Effective Client Relationship Management",
          "topics": [
            "Building trust and rapport",
            "Setting clear boundaries",
            "Client retention strategies"
          ]
        },
        {
          "title": "Marketing Strategies for Counseling Businesses",
          "topics": [
            "Online marketing tools and platforms",
            "Networking and partnerships",
            "Referral programs and word-of-mouth marketing"
          ]
        },
        {
          "title": "Financial Management for Counseling Entrepreneurs",
          "topics": [
            "Managing income and expenses",
            "Setting fees and payment structures",
            "Tax planning and financial compliance"
          ]
        },
        {
          "title": "Developing Counseling Programs and Services",
          "topics": [
            "Identifying client needs and designing services",
            "Group therapy vs. individual counseling",
            "Creating online or remote counseling options"
          ]
        },
        {
          "title": "Time Management for Counseling Entrepreneurs",
          "topics": [
            "Scheduling and balancing workloads",
            "Managing client appointments and sessions",
            "Personal time management for self-care"
          ]
        },
        {
          "title": "Client Assessment and Intake Procedures",
          "topics": [
            "Developing intake forms and questionnaires",
            "Risk assessment and emergency procedures",
            "Goal-setting with clients"
          ]
        },
        {
          "title": "Networking and Building Professional Relationships",
          "topics": [
            "Building partnerships with other mental health professionals",
            "Attending conferences and workshops",
            "Online networking and presence"
          ]
        },
        {
          "title": "Technological Tools for Counseling Entrepreneurs",
          "topics": [
            "Software for client management",
            "Telehealth tools and platforms",
            "Digital resources for counseling"
          ]
        },
        {
          "title": "Financial Sustainability in Counseling",
          "topics": [
            "Creating multiple streams of income",
            "Investment and retirement planning for counselors",
            "Managing cash flow and saving strategies"
          ]
        },
        {
          "title": "Crisis Management in Counseling Practice",
          "topics": [
            "Handling emergencies and client crises",
            "Referral systems for urgent situations",
            "Creating crisis management protocols"
          ]
        },
        {
          "title": "Building a Supportive Team for Your Practice",
          "topics": [
            "Hiring administrative and support staff",
            "Team dynamics and communication",
            "Delegating tasks and responsibilities"
          ]
        },
        {
          "title": "Self-Care for Counseling Entrepreneurs",
          "topics": [
            "Managing burnout and stress",
            "Balancing work and personal life",
            "Mindfulness and relaxation techniques"
          ]
        },
        {
          "title": "Supervision and Professional Development",
          "topics": [
            "Continuing education and certifications",
            "Supervision requirements for counselors",
            "Staying updated on new counseling techniques"
          ]
        },
        {
          "title": "Tracking Client Progress and Satisfaction",
          "topics": [
            "Managing client disagreements or complaints",
            "Resolving internal staff conflicts",
            "Mediating disputes with partners or collaborators"
          ]
        },
        {
          "title": "Measuring Business Growth and Profitability",
          "topics": [
            "Types of insurance needed (e.g., malpractice, general liability)",
            "Understanding coverage and policy options",
            "Mitigating risks in a counseling practice",
            "Adjusting business strategies based on outcomes"
          ]
        },
        {
          "title": "Building Your Professional Identity",
          "topics": [
            "Leveraging social media for personal brand growth",
            "Public speaking and writing for exposure"
          ]
        },
        {
          "title": "Client Retention Strategies",
          "topics": [
            "Follow-up practices and continued support",
            "Offering additional services or programs",
            "Creating loyalty programs"
          ]
        },
        {
          "title": "Scaling Your Counseling Business",
          "topics": [
            "Expanding services and offerings",
            "Hiring additional counselors or staff",
            "Franchising or licensing your practice"
          ]
        },
        {
          "title": "Financial Planning for Growth and Expansion",
          "topics": [
            "Securing loans or investments for growth",
            "Planning for large-scale operations",
            "Cost-benefit analysis for scaling"
          ]
        },
        {
          "title": "Evaluating Success and Measuring Impact",
          "topics": [
            "Tracking client progress and satisfaction",
            "Measuring business growth and profitability",
            "Adjusting business strategies based on outcomes"
          ]
        },
        {
          "title": "Identity Formation in Adolescence",
          "topics": [
            "Identity formation in adolescence",
            "Changes in brain structure",
            "Role of hormones",
            "Impact on decision-making",
            "Implications for behavior"
          ]
        },
        {
          "title": "Peer Influence and Family Role",
          "topics": [
            "Peer influence",
            "Role of family",
            "Impact on mental health"
          ]
        },
        {
          "title": "Gender Identity and Roles",
          "topics": [
            "Gender identity development",
            "Cultural influences",
            "Gender dysphoria",
            "Impact of media"
          ]
        },
        {
          "title": "Developmental Psychopathology",
          "topics": [
            "Autism Spectrum Disorder",
            "ADHD overview",
            "Early intervention strategies",
            "Role of family support"
          ]
        },
        {
          "title": "Nutrition and Its Impact on Growth",
          "topics": [
            "Importance of balanced diet",
            "Nutritional deficiencies",
            "Childhood obesity",
            "Role of diet in cognitive development"
          ]
        },
        {
          "title": "Sleep and Child Development",
          "topics": [
            "Importance of sleep",
            "Sleep patterns in children",
            "Impact of sleep deprivation",
            "Parental strategies for healthy sleep"
          ]
        },
        {
          "title": "Learning Theories in Childhood",
          "topics": [
            "Classical Conditioning (Pavlov)",
            "Operant Conditioning (Skinner)",
            "Observational Learning (Bandura)",
            "Educational applications"
          ]
        },
        {
          "title": "Memory Development in Children",
          "topics": [
            "Types of Memory (Sensory, Short-Term, Long-Term)",
            "Working Memory in Childhood",
            "Role of Repetition and Practice",
            "Memory Enhancement Techniques"
          ]
        },
        {
          "title": "Language Disorders in Childhood",
          "topics": [
            "Common Language Delays",
            "Dyslexia and Reading Challenges",
            "Assessment of Language Disorders",
            "Intervention Strategies"
          ]
        },
        {
          "title": "Attachment Disorders in Childhood",
          "topics": [
            "Diagnosis and Assessment",
            "Disinhibited Social Engagement Disorder",
            "Reactive Attachment Disorder",
            "Treatment Approaches"
          ]
        },
        {
          "title": "Adolescent Mental Health",
          "topics": [
            "Anxiety Disorders",
            "Depression in Teens",
            "Early Warning Signs",
            "Intervention and Support"
          ]
        },
        {
          "title": "Impact of Divorce on Child Development",
          "topics": [
            "Psychological Effects",
            "Role of Custody Arrangements",
            "Coping Mechanisms for Children",
            "Long-Term Implications"
          ]
        },
        {
          "title": "Bullying and Its Effects on Mental Health",
          "topics": [
            "Types of Bullying (Physical, Verbal, Cyberbullying)",
            "Impact on Self-Esteem",
            "Prevention and Intervention Strategies",
            "Role of Schools and Parents"
          ]
        },
        {
          "title": "Memory Development in Children",
          "topics": [
            "Types of Memory (Sensory, Short-Term, Long-Term)",
            "Working Memory in Childhood",
            "Role of Repetition and Practice",
            "Memory Enhancement Techniques"
          ]
        },
        {
          "title": "Language Disorders in Childhood",
          "topics": [
            "Common Language Delays",
            "Dyslexia and Reading Challenges",
            "Assessment of Language Disorders",
            "Intervention Strategies"
          ]
        },
        {
          "title": "Attachment Disorders in Childhood",
          "topics": [
            "Reactive Attachment Disorder",
            "Disinhibited Social Engagement Disorder",
            "Diagnosis and Assessment",
            "Treatment Approaches"
          ]
        },
        {
          "title": "Adolescent Mental Health",
          "topics": [
            "Anxiety Disorders",
            "Depression in Teens",
            "Early Warning Signs",
            "Intervention and Support"
          ]
        },
        {
          "title": "Impact of Divorce on Child Development",
          "topics": [
            "Psychological Effects",
            "Role of Custody Arrangements",
            "Coping Mechanisms for Children",
            "Long-Term Implications"
          ]
        },
        {
          "title": "Bullying and Its Effects on Mental Health",
          "topics": [
            "Types of Bullying (Physical, Verbal, Cyberbullying)",
            "Impact on Self-Esteem",
            "Prevention and Intervention Strategies",
            "Role of Schools and Parents"
          ]
        },
        {
          "title": "The Counseling Process",
          "topics": [
            "Stages of counseling: assessment, treatment planning, intervention, and evaluation",
            "Establishing rapport and trust with clients",
            "Ethical considerations in the counseling process",
            "Confidentiality and boundaries"
          ]
        },
        {
          "title": "Understanding the Mind vs. Brain",
          "topics": [
            "The difference between mind and brain: psychological vs. biological",
            "Key brain structures and their roles in behavior (e.g., prefrontal cortex, amygdala)",
            "The relationship between mental health and brain function",
            "Neuroplasticity: how the brain adapts and changes over time"
          ]
        },
        {
          "title": "Thoughts and Emotions",
          "topics": [
            "The connection between thoughts, feelings, and behavior",
            "Cognitive distortions and their impact on emotional well-being",
            "Emotional regulation: techniques for managing emotions effectively",
            "The role of mindfulness in thought and emotion management"
          ]
        }
      ]
    },
    "programBenefit": [
      "The Counselor Entrepreneurship Program (CLEP) is designed to equip you with the skills and knowledge needed to excel in the counseling profession and successfully manage your own practice.",
      "You will explore subjects like business psychology, learning how psychological principles apply to the workplace, business growth, and customer relations.",
      "The course is highly interactive, providing you with personalized mentorship, exposure to marketing and branding strategies for your practice, and practical tools for managing clients effectively. This course will provide you with the business acumen, psychological insight, and client management skills necessary for long-term success."
    ],
    "whoCanJoin": [
      "Aspiring Counsellors/Therapists",
      "Individuals Seeking Additional Income/Side Hustle",
      "Counsellors/Therapists Starting a Venture",
      "Counsellors/Therapists Aspiring to Upskill",
      "Counsellors/Therapists Building a Personal Brand"
    ],
    "scholarship": {
      "title": "Get Upto 30% Scholarship",
      "subtitle": "\"Avail up to a 30% scholarship and receive exclusive additional benefits.\"",
      "image": "https://prod-s3.counselindia.com/mastergalaxyimages/Untitled%20design-23_1734162900.png",
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
        "name": "Shelly Ahuja",
        "title": "Psychologist",
        "image": "https://prod-s3.counselindia.com/counsellor/17150178581701751946.jpg"
      },
      {
        "name": "Sarita Shukla",
        "title": "Psychologist",
        "image": "https://prod-s3.counselindia.com/counsellor/14618756601696371739.jpeg"
      },
      {
        "name": "Nazima Sayyed",
        "title": "Psychologist",
        "image": "https://prod-s3.counselindia.com/counsellor/2906292291693329244.jpg"
      }
    ],
    "referEarn": {
      "title": "Refer someone and Earn upto INR 12,000 Cashback/Vouchers, on every successful enrollment",
      "subtitle": "Your friend also gets an instant scholarship!",
      "buttonText": "Start Referring",
      "buttonLink": "https://www.counselindia.com/refer-and-earn?course_id=56"
    },
    "reviews": [
      {
        "quote": "Counsel India helped with my growth and progress. It enhanced my knowledge and also it was helpful along with my Post Graduation. I was been cherished because of the knowledge i had through the course.",
        "name": "Shivani Kumari",
        "city": "Delhi,India",
        "image": "https://prod-s3.counselindia.com/success_stories/shivani.jpg"
      },
      {
        "quote": "The instructors were not just teachers; they were true mentors. Their deep passion for psychology was evident in every lecture, making complex theories and concepts accessible and engrossing, so I would highly recommend this course to everyone.",
        "name": "Anushka Ghosh",
        "city": "Noida",
        "image": "https://prod-s3.counselindia.com/success_stories/image_20221207_163301%20-%20Anushka%20Ghosh%20(2)_1693906637.jpeg"
      },
      {
        "quote": "I am a mental health practitioner working as counselling psychologist this course was helpful to develop my knowledge in such a good direction and by this I am doing very well in my professional practice. The trainers at Counsel India are very knowledgeable, professional and helpful. They shape the course according to the trainee.",
        "name": "Shelly John",
        "city": "South Africa",
        "image": "https://prod-s3.counselindia.com/success_stories/shelly.jpg"
      },
      {
        "quote": "When I join counsel india I was unknown to the most of things of psychology and segment wise I understand and step by step also to this situation and most of the time RCI illusion create by the surrounding people but counsel india solve my problem ,No need for this only knowledge and experience basis you can start this.",
        "name": "Garry",
        "city": "UAE",
        "image": "https://prod-s3.counselindia.com/success_stories/garry.jpg"
      },
      {
        "quote": "I recently had the privilege of enrolling in this psychology Course that left me utterly impressed and profoundly enriched. This course was nothing short of exceptional, and I would like to share my glowing review to encourage others to embark on this enlightening journey.",
        "name": "Muskan Maan",
        "city": "delhi",
        "image": "https://prod-s3.counselindia.com/success_stories/image_1658507699678__01%20-%20Muskan%20Maan%20(2)_1693906710.jpeg"
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
        "question": "What is the Counsellor Entrepreneurship Program (CLEP)?",
        "answer": [
          "CLEP is a training program designed to help individuals start and grow their own counselling practice. It covers everything from business basics to advanced counselling techniques."
        ]
      },
      {
        "question": "Is it mandatory to complete the Psychology Foundation Course, and what are the details?",
        "answer": [
          "Yes, completing the Psychology Foundation Course is mandatory and complimentary for all enrolled learners. This foundational course must be completed within 3 months to qualify for the final certificate. It is designed to strengthen your basics in psychology, ensuring you have a solid understanding to excel in advanced modules of the program."
        ]
      },
      {
        "question": "Who can join the CLEP?",
        "answer": [
          "Anyone interested in becoming a professional counsellor or starting their own counselling venture can join. You don't need prior experience, but a passion for helping others is essential."
        ]
      },
      {
        "question": "What will I learn in CLEP?",
        "answer": [
          "You'll learn how to set up your own practice, understand business strategies, develop counselling skills, and effectively market your services."
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
          "You'll receive ongoing support from experienced industry leaders, access to a network of peers, and resources to help you succeed in both counselling and business aspects."
        ]
      },
      {
        "question": "Will I get a certificate after completing the program?",
        "answer": [
          "Yes, upon successful completion, you'll receive a certificate that recognizes your achievement and readiness to start your counselling practice."
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
  "id": 58,
  "name": "Diploma in Child Psychology & Parenting",
  "slug": "diploma-in-child-psychology-parenting",
  "badgeSale": "50% OFF",
  "category": "Course",
  "bgImage": "https://prod-s3.counselindia.com/courses/background_image/child%20psychology_1722431559.jpg",
  "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
  "description": "Counsel India's Diploma in Child Psychology offers an unparalleled opportunity for educators, parents, aspiring child psychologists, and professionals working with children to deepen their understanding of childhood development and behavior. This program stands out with its expert-led curriculum, practical hands-on learning, and cutting-edge content tailored to contemporary needs. You'll gain valuable skills to support and guide children effectively, whether in educational settings, counseling, or personal interactions.",
  "rating": 5,
  "enrollUrl": "https://rzp.io/rzp/X5Q7xhF",
  "phone": "+918031320449",
  "highlights": [
    {
      "title": "Duration",
      "desc": "1 Year"
    },
    {
      "title": "Eligibility",
      "desc": "Graduation & Above"
    },
    {
      "title": "Dual Credentials",
      "desc": "CI Certificate, Grade Sheet & LOR"
    },
    {
      "title": "Program Start Date",
      "desc": "26 September 2026"
    }
  ],
  "benefits": [
    "Specialized Childhood Mental Health Expertise: Gain deep insights to address, evaluate, and manage a wide range of childhood psychological issues.",
    "Parenting Dynamics & Behavioral Management: Master modern evidence-based parenting frameworks, behavior modification plans, and positive reinforcement strategies.",
    "Dual Hands-on Clinical Internships: Intensive practical training in both Counselling Psychology and Clinical Psychology with case history taking and MSE.",
    "Extensive Practical Training: 630 live session hours, 204 project hours, 270 OJL hours, and 156 theory hours for real-world mastery.",
    "Industry-Recognized Credentials: Earn prestigious credentials including CI Diploma Certificate, Grade Sheets, and an official Letter of Recommendation.",
    "Practice & Business Launchpad: Acquire practical coaching on ethical guidelines, private practice setup, and attracting international clients."
  ],
  "about": [
    "Counsel India's Diploma in Child Psychology offers an unparalleled opportunity for educators, parents, aspiring child psychologists, and professionals working with children to deepen their understanding of childhood development and behavior.",
    "This program stands out with its expert-led curriculum, practical hands-on learning, and cutting-edge content tailored to contemporary needs. You'll gain valuable skills to support and guide children effectively, whether in educational settings, counseling, or personal interactions."
  ],
  "learningObjectives": [
    "Understand developmental milestones, emotional regulation, and psychological assessment methodologies for children.",
    "Learn practical intervention and counseling techniques for parent-child relationship dynamics, behavioral problems, and school challenges.",
    "Conduct clinical case history taking, MSE, and standardized developmental tests during structured internship rotations."
  ],
  "credentials": [
    {
      "id": "tab186",
      "label": "Certificate of Completion",
      "text": "This certificate acknowledges your sincere dedication and mastery of key skills throughout the program. Your commitment to excellence is truly commendable, and we are confident that you will make a significant impact in your professional endeavors.",
      "image": "https://prod-s3.counselindia.com/credential/Diploma%20Child%20Psychology%20%26%20Parenting-2_1728553068.png"
    },
    {
      "id": "tab188",
      "label": "Letter of Recommendation",
      "text": "This Letter of Recommendation acknowledges your successful completion of this program, demonstrating exceptional commitment and skill in your field. This certificate reflects the high standards and rigorous training of this program.",
      "image": "https://prod-s3.counselindia.com/credential/Letter%20of%20recommendation%20for%20Jon%20Doe%20(1)_1755835645.png"
    }
  ],
  "curriculum": {
    "totalSessions": "120 Sessions",
    "totalHours": "1110 Hours",
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
        "title": "Module 1: Foundations of Child Development & Psychology Lab",
        "topics": [
          "Employability Skills (Basic) & Introduction to Psychology",
          "Overview of Child Development & Milestone Tracking",
          "Developmental Approaches in Children & Behavioral Observation",
          "Psychology Lab - Attitude Towards Emotions Assessment",
          "Supervised Project Work - 1 & OJL - 1"
        ]
      },
      {
        "title": "Module 2: Parenting Pathways & Advanced Psychology",
        "topics": [
          "Parenting Pathways & Family System Dynamics",
          "Advanced Parenting Psychology & Styles of Attachment",
          "Parenting Dynamics: Behavior Management & Everyday Reinforcement Strategies",
          "Dealing with Screen Addiction, Sibling Rivalry, and Adolescent Transition"
        ]
      },
      {
        "title": "Module 3: Internship in Counselling Psychology",
        "topics": [
          "Case History Taking & MSE (Mental Status Examination)",
          "SWOT Analysis & Ethical Standards in Child Counselling",
          "Assessment Batteries: VSMS, SPM, CPM, MISIC & SFBT Approaches",
          "CBT & Behavioral Therapies for Children and Families",
          "Role Plays, Thematic Apperception Test (TAT) & Practical Projects"
        ]
      },
      {
        "title": "Module 4: Internship in Clinical Psychology",
        "topics": [
          "Clinical Diagnostic Criteria: Childhood Schizophrenia & Somatoform Disorders",
          "Autism Spectrum Disorder (ASD) & Neurodivergence Management",
          "Mindfulness-Based Techniques for Childhood Emotional Regulation",
          "Anxiety Disorders (GAD, Panic, Phobias) & Childhood Mood Disorders",
          "Clinical Case Study Reporting, Formulation & Doubt Clearing"
        ]
      }
    ]
  },
  "whoCanJoin": [
    "Aspiring Counsellors & Child Therapists",
    "Therapists Seeking Additional Practice & Income",
    "Counsellors Starting a Dedicated Venture",
    "Educators, Teachers & School Counsellors Aspiring to Upskill",
    "Child Care Practitioners & Therapists Building a Personal Brand"
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
      "name": "Apurva Sharma",
      "title": "Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/8737423301711783820.jpeg"
    },
    {
      "name": "Aqsa Qayyum",
      "title": "Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/13255525301703679728.jpg"
    },
    {
      "name": "Himanshi Singh",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Himanshi%20Singh_1673871256.png"
    },
    {
      "name": "VARNICA KOTNALA",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/16451453501691141457.jpg"
    }
  ],
  "referEarn": {
    "title": "Refer & Earn with Counsel India",
    "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
    "buttonText": "Refer a Friend",
    "buttonLink": "https://www.counselindia.com/refer-and-earn?course_id=58"
  },
  "reviews": [
    {
      "quote": "Counsel India helped with my growth and progress. It enhanced my knowledge and also it was helpful along with my Post Graduation. I was been cherished because of the knowledge i had through the course.",
      "name": "Shivani Kumari",
      "city": "Delhi, India",
      "image": "https://prod-s3.counselindia.com/success_stories/shivani.jpg"
    },
    {
      "quote": "The instructors were not just teachers; they were true mentors. Their deep passion for psychology was evident in every lecture, making complex theories and concepts accessible and engrossing, so I would highly recommend this course to everyone.",
      "name": "Anushka Ghosh",
      "city": "Noida",
      "image": "https://prod-s3.counselindia.com/success_stories/image_20221207_163301%20-%20Anushka%20Ghosh%20(2)_1693906637.jpeg"
    },
    {
      "quote": "I recently had the privilege of enrolling in this psychology Course that left me utterly impressed and profoundly enriched. This course was nothing short of exceptional, and I would like to share my glowing review to encourage others to embark on this enlightening journey.",
      "name": "Muskan Maan",
      "city": "Delhi",
      "image": "https://prod-s3.counselindia.com/success_stories/image_1658507699678__01%20-%20Muskan%20Maan%20(2)_1693906710.jpeg"
    },
    {
      "quote": "Amazing Session. To the point Conversation, all questions answered with real life examples and beautifully conveyed. Personally, learned quite a lot in just few sessions of the Course. Feeling not only satisfied with the course overall but also, somewhat wise mentally, emotionally and spiritually.",
      "name": "Balwan Singh",
      "city": "Gurgaon",
      "image": "https://prod-s3.counselindia.com/success_stories/image_passport%20size%20photo_1693906790.jpeg"
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
        "a) You will love each and every class as all sessions are practically conducted and participation in psychology activities is very easy and effective.",
        "b) You will get practical exposure on how to deal with real life clients and not just cover the theory part.",
        "c) Online training sessions will also help you to understand how to take online sessions as a counsellor across the globe and not just limit your client base in your area which is a big challenge for offline mode of training."
      ]
    },
    {
      "question": "Who all can attend this Event?",
      "answer": [
        "BA/MA I/O Psychology Students, Practicing psychologists, Counsellors, NLP Trainers, Managers, Leaders, Entrepreneurs, Research Scholars, Psychology Masters Students, Counselling Students, Management Professionals, Teachers and Principals."
      ]
    },
    {
      "question": "Who all can attend this Workshop?",
      "answer": [
        "BA/MA I/O Psychology Students, Practicing psychologists, NLP Trainers, HR Professionals, Managers, Executives, Leaders, Entrepreneurs, Research Scholars, Psychology Masters Students, Counselling Students, Management Professionals, Teachers and Principals."
      ]
    },
    {
      "question": "Who is this program designed for?",
      "answer": [
        "This program is designed for a variety of individuals, including recent psychology graduates, HR professionals, managers, educators, parents, and anyone interested in pursuing a career related to child psychology, parenting guidance, and behavioral support."
      ]
    }
  ]
},
  "therapy-master-course": {
  "id": 11,
  "name": "Therapy Master Course",
  "slug": "therapy-master-course",
  "badgeSale": "50% OFF",
  "category": "Course",
  "bgImage": "https://prod-s3.counselindia.com/courses/background_image/therapy-master-course_1687158237.webp",
  "partnerLogo": "https://www.counselindia.com/assets/images/logo/icpemci.png",
  "description": "Welcome to our comprehensive Therapy Master Course! In this transformative program, we will embark on a journey through the vast landscape of therapeutic modalities, equipping you with a deep understanding and practical skills to help individuals overcome emotional, psychological, and behavioral challenges. Our course encompasses a diverse range of therapeutic approaches and techniques, ensuring you are well-prepared to make a positive impact in the lives of those seeking help. This course is supported by the European Institute of Management and Technology (EIMT) and offers learners valuable opportunities to gain practical skills and industry connections through both on-campus and online programs.",
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
      "desc": "26 September 2026"
    }
  ],
  "benefits": [
    "15 core therapy sessions with a comprehensive course roadmap and milestones.",
    "Key therapy skills and learning objectives defined.",
    "All sessions to be conducted live online by RCI certified trainers and industry experts.",
    "Personalized Mentorship with experienced mental health practitioners.",
    "Job Support and career transition guidance in clinical and counselling settings.",
    "Western Style of Psychology Learning combining evidence-based theory and practical roleplays.",
    "Support to start your own practice or business setup.",
    "4 Core Modules + Practical Assignments, Assessments, Role Plays and Case Studies for each module.",
    "Attendance will be recorded at each session. Students must meet the 75% threshold to qualify for the full 10 marks."
  ],
  "about": [
    "Therapy Master Course is a package of the most simplified and popularized therapies used in psychology. The entire course is designed in a common language so participants can see the practicality of therapy and not get intimidated by their names, types, and newness.",
    "The entire Master course focuses on the core concept of therapy and the everyday use of those techniques for various mental health problems. There are so many ways of therapy developed by researchers all over the world, however, all that would be impossible to cover in a short span of time. There are 25 kinds of therapies covered which are most expanded and largely used by psychologists in the field.",
    "This certification program shall cover Approaches to Psychotherapy, Therapeutic Techniques, Structural Family Therapy, Problem-Solving Interventions, etc. This 4-month TMC will benefit aspiring counsellors, psychology enthusiasts, practicing professionals, and independent therapists."
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
      "label": "Letter of Recommendation",
      "text": "Upon successful completion of the course, you will be eligible to receive a Letter of Recommendation from Counsel India, endorsing your expertise and professional capabilities in the field .",
      "image": "https://prod-s3.counselindia.com/credential/Letter%20of%20recommendation%20for%20Jon%20Doe%20(1)_1755835676.png"
    },
    {
      "id": "tab193",
      "label": "EIMT certificates",
      "text": "Upon successful completion of the course, you will be awarded with a prestigious certificate from the European Institute of Management & Training, offering you with valuable opportunities to gain practical skills and industry connections through both on-campus and online programs.",
      "image": "https://prod-s3.counselindia.com/credential/EIMT%20Certificate_1728045371.png"
    }
  ],
  "curriculum": {
    "totalSessions": "36 Sessions",
    "totalHours": "96 Hours",
    "stats": [
      {
        "count": "36",
        "text": "Sessions"
      },
      {
        "count": "96",
        "text": "Hours"
      },
      {
        "count": "15",
        "text": "Therapies Covered"
      },
      {
        "count": "4",
        "text": "Core Modules"
      }
    ],
    "modules": [
      {
        "title": "Module 1: Existential Therapy & Philosophy",
        "topics": [
          "Proposition Concerns & Existentialism: What is Existential Philosophy? Dimension of the human condition.",
          "Strands of Existential Therapy: Quality of the Existential Therapist, Phases of Treatment.",
          "Historical Background in Philosophy and Existentialism, Contemporary Existential Psychotherapist.",
          "What is Existential Therapy? Aim of the therapy, Client's Experience in therapy, Shortcomings of Existential therapy."
        ]
      },
      {
        "title": "Module 2: Exposure Therapy & Habituation",
        "topics": [
          "Meaning of Exposure Therapy and Systematic Desensitization.",
          "Virtual reality exposure, Interceptive exposure, and Imaginary exposure.",
          "Therapy case examples, Precautions for therapists, and Clinical variations of Exposure Therapy."
        ]
      },
      {
        "title": "Module 3: Music Therapy & Expressive Modalities",
        "topics": [
          "What is Music Therapy and key clinical application areas.",
          "Step-by-step Process of Music Therapy in clinical and non-clinical populations.",
          "Psychological and biological effects of music as Mind-Body Medicine."
        ]
      },
      {
        "title": "Module 4: Behavioral Therapy & Conditioning",
        "topics": [
          "Introduction, Key Definitions, and Classical & Operant Behavioral Perspectives.",
          "Role of a Psychologist, Antecedent-Behavior-Consequence (ABC) model, and Functions of Behavior.",
          "Behavioral Modification Techniques: Shaping, Chaining, Token Economy, and Reinforcement Schedules."
        ]
      },
      {
        "title": "Module 5: Gestalt Therapy & Experiential Awareness",
        "topics": [
          "What is Gestalt Therapy, Here-and-Now Awareness, and Neurotic Behavior.",
          "5 Layers of Neurosis and Self-Theoretical Principles.",
          "Therapeutic Techniques: Empty Chair, Top Dog vs Underdog, and Two-Chair Dialogue.",
          "Strengths, Contributions, and Limitations of Gestalt Therapy."
        ]
      },
      {
        "title": "Module 6: Art Therapy & Creative Expression",
        "topics": [
          "What is Art Therapy, Historical Background, and Becoming an Art Therapist in India.",
          "When to consult an Art Therapist: Clinical scopes and indications.",
          "Difference between Expressive Arts Therapy and Art Therapy.",
          "Psychological assessment and interpretation of projective client artwork."
        ]
      },
      {
        "title": "Module 7: Client Centered Therapy (Rogerian)",
        "topics": [
          "Origin, Definition, Objective, and Humanistic Core Purpose.",
          "Concept of Self, Ideal Self vs Real Self, and Congruence.",
          "Six Essential Conditions required for therapeutic personality change.",
          "Unconditional Positive Regard, Empathy, Congruence, and Non-Directive Active Listening."
        ]
      },
      {
        "title": "Module 8: Psychoanalytic Therapy & Dynamic Structures",
        "topics": [
          "Overview of Psychoanalysis and Sigmund Freud's View of Human Nature.",
          "Structure of Mind: Conscious, Subconscious, and Unconscious.",
          "Structure of Personality: Id, Ego, and Superego dynamics.",
          "Psychosexual Stages: Oral, Anal, Phallic, Latency, and Genital.",
          "Ego Defense Mechanisms: Repression, Projection, Displacement, Rationalization, and Sublimation."
        ]
      },
      {
        "title": "Module 9: Rational Emotive Behavior Therapy (REBT)",
        "topics": [
          "History and Basics of Albert Ellis's REBT and ABCDE Model.",
          "Characteristics of Irrational Beliefs vs Rational Beliefs.",
          "Exposure, Risk Taking, Paradoxical Behavior, and Postponing Gratification.",
          "10 Happiness-Producing Rational Beliefs, Cognitive Restructuring, and Disputation Techniques."
        ]
      },
      {
        "title": "Module 10: Exposure and Response Prevention Therapy (ERP)",
        "topics": [
          "Introduction to OCD Spectrum, Obsessions, Compulsions, and ERP Protocols.",
          "Analysis of Self-Awareness, Johari Window model of blind and open spots.",
          "Developing Fear Hierarchies, In-vivo Exposure, and Response Prevention Management."
        ]
      },
      {
        "title": "Module 11: Transactional Analysis (TA)",
        "topics": [
          "Introduction to Eric Berne's Transactional Analysis and PAC Ego States (Parent, Adult, Child).",
          "Analysis of Transactions: Complementary, Crossed, and Ulterior Transactions.",
          "Life Positions (I'm OK, You're OK), Psychological Games, Stroking Patterns, and Script Analysis."
        ]
      },
      {
        "title": "Module 12: Cognitive Behavioural Therapy (CBT)",
        "topics": [
          "The Comprehensive Framework for Successful CBT: Thoughts, Feelings, and Behaviors.",
          "Cognitive Distortions: Catastrophizing, Black-and-White Thinking, Mind Reading, and Overgeneralization.",
          "Behavioral Activation, Thought Records, Cognitive Restructuring, and Homework Assignments.",
          "Biological and Social Factors in CBT Formulation."
        ]
      },
      {
        "title": "Module 13: Hypnotherapy & Subconscious Alignment",
        "topics": [
          "What is Clinical Hypnotherapy? Dispelling Myths and Understanding Trance States.",
          "Induction Techniques, Progressive Muscle Relaxation, and Therapeutic Suggestion.",
          "Exploration of Past Experiences, Cognitive Reframing, and Stress Management Under Hypnosis."
        ]
      },
      {
        "title": "Module 14: Dialectical Behavior Therapy (DBT)",
        "topics": [
          "Defining Marsha Linehan's DBT, Biosocial Theory, and Treatment Hierarchy.",
          "The Four Core Modules of DBT: Mindfulness Skills, Distress Tolerance Skills, Emotion Regulation Skills, and Interpersonal Effectiveness Skills (DEAR MAN).",
          "Radical Acceptance, Opposite Action, and Chain Analysis in Clinical Crises."
        ]
      },
      {
        "title": "Module 15: Yoga Therapy & Mind-Body Regulation",
        "topics": [
          "History and Philosophical Foundations of Yoga in Mental Health.",
          "Patanjali Yoga Sutras and the Eight Limbs of Yoga (Ashtanga).",
          "Pranayama (Breath Regulation), Asanas for Somatic Stress Relief, and Mindfulness Meditation Protocols."
        ]
      }
    ]
  },
  "whoCanJoin": [
    "All Managers & Corporate Leaders",
    "All Working Professionals",
    "Coordinators & Academic Administrators",
    "VPs / VCs & Senior Executives",
    "Government Officers & Social Service Workers",
    "Entrepreneurs & Business Owners",
    "Psychology Aspirants & Enthusiasts",
    "Health & Wellness Experts",
    "Psychology Students & Mental Health Professionals",
    "HODs & Team Leaders"
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
      "name": "Sweta A. Gorania",
      "title": "Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/7564953381703873617.jpg"
    },
    {
      "name": "Pooja S. Naragachche",
      "title": "Gestalt Therapist",
      "image": "https://prod-s3.counselindia.com/counsellor/pooja-counselor_1729331999.jpg"
    },
    {
      "name": "Ayushi Madaan",
      "title": "Clinical Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/counsellor_Ayushi%20Madaan_1673869282.png"
    },
    {
      "name": "Nivedita Sharma",
      "title": "Psychologist",
      "image": "https://prod-s3.counselindia.com/counsellor/13959722981699530958.jpg"
    }
  ],
  "referEarn": {
    "title": "Refer & Earn with Counsel India",
    "subtitle": "Help your peers discover transformative psychology programs and earn exciting referral rewards.",
    "buttonText": "Refer a Friend",
    "buttonLink": "https://www.counselindia.com/refer-and-earn?course_id=11"
  },
  "reviews": [
    {
      "quote": "Counsel India is a good organization and they helped us in every part of life. The sessions and mentors are very supportive.",
      "name": "Suhani Batra",
      "city": "Noida",
      "image": "https://prod-s3.counselindia.com/success_stories/suhani-batra.jpg"
    },
    {
      "quote": "Understanding background of the child psychology and therapeutic modalities was an excellent experience. Very engaging curriculum.",
      "name": "Kritika Raut",
      "city": "Bhopal",
      "image": "https://prod-s3.counselindia.com/success_stories/kritika-raut.jpg"
    },
    {
      "quote": "I am a mental health practitioner working as a counselling psychologist. This course gave me practical modalities to use with real clients immediately.",
      "name": "Dr. Hiteshi",
      "city": "Gwalior",
      "image": "https://prod-s3.counselindia.com/success_stories/dr-hiteshi.jpg"
    },
    {
      "quote": "I have learned a lot from their course. The practical techniques like CBT and REBT are structured so clearly and effectively.",
      "name": "Shruti K",
      "city": "Pune",
      "image": "https://prod-s3.counselindia.com/success_stories/shruti-k.jpg"
    },
    {
      "quote": "I took up Therapy Masters Course and learnt so many therapies. It was interesting and helped build my private practice with confidence.",
      "name": "Archana Raghav",
      "city": "Madurai",
      "image": "https://prod-s3.counselindia.com/success_stories/archana-raghav.jpg"
    },
    {
      "quote": "The therapy master class was good. It gave a decent overview of each therapy. Practical roleplays helped solidify the learning.",
      "name": "Puneet Singh",
      "city": "Delhi",
      "image": "https://prod-s3.counselindia.com/success_stories/puneet-singh.jpg"
    }
  ],
  "partners": [
    "https://www.counselindia.com/assets/images/logo/icpemci.png",
    "https://www.counselindia.com/assets/images/logo/VGU.png"
  ],
  "faqs": [
    {
      "question": "What is the duration of the Therapy Master Course?",
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
}
};

export function getCourseDetailBySlug(slug: string): CourseDetailData {
  // Direct match first
  if (COURSE_DETAILS_MAP[slug]) {
    return COURSE_DETAILS_MAP[slug];
  }
  // Decode URL encoding (e.g. %29 -> ")") and try again
  const decodedSlug = decodeURIComponent(slug);
  if (COURSE_DETAILS_MAP[decodedSlug]) {
    return COURSE_DETAILS_MAP[decodedSlug];
  }
  // Normalize by stripping trailing parentheses or %29
  const cleanedSlug = decodedSlug.replace(/[\)%29]+$/, "").trim();
  if (COURSE_DETAILS_MAP[cleanedSlug]) {
    return COURSE_DETAILS_MAP[cleanedSlug];
  }
  if (COURSE_DETAILS_MAP[`${cleanedSlug}%29`]) {
    return COURSE_DETAILS_MAP[`${cleanedSlug}%29`];
  }
  if (COURSE_DETAILS_MAP[`${cleanedSlug})`]) {
    return COURSE_DETAILS_MAP[`${cleanedSlug})`];
  }

  // Fallback to foundation course
  return COURSE_DETAILS_MAP["counselling-master-course-foundation"];
}
