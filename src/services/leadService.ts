/**
 * Lead Submission Service for Counsel India
 * Submits public website leads to the centralized Admin Panel API
 * Each form maps strictly to its respective leads table/category.
 */

import { getStoredUtm } from "@/components/common/UtmTracker";

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
  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL;

  // 1. Enrich with UTM tracking parameters if captured during this user session
  const storedUtm = getStoredUtm();
  const enrichedExtraData = {
    ...(payload.extraData || {}),
    ...(storedUtm ? { utmData: storedUtm } : {}),
  };

  const finalPayload: LeadSubmissionPayload = {
    ...payload,
    extraData: enrichedExtraData,
  };

  try {
    const res = await fetch(`${adminUrl}/api/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalPayload),
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

    // 2. If UTM parameters are present and this is not already a UTM category,
    // automatically sync a record to landing-page-utm or utm-data based on ad entry page
    if (storedUtm && payload.category !== "utm-data" && payload.category !== "landing-page-utm") {
      try {
        // Inspect the page where the ad landed the user (or current page)
        const adLandingUrl = (storedUtm?.landing_url || "").toLowerCase();
        const currentPath =
          typeof window !== "undefined" ? window.location.pathname.toLowerCase() : "";
        const targetUrl = adLandingUrl || currentPath;

        const isLandingPage =
          payload.category === "landing-page" ||
          targetUrl.includes("/landing") ||
          targetUrl.includes("/lp") ||
          targetUrl.includes("/campaign") ||
          targetUrl.includes("/course/") ||
          targetUrl.includes("/courses/") ||
          targetUrl.includes("/growth-courses") ||
          targetUrl.includes("/har-ghar-counsellor") ||
          targetUrl.includes("/eligibility-test");

        // If Google Ad / campaign redirected to a landing page -> "landing-page-utm"
        // Rest if it redirected to another page (homepage, newsletter, about, etc.) -> "utm-data"
        const utmCategory: LeadCategory = isLandingPage ? "landing-page-utm" : "utm-data";

        await fetch(`${adminUrl}/api/leads`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            category: utmCategory,
            name: payload.name || "Campaign Visitor",
            email: payload.email || undefined,
            mobile: payload.mobile || undefined,
            source: storedUtm.utm_source || payload.source || "Ad Campaign",
            medium: storedUtm.utm_medium || payload.medium || "cpc",
            content:
              storedUtm.utm_content || storedUtm.utm_campaign || payload.content || "Campaign Lead",
            courseName: payload.courseName || payload.courseType || "General Inquiry",
            extraData: {
              originalCategory: payload.category,
              ...storedUtm,
            },
          }),
        });
      } catch (utmErr) {
        console.warn("[LeadService] Optional UTM sync warning:", utmErr);
      }
    }

    return json;
  } catch (error: any) {
    console.error(`[LeadService] Error submitting lead to category '${payload.category}':`, error);
    return {
      success: false,
      error: error?.message || "Failed to submit lead",
    };
  }
}
