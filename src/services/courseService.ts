import { fetchFromAdmin } from "./apiClient";
import { CourseItem, CourseDetailData } from "@/types/course";

export type { CourseItem, CourseDetailData };

export interface DbCourse {
  id: string;
  sNo?: number;
  liveId?: string;
  name: string;
  category?: string;
  slug: string;
  coverImage?: string;
  backgroundImage?: string;
  rating?: string | number;
  duration?: string;
  listDuration?: string;
  enrolment?: string;
  lessons?: string;
  nextBatchDate?: string;
  totalProgramFee?: string;
  totalDiscountFee?: string;
  subdescription?: string;
  position?: number;
  status: string;
  overviewCount?: number;
  learnCount?: number;
  credentialCount?: number;
  curriculumCount?: number;
}

function formatBatchDate(d?: string): string {
  if (!d) return "";
  try {
    const dt = new Date(d);
    if (isNaN(dt.getTime())) return d;
    return dt.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return d || "";
  }
}

function getBadge(category?: string) {
  const cat = (category || "").toLowerCase();
  if (cat.includes("master")) {
    return { badgeText: "Masters", badgeBg: "#2563eb" };
  }
  if (cat.includes("diploma")) {
    return { badgeText: "Diploma", badgeBg: "#7c3aed" };
  }
  if (cat.includes("internship")) {
    return { badgeText: "Internship", badgeBg: "#d97706" };
  }
  if (cat.includes("entrepreneur")) {
    return { badgeText: "Business", badgeBg: "#059669" };
  }
  if (cat.includes("certificate")) {
    return { badgeText: "Certificate", badgeBg: "#0891b2" };
  }
  return { badgeText: "CI", badgeBg: "#07a64b" };
}

