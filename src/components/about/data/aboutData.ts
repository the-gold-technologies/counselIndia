export interface LeaderMember {
  id: number;
  name: string;
  designation: string;
  image: string;
  linkedin: string;
}

export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
  type: "core" | "legal" | "executive";
}

export interface AccreditationItem {
  id: number;
  title: string;
  number: string;
}

export interface WorkCultureTestimonial {
  id: number;
  title: string;
  description: string;
  name: string;
  department: string;
  image: string;
}

export interface WhyPillar {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const WHY_PILLARS: WhyPillar[] = [
  {
    id: 1,
    title: "Live Interactive Classes:",
    description:
      "Embrace the flexibility of online learning, enabling you to maintain a healthy work-life balance. Engage with psychologists and trainers in interactive learning sessions designed to maximize collaboration and learning outcomes.",
    icon: "fal fa-users-class",
  },
  {
    id: 2,
    title: "Mentorship Support:",
    description:
      "Get 1 on 1 mentorship sessions with your assigned mentor to receive guidance tailored to your career path.",
    icon: "fal fa-tv-alt",
  },
  {
    id: 3,
    title: "Scholarship Opportunities:",
    description:
      "Discover eligibility-based scholarship programs tailored for your personal and professional development.",
    icon: "fal fa-user-headset",
  },
  {
    id: 4,
    title: "Networking Opportunities:",
    description:
      "Learn with like minded individuals and get access to a network of 10,000+ Psychologists and Counsellors.",
    icon: "fal fa-shield-check",
  },
  {
    id: 5,
    title: "Skill Development:",
    description:
      "Prepare for real-world challenges with skill driven programs supported by real-life case studies to equip yourself with today’s fast moving world.",
    icon: "fal fa-users-class",
  },
  {
    id: 6,
    title: "Expert Faculty:",
    description:
      "Learn from industry experts and psychologists with MPhil, PhD, and/or 10+ years of experience.",
    icon: "fal fa-tv-alt",
  },
  {
    id: 7,
    title: "Career Continuity:",
    description:
      "Acquire skills without a career break—earn credit points for your existing job with your online live interactive classes.",
    icon: "fal fa-user-headset",
  },
];

export const LEADERS: LeaderMember[] = [
  {
    id: 1,
    name: "Bobby Thakur",
    designation: "CEO",
    image: "https://prod-s3.counselindia.com/images/team/ceo.jpg",
    linkedin: "https://www.linkedin.com/in/bobby-thakur-ceo-counsel-india/",
  },
  {
    id: 2,
    name: "Shivam Dixit",
    designation: "CMO-COO",
    image: "https://prod-s3.counselindia.com/images/team/cmo.jpg",
    linkedin:
      "https://www.linkedin.com/in/shivam-dixit-cmo-cfo-counsel-india/",
  },
  {
    id: 3,
    name: "Devender K Saini",
    designation: "Strategic Advisor",
    image: "https://prod-s3.counselindia.com/images/team/devender.jpg",
    linkedin: "https://www.linkedin.com/in/devenderks/",
  },
  {
    id: 4,
    name: "Dr. Chavi B. Sharma",
    designation: "Academic Advisor",
    image: "https://prod-s3.counselindia.com/images/team/chavi.jpg",
    linkedin:
      "https://www.linkedin.com/in/chavi-bhargava-sharma-0a1ab910/",
  },
];

export const CORE_TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Ayush Srivastav",
    designation: "Business - Sr. BDE",
    image: "https://prod-s3.counselindia.com/images/speaker/ayush-srivastav-bde.jpg",
    type: "core",
  },
  {
    id: 2,
    name: "Kartik Singh Bhati",
    designation: "Business - Sr. BDE",
    image: "https://prod-s3.counselindia.com/images/speaker/kartik-singh-bhati.jpg",
    type: "core",
  },
  {
    id: 3,
    name: "Manish Kumar",
    designation: "Business - Associate Manager",
    image: "https://prod-s3.counselindia.com/images/speaker/manish-kumar.jpg",
    type: "core",
  },
  {
    id: 4,
    name: "Puneet Aggarwal",
    designation: "Business - Associate Manager",
    image: "https://prod-s3.counselindia.com/images/speaker/puneet.jpg",
    type: "core",
  },
  {
    id: 5,
    name: "Vaibhav Singh",
    designation: "Business - Associate Manager",
    image: "https://prod-s3.counselindia.com/images/speaker/vaibhav-singh.jpg",
    type: "core",
  },
  {
    id: 6,
    name: "Ankita Singh",
    designation: "Business - Sr. BDA",
    image: "https://prod-s3.counselindia.com/images/speaker/ankita.jpg",
    type: "core",
  },
];

