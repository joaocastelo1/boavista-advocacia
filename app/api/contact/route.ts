import { NextResponse } from "next/server";

import {
  buildContactWhatsAppUrl,
  hasEmailProvider,
  sendContactEmail,
} from "@/lib/mail";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { ok: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    if (!hasEmailProvider()) {
      return NextResponse.json({
        ok: false,
        code: "NO_PROVIDER",
        whatsappUrl: buildContactWhatsAppUrl(data),
      });
    }

    await sendContactEmail(data);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/contact]", error);
    return NextResponse.json({ ok: false, code: "ERROR" }, { status: 500 });
  }
}
