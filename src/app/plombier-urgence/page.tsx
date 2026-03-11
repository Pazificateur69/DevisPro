import { Metadata } from "next";
import Link from "next/link";
import DevisForm from "@/components/DevisForm";
import {
  Phone,
  Mail,
  Shield,
  Clock,
  CheckCircle,
  Zap,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Plombier en urgence - Devis gratuit immediat",
  description:
    "Besoin d'un plombier en urgence ? Recevez jusqu'a 3 devis gratuits d'artisans qualifies en moins de 24h. Service gratuit et sans engagement.",
  alternates: {
    canonical: "/plombier-urgence",
  },
};

export default function PlombierUrgencePage() {
  return (
    <div className="bg-subtle min-h-screen">
      {/* Hero section - conversion focused */}
      <section className="py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-500 mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Plombier urgence</span>
          </nav>
          {/* Heading */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
              <Zap className="w-3.5 h-3.5" />
              Intervention rapide
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Plombier en urgence
              <br />
              <span className="text-indigo-600">Devis gratuit immediat</span>
            </h1>
            <p className="text-slate-500 max-w-lg mx-auto text-base sm:text-lg">
              Fuite d&apos;eau, canalisation bouchee, panne de chauffe-eau ?
              Recevez des devis d&apos;artisans qualifies pres de chez vous.
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
          <DevisForm preselectedService="plomberie-urgente" />

          {/* Benefits */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: Zap,
                title: "Intervention rapide",
                desc: "Nos plombiers interviennent au plus vite pour resoudre votre probleme de plomberie.",
              },
              {
                icon: Shield,
                title: "Artisans verifies",
                desc: "Chaque plombier est controle : assurance, qualifications et numero SIRET valides.",
              },
              {
                icon: CheckCircle,
                title: "Devis transparent",
                desc: "Recevez des devis detailles et comparez les prix avant de vous engager.",
              },
              {
                icon: Phone,
                title: "Accompagnement",
                desc: "Une question ? Notre equipe vous accompagne dans votre recherche d'artisan.",
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
              href="mailto:contact@renov-habitation.fr"
              className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:text-indigo-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contactez-nous : contact@renov-habitation.fr
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
