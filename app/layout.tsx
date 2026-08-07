import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { Preloader } from "@/components/layout/preloader";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { BackToTop } from "@/components/layout/back-to-top";
import { JsonLd } from "@/components/seo/json-ld";
import { fontVariables } from "@/lib/fonts";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("x-forwarded-host") ?? headersList.get("host");
  const proto = headersList.get("x-forwarded-proto") ?? "https";
  const baseUrl = host ? `${proto}://${host}` : siteConfig.url;
  return buildMetadata({ baseUrl });
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0D0D0D" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={fontVariables}>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>
          <a
            href="#conteudo"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[300] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
          >
            Pular para o conteúdo principal
          </a>

          <Preloader />
          <ScrollProgress />
          <Navbar />

          <main id="conteudo">{children}</main>

          <Footer />
          <WhatsAppFloat />
          <BackToTop />
          <Toaster position="top-right" richColors closeButton />
        </ThemeProvider>
        <JsonLd />
      </body>
    </html>
  );
}
