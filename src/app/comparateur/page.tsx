import { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { Euro, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Comparateur de prix travaux - Tous les tarifs artisans",
  description:
    "Comparez les prix de tous les services de travaux : plomberie, chauffage, volets roulants, ramonage et plus. Tarifs indicatifs et devis gratuits.",
  alternates: {
    canonical: "/comparateur",
  },
};

export default function ComparateurPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-violet-500/6 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-indigo-200 mb-6 flex items-center gap-2 flex-wrap justify-center">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white">Comparateur de prix</span>
          </nav>
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl border border-white/20">
            <Euro className="w-8 h-8 text-indigo-300" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
            Comparateur de prix{" "}
            <span className="text-gradient-dark inline-block">travaux</span>
          </h1>
          <p
            className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto font-medium leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            Consultez les fourchettes de prix pour tous nos services et demandez
            un devis gratuit en quelques clics.
          </p>
        </div>
      </section>

      {/* Price table */}
      <section className="py-16 sm:py-20 bg-subtle">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            {/* Table header */}
            <div className="bg-gradient-to-r from-slate-50 to-slate-100/80 px-6 sm:px-8 py-5 border-b border-slate-100">
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Euro className="w-5 h-5 text-indigo-600" />
                Grille tarifaire indicative
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Prix moyens constates. Les tarifs reels dependent de la
                complexite du chantier et de votre localisation.
              </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left text-sm font-bold text-slate-900 px-6 sm:px-8 py-4">
                      Service
                    </th>
                    <th className="text-left text-sm font-bold text-slate-900 px-6 py-4">
                      Prix moyen
                    </th>
                    <th className="text-right text-sm font-bold text-slate-900 px-6 sm:px-8 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr
                      key={service.slug}
                      className={`border-b border-slate-50 hover:bg-indigo-50/30 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-slate-50/30"
                      }`}
                    >
                      <td className="px-6 sm:px-8 py-5">
                        <Link
                          href={`/services/${service.slug}`}
                          className="group flex items-start gap-3"
                        >
                          <div className="w-9 h-9 bg-gradient-to-br from-indigo-50 to-indigo-100/80 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-indigo-100 group-hover:to-indigo-200 transition-all mt-0.5">
                            <Euro className="w-4 h-4 text-indigo-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 text-[15px] group-hover:text-indigo-600 transition-colors">
                              {service.name}
                            </div>
                            <div className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                              {service.shortDescription}
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                          {service.priceRange}
                        </span>
                      </td>
                      <td className="px-6 sm:px-8 py-5 text-right">
                        <Link
                          href="/devis"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-xl"
                        >
                          Devis gratuit
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table footer */}
            <div className="px-6 sm:px-8 py-5 bg-slate-50/50 border-t border-slate-100">
              <p className="text-xs text-slate-400">
                * Les prix indiques sont des fourchettes indicatives basees sur
                les tarifs du marche. Le prix final depend de nombreux facteurs :
                complexite de l&apos;intervention, materiaux, accessibilite,
                region, urgence, etc. Demandez un devis personnalise pour
                obtenir un prix precis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to get best price */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
              <CheckCircle className="w-3.5 h-3.5" />
              Conseils
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Comment obtenir le meilleur prix ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Comparez plusieurs devis",
                description:
                  "Demandez au moins 3 devis aupres de differents artisans pour comparer les prix et les prestations proposees.",
                color: "from-indigo-500 to-indigo-600",
              },
              {
                step: "02",
                title: "Verifiez les qualifications",
                description:
                  "Assurez-vous que l'artisan possede les certifications necessaires (RGE, Qualibat) et une assurance decennale.",
                color: "from-violet-500 to-violet-600",
              },
              {
                step: "03",
                title: "Demandez un devis detaille",
                description:
                  "Un bon devis doit detailler chaque poste : main d'oeuvre, materiaux, deplacements, TVA applicable.",
                color: "from-emerald-500 to-emerald-600",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="relative text-center bg-white rounded-2xl p-8 border border-slate-100 card-hover"
              >
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r ${item.color} text-white text-[11px] font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg`}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 mt-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-violet-500/6 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
            Obtenez un prix precis
          </h2>
          <p className="text-slate-400 mb-8 text-base max-w-md mx-auto">
            Les prix ci-dessus sont indicatifs. Pour un tarif adapte a votre
            projet, demandez vos devis gratuits.
          </p>
          <Link
            href="/devis"
            className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            Demander mes devis gratuits
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex justify-center gap-5 mt-8 text-[13px] text-slate-500">
            {["Gratuit", "Sans engagement", "Reponse en 24h"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
