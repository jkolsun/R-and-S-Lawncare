import type { Metadata } from "next";
import { TreePine } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Shrub Trimming | R&S Lawn Care",
  description:
    "Expert shrub and hedge trimming across Spokane, Spokane Valley, Liberty Lake, Airway Heights, Medical Lake, and Cheney. Clean lines and healthy growth from R&S Lawn Care.",
};

export default function ShrubTrimmingPage() {
  return (
    <ServicePageTemplate
      title="Shrub Trimming"
      subtitle="Clean lines, healthy growth, and tidy beds — hedges and shrubs maintained the way they should be."
      heroImage="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920&q=80"
      icon={TreePine}
      description={[
        "Well-maintained shrubs and hedges set the tone for the rest of the property. R&S Lawn Care provides professional shrub trimming across the Spokane area — power trimming for hedge rows and large bushes, hand shears for the detail work and specialty plants, and a clean sweep of the beds when we are done.",
        "Overgrown shrubs do more than look messy. They block windows, hang over walkways, trap moisture, and develop dead interior wood that weakens the plant over time. Regular trimming opens up airflow, lets sunlight reach the inside branches, and encourages healthy new growth. We time our trims around each plant's growth cycle so we are cutting when it actually helps.",
        "Whether it is foundation plantings around the house, a privacy hedge along a property line, or flowering bushes that need shape without losing the bloom, our crew has it covered. Schedule a one-time cleanup or put us on a recurring rotation that hits two to three times a season.",
      ]}
      features={[
        "Precision shaping of hedges, bushes, and ornamental shrubs",
        "Hand-shearing for specialty and delicate plants",
        "Power trimming for large hedge rows and property borders",
        "Removal of dead, damaged, and crossing branches",
        "Foundation planting maintenance",
        "Privacy hedge shaping and height management",
        "Complete debris cleanup and bed sweep after every visit",
        "Seasonal timing based on each plant's growth cycle",
      ]}
      gallery={[
        {
          src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
          alt: "Neatly trimmed shrubs in the Spokane area",
        },
        {
          src: "https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?w=800&q=80",
          alt: "Professional hedge trimming by R&S Lawn Care",
        },
        {
          src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
          alt: "Well-maintained landscape with shaped shrubs",
        },
      ]}
      faqs={[
        {
          q: "How often should shrubs be trimmed?",
          a: "Most shrubs benefit from two to three trims per year — typically late spring after the first flush of growth, mid-summer to keep the shape, and early fall before dormancy. Faster-growing species may need more frequent attention.",
        },
        {
          q: "Will trimming hurt my flowering shrubs?",
          a: "Not when it is timed right. Spring-blooming shrubs get trimmed after they flower; summer-blooming varieties get trimmed in late winter or early spring. Done correctly, you never lose a season of blooms.",
        },
        {
          q: "Do you handle severely overgrown shrubs?",
          a: "Yes. We offer renovation pruning for shrubs that have been neglected — usually a more aggressive cut spread over one or two seasons to restore the shape and health. We will walk it with you and give you straight recommendations before any cutting starts.",
        },
        {
          q: "Is debris cleanup included?",
          a: "Always. We rake out the beds, blow off the hard surfaces, and haul the clippings off-site. You should not have to touch a thing after we leave.",
        },
      ]}
      relatedServices={[
        { title: "Lawn Mowing", href: "/services/lawn-mowing" },
        { title: "Spring & Fall Cleanups", href: "/services/spring-fall-cleanup" },
        { title: "Fertilizer & Weed Control", href: "/services/fertilizer-weed-control" },
        { title: "Residential Landscaping", href: "/services/landscaping" },
      ]}
    />
  );
}
