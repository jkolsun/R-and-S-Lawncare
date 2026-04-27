import type { Metadata } from "next";
import { Flower2 } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Garden Bed Care | R&S Lawn Care",
  description:
    "Professional garden bed maintenance in Eastern Washington. R&S Lawn Care provides weeding, mulching, edging, and bed care across Spokane, Tri-Cities, Yakima, and beyond.",
};

export default function GardenBedCarePage() {
  return (
    <ServicePageTemplate
      title="Garden Bed Care"
      subtitle="Comprehensive garden bed maintenance that keeps your beds tidy, healthy, and beautifully complementing your lawn."
      heroImage="https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?w=1920&q=80"
      icon={Flower2}
      description={[
        "Garden beds are a focal point of any well-designed landscape, but they require consistent care to look their best. R&S Lawn Care provides comprehensive garden bed maintenance that covers weeding, mulching, edging, soil amendment, and plant health monitoring. Our team keeps your beds clean, vibrant, and perfectly integrated with the rest of your landscape throughout the growing season.",
        "Weeds are the number one enemy of attractive garden beds. Left unchecked, they compete with your plants for water and nutrients, eventually taking over. Our team performs thorough hand-weeding during every visit and applies pre-emergent treatments when appropriate to keep weeds from returning. Combined with fresh mulch applications, your beds will stay clean and weed-free with minimal effort on your part.",
        "Beyond weeding and mulching, we provide bed edging to maintain crisp borders between your lawn and garden areas. We monitor plant health, remove spent blooms, and flag any issues like disease or pest problems before they spread. Whether you have a few foundation beds or an extensive garden, R&S Lawn Care delivers the detailed attention your beds deserve across all of Eastern Washington.",
      ]}
      features={[
        "Thorough hand-weeding and weed prevention",
        "Fresh mulch application and topdressing",
        "Crisp bed edging and border definition",
        "Soil amendment and conditioning",
        "Deadheading and spent bloom removal",
        "Plant health monitoring and disease detection",
        "Seasonal bed cleanup — spring and fall",
        "New plant installation support and guidance",
      ]}
      gallery={[
        {
          src: "https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?w=800&q=80",
          alt: "Well-maintained garden bed with fresh mulch",
        },
        {
          src: "https://images.unsplash.com/photo-1584479898061-15742e14f50d?w=800&q=80",
          alt: "Colorful garden bed cared for by R&S Lawn Care",
        },
        {
          src: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&q=80",
          alt: "Clean garden bed edges and healthy plantings",
        },
      ]}
      faqs={[
        {
          q: "How often do you service garden beds?",
          a: "We recommend garden bed maintenance every two to four weeks during the growing season (April through October). The exact frequency depends on the size of your beds, the types of plants, and how quickly weeds tend to return. We will recommend a schedule that keeps your beds looking great without over-servicing.",
        },
        {
          q: "Do you provide mulch, or do I need to supply it?",
          a: "We provide and install mulch as part of our garden bed care service. We use high-quality bark mulch that suppresses weeds, retains moisture, and gives your beds a polished appearance. If you have a specific mulch preference, we are happy to accommodate.",
        },
        {
          q: "Can you help with planting new flowers or shrubs?",
          a: "While our core service focuses on bed maintenance, we can assist with light planting and offer guidance on plant selection suited to Eastern Washington's climate. For larger planting projects, we will provide an honest assessment and recommendation.",
        },
        {
          q: "What is included in the spring bed cleanup?",
          a: "Spring bed cleanup includes removing winter debris and dead plant material, cutting back perennials, initial weeding, edging the borders, turning and amending the soil as needed, and applying a fresh layer of mulch. It sets your beds up for a strong, healthy growing season.",
        },
      ]}
      relatedServices={[
        { title: "Lawn Mowing", href: "/services/lawn-mowing" },
        { title: "Shrub Trimming", href: "/services/shrub-trimming" },
        { title: "Leaf Cleanup", href: "/services/leaf-cleanup" },
        { title: "Seasonal Maintenance", href: "/services/seasonal-maintenance" },
      ]}
    />
  );
}
