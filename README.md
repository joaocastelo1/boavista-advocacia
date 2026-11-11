# Boavista Advocacia

Site institucional do escritório **Boavista Advocacia**, em Codó (MA). Landing page responsiva, com identidade visual premium, apresentação das áreas de atuação, galeria do escritório, formulário de contato e atendimento via WhatsApp.

- **Produção:** https://www.boavistaadvocacia.com.br
- **Vercel:** https://boavista-advocacia.vercel.app

## Stack

- Next.js 15 (App Router) e React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Embla Carousel (galeria com autoplay e lightbox)
- React Hook Form + Zod
- Nodemailer ou Resend para envio do formulário

## Funcionalidades

- Layout 100% responsivo (mobile, tablet e desktop)
- Tema escuro com detalhes em dourado
- Hero com cartão de visita, destaques e chamadas para ação
- Galeria de fotos do escritório em carrossel animado com lightbox
- Áreas de atuação, diferenciais, depoimentos e FAQ
- Formulário de contato validado, com envio por e-mail ou fallback para WhatsApp
- Botão flutuante de WhatsApp, menu mobile e navegação por seções
- SEO completo: metadados, Open Graph, JSON-LD (LegalService/FAQ), sitemap e robots.txt

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Configuração de ambiente

Copie `.env.example` para `.env.local` e preencha os valores. Sem provedor de e-mail configurado, o formulário abre o WhatsApp com a mensagem pronta.

| Variável | Descrição |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública do site (usada em sitemap, robots e Open Graph) |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp do escritório em formato internacional, só dígitos (ex.: `5599982597369`) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | E-mail institucional exibido no site |
| `RESEND_API_KEY` / `CONTACT_FROM_EMAIL` | Envio de mensagens via Resend (opcional) |
| `CONTACT_RECIPIENT_EMAIL` | Destinatário das mensagens (padrão: e-mail institucional) |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` / `SMTP_USER` / `SMTP_PASS` | Envio de mensagens via SMTP (opcional) |

## Deploy

O repositório está conectado à Vercel: cada push na branch `main` dispara um deploy de produção automaticamente.

Para um novo ambiente, importe o repositório em [vercel.com/new](https://vercel.com/new), configure as variáveis acima e publique. O build (`next build`) é detectado automaticamente.

## Scripts

```bash
npm run dev        # ambiente de desenvolvimento
npm run build      # build de produção
npm run start      # serve a build de produção
npm run lint       # eslint
npm run typecheck  # verificação de tipos (tsc)
npm run format     # formatação (prettier)
```

## Estrutura

```
app/          páginas, layout, SEO e API de contato
components/   seções, layout e componentes de UI
constants/    áreas, galeria, FAQ, depoimentos e navegação
lib/          configurações do site, e-mail e utilidades
public/       imagens e arquivos estáticos
```

## Licença

Projeto privado. Todos os direitos reservados.
