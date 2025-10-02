"use client";

import { useCallback, useRef, useState } from "react";

export interface UseConfettiOptions {
  durationMs?: number;
}

export function useConfetti(options: UseConfettiOptions = {}) {
  const { durationMs = 4000 } = options;
  const [active, setActive] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const start = useCallback((customDurationMs?: number) => {
    setActive(true);
    const d = customDurationMs ?? durationMs;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActive(false);
      timerRef.current = null;
    }, d);
  }, [durationMs]);

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setActive(false);
  }, []);

  return { active, start, stop };
}



