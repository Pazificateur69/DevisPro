import { Metadata } from "next";
import Link from "next/link";
import { cities, getRegions, getCitiesByRegion } from "@/lib/cities";
import { services } from "@/lib/services";
import { MapPin, Search, ArrowRight, Users } from "lucide-react";
import JsonLd, { getFAQJsonLd } from "@/components/JsonLd";
import { getBreadcrumbJsonLd } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Artisans par ville - Trouvez un professionnel dans votre ville",
  description: `Trouvez un artisan qualifié dans votre ville parmi ${cities.length}+ villes en France. Paris, Lyon, Marseille, Toulouse, Bordeaux, Lille, Nantes... Devis gratuit en 24h.`,
  keywords: [
    "artisan par ville",
    "trouver artisan",
    "artisan France",
    "devis par ville",
    "artisan proche",
    "professionnel par ville",
  ],
  alternates: {
    canonical: "/villes",
  },
};

export default function VillesPage() {
  const regions = getRegions();
  const totalPopulation = cities.reduce((sum, c) => sum + c.population, 0);

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([{ name: "Villes", url: "/villes" }])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Artisans par ville en France",
          description: `Annuaire de ${cities.length}+ villes couvertes par Renov Habitation pour tous vos travaux.`,
          url: "https://renov-habitation.fr/villes",
          numberOfItems: cities.length,
          provider: {
            "@type": "Organization",
            name: "Renov Habitation",
            url: "https://renov-habitation.fr",
          },
        }}
      />

      <div className="min-h-screen bg-subtle">
        {/* Header section with gradient */}
        <section className="hero-gradient text-white py-20 sm:py-28 relative overflow-hidden border-b border-indigo-900/30">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <nav className="text-sm text-indigo-200 mb-6 flex items-center gap-2 flex-wrap justify-center">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-white">Villes</span>
            </nav>
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl border border-white/20">
              <MapPin className="w-8 h-8 text-indigo-300" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Trouvez un artisan dans{" "}
              <span className="text-gradient-dark inline-block">
                votre ville
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
              Renov Habitation vous connecte aux meilleurs professionnels dans
              plus de {cities.length} villes en France.{" "}
              {services.length} services disponibles partout.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-indigo-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-300" />
                <span>
                  <strong className="text-white">{cities.length}+</strong>{" "}
                  villes couvertes
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-indigo-300" />
                <span>
                  <strong className="text-white">
                    {(totalPopulation / 1000000).toFixed(1)}M+
                  </strong>{" "}
                  habitants desservis
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-indigo-300" />
                <span>
                  <strong className="text-white">{services.length}</strong>{" "}
                  services
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Directory Content */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-10 z-20">
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-12">
            <div className="mb-12 border-b border-slate-100 pb-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Annuaire par Région
                </h2>
                <p className="text-slate-500 font-medium">
                  Cliquez sur une ville pour voir tous les services disponibles
                </p>
              </div>
              <div className="relative w-full md:w-72 hidden sm:block">
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Rechercher une ville..."
                  disabled
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-sm font-medium focus:outline-none cursor-not-allowed text-slate-500"
                />
              </div>
            </div>

            <div className="space-y-16">
              {regions.map((region) => {
                const regionCities = getCitiesByRegion(region);
                return (
                  <div key={region} className="group">
                    <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-3 border-l-4 border-indigo-600 pl-4 py-1">
                      {region}
                      <span className="text-xs font-bold bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full">
                        {regionCities.length} villes
                      </span>
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {regionCities.map((city) => (
                        <Link
                          key={city.slug}
                          href={`/villes/${city.slug}`}
                          className="flex flex-col p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-indigo-300 hover:bg-white hover:shadow-lg hover:shadow-indigo-500/5 transition-all card-hover"
                        >
                          <span className="font-bold text-slate-900 text-[15px] mb-1 truncate">
                            {city.name}
                          </span>
                          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-2">
                            <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                            <span>
                              {city.departmentCode} - {city.department}
                            </span>
                          </div>
                          <span className="text-xs text-indigo-600 font-semibold flex items-center gap-1 mt-auto">
                            {services.length} services
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="hero-gradient text-white py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Votre ville n&apos;est pas listée ?
            </h2>
            <p className="text-indigo-100 mb-8 text-lg">
              Contactez-nous, nous intervenons dans toute la France
              métropolitaine et les DOM-TOM.
            </p>
            <Link
              href="/devis"
              className="btn-glow inline-flex items-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg"
            >
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
