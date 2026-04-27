"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  Leaf,
  Sun,
  CloudRain,
  Snowflake,
  Flower2,
  TreePine,
  Scissors,
  Quote,
  Star,
  Phone,
  CalendarDays,
} from "lucide-react";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/ui/CTABanner";
import AnimatedStat from "@/components/ui/AnimatedStat";
import FAQAccordion from "@/components/FAQAccordion";
import useSocialProof from "@/hooks/useSocialProof";

/* ─────────────────────── DATA ─────────────────────── */

const testimonials = [
  {
    quote: "R&S Lawn Care transformed our yard completely. They show up on time every single week and our lawn has never looked better. Best lawn service in Eastern Washington!",
    name: "Sarah M.",
    location: "Spokane, WA",
    service: "Weekly Lawn Mowing",
  },
  {
    quote: "Professional, friendly, and incredibly affordable. They trimmed our overgrown hedges and made the whole front of our house look brand new. Amazing attention to detail.",
    name: "James T.",
    location: "Tri-Cities, WA",
    service: "Shrub Trimming",
  },
  {
    quote: "We've used R&S for two full seasons now and couldn't be happier. They handle everything from spring cleanups to fall leaf removal. Dependable and hardworking team.",
    name: "Linda K.",
    location: "Yakima, WA",
    service: "Seasonal Maintenance",
  },
  {
    quote: "Our garden beds went from a mess to the highlight of our property. They really care about getting the details right. Would recommend to anyone in the area.",
    name: "Robert D.",
    location: "Wenatchee, WA",
    service: "Garden Bed Care",
  },
  {
    quote: "Called R&S for a one-time leaf cleanup and was so impressed we signed up for year-round service. Reliable, honest, and they do great work every time.",
    name: "Michelle P.",
    location: "Moses Lake, WA",
    service: "Leaf Cleanup",
  },
];

const seasons = [
  {
    name: "Spring",
    icon: Flower2,
    color: "from-green-400 to-emerald-600",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
    services: ["Spring Cleanup & Debris Removal", "Lawn Aeration & Overseeding", "Garden Bed Preparation", "Shrub Pruning & Shaping"],
  },
  {
    name: "Summer",
    icon: Sun,
    color: "from-amber-400 to-orange-600",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=80",
    services: ["Weekly Mowing & Edging", "Weed Control & Prevention", "Garden Bed Maintenance", "Hedge & Shrub Trimming"],
  },
  {
    name: "Fall",
    icon: CloudRain,
    color: "from-orange-500 to-red-700",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    services: ["Leaf Removal & Disposal", "Fall Fertilization", "Perennial Winterization", "Final Mowing & Cleanup"],
  },
  {
    name: "Winter",
    icon: Snowflake,
    color: "from-blue-300 to-slate-600",
    image: "https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?w=600&q=80",
    services: ["Winter Property Checks", "Planning for Spring", "Equipment Maintenance", "Early Booking Discounts"],
  },
];

const faqItems = [
  { q: "What areas in Eastern Washington do you serve?", a: "We serve communities throughout Eastern Washington including Spokane, Tri-Cities, Yakima, Wenatchee, Moses Lake, Ellensburg, Pullman, Cheney, Liberty Lake, and Cle Elum. Contact us to confirm service in your area." },
  { q: "How do I get a free quote?", a: "Just give us a call at (509) 822-9624 or fill out our online quote form. We'll get back to you quickly with a detailed estimate based on your property size and needs." },
  { q: "Do you offer year-round maintenance plans?", a: "Absolutely! Our seasonal plans cover spring cleanup through fall leaf removal. Plans are customized to your property and budget. Most clients save 15-20% compared to individual service pricing." },
  { q: "What makes R&S Lawn Care different?", a: "We're locally owned, show up on time, and treat every property like it's our own. With 10+ years of experience, we deliver consistent, high-quality results at fair prices — no surprises." },
  { q: "Do I need to be home when you come?", a: "Nope! As long as we have access to your yard, we'll take care of everything. We send a notification when the job is done so you can enjoy your freshly maintained lawn." },
  { q: "Are you licensed and insured?", a: "Yes. R&S Lawn Care is fully licensed and insured in Washington state. We carry comprehensive liability coverage for your complete peace of mind." },
];

