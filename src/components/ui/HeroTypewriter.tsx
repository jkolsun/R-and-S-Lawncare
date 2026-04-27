"use client";

import { TypeAnimation } from "react-type-animation";

interface HeroTypewriterProps {
  prefix: string;
  sequences: string[];
  className?: string;
}

export default function HeroTypewriter({
  prefix,
  sequences,
  className,
}: HeroTypewriterProps) {
  // Build the sequence array: each string followed by a 2-second pause
  const typeSequence: (string | number)[] = [];
  for (const text of sequences) {
    typeSequence.push(text, 2000);
  }

  return (
    <span className={className}>
      {prefix}{" "}
      <span className="text-accent">
        <TypeAnimation
          sequence={typeSequence}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </span>
    </span>
  );
}
