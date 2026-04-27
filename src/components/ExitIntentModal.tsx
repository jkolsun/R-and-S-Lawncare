"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("exitModalShown")) {
        setIsOpen(true);
        sessionStorage.setItem("exitModalShown", "true");
      }
    },
    []
  );

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-fg-muted hover:text-fg transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Leaf emoji as decorative accent */}
            <div className="text-5xl mb-4">🌿</div>

            <h3 className="font-heading text-2xl font-bold text-fg mb-2">
              Wait — Your Lawn Deserves Better!
            </h3>
            <p className="text-fg-muted mb-6">
              Before you go, grab a free quote from Eastern Washington&apos;s
              trusted lawn care team. No obligation, no hassle.
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/quote"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 text-lg font-semibold text-white shadow-lg hover:bg-accent-light transition-all"
              >
                Get My Free Quote
              </Link>
              <a
                href="tel:5098229624"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-white transition-all"
              >
                Call (509) 822-9624
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
