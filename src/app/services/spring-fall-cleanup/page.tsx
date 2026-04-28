import type { Metadata } from "next";
import { Leaf } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Spring & Fall Cleanups | R&S Lawn Care",
  description:
    "Spring and fall cleanups plus weed-whack lawn cleanup across Spokane, Spokane Valley, Liberty Lake, Airway Heights, Medical Lake, and Cheney. Yard reset, top to bottom.",
};

export default function SpringFallCleanupPage() {
  return (
    <ServicePageTemplate
      title="Spring & Fall Cleanups"
      subtitle="Reset the yard at the start of the season and clear it out before winter — plus the weed-whack lawn cleanup that keeps it tight in between."
      heroImage="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80"
      icon={Leaf}
      description={[
        "Spring and fall are the two visits that set up the rest of the year. The spring cleanup clears winter debris off the lawn and beds, removes the leaves and sticks that piled up over the off-season, edges out the borders, and gets the property ready for healthy growth. The fall cleanup goes the other direction — leaves cleared off the turf, beds cut back, gutters checked, lawn put to bed before the first hard freeze.",
        "On top of the seasonal resets, we handle the lawn cleanup work that does not fit anywhere else: weed-whacking around the house, fence lines, foundations, and along the property edges. Anywhere the mower cannot reach is where this service kicks in. It keeps the yard looking maintained and gets ahead of the weeds before they take over the bed lines.",
        "Cleanups can run as a one-time job or on a recurring schedule that fits your property. Heavy tree cover? We will run multiple visits through the fall to keep up with the leaf drop. Big property with a lot of fence line? We will scope the weed-whack visits to match. Whatever the property needs, the crew shows up, knocks it out, and hauls everything off-site.",
      ]}
      features={[
        "Spring debris removal — leaves, sticks, winter litter",
        "Fall leaf cleanup — lawn, beds, walkways, hard surfaces",
        "Weed-whacking around foundations, fences, and property lines",
        "Bed cutbacks and perennial cleanup",
        "Edging — borders refreshed for a clean line",
        "Gutter clearing on accessible runs",
        "Multiple-visit plans for properties with heavy leaf drop",
        "All debris hauled off and disposed of",
      ]}
      gallery={[
        {
          src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
          alt: "Fall leaf cleanup in progress in the Spokane area",
        },
        {
          src: "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?w=800&q=80",
          alt: "Yard cleared after a spring cleanup by R&S Lawn Care",
        },
        {
          src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
          alt: "Property reset and ready after a seasonal cleanup",
        },
      ]}
      faqs={[
        {
          q: "When should I schedule the spring cleanup?",
          a: "Typically late March through April, once the snow is fully off and the ground has thawed enough to work the beds without compacting them. We will line up the visit with the weather window for your specific property.",
        },
        {
          q: "When does the fall cleanup happen?",
          a: "Mid-October through late November, depending on how the leaves fall in your neighborhood. For properties with heavy tree cover we recommend two or three visits across the season instead of waiting until everything is down — keeps the lawn healthier going into winter.",
        },
        {
          q: "What is the weed-whack lawn cleanup?",
          a: "Anywhere the mower cannot reach — around the house, the fence lines, along foundations, around posts and obstacles, the edges of the property. We use string trimmers and edgers to keep those zones clean so the whole yard reads as maintained, not just the open turf.",
        },
        {
          q: "Where do the leaves and debris go?",
          a: "Off the property. We do not blow them into the woods or pile them at the curb — everything we collect gets bagged or loaded and hauled off-site as part of the service.",
        },
      ]}
      relatedServices={[
        { title: "Lawn Mowing", href: "/services/lawn-mowing" },
        { title: "Shrub Trimming", href: "/services/shrub-trimming" },
        { title: "Fertilizer & Weed Control", href: "/services/fertilizer-weed-control" },
        { title: "Residential Landscaping", href: "/services/landscaping" },
      ]}
    />
  );
}
