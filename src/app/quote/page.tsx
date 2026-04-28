"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Shield,
  Clock,
  Star,
  Phone,
} from "lucide-react";

const services = [
  "Lawn Mowing",
  "Spring & Fall Cleanups",
  "Fertilizer & Weed Control",
  "Shrub Trimming",
  "Residential Landscaping",
  "Multiple Services",
];

const steps = ["Service Details", "Property Info", "Your Info"];

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // Step 1
  const [selectedService, setSelectedService] = useState("");
  const [description, setDescription] = useState("");

  // Step 2
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  // Step 3
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const canProceed = () => {
    if (currentStep === 0) return selectedService !== "";
    if (currentStep === 1) return address !== "" && city !== "" && zip !== "";
    if (currentStep === 2) return name !== "" && email !== "" && phone !== "";
    return false;
  };

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (submitted) {
    return (
      <>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary-dark py-14 md:py-24 lg:py-32">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
            alt="Beautiful lawn in the Spokane area"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary-dark/95" />
          <div className="relative mx-auto max-w-2xl px-6 text-center">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-success/20 mb-6">
              <CheckCircle className="h-10 w-10 text-success" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Quote Request Sent!
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Thank you, {name}! We received your request for{" "}
              <span className="font-semibold text-accent">{selectedService}</span>{" "}
              service. Our team will review the details and get back to you within
              24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:5098229624"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 font-semibold text-white hover:bg-accent-light transition-all"
              >
                <Phone className="h-5 w-5" />
                Call (509) 822-9624
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white hover:bg-white/20 transition-all"
              >
                Return Home
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-dark py-16 lg:py-20">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
          alt="Get a free lawn care quote"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary-dark/95" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="inline-block font-heading text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Free Estimate
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get Your Free{" "}
            <span className="text-accent">Lawn Care Quote</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll provide a custom quote for
            your Spokane-area property.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-10 md:py-16 bg-bg">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-12">
            {/* Form - 2 cols */}
            <div className="lg:col-span-2">
              {/* Progress Bar */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  {steps.map((step, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 text-sm font-medium ${
                        i <= currentStep ? "text-primary" : "text-fg-muted"
                      }`}
                    >
                      <span
                        className={`inline-flex items-center justify-center h-8 w-8 rounded-full text-sm font-bold ${
                          i < currentStep
                            ? "bg-primary text-white"
                            : i === currentStep
                            ? "bg-primary text-white"
                            : "bg-bg-alt text-fg-muted border border-border"
                        }`}
                      >
                        {i < currentStep ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          i + 1
                        )}
                      </span>
                      <span className="hidden sm:inline">{step}</span>
                    </div>
                  ))}
                </div>
                <div className="h-2 bg-bg-alt rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Step Content */}
              <div className="rounded-2xl bg-white p-5 md:p-8 shadow-lg border border-border">
                {/* Step 1: Service + Description */}
                {currentStep === 0 && (
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-fg mb-2">
                      What service do you need?
                    </h2>
                    <p className="text-fg-muted mb-6">
                      Select a service and tell us about your property.
                    </p>
                    <div className="space-y-3 md:space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-fg mb-3">
                          Service Type
                        </label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {services.map((service) => (
                            <button
                              key={service}
                              type="button"
                              onClick={() => setSelectedService(service)}
                              className={`rounded-xl border-2 px-5 py-4 text-left font-medium transition-all ${
                                selectedService === service
                                  ? "border-primary bg-primary/5 text-primary"
                                  : "border-border bg-white text-fg hover:border-primary/30"
                              }`}
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="quote-description"
                          className="block text-sm font-medium text-fg mb-2"
                        >
                          Description (optional)
                        </label>
                        <textarea
                          id="quote-description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          rows={4}
                          placeholder="Tell us about your property, specific needs, or any special requests..."
                          className="w-full rounded-lg border border-border bg-bg-alt px-4 py-3 text-fg placeholder:text-fg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Address */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-fg mb-2">
                      Where is your property?
                    </h2>
                    <p className="text-fg-muted mb-6">
                      Provide the address so we can give you an accurate estimate.
                    </p>
                    <div className="space-y-5">
                      <div>
                        <label
                          htmlFor="quote-address"
                          className="block text-sm font-medium text-fg mb-2"
                        >
                          Street Address
                        </label>
                        <input
                          type="text"
                          id="quote-address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="123 Main Street"
                          className="w-full rounded-lg border border-border bg-bg-alt px-4 py-3 text-fg placeholder:text-fg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3 md:gap-5">
                        <div>
                          <label
                            htmlFor="quote-city"
                            className="block text-sm font-medium text-fg mb-2"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            id="quote-city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Spokane"
                            className="w-full rounded-lg border border-border bg-bg-alt px-4 py-3 text-fg placeholder:text-fg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="quote-zip"
                            className="block text-sm font-medium text-fg mb-2"
                          >
                            ZIP Code
                          </label>
                          <input
                            type="text"
                            id="quote-zip"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                            placeholder="99201"
                            className="w-full rounded-lg border border-border bg-bg-alt px-4 py-3 text-fg placeholder:text-fg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Info */}
                {currentStep === 2 && (
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-fg mb-2">
                      How can we reach you?
                    </h2>
                    <p className="text-fg-muted mb-6">
                      We&apos;ll use this information to send your free quote.
                    </p>
                    <div className="space-y-5">
                      <div>
                        <label
                          htmlFor="quote-name"
                          className="block text-sm font-medium text-fg mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="quote-name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your full name"
                          className="w-full rounded-lg border border-border bg-bg-alt px-4 py-3 text-fg placeholder:text-fg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="quote-email"
                          className="block text-sm font-medium text-fg mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="quote-email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full rounded-lg border border-border bg-bg-alt px-4 py-3 text-fg placeholder:text-fg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="quote-phone"
                          className="block text-sm font-medium text-fg mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="quote-phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(509) 000-0000"
                          className="w-full rounded-lg border border-border bg-bg-alt px-4 py-3 text-fg placeholder:text-fg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                  {currentStep > 0 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium text-fg hover:bg-bg-alt transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className={`inline-flex items-center gap-2 rounded-lg px-8 py-3 font-semibold text-white transition-all ${
                      canProceed()
                        ? "bg-primary hover:bg-primary-light shadow-md"
                        : "bg-fg-muted/30 cursor-not-allowed"
                    }`}
                  >
                    {currentStep === 2 ? "Submit Quote Request" : "Continue"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Trust Card - Right Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl bg-primary-dark p-6 md:p-8 text-white">
                <h3 className="font-heading text-xl font-bold mb-6">
                  Why Choose R&S Lawn Care?
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">100% Satisfaction Guarantee</p>
                      <p className="text-sm text-white/70 mt-1">
                        If you are not happy, we will make it right at no extra cost.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Fast Response Time</p>
                      <p className="text-sm text-white/70 mt-1">
                        We respond to all quote requests within 24 hours.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">5-Star Rated Service</p>
                      <p className="text-sm text-white/70 mt-1">
                        Trusted by hundreds of Spokane-area customers.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/70 mb-3">
                    Prefer to talk to someone?
                  </p>
                  <a
                    href="tel:5098229624"
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-white hover:bg-accent-light transition-colors w-full justify-center"
                  >
                    <Phone className="h-5 w-5" />
                    (509) 822-9624
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-xs text-white/50 text-center leading-relaxed">
                    Serving Spokane, Spokane Valley, Liberty Lake, Airway
                    Heights, Medical Lake &amp; Cheney
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
