"use client";
import { useEffect } from "react";

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landing_url?: string;
  timestamp?: string;
}

export const UTM_STORAGE_KEY = "ci_utm_data";

export function getStoredUtm(): UtmParams | null {
  if (typeof window === "undefined") return null;
  try {
    // 1. Real-time check from URL search query
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get("utm_source");
    const medium = urlParams.get("utm_medium");
    const campaign = urlParams.get("utm_campaign");
    const term = urlParams.get("utm_term");
    const content = urlParams.get("utm_content");
    const gclid = urlParams.get("gclid");
    const fbclid = urlParams.get("fbclid");

    if (source || medium || campaign || term || content || gclid || fbclid) {
      const activeData: UtmParams = {
        utm_source: source || (gclid ? "google-ads" : fbclid ? "facebook-ads" : "campaign"),
        utm_medium: medium || (gclid || fbclid ? "cpc" : "web"),
        utm_campaign: campaign || undefined,
        utm_term: term || undefined,
        utm_content: content || undefined,
        landing_url: window.location.href,
        timestamp: new Date().toISOString(),
      };
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(activeData));
      localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(activeData));
      return activeData;
    }

    // 2. Check stored session / local storage
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY) || localStorage.getItem(UTM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export default function UtmTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkAndStoreUtm = () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const source = urlParams.get("utm_source");
        const medium = urlParams.get("utm_medium");
        const campaign = urlParams.get("utm_campaign");
        const term = urlParams.get("utm_term");
        const content = urlParams.get("utm_content");
        const gclid = urlParams.get("gclid");
        const fbclid = urlParams.get("fbclid");

        if (source || medium || campaign || term || content || gclid || fbclid) {
          const utmData: UtmParams = {
            utm_source: source || (gclid ? "google-ads" : fbclid ? "facebook-ads" : "campaign"),
            utm_medium: medium || (gclid || fbclid ? "cpc" : "web"),
            utm_campaign: campaign || undefined,
            utm_term: term || undefined,
            utm_content: content || undefined,
            landing_url: window.location.href,
            timestamp: new Date().toISOString(),
          };

          sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmData));
          localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmData));
          console.log("[UTM Tracker] Stored campaign parameters:", utmData);
        }
      } catch (e) {
        console.warn("[UTM Tracker] Error storing UTM:", e);
      }
    };

    checkAndStoreUtm();
    window.addEventListener("popstate", checkAndStoreUtm);
    return () => window.removeEventListener("popstate", checkAndStoreUtm);
  }, []);

  return null;
}
