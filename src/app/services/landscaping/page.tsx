import type { Metadata } from "next";
import { Flower2 } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Residential Landscaping | R&S Lawn Care",
  description:
    "Bush removal and planting, gardening maintenance, retaining walls, weed pulling, and bed work across Spokane, Spokane Valley, Liberty Lake, Airway Heights, Medical Lake, and Cheney.",
};

export default function LandscapingPage() {
  return (
    <ServicePageTemplate
      title="Residential Landscaping"
      subtitle="Bush removal and planting, gardening maintenance, retaining walls, and the hand-pulling work that keeps the beds clean."
      heroImage="https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?w=1920&q=80"
      icon={Flower2}
      description={[
        "Beyond the mowing and trimming, R&S Lawn Care handles the broader residential landscaping work that keeps a property looking its best. Bush removal and replanting when something needs to come out and something better needs to go in. Gardening maintenance through the season — deadheading, dividing, weeding, watering guidance. Bed work, edging, mulch refreshes, and the small stuff that adds up to a polished yard.",
        "We also build and rebuild retaining walls — the small block walls and timber walls that hold back beds, terrace a slope, or define an outdoor area. Bigger projects we'll scope honestly, and if it's outside our wheelhouse we'll tell you that too. The work we take, we do right.",
        "Hand-pulling weeds is part of every visit. Pre-emergents and herbicides have their place, but for the beds you can see from the front porch nothing beats getting in there by hand. We pull the weeds out, refresh the mulch, and reset the bed lines so the property reads as maintained — not just kept up.",
      ]}
      features={[
        "Bush and shrub removal — including stump and root work",
        "New plantings — shrubs, perennials, ornamentals",
        "Gardening maintenance — deadheading, dividing, watering plans",
        "Hand-pulling weeds throughout the beds",
        "Mulch installation and topdress refreshes",
        "Bed edging — crisp borders between lawn and bed",
        "Small retaining wall construction and rebuilds",
        "Honest scope on bigger projects — if it's outside our lane, we'll say so",
      ]}
      gallery={[
        {
          src: "https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?w=800&q=80",
          alt: "Well-maintained garden bed with fresh mulch",
        },
        {
          src: "https://images.unsplash.com/photo-1584479898061-15742e14f50d?w=800&q=80",
          alt: "Residential landscaping by R&S Lawn Care",
        },
        {
          src: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&q=80",
          alt: "Clean garden bed edges and healthy plantings",
        },
      ]}
      faqs={[
        {
          q: "Do you remove bushes and replace them with new plants?",
          a: "Yes. Bush removal — including the root work — is part of the service, and we'll plant the replacement at the same visit if you have something picked out. We can also recommend plants suited to the Spokane-area climate if you're not sure what you want yet.",
        },
        {
          q: "What kind of retaining walls do you build?",
          a: "Small block walls and timber walls — the kind that hold back a bed, terrace a slope, or define an outdoor area. We'll walk the project with you, give you an honest scope and price, and if it's bigger than what makes sense for our crew we'll say that.",
        },
        {
          q: "Is hand-weeding really necessary if I do weed-and-feed?",
          a: "For the lawn, weed-and-feed handles the broadleaf weeds. For the beds, hand-pulling is what actually keeps them clean — especially around perennials and ornamentals where you can't broadcast herbicide. They're complementary, not interchangeable.",
        },
        {
          q: "How often do you maintain garden beds?",
          a: "Every two to four weeks during the growing season is the sweet spot. The exact frequency depends on bed size, plant types, and how fast the weeds come back. We'll recommend a schedule that keeps things tight without over-servicing.",
        },
      ]}
      relatedServices={[
        { title: "Lawn Mowing", href: "/services/lawn-mowing" },
        { title: "Shrub Trimming", href: "/services/shrub-trimming" },
        { title: "Spring & Fall Cleanups", href: "/services/spring-fall-cleanup" },
        { title: "Fertilizer & Weed Control", href: "/services/fertilizer-weed-control" },
      ]}
    />
  );
}
