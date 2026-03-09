"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import ServiceIcon from "./ServiceIcon";
import {
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Loader2,
  MapPin,
  MessageSquareText,
  User,
  Shield,
  Sparkles,
} from "lucide-react";

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

const stepLabels = [
  { label: "Service", icon: Sparkles },
  { label: "Besoin", icon: MessageSquareText },
  { label: "Lieu", icon: MapPin },
  { label: "Contact", icon: User },
];

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
        throw new Error("Erreur lors de l\u2019envoi");
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
      <div className="text-center py-14 px-4 animate-fade-in-up">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5 ring-8 ring-green-50/50">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Demande envoyée avec succès&nbsp;!
        </h3>
        <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
          Votre demande de devis a bien été enregistrée. Vous recevrez jusqu&apos;à 3 devis
          d&apos;artisans qualifiés dans les <strong className="text-gray-700">24 heures</strong>.
        </p>
        <div className="flex items-center justify-center gap-2 mt-6 text-sm text-green-600">
          <Shield className="w-4 h-4" />
          <span>Vos données sont protégées et ne seront jamais revendues</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-8 px-2">
        {stepLabels.map((s, i) => {
          const stepNum = i + 1;
          const StepIcon = s.icon;
          const isActive = stepNum <= step;
          const isDone = stepNum < step;
          return (
            <div key={s.label} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                    isDone
                      ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                      : isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-200 scale-110"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {isDone ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <StepIcon className="w-4 h-4" />
                  )}
                </div>
                <span
                  className={`text-[10px] font-medium transition-colors hidden sm:block ${
                    isActive ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {stepNum < 4 && (
                <div className="flex-1 mx-2 sm:mx-3 mb-4 sm:mb-0">
                  <div className="h-1 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-blue-600 transition-all duration-500 ${
                        isDone ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-6 sm:p-8 animate-fade-in">
        {/* Step 1: Service */}
        {step === 1 && (
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Quel service recherchez-vous&nbsp;?
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Sélectionnez le type de prestation dont vous avez besoin
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {services.map((service) => (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => {
                    updateField("service", service.slug);
                    setStep(2);
                  }}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 hover:border-blue-400 hover:bg-blue-50/50 hover:scale-[1.01] active:scale-[0.99] ${
                    formData.service === service.slug
                      ? "border-blue-600 bg-blue-50 shadow-sm"
                      : "border-gray-150"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      formData.service === service.slug
                        ? "bg-blue-600 text-white"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    <ServiceIcon name={service.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    {service.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Description */}
        {step === 2 && (
          <div className="animate-slide-in-right">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Décrivez votre besoin
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Plus vous êtes précis, meilleurs seront les devis reçus
            </p>
            <textarea
              value={formData.description}
              onChange={(e) => updateField("description", e.target.value)}
              placeholder="Ex : Mon volet roulant de la chambre est bloqué en position fermée depuis ce matin. C'est un volet électrique installé il y a 5 ans..."
              rows={5}
              className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 placeholder-gray-300 focus:border-blue-600 focus:outline-none resize-none transition-all"
              autoFocus
            />
            <div className="flex justify-between mt-2">
              <p className="text-xs text-gray-300">
                {formData.description.length}/500 caractères
              </p>
              {formData.description.length >= 10 && (
                <p className="text-xs text-green-500 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Suffisant
                </p>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Code Postal */}
        {step === 3 && (
          <div className="animate-slide-in-right">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Où se situe l&apos;intervention&nbsp;?
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Pour trouver des artisans près de chez vous
            </p>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
              <input
                type="text"
                value={formData.code_postal}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "").slice(0, 5);
                  updateField("code_postal", val);
                }}
                placeholder="Code postal (ex : 75001)"
                className="w-full border-2 border-gray-200 rounded-xl p-4 pl-12 text-gray-900 text-lg placeholder-gray-300 focus:border-blue-600 focus:outline-none transition-all tracking-wider"
                inputMode="numeric"
                autoFocus
              />
            </div>
            {formData.code_postal.length === 5 && (
              <p className="text-sm text-green-500 flex items-center gap-1 mt-3">
                <CheckCircle className="w-4 h-4" /> Code postal valide
              </p>
            )}
          </div>
        )}

        {/* Step 4: Contact */}
        {step === 4 && (
          <div className="animate-slide-in-right">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Vos coordonnées
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Pour que les artisans puissent vous contacter
            </p>
            <div className="space-y-3">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                <input
                  type="text"
                  value={formData.nom}
                  onChange={(e) => updateField("nom", e.target.value)}
                  placeholder="Votre nom complet"
                  className="w-full border-2 border-gray-200 rounded-xl p-4 pl-11 text-gray-900 placeholder-gray-300 focus:border-blue-600 focus:outline-none transition-all"
                  autoFocus
                />
              </div>
              <div className="relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <input
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => updateField("telephone", e.target.value)}
                  placeholder="Téléphone (ex : 06 12 34 56 78)"
                  className="w-full border-2 border-gray-200 rounded-xl p-4 pl-11 text-gray-900 placeholder-gray-300 focus:border-blue-600 focus:outline-none transition-all"
                  inputMode="tel"
                />
              </div>
              <div className="relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="Adresse email"
                  className="w-full border-2 border-gray-200 rounded-xl p-4 pl-11 text-gray-900 placeholder-gray-300 focus:border-blue-600 focus:outline-none transition-all"
                  inputMode="email"
                />
              </div>
            </div>
            <div className="flex items-start gap-2 mt-4 text-xs text-gray-400">
              <Shield className="w-3.5 h-3.5 text-gray-300 mt-0.5 flex-shrink-0" />
              <p>
                Vos données sont protégées. En soumettant ce formulaire, vous acceptez nos{" "}
                <a href="/cgu" className="text-blue-600 hover:underline">
                  CGU
                </a>{" "}
                et notre politique de confidentialité.
              </p>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-4 p-3.5 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm flex items-center gap-2 animate-fade-in">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            {error}
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="flex items-center gap-2 px-4 py-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-50 font-medium transition-all rounded-xl text-sm"
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
                className="flex items-center gap-2 bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-sm hover:shadow-md active:scale-[0.97]"
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
              className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.97] animate-pulse-soft"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Recevoir mes devis gratuits
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
