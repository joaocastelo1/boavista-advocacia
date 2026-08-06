import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type MetadataProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/images/og-cover.png",
}: MetadataProps = {}): Metadata {
  const resolvedTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Advocacia Premium`;

  const resolvedDescription = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} | Advocacia Premium`,
      template: `%s | ${siteConfig.name}`,
    },
    description: resolvedDescription,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      siteName: siteConfig.name,
      title: resolvedTitle,
      description: resolvedDescription,
      images: [{ url: image, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "law",
  };
}
