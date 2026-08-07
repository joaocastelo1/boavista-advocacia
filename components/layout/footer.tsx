import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { navigation } from "@/constants/navigation";
import { areas } from "@/constants/areas";
import { siteConfig } from "@/lib/site";

const socialLinks = [
  { label: "Instagram", href: siteConfig.social.instagram, icon: Instagram },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
  { label: "Facebook", href: siteConfig.social.facebook, icon: Facebook },
];

const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
  `Boavista Advocacia — Bruno Boavista Castelo Branco, advogado em Codó (MA). Confira: ${siteConfig.url}`
)}`;

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950 text-ivory-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"
      />

      <div className="container-max grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartilhar Boavista Advocacia no WhatsApp"
            className="inline-block transition-opacity duration-300 hover:opacity-85"
          >
            <Image
              src="/images/logo0.png"
              alt="Boavista Advocacia"
              width={1774}
              height={887}
              className="h-20 w-auto object-contain md:h-24"
            />
          </a>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory-100/60">
            Advocacia dedicada a proteger seus direitos com ética, estratégia, inteligência e
            resultados em todo o Brasil.
          </p>
          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2 text-xs font-medium text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-ink-950"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Compartilhar no WhatsApp
          </a>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ivory-100/80 transition-all hover:border-gold-400/60 hover:text-gold-400"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Links rápidos">
          <h3 className="font-cinzel text-sm font-semibold tracking-[0.25em] text-gold-400 uppercase">
            Navegação
          </h3>
          <ul className="mt-6 space-y-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-ivory-100/60 transition-colors hover:text-gold-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Áreas de atuação">
          <h3 className="font-cinzel text-sm font-semibold tracking-[0.25em] text-gold-400 uppercase">
            Áreas
          </h3>
          <ul className="mt-6 space-y-3">
            {areas.slice(0, 6).map((area) => (
              <li key={area.slug}>
                <a
                  href="#areas"
                  className="text-sm text-ivory-100/60 transition-colors hover:text-gold-400"
                >
                  {area.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-cinzel text-sm font-semibold tracking-[0.25em] text-gold-400 uppercase">
            Contato
          </h3>
          <ul className="mt-6 space-y-4 text-sm text-ivory-100/60">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden="true" />
              <span>{siteConfig.address.full}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-gold-400" aria-hidden="true" />
              <a href={siteConfig.telUrl} className="transition-colors hover:text-gold-400">
                {siteConfig.phone.display}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-gold-400" aria-hidden="true" />
              <a href={siteConfig.emailUrl} className="transition-colors hover:text-gold-400">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="size-4 shrink-0 text-gold-400" aria-hidden="true" />
              <span>{siteConfig.openHours}</span>
            </li>
          </ul>
        </div>
      </div>

      <Separator className="bg-white/[0.06]" />

      <div className="container-max flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-ivory-100/40 md:flex-row md:text-left">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
        <p>
          {siteConfig.lawyer.oab} · Advogado Responsável {siteConfig.lawyer.name}
        </p>
        <p className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-center md:justify-start md:text-left">
          Desenvolvido por
          <a
            href={siteConfig.developer.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-ivory-100/60 transition-colors hover:text-gold-400"
          >
            <Image
              src="/images/logo-jc.png"
              alt="João Castelo de Sousa Ferreira"
              width={89}
              height={78}
              className="h-4 w-auto object-contain"
            />
            {siteConfig.developer.name}
          </a>
          <span aria-hidden="true">·</span>
          <span>WhatsApp</span>
          <a
            href={siteConfig.developer.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ivory-100/60 transition-colors hover:text-gold-400"
          >
            (86) 99903-2854
          </a>
        </p>
      </div>
    </footer>
  );
}
