import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Nepřihlášený uživatel." }, { status: 401 });
  }
  try {
    const items = await prisma.userProgress.findMany({
      where: { userId: session.user.id },
      orderBy: { updatedAt: "desc" },
      take: 100,
    });
    return NextResponse.json({ items });
  } catch {
    return NextResponse.json({ error: "Databáze není dostupná." }, { status: 503 });
  }
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Nepřihlášený uživatel." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Neplatný JSON." }, { status: 400 });
  }
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Chybí tělo požadavku." }, { status: 400 });
  }
  const b = body as Record<string, unknown>;
  const scope = typeof b.scope === "string" ? b.scope.trim().slice(0, 240) : "";
  const data = b.data;
  if (!scope || typeof data !== "object" || data === null) {
    return NextResponse.json({ error: "Neplatná pole scope / data." }, { status: 400 });
  }

  try {
    await prisma.userProgress.upsert({
      where: {
        userId_scope: { userId: session.user.id, scope },
      },
      create: { userId: session.user.id, scope, data },
      update: { data },
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Uložení se nepovedlo." }, { status: 503 });
  }
}
