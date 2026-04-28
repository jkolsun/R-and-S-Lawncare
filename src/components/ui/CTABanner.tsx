import Link from "next/link";
import { Phone } from "lucide-react";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Ready for a Lawn You'll Love?",
  subtitle = "Get a free, no-obligation quote today. We serve all of Eastern Washington.",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light py-12 md:py-20">
      {/* Decorative circles */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/5" />
      <div className="hidden md:block absolute top-1/2 left-1/3 h-40 w-40 rounded-full bg-white/5" />

      <div className="relative mx-auto max-w-4xl px-5 md:px-6 text-center">
        <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 md:mb-4">
          {title}
        </h2>
        <p className="text-[15px] md:text-lg text-white/80 mb-6 md:mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 md:px-8 md:py-4 text-base md:text-lg font-semibold text-white shadow-lg hover:bg-accent-light hover:shadow-xl transition-all"
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:5098229624"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-7 py-3.5 md:px-8 md:py-4 text-base md:text-lg font-semibold text-white backdrop-blur hover:bg-white/20 transition-all"
          >
            <Phone className="h-5 w-5" />
            (509) 822-9624
          </a>
        </div>
      </div>
    </section>
  );
}
