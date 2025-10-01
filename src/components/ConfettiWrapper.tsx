"use client";

import dynamic from "next/dynamic";
import { useWindowSize } from "react-use";
import { useEffect, useState } from "react";

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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!active || !isMounted) return null;

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
