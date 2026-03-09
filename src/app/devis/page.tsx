import { Metadata } from "next";
import DevisForm from "@/components/DevisForm";
import { Shield, Clock, CheckCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Demander un devis gratuit",
  description:
    "Remplissez notre formulaire en moins de 30 secondes et recevez jusqu'a 3 devis gratuits d'artisans qualifies pres de chez vous.",
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
        </div>

        <DevisForm />
      </div>
    </div>
  );
}
