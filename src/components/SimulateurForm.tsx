"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Building2,
  Ruler,
  Clock,
  Calculator,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Sparkles,
} from "lucide-react";

interface SimulateurFormProps {
  type: string;
}

type LogementType = "maison" | "appartement" | "";
type SurfaceRange = "<50" | "50-100" | "100-150" | ">150" | "";
type UrgenceLevel = "urgent" | "planifie" | "devis" | "";

interface SimulateurConfig {
  label: string;
  basePrice: number;
  description: string;
}

const simulateurConfigs: Record<string, SimulateurConfig> = {
  plomberie: {
    label: "Plomberie",
    basePrice: 120,
    description: "Estimation pour travaux de plomberie",
  },
  chauffage: {
    label: "Chauffage",
    basePrice: 150,
    description: "Estimation pour depannage ou installation chauffage",
  },
  "fuite-eau": {
    label: "Fuite d'eau",
    basePrice: 100,
    description: "Estimation pour recherche et reparation de fuite",
  },
  renovation: {
    label: "Renovation",
    basePrice: 200,
    description: "Estimation pour travaux de renovation",
  },
  nuisibles: {
    label: "Nuisibles",
    basePrice: 80,
    description: "Estimation pour traitement de nuisibles",
  },
};

const logementFactor: Record<string, number> = {
  maison: 1.3,
  appartement: 1.0,
};

const surfaceFactor: Record<string, number> = {
  "<50": 0.8,
  "50-100": 1.0,
  "100-150": 1.4,
  ">150": 1.8,
};

const urgenceFactor: Record<string, number> = {
  urgent: 1.5,
  planifie: 1.0,
  devis: 0.9,
};

