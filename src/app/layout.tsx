import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd, { getOrganizationJsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://devispro.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "DevisPro - Recevez jusqu'a 3 devis gratuits d'artisans qualifies",
    template: "%s | DevisPro",
  },
  description:
    "Trouvez rapidement un artisan qualifie pres de chez vous. Recevez jusqu'a 3 devis gratuits en moins de 24h pour tous vos travaux : plomberie, chauffage, volets, nuisibles...",
  keywords: [
    "devis artisan",
    "devis gratuit",
    "artisan qualifie",
    "travaux maison",
    "reparation",
    "depannage",
    "plombier",
    "chauffagiste",
    "electricien",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "DevisPro",
    title: "DevisPro - Recevez jusqu'a 3 devis gratuits d'artisans qualifies",
    description:
      "Trouvez rapidement un artisan qualifie pres de chez vous. Recevez jusqu'a 3 devis gratuits en moins de 24h.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevisPro - Devis gratuits d'artisans qualifies",
    description:
      "Recevez jusqu'a 3 devis gratuits en moins de 24h. Service 100% gratuit.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <JsonLd data={getOrganizationJsonLd()} />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
