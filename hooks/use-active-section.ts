"use client";

import { useEffect, useState } from "react";

export function useActiveSection(hashes: string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    for (const hash of hashes) {
      const element = document.querySelector(hash);
      if (!element) continue;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(hash);
          }
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    }

    return () => observers.forEach((observer) => observer.disconnect());
  }, [hashes.join("|")]);

  return active;
}
