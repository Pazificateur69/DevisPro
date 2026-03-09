"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import ServiceIcon from "./ServiceIcon";
import { CheckCircle, ArrowLeft, ArrowRight, Loader2 } from "lucide-react";

interface FormData {
  service: string;
  description: string;
  code_postal: string;
  nom: string;
  telephone: string;
  email: string;
}

interface DevisFormProps {
  preselectedService?: string;
}

export default function DevisForm({ preselectedService }: DevisFormProps) {
  const [step, setStep] = useState(preselectedService ? 2 : 1);
  const [formData, setFormData] = useState<FormData>({
    service: preselectedService || "",
    description: "",
    code_postal: "",
    nom: "",
    telephone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const totalSteps = 4;

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const validateStep = (): boolean => {
    switch (step) {
      case 1:
        if (!formData.service) {
          setError("Veuillez sélectionner un service");
          return false;
        }
        return true;
      case 2:
        if (!formData.description.trim() || formData.description.length < 10) {
          setError("Veuillez décrire votre besoin (minimum 10 caractères)");
          return false;
        }
        return true;
      case 3:
        if (!/^\d{5}$/.test(formData.code_postal)) {
          setError("Veuillez entrer un code postal valide (5 chiffres)");
          return false;
        }
        return true;
      case 4:
        if (!formData.nom.trim()) {
          setError("Veuillez entrer votre nom");
          return false;
        }
        if (!/^0[1-9]\d{8}$/.test(formData.telephone.replace(/\s/g, ""))) {
          setError("Veuillez entrer un numéro de téléphone valide");
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          setError("Veuillez entrer une adresse email valide");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    setError("");
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;

    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setIsSubmitted(true);
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 px-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Demande envoyée !
        </h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Votre demande de devis a bien été enregistrée. Vous recevrez jusqu&apos;à 3 devis
          d&apos;artisans qualifiés dans les 24 heures.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-8 px-4">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                s <= step
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {s < step ? <CheckCircle className="w-5 h-5" /> : s}
            </div>
            {s < 4 && (
              <div
                className={`flex-1 h-1 mx-2 rounded transition-colors ${
                  s < step ? "bg-blue-600" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border p-6 sm:p-8">
        {/* Step 1: Service */}
        {step === 1 && (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Quel service recherchez-vous ?
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Sélectionnez le type de prestation dont vous avez besoin
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service) => (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => {
                    updateField("service", service.slug);
                    setStep(2);
                  }}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all hover:border-blue-400 hover:bg-blue-50 ${
                    formData.service === service.slug
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ServiceIcon name={service.icon} className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {service.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Description */}
        {step === 2 && (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Décrivez votre besoin
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Plus vous êtes précis, meilleurs seront les devis reçus
            </p>
            <textarea
              value={formData.description}
              onChange={(e) => updateField("description", e.target.value)}
              placeholder="Ex : Mon volet roulant de la chambre est bloqué en position fermée depuis ce matin. C'est un volet électrique installé il y a 5 ans..."
              rows={5}
              className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none resize-none transition-colors"
            />
            <p className="text-xs text-gray-400 mt-2">
              {formData.description.length}/500 caractères
            </p>
          </div>
        )}

        {/* Step 3: Code Postal */}
        {step === 3 && (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Où se situe l&apos;intervention ?
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Pour trouver des artisans près de chez vous
            </p>
            <input
              type="text"
              value={formData.code_postal}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "").slice(0, 5);
                updateField("code_postal", val);
              }}
              placeholder="Code postal (ex : 75001)"
              className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 text-lg text-center placeholder-gray-400 focus:border-blue-600 focus:outline-none transition-colors tracking-widest"
              inputMode="numeric"
            />
          </div>
        )}

        {/* Step 4: Contact */}
        {step === 4 && (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Vos coordonnées
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Pour que les artisans puissent vous contacter
            </p>
            <div className="space-y-4">
              <input
                type="text"
                value={formData.nom}
                onChange={(e) => updateField("nom", e.target.value)}
                placeholder="Votre nom complet"
                className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none transition-colors"
              />
              <input
                type="tel"
                value={formData.telephone}
                onChange={(e) => updateField("telephone", e.target.value)}
                placeholder="Votre téléphone (ex : 06 12 34 56 78)"
                className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none transition-colors"
                inputMode="tel"
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="Votre adresse email"
                className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none transition-colors"
                inputMode="email"
              />
            </div>
            <p className="text-xs text-gray-400 mt-4">
              En soumettant ce formulaire, vous acceptez nos{" "}
              <a href="/cgu" className="text-blue-600 underline">
                conditions d&apos;utilisation
              </a>{" "}
              et notre politique de confidentialité.
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="flex items-center gap-2 px-5 py-3 text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour
            </button>
          ) : (
            <div />
          )}

          {step < totalSteps ? (
            step > 1 && (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Continuer
                <ArrowRight className="w-4 h-4" />
              </button>
            )
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                "Recevoir mes devis gratuits"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
