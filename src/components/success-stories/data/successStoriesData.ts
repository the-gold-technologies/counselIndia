export interface SuccessStoryItem {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface SuccessVideoItem {
  id: number;
  url: string;
}

export interface SuccessImageItem {
  id: number;
  image: string;
}

// 17 Live S3 Images from https://counselindia.com/success-stories
export const successImages: SuccessImageItem[] = [
  {
    id: 1,
    image:
      "https://prod-s3.counselindia.com/mastersuccessimages/WhatsApp%20Image%202024-04-25%20at%203.27.15%20PM_1714039211.jpeg",
  },
  {
    id: 2,
    image:
      "https://prod-s3.counselindia.com/mastersuccessimages/WhatsApp%20Image%202024-04-26%20at%201.18.46%20PM_1714118745.jpeg",
  },
  {
    id: 3,
    image:
      "https://prod-s3.counselindia.com/mastersuccessimages/WhatsApp%20Image%202024-04-26%20at%201.18.48%20PM_1714118821.jpeg",
  },
  {
    id: 4,
    image:
      "https://prod-s3.counselindia.com/mastersuccessimages/WhatsApp%20Image%202024-04-26%20at%201.18.46%20PM%20(1)_1714118757.jpeg",
  },
  {
    id: 5,
    image:
      "https://prod-s3.counselindia.com/mastersuccessimages/WhatsApp%20Image%202024-04-25%20at%203.27.55%20PM_1714039164.jpeg",
  },
  {
    id: 6,
    image:
      "https://prod-s3.counselindia.com/mastersuccessimages/WhatsApp%20Image%202024-04-26%20at%201.18.46%20PM%20(2)_1714118772.jpeg",
  },
  {
    id: 7,
    image:
      "https://prod-s3.counselindia.com/mastersuccessimages/WhatsApp%20Image%202024-04-25%20at%203.27.15%20PM%20(1)_1714120830.jpeg",
  },
  {
    id: 8,
    image:
      "https://prod-s3.counselindia.com/mastersuccessimages/1_1719409425.jpg",
  },
  {
    id: 9,
    image:
      "https://prod-s3.counselindia.com/mastersuccessimages/2_1719409439.jpg",
  },
  {
    id: 10,
    image:
      "https://prod-s3.counselindia.com/mastersuccessimages/3_1719409452.jpg",
  },
  {
    id: 11,
    image:
      "https://prod-s3.counselindia.com/mastersuccessimages/4_1719409465.jpg",
  },
  {
    id: 12,
    image:
      "https://prod-s3.counselindia.com/mastersuccessimages/5_1719409478.jpg",
  },
  {
    id: 13,
    image:
      "https://prod-s3.counselindia.com/mastersuccessimages/6_1719409491.jpg",
  },
  {
    id: 14,
    image:
      "https://prod-s3.counselindia.com/mastersuccessimages/7_1719409503.jpg",
  },
  {
    id: 15,
    image:
      "https://prod-s3.counselindia.com/mastersuccessimages/8_1719409514.jpg",
  },
  {
    id: 16,
    image:
      "https://prod-s3.counselindia.com/mastersuccessimages/9_1719409526.jpg",
  },
  {
    id: 17,
    image:
      "https://prod-s3.counselindia.com/mastersuccessimages/10_1719409536.jpg",
  },
];

// 9 Live YouTube Video Embeds from https://counselindia.com/success-stories
export const successVideos: SuccessVideoItem[] = [
  { id: 1, url: "https://www.youtube.com/embed/gGmCLXHwpng" },
  { id: 2, url: "https://www.youtube.com/embed/jgIRAux3GOk" },
  { id: 3, url: "https://www.youtube.com/embed/6BS5gwnIX0E" },
  { id: 4, url: "https://www.youtube.com/embed/GWhla328qO0" },
  { id: 5, url: "https://www.youtube.com/embed/3I9rbscf8IM" },
  { id: 6, url: "https://www.youtube.com/embed/NQ9XTz3hY1Q" },
  { id: 7, url: "https://www.youtube.com/embed/AUXw7fYj9LA" },
  { id: 8, url: "https://www.youtube.com/embed/p5FDJFhCEXw" },
  { id: 9, url: "https://www.youtube.com/embed/jS1b4MB_oYY" },
];

// Exact Column 1 Testimonials from https://counselindia.com/success-stories
export const col1Testimonials: SuccessStoryItem[] = [
  {
    id: 1,
    name: "Shivani Kumari",
    image: "https://prod-s3.counselindia.com/success_stories/shivani.jpg",
    description:
      "Counsel India helped with my growth and progress. It enhanced my knowledge and also it was helpful along with my Post Graduation. I was been cherished because of the knowledge i had through the course.",
  },
  {
    id: 2,
    name: "Riya Raizada",
    image: "https://prod-s3.counselindia.com/success_stories/riya.jpg",
    description:
      "I started helping my own kids, I understand them in better way.",
  },
  {
    id: 3,
    name: "Sachin Soni",
    image: "https://prod-s3.counselindia.com/success_stories/sachin.jpg",
    description:
      "Counsel india has changed my entire level of thinking and living as thank you sooo much for being all time supportive team",
  },
  {
    id: 4,
    name: "Shelly John",
    image: "https://prod-s3.counselindia.com/success_stories/shelly.jpg",
    description:
      "I am a mental health practitioner working as counselling psychologist this course was helpful to develop my knowledge in such a good direction and by this I am doing very well in my professional practice. The trainers at Counsel India are very knowledgeable, professional and helpful. They shape the course according to the trainee.",
  },
  {
    id: 5,
    name: "Garry",
    image: "https://prod-s3.counselindia.com/success_stories/garry.jpg",
    description:
      "When I join counsel india I was unknown to the most of things of psychology and segment wise I understand and step by step also to this situation and most of the time RCI illusion create by the surrounding people but counsel india solve my problem ,No need for this only knowledge and experience basis you can start this.",
  },
];

// Exact Column 2 Testimonials from https://counselindia.com/success-stories
export const col2Testimonials: SuccessStoryItem[] = [
  {
    id: 6,
    name: "Archana Raghav",
    image: "https://prod-s3.counselindia.com/success_stories/archana-raghav.jpg",
    description:
      "I took up Therapy Masters Course and learnt so many therapies. It was interesting to interact with a new bunch of people from various backgrounds and the trainers explained it well. Thank you Counsel India.",
  },
  {
    id: 7,
    name: "Puneet Singh",
    image: "https://prod-s3.counselindia.com/success_stories/puneet-singh.jpg",
    description:
      "The therapy master class was good. It gave a decent overview of each therapy. Practical exposure was also very useful.",
  },
  {
    id: 8,
    name: "Naveen",
    image: "https://prod-s3.counselindia.com/success_stories/naveen.jpg",
    description:
      "It was super session to me & I learned many things regarding child psychology like developmental milestones, learning disability and preventions and more about it... Thanks to counsel India for conducting these type of work shops to acquire more knowledge ....once again Thanks ?",
  },
  {
    id: 9,
    name: "Sumalatha M",
    image: "https://prod-s3.counselindia.com/success_stories/sumalatha.jpg",
    description:
      "I had d taken up Child Psychology course.The coaching was really good, coaches also were very understanding and they cleared all the doubts. I had a wonderful experience all together of course the knowledge i gained was remarkable.Thanks to Counsel India for bringing up such short courses which anyone could afford for.??",
  },
];

// Exact Column 3 Testimonials from https://counselindia.com/success-stories
export const col3Testimonials: SuccessStoryItem[] = [
  {
    id: 10,
    name: "Asma",
    image: "https://prod-s3.counselindia.com/success_stories/asma.jpg",
    description:
      "I'm a Psychology student apart from being a teacher in which I am trained. I want to build my career in Clinical Psychology and want to be a Psychologist. After completing my Internship from Counsel India I really feel I have got what I was actually looking in my career. Special thanks to my Trainers.",
  },
  {
    id: 11,
    name: "Juanita",
    image: "https://prod-s3.counselindia.com/success_stories/juanita.jpg",
    description:
      "If there's one thing that I would like you to know about me it's psychology it has been my passion and I have loved exploring everything about human mind and behavior. Thank you Counsel India for giving me the platform to excel.",
  },
  {
    id: 12,
    name: "Sonali Jha",
    image: "https://prod-s3.counselindia.com/success_stories/sonali.jpg",
    description:
      "Bangalore- Great organization to learn psychology. Network of great psychologists. Learn and grow and accelerate others to use it's full potential.",
  },
  {
    id: 13,
    name: "Sanchari",
    image: "https://prod-s3.counselindia.com/success_stories/sanchari.jpg",
    description:
      "It was a great experience. I learnt very well about Child Psychology from our guide. Thank you for giving us such a great opportunity.",
  },
];
