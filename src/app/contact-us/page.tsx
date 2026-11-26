import { Metadata } from "next";
import ContactUsView from "@/components/contact/ContactUsView";
import { pageMetadata } from "@/services/pageSeoService";

const fallbackMetadata: Metadata = {
  title: "Contact Us | Counsel India",
  description:
    "Get in touch with Counsel India. Have questions or need assistance? Fill out our contact form and our Success Manager will reach out within 24 hours.",
  openGraph: {
    title: "Contact Us | Counsel India",
    description:
      "Get in touch with Counsel India. Have questions or need assistance? Fill out our contact form and our Success Manager will reach out within 24 hours.",
    url: "https://counselindia.com/contact-us",
    type: "website",
  },
};

// SEO from Admin → Page SEO; the values above are used when nothing is saved there.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/contact-us", fallbackMetadata);
}

export default function ContactUsPage() {
  return <ContactUsView />;
}