export const LEGAL_TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Ayush Srivastav",
    designation: "Legal Advisory Lead",
    image: "https://prod-s3.counselindia.com/images/speaker/ayush-srivastav-bde.jpg",
    type: "legal",
  },
  {
    id: 2,
    name: "Kartik Singh Bhati",
    designation: "Compliance & Legal Affairs",
    image: "https://prod-s3.counselindia.com/images/speaker/kartik-singh-bhati.jpg",
    type: "legal",
  },
];

export const ACCREDITATIONS: AccreditationItem[] = [
  {
    id: 1,
    title: "GST NO.",
    number: "09AAICC6447N1Z0",
  },
  {
    id: 2,
    title: "ISO NO.",
    number: "20ZQCG6400Q",
  },
  {
    id: 3,
    title: "Trade Mark No.",
    number: "4545265",
  },
  {
    id: 4,
    title: "MSME Reg. No.",
    number: "DL08D0028179",
  },
  {
    id: 5,
    title: "Incorporation No.",
    number: "09AAICC6447N1Z0",
  },
  {
    id: 6,
    title: "Startup India Certificate NO.",
    number: "DIPP88608",
  },
];

export const WORK_CULTURE_TESTIMONIALS: WorkCultureTestimonial[] = [
  {
    id: 1,
    title: "Very Natural",
    description:
      "The work culture of Counsel India is very natural, the environment here is like working all together as a family where growth is the primary objective.",
    name: "Ayush",
    department: "Business Development Department",
    image: "https://prod-s3.counselindia.com/images/speaker/ayush-srivastav-bde.jpg",
  },
  {
    id: 2,
    title: "Highly Driven",
    description:
      "The work culture is amazing at counsel India. You will get highly driven and committed colleagues. Great place to work.",
    name: "Piyali",
    department: "Business Development Department",
    image: "https://prod-s3.counselindia.com/images/speaker/piyali-paul.jpg",
  },
  {
    id: 3,
    title: "Motivated",
    description:
      "Counsel India is like another home to me. I started my journey as an intern and am now a full-time employee. The work culture and environment are amazing which always motivated me in every part of my life.",
    name: "Himani",
    department: "Operations Department",
    image: "https://prod-s3.counselindia.com/images/speaker/himani-khatter.jpg",
  },
  {
    id: 4,
    title: "Growth",
    description:
      "I started my journey in counsel India as an Academic counsellor. And I can proudly say that it is the best platform for growth and practical exposure as within 6 months, it given great positional and financial growth.",
    name: "Aparna",
    department: "Business Development Department",
    image: "https://prod-s3.counselindia.com/images/speaker/Aparna-jha-bde.jpg",
  },
  {
    id: 5,
    title: "Great Opportunities",
    description:
      "Counsel India is a great place with great opportunities, I found a peaceful environment and life-transforming learning.",
    name: "Manish",
    department: "Business Development Department",
    image: "https://prod-s3.counselindia.com/images/speaker/manish-kumar.jpg",
  },
  {
    id: 6,
    title: "Exponential Growth",
    description:
      "Best Edtech working culture due to fixed working hours, female health care policies, monthly team building activities, and exponential growth plan for all its employees.",
    name: "Megha",
    department: "HR Department",
    image: "https://prod-s3.counselindia.com/images/speaker/megha-sood.jpg",
  },
];

export const GALAXY_GALLERY = [
  "https://prod-s3.counselindia.com/images/member-1.jpg",
  "https://prod-s3.counselindia.com/images/member-2.jpg",
  "https://prod-s3.counselindia.com/images/member-3.jpg",
  "https://prod-s3.counselindia.com/images/member-4.jpg",
  "https://prod-s3.counselindia.com/images/member-5.jpg",
  "https://prod-s3.counselindia.com/images/member-6.jpg",
  "https://prod-s3.counselindia.com/images/member-7.jpg",
  "https://prod-s3.counselindia.com/images/member-8.jpg",
  "https://prod-s3.counselindia.com/images/member-9.jpg",
  "https://prod-s3.counselindia.com/images/member-10.jpg",
  "https://prod-s3.counselindia.com/images/member-11.jpg",
];
