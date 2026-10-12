export interface CourseItem {
  id: number;
  name: string;
  slug: string;
  cover_image: string;
  list_duration: string;
  enrolment: string;
  subdescription: string;
  badgeText: string;
  badgeBg: string;
  category?: string;
  rating: number;
  status?: string;
  nextBatchDate?: string;
  fee?: string;
}

export interface CourseDetailData {
  id: number;
  name: string;
  slug: string;
  badgeSale?: string;
  category?: string;
  bgImage?: string;
  partnerLogo?: string;
  description?: string;
  rating?: number;
  enrollUrl?: string;
  phone?: string;
  highlights?: {
    title: string;
    desc: string;
  }[];
  benefits?: string[];
  about?: string[];
  learningObjectives?: string[];
  credentials?: {
    id: string;
    label: string;
    text: string;
    points?: string[];
    image: string;
  }[];
  curriculum?: {
    totalSessions?: string;
    totalHours?: string;
    stats?: { count: string; text: string }[];
    modules?: {
      title: string;
      topics?: string[];
    }[];
  };
  programBenefit?: string[];
  courseOverview?: {
    title: string;
    text: string;
  }[];
  skillIndiaAdvantage?: {
    title: string;
    text: string;
  };
  whoCanJoin?: string[];
  scholarship?: {
    title: string;
    subtitle: string;
    image: string;
    points: { label: string; desc: string }[];
  };
  faculty?: {
    name: string;
    title: string;
    image: string;
  }[];
  referEarn?: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
  reviews?: {
    quote: string;
    name: string;
    city: string;
    image: string;
  }[];
  partners?: string[];
  learnersWorkAt?: string[];
  faqs?: {
    question: string;
    answer: string[];
  }[];
}
