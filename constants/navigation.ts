import type { NavItem } from "@/types";

export const navigation: NavItem[] = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas", href: "#areas" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "E-book", href: "#ebook" },
  { label: "Contato", href: "#contato" },
];

export const sectionIds = {
  home: "home",
  sobre: "sobre",
  perfil: "perfil",
  areas: "areas",
  diferenciais: "diferenciais",
  cobertura: "cobertura",
  comoFunciona: "como-funciona",
  servicos: "servicos",
  depoimentos: "depoimentos",
  galeria: "galeria",
  faq: "faq",
  ebook: "ebook",
  contato: "contato",
} as const;
