"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { applyPhoneMask, contactSchema, type ContactSchema } from "@/lib/validations/contact";
import { siteConfig } from "@/lib/site";

const subjectOptions = [
  "Consultoria Jurídica",
  "Direito Civil",
  "Direito Previdenciário",
  "Direito do Consumidor",
  "Direito Imobiliário",
  "Outro assunto",
];

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactSchema) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const payload = (await response.json().catch(() => null)) as {
        ok: boolean;
        code?: string;
        whatsappUrl?: string;
      } | null;

      if (payload?.ok) {
        toast.success("Mensagem enviada com sucesso!", {
          description: "Nossa equipe retornará em até 1 hora útil.",
        });
        reset();
        return;
      }

      if (payload?.code === "NO_PROVIDER" && payload.whatsappUrl) {
        window.open(payload.whatsappUrl, "_blank", "noopener,noreferrer");
        toast.success("Mensagem preparada!", {
          description:
            "Abrimos o WhatsApp para você concluir o envio em poucos segundos.",
        });
        reset();
        return;
      }

      throw new Error("Falha no envio");
    } catch {
      toast.error("Não foi possível enviar a mensagem", {
        description: "Tente novamente em instantes ou fale conosco pelo WhatsApp.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">
            Nome completo <span className="text-gold-400">*</span>
          </Label>
          <Input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Seu nome"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p role="alert" className="text-xs text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            E-mail <span className="text-gold-400">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="voce@email.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p role="alert" className="text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">
            Telefone / WhatsApp <span className="text-gold-400">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            aria-invalid={!!errors.phone}
            {...register("phone", {
              onChange: (event) => {
                setValue("phone", applyPhoneMask(event.target.value), {
                  shouldValidate: true,
                });
              },
            })}
          />
          {errors.phone && (
            <p role="alert" className="text-xs text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">
            Assunto <span className="text-gold-400">*</span>
          </Label>
          <select
            id="subject"
            aria-invalid={!!errors.subject}
            className="flex h-12 w-full rounded-lg border border-input bg-background/60 px-3 text-base text-foreground shadow-sm transition-colors outline-none focus-visible:border-gold-400/70 focus-visible:ring-2 focus-visible:ring-primary/25 md:text-sm"
            defaultValue=""
            {...register("subject")}
          >
            <option value="" disabled>
              Selecione o assunto
            </option>
            {subjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p role="alert" className="text-xs text-red-500">
              {errors.subject.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Mensagem <span className="text-gold-400">*</span>
        </Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Descreva brevemente a sua situação..."
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p role="alert" className="text-xs text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
          <input
            type="checkbox"
            className="mt-0.5 size-4 shrink-0 accent-[#D4AF37]"
            aria-invalid={!!errors.consent}
            {...register("consent")}
          />
          <span>
            Autorizo o uso dos meus dados para contato, conforme a política de privacidade.
            <span className="text-gold-400"> *</span>
          </span>
        </label>
        {errors.consent && (
          <p role="alert" className="text-xs text-red-500">
            {errors.consent.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={isSubmitting} className="flex-1">
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" aria-hidden="true" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="size-4" aria-hidden="true" />
              Enviar mensagem
            </>
          )}
        </Button>
        <Button asChild variant="whatsapp" size="lg" className="flex-1">
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle />
            WhatsApp direto
          </a>
        </Button>
      </div>
    </form>
  );
}
