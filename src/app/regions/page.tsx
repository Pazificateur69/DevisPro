import { Metadata } from "next";
import Link from "next/link";
import { getAllRegions } from "@/lib/regions";
import { getCitiesByRegion } from "@/lib/cities";
import { services } from "@/lib/services";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd } from "@/components/Breadcrumbs";
import { MapPin, ArrowRight, Building2, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Artisans par région - Toute la France couverte",
  description:
    "Trouvez un artisan qualifié dans votre région. 17 régions couvertes, 1000+ villes, 15 services disponibles. Devis gratuit en 24h partout en France.",
  keywords: [
    "artisan par région",
    "artisan France",
    "devis par région",
    "travaux par région",
    "artisan qualifié France",
  ],
  alternates: { canonical: "/regions" },
};

export default function RegionsPage() {
  const regions = getAllRegions();

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([{ name: "Régions", url: "/regions" }])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Artisans par région en France",
          description:
            "Annuaire des régions couvertes par Renov Habitation pour tous vos travaux.",
          url: "https://renov-habitation.fr/regions",
          numberOfItems: regions.length,
        }}
      />

      <div className="min-h-screen bg-subtle">
        <section className="hero-gradient text-white py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <nav className="text-sm text-indigo-200 mb-6 flex items-center gap-2 flex-wrap justify-center">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-white">Regions</span>
            </nav>
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl border border-white/20">
              <Building2 className="w-8 h-8 text-indigo-300" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Artisans par{" "}
              <span className="text-gradient-dark inline-block">région</span>
            </h1>
            <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
              Renov Habitation couvre toute la France métropolitaine et les
              DOM-TOM. Sélectionnez votre région pour trouver un artisan
              qualifié près de chez vous.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-indigo-200">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-indigo-300" />
                <span>
                  <strong className="text-white">{regions.length}</strong>{" "}
                  régions
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-300" />
                <span>
                  <strong className="text-white">1000+</strong> villes
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-indigo-300" />
                <span>
                  <strong className="text-white">{services.length}</strong>{" "}
                  services
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-10 z-20">
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-12">
            <div className="mb-10">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
                Toutes les régions
              </h2>
              <p className="text-slate-500 font-medium">
                Cliquez sur une région pour découvrir les artisans et services
                disponibles
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {regions.map((region) => {
                const regionCities = getCitiesByRegion(region.name);
                return (
                  <Link
                    key={region.slug}
                    href={`/regions/${region.slug}`}
                    className="group flex flex-col p-6 rounded-2xl border border-slate-100 bg-subtle hover:border-indigo-300 hover:bg-white hover:shadow-lg hover:shadow-indigo-500/5 transition-all card-hover"
                  >
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                      {region.name}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1 line-clamp-2">
                      {region.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5" />
                          {region.departments.length} dép.
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {regionCities.length} villes
                        </span>
                      </div>
                      <span className="text-xs text-indigo-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Voir
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="hero-gradient text-white py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Besoin d&apos;un artisan ?
            </h2>
            <p className="text-indigo-100 mb-8 text-lg">
              Recevez vos devis gratuits en moins de 24h, partout en France.
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
