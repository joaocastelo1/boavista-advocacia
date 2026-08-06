import { Scale } from "lucide-react";

const items = [
  "Ética",
  "Excelência",
  "Inteligência",
  "Ousadia",
  "Resultados",
  "Confiança",
  "Sigilo",
  "Estratégia",
  "Atendimento Humanizado",
  "Compromisso",
];

export function MarqueeBar() {
  return (
    <div
      className="relative overflow-hidden border-y border-gold-400/20 bg-ink-900 py-5"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="flex items-center gap-12 font-cinzel text-sm tracking-[0.35em] text-gold-400/80 uppercase"
          >
            {item}
            <Scale className="size-4 text-gold-400/30" />
          </span>
        ))}
      </div>
    </div>
  );
}
