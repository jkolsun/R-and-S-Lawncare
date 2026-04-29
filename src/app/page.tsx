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
    quote: "R&S Lawn Care transformed our yard completely. They show up on time every single week and our lawn has never looked better. Best lawn service in the Spokane area!",
    name: "Sarah M.",
    location: "Spokane, WA",
    service: "Weekly Lawn Mowing",
  },
  {
    quote: "Professional, friendly, and fair pricing. They trimmed our overgrown hedges and made the whole front of our house look brand new. Real attention to detail.",
    name: "James T.",
    location: "Spokane Valley, WA",
    service: "Shrub Trimming",
  },
  {
    quote: "We've used R&S for two full seasons. They handle everything from spring cleanups to fall leaf removal — dependable, hardworking, and honest about what the yard actually needs.",
    name: "Linda K.",
    location: "Liberty Lake, WA",
    service: "Spring & Fall Cleanups",
  },
  {
    quote: "Our beds went from a mess to the highlight of the property. Russell and the crew care about getting the details right. Would recommend to anyone in the area.",
    name: "Robert D.",
    location: "Cheney, WA",
    service: "Residential Landscaping",
  },
  {
    quote: "Started with a one-time fall cleanup and was so impressed we signed up for the whole fertilizer program. Reliable, fair, and the lawn came back stronger this spring.",
    name: "Michelle P.",
    location: "Airway Heights, WA",
    service: "Fertilizer & Weed Control",
  },
];

