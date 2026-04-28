import type { Metadata } from "next";
import { Scissors } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Lawn Mowing | R&S Lawn Care",
  description:
    "Professional lawn mowing in Spokane, Spokane Valley, Liberty Lake, Airway Heights, Medical Lake, and Cheney. Consistent, clean cuts every visit from R&S Lawn Care.",
};

export default function LawnMowingPage() {
  return (
    <ServicePageTemplate
      title="Lawn Mowing"
      subtitle="Consistent, clean cuts that keep your Spokane-area property looking sharp every week."
      heroImage="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80"
      icon={Scissors}
      description={[
        "Lawn mowing is the foundation of a well-maintained property, and at R&S Lawn Care we treat it that way. Our crew uses commercial-grade mowers and a steady weekly route across Spokane, Spokane Valley, Liberty Lake, Airway Heights, Medical Lake, and Cheney — so your yard stays at the right height with clean, even lines from spring all the way through fall.",
        "Spokane-area lawns deal with rapid spring growth, hot dry summers, and a short fall window. We adjust mowing height and frequency by season — taller in summer to protect the roots, tighter in spring and fall to keep the grass healthy without stress-cutting. Weekly and bi-weekly schedules available.",
        "Every visit includes more than just cutting the grass. We edge along sidewalks, driveways, and bed borders, trim around fences and obstacles, and blow off the hard surfaces when we are done. Mulch the clippings or bag them — your call. The result is a yard that looks like someone took care of it, every time.",
      ]}
      features={[
        "Precision mowing with commercial-grade equipment",
        "Adjustable cutting heights for seasonal conditions",
        "Crisp edging along sidewalks, driveways, and bed borders",
        "String-trimming around fences, posts, and obstacles",
        "Mulching or bagging clippings — your preference",
        "Blowdown of walkways, driveways, and patios",
        "Weekly and bi-weekly scheduling",
        "Same crew, same day, every visit",
      ]}
      gallery={[
        {
          src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
          alt: "Freshly mowed lawn in Spokane, WA",
        },
        {
          src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
          alt: "Lush green lawn maintained by R&S Lawn Care",
        },
        {
          src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
          alt: "Clean residential lawn cut in Spokane Valley",
        },
      ]}
      faqs={[
        {
          q: "How often should my lawn be mowed in the Spokane area?",
          a: "During peak growing season (May through September), weekly mowing is the standard. In spring and fall, bi-weekly service is usually sufficient. We adjust the schedule based on growth and weather to keep your lawn at its best.",
        },
        {
          q: "What mowing height do you use?",
          a: "We adjust mowing height based on grass type and season. For most Spokane-area lawns, we maintain 2.5 to 3.5 inches. Taller heights during the hot summer months protect the root system and reduce water stress.",
        },
        {
          q: "Do you edge as part of the mowing service?",
          a: "Every visit includes edging along sidewalks, driveways, and bed borders, plus trimming around obstacles. We finish by blowing off all the hard surfaces, so you do not have any cleanup left to do.",
        },
        {
          q: "Can I switch between weekly and bi-weekly service?",
          a: "Of course. Plenty of clients run weekly through the peak summer months and bi-weekly in the shoulder seasons. We will work with you to find the schedule that fits your lawn and your budget.",
        },
      ]}
      relatedServices={[
        { title: "Spring & Fall Cleanups", href: "/services/spring-fall-cleanup" },
        { title: "Shrub Trimming", href: "/services/shrub-trimming" },
        { title: "Fertilizer & Weed Control", href: "/services/fertilizer-weed-control" },
        { title: "Residential Landscaping", href: "/services/landscaping" },
      ]}
    />
  );
}
