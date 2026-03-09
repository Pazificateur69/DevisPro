import { Metadata } from "next";
import DevisForm from "@/components/DevisForm";
import { Shield, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Demander un devis gratuit",
  description:
    "Remplissez notre formulaire en moins de 30 secondes et recevez jusqu'a 3 devis gratuits d'artisans qualifies pres de chez vous.",
};

export default function DevisPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Demandez vos devis gratuits
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Remplissez le formulaire ci-dessous et recevez jusqu&apos;a 3 devis
            d&apos;artisans qualifies en moins de 24h.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>Donnees protegees</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>Reponse en 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span>100% gratuit</span>
            </div>
          </div>
        </div>

        <DevisForm />
      </div>
    </div>
  );
}
