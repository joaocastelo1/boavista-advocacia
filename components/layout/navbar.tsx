"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";

import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Magnetic } from "@/components/animations/magnetic";
import { Button } from "@/components/ui/button";
import { navigation } from "@/constants/navigation";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrolled } from "@/hooks/use-scrolled";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrolled(48);
  const active = useActiveSection(navigation.map((item) => item.href));
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500",
          scrolled
            ? "border-b border-white/[0.06] bg-ink-950/85 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="container-max flex h-18 items-center justify-between gap-4 md:h-20">
          <Logo />

          <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const isActive = active === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium tracking-wide transition-colors",
                    isActive ? "text-gold-400" : "text-ivory-100/85 hover:text-gold-400"
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-gradient-to-r from-gold-400 to-transparent transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="hidden md:block">
              <Magnetic>
                <Button asChild size="lg" className="h-11">
                  <a href="#contato">Agendar Consulta</a>
                </Button>
              </Magnetic>
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu de navegação"
              aria-expanded={open}
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ivory-100 backdrop-blur transition-colors hover:border-gold-400/50 hover:text-gold-400 lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && <MobileMenu onClose={() => setOpen(false)} whatsappUrl={siteConfig.whatsappUrl} />}
      </AnimatePresence>
    </>
  );
}
