"use client";

import { useState, useEffect } from "react";
import { SiteSettingData } from "@/types/settings";
import { DEFAULT_SETTINGS } from "@/services/settingsService";

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettingData>(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const adminUrl =
      process.env.NEXT_PUBLIC_ADMIN_API_URL || "http://localhost:3001";

    fetch(`${adminUrl}/api/settings`)
      .then((res) => res.json())
      .then((json) => {
        if (isMounted && json.success && json.data) {
          setSettings((prev) => ({
            ...prev,
            ...json.data,
          }));
        }
      })
      .catch((err) => {
        console.warn("Failed to load settings in client hook:", err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { settings, loading };
}
