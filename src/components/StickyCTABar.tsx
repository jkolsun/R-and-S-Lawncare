"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function StickyCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white/95 backdrop-blur-md shadow-lg lg:hidden"
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <a
              href="tel:5098229624"
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors flex-1 justify-center"
            >
              <Phone className="h-4 w-4" />
              (509) 822-9624
            </a>
            <Link
              href="/quote"
              className="flex items-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white hover:bg-accent-light transition-colors flex-1 justify-center"
            >
              Free Quote
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
