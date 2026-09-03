export interface Speaker {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface KeyFeatureItem {
  title: string;
  description: string;
}

export interface EventDetail {
  id: number;
  slug: string;
  name: string;
  banner: string;
  address: string;
  date: string;
  time: string;
  type: string;
  price: number;
  seats: string;
  paymentLink: string;
  about: string[];
  perks: string[];
  keyFeatures?: KeyFeatureItem[];
  areasFocused: string[];
  keyBenefits: string[];
  speakers: Speaker[];
  faqs: FaqItem[];
}

export const EVENT_DETAILS_DATA: Record<string, EventDetail> = {
  "masterclass-on-relationship-psychology": {
    "id": 1,
    "slug": "masterclass-on-relationship-psychology",
    "name": "Masterclass on Relationship Psychology",
    "banner": "https://prod-s3.counselindia.com/mainevent/Boot Camp Post (4375 x 1563 px)_1735211360.jpg",
    "address": "C 10, Noida sector 3, 1st floor",
    "date": "16th January, 2024",
    "time": "8:00 PM-10:00 PM",
    "type": "Online",
    "price": 499,
    "seats": "50",
    "paymentLink": "https://counselindia17.mojo.page/relationship-psychology",
    "about": [
      "Welcome to Counsel India's exclusive program on \"Masterclass on Relationship Psychology\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "Core Psychological Foundations & Applications",
      "Practical Assessment Tools & Interventions",
      "Effective Client Communication & Empathy",
      "Case Formulations & Therapeutic Guidelines"
    ],
    "keyBenefits": [
      "A certificate of participation with the IAOTH (International Association of Therapies)",
      "Toolkit",
      "Opportunity to be part of our Community",
      "Psychology e-Book"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Jyoshita Chauhan",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_image9CG8hl_1728625236.jpeg"
      },
      {
        "id": 2,
        "name": "Bobby",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/3irS8Nk3ZZ.png"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "Can I ask questions during the sessions?",
        "answer": ""
      },
      {
        "id": 2,
        "question": "What is the Masterclass on Relationship Psychology about?",
        "answer": ""
      },
      {
        "id": 3,
        "question": "Who is this masterclass for?",
        "answer": ""
      },
      {
        "id": 4,
        "question": "Will I receive the certificate of Bootcamp",
        "answer": ""
      },
      {
        "id": 5,
        "question": "How long is the masterclass?",
        "answer": ""
      },
      {
        "id": 6,
        "question": "Do I need a psychology background to join?",
        "answer": ""
      }
    ]
  },
  "emotional-well-being-and-happiness": {
    "id": 2,
    "slug": "emotional-well-being-and-happiness",
    "name": "Emotional Well-Being and Happiness",
    "banner": "https://prod-s3.counselindia.com/mainevent/Boot Camp Post (4375 x 1563)_1731048278.jpg",
    "address": "1st Floor, C, 10, Block C, Noida Sector 3, Noida, Uttar Pradesh 201301",
    "date": "October, 15th & 16th, 2024",
    "time": "8:30 P.M. to 10:00 P.M.",
    "type": "Offline",
    "price": 49,
    "seats": "100",
    "paymentLink": "https://counselindia17.mojo.page/emotional-wellbeing-and-happiness",
    "about": [
      "Welcome to Counsel India's exclusive program on \"Emotional Well-Being and Happiness\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "Core Psychological Foundations & Applications",
      "Practical Assessment Tools & Interventions",
      "Effective Client Communication & Empathy",
      "Case Formulations & Therapeutic Guidelines"
    ],
    "keyBenefits": [
      "A certificate of participation with the IAOTH (International Association of Therapies)",
      "Toolkit",
      "Opportunity to be part of our Community",
      "Psychology e-Book"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Jyoshita Chauhan",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_image9CG8hl_1728625236.jpeg"
      },
      {
        "id": 2,
        "name": "Tamanna",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_image1xBbso_1728625596.jpeg"
      },
      {
        "id": 3,
        "name": "Bobby",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/3irS8Nk3ZZ.png"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "Who is this bootcamp for?",
        "answer": ""
      },
      {
        "id": 2,
        "question": "What can I expect to gain from attending?",
        "answer": ""
      },
      {
        "id": 3,
        "question": "Can I ask questions during the sessions?",
        "answer": ""
      }
    ]
  },
  "3-day-live-online-bootcamp-on-self-healing-live-a-happy-life": {
    "id": 3,
    "slug": "3-day-live-online-bootcamp-on-self-healing-live-a-happy-life",
    "name": "3-Day LIVE & Online Bootcamp on Self-Healing & Live a Happy Life!",
    "banner": "https://prod-s3.counselindia.com/mainevent/Boot Camp Post (4375 x 1563 px)__1728624900.jpg",
    "address": "D-7, Fourth Floor , Sector-3, Noida, Uttar Pradesh, 201301",
    "date": "Oct 26th - 28th, 2024",
    "time": "8:30 P.M. to 10:00 P.M.",
    "type": "Online",
    "price": 249,
    "seats": "100",
    "paymentLink": "https://counselindia17.mojo.page/live-a--happy-life",
    "about": [
      "Welcome to Counsel India's exclusive program on \"3-Day LIVE & Online Bootcamp on Self-Healing & Live a Happy Life!\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "Core Psychological Foundations & Applications",
      "Practical Assessment Tools & Interventions",
      "Effective Client Communication & Empathy",
      "Case Formulations & Therapeutic Guidelines"
    ],
    "keyBenefits": [
      "A certificate of participation with the IAOTH (International Association of Therapies)",
      "Toolkit",
      "Opportunity to be part of our Community",
      "Psychology e-Book"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Jyoshita Chauhan",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_image9CG8hl_1728625236.jpeg"
      },
      {
        "id": 2,
        "name": "Ms. Nishi",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageCxUzxH_1722414913.jpeg"
      },
      {
        "id": 3,
        "name": "Tamanna",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_image1xBbso_1728625596.jpeg"
      },
      {
        "id": 4,
        "name": "Abhishek Kapoor",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageAH0pn5_1721130126.jpeg"
      },
      {
        "id": 5,
        "name": "Mr. Shivam Dixit",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageynDklj_1720949599.jpeg"
      },
      {
        "id": 6,
        "name": "Akshay Agarwal",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imagelRJYvh_1721130284.jpeg"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "Who is this bootcamp for?",
        "answer": ""
      }
    ]
  },
  "skills-required-to-become-a-counsellor": {
    "id": 4,
    "slug": "skills-required-to-become-a-counsellor",
    "name": "Skills Required to become a Counsellor",
    "banner": "https://prod-s3.counselindia.com/mainevent/23_1726142638.png",
    "address": "D-7, Fourth Floor , Sector-3, Noida, Uttar Pradesh, 201301",
    "date": "September 18th & 19th, 2024",
    "time": "8:00 PM to 9:30 PM",
    "type": "Online",
    "price": 0,
    "seats": "Online",
    "paymentLink": "https://counselindia17.mojo.page/successful-counsellor",
    "about": [
      "Welcome to Counsel India's exclusive program on \"Skills Required to become a Counsellor\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "Core Psychological Foundations & Applications",
      "Practical Assessment Tools & Interventions",
      "Effective Client Communication & Empathy",
      "Case Formulations & Therapeutic Guidelines"
    ],
    "keyBenefits": [
      "A certificate of participation with the IAOTH (International Association of Therapies)",
      "Toolkit",
      "Opportunity to be part of our Community",
      "Psychology e-Book"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Ms. Nishi",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageCxUzxH_1722414913.jpeg"
      },
      {
        "id": 2,
        "name": "Abhishek Kapoor",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageAH0pn5_1721130126.jpeg"
      },
      {
        "id": 3,
        "name": "Mr. Shivam Dixit",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageynDklj_1720949599.jpeg"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "Who is this bootcamp for?",
        "answer": ""
      }
    ]
  },
  "one-day-at-counsel-india": {
    "id": 5,
    "slug": "one-day-at-counsel-india",
    "name": "One Day at Counsel India",
    "banner": "https://prod-s3.counselindia.com/mainevent/Alumni Web Post __1725085559.png",
    "address": "D-7, Fourth Floor , Sector-3, Noida, Uttar Pradesh, 201301",
    "date": "Sep 1st, 2024",
    "time": "12:00 PM to 4:00 PM",
    "type": "Offline",
    "price": 0,
    "seats": "100",
    "paymentLink": "https://www.instagram.com/reel/C_S4YJAoj7F/?utm_source=ig_web_button_share_sheet",
    "about": [
      "Welcome to Counsel India's exclusive program on \"One Day at Counsel India\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "Core Psychological Foundations & Applications",
      "Practical Assessment Tools & Interventions",
      "Effective Client Communication & Empathy",
      "Case Formulations & Therapeutic Guidelines"
    ],
    "keyBenefits": [
      "A certificate of participation with the IAOTH (International Association of Therapies)",
      "Toolkit",
      "Opportunity to be part of our Community",
      "Psychology e-Book"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Ms. Nishi",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageCxUzxH_1722414913.jpeg"
      },
      {
        "id": 2,
        "name": "Namrata Singhal",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_image8jTom6_1711455864.jpeg"
      },
      {
        "id": 3,
        "name": "Abhishek Kapoor",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageAH0pn5_1721130126.jpeg"
      },
      {
        "id": 4,
        "name": "Mr. Shivam Dixit",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageynDklj_1720949599.jpeg"
      },
      {
        "id": 5,
        "name": "Bobby",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/3irS8Nk3ZZ.png"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "Mode of communication?",
        "answer": ""
      }
    ]
  },
  "master-emotional-well-being-and-happiness": {
    "id": 6,
    "slug": "master-emotional-well-being-and-happiness",
    "name": "Master Emotional Well-being and Happiness",
    "banner": "https://prod-s3.counselindia.com/mainevent/Web__1725356514.png",
    "address": "D-7, Fourth Floor , Sector-3, Noida, Uttar Pradesh, 201301",
    "date": "September, 8th & 9th, 2024",
    "time": "8:00 P.M. to 9:30 P.M.",
    "type": "Online",
    "price": 0,
    "seats": "100",
    "paymentLink": "https://counselindia17.mojo.page/successful-counsellor",
    "about": [
      "Welcome to Counsel India's exclusive program on \"Master Emotional Well-being and Happiness\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "BA/MA I/O Psychology Students,",
      "Practicing psychologists,",
      "NLP Trainers,",
      "HR Professionals,",
      "Managers,",
      "Executives,",
      "Leaders,",
      "Entrepreneurs,",
      "Research Scholars",
      "Psychology Masters Students of I/O",
      "Counselling Students",
      "Management Professionals",
      "Teachers/Principals"
    ],
    "keyBenefits": [
      "BA/MA I/O Psychology Students,",
      "Practicing psychologists,",
      "NLP Trainers,",
      "HR Professionals,",
      "Managers,",
      "Executives,",
      "Leaders,",
      "Entrepreneurs,",
      "Research Scholars",
      "Psychology Masters Students of I/O",
      "Counselling Students",
      "Management Professionals",
      "Teachers/Principals"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Ms. Nishi",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageCxUzxH_1722414913.jpeg"
      },
      {
        "id": 2,
        "name": "Abhishek Kapoor",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageAH0pn5_1721130126.jpeg"
      },
      {
        "id": 3,
        "name": "Mr. Shivam Dixit",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageynDklj_1720949599.jpeg"
      },
      {
        "id": 4,
        "name": "Akshay Agarwal",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imagelRJYvh_1721130284.jpeg"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "Who all can attend this Workshop?",
        "answer": ""
      },
      {
        "id": 2,
        "question": "Who is this bootcamp for?",
        "answer": ""
      }
    ]
  },
  "become-a-counsellor-guarantee-10x-growth-in-life": {
    "id": 7,
    "slug": "become-a-counsellor-guarantee-10x-growth-in-life",
    "name": "Become a counsellor & guarantee 10x growth in life",
    "banner": "https://prod-s3.counselindia.com/mainevent/f_1723901166.png",
    "address": "D-7, Fourth Floor , Sector-3, Noida, Uttar Pradesh, 201301",
    "date": "August 27th, 28th & 29th, 2024",
    "time": "8:30 P.M. to 10:00 P.M.",
    "type": "Online",
    "price": 0,
    "seats": "500",
    "paymentLink": "https://counselindia17.mojo.page/successful-counsellor",
    "about": [
      "Welcome to Counsel India's exclusive program on \"Become a counsellor & guarantee 10x growth in life\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "Core Psychological Foundations & Applications",
      "Practical Assessment Tools & Interventions",
      "Effective Client Communication & Empathy",
      "Case Formulations & Therapeutic Guidelines"
    ],
    "keyBenefits": [
      "A certificate of participation with the IAOTH (International Association of Therapies)",
      "Toolkit",
      "Opportunity to be part of our Community",
      "Psychology e-Book"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Ms. Nishi",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageCxUzxH_1722414913.jpeg"
      },
      {
        "id": 2,
        "name": "Gunjan Joshi",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageDUyPsI_1721129989.jpeg"
      },
      {
        "id": 3,
        "name": "Abhishek Kapoor",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageAH0pn5_1721130126.jpeg"
      },
      {
        "id": 4,
        "name": "Mr. Shivam Dixit",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageynDklj_1720949599.jpeg"
      },
      {
        "id": 5,
        "name": "Akshay Agarwal",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imagelRJYvh_1721130284.jpeg"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "Who is this bootcamp for?",
        "answer": ""
      },
      {
        "id": 2,
        "question": "Who are the trainers and what are their qualifications?",
        "answer": ""
      }
    ]
  },
  "competitive-exam-with-healthy-mind-booster-program": {
    "id": 8,
    "slug": "competitive-exam-with-healthy-mind-booster-program",
    "name": "Competitive Exam with Healthy Mind - Booster Program",
    "banner": "https://prod-s3.counselindia.com/mainevent/Untitled design (5) (1)_1720948623.jpg",
    "address": "D-7, Fourth Floor , Sector-3, Noida, Uttar Pradesh, 201301",
    "date": "July 14th, 2024",
    "time": "08:00 PM to 12:00 AM",
    "type": "Online",
    "price": 2499,
    "seats": "30",
    "paymentLink": "https://rzp.io/l/QobnFpWSwf",
    "about": [
      "Welcome to Counsel India's exclusive program on \"Competitive Exam with Healthy Mind - Booster Program\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "Core Psychological Foundations & Applications",
      "Practical Assessment Tools & Interventions",
      "Effective Client Communication & Empathy",
      "Case Formulations & Therapeutic Guidelines"
    ],
    "keyBenefits": [
      "A certificate of participation with the IAOTH (International Association of Therapies)",
      "Toolkit",
      "Opportunity to be part of our Community",
      "Psychology e-Book"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Mr. P Hanumanth Rao",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imagesFYLsf_1712736242.jpeg"
      },
      {
        "id": 2,
        "name": "Mr. Shivam Dixit",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageynDklj_1720949599.jpeg"
      },
      {
        "id": 3,
        "name": "Ms. Aakriti Khosla",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageQtdVEc_1718350430.jpeg"
      },
      {
        "id": 4,
        "name": "Mr. B.C. NIGAM",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_image2ktfuR_1720439239.jpeg"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "Who can buy this program?",
        "answer": ""
      },
      {
        "id": 2,
        "question": "What are the qualifications of the trainers?",
        "answer": ""
      },
      {
        "id": 3,
        "question": "Will I get any freebies or additional resources?",
        "answer": ""
      }
    ]
  },
  "workshop-on-nurturing-attachment-in-your-child-with-expressive-art": {
    "id": 9,
    "slug": "workshop-on-nurturing-attachment-in-your-child-with-expressive-art",
    "name": "Workshop on Nurturing Attachment in Your Child with Expressive Art!",
    "banner": "https://prod-s3.counselindia.com/mainevent/WhatsApp Image 2024-05-07 at 13.53.27_264a7d4c_1715070235.jpg",
    "address": "D-7, Fourth Floor , Sector-3, Noida, Uttar Pradesh, 201301",
    "date": "May 10th, 2024",
    "time": "4:00 PM to 6:00 PM",
    "type": "Online",
    "price": 0,
    "seats": "Online",
    "paymentLink": "https://forms.gle/vNdctUieKuPaKCW16",
    "about": [
      "Welcome to Counsel India's exclusive program on \"Workshop on Nurturing Attachment in Your Child with Expressive Art!\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "Core Psychological Foundations & Applications",
      "Practical Assessment Tools & Interventions",
      "Effective Client Communication & Empathy",
      "Case Formulations & Therapeutic Guidelines"
    ],
    "keyBenefits": [
      "A certificate of participation with the IAOTH (International Association of Therapies)",
      "Toolkit",
      "Opportunity to be part of our Community",
      "Psychology e-Book"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Namrata Singhal",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_image8jTom6_1711455864.jpeg"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "Who is this program designed for?",
        "answer": ""
      },
      {
        "id": 2,
        "question": "Can I join even if I don't have any counseling experience?",
        "answer": ""
      }
    ]
  },
  "how-to-upskill-your-career-in-the-field-of-psychology-and-earn-in-6-figures": {
    "id": 10,
    "slug": "how-to-upskill-your-career-in-the-field-of-psychology-and-earn-in-6-figures",
    "name": "How to Upskill your Career in the field of psychology and Earn in 6 figures",
    "banner": "https://prod-s3.counselindia.com/mainevent/M_1712736064.jpg",
    "address": "D-7, Fourth Floor , Sector-3, Noida, Uttar Pradesh, 201301",
    "date": "April 13th - 14th, 2024",
    "time": "8:00 PM to 9:30 PM",
    "type": "Online",
    "price": 0,
    "seats": "500",
    "paymentLink": "https://forms.gle/6NmPt9uQ9boY9smZ8",
    "about": [
      "Welcome to Counsel India's exclusive program on \"How to Upskill your Career in the field of psychology and Earn in 6 figures\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "Core Psychological Foundations & Applications",
      "Practical Assessment Tools & Interventions",
      "Effective Client Communication & Empathy",
      "Case Formulations & Therapeutic Guidelines"
    ],
    "keyBenefits": [
      "A certificate of participation with the IAOTH (International Association of Therapies)",
      "Toolkit",
      "Opportunity to be part of our Community",
      "Psychology e-Book"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Mr. P Hanumanth Rao",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imagesFYLsf_1712736242.jpeg"
      },
      {
        "id": 2,
        "name": "Anukriti Ujjawal Mehra",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/1kH27oFcrn.png"
      },
      {
        "id": 3,
        "name": "Priyancy Goyal",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_image9XIiIY_1712736262.jpeg"
      },
      {
        "id": 4,
        "name": "Prachi Mittal ( RCI )",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/esD6rnDZLm.png"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "Can I take this course if I'm new to psychology?",
        "answer": ""
      },
      {
        "id": 2,
        "question": "What if I miss the session?",
        "answer": ""
      },
      {
        "id": 3,
        "question": "How we will attend the session?",
        "answer": ""
      },
      {
        "id": 4,
        "question": "Is this program suitable for beginners in the field of psychology or counselling?",
        "answer": ""
      }
    ]
  },
  "emotional-intelligence-through-expressive-art": {
    "id": 11,
    "slug": "emotional-intelligence-through-expressive-art",
    "name": "Emotional Intelligence through Expressive ART",
    "banner": "https://prod-s3.counselindia.com/mainevent/WhatsApp Image 2024-03-26 at 11.10.55_be032f54 (1)_1711451283.webp",
    "address": "D-7, Fourth Floor , Sector-3, Noida, Uttar Pradesh, 201301",
    "date": "April 30th, 2024",
    "time": "4:00 PM to 6:00 PM",
    "type": "Offline",
    "price": 0,
    "seats": "100",
    "paymentLink": "https://forms.gle/jSoFAtrrG2z15TN99",
    "about": [
      "Welcome to Counsel India's exclusive program on \"Emotional Intelligence through Expressive ART\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "Core Psychological Foundations & Applications",
      "Practical Assessment Tools & Interventions",
      "Effective Client Communication & Empathy",
      "Case Formulations & Therapeutic Guidelines"
    ],
    "keyBenefits": [
      "A certificate of participation with the IAOTH (International Association of Therapies)",
      "Toolkit",
      "Opportunity to be part of our Community",
      "Psychology e-Book"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Namrata Singhal",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_image8jTom6_1711455864.jpeg"
      },
      {
        "id": 2,
        "name": "Prachi Mittal ( RCI )",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/esD6rnDZLm.png"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "What is a Practical and activity based session?",
        "answer": ""
      }
    ]
  },
  "how-to-become-a-successful-counsellor-10x-your-income": {
    "id": 12,
    "slug": "how-to-become-a-successful-counsellor-10x-your-income",
    "name": "How To Become A Successful Counsellor & 10X Your Income",
    "banner": "https://prod-s3.counselindia.com/mainevent/Extended-bootcamp-2_1710316861.jpg",
    "address": "D-7, Fourth Floor , Sector-3, Noida, Uttar Pradesh, 201301",
    "date": "March 16th & 17th, 2024",
    "time": "8:00 P.M. to 9:30 P.M.",
    "type": "Offline",
    "price": 49,
    "seats": "100",
    "paymentLink": "https://pages.razorpay.com/CI-2-day-bootcamp",
    "about": [
      "Welcome to Counsel India's exclusive program on \"How To Become A Successful Counsellor & 10X Your Income\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "Core Psychological Foundations & Applications",
      "Practical Assessment Tools & Interventions",
      "Effective Client Communication & Empathy",
      "Case Formulations & Therapeutic Guidelines"
    ],
    "keyBenefits": [
      "A certificate of participation with the IAOTH (International Association of Therapies)",
      "Toolkit",
      "Opportunity to be part of our Community",
      "Psychology e-Book"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Mr. P Hanumanth Rao",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imagesFYLsf_1712736242.jpeg"
      },
      {
        "id": 2,
        "name": "Anukriti Ujjawal Mehra",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/1kH27oFcrn.png"
      },
      {
        "id": 3,
        "name": "Priyancy Goyal",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_image9XIiIY_1712736262.jpeg"
      },
      {
        "id": 4,
        "name": "Prachi Mittal ( RCI )",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/esD6rnDZLm.png"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "Who is this bootcamp for?",
        "answer": ""
      },
      {
        "id": 2,
        "question": "What can I expect to gain from attending?",
        "answer": ""
      },
      {
        "id": 3,
        "question": "Can I ask questions during the sessions?",
        "answer": ""
      },
      {
        "id": 4,
        "question": "When is the Bootcamp scheduled?",
        "answer": ""
      },
      {
        "id": 5,
        "question": "Will I receive a certification upon completion?",
        "answer": ""
      }
    ]
  },
  "roadmap-to-become-a-successful-counsellor-5x-your-earning": {
    "id": 13,
    "slug": "roadmap-to-become-a-successful-counsellor-5x-your-earning",
    "name": "Roadmap to become a successful counsellor, 5x\u00a0your\u00a0earning",
    "banner": "https://prod-s3.counselindia.com/mainevent/roadmap-to-become-a-successful-counselor-5x-your-earning_1698924987.png",
    "address": "Noida",
    "date": "7 November and 8 November",
    "time": "8:00pm to 9:30pm",
    "type": "Online",
    "price": 49,
    "seats": "50",
    "paymentLink": "https://pages.razorpay.com/pl_P298tHk2K8fX5Q/view",
    "about": [
      "Welcome to Counsel India's exclusive program on \"Roadmap to become a successful counsellor, 5x\u00a0your\u00a0earning\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "Core Psychological Foundations & Applications",
      "Practical Assessment Tools & Interventions",
      "Effective Client Communication & Empathy",
      "Case Formulations & Therapeutic Guidelines"
    ],
    "keyBenefits": [
      "A certificate of participation with the IAOTH (International Association of Therapies)",
      "Toolkit",
      "Opportunity to be part of our Community",
      "Psychology e-Book"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Anukriti Ujjawal Mehra",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/1kH27oFcrn.png"
      },
      {
        "id": 2,
        "name": "Prachi Mittal ( RCI )",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/esD6rnDZLm.png"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "What is a Practical and activity based session?",
        "answer": ""
      },
      {
        "id": 2,
        "question": "Who is this program designed for?",
        "answer": ""
      },
      {
        "id": 3,
        "question": "Will I get Certificate?",
        "answer": ""
      },
      {
        "id": 4,
        "question": "How do I enroll in the Advance Certification in Industrial - Organizational Psychology program",
        "answer": ""
      },
      {
        "id": 5,
        "question": "Is there a practical component to the program?",
        "answer": ""
      },
      {
        "id": 6,
        "question": "What are the career prospects after completing this program?",
        "answer": ""
      }
    ]
  },
  "emotional-wellbeing-and-happiness": {
    "id": 14,
    "slug": "emotional-wellbeing-and-happiness",
    "name": "Emotional Wellbeing and Happiness",
    "banner": "https://prod-s3.counselindia.com/mainevent/1227688637_1697021071.jpg",
    "address": "Online",
    "date": "21th and 22th October",
    "time": "7pm to 9:30pm",
    "type": "Online",
    "price": 49,
    "seats": "50",
    "paymentLink": "https://counselindia17.mojo.page/emotional-wellbeing-and-happiness",
    "about": [
      "Welcome to Counsel India's exclusive program on \"Emotional Wellbeing and Happiness\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "BA/MA I/O Psychology Students,",
      "Practicing psychologists,",
      "NLP Trainers,",
      "HR Professionals,",
      "Managers,",
      "Executives,",
      "Leaders,",
      "Entrepreneurs,",
      "Research Scholars",
      "Psychology Masters Students of I/O",
      "Counselling Students",
      "Management Professionals",
      "Teachers/Principals"
    ],
    "keyBenefits": [
      "BA/MA I/O Psychology Students,",
      "Practicing psychologists,",
      "NLP Trainers,",
      "HR Professionals,",
      "Managers,",
      "Executives,",
      "Leaders,",
      "Entrepreneurs,",
      "Research Scholars",
      "Psychology Masters Students of I/O",
      "Counselling Students",
      "Management Professionals",
      "Teachers/Principals"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Anukriti Ujjawal Mehra",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/1kH27oFcrn.png"
      },
      {
        "id": 2,
        "name": "Bobby",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/3irS8Nk3ZZ.png"
      },
      {
        "id": 3,
        "name": "Prachi Mittal ( RCI )",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/esD6rnDZLm.png"
      },
      {
        "id": 4,
        "name": "Aishwarya Sharma",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/8u0AjeSOKZ.png"
      },
      {
        "id": 5,
        "name": "Sujatha Koshy",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/fU3QlDSJiP.png"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "What is a Practical and activity based session?",
        "answer": ""
      },
      {
        "id": 2,
        "question": "Who all can attend this Workshop?",
        "answer": ""
      },
      {
        "id": 3,
        "question": "What is Marketing and branding support?",
        "answer": ""
      },
      {
        "id": 4,
        "question": "How we will attend the session?",
        "answer": ""
      },
      {
        "id": 5,
        "question": "What if I miss the session?",
        "answer": ""
      }
    ]
  },
  "mega-offline-event-roadmap-to-become-a-successful-counselor-5x-your-earning": {
    "id": 15,
    "slug": "mega-offline-event-roadmap-to-become-a-successful-counselor-5x-your-earning",
    "name": "MEGA OFFLINE EVENT - Roadmap to Become a Successful Counselor, 5x\u00a0your\u00a0Earning",
    "banner": "https://prod-s3.counselindia.com/mainevent/1569429386_1695818225.jpg",
    "address": "Noida",
    "date": "7 October",
    "time": "11 AM - 2 PM",
    "type": "Online",
    "price": 49,
    "seats": "50",
    "paymentLink": "https://pages.razorpay.com/pl_P298tHk2K8fX5Q/view",
    "about": [
      "Welcome to Counsel India's exclusive program on \"MEGA OFFLINE EVENT - Roadmap to Become a Successful Counselor, 5x\u00a0your\u00a0Earning\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "BA/MA I/O Psychology Students,",
      "Practicing psychologists,",
      "Counsellors,",
      "NLP Trainers,",
      "Managers,",
      "Leaders,",
      "Entrepreneurs,",
      "Research Scholars",
      "Psychology Masters Students of I/O",
      "Counselling Students",
      "Management Professionals",
      "Teachers/Principals"
    ],
    "keyBenefits": [
      "BA/MA I/O Psychology Students,",
      "Practicing psychologists,",
      "Counsellors,",
      "NLP Trainers,",
      "Managers,",
      "Leaders,",
      "Entrepreneurs,",
      "Research Scholars",
      "Psychology Masters Students of I/O",
      "Counselling Students",
      "Management Professionals",
      "Teachers/Principals"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Anukriti Ujjawal Mehra",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/1kH27oFcrn.png"
      },
      {
        "id": 2,
        "name": "Prachi Mittal ( RCI )",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/esD6rnDZLm.png"
      },
      {
        "id": 3,
        "name": "Aishwarya Sharma",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/8u0AjeSOKZ.png"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "What is a Practical and activity based session?",
        "answer": ""
      },
      {
        "id": 2,
        "question": "Who all can attend this Event?",
        "answer": ""
      },
      {
        "id": 3,
        "question": "Who is this program designed for?",
        "answer": ""
      },
      {
        "id": 4,
        "question": "Will I get Certificate?",
        "answer": ""
      }
    ]
  },
  "start-your-career-in-psychology-5x-your-growth": {
    "id": 16,
    "slug": "start-your-career-in-psychology-5x-your-growth",
    "name": "Start Your Career in Psychology & 5x Your Growth",
    "banner": "https://prod-s3.counselindia.com/mainevent/start-your-career-in-psychology-5x-your-growth_1694686111.jpg",
    "address": "Noida",
    "date": "19th September, 2023",
    "time": "8 PM to 9 PM",
    "type": "Online",
    "price": 49,
    "seats": "50",
    "paymentLink": "https://pages.razorpay.com/pl_P298tHk2K8fX5Q/view",
    "about": [
      "Welcome to Counsel India's exclusive program on \"Start Your Career in Psychology & 5x Your Growth\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "BA/MA I/O Psychology Students,",
      "Practicing psychologists,",
      "Counsellors,",
      "NLP Trainers,",
      "Managers,",
      "Leaders,",
      "Entrepreneurs,",
      "Research Scholars",
      "Psychology Masters Students of I/O",
      "Counselling Students",
      "Management Professionals",
      "Teachers/Principals"
    ],
    "keyBenefits": [
      "BA/MA I/O Psychology Students,",
      "Practicing psychologists,",
      "Counsellors,",
      "NLP Trainers,",
      "Managers,",
      "Leaders,",
      "Entrepreneurs,",
      "Research Scholars",
      "Psychology Masters Students of I/O",
      "Counselling Students",
      "Management Professionals",
      "Teachers/Principals"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Anukriti Ujjawal Mehra",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/1kH27oFcrn.png"
      },
      {
        "id": 2,
        "name": "Prachi Mittal ( RCI )",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/esD6rnDZLm.png"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "What is a Practical and activity based session?",
        "answer": ""
      },
      {
        "id": 2,
        "question": "Who all can attend this Event?",
        "answer": ""
      },
      {
        "id": 3,
        "question": "Who all can attend this Workshop?",
        "answer": ""
      },
      {
        "id": 4,
        "question": "Who is this program designed for?",
        "answer": ""
      },
      {
        "id": 5,
        "question": "Will I get Certificate?",
        "answer": ""
      }
    ]
  },
  "how-to-grow-as-a-counsellor-and-earn-7lpa": {
    "id": 17,
    "slug": "how-to-grow-as-a-counsellor-and-earn-7lpa",
    "name": "How to grow as a Counsellor and earn 7LPA",
    "banner": "https://prod-s3.counselindia.com/mainevent/138449596_1694148534.webp",
    "address": "Counsel India",
    "date": "12th September, 2023",
    "time": "8 PM to 9 PM",
    "type": "Online",
    "price": 49,
    "seats": "200",
    "paymentLink": "https://imjo.in/eeQeyC",
    "about": [
      "Welcome to Counsel India's exclusive program on \"How to grow as a Counsellor and earn 7LPA\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "BA/MA I/O Psychology Students,",
      "Practicing psychologists,",
      "NLP Trainers,",
      "HR Professionals,",
      "Managers,",
      "Executives,",
      "Leaders,",
      "Entrepreneurs,",
      "Research Scholars",
      "Psychology Masters Students of I/O",
      "Counselling Students",
      "Management Professionals",
      "Teachers/Principals"
    ],
    "keyBenefits": [
      "BA/MA I/O Psychology Students,",
      "Practicing psychologists,",
      "NLP Trainers,",
      "HR Professionals,",
      "Managers,",
      "Executives,",
      "Leaders,",
      "Entrepreneurs,",
      "Research Scholars",
      "Psychology Masters Students of I/O",
      "Counselling Students",
      "Management Professionals",
      "Teachers/Principals"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Anukriti Ujjawal Mehra",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/1kH27oFcrn.png"
      },
      {
        "id": 2,
        "name": "Prachi Mittal ( RCI )",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/esD6rnDZLm.png"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "Who all can attend this Workshop?",
        "answer": ""
      },
      {
        "id": 2,
        "question": "Will I get Certificate?",
        "answer": ""
      },
      {
        "id": 3,
        "question": "How we will attend the session?",
        "answer": ""
      }
    ]
  },
  "counsellor-se-charcha-episode-2": {
    "id": 18,
    "slug": "counsellor-se-charcha-episode-2",
    "name": "Counsellor Se Charcha - Episode 2",
    "banner": "https://prod-s3.counselindia.com/mainevent/counselor-se-charcha-episode-2_1678526436.jpeg",
    "address": "C-106, Sector 2, Noida (UP)",
    "date": "26th March 23",
    "time": "12:00 pm - 01:30 pm",
    "type": "Online",
    "price": 49,
    "seats": "50",
    "paymentLink": "https://pages.razorpay.com/pl_P298tHk2K8fX5Q/view",
    "about": [
      "Welcome to Counsel India's exclusive program on \"Counsellor Se Charcha - Episode 2\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "BA/MA I/O Psychology Students,",
      "Practicing psychologists,",
      "Counsellors,",
      "NLP Trainers,",
      "Managers,",
      "Leaders,",
      "Entrepreneurs,",
      "Research Scholars",
      "Psychology Masters Students of I/O",
      "Counselling Students",
      "Management Professionals",
      "Teachers/Principals"
    ],
    "keyBenefits": [
      "BA/MA I/O Psychology Students,",
      "Practicing psychologists,",
      "Counsellors,",
      "NLP Trainers,",
      "Managers,",
      "Leaders,",
      "Entrepreneurs,",
      "Research Scholars",
      "Psychology Masters Students of I/O",
      "Counselling Students",
      "Management Professionals",
      "Teachers/Principals"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Bobby",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/3irS8Nk3ZZ.png"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "Who all can attend this Event?",
        "answer": ""
      },
      {
        "id": 2,
        "question": "Will I get Certificate?",
        "answer": ""
      },
      {
        "id": 3,
        "question": "How we will attend the session?",
        "answer": ""
      },
      {
        "id": 4,
        "question": "Will I get chance to meet and talk with other participants ?",
        "answer": ""
      },
      {
        "id": 5,
        "question": "What if I miss the session?",
        "answer": ""
      },
      {
        "id": 6,
        "question": "Will there be any break in between the event?",
        "answer": ""
      }
    ]
  },
  "step-by-step-process-to-become-counsellor-and-earn-at-least-7-lpa": {
    "id": 19,
    "slug": "step-by-step-process-to-become-counsellor-and-earn-at-least-7-lpa",
    "name": "Step by Step process to become Counsellor and earn at least 7 LPA",
    "banner": "https://prod-s3.counselindia.com/mainevent/master-workshop-on-step-by-step-process-to-become-counsellor-and-earn-at-least-7-lpa_1675848771.jpeg",
    "address": "Delhi",
    "date": "23th - 24th Feb 2023, Thur - Friday",
    "time": "7:30 pm to 9:00 pm",
    "type": "Online",
    "price": 49,
    "seats": "50",
    "paymentLink": "https://pages.razorpay.com/pl_P298tHk2K8fX5Q/view",
    "about": [
      "Welcome to Counsel India's exclusive program on \"Step by Step process to become Counsellor and earn at least 7 LPA\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "BA/MA I/O Psychology Students,",
      "Practicing psychologists,",
      "NLP Trainers,",
      "HR Professionals,",
      "Managers,",
      "Executives,",
      "Leaders,",
      "Entrepreneurs,",
      "Research Scholars",
      "Psychology Masters Students of I/O",
      "Counselling Students",
      "Management Professionals",
      "Teachers/Principals"
    ],
    "keyBenefits": [
      "BA/MA I/O Psychology Students,",
      "Practicing psychologists,",
      "NLP Trainers,",
      "HR Professionals,",
      "Managers,",
      "Executives,",
      "Leaders,",
      "Entrepreneurs,",
      "Research Scholars",
      "Psychology Masters Students of I/O",
      "Counselling Students",
      "Management Professionals",
      "Teachers/Principals"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Swati",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/kkvMb3sIeN.png"
      },
      {
        "id": 2,
        "name": "Anukriti Ujjawal Mehra",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/1kH27oFcrn.png"
      },
      {
        "id": 3,
        "name": "Himanshi",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/VPUsL5lO8Q.png"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "Who all can attend this Workshop?",
        "answer": ""
      },
      {
        "id": 2,
        "question": "Will I get Certificate?",
        "answer": ""
      },
      {
        "id": 3,
        "question": "How we will attend the session?",
        "answer": ""
      },
      {
        "id": 4,
        "question": "What if I miss the session?",
        "answer": ""
      },
      {
        "id": 5,
        "question": "Mode of communication?",
        "answer": ""
      }
    ]
  },
  "counsellor-se-charcha": {
    "id": 20,
    "slug": "counsellor-se-charcha",
    "name": "Counsellor Se Charcha",
    "banner": "https://prod-s3.counselindia.com/mainevent/counselor-se-charcha_1675833891.jpg",
    "address": "C-106, Sector 2, Noida (UP)",
    "date": "19th Feb 2023",
    "time": "11:00 am - 1:30 pm",
    "type": "Online",
    "price": 49,
    "seats": "50",
    "paymentLink": "https://pages.razorpay.com/pl_P298tHk2K8fX5Q/view",
    "about": [
      "Welcome to Counsel India's exclusive program on \"Counsellor Se Charcha\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "BA/MA I/O Psychology Students,",
      "Practicing psychologists,",
      "Counsellors,",
      "NLP Trainers,",
      "Managers,",
      "Leaders,",
      "Entrepreneurs,",
      "Research Scholars",
      "Psychology Masters Students of I/O",
      "Counselling Students",
      "Management Professionals",
      "Teachers/Principals"
    ],
    "keyBenefits": [
      "BA/MA I/O Psychology Students,",
      "Practicing psychologists,",
      "Counsellors,",
      "NLP Trainers,",
      "Managers,",
      "Leaders,",
      "Entrepreneurs,",
      "Research Scholars",
      "Psychology Masters Students of I/O",
      "Counselling Students",
      "Management Professionals",
      "Teachers/Principals"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Dr. Dipender Chauhan",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/E9aqVVr2Cv.png"
      },
      {
        "id": 2,
        "name": "Bobby",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/3irS8Nk3ZZ.png"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "Who all can attend this Event?",
        "answer": ""
      },
      {
        "id": 2,
        "question": "Will I get Certificate?",
        "answer": ""
      },
      {
        "id": 3,
        "question": "How we will attend the session?",
        "answer": ""
      },
      {
        "id": 4,
        "question": "What if I miss the session?",
        "answer": ""
      },
      {
        "id": 5,
        "question": "Will I get chance to meet and talk with other participants ?",
        "answer": ""
      },
      {
        "id": 6,
        "question": "Will there be any break in between the event?",
        "answer": ""
      }
    ]
  },
  "become-a-counsellor-and-guarantee-10x-growth-in-life": {
    "id": 21,
    "slug": "become-a-counsellor-and-guarantee-10x-growth-in-life",
    "name": "Become a Counsellor and Guarantee 10X Growth in Life",
    "banner": "https://prod-s3.counselindia.com/mainevent/Bootcamp- 11 to 13 web_11zon_1722420095.jpg",
    "address": "D-7, Fourth Floor , Sector-3, Noida, Uttar Pradesh, 201301",
    "date": "August 11th - 13th, 2024",
    "time": "8:30 P.M. to 10:00 P.M.",
    "type": "Online",
    "price": 0,
    "seats": "500",
    "paymentLink": "https://counselindia17.mojo.page/successful-counsellor",
    "about": [
      "Welcome to Counsel India's exclusive program on \"Become a Counsellor and Guarantee 10X Growth in Life\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "Core Psychological Foundations & Applications",
      "Practical Assessment Tools & Interventions",
      "Effective Client Communication & Empathy",
      "Case Formulations & Therapeutic Guidelines"
    ],
    "keyBenefits": [
      "A certificate of participation with the IAOTH (International Association of Therapies)",
      "Toolkit",
      "Opportunity to be part of our Community",
      "Psychology e-Book"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Ms. Nishi",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageCxUzxH_1722414913.jpeg"
      },
      {
        "id": 2,
        "name": "Gunjan Joshi",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageDUyPsI_1721129989.jpeg"
      },
      {
        "id": 3,
        "name": "Abhishek Kapoor",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageAH0pn5_1721130126.jpeg"
      },
      {
        "id": 4,
        "name": "Anukriti Ujjawal Mehra",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/1kH27oFcrn.png"
      },
      {
        "id": 5,
        "name": "Mr. Shivam Dixit",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageynDklj_1720949599.jpeg"
      },
      {
        "id": 6,
        "name": "Akshay Agarwal",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imagelRJYvh_1721130284.jpeg"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "Can I join even if I don't have any counseling experience?",
        "answer": ""
      }
    ]
  },
  "how-to-grow-as-a-counsellor-and-earn-50k-month": {
    "id": 22,
    "slug": "how-to-grow-as-a-counsellor-and-earn-50k-month",
    "name": "How to grow as a Counsellor and earn 50K/month",
    "banner": "https://prod-s3.counselindia.com/mainevent/how-to-grow-as-a-counsellor-and-earn-50k-month_1692860675.jpg",
    "address": "Counsel India",
    "date": "31st August, 2023",
    "time": "8 PM to 9:30 PM",
    "type": "Online",
    "price": 49,
    "seats": "50",
    "paymentLink": "https://pages.razorpay.com/pl_P298tHk2K8fX5Q/view",
    "about": [
      "Welcome to Counsel India's exclusive program on \"How to grow as a Counsellor and earn 50K/month\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "BA/MA I/O Psychology Students,",
      "Practicing psychologists,",
      "NLP Trainers,",
      "HR Professionals,",
      "Managers,",
      "Executives,",
      "Leaders,",
      "Entrepreneurs,",
      "Research Scholars",
      "Psychology Masters Students of I/O",
      "Counselling Students",
      "Management Professionals",
      "Teachers/Principals"
    ],
    "keyBenefits": [
      "BA/MA I/O Psychology Students,",
      "Practicing psychologists,",
      "NLP Trainers,",
      "HR Professionals,",
      "Managers,",
      "Executives,",
      "Leaders,",
      "Entrepreneurs,",
      "Research Scholars",
      "Psychology Masters Students of I/O",
      "Counselling Students",
      "Management Professionals",
      "Teachers/Principals"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Anukriti Ujjawal Mehra",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/1kH27oFcrn.png"
      },
      {
        "id": 2,
        "name": "Prachi Mittal ( RCI )",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/esD6rnDZLm.png"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "Who all can attend this Workshop?",
        "answer": ""
      },
      {
        "id": 2,
        "question": "Will I get Certificate?",
        "answer": ""
      },
      {
        "id": 3,
        "question": "How we will attend the session?",
        "answer": ""
      }
    ]
  },
  "manage-your-day-to-day-life": {
    "id": 23,
    "slug": "manage-your-day-to-day-life",
    "name": "Manage your day to day life",
    "banner": "https://prod-s3.counselindia.com/mainevent/731034214_1692171474.jpg",
    "address": "Noida",
    "date": "23rd August, 2023",
    "time": "8 PM to 9:00 PM",
    "type": "Online",
    "price": 49,
    "seats": "50",
    "paymentLink": "https://pages.razorpay.com/pl_P298tHk2K8fX5Q/view",
    "about": [
      "Welcome to Counsel India's exclusive program on \"Manage your day to day life\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "BA/MA I/O Psychology Students,",
      "Practicing psychologists,",
      "NLP Trainers,",
      "HR Professionals,",
      "Managers,",
      "Executives,",
      "Leaders,",
      "Entrepreneurs,",
      "Research Scholars",
      "Psychology Masters Students of I/O",
      "Counselling Students",
      "Management Professionals",
      "Teachers/Principals"
    ],
    "keyBenefits": [
      "BA/MA I/O Psychology Students,",
      "Practicing psychologists,",
      "NLP Trainers,",
      "HR Professionals,",
      "Managers,",
      "Executives,",
      "Leaders,",
      "Entrepreneurs,",
      "Research Scholars",
      "Psychology Masters Students of I/O",
      "Counselling Students",
      "Management Professionals",
      "Teachers/Principals"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Anukriti Ujjawal Mehra",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/1kH27oFcrn.png"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "Who all can attend this Workshop?",
        "answer": ""
      },
      {
        "id": 2,
        "question": "Will I get Certificate?",
        "answer": ""
      },
      {
        "id": 3,
        "question": "What if I miss the session?",
        "answer": ""
      },
      {
        "id": 4,
        "question": "How we will attend the session?",
        "answer": ""
      }
    ]
  },
  "successful-counsellor": {
    "id": 24,
    "slug": "successful-counsellor",
    "name": "How to become a successful counsellor and 10x your income",
    "banner": "https://prod-s3.counselindia.com/mainevent/Bootcamp-26 to 28 web Final (1)_1721129615.jpg",
    "address": "D-7, Fourth Floor , Sector-3, Noida, Uttar Pradesh, 201301",
    "date": "July 26th - 28th, 2024",
    "time": "8:00 PM to 9:30 PM",
    "type": "Online",
    "price": 0,
    "seats": "100",
    "paymentLink": "https://counselindia17.mojo.page/successful-counsellor",
    "about": [
      "Welcome to Counsel India's exclusive program on \"How to become a successful counsellor and 10x your income\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "Core Psychological Foundations & Applications",
      "Practical Assessment Tools & Interventions",
      "Effective Client Communication & Empathy",
      "Case Formulations & Therapeutic Guidelines"
    ],
    "keyBenefits": [
      "A certificate of participation with the IAOTH (International Association of Therapies)",
      "Toolkit",
      "Opportunity to be part of our Community",
      "Psychology e-Book"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Gunjan Joshi",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageDUyPsI_1721129989.jpeg"
      },
      {
        "id": 2,
        "name": "Mr. P Hanumanth Rao",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imagesFYLsf_1712736242.jpeg"
      },
      {
        "id": 3,
        "name": "Abhishek Kapoor",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageAH0pn5_1721130126.jpeg"
      },
      {
        "id": 4,
        "name": "Mr. Shivam Dixit",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageynDklj_1720949599.jpeg"
      },
      {
        "id": 5,
        "name": "Ms. Aakriti Khosla",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageQtdVEc_1718350430.jpeg"
      },
      {
        "id": 6,
        "name": "Akshay Agarwal",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imagelRJYvh_1721130284.jpeg"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "Can I join even if I don't have any counseling experience?",
        "answer": ""
      }
    ]
  },
  "crack-competitive-exams-with-a-healthy-mind-exclusive-bootcamp": {
    "id": 25,
    "slug": "crack-competitive-exams-with-a-healthy-mind-exclusive-bootcamp",
    "name": "Crack Competitive Exams with a Healthy Mind : Exclusive Bootcamp!",
    "banner": "https://prod-s3.counselindia.com/mainevent/14 july (web) _1720436316.jpg",
    "address": "D-7, Fourth Floor , Sector-3, Noida, Uttar Pradesh, 201301",
    "date": "June 14th, 2024",
    "time": "8:00 PM to 9:30 PM",
    "type": "Online",
    "price": 0,
    "seats": "500",
    "paymentLink": "https://bit.ly/4cIpI56",
    "about": [
      "Welcome to Counsel India's exclusive program on \"Crack Competitive Exams with a Healthy Mind : Exclusive Bootcamp!\". In this intensive session, explore practical psychological frameworks, clinical tools, and expert guidance.",
      "Engage with real-life case studies, interactive exercises, and peer discussions led by experienced clinical psychologists and counselors."
    ],
    "perks": [
      "Live interactive Q&A and practical case studies",
      "Verified Certificate of Participation",
      "Exclusive psychological toolkits and templates",
      "Networking opportunity with counselors and alumni"
    ],
    "areasFocused": [
      "Core Psychological Foundations & Applications",
      "Practical Assessment Tools & Interventions",
      "Effective Client Communication & Empathy",
      "Case Formulations & Therapeutic Guidelines"
    ],
    "keyBenefits": [
      "A certificate of participation with the IAOTH (International Association of Therapies)",
      "Toolkit",
      "Opportunity to be part of our Community",
      "Psychology e-Book"
    ],
    "speakers": [
      {
        "id": 1,
        "name": "Ms. Aakriti Khosla",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_imageQtdVEc_1718350430.jpeg"
      },
      {
        "id": 2,
        "name": "Mr. B.C. NIGAM",
        "designation": "Psychologist & Mentor",
        "image": "https://prod-s3.counselindia.com/speaker/uploaded_image2ktfuR_1720439239.jpeg"
      }
    ],
    "faqs": [
      {
        "id": 1,
        "question": "What is a Practical and activity based session?",
        "answer": ""
      }
    ]
  }
};

export function getEventDetail(slug: string): EventDetail | null {
  const normalizedSlug = decodeURIComponent(slug).replace(/[!]/g, "").replace(/\s+/g, "-").trim().toLowerCase();
  if (EVENT_DETAILS_DATA[normalizedSlug]) return EVENT_DETAILS_DATA[normalizedSlug];
  const matchKey = Object.keys(EVENT_DETAILS_DATA).find(k => k.toLowerCase() === normalizedSlug || decodeURIComponent(k).toLowerCase() === normalizedSlug);
  if (matchKey) return EVENT_DETAILS_DATA[matchKey];
  return null;
}
