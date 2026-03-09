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

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://renov-habitation.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Renov Habitation - Recevez jusqu'à 3 devis gratuits d'artisans qualifiés",
    template: "%s | Renov Habitation",
  },
  description:
    "Trouvez rapidement un artisan qualifié près de chez vous. Recevez jusqu'à 3 devis gratuits en moins de 24h pour tous vos travaux : plomberie, chauffage, volets, nuisibles...",
  keywords: [
    "devis artisan",
    "devis gratuit",
    "artisan qualifié",
    "travaux maison",
    "réparation",
    "dépannage",
    "plombier",
    "chauffagiste",
    "électricien",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Renov Habitation",
    title: "Renov Habitation - Recevez jusqu'à 3 devis gratuits d'artisans qualifiés",
    description:
      "Trouvez rapidement un artisan qualifié près de chez vous. Recevez jusqu'à 3 devis gratuits en moins de 24h.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renov Habitation - Devis gratuits d'artisans qualifiés",
    description:
      "Recevez jusqu'à 3 devis gratuits en moins de 24h. Service 100% gratuit.",
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
