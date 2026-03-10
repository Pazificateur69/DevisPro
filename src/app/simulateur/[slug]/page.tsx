import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SimulateurForm from "@/components/SimulateurForm";
import { Calculator, ArrowRight, CheckCircle, Phone } from "lucide-react";

interface SimulateurMeta {
  title: string;
  description: string;
  h1: string;
  subtitle: string;
}

const simulateurs: Record<string, SimulateurMeta> = {
  plomberie: {
    title: "Simulateur prix plomberie - Estimation gratuite",
    description:
      "Estimez le cout de vos travaux de plomberie en quelques clics. Simulateur gratuit et sans engagement pour obtenir une fourchette de prix.",
    h1: "Simulateur de prix plomberie",
    subtitle:
      "Estimez le cout de vos travaux de plomberie en quelques clics et recevez des devis personnalises.",
  },
  chauffage: {
    title: "Simulateur prix chauffage - Estimation gratuite",
    description:
      "Estimez le cout de depannage ou d'installation de votre chauffage. Simulateur gratuit pour obtenir une fourchette de prix.",
    h1: "Simulateur de prix chauffage",
    subtitle:
      "Estimez le cout de depannage ou d'installation de votre systeme de chauffage.",
  },
  "fuite-eau": {
    title: "Simulateur prix fuite d'eau - Estimation gratuite",
    description:
      "Estimez le cout de recherche et reparation de fuite d'eau. Simulateur gratuit et sans engagement.",
    h1: "Simulateur de prix fuite d'eau",
    subtitle:
      "Estimez le cout de la recherche et de la reparation de votre fuite d'eau.",
  },
  renovation: {
    title: "Simulateur prix renovation - Estimation gratuite",
    description:
      "Estimez le cout de vos travaux de renovation. Simulateur gratuit pour obtenir une fourchette de prix adaptee a votre projet.",
    h1: "Simulateur de prix renovation",
    subtitle:
      "Estimez le budget de vos travaux de renovation en fonction de votre logement.",
  },
  nuisibles: {
    title: "Simulateur prix traitement nuisibles - Estimation gratuite",
    description:
      "Estimez le cout du traitement de nuisibles (rats, punaises, cafards). Simulateur gratuit et sans engagement.",
    h1: "Simulateur de prix nuisibles",
    subtitle:
      "Estimez le cout du traitement contre les nuisibles adapte a votre logement.",
  },
};

const validSlugs = ["plomberie", "chauffage", "fuite-eau", "renovation", "nuisibles"];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = simulateurs[slug];
  if (!meta) return {};

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function SimulateurPage({ params }: Props) {
  const { slug } = await params;
  const meta = simulateurs[slug];

  if (!meta) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-violet-500/6 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
              <Calculator className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
              {meta.h1}
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
              {meta.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 mt-6 text-[13px] text-slate-500">
              {["Gratuit", "Sans engagement", "Resultat immediat"].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Simulator */}
      <section className="py-14 sm:py-20 bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimulateurForm type={slug} />
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-violet-500/6 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
            Besoin d&apos;un devis precis ?
          </h2>
          <p className="text-slate-400 mb-10 text-base max-w-md mx-auto">
            Notre simulateur donne une estimation indicative. Pour un devis
            detaille et personnalise, faites appel a nos artisans qualifies.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/devis"
              className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              Recevoir mes devis gratuits
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0800000000"
              className="inline-flex items-center justify-center gap-2 glass-dark text-slate-300 px-8 py-4 rounded-[14px] text-base font-medium hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" />
              08 00 00 00 00
            </a>
          </div>
          <div className="flex justify-center gap-5 mt-8 text-[13px] text-slate-500">
            {["Gratuit", "Sans engagement", "Reponse en 24h"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
