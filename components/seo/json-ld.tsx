import { Scale } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LegalService", "Attorney"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.legalName,
        alternateName: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/og-cover.png`,
        image: `${siteConfig.url}/images/og-cover.png`,
        telephone: siteConfig.phone.display,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.zip,
          addressCountry: "BR",
        },
        areaServed: { "@type": "Country", name: "Brasil" },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        sameAs: [
          siteConfig.social.instagram,
          siteConfig.social.youtube,
          siteConfig.social.facebook,
        ],
        knowsAbout: siteConfig.lawyer.specialities,
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#attorney`,
        name: siteConfig.lawyer.name,
        jobTitle: siteConfig.lawyer.role,
        image: `${siteConfig.url}${siteConfig.lawyer.photo}`,
        memberOf: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "pt-BR",
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Como funciona a primeira consulta?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Na primeira consulta você apresenta o seu caso e os documentos relevantes. O advogado faz uma análise preliminar, esclarece suas dúvidas e apresenta as possibilidades jurídicas, prazos e honorários, presencialmente ou por videoconferência.",
            },
          },
          {
            "@type": "Question",
            name: "O atendimento pode ser feito totalmente online?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim. Atendemos clientes em todo o Brasil por videoconferência, WhatsApp e e-mail, com atualizações constantes sobre o andamento do caso.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function LegalDisclaimer() {
  return (
    <p className="sr-only">
      <Scale aria-hidden="true" />
      Escritório de advocacia regularmente inscrito na Ordem dos Advogados do Brasil.
    </p>
  );
}
