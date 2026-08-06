"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ivory-100 backdrop-blur transition-colors hover:border-gold-400/50 hover:text-gold-400 focus-visible:ring-2 focus-visible:ring-ring/50",
        className
      )}
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-4" />
        ) : (
          <Moon className="size-4" />
        )
      ) : (
        <span className="size-4 animate-pulse rounded-full bg-ivory-100/30" aria-hidden="true" />
      )}
    </button>
  );
}
