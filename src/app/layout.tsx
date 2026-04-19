import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-outfit",
});

export const viewport: Viewport = {
  themeColor: "#020617",
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
    "Výukový web pro žáky základních a středních škol: matematika, fyzika a chemie — témata, vysvětlení a neomezené procvičování.",
  openGraph: {
    title: "Naučíme.se",
    description:
      "Matematika, fyzika a chemie pro ZŠ a SŠ — výuka a generované příklady.",
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
    <html lang="cs" className={`${outfit.variable} h-full`}>
      <body
        className={`${outfit.className} flex min-h-full flex-col bg-slate-950 text-slate-200 antialiased`}
      >
        <SiteHeader />
        <main className="relative flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
