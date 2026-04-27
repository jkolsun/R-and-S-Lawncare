import type { Metadata } from "next";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedStat from "@/components/ui/AnimatedStat";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Testimonials | R&S Lawn Care",
  description:
    "Read what Eastern Washington homeowners say about R&S Lawn Care. Trusted by hundreds of clients across Spokane, Tri-Cities, Yakima, and more.",
};

const stats = [
  { end: 500, suffix: "+", label: "Happy Customers" },
  { end: 5, suffix: ".0", label: "Average Rating", decimals: 1 },
  { end: 98, suffix: "%", label: "Would Recommend" },
  { end: 4, suffix: "+", label: "Years of Service" },
];

const reviews = [
  {
    name: "Sarah M.",
    location: "Spokane, WA",
    rating: 5,
    text: "R&S Lawn Care has been maintaining our property for over two years now and we couldn't be happier. They show up on schedule, do thorough work, and our lawn has never looked better. Highly recommend them to anyone in the Spokane area.",
  },
  {
    name: "David & Karen T.",
    location: "Tri-Cities, WA",
    rating: 5,
    text: "We tried three different lawn care companies before finding R&S. The difference is night and day. They actually care about the quality of their work and it shows. Our neighbors constantly ask who takes care of our yard.",
  },
  {
    name: "Mike R.",
    location: "Yakima, WA",
    rating: 5,
    text: "Incredible attention to detail. The crew always edges perfectly, trims around every obstacle, and leaves our property spotless. The seasonal maintenance package has been a game-changer for keeping our landscape healthy year-round.",
  },
  {
    name: "Jennifer L.",
    location: "Wenatchee, WA",
    rating: 5,
    text: "As a busy professional, I needed a lawn care company I could set and forget. R&S has been exactly that. Reliable, consistent, and the quality never drops off. They communicate well and are always upfront about pricing.",
  },
  {
    name: "Tom & Linda W.",
    location: "Moses Lake, WA",
    rating: 5,
    text: "We have a large property with multiple garden beds and a sprawling lawn. R&S handles everything — mowing, edging, bed maintenance, and seasonal cleanup. They treat our property like it's their own and it shows in the results.",
  },
  {
    name: "Chris P.",
    location: "Pullman, WA",
    rating: 5,
    text: "I manage several rental properties in the Pullman area and R&S takes care of all of them. They are dependable, reasonably priced, and keep every property looking great. My tenants always comment on how well-maintained the grounds are.",
  },
  {
    name: "Rachel G.",
    location: "Liberty Lake, WA",
    rating: 5,
    text: "The fall leaf cleanup service alone is worth every penny. Our yard was buried in leaves and the R&S crew had it looking immaculate in a few hours. They also did a fantastic job preparing our lawn for winter. Five stars across the board.",
  },
  {
    name: "Steve & Ann B.",
    location: "Cheney, WA",
    rating: 5,
    text: "We hired R&S for shrub trimming and were so impressed that we signed up for full lawn care service. Their work is meticulous and their customer service is top-notch. They are the best lawn care company we have ever worked with.",
  },
  {
    name: "Patricia H.",
    location: "Ellensburg, WA",
    rating: 5,
    text: "R&S Lawn Care transformed our neglected garden beds and overgrown lawn into something we are genuinely proud of. They worked with us to create a maintenance schedule that fits our budget. Cannot recommend them enough.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star
          key={i}
          className="h-5 w-5 fill-gold text-gold"
        />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-dark py-24 lg:py-32">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Beautiful lawn cared for by R&S Lawn Care"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary-dark/95" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="flex items-center justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-gold text-gold" />
            ))}
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Our Clients{" "}
            <span className="text-accent">Say About Us</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Hear from homeowners and
            businesses across Eastern Washington who trust R&S Lawn Care with
            their properties.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-bg-alt border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedStat
                key={i}
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                decimals={stat.decimals}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-bg">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Testimonials"
            title="Trusted by Homeowners"
            titleAccent="Across Eastern WA"
            description="Real reviews from real clients who count on R&S Lawn Care for their properties."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {reviews.map((review, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="relative rounded-2xl bg-white p-8 shadow-sm border border-border hover:shadow-md transition-shadow h-full flex flex-col">
                  <Quote className="h-8 w-8 text-primary/15 mb-4" />
                  <p className="text-fg-muted leading-relaxed flex-1 mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="border-t border-border pt-4">
                    <StarRating rating={review.rating} />
                    <p className="font-heading font-semibold text-fg mt-2">
                      {review.name}
                    </p>
                    <p className="text-sm text-fg-muted">{review.location}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to Join Our Happy Clients?"
        subtitle="Get a free quote today and see why hundreds of Eastern Washington homeowners trust R&S Lawn Care."
      />
    </>
  );
}
