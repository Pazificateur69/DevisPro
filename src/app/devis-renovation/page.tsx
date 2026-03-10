import { Metadata } from "next";
import DevisForm from "@/components/DevisForm";
import {
  Phone,
  Shield,
  Clock,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Hammer,
  BadgeCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Devis renovation - Comparez les artisans",
  description:
    "Obtenez jusqu'a 3 devis gratuits pour vos travaux de renovation. Comparez les artisans qualifies pres de chez vous. Service 100% gratuit et sans engagement.",
  robots: { index: false },
};

export default function DevisRenovationPage() {
  return (
    <div className="bg-subtle min-h-screen">
      {/* Hero section - conversion focused */}
      <section className="py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Comparez les artisans
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Devis renovation
              <br />
              <span className="text-indigo-600">Comparez les artisans</span>
            </h1>
            <p className="text-slate-500 max-w-lg mx-auto text-base sm:text-lg">
              Renovation interieure, salle de bain, cuisine, peinture...
              Comparez les devis d&apos;artisans qualifies pres de chez vous.
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
            {[
              { icon: CheckCircle, label: "Gratuit", color: "text-emerald-500" },
              { icon: Shield, label: "Sans engagement", color: "text-indigo-500" },
              { icon: Clock, label: "Reponse en 24h", color: "text-indigo-500" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-100 shadow-sm"
              >
                <badge.icon className={`w-4 h-4 ${badge.color}`} />
                <span className="text-sm font-semibold text-slate-700">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>

          {/* DevisForm */}
          <DevisForm />

          {/* Benefits */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: Hammer,
                title: "Tous types de renovation",
                desc: "Salle de bain, cuisine, peinture, sols, electricite, plomberie... Trouvez l'artisan adapte a votre projet.",
              },
              {
                icon: BadgeCheck,
                title: "Artisans qualifies",
                desc: "Nos artisans partenaires sont verifies : assurance decennale, qualifications et avis clients.",
              },
              {
                icon: CheckCircle,
                title: "Comparez les prix",
                desc: "Recevez jusqu'a 3 devis detailles pour comparer les tarifs et choisir la meilleure offre.",
              },
              {
                icon: Shield,
                title: "Aucune obligation",
                desc: "Service 100% gratuit et sans engagement. Vous etes libre de choisir ou non un artisan.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-3.5 p-5 bg-white rounded-xl border border-slate-100"
              >
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            <a
              href="tel:0800000000"
              className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:text-indigo-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Appelez-nous : 08 00 00 00 00
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
