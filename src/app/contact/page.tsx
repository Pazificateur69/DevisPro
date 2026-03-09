"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, Loader2, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
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

      if (!res.ok) throw new Error();
      setIsSubmitted(true);
    } catch {
      setError("Erreur lors de l'envoi. Veuillez reessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Contactez-nous
          </h1>
          <p className="text-slate-500 max-w-md mx-auto">
            Une question ? Besoin d&apos;aide ? Notre equipe est la pour vous
            repondre.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-4">
            {[
              {
                icon: <Phone className="w-5 h-5" />,
                title: "Telephone",
                info: "08 00 00 00 00",
                sub: "Lun-Ven : 9h-18h",
                color: "bg-indigo-50 text-indigo-600",
              },
              {
                icon: <Mail className="w-5 h-5" />,
                title: "Email",
                info: "contact@renov-habitation.fr",
                sub: "Reponse sous 24h",
                color: "bg-emerald-50 text-emerald-600",
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                title: "Zone",
                info: "France metropolitaine",
                sub: "Tous departements",
                color: "bg-violet-50 text-violet-600",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 card-hover"
              >
                <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {item.title}
                  </div>
                  <div className="text-slate-700 text-sm">{item.info}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <div className="bg-white rounded-2xl border border-slate-100 p-10 text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 ring-8 ring-emerald-50/50">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Message envoye !
                </h3>
                <p className="text-slate-500">
                  Nous vous repondrons dans les plus brefs delais.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                      Nom *
                    </label>
                    <input
                      type="text"
                      value={formData.nom}
                      onChange={(e) =>
                        setFormData({ ...formData, nom: e.target.value })
                      }
                      placeholder="Votre nom"
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
                      placeholder="votre@email.fr"
                      className="w-full rounded-xl p-3 text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    value={formData.sujet}
                    onChange={(e) =>
                      setFormData({ ...formData, sujet: e.target.value })
                    }
                    placeholder="Le sujet de votre message"
                    className="w-full rounded-xl p-3 text-sm"
                    required
                  />
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
                    placeholder="Decrivez votre demande..."
                    className="w-full rounded-xl p-3 text-sm resize-none"
                    required
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-red-700 text-sm font-medium">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-accent py-3.5 font-semibold disabled:opacity-50 flex items-center justify-center gap-2 text-[15px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Envoi...
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
