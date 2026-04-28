import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Scissors,
  TreePine,
  Leaf,
  Calendar,
  Flower2,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Services | R&S Lawn Care",
  description:
    "Explore R&S Lawn Care's full range of services — lawn mowing, shrub trimming, leaf cleanup, seasonal maintenance, and garden bed care across Eastern Washington.",
};

const services = [
  {
    title: "Lawn Mowing",
    description:
      "Our professional lawn mowing service keeps your property looking sharp all season long. We use commercial-grade equipment to deliver clean, even cuts with crisp edges on every visit. Whether you need weekly maintenance or bi-weekly service, R&S Lawn Care ensures your lawn stays healthy, uniform, and picture-perfect throughout the growing season.",
    href: "/services/lawn-mowing",
    icon: Scissors,
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
    imageAlt: "Professional lawn mowing service in Eastern Washington",
  },
  {
    title: "Shrub Trimming",
    description:
      "Keep your hedges, bushes, and ornamental shrubs looking their best with expert trimming and shaping. Our crew carefully sculpts each shrub to maintain its natural form while promoting healthy growth. Regular trimming prevents overgrowth, improves curb appeal, and keeps your landscaping looking professionally maintained year-round.",
    href: "/services/shrub-trimming",
    icon: TreePine,
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    imageAlt: "Expert shrub trimming and hedge maintenance",
  },
  {
    title: "Leaf Cleanup",
    description:
      "When fall arrives in Eastern Washington, leaves can quickly take over your yard. Our thorough leaf cleanup service removes every last leaf from your lawn, beds, walkways, and gutters. We use professional blowers and vacuums to ensure a complete cleanup that protects your turf from suffocation and disease during the dormant months.",
    href: "/services/leaf-cleanup",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    imageAlt: "Fall leaf cleanup and removal service",
  },
  {
    title: "Seasonal Maintenance",
    description:
      "Eastern Washington properties need different care as the seasons change. Our seasonal maintenance packages cover spring cleanup, summer care, fall preparation, and winterization. From dethatching and aeration to fertilization and overseeding, we handle the seasonal tasks that keep your landscape thriving through every weather condition.",
    href: "/services/seasonal-maintenance",
    icon: Calendar,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    imageAlt: "Year-round seasonal lawn maintenance",
  },
  {
    title: "Garden Bed Care",
    description:
      "Transform your garden beds from neglected to stunning with our comprehensive garden bed care service. We handle weeding, mulching, edging, soil amendment, and plant health monitoring. Our team keeps your beds looking tidy and vibrant, creating a polished look that complements your lawn and boosts your property's overall curb appeal.",
    href: "/services/garden-bed-care",
    icon: Flower2,
    image:
      "https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?w=800&q=80",
    imageAlt: "Professional garden bed maintenance and care",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-dark py-14 md:py-24 lg:py-32">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
          alt="R&S Lawn Care services across Eastern Washington"
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
            Professional Lawn &{" "}
            <span className="text-accent">Landscape Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            From routine mowing to seasonal maintenance, R&S Lawn Care offers a
            full suite of services to keep your Eastern Washington property
            looking its best.
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
