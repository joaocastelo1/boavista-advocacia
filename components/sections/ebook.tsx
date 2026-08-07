import { BookOpen, Check, FileText, ShoppingCart } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { Magnetic } from "@/components/animations/magnetic";
import { Button } from "@/components/ui/button";
import { EbookCover } from "./ebook/ebook-cover";
import { siteConfig } from "@/lib/site";

export function Ebook() {
  const { ebook } = siteConfig;

  return (
    <section id="ebook" aria-label="E-book à venda" className="section-pad relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-400/40 to-transparent"
      />

      <div className="container-max">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold-400/20 bg-gradient-to-br from-card via-card to-ink-950/5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] dark:from-ink-900/60 dark:to-ink-950/40">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-gold-400/10 blur-[120px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-blue-600/10 blur-[120px]"
            />

            <div className="relative grid gap-10 p-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-center md:p-14 lg:p-16">
              <Reveal direction="right">
                <EbookCover />
              </Reveal>

              <div>
                <Reveal>
                  <p className="eyebrow flex items-center gap-3 text-gold-400">
                    <BookOpen className="size-4" aria-hidden="true" />
                    E-book
                  </p>
                </Reveal>

                <Reveal delay={0.1}>
                  <h2 className="mt-5 font-display text-3xl leading-tight font-bold md:text-4xl">
                    {ebook.title}
                  </h2>
                </Reveal>

                <Reveal delay={0.2}>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    {ebook.description}
                  </p>
                </Reveal>

                <Reveal delay={0.25}>
                  <p className="mt-4 text-sm font-medium text-gold-400">Por {ebook.author}</p>
                </Reveal>

                <ul className="mt-8 space-y-3.5">
                  {ebook.benefits.map((benefit, index) => (
                    <Reveal key={benefit} delay={0.3 + index * 0.06}>
                      <li className="flex items-start gap-3">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-400">
                          <Check className="size-3" aria-hidden="true" />
                        </span>
                        <span className="text-sm leading-relaxed text-muted-foreground md:text-base">
                          {benefit}
                        </span>
                      </li>
                    </Reveal>
                  ))}
                </ul>

                <Reveal delay={0.55}>
                  <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-gold-400/25 bg-background/60 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        <FileText className="mr-1 inline size-4 align-[-2px]" aria-hidden="true" />
                        {ebook.format}
                      </p>
                      <p className="mt-2 font-display text-3xl font-bold text-gold-400">
                        {ebook.price}
                      </p>
                    </div>
                    <Magnetic strength={0.2}>
                      <Button asChild size="lg" className="w-full sm:w-auto">
                        <a href={ebook.buyUrl} target="_blank" rel="noopener noreferrer">
                          <ShoppingCart />
                          Comprar e-book
                        </a>
                      </Button>
                    </Magnetic>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
