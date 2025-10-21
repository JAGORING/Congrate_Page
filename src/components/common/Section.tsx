"use client";

import { ReactNode, RefObject } from "react";
import ConfettiWrapper from "./ConfettiWrapper";

interface SectionProps {
  children: ReactNode;
  bgClass: string; // Tailwind 배경용
  activeConfetti?: boolean;
  confettiPieces?: number;
  confettiColors?: string[];
  onMouseEnter?: () => void;
  ref?: RefObject<HTMLDivElement | null>;
}

export default function Section({
  children,
  bgClass,
  activeConfetti = false,
  confettiPieces,
  confettiColors,
  onMouseEnter,
  ref
}: SectionProps) {
  return (
    <section
      ref={ref}
      className={`relative w-screen h-screen flex items-center justify-center snap-start overflow-hidden ${bgClass}`}
      onMouseEnter={onMouseEnter}
    >
      <ConfettiWrapper
        active={activeConfetti}
        numberOfPieces={confettiPieces}
        colors={confettiColors}
      />
      {children}
    </section>
  );
}
