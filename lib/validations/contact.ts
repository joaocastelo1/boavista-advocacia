import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(3, "Informe o seu nome completo").max(120, "Nome muito longo"),
  email: z.string().trim().email("Informe um e-mail válido"),
  phone: z
    .string()
    .trim()
    .min(1, "Informe o seu telefone")
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 11;
    }, "Informe um telefone válido com DDD"),
  subject: z.string().trim().min(3, "Informe um assunto").max(160, "Assunto muito longo"),
  message: z.string().trim().min(10, "Descreva o seu caso em pelo menos 10 caracteres").max(2000),
  consent: z.literal(true, {
    errorMap: () => ({ message: "É necessário aceitar a política de privacidade" }),
  }),
});

export type ContactSchema = z.infer<typeof contactSchema>;

export function applyPhoneMask(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}
