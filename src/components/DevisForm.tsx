"use client";

import { useState } from "react";
import Link from "next/link";
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
          setError("Veuillez selectionner un service");
          return false;
        }
        return true;
      case 2:
        if (!formData.description.trim() || formData.description.length < 10) {
          setError("Veuillez decrire votre besoin (minimum 10 caracteres)");
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
          setError("Veuillez entrer un numero de telephone valide");
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
      setError("Une erreur est survenue. Veuillez reessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-20 px-8 animate-fade-in-up bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/40 max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-emerald-50/50">
          <CheckCircle className="w-10 h-10 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">
          Demande envoyee avec succes !
        </h3>
        <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
          Votre demande de devis a bien ete enregistree. Vous recevrez jusqu&apos;a 3 devis
          d&apos;artisans qualifies dans les <strong className="text-slate-900">24 heures</strong>.
        </p>
        <div className="flex items-center justify-center gap-2 mt-8 p-4 bg-slate-50 rounded-xl text-xs font-medium text-slate-500 border border-slate-100">
          <Shield className="w-4 h-4 text-emerald-500" />
          <span>Vos donnees sont protegees et ne seront jamais revendues</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-10 px-2 lg:px-4">
        {stepLabels.map((s, i) => {
          const stepNum = i + 1;
          const StepIcon = s.icon;
          const isActive = stepNum <= step;
          const isDone = stepNum < step;
          return (
            <div key={s.label} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-2 relative">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isDone
                      ? "bg-slate-900 text-white shadow-md"
                      : isActive
                        ? "bg-indigo-600 text-white shadow-xl shadow-indigo-500/20 scale-110"
                        : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {isDone ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <StepIcon className="w-4.5 h-4.5" />
                  )}
                </div>
                <span
                  className={`text-[10px] font-bold tracking-widest uppercase absolute -bottom-5 transition-colors hidden sm:block w-max ${
                    isActive ? "text-indigo-600" : "text-slate-300"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {stepNum < 4 && (
                <div className="flex-1 mx-3 sm:mx-4 mb-4 sm:mb-0">
                  <div className="h-1 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ease-out ${
                        isDone ? "w-full bg-slate-900" : "w-0 bg-transparent"
                      }`}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 p-8 sm:p-10 animate-fade-in sm:mt-8">
        {/* Step 1: Service */}
        {step === 1 && (
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-extrabold text-slate-900 mb-1.5 tracking-tight">
              Quel service recherchez-vous ?
            </h3>
            <p className="text-slate-400 text-sm font-medium mb-7">
              Selectionnez le type de prestation dont vous avez besoin.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {services.map((service) => (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => {
                    updateField("service", service.slug);
                    setTimeout(() => setStep(2), 200);
                  }}
                  className={`flex items-center gap-3.5 p-4 rounded-xl border-2 text-left transition-all duration-200 outline-none ${
                    formData.service === service.slug
                      ? "border-indigo-600 bg-indigo-50/50 shadow-sm"
                      : "border-slate-100 hover:border-indigo-200 bg-white"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      formData.service === service.slug
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "bg-slate-50 text-slate-400"
                    }`}
                  >
                    <ServiceIcon name={service.icon} className="w-4.5 h-4.5" />
                  </div>
                  <span className={`text-sm font-semibold ${formData.service === service.slug ? "text-indigo-900" : "text-slate-700"}`}>
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
            <h3 className="text-xl font-extrabold text-slate-900 mb-1.5 tracking-tight">
              Decrivez votre besoin
            </h3>
            <p className="text-slate-400 text-sm font-medium mb-7">
              Plus vous etes precis, meilleurs seront les devis recus.
            </p>
            <textarea
              value={formData.description}
              onChange={(e) => updateField("description", e.target.value)}
              placeholder="Ex : Mon volet roulant de la chambre est bloque en position fermee depuis ce matin..."
              rows={5}
              className="w-full rounded-xl p-4 text-sm resize-none"
              autoFocus
            />
            <div className="flex justify-between mt-2.5 px-1">
              <p className="text-xs font-medium text-slate-300">
                {formData.description.length}/500 caracteres
              </p>
              {formData.description.length >= 10 && (
                <p className="text-xs font-semibold text-emerald-500 flex items-center gap-1 animate-fade-in">
                  <CheckCircle className="w-3.5 h-3.5" /> Suffisant
                </p>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Code Postal */}
        {step === 3 && (
          <div className="animate-slide-in-right">
            <h3 className="text-xl font-extrabold text-slate-900 mb-1.5 tracking-tight">
              Ou se situe l&apos;intervention ?
            </h3>
            <p className="text-slate-400 text-sm font-medium mb-7">
              Pour trouver des artisans pres de chez vous.
            </p>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={formData.code_postal}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "").slice(0, 5);
                  updateField("code_postal", val);
                }}
                placeholder="Code postal (ex : 75001)"
                className="w-full rounded-xl py-4 pr-4 pl-12 text-lg font-bold tracking-widest"
                inputMode="numeric"
                autoFocus
              />
            </div>
            {formData.code_postal.length === 5 && (
              <p className="text-xs font-semibold text-emerald-500 flex items-center gap-1 mt-3 px-1 animate-fade-in">
                <CheckCircle className="w-3.5 h-3.5" /> Code postal valide
              </p>
            )}
          </div>
        )}

        {/* Step 4: Contact */}
        {step === 4 && (
          <div className="animate-slide-in-right">
            <h3 className="text-xl font-extrabold text-slate-900 mb-1.5 tracking-tight">
              Vos coordonnees
            </h3>
            <p className="text-slate-400 text-sm font-medium mb-7">
              Pour que les artisans puissent vous contacter avec leurs offres.
            </p>
            <div className="space-y-3">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                <input
                  type="text"
                  value={formData.nom}
                  onChange={(e) => updateField("nom", e.target.value)}
                  placeholder="Votre nom complet"
                  className="w-full rounded-xl py-3.5 pr-4 pl-12 text-sm font-medium"
                  autoFocus
                />
              </div>
              <div className="relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <input
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => updateField("telephone", e.target.value)}
                  placeholder="Telephone (ex : 06 12 34 56 78)"
                  className="w-full rounded-xl py-3.5 pr-4 pl-12 text-sm font-medium"
                  inputMode="tel"
                />
              </div>
              <div className="relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="Adresse email"
                  className="w-full rounded-xl py-3.5 pr-4 pl-12 text-sm font-medium"
                  inputMode="email"
                />
              </div>
            </div>
            <div className="flex items-start gap-2.5 mt-5 p-3.5 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-500">
              <Shield className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <p>
                Vos donnees sont strictement protegees. En validant, vous acceptez nos{" "}
                <Link href="/cgu" className="text-slate-900 underline hover:text-indigo-600 transition-colors">CGU</Link>{" "}
                et notre politique de confidentialite.
              </p>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-5 p-3.5 bg-red-50 border border-red-100 rounded-xl text-red-700 font-medium text-sm flex items-center gap-2.5 animate-fade-in">
            <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            {error}
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="flex items-center gap-1.5 px-4 py-2.5 text-slate-400 font-semibold hover:text-slate-700 hover:bg-slate-50 transition-all rounded-lg text-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
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
                className="btn-accent flex items-center gap-2 px-7 py-3.5 font-semibold text-sm"
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
              className="group btn-accent flex items-center gap-2 px-7 py-3.5 font-semibold text-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Envoi...
                </>
              ) : (
                <>
                  Recevoir mes devis gratuits
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
