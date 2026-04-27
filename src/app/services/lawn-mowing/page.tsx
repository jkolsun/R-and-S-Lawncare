import type { Metadata } from "next";
import { Scissors } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Lawn Mowing | R&S Lawn Care",
  description:
    "Professional lawn mowing services in Eastern Washington. R&S Lawn Care delivers consistent, clean cuts for residential and commercial properties in Spokane, Tri-Cities, and beyond.",
};

export default function LawnMowingPage() {
  return (
    <ServicePageTemplate
      title="Lawn Mowing"
      subtitle="Consistent, clean cuts that keep your Eastern Washington property looking its best all season long."
      heroImage="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80"
      icon={Scissors}
      description={[
        "At R&S Lawn Care, our lawn mowing service is the foundation of a well-maintained property. We use commercial-grade mowers and precision equipment to deliver a clean, even cut on every visit. Whether your lawn is a compact residential yard or a sprawling commercial property, our experienced crew adjusts mowing height and technique to match your turf type and the current season for optimal health and appearance.",
        "Eastern Washington lawns face unique challenges — intense summer heat, dry conditions, and rapid spring growth. Our team understands these seasonal patterns and adapts mowing schedules accordingly. We offer weekly and bi-weekly plans so your lawn stays at the ideal height without stress-cutting, which can damage grass and invite weeds or disease.",
        "Every mowing visit includes more than just cutting the grass. We edge along sidewalks, driveways, and garden beds for a crisp, finished look. Clippings are either mulched back into the lawn to return nutrients to the soil or bagged and removed based on your preference. The result is a lawn that looks professionally maintained from every angle, every time.",
      ]}
      features={[
        "Precision mowing with commercial-grade equipment",
        "Adjustable cutting heights for seasonal conditions",
        "Crisp edging along sidewalks and driveways",
        "Mulching or bagging clippings per your preference",
        "Weekly and bi-weekly scheduling options",
        "Trimming around obstacles, fences, and beds",
        "Consistent stripe patterns for a professional look",
        "Post-mow blowdown of walkways and driveways",
      ]}
      gallery={[
        {
          src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
          alt: "Freshly mowed lawn with clean striping in Spokane",
        },
        {
          src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
          alt: "Lush green lawn maintained by R&S Lawn Care",
        },
        {
          src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
          alt: "Well-maintained residential lawn in Eastern Washington",
        },
      ]}
      faqs={[
        {
          q: "How often should my lawn be mowed in Eastern Washington?",
          a: "During the peak growing season (May through September), we recommend weekly mowing. In spring and fall, bi-weekly service is typically sufficient. We adjust the schedule based on growth rates and weather conditions to keep your lawn at its best.",
        },
        {
          q: "What mowing height do you use?",
          a: "We adjust mowing height based on your grass type and the season. For most Eastern Washington lawns, we maintain a height of 2.5 to 3.5 inches. Taller heights are used during hot summer months to promote root health and reduce water stress.",
        },
        {
          q: "Do you edge as part of the mowing service?",
          a: "Yes, every mowing visit includes edging along sidewalks, driveways, and garden bed borders. We also trim around obstacles like fences, posts, and trees, and blow off all hard surfaces when we are done.",
        },
        {
          q: "Can I switch between weekly and bi-weekly service?",
          a: "Absolutely. Many of our clients start with weekly service during peak summer months and transition to bi-weekly in spring and fall. We are flexible and will work with you to find the schedule that makes the most sense for your lawn and budget.",
        },
      ]}
      relatedServices={[
        { title: "Shrub Trimming", href: "/services/shrub-trimming" },
        { title: "Leaf Cleanup", href: "/services/leaf-cleanup" },
        { title: "Seasonal Maintenance", href: "/services/seasonal-maintenance" },
        { title: "Garden Bed Care", href: "/services/garden-bed-care" },
      ]}
    />
  );
}
