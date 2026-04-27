import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import StickyCTABar from "@/components/StickyCTABar";
import ExitIntentModal from "@/components/ExitIntentModal";

export const metadata: Metadata = {
  title: {
    template: "%s | R&S Lawn Care",
    default: "R&S Lawn Care | Professional Lawn Care in Eastern Washington",
  },
  description:
    "R&S Lawn Care provides professional lawn mowing, shrub trimming, leaf cleanup, seasonal maintenance, and garden bed care across Eastern Washington. Serving Spokane, Tri-Cities, Yakima, Wenatchee, Moses Lake and more.",
  metadataBase: new URL("https://randslawncare.com"),
  openGraph: {
    title: "R&S Lawn Care | Professional Lawn Care in Eastern Washington",
    description:
      "Trusted lawn care services for Eastern Washington homeowners. Free quotes available.",
    type: "website",
  },
  other: {
    "theme-color": "#052E19",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "R&S Lawn Care",
  description:
    "Professional lawn care services for Eastern Washington including lawn mowing, shrub trimming, leaf cleanup, seasonal maintenance, and garden bed care.",
  telephone: "+1-509-822-9624",
  email: "randslawncare7@gmail.com",
  url: "https://randslawncare.com",
  areaServed: [
    "Spokane, WA",
    "Tri-Cities, WA",
    "Yakima, WA",
    "Wenatchee, WA",
    "Moses Lake, WA",
    "Ellensburg, WA",
    "Pullman, WA",
    "Cheney, WA",
    "Liberty Lake, WA",
    "Cle Elum, WA",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  priceRange: "$$",
  image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body text-fg bg-bg">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidget />
        <StickyCTABar />
        <ExitIntentModal />
      </body>
    </html>
  );
}
