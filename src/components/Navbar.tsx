"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Leaf,
  Phone,
  Mail,
  Clock,
  MapPin,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const services = [
  { title: "Lawn Mowing", href: "/services/lawn-mowing" },
  { title: "Spring & Fall Cleanups", href: "/services/spring-fall-cleanup" },
  { title: "Fertilizer & Weed Control", href: "/services/fertilizer-weed-control" },
  { title: "Shrub Trimming", href: "/services/shrub-trimming" },
  { title: "Residential Landscaping", href: "/services/landscaping" },
];

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services", hasDropdown: true },
  { title: "About", href: "/about" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile drawer on pathname change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-primary-dark text-white text-sm">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-accent-light" />
              Mon-Fri 7AM-6PM, Sat 8AM-4PM
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-accent-light" />
              Eastern Washington
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:randslawncare7@gmail.com"
              className="flex items-center gap-1.5 hover:text-accent-light transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              randslawncare7@gmail.com
            </a>
            <a
              href="tel:5098229624"
              className="flex items-center gap-1.5 hover:text-accent-light transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              (509) 822-9624
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white group-hover:bg-primary-dark transition-colors">
              <Leaf className="h-5 w-5" />
            </div>
            <span className="font-heading text-xl font-bold text-fg">
              R&S <span className="text-primary">Lawn Care</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.title} ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      pathname.startsWith("/services")
                        ? "text-primary bg-primary/5"
                        : "text-fg-muted hover:text-fg hover:bg-bg-alt"
                    }`}
                  >
                    {link.title}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-white border border-border shadow-xl overflow-hidden"
                      >
                        {services.map((svc) => (
                          <Link
                            key={svc.href}
                            href={svc.href}
                            className={`block px-4 py-3 text-sm transition-colors ${
                              pathname === svc.href
                                ? "bg-primary/5 text-primary font-semibold"
                                : "text-fg-muted hover:bg-bg-alt hover:text-fg"
                            }`}
                          >
                            {svc.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-primary bg-primary/5"
                      : "text-fg-muted hover:text-fg hover:bg-bg-alt"
                  }`}
                >
                  {link.title}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:5098229624"
              className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              <Phone className="h-4 w-4" />
              (509) 822-9624
            </a>
            <Link
              href="/quote"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-light shadow-sm hover:shadow-md transition-all"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg hover:bg-bg-alt transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-fg" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 z-50 h-full w-80 max-w-full bg-white shadow-2xl overflow-y-auto"
            >
              <div className="flex items-center justify-between p-5 border-b border-border">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                    <Leaf className="h-4 w-4" />
                  </div>
                  <span className="font-heading text-lg font-bold text-fg">
                    R&S <span className="text-primary">Lawn Care</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-bg-alt transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-fg" />
                </button>
              </div>

              <nav className="p-5 space-y-1">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.title}>
                      <button
                        onClick={() =>
                          setMobileServicesOpen(!mobileServicesOpen)
                        }
                        className="flex w-full items-center justify-between px-4 py-3 rounded-lg text-fg font-medium hover:bg-bg-alt transition-colors"
                      >
                        Services
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-1 pb-2">
                              {services.map((svc) => (
                                <Link
                                  key={svc.href}
                                  href={svc.href}
                                  className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                                    pathname === svc.href
                                      ? "text-primary bg-primary/5 font-semibold"
                                      : "text-fg-muted hover:text-fg hover:bg-bg-alt"
                                  }`}
                                >
                                  {svc.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.title}
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                        pathname === link.href
                          ? "text-primary bg-primary/5"
                          : "text-fg hover:bg-bg-alt"
                      }`}
                    >
                      {link.title}
                    </Link>
                  )
                )}
              </nav>

              <div className="p-5 border-t border-border space-y-3">
                <a
                  href="tel:5098229624"
                  className="flex items-center gap-3 text-fg font-medium"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  (509) 822-9624
                </a>
                <a
                  href="mailto:randslawncare7@gmail.com"
                  className="flex items-center gap-3 text-fg-muted text-sm"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  randslawncare7@gmail.com
                </a>
                <Link
                  href="/quote"
                  className="block w-full text-center rounded-lg bg-accent px-5 py-3 font-semibold text-white hover:bg-accent-light transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
