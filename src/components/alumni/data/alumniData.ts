export interface AlumniStat {
  id: number;
  count: number | string;
  suffix: string;
  label: string;
  icon: string;
}

export interface AlumniService {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const ALUMNI_STATS: AlumniStat[] = [
  {
    id: 1,
    count: 200000,
    suffix: "+",
    label: "Counsel India Community",
    icon: "https://prod-s3.counselindia.com/images/3.svg",
  },
  {
    id: 2,
    count: 580,
    suffix: "+",
    label: "Alumni Placement",
    icon: "https://prod-s3.counselindia.com/images/7.svg",
  },
  {
    id: 3,
    count: 90,
    suffix: "+",
    label: "Hiring Partners",
    icon: "https://prod-s3.counselindia.com/images/2.svg",
  },
  {
    id: 4,
    count: 28,
    suffix: "+",
    label: "Alumni Initiated Startups Launched",
    icon: "https://prod-s3.counselindia.com/images/6.svg",
  },
  {
    id: 5,
    count: "9.08",
    suffix: "/10",
    label: "Alumni Feedback Rating",
    icon: "https://prod-s3.counselindia.com/images/1.svg",
  },
];

export const ALUMNI_SERVICES: AlumniService[] = [
  {
    id: 1,
    title: "Membership",
    description:
      "Enjoy exclusive complimentary membership as a valued alumni of Counsel India, accessing endless learning opportunities and special benefits tailored for your growth in the field of psychology.",
    image:
      "https://prod-s3.counselindia.com/mastergalaxyimages/Screenshot%202024-11-26%20at%2010.55.20%E2%80%AFAM_1732598762.png",
  },
  {
    id: 2,
    title: "Part of Network",
    description:
      "Join a robust community of over 1 lakh professionals, mentors, and peers, fostering connections and collaborations that empower you to stay ahead in your career. .",
    image:
      "https://prod-s3.counselindia.com/mastergalaxyimages/Screenshot%202024-11-26%20at%2010.47.06%E2%80%AFAM_1732598296.png",
  },
  {
    id: 3,
    title: "Convocation/Alumni Meet",
    description:
      "Reconnect, celebrate, and grow at our alumni meets and offline convocations—designed to keep you inspired, updated, and connected with the Counsel India family.",
    image:
      "https://prod-s3.counselindia.com/mastergalaxyimages/Screenshot%202024-11-26%20at%2010.49.35%E2%80%AFAM_1732598401.png",
  },
  {
    id: 4,
    title: "Job/Venture Support",
    description:
      "Accelerate your professional journey with our dedicated career and entrepreneurial support, offering tailored guidance to help you succeed in your chosen career path.",
    image:
      "https://prod-s3.counselindia.com/mastergalaxyimages/Screenshot%202024-11-26%20at%2010.57.12%E2%80%AFAM_1732598891.png",
  },
];

export const ALUMNI_NETWORK_ROW_1: string[] = [
  "https://prod-s3.counselindia.com/mastergalaxyimages/Inu%20Photo%20(2)_1732514379.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/1000250655%20(1)_1732514392.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/1638087948533%20(1)_1732514411.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/IMG_20241121_124818%20(1)_1732514325.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/20241112_125559%20(1)_1732514169.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/GANDHI%20%20HARSHADA%20(1)_1732514193.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/IMG_20241117_155327%20(1)_1732514284.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/IMG_20191020_101242561%20(1)_1732514231.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/IMG_20241119_104207~2_1732514298.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/IMG_4047%20(1)_1732514350.JPEG",
];

export const ALUMNI_NETWORK_ROW_2: string[] = [
  "https://prod-s3.counselindia.com/mastergalaxyimages/e79f9e36-3066-459b-a9b7-d47eb431ba29%20(2)_1732514181.jpeg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/IMG_20241122_112616%20(2)_1732514338.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/Guneet%20Gill%20(1)_1732514205.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/IMG_20241117_155327%20(1)_1732514284.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/IMG-20241101-WA0017%20(1)_1732514366.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/20240611_112640%20(1)_1732514155.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/16519223050%20(2)_1732514102.jpeg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/1732354277418%20(1)_1732514116.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/2018-10-06%2012.01.02%20(1)_1732514132.jpg",
  "https://prod-s3.counselindia.com/mastergalaxyimages/image_50433793%20(2)_1732514219.JPG",
];
