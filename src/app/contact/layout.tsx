import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Renov Habitation",
  description:
    "Contactez l'equipe Renov Habitation. Reponse garantie sous 24h. Service gratuit de mise en relation avec des artisans qualifies.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
