# Boavista Advocacia

Landing page premium para o escritório de advocacia Boavista Advocacia, construída com **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS 4**, **Framer Motion** e **GSAP**.

## Funcionalidades

- Layout 100% responsivo (mobile, tablet e desktop)
- Modo claro/escuro
- Formulário de contato validado (zod + react-hook-form) com envio por e-mail ou fallback para WhatsApp
- WhatsApp flutuante, menu mobile animado e pré-loader de marca
- SEO completo: Open Graph, JSON-LD (LegalService/FAQ), sitemap e robots.txt

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Configuração de ambiente

Copie `.env.example` para `.env.local` e preencha os valores (URL, WhatsApp, e-mail e provedor de envio de mensagens — Resend ou SMTP).

| Variável | Descrição |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública do site (usada em sitemap, robots e Open Graph) |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp do escritório em formato internacional, só dígitos (ex.: `5599982597369`) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | E-mail institucional exibido no site |
| `RESEND_API_KEY` / `CONTACT_FROM_EMAIL` | Envio de mensagens via Resend (opcional) |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` / `SMTP_USER` / `SMTP_PASS` | Envio de mensagens via SMTP (opcional) |

> Sem provedor de e-mail configurado, o formulário abre automaticamente o WhatsApp com a mensagem pronta.

## Deploy na Vercel

1. Importe este repositório em [vercel.com/new](https://vercel.com/new).
2. Defina a variável `NEXT_PUBLIC_SITE_URL` com a URL final do site (ex.: `https://www.boavistaadvocacia.com.br`).
3. Configure um provedor de envio de e-mail (Resend ou SMTP) se quiser receber as mensagens por e-mail.
4. Deploy. O build é detectado automaticamente (`next build`).

## Scripts

```bash
npm run dev        # ambiente de desenvolvimento
npm run build      # build de produção
npm run start      # serve a build de produção
npm run lint       # eslint
npm run typecheck  # verificação de tipos (tsc)
npm run format     # formatação (prettier)
```

## Licença

Projeto privado. Todos os direitos reservados.