function stripHtml(html: string = ""): string {
  return html
    .replace(/<[^>]*>?/gm, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function parseTopicsFromHtml(html?: string): string[] {
  if (!html) return [];
  const items = html.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
  if (items && items.length > 0) {
    return items
      .map((it) => stripHtml(it))
      .filter((it) => it.length > 0);
  }
  return parseTextToParagraphs(html);
}

function parseTextToParagraphs(input?: string): string[] {
  if (!input) return [];
  if (input.includes("<p>")) {
    const paras = input
      .split(/<\/p>|<br\s*\/?>/i)
      .map((p) => stripHtml(p))
      .filter((p) => p.length > 0);
    if (paras.length > 0) return paras;
  }
  return input
    .split(/\r?\n/)
    .map((p) => stripHtml(p))
    .filter((p) => p.length > 0);
}

function parseList(input?: string | string[]): string[] {
  if (!input) return [];
  if (Array.isArray(input)) return input.map((s) => stripHtml(String(s))).filter(Boolean);
  return input
    .split(/,|\r?\n/)
    .map((s) => stripHtml(s))
    .filter(Boolean);
}

export function mapDbToCourseDetail(c: any): CourseDetailData {
  const sNo = Number(c.liveId) || c.sNo || 1;
  const rawDesc = c.subdescription || c.aboutUs || c.description || "";
  const cleanDesc = stripHtml(rawDesc);

  const highlights = Array.isArray(c.headings)
    ? c.headings
        .map((h: any) => ({
          title: h.heading || "",
          desc: stripHtml(h.value || ""),
        }))
        .filter((h: any) => h.title || h.desc)
    : [];

  const benefits = Array.isArray(c.overviewData)
    ? c.overviewData
        .map((o: any) => stripHtml(o.title || ""))
        .filter(Boolean)
    : [];

  const about = parseTextToParagraphs(c.aboutUs || c.subdescription || c.description);

  const learningObjectives = Array.isArray(c.learnData)
    ? c.learnData
        .map((l: any) => stripHtml(l.title || ""))
        .filter(Boolean)
    : [];

  const credentials = Array.isArray(c.credentialData)
    ? c.credentialData
        .map((cr: any, idx: number) => {
          const descText = cr.description
            ? stripHtml(cr.description)
            : `Upon successful completion of the course, you will receive a verified certificate recognizing your skills and expertise in ${cr.title || c.name}.`;
          return {
            id: `tab${idx + 1}`,
            label: cr.title || "Certificate",
            text: descText,
            image: cr.image ? encodeURI(decodeURI(cr.image)) : "",
          };
        })
        .filter((cr: any) => cr.image || cr.label)
    : [];

  const curriculumStats = Array.isArray(c.cheadings)
    ? c.cheadings
        .map((ch: any) => ({
          count: ch.value || "",
          text: ch.heading || "",
        }))
        .filter((ch: any) => ch.count || ch.text)
    : [];

  let totalSessions = c.lessons || "";
  let totalHours = "";

  if (Array.isArray(c.cheadings)) {
    for (const ch of c.cheadings) {
      const headingLower = (ch.heading || "").toLowerCase();
      const valLower = (ch.value || "").toLowerCase();
      if (!totalSessions && (headingLower.includes("session") || valLower.includes("session"))) {
        totalSessions = `${ch.value} ${ch.heading}`;
      }
      if (!totalHours && (headingLower.includes("hour") || valLower.includes("hour"))) {
        totalHours = `${ch.value} ${ch.heading}`;
      }
    }
  }

  const curriculumModules = Array.isArray(c.curriculumData)
    ? c.curriculumData
        .map((m: any, idx: number) => {
          let topics: string[] = [];
          if (Array.isArray(m.topics) && m.topics.length > 0) {
            topics = m.topics.map((t: any) => stripHtml(String(t))).filter(Boolean);
          } else if (m.description) {
            topics = parseTopicsFromHtml(m.description);
          }
          return {
            title: m.title || `Module ${idx + 1}`,
            topics,
          };
        })
        .filter((m: any) => m.title)
    : [];

  const programBenefit = parseTextToParagraphs(c.howWillBenefit);
  const whoCanJoin = parseList(c.whoCanJoin);

  const bgImg = c.backgroundImage
    ? encodeURI(decodeURI(c.backgroundImage))
    : c.coverImage
    ? encodeURI(decodeURI(c.coverImage))
    : "";

  return {
    id: sNo,
    name: c.name,
    slug: c.slug,
    badgeSale: c.totalDiscountPercent ? `${c.totalDiscountPercent}% OFF` : undefined,
    category: c.category || "Course",
    bgImage: bgImg,
    partnerLogo: undefined,
    description: cleanDesc,
    rating: Number(c.rating) || 5,
    enrollUrl: c.paymentLink || "",
    phone: "+918031320449",
    highlights,
    benefits,
    about,
    learningObjectives,
    credentials,
    curriculum: {
      totalSessions: totalSessions || undefined,
      totalHours: totalHours || undefined,
      stats: curriculumStats,
      modules: curriculumModules,
    },
    programBenefit,
    whoCanJoin,
  };
}

/**
 * Fetches dynamic course detail directly from the Admin Panel API (PostgreSQL database).
 * Matches by slug or search, returning null if the course is not found.
 */
export async function getCourseBySlug(
  slug: string
): Promise<CourseDetailData | null> {
  const decodedSlug = decodeURIComponent(slug).trim();
  const cleanedSlug = decodedSlug.replace(/[\)%29]+$/, "").trim();

  const slugsToTry = Array.from(
    new Set([decodedSlug, slug, cleanedSlug, `${cleanedSlug})`])
  );

  for (const s of slugsToTry) {
    try {
      const raw = (await fetchFromAdmin<any>(
        `/api/courses/${encodeURIComponent(s)}`
      )) as any;
      const courseObj = (raw && raw.data) || raw;
      if (courseObj && courseObj.name && !courseObj.error) {
        return mapDbToCourseDetail(courseObj);
      }
    } catch {
      // Continue to next attempt
    }
  }

  try {
    const rawSearch = (await fetchFromAdmin<any>(
      `/api/courses?search=${encodeURIComponent(cleanedSlug)}&limit=1`
    )) as any;
    const list = rawSearch?.courses || rawSearch?.data || [];
    if (Array.isArray(list) && list.length > 0 && list[0]?.name) {
      return mapDbToCourseDetail(list[0]);
    }
  } catch {
    // Search failed
  }

  return null;
}

/**
 * Fetches active courses directly from the Admin Panel API (PostgreSQL database).
 */
export async function getActiveCourses(
  search?: string,
  category?: string
): Promise<CourseItem[]> {
  try {
    const queryParams = new URLSearchParams();
    queryParams.set("status", "Active");
    queryParams.set("limit", "100");
    if (search && search.trim()) {
      queryParams.set("search", search.trim());
    }
    if (category && category !== "all") {
      queryParams.set("category", category);
    }

    const res = await fetchFromAdmin<any>(
      `/api/courses?${queryParams.toString()}`
    );

    const rawRes = res as any;
    const courseList: DbCourse[] =
      (rawRes && (rawRes.courses || rawRes.data)) || [];

    if (!Array.isArray(courseList) || courseList.length === 0) {
      return [];
    }

    return courseList.map((c, idx) => {
      const sNo = Number(c.liveId) || c.sNo || idx + 1;
      const { badgeText, badgeBg } = getBadge(c.category);

      let desc = c.subdescription || "";
      desc = desc.replace(/\r\n/g, " ").replace(/\n/g, " ").trim();
      if (desc.length > 175) {
        desc = desc.slice(0, 172) + "...";
      }

      const coverImg = c.coverImage
        ? encodeURI(decodeURI(c.coverImage))
        : "";

      return {
        id: sNo,
        name: c.name,
        slug: c.slug,
        cover_image: coverImg,
        list_duration: c.listDuration || c.duration || "3 months",
        enrolment: c.enrolment ? `${c.enrolment} Seats Left` : "25 Seats Left",
        subdescription:
          desc ||
          "A professional psychology and counselling program designed to build clinical competencies and practical therapy skills.",
        badgeText,
        badgeBg,
        category: c.category || "General",
        rating: Number(c.rating) || 5,
        status: c.status || "Active",
        nextBatchDate: formatBatchDate(c.nextBatchDate),
        fee: c.totalDiscountFee || c.totalProgramFee || "",
      };
    });
  } catch (err) {
    console.warn("Failed to fetch active courses from Admin API:", err);
    return [];
  }
}
