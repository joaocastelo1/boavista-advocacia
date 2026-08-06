import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0D0D0D",
    theme_color: "#0D0D0D",
    lang: "pt-BR",
    icons: [
      {
        src: "/images/logo4.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
