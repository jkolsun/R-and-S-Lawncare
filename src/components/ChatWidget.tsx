"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, Mail, FileText } from "lucide-react";
import Link from "next/link";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-16 md:bottom-20 right-0 w-[calc(100vw-2rem)] max-w-[20rem] rounded-2xl bg-white shadow-2xl border border-border overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-dark to-primary px-5 py-4">
              <h3 className="font-heading text-lg font-bold text-white">
                R&S Lawn Care
              </h3>
              <p className="text-sm text-white/80">
                How can we help you today?
              </p>
            </div>

            {/* Options */}
            <div className="p-4 space-y-3">
              <a
                href="tel:5098229624"
                className="flex items-center gap-3 rounded-xl bg-bg-alt px-4 py-3 text-fg hover:bg-primary hover:text-white transition-colors group"
              >
                <Phone className="h-5 w-5 text-primary group-hover:text-white" />
                <div>
                  <div className="font-semibold text-sm">Call Us</div>
                  <div className="text-xs text-fg-muted group-hover:text-white/80">
                    (509) 822-9624
                  </div>
                </div>
              </a>

              <a
                href="mailto:randslawncare7@gmail.com"
                className="flex items-center gap-3 rounded-xl bg-bg-alt px-4 py-3 text-fg hover:bg-primary hover:text-white transition-colors group"
              >
                <Mail className="h-5 w-5 text-primary group-hover:text-white" />
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-sm">Email Us</div>
                  <div className="text-xs text-fg-muted group-hover:text-white/80 break-all">
                    randslawncare7@gmail.com
                  </div>
                </div>
              </a>

              <Link
                href="/quote"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-xl bg-accent px-4 py-3 text-white hover:bg-accent-light transition-colors"
              >
                <FileText className="h-5 w-5" />
                <div>
                  <div className="font-semibold text-sm">Get a Free Quote</div>
                  <div className="text-xs text-white/80">
                    Quick online form
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg hover:bg-accent-light transition-all animate-pulse-glow"
        aria-label={isOpen ? "Close chat widget" : "Open chat widget"}
      >
        {isOpen ? (
          <X className="h-5 w-5 md:h-6 md:w-6" />
        ) : (
          <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
        )}
      </button>
    </div>
  );
}
