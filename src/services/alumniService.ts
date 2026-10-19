import { fetchFromAdmin } from "./apiClient";
import { LearnerItem } from "@/types/alumni";

export interface DbAlumni {
  id: string;
  sNo?: number;
  name: string;
  email: string;
  mobile: string;
  programName: string;
  certificateNumber?: string;
  certificateUrl?: string;
  profession?: string;
  skills?: string;
  image?: string;
  isOnline: boolean;
  status: string;
  isApproved: boolean;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Fetches active alumni directory from the Admin Panel API
 * and maps it into the standard LearnerItem interface.
 */
export async function getActiveAlumni(search?: string): Promise<LearnerItem[]> {
  const queryParams = new URLSearchParams();
  queryParams.set("status", "Active");
  if (search && search.trim()) {
    queryParams.set("search", search.trim());
  }

  const res = await fetchFromAdmin<DbAlumni[]>(`/api/alumni?${queryParams.toString()}`);

  if (!res.success || !Array.isArray(res.data)) {
    return [];
  }

  return res.data.map((item, idx) => {
    const sNo = item.sNo ?? idx + 1;
    const certNumber = item.certificateNumber ?? String(sNo);
    return {
      id: sNo,
      name: item.name,
      programname: item.programName,
      rci_number: certNumber,
      profession: item.profession,
      skills: item.skills ?? "",
      image: item.image,
    };
  });
}
