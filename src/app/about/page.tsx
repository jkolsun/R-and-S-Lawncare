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
    "Russell Tobey and the R&S Lawn Care crew — serving Spokane, Spokane Valley, Liberty Lake, Airway Heights, Medical Lake, and Cheney with reliable lawn care and landscaping.",
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
      "As a locally owned Spokane-area business, we are invested in the communities we serve — Spokane, Spokane Valley, Liberty Lake, Airway Heights, Medical Lake, and Cheney.",
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
          alt="R&S Lawn Care team maintaining a lush green lawn in the Spokane area"
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
            The Spokane-Area{" "}
            <span className="text-accent">Lawn Care</span> Crew You Can Count On
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            R&S Lawn Care serves Spokane, Spokane Valley, Liberty Lake, Airway
            Heights, Medical Lake, and Cheney with dependable lawn care and
            residential landscaping.
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
                    R&S Lawn Care started the way most good local businesses do:
                    a neighbor needed help, the work got done right, and the
                    next neighbor called. Owner Russell Tobey has been keeping
                    Spokane-area properties looking sharp for years — built on
                    showing up when we say we will, fair pricing, and the kind
                    of attention to detail that turns one-time clients into
                    long-term ones.
                  </p>
                  <p>
                    Today the crew runs a tight route across Spokane, Spokane
                    Valley, Liberty Lake, Airway Heights, Medical Lake, and
                    Cheney. That growth has been fueled entirely by
                    word-of-mouth — repeat customers and referrals from people
                    who appreciate the reliability and care R&S brings to every
                    property.
                  </p>
                  <p>
                    Our crew knows what Spokane-area lawns deal with — the hot
                    dry summers, the snow-load winters, and the specific turf
                    and soil conditions that need local know-how. That on-the-
                    ground experience is why our work holds up where generic
                    out-of-area providers struggle.
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
