export interface NewsletterItem {
  id: number;
  title: string;
  month: string;
  year: number;
  edition: string;
  image: string;
  description: string;
  highlights: string[];
  readTime: string;
  pdfUrl?: string;
  category: "Clinical" | "Mindfulness" | "Career" | "Trends" | "Corporate";
}

export const NEWSLETTERS_DATA: NewsletterItem[] = [
  {
    id: 1,
    title: "Navigating Cognitive Overload & Digital Fatigue in 2025",
    month: "March",
    year: 2025,
    edition: "Vol. 28 - Issue 03",
    image: "/assets/images/blog/blog-01.jpg",
    description: "An evidence-based deep dive into the psychological effects of constant connectivity and practical clinical tools for digital detox.",
    highlights: [
      "Neuroscience of attention fragmentation",
      "Actionable micro-boundaries for remote workers",
      "Case studies from corporate counseling practitioners",
    ],
    readTime: "6 min read",
    category: "Trends",
  },
  {
    id: 2,
    title: "Emotional Regulation Strategies for Clinical Practitioners",
    month: "February",
    year: 2025,
    edition: "Vol. 28 - Issue 02",
    image: "/assets/images/blog/blog-04.jpg",
    description: "Therapeutic frameworks combining CBT and Dialectical Behavioral techniques for managing high-stress client breakthroughs.",
    highlights: [
      "Somatic grounding vs. cognitive reframing",
      "Practitioner self-care & vicarious trauma prevention",
      "Interactive practitioner worksheet included",
    ],
    readTime: "8 min read",
    category: "Clinical",
  },
  {
    id: 3,
    title: "The Rise of Mental Health Awareness in Indian Workplaces",
    month: "January",
    year: 2025,
    edition: "Vol. 28 - Issue 01",
    image: "/assets/images/blog/blog-05.jpg",
    description: "Analyzing survey data from over 500 corporate organizations across India on employee assistance programs and psychological safety.",
    highlights: [
      "Key workplace mental health metrics for 2025",
      "ROI of organizational wellbeing programs",
      "Executive interview with leading CI psychologists",
    ],
    readTime: "7 min read",
    category: "Corporate",
  },
  {
    id: 4,
    title: "Child & Adolescent Behavior in the Post-Screen Age",
    month: "December",
    year: 2024,
    edition: "Vol. 27 - Issue 12",
    image: "/assets/images/blog/blog-06.jpg",
    description: "Modern parenting paradigms and school psychology interventions for attention, peer dynamics, and emotional resilience.",
    highlights: [
      "Identifying early signs of childhood anxiety",
      "Collaborative parent-counselor intervention models",
      "Practical developmental milestones checklist",
    ],
    readTime: "5 min read",
    category: "Mindfulness",
  },
  {
    id: 5,
    title: "Building a Sustainable Career as a Licensed Psychologist in India",
    month: "November",
    year: 2024,
    edition: "Vol. 27 - Issue 11",
    image: "/assets/images/blog/career.jpg",
    description: "A comprehensive roadmap from postgraduate studies and RCI certifications to building an ethical private practice.",
    highlights: [
      "Licensing updates & regulatory compliance",
      "Tele-therapy best practices and client acquisition",
      "Alumni spotlight & career transition journeys",
    ],
    readTime: "9 min read",
    category: "Career",
  },
  {
    id: 6,
    title: "The Neurobiology of Resilience & Habit Formation",
    month: "October",
    year: 2024,
    edition: "Vol. 27 - Issue 10",
    image: "/assets/images/blog/research.jpg",
    description: "How neuroplasticity shapes emotional endurance, habit loops, and long-term behavioral change in therapeutic settings.",
    highlights: [
      "Dopamine pathways & reward feedback loops",
      "Evidence-based habit stacking for clients",
      "Recommended research reading list",
    ],
    readTime: "6 min read",
    category: "Clinical",
  },
];
