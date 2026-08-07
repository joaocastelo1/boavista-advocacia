/**
 * Configuração central do site.
 * Edite aqui os dados do escritório — tudo é consumido a partir deste arquivo.
 */
export const siteConfig = {
  name: "Boavista Advocacia",
  legalName: "Boavista Advocacia – Escritório de Advocacia",
  tagline: "Guiado por princípios de zelo, excelência e integridade.",
  description:
    "O Boavista Advocacia preza pela satisfação máxima de seus clientes, com atendimento jurídico especializado nas áreas cível, previdenciária e do consumidor, em todo o Brasil.",
  keywords: [
    "advocacia",
    "advogado",
    "escritório de advocacia",
    "advogado em codó",
    "advocacia no maranhão",
    "boavista advocacia",
    "direito civil",
    "direito previdenciário",
    "direito do consumidor",
    "direito imobiliário",
    "atendimento jurídico online",
  ],

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.boavistaadvocacia.com.br",

  phone: {
    display: "(98) 98258-3769",
    displayShort: "(98) 98258-3769",
    raw: process.env.NEXT_PUBLIC_WHATSAPP ?? "5598982583769",
  },

  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "bruno@boavistaadvocacia.com.br",

  address: {
    street: "Avenida Duque de Caxias, 282 A",
    district: "Bairro São Sebastião",
    city: "Codó",
    state: "MA",
    zip: "65400-000",
    full: "Avenida Duque de Caxias, 282 A – Bairro São Sebastião, Codó – MA",
    mapsQuery: "Avenida Duque de Caxias, 282, Codó - MA",
  },

  social: {
    instagram: "https://www.instagram.com/boavista_bruno",
    facebook: "https://www.facebook.com/bruno.boavista.7",
    youtube: "https://www.youtube.com/@brunoboavista5252",
  },

  developer: {
    name: "João Castelo de Sousa Ferreira",
    phone: "(86) 99903-2854",
    raw: process.env.NEXT_PUBLIC_DEV_WHATSAPP ?? "5586999032854",
    whatsappMessage:
      "Olá! Vi o site da Boavista Advocacia e gostaria de falar com você sobre desenvolvimento web.",
    get whatsappUrl() {
      return `https://wa.me/${this.raw}?text=${encodeURIComponent(this.whatsappMessage)}`;
    },
  },

  ebook: {
    title: "As Origens dos Princípios Jurídicos do Ocidente",
    author: "Bruno Boavista Castelo Branco",
    description:
      "Uma jornada pelas bases históricas, filosóficas e religiosas que moldaram o Direito Ocidental — do Direito Romano aos princípios que orientam a Justiça contemporânea.",
    cover: "/images/ebook1.jpeg",
    benefits: [
      "As raízes do Direito Romano e sua influência até os dias de hoje",
      "O papel da filosofia grega e do Direito Canônico na formação dos princípios jurídicos",
      "Como nasceram os conceitos de justiça, equidade e cidadania no Ocidente",
      "Linguagem clara e didática, sem jargões desnecessários",
    ],
    price: "R$ 14,99",
    format: "E-book em PDF",
    pages: "Formato digital",
    buyUrl: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP ?? "5598982583769"}?text=${encodeURIComponent(
      `Olá! Quero adquirir o e-book "As Origens dos Princípios Jurídicos do Ocidente" (R$ 14,99).`
    )}`,
  },

  lawyer: {
    name: "Bruno Boavista Castelo Branco",
    firstName: "Bruno",
    role: "Advogado",
    oab: "OAB/MA 26531",
    email: "bruno@boavistaadvocacia.com.br",
    phone: "(98) 98258-3769",
    photo: "/images/adv principal.png",
    specialities: [
      "Direito Civil",
      "Direito Previdenciário",
      "Direito do Consumidor",
      "Direito Imobiliário",
    ],
    bio: [
      "Advogado dedicado, Bruno Boavista Castelo Branco une inteligência jurídica, ousadia estratégica e um atendimento próximo, claro e transparente com cada cliente.",
      "Guiado por princípios de zelo, excelência e integridade, o Boavista Advocacia preza pela satisfação máxima de seus clientes, atuando de forma consultiva e contenciosa em todo o Brasil.",
    ],
    formation: ["Graduação em Direito"],
  },

  whatsappMessage:
    "Olá! Vim pelo site da Boavista Advocacia e gostaria de falar com o advogado. Poderia me ajudar?",

  get whatsappUrl() {
    return `https://wa.me/${this.phone.raw}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },

  get emailUrl() {
    return `mailto:${this.email}`;
  },

  get telUrl() {
    return `tel:+${this.phone.raw}`;
  },

  openHours: "Segunda a sexta, das 8h às 18h",
} as const;
