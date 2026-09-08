import { Metadata } from "next";
import ContactUsView from "@/components/contact/ContactUsView";

export const metadata: Metadata = {
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

export default function ContactUsPage() {
  return <ContactUsView />;
}
