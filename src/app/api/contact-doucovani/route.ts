import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getLecturerById } from "@/lib/lektors";

const MAX_LEN = 5000;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Neplatný formát požadavku." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Chybí data." }, { status: 400 });
  }

  const b = body as Record<string, unknown>;

  const honeypot = typeof b.website === "string" ? b.website : "";
  if (honeypot.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const jmeno = typeof b.jmeno === "string" ? b.jmeno.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const telefon = typeof b.telefon === "string" ? b.telefon.trim() : "";
  const zprava = typeof b.zprava === "string" ? b.zprava.trim() : "";
  const ucitelId = typeof b.ucitelId === "string" ? b.ucitelId.trim() : "";

  if (jmeno.length < 2 || jmeno.length > 120) {
    return NextResponse.json({ error: "Vyplň prosím jméno (2–120 znaků)." }, { status: 400 });
  }
  if (!isValidEmail(email) || email.length > 254) {
    return NextResponse.json({ error: "Vyplň platný e-mail." }, { status: 400 });
  }
  if (telefon.length > 40) {
    return NextResponse.json({ error: "Telefon je příliš dlouhý." }, { status: 400 });
  }
  if (zprava.length < 10 || zprava.length > MAX_LEN) {
    return NextResponse.json(
      { error: "Zpráva ať má alespoň 10 znaků a nejvýše 5000." },
      { status: 400 },
    );
  }

  let ucitel: { jmeno: string } | null = null;
  if (ucitelId && ucitelId !== "libovolne") {
    const row = await getLecturerById(ucitelId);
    if (!row) {
      return NextResponse.json({ error: "Neplatná volba učitele." }, { status: 400 });
    }
    ucitel = { jmeno: row.jmeno };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.DOUCOVANI_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      {
        error:
          "Odesílání e-mailu není na serveru nastavené. Kontaktujte prosím provozovatele webu.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const ucitelTxt = ucitel ? ucitel.jmeno : "bez preference (doporučíme lektora)";

  const text = [
    `Nová poptávka doučování (Naučíme.se)`,
    ``,
    `Jméno: ${jmeno}`,
    `E-mail: ${email}`,
    telefon ? `Telefon: ${telefon}` : `Telefon: —`,
    `Preference učitele: ${ucitelTxt}`,
    ``,
    `Zpráva:`,
    zprava,
  ].join("\n");

  const html = `
    <h1>Nová poptávka doučování</h1>
    <p><strong>Jméno:</strong> ${escapeHtml(jmeno)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefon:</strong> ${telefon ? escapeHtml(telefon) : "—"}</p>
    <p><strong>Učitel:</strong> ${escapeHtml(ucitelTxt)}</p>
    <hr />
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(zprava)}</pre>
  `;

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Doučování — ${jmeno}`,
    text,
    html,
  });

  if (error) {
    console.error("[contact-doucovani]", JSON.stringify(error, null, 2));
    return NextResponse.json(
      { error: "Odeslání se nepovedlo. Zkus to prosím znovu za chvíli." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, id: data?.id ?? null });
}