const featuredServices = [
  {
    title: "Lawn Mowing",
    description: "Regular, reliable mowing tailored to your lawn's needs. Clean lines, consistent height, and a healthy cut every single time — your neighbors will notice the difference.",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&q=80",
    icon: Scissors,
    href: "/services/lawn-mowing",
  },
  {
    title: "Shrub Trimming",
    description: "Keep your hedges and shrubs looking neat, healthy, and perfectly shaped. Our precision trimming promotes growth and keeps your property looking sharp all season long.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=80",
    icon: TreePine,
    href: "/services/shrub-trimming",
  },
  {
    title: "Seasonal Maintenance",
    description: "Year-round care plans that keep your property looking its best through every Eastern Washington season. From spring cleanup to fall leaf removal — we've got you covered.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    icon: CalendarDays,
    href: "/services/seasonal-maintenance",
  },
];

/* ─────────────────────── COMPONENT ─────────────────────── */

export default function HomePage() {
  useSocialProof();

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ═══════ 1. FULLSCREEN HERO ═══════ */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80"
          alt="Beautiful green lawn in Eastern Washington"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end pb-24 md:pb-32">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className={`transition-all duration-1000 ease-out ${heroLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
              <h1 className="font-heading text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Your Lawn,
                <br />
                <span className="text-accent">Our Priority</span>
              </h1>
              <p className={`mt-4 max-w-lg text-lg text-white/80 transition-all delay-300 duration-1000 ease-out md:text-xl ${heroLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
                Eastern Washington&apos;s trusted lawn care professionals.
                <br className="hidden sm:block" />
                Reliable service, beautiful results.
              </p>
              <div className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all delay-500 duration-1000 ease-out ${heroLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-3 bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white rounded-lg hover:bg-accent-light transition-all shadow-xl shadow-accent/20 cursor-pointer"
                >
                  Get a Free Estimate
                </Link>
                <a
                  href="tel:5098229624"
                  className="inline-flex items-center justify-center gap-3 border border-white/30 bg-white/10 px-8 py-4 text-sm font-medium uppercase tracking-widest text-white backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all cursor-pointer"
                >
                  <Phone className="h-4 w-4" />
                  (509) 822-9624
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══════ 2. TESTIMONIAL CAROUSEL ═══════ */}
      <section className="bg-primary-dark py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-accent fill-accent" />
            ))}
          </div>
          <p className="text-white/50 text-sm mb-8 uppercase tracking-widest">What Our Clients Say</p>

          {/* Quote area — fixed height container */}
          <div className="relative" style={{ minHeight: "280px" }}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-x-0 top-0 transition-all duration-700 ease-in-out ${i === activeTestimonial ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <Quote className="mx-auto mb-4 h-8 w-8 text-accent/30" />
                <blockquote className="font-heading text-xl font-normal italic leading-relaxed text-white/90 md:text-2xl lg:text-3xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>

          {/* Name + dots OUTSIDE the absolute container — never overlaps */}
          <div className="mt-4">
            <p className="text-base font-semibold text-accent">{testimonials[activeTestimonial].name}</p>
            <p className="mt-1 text-sm text-white/40">{testimonials[activeTestimonial].location} &middot; {testimonials[activeTestimonial].service}</p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`View testimonial ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${i === activeTestimonial ? "w-10 bg-accent" : "w-2.5 bg-white/30 hover:bg-white/50"}`}
              />
            ))}
          </div>

          <Link href="/testimonials" className="mt-6 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors">
            Read All Reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ═══════ 3. SERVICES — ASYMMETRIC ═══════ */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="What We Do"
            title="Reliable Lawn"
            titleAccent="Care Services"
            description="From weekly mowing to full seasonal maintenance, we keep your outdoor spaces healthy and beautiful all year long."
            center
          />

          <div className="mt-20 space-y-24 md:space-y-32">
            {featuredServices.map((service, index) => {
              const isReversed = index % 2 === 1;
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.title} delay={0.1} direction={isReversed ? "right" : "left"}>
                  <div className={`flex flex-col items-center gap-8 md:gap-12 lg:gap-16 ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}`}>
                    <div className="w-full md:w-7/12">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                        <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 768px) 100vw, 58vw" />
                      </div>
                    </div>
                    <div className="w-full md:w-5/12">
                      <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-heading text-3xl font-bold text-gray-900 md:text-4xl">{service.title}</h3>
                      <p className="mt-4 text-lg leading-relaxed text-gray-500">{service.description}</p>
                      <Link href={service.href} className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent hover:text-primary transition-colors">
                        Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-light transition-all cursor-pointer">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ 4. STATS BAR ═══════ */}
      <section className="bg-primary-dark py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            <AnimatedStat end={10} suffix="+" label="Years of Experience" />
            <AnimatedStat end={500} suffix="+" label="Lawns Maintained" />
            <AnimatedStat end={5} suffix=".0" label="Star Rating" />
            <AnimatedStat end={10} suffix="+" label="Cities Served" />
          </div>
        </div>
      </section>

      {/* ═══════ 5. ABOUT PREVIEW ═══════ */}
      <section className="relative min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80')" }} />
        <div className="absolute inset-0 bg-primary-dark/40" />
        <div className="relative flex min-h-[500px] items-center py-20">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal direction="left">
              <div className="max-w-2xl rounded-3xl border border-white/20 bg-white/90 p-8 shadow-2xl backdrop-blur-lg md:p-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">About Us</span>
                <h2 className="mt-3 font-heading text-3xl font-bold text-gray-900 md:text-4xl">
                  Locally Owned.<br />
                  <span className="text-accent">Dedicated to Your Yard.</span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-500">
                  R&S Lawn Care is a locally owned and operated lawn care company serving Eastern Washington. We believe every yard deserves consistent, professional care — and that&apos;s exactly what we deliver, week after week.
                </p>
                <Link href="/about" className="group mt-8 inline-flex items-center gap-3 rounded-lg bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white hover:bg-accent transition-all cursor-pointer">
                  Our Full Story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ 6. SEASONAL PLANNING ═══════ */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader label="Year-Round Care" title="Seasonal" titleAccent="Planning" description="Every season demands different care. We keep your property looking great twelve months a year." center />

          <div className="mt-16">
            <div className="-mx-6 flex gap-6 overflow-x-auto px-6 pb-6 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0 md:pb-0">
              {seasons.map((season, i) => {
                const Icon = season.icon;
                return (
                  <ScrollReveal key={season.name} delay={i * 0.1}>
                    <div className="group min-w-[260px] snap-center md:min-w-0">
                      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                        <div className="relative h-44 overflow-hidden">
                          <Image src={season.image} alt={`${season.name} lawn care`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 260px, 25vw" />
                          <div className={`absolute inset-0 bg-gradient-to-t ${season.color} opacity-40`} />
                          <div className="absolute bottom-4 left-4 flex items-center gap-2">
                            <Icon className="h-5 w-5 text-white" />
                            <span className="font-heading text-xl font-bold text-white">{season.name}</span>
                          </div>
                        </div>
                        <div className="p-5">
                          <ul className="space-y-2.5">
                            {season.services.map((s) => (
                              <li key={s} className="flex items-start gap-2 text-sm text-gray-500">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 7. FAQ ═══════ */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader label="Common Questions" title="Frequently" titleAccent="Asked" description="Everything you need to know about working with R&S Lawn Care." center />
          <div className="mt-16">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* ═══════ 8. CTA BANNER ═══════ */}
      <CTABanner />
    </>
  );
}
