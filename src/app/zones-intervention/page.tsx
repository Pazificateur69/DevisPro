import { Metadata } from "next";
import Link from "next/link";
import { cities, getRegions } from "@/lib/cities";
import { getDepartments } from "@/lib/departements";
import FranceMap from "@/components/FranceMap";
import { MapPin, Map, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Zones d'intervention - Artisans dans toute la France",
  description:
    "Decouvrez toutes nos zones d'intervention en France. Trouvez un artisan qualifie dans votre departement et recevez jusqu'a 3 devis gratuits.",
  alternates: {
    canonical: "/zones-intervention",
  },
};

export default function ZonesInterventionPage() {
  const regions = getRegions();
  const departments = getDepartments();

  // Group departments by region
  const departmentsByRegion: Record<string, { slug: string; name: string; code: string }[]> = {};
  for (const dept of departments) {
    if (!departmentsByRegion[dept.region]) {
      departmentsByRegion[dept.region] = [];
    }
    departmentsByRegion[dept.region].push(dept);
  }

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-violet-500/6 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl border border-white/20">
            <MapPin className="w-8 h-8 text-indigo-300" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
            Zones d&apos;intervention
          </h1>
          <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Un reseau d&apos;artisans qualifies couvrant{" "}
            <strong className="text-white">{cities.length} villes</strong> et{" "}
            <strong className="text-white">{departments.length} departements</strong>{" "}
            dans toute la France.
          </p>
        </div>
      </section>

      {/* Stats + Map */}
      <section className="py-16 sm:py-20 bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Coverage stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              {
                value: `${cities.length}`,
                label: "Villes couvertes",
                icon: <MapPin className="w-5 h-5" />,
              },
              {
                value: `${departments.length}`,
                label: "Departements",
                icon: <Map className="w-5 h-5" />,
              },
              {
                value: `${regions.length}`,
                label: "Regions",
                icon: <Map className="w-5 h-5" />,
              },
              {
                value: "24h",
                label: "Delai de reponse",
                icon: <CheckCircle className="w-5 h-5" />,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 border border-slate-100 text-center card-hover"
              >
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-3 text-indigo-600">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* France Map */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-12">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
                <Map className="w-3.5 h-3.5" />
                Carte interactive
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                Notre couverture nationale
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto">
                Cliquez sur une ville pour trouver un artisan qualifie
              </p>
            </div>
            <div className="flex justify-center">
              <FranceMap />
            </div>
          </div>
        </div>
      </section>

      {/* Regions + Departments */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
              <MapPin className="w-3.5 h-3.5" />
              Par region
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Tous les departements par region
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              Selectionnez un departement pour voir les villes couvertes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => {
              const regionDepts = departmentsByRegion[region] || [];
              return (
                <div
                  key={region}
                  className="bg-white rounded-2xl border border-slate-100 p-6 card-hover"
                >
                  <h3 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2 border-l-4 border-indigo-600 pl-3">
                    {region}
                    <span className="text-xs font-bold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">
                      {regionDepts.length}
                    </span>
                  </h3>
                  <div className="space-y-2">
                    {regionDepts.map((dept) => (
                      <Link
                        key={dept.slug}
                        href={`/departements/${dept.slug}`}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-indigo-50/50 hover:border-indigo-200 border border-transparent transition-all group"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                          <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">
                            {dept.name}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400 font-medium">
                          {dept.code}
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
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-violet-500/6 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
            Pret a trouver votre artisan ?
          </h2>
          <p className="text-slate-400 mb-8 text-base max-w-md mx-auto">
            Ou que vous soyez en France, recevez jusqu&apos;a 3 devis gratuits
            d&apos;artisans qualifies pres de chez vous.
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
