import { Metadata } from "next";
import Link from "next/link";
import { cities, getRegions, getCitiesByRegion } from "@/lib/cities";
import { services } from "@/lib/services";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Artisans par ville - Trouvez un professionnel près de chez vous",
  description:
    "Trouvez un artisan qualifié dans votre ville. Renov Habitation couvre toutes les grandes villes de France : Paris, Lyon, Marseille, Toulouse, Bordeaux...",
};

export default function VillesPage() {
  const regions = getRegions();

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Trouvez un artisan dans votre ville
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Renov Habitation est présent dans plus de {cities.length} villes en France.
            Sélectionnez votre ville pour trouver un artisan qualifié près de
            chez vous.
          </p>
        </div>

        <div className="space-y-10">
          {regions.map((region) => {
            const regionCities = getCitiesByRegion(region);
            return (
              <div key={region}>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  {region}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {regionCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/services/${services[0].slug}/${city.slug}`}
                      className="p-3 rounded-lg border hover:border-blue-300 hover:bg-blue-50/50 transition-all text-center text-sm card-hover"
                    >
                      <span className="font-medium text-gray-900">
                        {city.name}
                      </span>
                      <span className="text-gray-400 text-xs block">
                        ({city.departmentCode})
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
