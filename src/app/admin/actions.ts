"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/slug";

async function requireAdmin() {
  const s = await auth();
  if (!s?.user?.id || s.user.role !== "ADMIN") {
    throw new Error("Nepovolený přístup.");
  }
  return s.user;
}

export async function createPost(formData: FormData) {
  await requireAdmin();
  const title = String(formData.get("title") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim() || null;
  const published = formData.get("published") === "on";
  if (title.length < 2 || body.length < 2) {
    throw new Error("Vyplň nadpis i text.");
  }
  let slug = slugify(String(formData.get("slug") ?? "") || title);
  const exists = await prisma.post.findUnique({ where: { slug } });
  if (exists) slug = `${slug}-${Date.now().toString(36)}`;
  await prisma.post.create({
    data: { title, slug, body, excerpt, published },
  });
  revalidatePath("/prispevky");
  revalidatePath("/admin/prispevky");
  redirect("/admin/prispevky");
}

export async function updatePost(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "").trim();
  const title = String(formData.get("title") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim() || null;
  const published = formData.get("published") === "on";
  if (!id || title.length < 2 || body.length < 2) {
    throw new Error("Vyplň nadpis i text.");
  }
  await prisma.post.update({
    where: { id },
    data: { title, body, excerpt, published },
  });
  revalidatePath("/prispevky");
  revalidatePath("/admin/prispevky");
  redirect("/admin/prispevky");
}

export async function deletePost(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "").trim();
  if (!id) throw new Error("Chybí id.");
  await prisma.post.delete({ where: { id } });
  revalidatePath("/prispevky");
  revalidatePath("/admin/prispevky");
  redirect("/admin/prispevky");
}

export async function createLecturer(formData: FormData) {
  await requireAdmin();
  const jmeno = String(formData.get("jmeno") ?? "").trim();
  const popis = String(formData.get("popis") ?? "").trim();
  const format = String(formData.get("format") ?? "").trim();
  const predmetyRaw = String(formData.get("predmety") ?? "").trim();
  const predmety = predmetyRaw
    .split(/[,;]+/)
    .map((x) => x.trim().toLowerCase())
    .filter(Boolean);
  if (jmeno.length < 2 || popis.length < 4) {
    throw new Error("Vyplň jméno a popis.");
  }
  let slug = slugify(String(formData.get("slug") ?? "") || jmeno);
  const exists = await prisma.lecturer.findUnique({ where: { slug } });
  if (exists) slug = `${slug}-${Date.now().toString(36)}`;
  const maxSort = await prisma.lecturer.aggregate({ _max: { sortOrder: true } });
  await prisma.lecturer.create({
    data: {
      jmeno,
      slug,
      popis,
      format: format || "—",
      predmety,
      sortOrder: (maxSort._max.sortOrder ?? 0) + 1,
    },
  });
  revalidatePath("/doucovani");
  revalidatePath("/admin/lektori");
  redirect("/admin/lektori");
}

export async function updateLecturer(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "").trim();
  const jmeno = String(formData.get("jmeno") ?? "").trim();
  const popis = String(formData.get("popis") ?? "").trim();
  const format = String(formData.get("format") ?? "").trim();
  const predmetyRaw = String(formData.get("predmety") ?? "").trim();
  const predmety = predmetyRaw
    .split(/[,;]+/)
    .map((x) => x.trim().toLowerCase())
    .filter(Boolean);
  const active = formData.get("active") === "on";
  if (!id || jmeno.length < 2 || popis.length < 4) {
    throw new Error("Vyplň jméno a popis.");
  }
  await prisma.lecturer.update({
    where: { id },
    data: { jmeno, popis, format: format || "—", predmety, active },
  });
  revalidatePath("/doucovani");
  revalidatePath("/admin/lektori");
  redirect("/admin/lektori");
}

export async function deleteLecturer(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "").trim();
  if (!id) throw new Error("Chybí id.");
  await prisma.lecturer.delete({ where: { id } });
  revalidatePath("/doucovani");
  revalidatePath("/admin/lektori");
  redirect("/admin/lektori");
}
