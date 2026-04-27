import type { Metadata } from "next";
import { Calendar } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Seasonal Maintenance | R&S Lawn Care",
  description:
    "Year-round seasonal lawn maintenance in Eastern Washington. R&S Lawn Care provides spring cleanup, summer care, fall prep, and winterization across Spokane, Tri-Cities, and more.",
};

export default function SeasonalMaintenancePage() {
  return (
    <ServicePageTemplate
      title="Seasonal Maintenance"
      subtitle="Year-round care packages that keep your Eastern Washington landscape healthy through every season."
      heroImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
      icon={Calendar}
      description={[
        "Eastern Washington properties face dramatic seasonal shifts — from freezing winters to scorching summers. Each season demands specific care to keep your lawn and landscape thriving. R&S Lawn Care offers comprehensive seasonal maintenance packages that address every phase of the year, so your property always looks its best and your turf stays healthy no matter what the weather brings.",
        "Our spring program includes debris removal, dethatching, aeration, overseeding, and the first fertilizer application of the year to jumpstart healthy growth. Summer maintenance focuses on proper mowing schedules, watering guidance, spot treatments, and weed management during the hottest months. As fall arrives, we transition into leaf cleanup, final fertilization, and winterization tasks that prepare your landscape for dormancy.",
        "The advantage of a seasonal maintenance plan is consistency. Instead of scrambling to address problems after they appear, your property receives proactive care at the right time. Our team tracks your property's condition throughout the year and adjusts the service plan as needed. The result is a landscape that improves year after year with less stress and fewer surprises for you.",
      ]}
      features={[
        "Spring cleanup and debris removal",
        "Core aeration and overseeding",
        "Seasonal fertilization programs",
        "Dethatching and soil conditioning",
        "Summer weed and pest management",
        "Fall leaf cleanup and winterization",
        "Irrigation system guidance and monitoring",
        "Year-round property health assessments",
      ]}
      gallery={[
        {
          src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
          alt: "Seasonally maintained landscape in Eastern Washington",
        },
        {
          src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
          alt: "Healthy lawn after spring seasonal maintenance",
        },
        {
          src: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80",
          alt: "Year-round lawn care results by R&S Lawn Care",
        },
      ]}
      faqs={[
        {
          q: "What does the seasonal maintenance package include?",
          a: "Our package is tailored to the Eastern Washington climate and covers spring cleanup and aeration, summer mowing and weed management, fall leaf cleanup and fertilization, and winter preparation. The exact services are adjusted based on your property's specific needs and turf type.",
        },
        {
          q: "Is seasonal maintenance more cost-effective than individual services?",
          a: "Yes, bundling seasonal services into a maintenance plan typically saves 10-15 percent compared to booking individual services separately. You also benefit from proactive scheduling, which prevents costly problems before they develop.",
        },
        {
          q: "How do you handle Eastern Washington's hot, dry summers?",
          a: "We adjust mowing height, frequency, and techniques during the summer months to reduce turf stress. We also provide watering recommendations tailored to your soil and grass type, and monitor for signs of heat damage or drought stress during every visit.",
        },
        {
          q: "When does the seasonal maintenance cycle begin?",
          a: "We typically kick off spring services in March or early April, depending on weather conditions. However, you can join the program at any time during the year. We will assess your property's current condition and build a plan from wherever you are in the season.",
        },
      ]}
      relatedServices={[
        { title: "Lawn Mowing", href: "/services/lawn-mowing" },
        { title: "Shrub Trimming", href: "/services/shrub-trimming" },
        { title: "Leaf Cleanup", href: "/services/leaf-cleanup" },
        { title: "Garden Bed Care", href: "/services/garden-bed-care" },
      ]}
    />
  );
}
