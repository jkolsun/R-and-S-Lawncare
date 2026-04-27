import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/ui/CTABanner";
import FAQAccordionWrapper from "@/components/FAQAccordionWrapper";

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  heroImage: string;
  icon: LucideIcon;
  description: string[];
  features: string[];
  gallery: { src: string; alt: string }[];
  faqs: { q: string; a: string }[];
  relatedServices: { title: string; href: string }[];
}

export default function ServicePageTemplate({
  title,
  subtitle,
  heroImage,
  icon: Icon,
  description,
  features,
  gallery,
  faqs,
  relatedServices,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-dark">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary-dark/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 mb-6 backdrop-blur">
              <Icon className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-white">
                Our Services
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-lg text-white/80 mb-8">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 font-semibold text-white shadow-lg hover:bg-accent-light transition-all"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:5098229624"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3.5 font-semibold text-white hover:bg-white/10 transition-all"
              >
                <Phone className="h-4 w-4" />
                (509) 822-9624
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Description + Features (2-col) */}
      <section className="py-20 bg-bg">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Description */}
            <div>
              <SectionHeader
                label="What We Do"
                title={title}
                center={false}
              />
              <div className="space-y-4">
                {description.map((para, i) => (
                  <p key={i} className="text-fg-muted leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="rounded-2xl bg-bg-alt border border-border p-8">
              <h3 className="font-heading text-xl font-bold text-fg mb-6">
                What&apos;s Included
              </h3>
              <ul className="space-y-4">
                {features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-fg-muted">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="py-20 bg-bg-alt">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              label="Our Work"
              title="See the"
              titleAccent="Results"
              description="Quality lawn care you can see and feel."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-video rounded-xl overflow-hidden shadow-md group"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial Quote */}
      <section className="py-20 bg-bg">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-gold text-gold"
              />
            ))}
          </div>
          <blockquote className="font-heading text-2xl sm:text-3xl font-semibold text-fg leading-relaxed mb-6">
            &ldquo;R&S Lawn Care transformed our yard completely. Professional,
            punctual, and the results speak for themselves. Best lawn service in
            Eastern Washington!&rdquo;
          </blockquote>
          <cite className="text-fg-muted not-italic">
            &mdash; Happy Customer, Spokane WA
          </cite>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-20 bg-bg-alt">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              label="FAQ"
              title="Frequently Asked"
              titleAccent="Questions"
              description={`Common questions about our ${title.toLowerCase()} service.`}
            />
            <FAQAccordionWrapper items={faqs} />
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-bg">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              label="Explore More"
              title="Related"
              titleAccent="Services"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="group rounded-xl border border-border bg-white p-6 hover:shadow-lg hover:border-primary/20 transition-all"
                >
                  <h3 className="font-heading text-lg font-semibold text-fg group-hover:text-primary transition-colors mb-2">
                    {svc.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
