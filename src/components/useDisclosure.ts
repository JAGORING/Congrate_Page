"use client";

import { useCallback, useState } from "react";

export interface UseDisclosureOptions {
  defaultOpen?: boolean;
}

export function useDisclosure(options: UseDisclosureOptions = {}) {
  const { defaultOpen = false } = options;
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  return { isOpen, open, close, toggle };
}


