import { Metadata } from "next";
import DevisForm from "@/components/DevisForm";
import {
  Phone,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Wrench,
  Zap,
  BadgeCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Reparation volets roulants - Devis gratuit",
  description:
    "Volet roulant bloque, lame cassee ou moteur en panne ? Recevez jusqu'a 3 devis gratuits de specialistes pres de chez vous. Service gratuit et sans engagement.",
  robots: { index: false },
};

export default function ReparationVoletsPage() {
  return (
    <div className="bg-subtle min-h-screen">
      {/* Hero section - conversion focused */}
      <section className="py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
              <Wrench className="w-3.5 h-3.5" />
              Reparation rapide
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Reparation volets roulants
              <br />
              <span className="text-indigo-600">Devis gratuit</span>
            </h1>
            <p className="text-slate-500 max-w-lg mx-auto text-base sm:text-lg">
              Volet bloque, lame cassee, moteur en panne ?
              Nos artisans specialises interviennent pour tous types de volets roulants.
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
          <DevisForm preselectedService="reparation-volets-roulants" />

          {/* Benefits */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: Wrench,
                title: "Tous types de volets",
                desc: "Volets manuels, electriques ou solaires. Nos artisans reparent toutes les marques et tous les modeles.",
              },
              {
                icon: Zap,
                title: "Diagnostic rapide",
                desc: "Nos specialistes identifient rapidement la panne : moteur, lame, tablier, manivelle ou telecommande.",
              },
              {
                icon: BadgeCheck,
                title: "Artisans specialises",
                desc: "Des professionnels qualifies et experimentes dans la reparation de volets roulants.",
              },
              {
                icon: Shield,
                title: "Devis transparent",
                desc: "Recevez des devis detailles avec le cout des pieces et de la main-d'oeuvre. Sans mauvaise surprise.",
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
