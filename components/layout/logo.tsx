import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  compact?: boolean;
};

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      href="#home"
      aria-label="Boavista Advocacia — Voltar ao início"
      className={cn("group flex items-center", className)}
    >
      <Image
        src="/images/logo3.png"
        alt="Boavista Advocacia"
        width={500}
        height={500}
        priority
        className={cn(
          "w-auto object-contain transition-opacity duration-300 group-hover:opacity-85",
          compact ? "h-11" : "h-14 md:h-16"
        )}
      />
    </Link>
  );
}
