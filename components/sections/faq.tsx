import { MessageCircle } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/constants/faq";
import { siteConfig } from "@/lib/site";

export function Faq() {
  return (
    <section
      id="faq"
      className="section-pad relative overflow-hidden bg-muted/40 dark:bg-ink-900/30"
    >
      <div className="container-max grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Perguntas Frequentes"
            title="Tire suas dúvidas antes de começar"
            description="Reunimos as respostas para as perguntas mais comuns dos nossos clientes. Não encontrou o que procura? Fale diretamente com a nossa equipe."
          />
          <Reveal delay={0.2}>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3.5 text-sm font-medium text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-ink-950"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Falar com um advogado agora
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
