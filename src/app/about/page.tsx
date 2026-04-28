import type { Metadata } from "next";
import Image from "next/image";
import { Shield, Leaf, Clock, Users, Award, Heart } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedStat from "@/components/ui/AnimatedStat";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | R&S Lawn Care",
  description:
    "Learn about R&S Lawn Care — Eastern Washington's trusted lawn care provider serving Spokane, Tri-Cities, Yakima, and beyond with reliable, professional service.",
};

const stats = [
  { end: 500, suffix: "+", label: "Lawns Maintained" },
  { end: 10, suffix: "+", label: "Cities Served" },
  { end: 100, suffix: "%", label: "Satisfaction Rate" },
  { end: 5, suffix: "/5", label: "Average Rating" },
];

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description:
      "We show up on time, every time. Our clients count on consistent service schedules they can depend on throughout the season.",
  },
  {
    icon: Leaf,
    title: "Quality Craftsmanship",
    description:
      "Every lawn is treated with care and precision. We take pride in clean lines, sharp edges, and leaving properties looking their absolute best.",
  },
  {
    icon: Clock,
    title: "Timeliness",
    description:
      "We respect your time. From appointment windows to project completion, punctuality is a cornerstone of how we operate.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description:
      "As an Eastern Washington business, we are invested in the communities we serve — from Spokane to the Tri-Cities and everywhere in between.",
  },
  {
    icon: Award,
    title: "Professionalism",
    description:
      "From uniformed crews to transparent pricing, we bring a level of professionalism that sets us apart from the competition.",
  },
  {
    icon: Heart,
    title: "Customer-First Approach",
    description:
      "Your satisfaction drives every decision we make. We listen to your needs, provide honest recommendations, and go the extra mile.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-dark py-14 md:py-24 lg:py-32">
        <Image
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80"
          alt="R&S Lawn Care team maintaining a lush green lawn in Eastern Washington"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary-dark/95" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="inline-block font-heading text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            About Our Company
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Eastern Washington&apos;s Trusted{" "}
            <span className="text-accent">Lawn Care</span> Team
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            R&S Lawn Care delivers dependable, high-quality lawn and landscape
            services across Spokane, Tri-Cities, Yakima, Wenatchee, and the
            surrounding communities.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 md:py-16 bg-bg-alt border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedStat
                key={i}
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 md:py-20 bg-bg">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <SectionHeader
                  label="Our Story"
                  title="Built on Hard Work,"
                  titleAccent="Driven by Results"
                  center={false}
                />
                <div className="space-y-5 text-fg-muted text-lg leading-relaxed">
                  <p>
                    R&S Lawn Care was founded with a straightforward mission: to
                    provide Eastern Washington homeowners and businesses with lawn
                    care services they can truly rely on. From day one, the
                    company has focused on delivering consistent quality, fair
                    pricing, and the kind of attention to detail that turns first-
                    time clients into long-term partners.
                  </p>
                  <p>
                    What started as a small operation serving a handful of
                    neighborhoods has grown into a trusted regional provider
                    covering Spokane, Tri-Cities, Yakima, Wenatchee, Moses Lake,
                    Ellensburg, Pullman, Cheney, Liberty Lake, and Cle Elum. That
                    growth has been fueled entirely by word-of-mouth referrals and
                    repeat customers who appreciate the reliability and care that
                    R&S brings to every property.
                  </p>
                  <p>
                    The R&S team understands the unique challenges of Eastern
                    Washington landscapes — the hot, dry summers, the seasonal
                    shifts, and the specific turf and soil conditions that require
                    local expertise. That knowledge allows the company to deliver
                    results that generic, out-of-area providers simply cannot match.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
                  alt="Beautiful green lawn maintained by R&S Lawn Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-12 md:py-20 bg-bg-alt">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Our Values"
            title="What We"
            titleAccent="Stand For"
            description="These core principles guide every service call, every interaction, and every lawn we maintain."
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="rounded-2xl bg-white p-8 shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all h-full">
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 mb-5">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-fg mb-3">
                    {value.title}
                  </h3>
                  <p className="text-fg-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
