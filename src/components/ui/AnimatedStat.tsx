"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

interface AnimatedStatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

export default function AnimatedStat({
  end,
  suffix = "",
  prefix = "",
  label,
  decimals = 0,
}: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl sm:text-5xl font-bold text-primary">
        {isInView ? (
          <CountUp
            start={0}
            end={end}
            duration={2.5}
            prefix={prefix}
            suffix={suffix}
            decimals={decimals}
          />
        ) : (
          <span>
            {prefix}0{suffix}
          </span>
        )}
      </div>
      <p className="mt-2 text-fg-muted font-medium">{label}</p>
    </div>
  );
}
