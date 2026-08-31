import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Counsel India - Online Psychology Courses & Therapy",
  description: "Counsel India is the best place for Online psychology & psychology therapist. Get an internship in psychology from a top psychologist in India and a career as a psychologist in India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-js">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon_new.png" />
        <link rel="stylesheet" href="/assets/css/vendor/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/edumall-icon.css" />
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        
        <link rel="stylesheet" href="/assets/css/plugins/aos.css" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/perfect-scrollbar.css" />
        <link rel="stylesheet" href="/assets/css/plugins/jquery.powertip.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/glightbox.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/flatpickr.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/ion.rangeSlider.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/select2.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.8/css/intlTelInput.css" />
        
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/style2.css" />
        <link rel="stylesheet" href="/assets/css/user.min.css" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <MobileBottomNav />
        <FloatingContactButtons />
        
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/plugins/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/aos.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/glightbox.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/perfect-scrollbar.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/jquery.powertip.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/flatpickr.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/parallax.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/masonry.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/nice-select.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/imagesloaded.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/jquery.sticky-kit.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/select2.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/range-slider.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
