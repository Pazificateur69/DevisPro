import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devenir artisan partenaire - Recevez des leads qualifies",
  description:
    "Rejoignez le reseau Renov Habitation et recevez des demandes de devis qualifiees dans votre zone d'intervention. Inscription gratuite.",
  alternates: {
    canonical: "/artisans",
  },
};

export default function ArtisansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
