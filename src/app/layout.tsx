import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://naucimese.vercel.app"),
  title: {
    default: "Naučíme.se — matematika, fyzika, chemie",
    template: "%s | Naučíme.se",
  },
  description:
    "Výukový web pro žáky základních a středních škol: matematika, fyzika a chemie — témata, vysvětlení a interaktivní cvičení.",
  openGraph: {
    title: "Naučíme.se",
    description:
      "Matematika, fyzika a chemie pro ZŠ a SŠ — přehledně a s procvičením.",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="h-full">
      <body
        className={`${dmSans.className} flex min-h-full flex-col bg-[var(--background)] text-slate-900 antialiased`}
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
