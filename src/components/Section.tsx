"use client";

import { ReactNode } from "react";
import ConfettiWrapper from "./ConfettiWrapper";

interface SectionProps {
  children: ReactNode;
  bgClass: string; // Tailwind 배경용
  activeConfetti?: boolean;
  confettiPieces?: number;
  confettiColors?: string[];
  onMouseEnter?: () => void;
}

export default function Section({
  children,
  bgClass,
  activeConfetti = false,
  confettiPieces,
  confettiColors,
  onMouseEnter,
}: SectionProps) {
  return (
    <section
      className={`relative w-screen h-screen flex items-center justify-center snap-start ${bgClass}`}
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
