import type { Metadata } from "next";
import { TreePine } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Shrub Trimming | R&S Lawn Care",
  description:
    "Expert shrub trimming and hedge shaping services across Eastern Washington. R&S Lawn Care keeps your shrubs healthy, shaped, and looking their best in Spokane, Tri-Cities, and beyond.",
};

export default function ShrubTrimmingPage() {
  return (
    <ServicePageTemplate
      title="Shrub Trimming"
      subtitle="Expert trimming and shaping to keep your hedges, bushes, and ornamental shrubs looking polished and healthy."
      heroImage="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920&q=80"
      icon={TreePine}
      description={[
        "Well-maintained shrubs and hedges can transform the look of any property. R&S Lawn Care provides professional shrub trimming services that keep your landscaping looking sharp, healthy, and intentional. Our crew uses a combination of power trimmers and hand shears to achieve clean lines and natural shapes, depending on the species and your aesthetic preferences.",
        "Overgrown shrubs do more than just look untidy — they can block windows, encroach on walkways, harbor pests, and develop dead interior wood that weakens the plant over time. Regular trimming promotes airflow, sunlight penetration, and vigorous new growth. We time our trimming services based on each plant's growth cycle to ensure we are cutting at the right moment for optimal health.",
        "Our shrub trimming service covers everything from foundation plantings and privacy hedges to ornamental topiaries and flowering bushes. We clean up all debris after every visit, leaving your beds and walkways spotless. Whether you need a one-time cleanup or recurring seasonal trimming, R&S Lawn Care has you covered across all of Eastern Washington.",
      ]}
      features={[
        "Precision shaping of hedges and ornamental shrubs",
        "Hand-shearing for delicate or specialty plants",
        "Power trimming for large hedge rows and borders",
        "Removal of dead, damaged, and crossing branches",
        "Foundation planting maintenance",
        "Complete debris cleanup after every visit",
        "Seasonal timing based on plant growth cycles",
        "Privacy hedge shaping and height management",
      ]}
      gallery={[
        {
          src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
          alt: "Neatly trimmed shrubs and hedges in Eastern Washington",
        },
        {
          src: "https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?w=800&q=80",
          alt: "Professional hedge trimming by R&S Lawn Care",
        },
        {
          src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
          alt: "Well-maintained landscape with trimmed shrubs",
        },
      ]}
      faqs={[
        {
          q: "How often should shrubs be trimmed?",
          a: "Most shrubs in Eastern Washington benefit from trimming two to three times per year — typically in late spring after the first flush of growth, mid-summer to maintain shape, and in early fall before dormancy. Some fast-growing species may need more frequent attention.",
        },
        {
          q: "Will trimming harm my flowering shrubs?",
          a: "Not when done correctly. We time trimming based on each species' bloom cycle. Spring-blooming shrubs are trimmed after they flower, while summer-blooming varieties are trimmed in late winter or early spring. This ensures you never lose a season of blooms.",
        },
        {
          q: "Do you handle severely overgrown shrubs?",
          a: "Yes, we offer renovation pruning for shrubs that have been neglected. This may involve more aggressive cutting back over one or two seasons to restore shape and health. We will assess the situation and give you honest recommendations before starting.",
        },
        {
          q: "Is debris cleanup included?",
          a: "Absolutely. Every shrub trimming visit includes full cleanup. We collect all clippings, rake the surrounding beds, and blow off any hard surfaces. You will not have to lift a finger after we leave.",
        },
      ]}
      relatedServices={[
        { title: "Lawn Mowing", href: "/services/lawn-mowing" },
        { title: "Leaf Cleanup", href: "/services/leaf-cleanup" },
        { title: "Seasonal Maintenance", href: "/services/seasonal-maintenance" },
        { title: "Garden Bed Care", href: "/services/garden-bed-care" },
      ]}
    />
  );
}
