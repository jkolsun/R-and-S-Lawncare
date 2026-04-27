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
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20">
      {/* Decorative circles */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/5" />
      <div className="absolute top-1/2 left-1/3 h-40 w-40 rounded-full bg-white/5" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-accent-light hover:shadow-xl transition-all"
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:5098229624"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur hover:bg-white/20 transition-all"
          >
            <Phone className="h-5 w-5" />
            (509) 822-9624
          </a>
        </div>
      </div>
    </section>
  );
}
