import type { Metadata } from "next";
import { Leaf } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Leaf Cleanup | R&S Lawn Care",
  description:
    "Professional fall leaf cleanup and removal services in Eastern Washington. R&S Lawn Care clears lawns, beds, and gutters across Spokane, Tri-Cities, Yakima, and more.",
};

export default function LeafCleanupPage() {
  return (
    <ServicePageTemplate
      title="Leaf Cleanup"
      subtitle="Thorough fall leaf removal that protects your lawn, clears your beds, and keeps your property looking pristine."
      heroImage="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80"
      icon={Leaf}
      description={[
        "Fall in Eastern Washington means beautiful colors — and mountains of leaves. Left unattended, fallen leaves smother your lawn, block sunlight, trap moisture, and create the perfect conditions for fungal disease and pest infestations. R&S Lawn Care provides thorough leaf cleanup services that remove every last leaf from your lawn, garden beds, walkways, and hard surfaces so your property enters winter in top condition.",
        "Our crew uses a combination of commercial-grade backpack blowers, lawn vacuums, and rakes to handle properties of all sizes efficiently. We do not just blow leaves around — we collect and haul them away. For properties with heavy tree cover, we offer multiple visits throughout the fall season to keep pace with ongoing leaf drop, so your yard never gets buried.",
        "Leaf cleanup is about more than aesthetics. Removing leaves before winter protects your turf from suffocation and snow mold, prevents clogged gutters and drainage issues, and gives your lawn the best possible start when spring arrives. Our service is available as a one-time deep cleanup or as part of a recurring fall schedule tailored to your property's needs.",
      ]}
      features={[
        "Complete leaf removal from lawn, beds, and walks",
        "Commercial-grade blowers and vacuum equipment",
        "Gutter clearing to prevent drainage issues",
        "Multiple visit plans for heavy leaf-drop properties",
        "Hauling and disposal of all collected debris",
        "Garden bed leaf extraction without disturbing plants",
        "Hard surface blowdown — driveways, patios, porches",
        "Pre-winter lawn preparation and final cleanup",
      ]}
      gallery={[
        {
          src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
          alt: "Fall leaf cleanup in progress in Eastern Washington",
        },
        {
          src: "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?w=800&q=80",
          alt: "Clean lawn after professional leaf removal",
        },
        {
          src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
          alt: "Pristine yard after R&S Lawn Care leaf cleanup",
        },
      ]}
      faqs={[
        {
          q: "When should I schedule fall leaf cleanup?",
          a: "We typically begin leaf cleanup services in mid-October and continue through late November, depending on weather conditions. For properties with many deciduous trees, we recommend scheduling multiple visits to keep up with ongoing leaf drop rather than waiting until all leaves have fallen.",
        },
        {
          q: "Do you remove leaves from garden beds?",
          a: "Yes, we carefully extract leaves from garden beds without disturbing your plants or mulch. A thin layer of leaves can actually benefit certain beds, so we will discuss your preferences and adjust our approach accordingly.",
        },
        {
          q: "What happens to the leaves you collect?",
          a: "All collected leaves are hauled away from your property. We handle the disposal so you do not have to worry about bagging, composting, or finding a drop-off location. Everything is removed and your property is left clean.",
        },
        {
          q: "Can leaf cleanup be combined with other fall services?",
          a: "Absolutely. Many clients pair leaf cleanup with our seasonal maintenance package, which includes fall aeration, overseeding, and winterization. Bundling services saves time and ensures your property is fully prepared for the colder months.",
        },
      ]}
      relatedServices={[
        { title: "Lawn Mowing", href: "/services/lawn-mowing" },
        { title: "Shrub Trimming", href: "/services/shrub-trimming" },
        { title: "Seasonal Maintenance", href: "/services/seasonal-maintenance" },
        { title: "Garden Bed Care", href: "/services/garden-bed-care" },
      ]}
    />
  );
}
