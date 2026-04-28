import Link from "next/link";
import { Leaf, Phone, Mail, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "Contact", href: "/contact" },
  { title: "Get a Quote", href: "/quote" },
];

const serviceLinks = [
  { title: "Lawn Mowing", href: "/services/lawn-mowing" },
  { title: "Shrub Trimming", href: "/services/shrub-trimming" },
  { title: "Leaf Cleanup", href: "/services/leaf-cleanup" },
  { title: "Seasonal Maintenance", href: "/services/seasonal-maintenance" },
  { title: "Garden Bed Care", href: "/services/garden-bed-care" },
];

const serviceAreas = [
  "Spokane",
  "Tri-Cities",
  "Yakima",
  "Wenatchee",
  "Moses Lake",
  "Ellensburg",
  "Pullman",
  "Cheney",
  "Liberty Lake",
  "Cle Elum",
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="font-heading text-xl font-bold">
                R&S Lawn Care
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Professional lawn care services for Eastern Washington. Trusted by
              homeowners across the region for quality, reliability, and
              friendly service.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {/* Facebook - inline SVG (no lucide import) */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              {/* Google */}
              <a
                href="#"
                aria-label="Google"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent-light transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent-light transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:5098229624"
                  className="flex items-start gap-3 text-white/70 hover:text-accent-light transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                  (509) 822-9624
                </a>
              </li>
              <li>
                <a
                  href="mailto:randslawncare7@gmail.com"
                  className="flex items-start gap-3 text-white/70 hover:text-accent-light transition-colors text-sm break-anywhere"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                  <span className="break-anywhere">randslawncare7@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span>Eastern Washington</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span>
                  Mon-Fri 7AM-6PM
                  <br />
                  Sat 8AM-4PM
                  <br />
                  Sun Closed
                </span>
              </li>
            </ul>

            {/* Service Areas */}
            <div className="mt-6">
              <h5 className="font-heading text-sm font-semibold mb-2">
                Service Areas
              </h5>
              <p className="text-white/60 text-xs leading-relaxed">
                {serviceAreas.join(" \u2022 ")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-6 py-4 md:py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs md:text-sm text-white/50">
          <p>
            &copy; {new Date().getFullYear()} R&S Lawn Care. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/quote"
              className="hover:text-accent-light transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="hover:text-accent-light transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
