import { fetchFromAdmin } from "./apiClient";
import { CounselorItem, DbCounselor } from "@/types/counselor";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Transforms a database counselor record into the CounselorItem interface
 */
export function mapDbCounselorToItem(item: DbCounselor, index = 0): CounselorItem {
  const uniqueKey = item.liveId || item.id || String(item.sNo || index + 1);
  const numericId =
    parseInt(item.liveId || String(item.sNo || index + 1), 10) || (item.sNo ?? index + 1);
  const designationSlug = item.designation ? slugify(item.designation) : "";
  const slug = `${slugify(item.name || "")}${designationSlug ? `-${designationSlug}` : ""}-${uniqueKey}`;

  // Clean experience format
  let exp = item.experience || "";
  if (exp && !exp.toLowerCase().includes("year")) {
    exp = `${exp} years`;
  }

  // Clean image URL
  let img = (item.image || "").trim();
  if (img) {
    img = img.replace("/counsellor//", "/counsellor/").replace("/counselor//", "/counselor/");
  }

  return {
    id: numericId,
    slug,
    name: item.name || "",
    designation: item.designation || "",
    image: img,
    experience: exp,
    language: item.language || "",
    fees: item.councellFees
      ? String(item.councellFees)
      : item.expectedCharges
        ? String(item.expectedCharges)
        : "",
    location: item.city || item.country || "",
    rating: 5,
    isAvailable: item.isApproved !== false && item.status !== "Inactive",
    whatBringsYou: item.whatBringsYou || "",
    about: item.about || "",
    education: item.education || "",
    experienceDetails: exp,
    achievements: item.achievements || "",
  };
}

/**
 * Fetches verified counsellors from the Admin Panel API
 */
export async function getVerifiedCounselors(search?: string): Promise<CounselorItem[]> {
  try {
    const queryParams = new URLSearchParams();
    queryParams.set("status", "verified");
    queryParams.set("all", "true");
    if (search && search.trim()) {
      queryParams.set("search", search.trim());
    }

    const res = await fetchFromAdmin<DbCounselor[]>(`/api/counsellors?${queryParams.toString()}`);

    if (!res.success || !Array.isArray(res.data)) {
      return [];
    }

    return res.data.map((c, idx) => mapDbCounselorToItem(c, idx));
  } catch (error) {
    console.error("Failed to fetch verified counsellors from Admin API:", error);
    return [];
  }
}

/**
 * Fetches a single counsellor by liveId, cuid, or slug from the Admin Panel API
 */
export async function getCounselorByIdOrSlug(idOrSlug: string): Promise<CounselorItem | null> {
  try {
    const normalizedTarget = idOrSlug.toLowerCase().trim();

    // Helper to verify if candidate counselor actually matches the requested idOrSlug
    const isCounselorMatch = (
      counselorName: string,
      counselorId?: string,
      counselorLiveId?: string
    ) => {
      // If query is an exact ID or CUID match
      if (idOrSlug === counselorId || idOrSlug === counselorLiveId) {
        return true;
      }
      // If query is numeric and matches liveId or counselorId
      if (!isNaN(Number(idOrSlug)) && (counselorLiveId === idOrSlug || counselorId === idOrSlug)) {
        return true;
      }
      // If slug contains the counselor's slugified name
      const nameSlug = slugify(counselorName || "");
      if (
        nameSlug &&
        (normalizedTarget.includes(nameSlug) || nameSlug.includes(normalizedTarget))
      ) {
        return true;
      }
      return false;
    };

    // 1. Try to extract trailing numeric ID if slug format (e.g. name-designation-683)
    const parts = idOrSlug.split("-");
    const trailingId = parts[parts.length - 1];
    const lookupId = !isNaN(Number(trailingId)) ? trailingId : idOrSlug;

    // 2. Fetch directly by ID/liveId from Admin
    try {
      const singleRes = await fetchFromAdmin<DbCounselor>(
        `/api/counsellors/${encodeURIComponent(lookupId)}`
      );
      if (
        singleRes.success &&
        singleRes.data &&
        isCounselorMatch(singleRes.data.name, singleRes.data.id, singleRes.data.liveId)
      ) {
        return mapDbCounselorToItem(singleRes.data);
      }
    } catch {
      // If direct ID lookup misses, fallback to searching all verified counsellors
    }

    // If lookupId differed from full idOrSlug, also try direct fetch with idOrSlug (e.g. cuid)
    if (lookupId !== idOrSlug) {
      try {
        const singleRes = await fetchFromAdmin<DbCounselor>(
          `/api/counsellors/${encodeURIComponent(idOrSlug)}`
        );
        if (
          singleRes.success &&
          singleRes.data &&
          isCounselorMatch(singleRes.data.name, singleRes.data.id, singleRes.data.liveId)
        ) {
          return mapDbCounselorToItem(singleRes.data);
        }
      } catch {}
    }

    // 3. Fallback: Search all verified counsellors
    const all = await getVerifiedCounselors();

    const matched =
      all.find((c) => c.slug.toLowerCase() === normalizedTarget) ||
      all.find((c) => {
        const nameSlug = slugify(c.name);
        return nameSlug && normalizedTarget.includes(nameSlug);
      }) ||
      all.find((c) => String(c.id) === lookupId && isCounselorMatch(c.name, String(c.id))) ||
      all.find((c) => String(c.id) === idOrSlug);

    return matched || null;
  } catch (error) {
    console.error(`Failed to fetch counsellor for ${idOrSlug}:`, error);
    return null;
  }
}
