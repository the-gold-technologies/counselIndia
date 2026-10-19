import { fetchFromAdmin } from "./apiClient";
import { submitLead } from "./leadService";

export interface PersonalityTestInfo {
  id: string;
  name: string;
  totalQuestions: number;
  subtitle: string;
  instruction: string;
  status: string;
}

export interface PersonalityAnswerOption {
  value: string;
  answer: string;
}

export interface PersonalityQuestion {
  id: string;
  liveId?: string;
  question: string;
  answers: PersonalityAnswerOption[];
  position: number;
  status: string;
}

export interface PersonalityTabResult {
  id: string;
  liveId?: string;
  name: string;
  description: string;
  points: string;
  status: string;
}

export interface PersonalitySubmissionData {
  name: string;
  email: string;
  mobile: string;
  countryCode?: string;
  state?: string;
  city?: string;
  age?: string | number;
  gender?: string;
  proBackground?: string;
  purposeGiveTest?: string;
  hearFrom?: string;
  resultName?: string;
  answers?: Record<string | number, string>;
}

/**
 * Fetch Personality Test Info and Instructions
 */
export async function getPersonalityTestInfo(): Promise<PersonalityTestInfo | null> {
  try {
    const res = await fetchFromAdmin<PersonalityTestInfo>("/api/personality-test/info");
    if (res.success && res.data) {
      return res.data;
    }
    return null;
  } catch (error) {
    console.error("[PersonalityService] Failed to fetch test info:", error);
    return null;
  }
}

/**
 * Fetch all Active Personality Questions ordered by position
 */
export async function getPersonalityQuestions(): Promise<PersonalityQuestion[]> {
  try {
    const res = await fetchFromAdmin<PersonalityQuestion[]>("/api/personality-test/questions");
    if (res.success && Array.isArray(res.data)) {
      return res.data
        .filter((q) => q.status === "Active")
        .sort((a, b) => (a.position || 0) - (b.position || 0));
    }
    return [];
  } catch (error) {
    console.error("[PersonalityService] Failed to fetch questions:", error);
    return [];
  }
}

/**
 * Fetch all Personality Tab Results
 */
export async function getPersonalityTabResults(): Promise<PersonalityTabResult[]> {
  try {
    const res = await fetchFromAdmin<PersonalityTabResult[]>("/api/personality-test/tab-result");
    if (res.success && Array.isArray(res.data)) {
      return res.data.filter((r) => r.status === "Active");
    }
    return [];
  } catch (error) {
    console.error("[PersonalityService] Failed to fetch tab results:", error);
    return [];
  }
}

/**
 * Fetch a single personality test entry by lead ID / sNo
 */
export async function getPersonalityEntry(leadId: string): Promise<any | null> {
  try {
    const res = await fetchFromAdmin<any>(
      `/api/personality-test/entries?id=${encodeURIComponent(leadId)}`
    );
    if (res.success && res.data) {
      return res.data;
    }
    return null;
  } catch (error) {
    console.error("[PersonalityService] Failed to fetch personality entry:", error);
    return null;
  }
}

/**
 * Submit candidate details to Admin Leads / Personality Entries
 */
export async function submitPersonalityTestLead(
  data: PersonalitySubmissionData
): Promise<{ success: boolean; data?: any; error?: string }> {
  try {
    const leadRes = await submitLead({
      category: "personality-test",
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      countryCode: data.countryCode,
      state: data.state,
      city: data.city,
      hearFrom: data.hearFrom,
      content: `Background: ${data.proBackground || "N/A"} | Purpose: ${data.purposeGiveTest || "N/A"} | Result: ${data.resultName || "In Progress"}`,
      medium: "Website Personality Test",
      source: "Eligibility Test",
      extraData: {
        gender: data.gender,
        age: data.age,
        proBackground: data.proBackground,
        purposeGiveTest: data.purposeGiveTest,
        result: data.resultName || "In Progress",
        answers: data.answers || {},
      },
    });

    return leadRes;
  } catch (error: any) {
    console.error("[PersonalityService] Submission error:", error);
    return { success: false, error: error?.message || "Failed to submit lead" };
  }
}

/**
 * Update candidate's test result archetype and answers in Admin Leads / Personality Entries
 */
export async function updatePersonalityTestResult(
  leadId: string,
  resultName: string,
  answers: Record<string | number, string>,
  additionalData?: {
    name?: string;
    email?: string;
    mobile?: string;
    gender?: string;
    state?: string;
    age?: string | number;
    score?: number;
    marks?: string;
    courseName?: string;
  }
): Promise<{ success: boolean; data?: any; error?: string }> {
  try {
    const adminUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL || "";
    const res = await fetch(`${adminUrl}/api/personality-test/entries`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: leadId,
        result: resultName,
        marks: resultName,
        answers,
        ...(additionalData || {}),
      }),
    });
    const json = await res.json();
    return json;
  } catch (error: any) {
    console.error("[PersonalityService] Failed to update lead result:", error);
    return { success: false, error: error?.message || "Failed to update lead result" };
  }
}

/**
 * Compute personality result from user selected options
 */
export function calculatePersonalityResult(
  selectedAnswers: Record<string | number, string>,
  tabResults: PersonalityTabResult[]
): PersonalityTabResult | null {
  if (!tabResults || tabResults.length === 0) return null;

  const counts: Record<string, number> = {
    Achiever: 0,
    Enthusiast: 0,
    Logical: 0,
    Empath: 0,
  };

  Object.values(selectedAnswers).forEach((val) => {
    const normalized = val?.trim();
    if (normalized && counts[normalized] !== undefined) {
      counts[normalized]++;
    } else if (normalized === "Initiator") {
      counts.Enthusiast++;
    }
  });

  // Sort traits by count descending
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const [topTrait, topCount] = sorted[0];
  const [secondTrait, secondCount] = sorted[1];

  // If there is a tie between top 2 traits (and topCount > 0)
  if (topCount > 0 && topCount === secondCount) {
    const combo = tabResults.find(
      (r) =>
        (r.name.toLowerCase().includes(topTrait.toLowerCase()) &&
          r.name.toLowerCase().includes(secondTrait.toLowerCase())) ||
        (r.name.toLowerCase().includes(secondTrait.toLowerCase()) &&
          r.name.toLowerCase().includes(topTrait.toLowerCase()))
    );
    if (combo) return combo;
  }

  // Single dominant trait
  const single = tabResults.find((r) => r.name.toLowerCase().includes(topTrait.toLowerCase()));
  if (single) return single;

  return tabResults[0] || null;
}
