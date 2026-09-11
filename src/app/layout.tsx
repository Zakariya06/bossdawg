import type { Metadata } from "next";
import { Inter, Kalam, Plus_Jakarta_Sans, Permanent_Marker } from "next/font/google";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

/* --------------------------------------------------
   FONTS
   Loaded once here and exposed as CSS variables that
   globals.css maps onto --font-display / --font-body.
   Never load a font anywhere else (AGENTS.md §6).
   -------------------------------------------------- */

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* Documented exception (AGENTS.md §6): used only for the "Tough Trees.
   Trusted Locally." brand lockup, never for headings or body copy. */
const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

/* Documented exception (AGENTS.md §6): the light handwritten sign-off on the
   about page ("Your property. Our priority."). Only the 300 weight is loaded. */
const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Tree Removal & Land Clearing in Eastern Ontario`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${permanentMarker.variable} ${kalam.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
