"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function LawyerPhoto() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[520px] xl:max-w-[560px]">
      <div className="relative overflow-hidden rounded-2xl border border-gold-400/25 bg-ink-900 shadow-card">
        <div className="relative aspect-[3/4]">
          <Image
            src="/images/adv principal.png"
            alt={`Retrato do advogado ${siteConfig.lawyer.name}`}
            fill
            sizes="(min-width: 1024px) 32vw, 90vw"
            quality={92}
            priority
            draggable={false}
            className="object-cover [filter:contrast(1.04)_saturate(1.08)]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="font-display text-lg font-semibold text-ivory-100 md:text-xl">
              {siteConfig.lawyer.name}
            </p>
            <p className="mt-1 text-xs tracking-[0.25em] text-gold-400 uppercase">
              {siteConfig.lawyer.role} · {siteConfig.lawyer.oab}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
