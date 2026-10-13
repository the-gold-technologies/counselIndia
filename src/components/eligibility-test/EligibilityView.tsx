"use client";
import React, { useState, useEffect } from "react";
import EligibilityBanner from "./EligibilityBanner";
import EligibilityIntro from "./EligibilityIntro";
import EligibilityForm from "./EligibilityForm";
import { getPersonalityTestInfo, PersonalityTestInfo } from "@/services/personalityService";

export default function EligibilityView() {
  const [info, setInfo] = useState<PersonalityTestInfo | null>(null);

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

  return (
    <main className="eligibility-test-page bg-white min-vh-100">
      <EligibilityBanner />
      <EligibilityIntro info={info} />
      <EligibilityForm />
    </main>
  );
}
