export interface GrowthCourse {
  id: number;
  title: string;
  slug: string;
  coverimage: string;
  difficulty: string;
  duration_course: number;
  certificate: string;
}

export const GROWTH_COURSES: GrowthCourse[] = [
  {
    id: 1,
    title: "Psychology for Everyday Struggles",
    slug: "psychology-for-everyday-struggles",
    coverimage:
      "https://prod-s3.counselindia.com/blog/Psychology for Everyday Struggles_1736508322.jpg",
    difficulty: "beginner",
    duration_course: 6,
    certificate: "Certificate of Completion",
  },
  {
    id: 2,
    title: "Counselling Booster Program",
    slug: "counselling-booster-program",
    coverimage:
      "https://prod-s3.counselindia.com/blog/Counselling Booster Program_1736508523.jpg",
    difficulty: "Advance",
    duration_course: 12,
    certificate: "Certificate of Completion",
  },
  {
    id: 3,
    title: "The Art of Understanding Yourself",
    slug: "the-art-of-understanding-yourself",
    coverimage:
      "https://prod-s3.counselindia.com/blog/The Art of Understanding Yourself_1736508692.jpg",
    difficulty: "Beginner",
    duration_course: 10,
    certificate: "Certificate of Completion",
  },
];
