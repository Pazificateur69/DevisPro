import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Centre d'aide - Guides et conseils travaux",
  description:
    "Retrouvez nos guides et conseils pratiques pour vos travaux : choisir un artisan, securite, bonnes pratiques et astuces pour reussir vos projets.",
  alternates: {
    canonical: "/aide",
  },
};

export default function AideLayout({ children }: { children: React.ReactNode }) {
  return children;
}
