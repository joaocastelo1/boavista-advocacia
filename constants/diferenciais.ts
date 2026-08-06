import {
  HeartHandshake,
  ShieldCheck,
  Zap,
  BadgeCheck,
  Eye,
  Laptop,
  Brain,
} from "lucide-react";
import type { Differencial } from "@/types";

export const diferenciais: Differencial[] = [
  {
    title: "Atendimento Humanizado",
    description: "Cada cliente é ouvido com atenção, acolhimento e respeito à sua história.",
    icon: HeartHandshake,
  },
  {
    title: "Inteligência",
    description: "Raciocínio jurídico afiado e estratégia sob medida para cada desafio.",
    icon: Brain,
  },
  {
    title: "Ética",
    description: "Conduta irrepreensível, sigilo absoluto e transparência em todas as etapas.",
    icon: ShieldCheck,
  },
  {
    title: "Ousadia",
    description: "Atuação corajosa e estratégica, sem abrir mão da técnica e da ética.",
    icon: Zap,
  },
  {
    title: "Confiança",
    description: "Atendimento próximo e transparente, construindo confiança em cada relação.",
    icon: BadgeCheck,
  },
  {
    title: "Transparência",
    description: "Honorários claros e comunicação constante sobre o andamento do caso.",
    icon: Eye,
  },
  {
    title: "Atendimento Online",
    description: "Consultas por videoconferência e contato direto pelo WhatsApp em todo o Brasil.",
    icon: Laptop,
  },
];
