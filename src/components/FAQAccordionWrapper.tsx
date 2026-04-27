"use client";

import FAQAccordion from "@/components/FAQAccordion";

interface FAQAccordionWrapperProps {
  items: { q: string; a: string }[];
}

export default function FAQAccordionWrapper({ items }: FAQAccordionWrapperProps) {
  return <FAQAccordion items={items} />;
}
