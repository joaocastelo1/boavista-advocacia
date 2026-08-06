import { Scale, Gavel, Handshake, FileCheck2, RefreshCcw, Compass } from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Consultoria Jurídica",
    description:
      "Orientação preventiva e estratégica para pessoas e empresas tomarem decisões seguras e evitarem litígios.",
    icon: Compass,
    features: ["Análise de risco", "Assessoria contínua", "Decisões seguras"],
  },
  {
    title: "Defesa Judicial",
    description:
      "Atuação completa em ações judiciais, com petições técnicas e acompanhamento próximo em cada etapa.",
    icon: Gavel,
    features: ["Ações cíveis e previdenciárias", "Acompanhamento processual", "Estratégia de defesa"],
  },
  {
    title: "Acordos & Negociações",
    description:
      "Negociação de acordos extrajudiciais que economizam tempo e dinheiro, preservando relações comerciais.",
    icon: Handshake,
    features: ["Mediação e conciliação", "Acordos extrajudiciais", "Resolução ágil"],
  },
  {
    title: "Parecer Jurídico",
    description:
      "Pareceres técnicos fundamentados para embasar decisões corporativas, contratos e operações.",
    icon: FileCheck2,
    features: ["Análise documental", "Fundamentação técnica", "Segurança corporativa"],
  },
  {
    title: "Recursos & Tribunais",
    description:
      "Elaboração de recursos estratégicos junto aos Tribunais, incluindo STF e STJ, para reverter decisões.",
    icon: Scale,
    features: ["Recursos ordinários", "Ações constitucionais", "Atuação em Cortes Superiores"],
  },
  {
    title: "Planejamento Jurídico",
    description:
      "Estruturação patrimonial, societária e sucessória para proteger o que você construiu ao longo da vida.",
    icon: RefreshCcw,
    features: ["Planejamento sucessório", "Proteção patrimonial", "Governança familiar"],
  },
];
