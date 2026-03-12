"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Loader2,
  Send,
  Shield,
  Clock,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const subjects = [
  "Demande de renseignements",
  "Probleme avec un devis",
  "Devenir artisan partenaire",
  "Reclamation",
  "Suggestion ou feedback",
  "Autre",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi");
      }
      setIsSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erreur lors de l'envoi. Veuillez reessayer."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Nous contacter
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Une question ? Parlons-en.
          </h1>
          <p className="text-slate-500 max-w-lg mx-auto">
            Notre equipe vous repond sous 24h. Vous pouvez aussi nous appeler
            directement ou nous envoyer un email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact info cards */}
          <div className="space-y-4">
            {[
              {
                icon: <Phone className="w-5 h-5" />,
                title: "Telephone",
                info: "Sur rendez-vous",
                sub: "Contactez-nous par email",
                color: "bg-indigo-50 text-indigo-600",
                href: undefined,
              },
              {
                icon: <Mail className="w-5 h-5" />,
                title: "Email",
                info: "contact@renov-habitation.fr",
                sub: "Reponse sous 24h",
                color: "bg-emerald-50 text-emerald-600",
                href: "mailto:contact@renov-habitation.fr",
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                title: "Zone d'intervention",
                info: "France metropolitaine",
                sub: "Tous departements couverts",
                color: "bg-violet-50 text-violet-600",
                href: undefined,
              },
            ].map((item) => {
              const content = (
                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 card-hover">
                  <div
                    className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">
                      {item.title}
                    </div>
                    <div className="text-slate-700 text-sm">{item.info}</div>
                    <div className="text-slate-400 text-xs mt-0.5">
                      {item.sub}
                    </div>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.title} href={item.href}>
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}

            {/* Trust signals */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Nos engagements
              </h3>
              {[
                {
                  icon: <Clock className="w-3.5 h-3.5 text-indigo-500" />,
                  text: "Reponse garantie sous 24h",
                },
                {
                  icon: <Shield className="w-3.5 h-3.5 text-emerald-500" />,
                  text: "Donnees protegees (RGPD)",
                },
                {
                  icon: (
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  ),
                  text: "Service 100% gratuit",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2.5 text-xs text-slate-600 font-medium"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Quick CTA */}
            <Link
              href="/devis"
              className="flex items-center justify-between p-5 bg-indigo-600 rounded-2xl text-white group hover:bg-indigo-700 transition-colors"
            >
              <div>
                <div className="font-bold text-sm">Besoin d&apos;un devis ?</div>
                <div className="text-indigo-200 text-xs mt-0.5">
                  Recevez 3 devis gratuits en 24h
                </div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <div className="bg-white rounded-2xl border border-slate-100 p-10 text-center animate-fade-in-up shadow-xl shadow-slate-200/40">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 ring-8 ring-emerald-50/50">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Message envoye avec succes !
                </h3>
                <p className="text-slate-500 mb-6">
                  Nous avons bien recu votre message et vous repondrons dans les
                  plus brefs delais a l&apos;adresse{" "}
                  <strong className="text-slate-700">{formData.email}</strong>.
                </p>
                <div className="flex items-center justify-center gap-2 p-3 bg-slate-50 rounded-xl text-xs font-medium text-slate-500 border border-slate-100">
                  <Clock className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Delai de reponse moyen : moins de 24h</span>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 space-y-5 shadow-xl shadow-slate-200/40"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      value={formData.nom}
                      onChange={(e) =>
                        setFormData({ ...formData, nom: e.target.value })
                      }
                      placeholder="Jean Dupont"
                      className="w-full rounded-xl p-3 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="jean@email.fr"
                      className="w-full rounded-xl p-3 text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                      Telephone
                    </label>
                    <input
                      type="tel"
                      value={formData.telephone}
                      onChange={(e) =>
                        setFormData({ ...formData, telephone: e.target.value })
                      }
                      placeholder="06 12 34 56 78"
                      className="w-full rounded-xl p-3 text-sm"
                      inputMode="tel"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                      Sujet *
                    </label>
                    <select
                      value={formData.sujet}
                      onChange={(e) =>
                        setFormData({ ...formData, sujet: e.target.value })
                      }
                      className="w-full rounded-xl p-3 text-sm"
                      required
                    >
                      <option value="">Choisir un sujet</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    placeholder="Decrivez votre demande en detail..."
                    className="w-full rounded-xl p-3 text-sm resize-none"
                    required
                  />
                </div>

                {error && (
                  <div role="alert" className="p-3 bg-red-50 border border-red-100 rounded-xl text-red-700 text-sm font-medium flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-red-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    {error}
                  </div>
                )}

                <div className="flex items-start gap-2.5 p-3.5 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-500">
                  <Shield className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <p>
                    Vos donnees sont protegees conformement au RGPD et ne seront
                    jamais revendues a des tiers. Consultez nos{" "}
                    <Link
                      href="/mentions-legales"
                      className="text-slate-900 underline hover:text-indigo-600 transition-colors"
                    >
                      mentions legales
                    </Link>
                    .
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-accent py-3.5 font-semibold disabled:opacity-50 flex items-center justify-center gap-2 text-[15px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
