import { siteConfig } from "@/lib/site";
import type { ContactSchema } from "@/lib/validations/contact";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "site@boavistaadvocacia.com.br";
const TO_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL ?? siteConfig.email;

export function hasEmailProvider(): boolean {
  if (RESEND_API_KEY) return true;
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
  );
}

function formatContact(data: ContactSchema): { subject: string; text: string; html: string } {
  const subject = `[Contato do site] ${data.subject}`;

  const text = [
    `Nova mensagem recebida pelo site ${siteConfig.name}.`,
    "",
    `Nome: ${data.name}`,
    `E-mail: ${data.email}`,
    `Telefone: ${data.phone}`,
    `Assunto: ${data.subject}`,
    "",
    "Mensagem:",
    data.message,
  ].join("\n");

  const html = [
    `<div style="font-family:Arial,Helvetica,sans-serif;color:#1a1a1a;line-height:1.6">`,
    `<h2 style="color:#977a1f;margin-bottom:4px">Nova mensagem do site</h2>`,
    `<p style="margin-top:0;color:#777;font-size:13px">Recebida via ${siteConfig.name}</p>`,
    `<table style="border-collapse:collapse;width:100%;max-width:520px;font-size:14px">`,
    `<tr><td style="padding:6px 0;font-weight:bold;white-space:nowrap;width:110px">Nome</td><td>${escapeHtml(data.name)}</td></tr>`,
    `<tr><td style="padding:6px 0;font-weight:bold">E-mail</td><td><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>`,
    `<tr><td style="padding:6px 0;font-weight:bold">Telefone</td><td>${escapeHtml(data.phone)}</td></tr>`,
    `<tr><td style="padding:6px 0;font-weight:bold">Assunto</td><td>${escapeHtml(data.subject)}</td></tr>`,
    `</table>`,
    `<div style="margin-top:16px;padding:16px;background:#f6f4ee;border-left:3px solid #d4af37;border-radius:6px;font-size:14px;white-space:pre-wrap">${escapeHtml(data.message)}</div>`,
    `</div>`,
  ].join("\n");

  return { subject, text, html };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function buildContactWhatsAppUrl(data: ContactSchema): string {
  const text = [
    `Olá! Vim pelo site e gostaria de falar sobre: ${data.subject}`,
    "",
    `Nome: ${data.name}`,
    `Telefone: ${data.phone}`,
    `E-mail: ${data.email}`,
    "",
    data.message,
  ].join("\n");

  return `https://wa.me/${siteConfig.phone.raw}?text=${encodeURIComponent(text)}`;
}

export async function sendContactEmail(data: ContactSchema): Promise<void> {
  const { subject, text, html } = formatContact(data);

  if (RESEND_API_KEY) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        replyTo: data.email,
        subject,
        text,
        html,
      }),
    });

    if (!response.ok) {
      const details = await response.text().catch(() => "");
      throw new Error(`Falha ao enviar e-mail via Resend (${response.status}): ${details}`);
    }
    return;
  }

  const { default: nodemailer } = await import("nodemailer");

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${siteConfig.name}" <${FROM_EMAIL}>`,
    to: TO_EMAIL,
    replyTo: data.email,
    subject,
    text,
    html,
  });
}
