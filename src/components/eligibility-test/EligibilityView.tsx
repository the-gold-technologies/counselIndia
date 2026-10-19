"use client";

import React, { useState, useEffect } from "react";
import EligibilityBanner from "./EligibilityBanner";
import EligibilityIntro from "./EligibilityIntro";
import EligibilityForm from "./EligibilityForm";
import PersonalityTestRunner from "./PersonalityTestRunner";
import { getPersonalityTestInfo, PersonalityTestInfo } from "@/services/personalityService";

export default function EligibilityView() {
  const [info, setInfo] = useState<PersonalityTestInfo | null>(null);
  const [activeStep, setActiveStep] = useState<"form" | "test">("form");
  const [candidateInfo, setCandidateInfo] = useState<{
    id?: string;
    name?: string;
    email?: string;
    mobile?: string;
  }>({});

  useEffect(() => {
    async function loadInfo() {
      try {
        const data = await getPersonalityTestInfo();
        if (data) setInfo(data);
      } catch (err) {
        console.error("Failed to load personality test info:", err);
      }
    }
    loadInfo();
  }, []);

  const handleFormSubmitted = (data: {
    id?: string;
    name?: string;
    email?: string;
    mobile?: string;
  }) => {
    setCandidateInfo(data);
    setActiveStep("test");
    if (typeof window !== "undefined") {
      const newUrl = data.id ? `/personality_test1/${data.id}` : "/personality_test1";
      window.history.pushState(null, "", newUrl);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (activeStep === "test") {
    return <PersonalityTestRunner leadId={candidateInfo.id} initialUser={candidateInfo} />;
  }

  return (
    <main className="eligibility-test-page bg-white min-vh-100">
      <EligibilityBanner />
      <EligibilityIntro info={info} />
      <EligibilityForm onSuccess={handleFormSubmitted} />
    </main>
  );
}
