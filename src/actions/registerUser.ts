"use server";

import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export type RegisterState = { ok: false; error: string } | { ok: true };

export async function registerUser(_: RegisterState, formData: FormData): Promise<RegisterState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");
  const name = String(formData.get("name") ?? "").trim();

  if (name.length < 2 || name.length > 80) {
    return { ok: false, error: "Jméno ať má 2–80 znaků." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Zadej platný e-mail." };
  }
  if (password.length < 8 || password.length > 128) {
    return { ok: false, error: "Heslo musí mít alespoň 8 znaků." };
  }

  try {
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      return { ok: false, error: "Tento e-mail už je registrovaný." };
    }
    const passwordHash = await bcrypt.hash(password, 12);
    await prisma.user.create({
      data: {
        email,
        name,
        passwordHash,
        role: "STUDENT",
      },
    });
    revalidatePath("/admin");
    return { ok: true };
  } catch {
    return { ok: false, error: "Registrace teď nejde dokončit (databáze?). Zkus to později." };
  }
}
