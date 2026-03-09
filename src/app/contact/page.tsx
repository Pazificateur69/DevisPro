"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, Loader2 } from "lucide-react";

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
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Contactez-nous
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Une question ? Besoin d&apos;aide ? Notre equipe est la pour vous
            repondre.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            {[
              {
                icon: <Phone className="w-5 h-5" />,
                title: "Telephone",
                info: "08 00 00 00 00",
                sub: "Lun-Ven : 9h-18h",
              },
              {
                icon: <Mail className="w-5 h-5" />,
                title: "Email",
                info: "contact@devispro.fr",
                sub: "Reponse sous 24h",
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                title: "Zone",
                info: "France metropolitaine",
                sub: "Tous departements",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 bg-white rounded-xl border"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {item.title}
                  </div>
                  <div className="text-gray-700 text-sm">{item.info}</div>
                  <div className="text-gray-400 text-xs">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <div className="bg-white rounded-2xl border p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Message envoye !
                </h3>
                <p className="text-gray-500">
                  Nous vous repondrons dans les plus brefs delais.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border p-6 sm:p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom *
                    </label>
                    <input
                      type="text"
                      value={formData.nom}
                      onChange={(e) =>
                        setFormData({ ...formData, nom: e.target.value })
                      }
                      className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-blue-600 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-blue-600 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    value={formData.sujet}
                    onChange={(e) =>
                      setFormData({ ...formData, sujet: e.target.value })
                    }
                    className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-blue-600 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-blue-600 focus:outline-none transition-colors resize-none"
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
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Envoi...
                    </>
                  ) : (
                    "Envoyer le message"
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
