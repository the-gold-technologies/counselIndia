"use client";
import React, { useState } from "react";
import MentalHealthBanner from "@/components/mentalhealthtest/MentalHealthBanner";
import MentalHealthTestCard, { TestData } from "@/components/mentalhealthtest/MentalHealthTestCard";
import MentalHealthLeadModal from "@/components/mentalhealthtest/MentalHealthLeadModal";
import MentalHealthTestRunner from "@/components/mentalhealthtest/MentalHealthTestRunner";
import MentalHealthTestResult from "@/components/mentalhealthtest/MentalHealthTestResult";

const DEFAULT_OPTIONS = [
  { label: "A) Always", value: "A", points: 4 },
  { label: "B) Often", value: "B", points: 3 },
  { label: "C) Rarely", value: "C", points: 2 },
  { label: "D) Never", value: "D", points: 1 },
];

const TESTS: TestData[] = [
  {
    id: "emotional-well-being",
    title: "Emotional Well-Being Test",
    image:
      "https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/mastergalaxyimages/second-cover_converted.webp",
    description:
      "Evaluate your emotional resilience, inner peace, and ability to navigate daily challenges with balance.",
    questions: [
      { id: 1, text: "1. I feel content and at peace with myself.", options: DEFAULT_OPTIONS },
      { id: 2, text: "2. I am able to manage stress in a healthy way.", options: DEFAULT_OPTIONS },
      { id: 3, text: "3. I feel confident in my ability to handle daily challenges.", options: DEFAULT_OPTIONS },
      { id: 4, text: "4. I have positive thoughts about myself and my future.", options: DEFAULT_OPTIONS },
      { id: 5, text: "5. I am able to balance my work and personal life well.", options: DEFAULT_OPTIONS },
      { id: 6, text: "6. I feel connected and supported by those around me.", options: DEFAULT_OPTIONS },
      { id: 7, text: "7. I have a sense of purpose in my daily activities.", options: DEFAULT_OPTIONS },
      { id: 8, text: "8. I experience a variety of emotions without feeling overwhelmed.", options: DEFAULT_OPTIONS },
      { id: 9, text: "9. I can recover from setbacks or difficult situations fairly quickly.", options: DEFAULT_OPTIONS },
      { id: 10, text: "10. I feel motivated to pursue my goals and dreams.", options: DEFAULT_OPTIONS },
    ],
  },
  {
    id: "quality-of-life",
    title: "Quality of Life Test",
    image:
      "https://prod-s3.counselindia.com/mastergalaxyimages/cover22_1730113051.png",
    description:
      "Assess your satisfaction across key life domains including health, security, relationships, and purpose.",
    questions: [
      { id: 1, text: "1. I am satisfied with my overall health.", options: DEFAULT_OPTIONS },
      { id: 2, text: "2. I feel safe and secure in my daily life.", options: DEFAULT_OPTIONS },
      { id: 3, text: "3. I am able to meet my daily financial needs comfortably.", options: DEFAULT_OPTIONS },
      { id: 4, text: "4. I have fulfilling relationships with family and friends.", options: DEFAULT_OPTIONS },
      { id: 5, text: "5. I enjoy my work/studies and find them meaningful.", options: DEFAULT_OPTIONS },
      { id: 6, text: "6. I am able to participate in leisure activities I enjoy.", options: DEFAULT_OPTIONS },
      { id: 7, text: "7. I have a sense of purpose and direction in life.", options: DEFAULT_OPTIONS },
      { id: 8, text: "8. I feel comfortable with my living conditions.", options: DEFAULT_OPTIONS },
      { id: 9, text: "9. I feel respected and valued in my social circles.", options: DEFAULT_OPTIONS },
      { id: 10, text: "10. I generally feel happy and content with my life.", options: DEFAULT_OPTIONS },
    ],
  },
  {
    id: "general-health",
    title: "General Health Test",
    image:
      "https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/mastergalaxyimages/coverr_converted.webp",
    description:
      "A quick psychological assessment to evaluate your concentration, sleep quality, and daily vitality.",
    questions: [
      { id: 1, text: "1. I feel capable of making decisions about my daily life.", options: DEFAULT_OPTIONS },
      { id: 2, text: "2. I have been feeling cheerful and in good spirits.", options: DEFAULT_OPTIONS },
      { id: 3, text: "3. I have been able to concentrate on what I'm doing.", options: DEFAULT_OPTIONS },
      { id: 4, text: "4. I feel capable of coping with daily strain or stress.", options: DEFAULT_OPTIONS },
      { id: 5, text: "5. I feel optimistic and hopeful about my days.", options: DEFAULT_OPTIONS },
      { id: 6, text: "6. I have been able to enjoy my normal day-to-day activities.", options: DEFAULT_OPTIONS },
      { id: 7, text: "7. I feel confident about handling personal problems.", options: DEFAULT_OPTIONS },
      { id: 8, text: "8. I feel physically healthy and able to carry out my daily tasks.", options: DEFAULT_OPTIONS },
      { id: 9, text: "9. I feel satisfied with my quality of sleep.", options: DEFAULT_OPTIONS },
      { id: 10, text: "10. I feel that I have enough energy for daily activities.", options: DEFAULT_OPTIONS },
    ],
  },
];

export default function MentalHealthTestPage() {
  const [selectedTest, setSelectedTest] = useState<TestData | null>(null);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [userData, setUserData] = useState<{ name: string; email: string; mobile: string }>({
    name: "",
    email: "",
    mobile: "",
  });
  const [isTestActive, setIsTestActive] = useState(false);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [testCompleted, setTestCompleted] = useState(false);

  const handleOpenLeadModal = (test: TestData) => {
    setSelectedTest(test);
    setIsLeadModalOpen(true);
  };

  const handleStartTest = (user: { name: string; email: string; mobile: string }) => {
    setUserData(user);
    setIsLeadModalOpen(false);
    setIsTestActive(true);
    setAnswers({});
    setTestCompleted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOptionSelect = (questionId: number, points: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: points }));
  };

  const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="main-wrapper" style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      {/* 1. Hero Banner Component */}
      <MentalHealthBanner />

      {/* 2. Content Area with Exact PHP Gradient Background */}
      <div
        className="content-text"
        style={{
          background: "linear-gradient(to bottom, #80ba94 0%, #a4cca8 250px, #ffffff 650px)",
          padding: "70px 15px 90px",
        }}
      >
        <div className="container custom-container">
          {!isTestActive ? (
            /* 3 Assessment Cards matching Screenshot */
            <div className="row g-4 justify-content-center">
              {TESTS.map((test) => (
                <div key={test.id} className="col-xl-4 col-md-6">
                  <MentalHealthTestCard test={test} onExplore={handleOpenLeadModal} />
                </div>
              ))}
            </div>
          ) : !testCompleted && selectedTest ? (
            /* Test Runner Component */
            <MentalHealthTestRunner
              test={selectedTest}
              answers={answers}
              onOptionSelect={handleOptionSelect}
              onSubmit={() => {
                setTestCompleted(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onExit={() => setIsTestActive(false)}
            />
          ) : (
            /* Test Result Component */
            <MentalHealthTestResult
              score={totalScore}
              userName={userData.name}
              onRetake={() => setIsTestActive(false)}
            />
          )}
        </div>
      </div>

      {/* 3. Lead Registration Modal Component */}
      <MentalHealthLeadModal
        test={selectedTest}
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        onStart={handleStartTest}
      />
    </div>
  );
}
