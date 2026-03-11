import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Questions frequentes",
  description:
    "Retrouvez les reponses aux questions les plus posees sur notre service de mise en relation avec des artisans qualifies. Service gratuit et sans engagement.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
