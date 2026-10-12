import { fetchFromAdmin } from "./apiClient";
import { SiteSettingData } from "@/types/settings";

export const DEFAULT_SETTINGS: SiteSettingData = {
  title: "Counselindia",
  footer: "Counselindia",
  referWallet: "100",
  logo: "/assets/images/dark-logo.png",
  lightLogo: "/assets/images/dark-logo.png",
  favicon: "/favicon.ico",

  adminEmail: "admin@counselindia.com",
  supportEmail: "wecare@counselindiaservices.in",
  helplineNumber: "+919518241200",
  whatsNumber: "+918448519298",
  emergencyNumber: "+918930804054",
  companyName: "COUNSELINDIA SERVICES PRIVATE LIMITED",
  websiteLink: "https://www.counselindia.com",
  address: "12A20, 13th Floor, E-Square , Sector 96, Noida, Uttar Pradesh 201301",
  facebookLink: "https://www.facebook.com/counselindia/",
  linkedinLink: "https://www.linkedin.com/company/28905636/admin/",
  twitterLink: "https://twitter.com/counselindia1?lang=en",
  youtubeLink: "https://www.youtube.com/channel/UCWnALe3hLVdGJzVOuEgGoYg",
  pinterestLink: "https://in.pinterest.com/counselindia",

  contactUsMobile: "+91-9518241200",
  contactUsMail: "admissions@counselindiaservices.in",
  contactUsHotline: "+91-8930804054",
  contactUsHeadOffice: "12A20, 13th Floor , Sector-96, Noida, Uttar Pradesh, 201301",
  contactUsBranchOffice: "1. Evolve Work Studio , 3rd floor , Raj Pinnacle (Behind Teleradiology Solution) , Doddanekundi Industrial Area, Bangalore Karnataka - 560048\n2. Yesssworks Andheri, 3rd Floor, Ackruti Softech Park, Shree Krishna Nagar, Marol Midc Industry Estate, Andheri East, Mumbai, Maharashtra 400093",
  contactUsHoursOperation: "Monday - Friday: 09:00 - 20:00\nSunday & Saturday: 10:30 - 22:00",

  footerTitle: "Counsel India is the only practical e-learning platform for psychology and counselling programs in India.",
  footerCompanyName: "COUNSELINDIA SERVICES PRIVATE LIMITED",
  footerAddress: "12A20, 13th Floor, E-Square , Sector 96, Noida, Uttar Pradesh 201301",
  gstNumber: "09AAICC6447N1Z0",
  footerSupportEmail: "wecare@counselindiaservices.in",
  footerWhatsappNumber: "+918448519298",
  footerHelplineNumber: "+919518241200",
  footerTwitterLink: "https://twitter.com/counselindia1?lang=en",
  footerFbLink: "https://www.facebook.com/counselindia/",
  instaLink: "https://www.instagram.com/counsel_india_",
  footerYoutubeLink: "https://www.youtube.com/channel/UCWnALe3hLVdGJzVOuEgGoYg",
  footerLinkedinLink: "https://www.linkedin.com/company/28905636/admin/",
};

/**
 * Fetches dynamic site settings from Admin API with automatic revalidation and fallback.
 */
export async function getSiteSettings(): Promise<SiteSettingData> {
  try {
    const res = await fetchFromAdmin<SiteSettingData>("/api/settings", {
      next: { revalidate: 60 },
    });
    if (res.success && res.data) {
      return {
        ...DEFAULT_SETTINGS,
        ...res.data,
      };
    }
    return DEFAULT_SETTINGS;
  } catch (error) {
    console.warn("Could not fetch site settings from admin, using defaults:", error);
    return DEFAULT_SETTINGS;
  }
}
