"use client";

import Image from "next/image";
import { BadgeCheck, Mail, MessageCircle, Phone, Scale } from "lucide-react";

import { TiltCard } from "@/components/animations/tilt-card";
import { siteConfig } from "@/lib/site";

const specialityColors: Record<string, string> = {};

export function LawyerCard() {
  return (
    <TiltCard intensity={5} className="max-w-md mx-auto w-full">
      <div className="relative overflow-hidden rounded-2xl border border-gold-400/25 bg-ink-900/75 shadow-card backdrop-blur-xl">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"
        />

        <div className="flex items-center gap-5 p-7 pb-6">
          <div className="relative shrink-0">
            <div className="flex size-20 items-center justify-center overflow-hidden rounded-full border-2 border-gold-400/60 bg-gradient-to-br from-gold-400/25 to-transparent md:size-24">
              <Image
                src={siteConfig.lawyer.photo}
                alt={`Foto de perfil de ${siteConfig.lawyer.name}`}
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -right-1 -bottom-1 flex size-6 items-center justify-center rounded-full bg-gold-400 text-ink-950"
            >
              <Scale className="size-3.5" />
            </span>
          </div>

          <div>
            <p className="eyebrow text-[10px] text-gold-400/80">Advogado</p>
            <h3 className="mt-1 font-display text-xl font-semibold text-ivory-100 md:text-2xl">
              {siteConfig.lawyer.name}
            </h3>
            <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-gold-400/10 px-3 py-1 text-[11px] font-medium tracking-wide text-gold-400">
              <BadgeCheck className="size-3.5" aria-hidden="true" />
              {siteConfig.lawyer.oab}
            </span>
          </div>
        </div>

        <div className="border-t border-white/[0.06] px-7 py-5">
          <p className="text-[11px] font-medium tracking-[0.25em] text-ivory-100/40 uppercase">
            Especialidades
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {siteConfig.lawyer.specialities.map((speciality) => (
              <li
                key={speciality}
                className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-ivory-100/80"
              >
                {speciality}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-3 border-t border-white/[0.06] px-7 py-5 sm:grid-cols-2">
          <a
            href={siteConfig.telUrl}
            className="group flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 transition-colors hover:border-gold-400/40"
          >
            <Phone className="size-4 shrink-0 text-gold-400" aria-hidden="true" />
            <span className="text-sm text-ivory-100/85 group-hover:text-gold-400">
              {siteConfig.phone.display}
            </span>
          </a>
          <a
            href={siteConfig.emailUrl}
            className="group flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 transition-colors hover:border-gold-400/40"
          >
            <Mail className="size-4 shrink-0 text-gold-400" aria-hidden="true" />
            <span className="truncate text-sm text-ivory-100/85 group-hover:text-gold-400">
              {siteConfig.email}
            </span>
          </a>
        </div>

        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 border-t border-gold-400/20 bg-gold-400/[0.08] px-7 py-4 text-sm font-medium text-gold-400 transition-colors hover:bg-gold-400 hover:text-ink-950"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Atendimento imediato pelo WhatsApp
        </a>
      </div>
    </TiltCard>
  );
}
