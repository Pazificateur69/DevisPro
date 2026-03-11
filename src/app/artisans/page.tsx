"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/lib/services";
import {
  CheckCircle,
  Euro,
  Users,
  TrendingUp,
  Loader2,
  Shield,
} from "lucide-react";

export default function ArtisansPage() {
  const [formData, setFormData] = useState({
    nom: "",
    entreprise: "",
    email: "",
    telephone: "",
    metier: "",
    code_postal: "",
    rayon_intervention: "30",
    siret: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/artisans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          rayon_intervention: parseInt(formData.rayon_intervention),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erreur lors de l'inscription");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Une erreur est survenue"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-24">
        <div className="max-w-lg mx-auto text-center px-4 animate-fade-in-up">
          <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 ring-8 ring-emerald-50/50">
            <CheckCircle className="w-8 h-8 text-emerald-500" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2 tracking-tight">
            Inscription enregistree !
          </h2>
          <p className="text-slate-500">
            Merci pour votre inscription. Notre equipe vous contactera dans les 48h pour
            finaliser votre inscription et commencer a recevoir des leads.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.03%22/%3E%3C/svg%3E')] opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-emerald-200 mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white">Espace artisan</span>
          </nav>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
              Developpez votre activite
            </h1>
            <p className="text-base text-emerald-100 mb-10 max-w-xl mx-auto">
              Rejoignez notre reseau d&apos;artisans partenaires et recevez des
              demandes de devis qualifiees dans votre zone.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  icon: <Euro className="w-5 h-5" />,
                  title: "Leads qualifies",
                  desc: "20 a 80 euros par lead",
                },
                {
                  icon: <Users className="w-5 h-5" />,
                  title: "Clients cibles",
                  desc: "Dans votre zone",
                },
                {
                  icon: <TrendingUp className="w-5 h-5" />,
                  title: "Sans engagement",
                  desc: "Payez par lead",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10"
                >
                  <div className="flex justify-center mb-2 text-emerald-200">{item.icon}</div>
                  <div className="font-semibold text-sm">{item.title}</div>
                  <div className="text-xs text-emerald-200 mt-0.5">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 sm:py-20 bg-subtle">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-8 text-center tracking-tight">
            Inscrivez-vous comme artisan partenaire
          </h2>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/40 p-6 sm:p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                  Nom complet *
                </label>
                <input
                  type="text"
                  value={formData.nom}
                  onChange={(e) => updateField("nom", e.target.value)}
                  placeholder="Jean Dupont"
                  className="w-full rounded-xl p-3 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                  Nom de l&apos;entreprise *
                </label>
                <input
                  type="text"
                  value={formData.entreprise}
                  onChange={(e) => updateField("entreprise", e.target.value)}
                  placeholder="Dupont Plomberie"
                  className="w-full rounded-xl p-3 text-sm"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="contact@entreprise.fr"
                  className="w-full rounded-xl p-3 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                  Telephone *
                </label>
                <input
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => updateField("telephone", e.target.value)}
                  placeholder="06 12 34 56 78"
                  className="w-full rounded-xl p-3 text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                Metier / Specialite *
              </label>
              <select
                value={formData.metier}
                onChange={(e) => updateField("metier", e.target.value)}
                className="w-full rounded-xl p-3 text-sm"
                required
              >
                <option value="">Selectionnez votre specialite</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                  Code postal *
                </label>
                <input
                  type="text"
                  value={formData.code_postal}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 5);
                    updateField("code_postal", val);
                  }}
                  placeholder="75001"
                  className="w-full rounded-xl p-3 text-sm"
                  inputMode="numeric"
                  required
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                  Rayon d&apos;intervention (km)
                </label>
                <select
                  value={formData.rayon_intervention}
                  onChange={(e) =>
                    updateField("rayon_intervention", e.target.value)
                  }
                  className="w-full rounded-xl p-3 text-sm"
                >
                  <option value="10">10 km</option>
                  <option value="20">20 km</option>
                  <option value="30">30 km</option>
                  <option value="50">50 km</option>
                  <option value="100">100 km</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                Numero SIRET *
              </label>
              <input
                type="text"
                value={formData.siret}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "").slice(0, 14);
                  updateField("siret", val);
                }}
                placeholder="14 chiffres"
                className="w-full rounded-xl p-3 text-sm"
                inputMode="numeric"
                required
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-red-700 text-sm font-medium">
                {error}
              </div>
            )}

            <div className="flex items-start gap-2.5 p-3.5 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-500">
              <Shield className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <p>Vos donnees sont protegees et votre SIRET sera verifie lors de la validation.</p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3.5 rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                "S'inscrire comme artisan partenaire"
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
