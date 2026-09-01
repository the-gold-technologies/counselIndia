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
      "Embrace the flexibility of online learning, enabling you to maintain a healthy work-life balance. Engage with psychologists and trainers in interactive learning sessions designed to maximize collaboration and learning outcomes",
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
    designation: "Founder & CEO",
    image: "https://prod-s3.counselindia.com/master_leaders/Bobby sir_1715950400.jpg",
    linkedin: "https://www.linkedin.com/in/bobby-thakur-ceo-counsel-india/",
  },
  {
    id: 2,
    name: "Kamal Pande",
    designation: "Chief Financial Officer",
    image: "https://prod-s3.counselindia.com/master_leaders/Kamal sir_1715949024.jpg",
    linkedin: "https://www.counselindia.com/",
  },
];

export const CORE_TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Sapna Singh",
    designation: "Finance Associate",
    image: "https://prod-s3.counselindia.com/meet_our_team/sapna finance photo_1756911088.jpeg",
    type: "core",
  },
  {
    id: 2,
    name: "Shubham Sharma",
    designation: "Sr. Manager - Business Development & Operations",
    image: "https://prod-s3.counselindia.com/meet_our_team/shubham_1753159155.jpeg",
    type: "core",
  },
  {
    id: 3,
    name: "Deepanjali Soni",
    designation: "Assistant HR Manager",
    image: "https://prod-s3.counselindia.com/meet_our_team/deepanjali_1753159327.jpeg",
    type: "core",
  },
  {
    id: 4,
    name: "Rocky Bhati",
    designation: "Compliance Officer",
    image: "https://prod-s3.counselindia.com/meet_our_team/rocky_1753159466.jpeg",
    type: "core",
  },
  {
    id: 5,
    name: "Shubham",
    designation: "Marketing Manager",
    image: "https://prod-s3.counselindia.com/meet_our_team/shubham.jpg",
    type: "core",
  },
];

export const LEGAL_TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Nitin Dev Purohit",
    designation: "Consultant and Management Lawyer",
    image: "https://prod-s3.counselindia.com/meet_our_team/3_1716458706.jpeg",
    type: "legal",
  },
  {
    id: 2,
    name: "Nitya Bansal",
    designation: "Legal Consultant",
    image: "https://prod-s3.counselindia.com/meet_our_team/1_1716458651.jpg",
    type: "legal",
  },
  {
    id: 3,
    name: "Gaurav Kochhar",
    designation: "Legal Consultant",
    image: "https://prod-s3.counselindia.com/meet_our_team/2_1716458535.jpg",
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
    title: "Exponential Growth",
    description:
      "Best Edtech working culture due to fixed working hours, female health care policies, monthly team building activities, and exponential growth plan for all its employees.",
    name: "Megha Sood",
    image: "https://prod-s3.counselindia.com/images/speaker/megha-sood.jpg",
  },
  {
    id: 2,
    title: "Very Natural",
    description:
      "The work culture of Counsel India is very natural, the environment here is like working all together as a family where growth is the primary objective.",
    name: "Mansa",
    image: "https://prod-s3.counselindia.com/meet_our_team/mansa.jpg",
  },
  {
    id: 3,
    title: "Highly Driven",
    description:
      "The work culture is amazing at counsel India. You will get highly driven and committed colleagues. Great place to work.",
    name: "Piyali Paul",
    image: "https://prod-s3.counselindia.com/meet_our_team/piyali-paul.jpg",
  },
  {
    id: 4,
    title: "Motivated",
    description:
      "Counsel India is like another home to me. I started my journey as an intern and am now a full-time employee. The work culture and environment are amazing which always motivated me in every part of my life.",
    name: "Himani Khatter",
    image: "https://prod-s3.counselindia.com/meet_our_team/1147366070_1688707163.jpg",
  },
  {
    id: 5,
    title: "Growth",
    description:
      "I started my journey in counsel India as an Academic counsellor. And I can proudly say that it is the best platform for growth and practical exposure as within 6 months, it given great positional and financial growth. All credit goes to the management and environment of counsel India.",
    name: "Aparna",
    image: "https://prod-s3.counselindia.com/meet_our_team/464286759_1688711821.jpg",
  },
];

export const GALAXY_GALLERY = [
  "https://prod-s3.counselindia.com/mastergalaxyimages/338578623_1698382876.jpeg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/415970360_809059454566800_1053203412057512723_n_1710501130.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/IMG_8189 (1)_1710501078.JPG",
  "https://prod-s3.counselindia.com/mastergalaxyimages/WhatsApp Image 2024-03-12 at 14.51.23_83c61cc1_1710501064.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/WhatsApp Image 2024-03-12 at 14.49.54_173322b1_1710501055.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/WhatsApp Image 2024-03-12 at 14.49.39_06ee14ec_1710501042.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/WhatsApp Image 2024-03-12 at 14.48.50_641c1c82_1710501020.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/1141444435_1698382906.JPG",
  "https://prod-s3.counselindia.com/mastergalaxyimages/1882158784_1698382894.jpeg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/1990991587_1688810757.jpeg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/1045414957_1688810729.jpeg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/29596432_1681971037.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/832671247_1681971045.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/2115354674_1681971062.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/1563287590_1681971083.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/1631383719_1681971092.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/974424252_1681971102.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/1853987155_1681971110.jpg",
];
