export interface GrowthCourse {
  id: number;
  title: string;
  slug: string;
  coverimage: string;
  videoUrl?: string;
  difficulty: string;
  duration_course: number;
  certificate: string;
  rating: string;
  ratingValue: number;
  discounted_price: number;
  actual_price: number;
  seats_left: number;
  payment_link: string;
  modules: string[];
  description?: string;
}

export const GROWTH_COURSES: GrowthCourse[] = [
  {
    id: 1,
    title: "Psychology for Everyday Struggles",
    slug: "psychology-for-everyday-struggles",
    coverimage:
      "https://prod-s3.counselindia.com/blog/Psychology for Everyday Struggles_1736508322.jpg",
    videoUrl:
      "https://www.youtube.com/embed/2vCP5F4YvIk?si=eIJ2oBEysUq8oVx0",
    difficulty: "beginner",
    duration_course: 6,
    certificate: "Certificate of Completion",
    rating: "4.7/5",
    ratingValue: 4.7,
    discounted_price: 499,
    actual_price: 1999,
    seats_left: 41,
    payment_link:
      "https://members.internationalpsychologyassociation.org/web/checkout/692e6ff5c5e57869ed431e68",
    modules: [
      "Module 1: Introduction to Psychology & Everyday Applications",
      "Module 2: Emotional Awareness & Mental Well-being",
      "Module 3: Stress Management & Mindfulness Techniques",
      "Module 4: Communication, Relationships & Motivation",
      "Module 5: Decision-Making & Problem-Solving Skills",
    ],
    description:
      "Understand and navigate everyday psychological challenges with practical, science-backed techniques designed for personal growth, resilience, and emotional clarity.",
  },
  {
    id: 2,
    title: "Counselling Booster Program",
    slug: "counselling-booster-program",
    coverimage:
      "https://prod-s3.counselindia.com/blog/Counselling Booster Program_1736508523.jpg",
    videoUrl:
      "https://www.youtube.com/embed/AVWfmDKaEPE?si=magCm3bHug41UolO",
    difficulty: "Advance",
    duration_course: 12,
    certificate: "Certificate of Completion",
    rating: "4.7/5",
    ratingValue: 4.7,
    discounted_price: 999,
    actual_price: 4999,
    seats_left: 22,
    payment_link:
      "https://members.internationalpsychologyassociation.org/web/checkout/69b111b0b700b42a9827d040",
    modules: [
      "Module 1: Aversion Therapy",
      "Module 2: Children with Special Education Needs",
      "Module 3: How to Manage Stress",
      "Module 4: How CBT works",
      "Module 5: Intelligence & Cognitive Functioning",
      "Module 6: Depression & Clinical Interventions",
    ],
    description:
      "Elevate your counseling skills with advanced therapeutic frameworks, CBT strategies, crisis interventions, and real-world clinical case management.",
  },
  {
    id: 3,
    title: "The Art of Understanding Yourself",
    slug: "the-art-of-understanding-yourself",
    coverimage:
      "https://prod-s3.counselindia.com/blog/The Art of Understanding Yourself_1736508692.jpg",
    videoUrl:
      "https://www.youtube.com/embed/Fo9SJ1an5Kg?si=6GEVHg9U3FhTC0oX",
    difficulty: "Beginner",
    duration_course: 10,
    certificate: "Certificate of Completion",
    rating: "4.7/5",
    ratingValue: 4.7,
    discounted_price: 499,
    actual_price: 1999,
    seats_left: 56,
    payment_link:
      "https://members.internationalpsychologyassociation.org/web/checkout/6978977f5f39df29f2f9e6f1",
    modules: [
      "Module 1: What is Mental Health",
      "Module 2: Scopes and Areas Under Psychology",
      "Module 3: Laws and Regulations Acts in the Mental Health Field",
      "Module 4: How to Start a Venture and Practice",
      "Module 5: Counselor Skills & Active Listening",
      "Module 6: Ethics and Guidelines in Counseling",
      "Module 7: Brain, Neurons, and Neurotransmitters to Behaviors",
      "Module 8: Cognitive Approaches & Restructuring",
      "Module 9: Personality Approaches & Self-Assessment",
      "Module 10: Current Trends and Challenges in Mental Health",
    ],
    description:
      "A foundational journey into mental health, self-discovery, cognitive psychology, and the professional ethics required to understand yourself and guide others.",
  },
];
