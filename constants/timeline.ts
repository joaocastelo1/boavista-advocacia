import { PhoneCall, SearchCheck, Route, LineChart, Trophy } from "lucide-react";
import type { TimelineStep } from "@/types";

export const timelineSteps: TimelineStep[] = [
  {
    number: "01",
    title: "Contato",
    description:
      "Você entra em contato pelo WhatsApp, telefone ou formulário. Retornamos em até 1 hora útil.",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Análise",
    description:
      "Analisamos sua situação e documentos com profundidade técnica e visão estratégica.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Estratégia",
    description:
      "Apresentamos a melhor estratégia jurídica, prazos, riscos e honorários de forma transparente.",
    icon: Route,
  },
  {
    number: "04",
    title: "Acompanhamento",
    description: "Você recebe atualizações constantes e acompanha cada movimentação do seu caso.",
    icon: LineChart,
  },
  {
    number: "05",
    title: "Resultado",
    description: "Trabalhamos com dedicação para entregar o melhor resultado, sempre com ética.",
    icon: Trophy,
  },
];
