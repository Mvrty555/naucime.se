import type { Lecturer } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import type { UcitelDoucovani } from "@/data/doucovani";

function parsePredmety(raw: unknown): UcitelDoucovani["predmety"] {
  if (!Array.isArray(raw)) return [];
  const allowed = new Set(["matematika", "fyzika", "chemie"]);
  return raw.filter((x): x is UcitelDoucovani["predmety"][number] => allowed.has(String(x)));
}

export function lecturerToView(row: Lecturer): UcitelDoucovani {
  return {
    id: row.id,
    jmeno: row.jmeno,
    predmety: parsePredmety(row.predmety),
    popis: row.popis,
    format: row.format,
  };
}

export async function getPublicLecturers(): Promise<UcitelDoucovani[]> {
  try {
    const rows = await prisma.lecturer.findMany({
      where: { active: true },
      orderBy: { sortOrder: "asc" },
    });
    return rows.map(lecturerToView);
  } catch {
    return [];
  }
}

export async function getLecturerById(id: string) {
  try {
    return await prisma.lecturer.findFirst({
      where: { id, active: true },
    });
  } catch {
    return null;
  }
}