const seasons = [
  {
    name: "Spring",
    icon: Flower2,
    color: "from-green-400 to-emerald-600",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
    services: ["Spring Cleanup & Debris Removal", "Weed & Feed Application", "Garden Bed Preparation", "Shrub Pruning & Shaping"],
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
  { q: "What areas do you serve?", a: "We serve Spokane, Spokane Valley, Liberty Lake, Airway Heights, Medical Lake, and Cheney. If you're nearby and not sure if we cover your block, give us a call and we'll let you know." },
  { q: "How do I get a free quote?", a: "Call or text (509) 822-9624, or fill out the online quote form. We'll get back to you quickly with a detailed estimate based on your property size and what you need done." },
  { q: "Do you offer year-round maintenance plans?", a: "Yes. We can put your property on a recurring schedule that covers mowing, fertilizer applications, spring and fall cleanups, and shrub trimming — built around your specific yard and budget." },
  { q: "What makes R&S Lawn Care different?", a: "Locally owned, we show up when we say we will, and we treat every property like our own. Fair pricing, honest scope, and consistent results — no upselling, no surprises." },
  { q: "Do I need to be home when you come?", a: "Nope. As long as we have access to the yard, we take care of it. Just leave the gate unlocked or share the code." },
  { q: "Are you licensed and insured?", a: "Yes. R&S Lawn Care is fully licensed and insured in Washington state. We carry liability coverage so you have nothing to worry about." },
];

const featuredServices = [
  {
    title: "Lawn Mowing",
    description: "Weekly or bi-weekly mowing with crisp edging, clean trim work, and a full blowdown when we're done. Same crew, same day, every visit.",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&q=80",
    icon: Scissors,
    href: "/services/lawn-mowing",
  },
  {
    title: "Spring & Fall Cleanups",
    description: "Reset the yard at the start of the season and clear it out before winter. Plus the weed-whack lawn cleanup work that keeps it tight in between.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
    icon: Leaf,
    href: "/services/spring-fall-cleanup",
  },
  {
    title: "Fertilizer & Weed Control",
    description: "Seasonal and winterized fertilizer applications plus weed-and-feed treatments — for a thicker, greener, weed-free lawn all year.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    icon: CalendarDays,
    href: "/services/fertilizer-weed-control",
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
      {/* ═══════ 1. HERO — full screen desktop, ~85vh mobile so next section peeks ═══════ */}
      <section className="relative h-[85vh] min-h-[560px] md:h-screen md:min-h-0 w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80"
          alt="Beautiful green lawn in the Spokane area"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

        <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-32">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-6">
            <div className={`transition-all duration-1000 ease-out ${heroLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 mb-4 backdrop-blur-sm border border-white/20 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/90">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Spokane &amp; Surrounding Area
              </span>
              <h1 className="font-heading text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-white">
                Your Lawn,
                <br />
                <span className="text-accent">Our Priority.</span>
              </h1>
              <p className={`mt-4 max-w-lg text-base text-white/85 transition-all delay-300 duration-1000 ease-out md:text-xl ${heroLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
                Reliable service, beautiful results — every visit, every season.
              </p>
              <div className={`mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all delay-500 duration-1000 ease-out ${heroLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-3 bg-accent px-7 py-3.5 md:px-8 md:py-4 text-[13px] md:text-sm font-semibold uppercase tracking-widest text-white rounded-lg hover:bg-accent-light transition-all shadow-xl shadow-accent/20 cursor-pointer"
                >
                  Get a Free Estimate
                </Link>
                <a
                  href="tel:5098229624"
                  className="inline-flex items-center justify-center gap-3 border border-white/30 bg-white/10 px-7 py-3.5 md:px-8 md:py-4 text-[13px] md:text-sm font-medium uppercase tracking-widest text-white backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all cursor-pointer"
                >
                  <Phone className="h-4 w-4" />
                  (509) 822-9624
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </section>

      {/* ═══════ 2. TESTIMONIAL CAROUSEL — tighter mobile, fluid height ═══════ */}
      <section className="bg-primary-dark py-12 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-6 text-center">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-accent fill-accent" />
            ))}
          </div>
          <p className="text-white/50 text-[11px] md:text-sm mb-6 md:mb-8 uppercase tracking-widest">What Our Clients Say</p>

          {/* Quote area — responsive minHeight (smaller on mobile) */}
          <div className="relative min-h-[200px] md:min-h-[280px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-x-0 top-0 transition-all duration-700 ease-in-out ${i === activeTestimonial ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <Quote className="mx-auto mb-3 md:mb-4 h-6 w-6 md:h-8 md:w-8 text-accent/30" />
                <blockquote className="font-heading text-[15.5px] sm:text-lg md:text-2xl lg:text-3xl font-normal italic leading-snug md:leading-relaxed text-white/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>

          {/* Name + dots */}
          <div className="mt-3 md:mt-4">
            <p className="text-sm md:text-base font-semibold text-accent">{testimonials[activeTestimonial].name}</p>
            <p className="mt-1 text-xs md:text-sm text-white/40">{testimonials[activeTestimonial].location} &middot; {testimonials[activeTestimonial].service}</p>
          </div>

          <div className="mt-5 md:mt-6 flex items-center justify-center gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`View testimonial ${i + 1}`}
                className={`h-2 md:h-2.5 rounded-full transition-all duration-500 cursor-pointer ${i === activeTestimonial ? "w-8 md:w-10 bg-accent" : "w-2 md:w-2.5 bg-white/30 hover:bg-white/50"}`}
              />
            ))}
          </div>

          <Link href="/testimonials" className="mt-5 md:mt-6 inline-flex items-center gap-2 text-xs md:text-sm text-accent hover:text-accent-light transition-colors">
            Read All Reviews <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </Link>
        </div>
      </section>

      {/* ═══════ 3. SERVICES — tight cards on mobile, asymmetric on desktop ═══════ */}
      <section className="bg-white py-12 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeader
            label="What We Do"
            title="Reliable Lawn"
            titleAccent="Care Services"
            description="From weekly mowing to full seasonal maintenance — one team, every season."
            center
          />

          {/* MOBILE: tight stacked cards (image-on-top compact, ~22vh image + tight text) */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:hidden">
            {featuredServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative block overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 active:scale-[0.99] transition-transform"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={service.image} alt={service.title} fill className="object-cover" sizes="100vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    <div className="absolute left-3.5 top-3.5 inline-flex items-center justify-center rounded-full bg-white/95 p-2 shadow-sm">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between gap-3">
                      <h3 className="font-heading text-xl font-bold text-white drop-shadow">{service.title}</h3>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-accent-light">
                        Learn <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* DESKTOP: keep original alternating layout */}
          <div className="hidden md:block mt-20 space-y-24 md:space-y-32">
            {featuredServices.map((service, index) => {
              const isReversed = index % 2 === 1;
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.title} delay={0.1} direction={isReversed ? "right" : "left"}>
                  <div className={`flex flex-col items-center gap-12 lg:gap-16 ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}`}>
                    <div className="w-full md:w-7/12">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                        <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="58vw" />
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

          <div className="mt-8 md:mt-16 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 px-7 py-3.5 md:px-8 md:py-4 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-light transition-all cursor-pointer">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ 4. STATS BAR ═══════ */}
      <section className="bg-primary-dark py-10 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-12">
            <AnimatedStat end={10} suffix="+" label="Years of Experience" />
            <AnimatedStat end={500} suffix="+" label="Lawns Maintained" />
            <AnimatedStat end={5} suffix=".0" label="Star Rating" />
            <AnimatedStat end={10} suffix="+" label="Cities Served" />
          </div>
        </div>
      </section>

      {/* ═══════ 5. ABOUT PREVIEW — bg-fixed dropped for iOS, tighter mobile ═══════ */}
      <section className="relative min-h-[380px] md:min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80')" }} />
        <div className="absolute inset-0 bg-primary-dark/55 md:bg-primary-dark/40" />
        <div className="relative flex min-h-[380px] md:min-h-[500px] items-center py-12 md:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-6 w-full">
            <ScrollReveal direction="left">
              <div className="max-w-2xl rounded-2xl md:rounded-3xl border border-white/20 bg-white/95 p-6 md:p-12 shadow-2xl backdrop-blur-lg">
                <span className="text-[11px] md:text-xs font-semibold uppercase tracking-widest text-accent">About Us</span>
                <h2 className="mt-2 md:mt-3 font-heading text-[1.6rem] md:text-4xl font-bold text-gray-900 leading-tight">
                  Locally Owned.<br />
                  <span className="text-accent">Dedicated to Your Yard.</span>
                </h2>
                <p className="mt-4 md:mt-6 text-[15px] md:text-lg leading-relaxed text-gray-500">
                  R&S Lawn Care is a locally owned and operated lawn care company serving Spokane, Spokane Valley, Liberty Lake, Airway Heights, Medical Lake, and Cheney. Every yard deserves consistent, professional care — and that&apos;s exactly what we deliver, week after week.
                </p>
                <Link href="/about" className="group mt-6 md:mt-8 inline-flex items-center gap-3 rounded-lg bg-primary px-7 py-3.5 md:px-8 md:py-4 text-sm font-semibold uppercase tracking-widest text-white hover:bg-accent transition-all cursor-pointer">
                  Our Full Story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ 6. SEASONAL PLANNING — tighter padding, smaller mobile cards ═══════ */}
      <section className="bg-gray-50 py-12 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeader label="Year-Round Care" title="Seasonal" titleAccent="Planning" description="Every season demands different care. We keep your property looking great twelve months a year." center />

          <div className="mt-6 md:mt-16">
            <div className="-mx-5 md:mx-0 flex gap-4 md:gap-6 overflow-x-auto px-5 md:px-0 pb-4 md:pb-0 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible scrollbar-hide">
              {seasons.map((season, i) => {
                const Icon = season.icon;
                return (
                  <ScrollReveal key={season.name} delay={i * 0.1}>
                    <div className="group min-w-[240px] md:min-w-0 snap-center">
                      <div className="relative overflow-hidden rounded-2xl bg-white shadow-md md:shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                        <div className="relative h-36 md:h-44 overflow-hidden">
                          <Image src={season.image} alt={`${season.name} lawn care`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 240px, 25vw" />
                          <div className={`absolute inset-0 bg-gradient-to-t ${season.color} opacity-40`} />
                          <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 flex items-center gap-2">
                            <Icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
                            <span className="font-heading text-lg md:text-xl font-bold text-white">{season.name}</span>
                          </div>
                        </div>
                        <div className="p-4 md:p-5">
                          <ul className="space-y-2 md:space-y-2.5">
                            {season.services.map((s) => (
                              <li key={s} className="flex items-start gap-2 text-[13px] md:text-sm text-gray-500">
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

      {/* ═══════ 7. FAQ — tighter mobile padding ═══════ */}
      <section className="bg-white py-12 md:py-32">
        <div className="mx-auto max-w-4xl px-5 md:px-6">
          <SectionHeader label="Common Questions" title="Frequently" titleAccent="Asked" description="Everything you need to know about working with R&S Lawn Care." center />
          <div className="mt-6 md:mt-16">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* ═══════ 8. CTA BANNER ═══════ */}
      <CTABanner />
    </>
  );
}
