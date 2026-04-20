/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (adminEmail && adminPassword) {
    const passwordHash = await bcrypt.hash(adminPassword, 12);
    await prisma.user.upsert({
      where: { email: adminEmail.trim().toLowerCase() },
      update: { passwordHash, role: "ADMIN" },
      create: {
        email: adminEmail.trim().toLowerCase(),
        passwordHash,
        role: "ADMIN",
        name: "Administrátor",
      },
    });
    console.log("Admin účet:", adminEmail);
  } else {
    console.log("Přeskočeno: nastav ADMIN_EMAIL a ADMIN_PASSWORD pro vytvoření admina.");
  }

  const n = await prisma.lecturer.count();
  if (n === 0) {
    await prisma.lecturer.createMany({
      data: [
        {
          slug: "ukazka-a",
          jmeno: "Ukázkový lektor A",
          predmety: ["matematika", "fyzika"],
          popis:
            "Důraz na pochopení souvislostí a přípravu na testy druhého stupně ZŠ a nižší ročníky SŠ.",
          format: "Online i Praha (dohodou)",
          sortOrder: 0,
        },
        {
          slug: "ukazka-b",
          jmeno: "Ukázkový lektor B",
          predmety: ["chemie", "matematika"],
          popis:
            "Procvičování úloh, laboratorní intuice bez laboratoře a srozumitelné vysvětlení látky.",
          format: "Primárně online",
          sortOrder: 1,
        },
      ],
    });
    console.log("Vytvořeni výchozí lektoři.");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
