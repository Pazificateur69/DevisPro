import { Metadata } from "next";
import Link from "next/link";
import { cities, getRegions, getCitiesByRegion } from "@/lib/cities";
import { services } from "@/lib/services";
import { MapPin, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Artisans par ville - Trouvez un professionnel près de chez vous",
  description:
    "Trouvez un artisan qualifié dans votre ville. Renov Habitation couvre toutes les grandes villes de France : Paris, Lyon, Marseille, Toulouse, Bordeaux...",
};

export default function VillesPage() {
  const regions = getRegions();

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header section with gradient */}
      <section className="hero-gradient text-white py-20 sm:py-28 relative overflow-hidden border-b border-indigo-900/30">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl border border-white/20">
            <MapPin className="w-8 h-8 text-indigo-300" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
            Trouvez un artisan dans <span className="text-gradient-dark inline-block">votre ville</span>
          </h1>
          <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Renov Habitation vous connecte aux meilleurs professionnels dans plus de {cities.length} villes en France métropolitaine.
          </p>
        </div>
      </section>

      {/* Directory Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-10 z-20">
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-12">
          
          <div className="mb-12 border-b border-gray-100 pb-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">Annuaire par Région</h2>
              <p className="text-gray-500 font-medium">Sélectionnez la région puis la ville d&apos;intervention</p>
            </div>
            {/* Fake search for aesthetic value */}
            <div className="relative w-full md:w-72 hidden sm:block">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Rechercher une ville..." disabled className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm font-medium focus:outline-none cursor-not-allowed text-gray-500" />
            </div>
          </div>

          <div className="space-y-16">
            {regions.map((region) => {
              const regionCities = getCitiesByRegion(region);
              return (
                <div key={region} className="group">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-3 border-l-4 border-indigo-600 pl-4 py-1">
                    {region}
                    <span className="text-xs font-bold bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full">{regionCities.length}</span>
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {regionCities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/services/${services[0].slug}/${city.slug}`}
                        className="flex flex-col p-4 rounded-2xl border border-gray-100 bg-[#fafafa] hover:border-indigo-300 hover:bg-white hover:shadow-lg hover:shadow-indigo-500/5 transition-all card-hover"
                      >
                        <span className="font-bold text-gray-900 text-[15px] mb-1 truncate">
                          {city.name}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 mt-auto">
                          <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{city.departmentCode} - {city.department}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
