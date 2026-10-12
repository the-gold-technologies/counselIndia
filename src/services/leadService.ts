/**
 * Lead Submission Service for Counsel India
 * Submits public website leads to the centralized Admin Panel API (http://localhost:3001/api/leads)
 * Each form maps strictly to its respective leads table/category.
 */

export type LeadCategory =
  | "subscription"
  | "landing-page"
  | "exit-intent"
  | "contact-us"
  | "book-session"
  | "ci-business"
  | "personality-test"
  | "ebook"
  | "newsletter"
  | "courses-enquiry"
  | "utm-data"
  | "landing-page-utm"
  | "course-registration"
  | "ask-question"
  | "app-data"
  | "certificate-data"
  | "leadform-data"
  | "refer-enquiry";

export interface LeadSubmissionPayload {
  category: LeadCategory;
  name?: string;
  email?: string;
  mobile?: string;
  countryCode?: string;
  state?: string;
  city?: string;
  medium?: string;
  source?: string;
  content?: string;
  message?: string;
  hearFrom?: string;
  courseType?: string;
  courseName?: string;
  extraData?: Record<string, any>;
}

export async function submitLead(
  payload: LeadSubmissionPayload
): Promise<{ success: boolean; data?: any; message?: string; error?: string }> {
  const adminUrl =
    process.env.NEXT_PUBLIC_ADMIN_API_URL || "http://localhost:3001";

  try {
    const res = await fetch(`${adminUrl}/api/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errText = await res.text();
      try {
        const parsed = JSON.parse(errText);
        return { success: false, error: parsed.error || "Submission failed" };
      } catch {
        return { success: false, error: errText || "Submission failed" };
      }
    }

    const json = await res.json();
    return json;
  } catch (error: any) {
    console.error(
      `[LeadService] Error submitting lead to category '${payload.category}':`,
      error
    );
    return {
      success: false,
      error: error?.message || "Failed to submit lead",
    };
  }
}
