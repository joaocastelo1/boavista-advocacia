import { Scale } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <span className="flex size-20 items-center justify-center rounded-2xl border border-gold-400/40 bg-gold-400/10 text-gold-400">
        <Scale className="size-9" aria-hidden="true" />
      </span>
      <p className="font-cinzel text-sm tracking-[0.4em] text-gold-400 uppercase">Erro 404</p>
      <h1 className="max-w-md font-display text-3xl font-semibold md:text-4xl">
        Página não encontrada
      </h1>
      <p className="max-w-md text-muted-foreground">
        O endereço que você procura não existe ou foi movido. Volte para a página inicial do
        escritório.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <Link href="/">Voltar ao início</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}
