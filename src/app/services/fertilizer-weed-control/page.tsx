import type { Metadata } from "next";
import { Sprout } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Fertilizer & Weed Control | R&S Lawn Care",
  description:
    "Seasonal and winterized fertilizer applications, plus weed and feed across Spokane, Spokane Valley, Liberty Lake, Airway Heights, Medical Lake, and Cheney.",
};

export default function FertilizerWeedControlPage() {
  return (
    <ServicePageTemplate
      title="Fertilizer & Weed Control"
      subtitle="Seasonal and winterized fertilizer applications, plus weed-and-feed treatments — for a thicker, greener, weed-free lawn."
      heroImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
      icon={Sprout}
      description={[
        "A lawn that looks great all season starts under the surface. R&S Lawn Care runs a fertilization program built around the Spokane-area calendar — feeding the turf when it actually wants to grow, easing off when the heat hits, and sending it into winter with the right nutrients in the root zone. Standard rotation is three to four applications a year, timed to the season.",
        "Weed and feed handles the grass and the weeds in one pass. The fertilizer drives blade growth and color, while the herbicide knocks out broadleaf weeds — dandelions, clover, chickweed, plantain — before they take over. We adjust the product mix by season and by what the lawn is actually battling, not a one-size schedule.",
        "The winterization application is the one most homeowners skip and shouldn't. Late-fall fertilizer goes into the roots instead of the blades, which is exactly where you want the energy stored over the cold months. The lawn that gets a winterized feed comes back stronger, greener, and earlier in the spring than the one that doesn't. We build that into every annual program.",
      ]}
      features={[
        "Spring fertilizer — wake-up application for early growth",
        "Summer feed — adjusted for heat-stress conditions",
        "Fall fertilizer — recovery and root prep",
        "Winterized late-fall application — stored energy for spring",
        "Weed and feed — broadleaf control plus turf nutrition",
        "Pre-emergent treatments to stop weeds before they sprout",
        "Application schedule tailored to your soil and grass type",
        "Honest recommendations — no upselling treatments you do not need",
      ]}
      gallery={[
        {
          src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
          alt: "Healthy fertilized lawn in the Spokane area",
        },
        {
          src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
          alt: "Thick green turf after fertilizer application",
        },
        {
          src: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80",
          alt: "Lush lawn from a season of fertilizer and weed control",
        },
      ]}
      faqs={[
        {
          q: "How many fertilizer applications does a Spokane-area lawn need?",
          a: "Three to four per year is the sweet spot — a spring wake-up application, a summer feed adjusted for the heat, a fall recovery application, and a late-fall winterized treatment. Skipping the winterizer is the most common mistake.",
        },
        {
          q: "What is weed and feed and when do you apply it?",
          a: "Weed and feed combines fertilizer with a broadleaf herbicide in a single pass. We typically run it in late spring and early fall when the weeds are actively growing — that is when the herbicide actually does the work. Timing it wrong wastes product.",
        },
        {
          q: "Why is the winterized application important?",
          a: "Late-fall fertilizer gets stored in the roots instead of pushing blade growth. That stored energy is what fuels early spring green-up. Lawns that get winterized come back thicker, greener, and a week or two earlier than ones that do not.",
        },
        {
          q: "Do you treat for crabgrass and other annual weeds?",
          a: "Yes — pre-emergent treatments in early spring are the cleanest way to handle crabgrass. Catch it before it sprouts and you save yourself a fight all summer. We will assess the lawn and recommend whether pre-emergent makes sense for your property.",
        },
      ]}
      relatedServices={[
        { title: "Lawn Mowing", href: "/services/lawn-mowing" },
        { title: "Shrub Trimming", href: "/services/shrub-trimming" },
        { title: "Spring & Fall Cleanups", href: "/services/spring-fall-cleanup" },
        { title: "Residential Landscaping", href: "/services/landscaping" },
      ]}
    />
  );
}
