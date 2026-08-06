import { Scale, ShieldCheck, ShoppingBag, Home } from "lucide-react";
import type { Area } from "@/types";

export const areas: Area[] = [
  {
    slug: "direito-civil",
    title: "Direito Civil",
    description:
      "Contratos, indenizações, responsabilidade civil e demandas patrimoniais conduzidas com precisão técnica e estratégia.",
    icon: Scale,
  },
  {
    slug: "direito-previdenciario",
    title: "Direito Previdenciário",
    description:
      "Aposentadorias, benefícios do INSS, revisões e planejamento previdenciário para garantir o que é seu por direito.",
    icon: ShieldCheck,
  },
  {
    slug: "direito-consumidor",
    title: "Direito do Consumidor",
    description:
      "Defesa contra abusos, cobranças indevidas e reparação de danos em relações de consumo.",
    icon: ShoppingBag,
  },
  {
    slug: "direito-imobiliario",
    title: "Direito Imobiliário",
    description:
      "Compra e venda de imóveis, locações, usucapião e regularização patrimonial com segurança jurídica.",
    icon: Home,
  },
];
