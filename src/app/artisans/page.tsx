"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import {
  CheckCircle,
  Euro,
  Users,
  TrendingUp,
  Loader2,
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
      <div className="py-20">
        <div className="max-w-lg mx-auto text-center px-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Inscription enregistrée !
          </h2>
          <p className="text-gray-600">
            Merci pour votre inscription. Notre équipe vous contactera dans les 48h pour
            finaliser votre inscription et commencer à recevoir des leads.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Développez votre activité
            </h1>
            <p className="text-lg text-green-100 mb-8">
              Rejoignez notre réseau d&apos;artisans partenaires et recevez des
              demandes de devis qualifiées dans votre zone.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: <Euro className="w-6 h-6" />,
                  title: "Leads qualifiés",
                  desc: "20 à 80 € par lead",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Clients ciblés",
                  desc: "Dans votre zone",
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: "Sans engagement",
                  desc: "Payez par lead",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/10 rounded-xl p-4 text-center"
                >
                  <div className="flex justify-center mb-2">{item.icon}</div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm text-green-200">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Inscrivez-vous comme artisan partenaire
          </h2>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border p-6 sm:p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet *
                </label>
                <input
                  type="text"
                  value={formData.nom}
                  onChange={(e) => updateField("nom", e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl p-3 text-gray-900 focus:border-green-600 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom de l&apos;entreprise *
                </label>
                <input
                  type="text"
                  value={formData.entreprise}
                  onChange={(e) => updateField("entreprise", e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl p-3 text-gray-900 focus:border-green-600 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl p-3 text-gray-900 focus:border-green-600 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => updateField("telephone", e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl p-3 text-gray-900 focus:border-green-600 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Métier / Spécialité *
              </label>
              <select
                value={formData.metier}
                onChange={(e) => updateField("metier", e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl p-3 text-gray-900 focus:border-green-600 focus:outline-none transition-colors"
                required
              >
                <option value="">Sélectionnez votre spécialité</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Code postal *
                </label>
                <input
                  type="text"
                  value={formData.code_postal}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 5);
                    updateField("code_postal", val);
                  }}
                  className="w-full border-2 border-gray-200 rounded-xl p-3 text-gray-900 focus:border-green-600 focus:outline-none transition-colors"
                  inputMode="numeric"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rayon d&apos;intervention (km)
                </label>
                <select
                  value={formData.rayon_intervention}
                  onChange={(e) =>
                    updateField("rayon_intervention", e.target.value)
                  }
                  className="w-full border-2 border-gray-200 rounded-xl p-3 text-gray-900 focus:border-green-600 focus:outline-none transition-colors"
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Numéro SIRET *
              </label>
              <input
                type="text"
                value={formData.siret}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "").slice(0, 14);
                  updateField("siret", val);
                }}
                placeholder="14 chiffres"
                className="w-full border-2 border-gray-200 rounded-xl p-3 text-gray-900 placeholder-gray-400 focus:border-green-600 focus:outline-none transition-colors"
                inputMode="numeric"
                required
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white py-3.5 rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
