import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact Us | R&S Lawn Care",
  description:
    "Get in touch with R&S Lawn Care. Call (509) 822-9624 or email us for lawn care services across Spokane, Tri-Cities, Yakima, and Eastern Washington.",
};

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    primary: "(509) 822-9624",
    secondary: "Speak directly with our team",
    href: "tel:5098229624",
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "randslawncare7@gmail.com",
    secondary: "We respond within 24 hours",
    href: "mailto:randslawncare7@gmail.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    primary: "Mon-Fri: 7AM - 6PM",
    secondary: "Sat: 8AM - 4PM | Sun: Closed",
    href: null,
  },
  {
    icon: MapPin,
    title: "Service Area",
    primary: "Eastern Washington",
    secondary: "Spokane, Tri-Cities, Yakima & more",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-dark py-24 lg:py-32">
        <Image
          src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=1920&q=80"
          alt="Contact R&S Lawn Care for professional service"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary-dark/95" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="inline-block font-heading text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Get In Touch
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact{" "}
            <span className="text-accent">R&S Lawn Care</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Have a question or ready to get started? Reach out today and our team
            will be happy to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-bg">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Reach Out"
            title="We&apos;d Love to"
            titleAccent="Hear From You"
            description="Choose the method that works best for you, or fill out the form and we'll get back to you promptly."
            center
          />

          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactCards.map((card, i) => {
                const CardWrapper = card.href ? "a" : "div";
                const wrapperProps = card.href
                  ? { href: card.href }
                  : {};
                return (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <CardWrapper
                      {...wrapperProps}
                      className={`flex items-start gap-5 rounded-2xl bg-white p-6 shadow-sm border border-border ${
                        card.href
                          ? "hover:shadow-md hover:border-primary/30 transition-all cursor-pointer"
                          : ""
                      }`}
                    >
                      <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 shrink-0">
                        <card.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-fg mb-1">
                          {card.title}
                        </h3>
                        <p className="font-semibold text-primary text-lg">
                          {card.primary}
                        </p>
                        <p className="text-sm text-fg-muted mt-1">
                          {card.secondary}
                        </p>
                      </div>
                    </CardWrapper>
                  </ScrollReveal>
                );
              })}

              {/* Service Areas */}
              <ScrollReveal delay={0.4}>
                <div className="rounded-2xl bg-primary-dark p-6">
                  <h3 className="font-heading text-lg font-bold text-white mb-3">
                    Areas We Serve
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
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
                    ].map((city) => (
                      <span
                        key={city}
                        className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <ScrollReveal direction="right">
              <div className="rounded-2xl bg-white p-8 shadow-lg border border-border">
                <h3 className="font-heading text-2xl font-bold text-fg mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-fg mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        placeholder="Your name"
                        className="w-full rounded-lg border border-border bg-bg-alt px-4 py-3 text-fg placeholder:text-fg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-fg mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        placeholder="(509) 000-0000"
                        className="w-full rounded-lg border border-border bg-bg-alt px-4 py-3 text-fg placeholder:text-fg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-fg mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-border bg-bg-alt px-4 py-3 text-fg placeholder:text-fg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-medium text-fg mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      className="w-full rounded-lg border border-border bg-bg-alt px-4 py-3 text-fg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="quote">Request a Quote</option>
                      <option value="service">Service Question</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-fg mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full rounded-lg border border-border bg-bg-alt px-4 py-3 text-fg placeholder:text-fg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary px-6 py-4 font-semibold text-white hover:bg-primary-light transition-colors shadow-md"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-fg-muted text-center">
                    Or call us directly at{" "}
                    <a
                      href="tel:5098229624"
                      className="font-semibold text-primary hover:underline"
                    >
                      (509) 822-9624
                    </a>
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Need a Quick Quote Instead?"
        subtitle="Skip the form and get a free estimate in minutes with our online quote tool."
      />
    </>
  );
}
