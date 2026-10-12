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
export function mapDbCounselorToItem(
  item: DbCounselor,
  index = 0,
): CounselorItem {
  const numericId =
    parseInt(item.liveId || String(item.sNo || index + 1), 10) ||
    (item.sNo ?? index + 1);
  const designationSlug = item.designation ? slugify(item.designation) : "";
  const slug = `${slugify(item.name || "")}${designationSlug ? `-${designationSlug}` : ""}-${item.liveId || numericId}`;

  // Clean experience format
  let exp = item.experience || "";
  if (exp && !exp.toLowerCase().includes("year")) {
    exp = `${exp} years`;
  }

  // Clean image URL
  let img = (item.image || "").trim();
  if (img) {
    img = img
      .replace("/counsellor//", "/counsellor/")
      .replace("/counselor//", "/counselor/");
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
export async function getVerifiedCounselors(
  search?: string,
): Promise<CounselorItem[]> {
  try {
    const queryParams = new URLSearchParams();
    queryParams.set("status", "verified");
    queryParams.set("all", "true");
    if (search && search.trim()) {
      queryParams.set("search", search.trim());
    }

    const res = await fetchFromAdmin<DbCounselor[]>(
      `/api/counsellors?${queryParams.toString()}`,
    );

    if (!res.success || !Array.isArray(res.data)) {
      return [];
    }

    return res.data.map((c, idx) => mapDbCounselorToItem(c, idx));
  } catch (error) {
    console.error(
      "Failed to fetch verified counsellors from Admin API:",
      error,
    );
    return [];
  }
}

/**
 * Fetches a single counsellor by liveId, cuid, or slug from the Admin Panel API
 */
export async function getCounselorByIdOrSlug(
  idOrSlug: string,
): Promise<CounselorItem | null> {
  try {
    // 1. Try to extract trailing numeric ID if slug format (e.g. name-designation-639)
    const parts = idOrSlug.split("-");
    const trailingId = parts[parts.length - 1];
    const lookupId = !isNaN(Number(trailingId)) ? trailingId : idOrSlug;

    // 2. Fetch directly by ID/liveId from Admin
    try {
      const singleRes = await fetchFromAdmin<DbCounselor>(
        `/api/counsellors/${encodeURIComponent(lookupId)}`,
      );
      if (singleRes.success && singleRes.data) {
        return mapDbCounselorToItem(singleRes.data);
      }
    } catch {
      // If direct ID lookup misses, fallback to searching all verified counsellors
    }

    // 3. Fallback: Search all verified counsellors by slug match
    const all = await getVerifiedCounselors();
    const normalizedTarget = idOrSlug.toLowerCase();

    const matched =
      all.find((c) => c.slug === idOrSlug) ||
      all.find((c) => String(c.id) === lookupId) ||
      all.find((c) => normalizedTarget.includes(slugify(c.name)));

    return matched || null;
  } catch (error) {
    console.error(`Failed to fetch counsellor for ${idOrSlug}:`, error);
    return null;
  }
}