export default function SimulateurForm({ type }: SimulateurFormProps) {
  const [step, setStep] = useState(1);
  const [logement, setLogement] = useState<LogementType>("");
  const [surface, setSurface] = useState<SurfaceRange>("");
  const [urgence, setUrgence] = useState<UrgenceLevel>("");
  const [showResult, setShowResult] = useState(false);

  const config = simulateurConfigs[type] || simulateurConfigs.plomberie;
  const totalSteps = 3;

  const calculatePrice = () => {
    const base = config.basePrice;
    const lFactor = logementFactor[logement] || 1.0;
    const sFactor = surfaceFactor[surface] || 1.0;
    const uFactor = urgenceFactor[urgence] || 1.0;

    const estimated = Math.round(base * lFactor * sFactor * uFactor);
    const low = Math.round(estimated * 0.8);
    const high = Math.round(estimated * 1.4);

    return { low, high };
  };

  const nextStep = () => {
    if (step === 1 && !logement) return;
    if (step === 2 && !surface) return;
    if (step === 3 && !urgence) return;

    if (step === totalSteps) {
      setShowResult(true);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (showResult) {
      setShowResult(false);
    } else {
      setStep((prev) => Math.max(prev - 1, 1));
    }
  };

  const stepLabels = [
    { label: "Logement", icon: Home },
    { label: "Surface", icon: Ruler },
    { label: "Urgence", icon: Clock },
  ];

  if (showResult) {
    const { low, high } = calculatePrice();

    return (
      <div className="w-full max-w-2xl mx-auto animate-fade-in-up">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 p-8 sm:p-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4 ring-8 ring-indigo-50/50">
              <Calculator className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
              Estimation de prix
            </h3>
            <p className="text-slate-400 text-sm">
              {config.description}
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-6 sm:p-8 mb-6 border border-indigo-100/50">
            <div className="text-center">
              <p className="text-sm font-semibold text-indigo-600 mb-2 uppercase tracking-wider">
                Fourchette estimee
              </p>
              <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                {low}&nbsp;&euro; &mdash; {high}&nbsp;&euro;
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl text-sm">
              <span className="text-slate-500 flex items-center gap-2">
                <Home className="w-4 h-4 text-slate-400" />
                Type de logement
              </span>
              <span className="font-semibold text-slate-900">
                {logement === "maison" ? "Maison" : "Appartement"}
              </span>
            </div>
            <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl text-sm">
              <span className="text-slate-500 flex items-center gap-2">
                <Ruler className="w-4 h-4 text-slate-400" />
                Surface
              </span>
              <span className="font-semibold text-slate-900">
                {surface === "<50" && "Moins de 50 m\u00B2"}
                {surface === "50-100" && "50 \u2013 100 m\u00B2"}
                {surface === "100-150" && "100 \u2013 150 m\u00B2"}
                {surface === ">150" && "Plus de 150 m\u00B2"}
              </span>
            </div>
            <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl text-sm">
              <span className="text-slate-500 flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" />
                Urgence
              </span>
              <span className="font-semibold text-slate-900">
                {urgence === "urgent" && "Urgent"}
                {urgence === "planifie" && "Planifie"}
                {urgence === "devis" && "Simple devis"}
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-400 text-center mb-6 leading-relaxed">
            Cette estimation est indicative et basee sur les criteres renseignes.
            Le prix final depend du diagnostic de l&apos;artisan sur place.
          </p>

          <Link
            href="/devis"
            className="btn-accent flex items-center justify-center gap-2 w-full px-8 py-4 text-base font-bold hover:scale-[1.01] active:scale-[0.99] transition-transform"
          >
            <Sparkles className="w-4 h-4" />
            Recevez 3 devis gratuits
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            type="button"
            onClick={prevStep}
            className="flex items-center justify-center gap-1.5 mx-auto mt-4 text-slate-400 font-medium hover:text-slate-700 transition-colors text-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Modifier les criteres
          </button>
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
              {stepNum < 3 && (
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

      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 p-8 sm:p-10 sm:mt-8">
        {/* Step 1: Type de logement */}
        {step === 1 && (
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-extrabold text-slate-900 mb-1.5 tracking-tight">
              Quel est votre type de logement ?
            </h3>
            <p className="text-slate-400 text-sm font-medium mb-7">
              Le type de logement influence le cout de l&apos;intervention.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setLogement("maison");
                  setTimeout(() => setStep(2), 200);
                }}
                className={`flex flex-col items-center gap-3 p-6 rounded-xl border-2 text-center transition-all duration-200 outline-none ${
                  logement === "maison"
                    ? "border-indigo-600 bg-indigo-50/50 shadow-sm"
                    : "border-slate-100 hover:border-indigo-200 bg-white"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                    logement === "maison"
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-slate-50 text-slate-400"
                  }`}
                >
                  <Home className="w-7 h-7" />
                </div>
                <span
                  className={`text-sm font-semibold ${
                    logement === "maison" ? "text-indigo-900" : "text-slate-700"
                  }`}
                >
                  Maison
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setLogement("appartement");
                  setTimeout(() => setStep(2), 200);
                }}
                className={`flex flex-col items-center gap-3 p-6 rounded-xl border-2 text-center transition-all duration-200 outline-none ${
                  logement === "appartement"
                    ? "border-indigo-600 bg-indigo-50/50 shadow-sm"
                    : "border-slate-100 hover:border-indigo-200 bg-white"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                    logement === "appartement"
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-slate-50 text-slate-400"
                  }`}
                >
                  <Building2 className="w-7 h-7" />
                </div>
                <span
                  className={`text-sm font-semibold ${
                    logement === "appartement"
                      ? "text-indigo-900"
                      : "text-slate-700"
                  }`}
                >
                  Appartement
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Surface */}
        {step === 2 && (
          <div className="animate-slide-in-right">
            <h3 className="text-xl font-extrabold text-slate-900 mb-1.5 tracking-tight">
              Quelle est la surface approximative ?
            </h3>
            <p className="text-slate-400 text-sm font-medium mb-7">
              La surface de votre logement nous aide a affiner l&apos;estimation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { value: "<50" as SurfaceRange, label: "Moins de 50 m\u00B2" },
                { value: "50-100" as SurfaceRange, label: "50 \u2013 100 m\u00B2" },
                { value: "100-150" as SurfaceRange, label: "100 \u2013 150 m\u00B2" },
                { value: ">150" as SurfaceRange, label: "Plus de 150 m\u00B2" },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setSurface(option.value);
                    setTimeout(() => setStep(3), 200);
                  }}
                  className={`flex items-center gap-3.5 p-4 rounded-xl border-2 text-left transition-all duration-200 outline-none ${
                    surface === option.value
                      ? "border-indigo-600 bg-indigo-50/50 shadow-sm"
                      : "border-slate-100 hover:border-indigo-200 bg-white"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      surface === option.value
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "bg-slate-50 text-slate-400"
                    }`}
                  >
                    <Ruler className="w-4.5 h-4.5" />
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      surface === option.value
                        ? "text-indigo-900"
                        : "text-slate-700"
                    }`}
                  >
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Urgence */}
        {step === 3 && (
          <div className="animate-slide-in-right">
            <h3 className="text-xl font-extrabold text-slate-900 mb-1.5 tracking-tight">
              Quel est le niveau d&apos;urgence ?
            </h3>
            <p className="text-slate-400 text-sm font-medium mb-7">
              L&apos;urgence peut influencer le tarif de l&apos;intervention.
            </p>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                {
                  value: "urgent" as UrgenceLevel,
                  label: "Urgent",
                  desc: "Intervention rapide necessaire",
                },
                {
                  value: "planifie" as UrgenceLevel,
                  label: "Planifie",
                  desc: "A programmer dans les prochains jours",
                },
                {
                  value: "devis" as UrgenceLevel,
                  label: "Simple devis",
                  desc: "Je souhaite juste une estimation",
                },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setUrgence(option.value);
                    setTimeout(() => setShowResult(true), 200);
                  }}
                  className={`flex items-center gap-3.5 p-4 rounded-xl border-2 text-left transition-all duration-200 outline-none ${
                    urgence === option.value
                      ? "border-indigo-600 bg-indigo-50/50 shadow-sm"
                      : "border-slate-100 hover:border-indigo-200 bg-white"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      urgence === option.value
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "bg-slate-50 text-slate-400"
                    }`}
                  >
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span
                      className={`text-sm font-semibold block ${
                        urgence === option.value
                          ? "text-indigo-900"
                          : "text-slate-700"
                      }`}
                    >
                      {option.label}
                    </span>
                    <span className="text-xs text-slate-400">{option.desc}</span>
                  </div>
                </button>
              ))}
            </div>
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

          <button
            type="button"
            onClick={nextStep}
            className="btn-accent flex items-center gap-2 px-7 py-3.5 font-semibold text-sm"
          >
            {step === totalSteps ? (
              <>
                <Calculator className="w-4 h-4" />
                Calculer l&apos;estimation
              </>
            ) : (
              <>
                Continuer
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
