import { Metadata } from "next";
import DevisForm from "@/components/DevisForm";
import {
  Shield,
  Clock,
  CheckCircle,
  Sparkles,
  Star,
  Users,
  BadgeCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Demander un devis gratuit",
  description:
    "Remplissez notre formulaire en moins de 30 secondes et recevez jusqu'a 3 devis gratuits d'artisans qualifies pres de chez vous.",
  alternates: {
    canonical: "/devis",
  },
};

export default function DevisPage() {
  return (
    <div className="py-10 sm:py-16 bg-subtle min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Devis gratuit
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Demandez vos devis gratuits
          </h1>
          <p className="text-slate-500 max-w-md mx-auto text-[15px]">
            Remplissez le formulaire ci-dessous et recevez jusqu&apos;a 3 devis
            d&apos;artisans qualifies en moins de 24h.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-5 mt-6 text-[13px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-indigo-500" />
              <span>Donnees protegees</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-500" />
              <span>Reponse en 24h</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>100% gratuit</span>
            </div>
          </div>

          {/* Social proof */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-white border border-slate-100 rounded-full px-4 py-2 shadow-sm">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-700">4,8/5</span>
              <span className="text-xs text-slate-400">
                (2 847 avis)
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Users className="w-3.5 h-3.5 text-indigo-400" />
              <span>
                <strong className="text-slate-600">15 247</strong> demandes
                traitees
              </span>
            </div>
          </div>
        </div>

        <DevisForm />

        {/* Bottom reassurance */}
        <div className="max-w-2xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              icon: <BadgeCheck className="w-5 h-5 text-indigo-600" />,
              title: "Artisans verifies",
              desc: "SIRET et assurance controles",
            },
            {
              icon: <Shield className="w-5 h-5 text-emerald-600" />,
              title: "0€ pour vous",
              desc: "Service 100% gratuit",
            },
            {
              icon: <Clock className="w-5 h-5 text-violet-600" />,
              title: "Devis en 24h",
              desc: "Jusqu'a 3 devis compares",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl p-4"
            >
              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">
                  {item.title}
                </div>
                <div className="text-xs text-slate-400">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
