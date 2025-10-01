"use client";

import dynamic from "next/dynamic";
import { useWindowSize } from "react-use";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

interface ConfettiWrapperProps {
  active: boolean;
  numberOfPieces?: number;
  colors?: string[];
}

export default function ConfettiWrapper({
  active,
  numberOfPieces = 300,
  colors,
}: ConfettiWrapperProps) {
  const { width, height } = useWindowSize();

  if (!active) return null;

  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={numberOfPieces}
      recycle={false}
      colors={colors}
    />
  );
}
