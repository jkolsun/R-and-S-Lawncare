import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Scissors,
  TreePine,
  Leaf,
  Sprout,
  Flower2,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Services | R&S Lawn Care",
  description:
    "Lawn mowing, spring & fall cleanups, fertilizer and weed control, shrub trimming, and residential landscaping across Spokane, Spokane Valley, Liberty Lake, Airway Heights, Medical Lake, and Cheney.",
};

const services = [
  {
    title: "Lawn Mowing",
    description:
      "Weekly or bi-weekly mowing with commercial-grade equipment, crisp edging along walks and bed borders, string-trim work around fences and obstacles, and a full blowdown of the hard surfaces when we're done. Same crew, same day, every visit.",
    href: "/services/lawn-mowing",
    icon: Scissors,
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
    imageAlt: "Professional lawn mowing in the Spokane area",
  },
  {
    title: "Spring & Fall Cleanups",
    description:
      "Reset the yard at the start of the season — clear winter debris, edge the borders, and get the property ready for healthy growth. Reset it again before winter — leaves cleared, beds cut back, lawn put to bed before the freeze. Plus the weed-whack lawn cleanup work that keeps it tight in between.",
    href: "/services/spring-fall-cleanup",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    imageAlt: "Spring and fall yard cleanup service",
  },
  {
    title: "Fertilizer & Weed Control",
    description:
      "Seasonal and winterized fertilizer applications timed to the Spokane-area calendar — three to four feedings a year that keep the turf thick, green, and healthy. Plus weed-and-feed treatments that knock out broadleaf weeds (dandelions, clover, chickweed) before they take over.",
    href: "/services/fertilizer-weed-control",
    icon: Sprout,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    imageAlt: "Lawn fertilizer and weed control treatment",
  },
  {
    title: "Shrub Trimming",
    description:
      "Power trimming for hedge rows and large bushes, hand shears for the detail work and specialty plants, and a clean sweep of the beds when we're done. We time the trims around each plant's growth cycle so we're cutting when it actually helps the plant — not just when the schedule says.",
    href: "/services/shrub-trimming",
    icon: TreePine,
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    imageAlt: "Expert shrub and hedge trimming",
  },
  {
    title: "Residential Landscaping",
    description:
      "Bush removal and replanting, gardening maintenance through the season, hand-pulling weeds in the beds, mulch refreshes, bed edging, and small retaining wall builds and rebuilds. The broader landscape work that keeps a property looking polished — not just maintained.",
    href: "/services/landscaping",
    icon: Flower2,
    image:
      "https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?w=800&q=80",
    imageAlt: "Residential landscaping and garden bed work",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-dark py-14 md:py-24 lg:py-32">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
          alt="R&S Lawn Care services across the Spokane area"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary-dark/95" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="inline-block font-heading text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            What We Offer
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Lawn Care &{" "}
            <span className="text-accent">Residential Landscaping</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            From weekly mowing to fertilizer programs to retaining walls — one
            crew, one phone number, across Spokane, Spokane Valley, Liberty
            Lake, Airway Heights, Medical Lake, and Cheney.
          </p>
        </div>
      </section>

      {/* Services — Alternating Layout */}
      <section className="py-12 md:py-20 bg-bg">
        <div className="mx-auto max-w-7xl px-6 space-y-24">
          {services.map((service, i) => {
            const isReversed = i % 2 === 1;
            return (
              <ScrollReveal key={i}>
                <div
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    isReversed ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] ${
                      isReversed ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className={isReversed ? "lg:order-1" : ""}>
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 mb-5">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-fg mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-fg-muted leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-light transition-colors"
                    >
                      Learn More
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
