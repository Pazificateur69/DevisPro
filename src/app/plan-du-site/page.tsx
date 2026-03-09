import { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { cities, getRegions, getCitiesByRegion } from "@/lib/cities";
import { longTailPages } from "@/lib/longtail";
import { blogPosts } from "@/lib/blog";
import { MapPin, FileText, Wrench, BookOpen, Building2, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Plan du site",
  description: "Plan du site Renov Habitation - Retrouvez toutes les pages du site : services, villes, guides, blog et informations légales.",
};

export default function PlanDuSitePage() {
  const regions = getRegions();

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Plan du site
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Retrouvez l&apos;ensemble des pages de Renov Habitation pour naviguer facilement sur notre site.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Pages principales */}
          <div className="space-y-10">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Pages principales
              </h2>
              <ul className="space-y-2">
                {[
                  { href: "/", label: "Accueil" },
                  { href: "/devis", label: "Demander un devis gratuit" },
                  { href: "/artisans", label: "Espace artisans partenaires" },
                  { href: "/villes", label: "Toutes les villes" },
                  { href: "/blog", label: "Blog & actualités" },
                  { href: "/contact", label: "Contact" },
                  { href: "/plan-du-site", label: "Plan du site" },
                ].map((page) => (
                  <li key={page.href}>
                    <Link href={page.href} className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-blue-600" />
                Services ({services.length})
              </h2>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guides */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Guides ({longTailPages.length})
              </h2>
              <ul className="space-y-2">
                {longTailPages.map((page) => (
                  <li key={page.slug}>
                    <Link href={`/guide/${page.slug}`} className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Articles de blog ({blogPosts.length})
              </h2>
              <ul className="space-y-2">
                {blogPosts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                Informations légales
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/mentions-legales" className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link href="/cgu" className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                    Conditions Générales d&apos;Utilisation
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Villes par region */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-600" />
              Villes couvertes par région ({cities.length} villes)
            </h2>
            <div className="space-y-6">
              {regions.map((region) => {
                const regionCities = getCitiesByRegion(region);
                return (
                  <div key={region} className="bg-white rounded-xl border p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 text-sm flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      {region} ({regionCities.length} villes)
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {regionCities.map((city) => (
                        <Link
                          key={city.slug}
                          href={`/services/plomberie-urgente/${city.slug}`}
                          className="text-xs px-2 py-1 bg-gray-50 rounded-full hover:bg-blue-50 hover:text-blue-700 text-gray-600 transition-colors"
                        >
                          {city.name}
                        </Link>
                      ))}
                    </div>
                    {/* Services in each city */}
                    <details className="mt-3">
                      <summary className="text-xs text-gray-400 cursor-pointer hover:text-gray-600">
                        Voir tous les services × villes ({regionCities.length * services.length} pages)
                      </summary>
                      <div className="mt-2 max-h-48 overflow-y-auto space-y-2">
                        {regionCities.map((city) => (
                          <div key={city.slug}>
                            <span className="text-xs font-medium text-gray-700">{city.name} :</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {services.map((service) => (
                                <Link
                                  key={`${service.slug}-${city.slug}`}
                                  href={`/services/${service.slug}/${city.slug}`}
                                  className="text-[10px] px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </details>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Total pages */}
        <div className="mt-12 text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
          <p className="text-sm text-blue-800">
            <strong>Total :</strong> {7 + services.length + (services.length * cities.length) + longTailPages.length + blogPosts.length + 2} pages indexées
            <span className="mx-2">•</span>
            <Link href="/sitemap.xml" className="text-blue-600 hover:underline">Sitemap XML</Link>
            <span className="mx-2">•</span>
            <Link href="/robots.txt" className="text-blue-600 hover:underline">Robots.txt</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
