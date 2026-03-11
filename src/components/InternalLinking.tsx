import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  BookOpen,
  FileText,
  Scale,
  BookMarked,
  Building2,
  Globe,
  Wrench,
  ChevronRight,
  Layers,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface InternalLinkingProps {
  currentServiceSlug?: string;
  currentCitySlug?: string;
  cityName?: string;
  department?: string;
  departmentCode?: string;
  region?: string;
  services: { slug: string; name: string }[];
  nearbyCities: { slug: string; name: string; departmentCode: string }[];
  relatedGuides?: { slug: string; title: string }[];
  relatedBlogPosts?: { slug: string; title: string }[];
  relatedComparatifs?: { slug: string; title: string }[];
  relatedGlossary?: { slug: string; term: string }[];
}

interface ContentHubLinksProps {
  relatedGuides?: { slug: string; title: string }[];
  relatedBlogPosts?: { slug: string; title: string }[];
  services: { slug: string; name: string }[];
  topCities?: { slug: string; name: string; departmentCode: string }[];
  currentSlug?: string;
}

interface FooterInternalLinksProps {
  citiesByRegion: {
    region: string;
    regionSlug: string;
    cities: { slug: string; name: string; departmentCode: string }[];
  }[];
  services: { slug: string; name: string }[];
  regions: { slug: string; name: string }[];
  departments: { slug: string; name: string; code: string }[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function generateDepartmentSlug(department: string): string {
  return department
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function generateRegionSlug(region: string): string {
  return region
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ---------------------------------------------------------------------------
// ServiceCityInternalLinks
// ---------------------------------------------------------------------------

export function ServiceCityInternalLinks({
  currentServiceSlug,
  currentCitySlug,
  cityName,
  department,
  departmentCode,
  region,
  services,
  nearbyCities,
  relatedGuides = [],
  relatedBlogPosts = [],
  relatedComparatifs = [],
  relatedGlossary = [],
}: InternalLinkingProps) {
  const departmentSlug = department ? generateDepartmentSlug(department) : null;
  const regionSlug = region ? generateRegionSlug(region) : null;

  const displayedNearbyCities = nearbyCities.slice(0, 12);
  const otherServices = services.filter((s) => s.slug !== currentServiceSlug);

  const hasContentLinks =
    relatedGuides.length > 0 ||
    relatedBlogPosts.length > 0 ||
    relatedComparatifs.length > 0 ||
    relatedGlossary.length > 0;

  return (
    <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-2">
            En savoir plus{cityName ? ` sur nos services${currentServiceSlug ? "" : ` a ${cityName}`}` : ""}
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl">
            Explorez nos services, guides et ressources pour vos travaux
            {cityName ? ` a ${cityName}` : ""}{department ? ` et dans le ${department}` : ""}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ----------------------------------------------------------------- */}
          {/* Column 1 + 2 : city links and service links */}
          {/* ----------------------------------------------------------------- */}
          <div className="lg:col-span-2 space-y-8">
            {/* Nearby cities for same service */}
            {currentServiceSlug && displayedNearbyCities.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 bg-indigo-50 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">
                      {services.find((s) => s.slug === currentServiceSlug)?.name ?? "Ce service"} dans les villes proches
                    </h3>
                    <p className="text-xs text-gray-400">
                      {department ? `${department} (${departmentCode})` : ""}{region ? ` - ${region}` : ""}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {displayedNearbyCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/services/${currentServiceSlug}/${city.slug}`}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/40 transition-all text-sm group"
                    >
                      <MapPin className="w-3 h-3 text-indigo-400 flex-shrink-0" />
                      <span className="text-gray-700 group-hover:text-indigo-700 font-medium truncate">
                        {city.name}
                      </span>
                      <span className="text-[11px] text-gray-400 flex-shrink-0">
                        {city.departmentCode}
                      </span>
                    </Link>
                  ))}
                </div>
                {nearbyCities.length > 12 && (
                  <div className="mt-3 pt-3 border-t border-gray-50 text-center">
                    <Link
                      href={departmentSlug ? `/departements/${departmentSlug}` : "/villes"}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      Voir toutes les villes
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Other services in this city */}
            {currentCitySlug && otherServices.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 bg-indigo-50 rounded-xl flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">
                      Tous nos services{cityName ? ` a ${cityName}` : ""}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {otherServices.length} services disponibles
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {otherServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}/${currentCitySlug}`}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/40 transition-all group"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                      <span className="text-sm text-gray-700 group-hover:text-indigo-700 font-medium truncate">
                        {service.name}
                      </span>
                    </Link>
                  ))}
                </div>
                {cityName && (
                  <div className="mt-3 pt-3 border-t border-gray-50 text-center">
                    <Link
                      href={`/villes/${currentCitySlug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      Tous les artisans a {cityName}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* Column 3 : sidebar with content links + geo links */}
          {/* ----------------------------------------------------------------- */}
          <div className="space-y-6">
            {/* Department & Region links */}
            {(departmentSlug || regionSlug) && (
              <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-sm font-bold text-gray-900">
                    Votre territoire
                  </h3>
                </div>
                <div className="space-y-2">
                  {departmentSlug && department && (
                    <Link
                      href={`/departements/${departmentSlug}`}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/40 transition-all group"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <Building2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                        <div className="min-w-0">
                          <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-700 block truncate">
                            {department}
                          </span>
                          <span className="text-[11px] text-gray-400">
                            Departement {departmentCode}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-indigo-500 flex-shrink-0 transition-colors" />
                    </Link>
                  )}
                  {regionSlug && region && (
                    <Link
                      href={`/regions/${regionSlug}`}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/40 transition-all group"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <Globe className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                        <div className="min-w-0">
                          <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-700 block truncate">
                            {region}
                          </span>
                          <span className="text-[11px] text-gray-400">
                            Region
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-indigo-500 flex-shrink-0 transition-colors" />
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* Related Guides */}
            {relatedGuides.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-sm font-bold text-gray-900">
                    Guides pratiques
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {relatedGuides.map((guide) => (
                    <li key={guide.slug}>
                      <Link
                        href={`/guide/${guide.slug}`}
                        className="flex items-start gap-2 px-2.5 py-2 rounded-lg hover:bg-indigo-50/50 transition-colors group"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600 group-hover:text-indigo-700 leading-snug">
                          {guide.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related Blog Posts */}
            {relatedBlogPosts.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-sm font-bold text-gray-900">
                    Articles de blog
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {relatedBlogPosts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-start gap-2 px-2.5 py-2 rounded-lg hover:bg-indigo-50/50 transition-colors group"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600 group-hover:text-indigo-700 leading-snug">
                          {post.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 pt-2 border-t border-gray-50">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    Tous les articles
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* Related Comparatifs */}
            {relatedComparatifs.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <Scale className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-sm font-bold text-gray-900">
                    Comparatifs
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {relatedComparatifs.map((comp) => (
                    <li key={comp.slug}>
                      <Link
                        href={`/comparatif/${comp.slug}`}
                        className="flex items-start gap-2 px-2.5 py-2 rounded-lg hover:bg-indigo-50/50 transition-colors group"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600 group-hover:text-indigo-700 leading-snug">
                          {comp.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related Glossary Terms */}
            {relatedGlossary.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <BookMarked className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-sm font-bold text-gray-900">
                    Glossaire
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {relatedGlossary.map((term) => (
                    <Link
                      key={term.slug}
                      href={`/glossaire/${term.slug}`}
                      className="inline-flex items-center px-2.5 py-1 rounded-lg bg-indigo-50 text-xs font-medium text-indigo-700 hover:bg-indigo-100 transition-colors"
                    >
                      {term.term}
                    </Link>
                  ))}
                </div>
                <div className="mt-3 pt-2 border-t border-gray-50">
                  <Link
                    href="/glossaire"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    Tout le glossaire
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* Quick navigation breadcrumb-style links */}
            {!hasContentLinks && (
              <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-sm font-bold text-gray-900">
                    Navigation rapide
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  <li>
                    <Link
                      href="/services"
                      className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-indigo-50/50 transition-colors group text-sm text-gray-600 group-hover:text-indigo-700"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                      Tous nos services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/villes"
                      className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-indigo-50/50 transition-colors group text-sm text-gray-600 group-hover:text-indigo-700"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                      Toutes les villes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/regions"
                      className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-indigo-50/50 transition-colors group text-sm text-gray-600 group-hover:text-indigo-700"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                      Toutes les regions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-indigo-50/50 transition-colors group text-sm text-gray-600 group-hover:text-indigo-700"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                      Blog et actualites
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/glossaire"
                      className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-indigo-50/50 transition-colors group text-sm text-gray-600 group-hover:text-indigo-700"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                      Glossaire
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/devis"
                      className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-indigo-50/50 transition-colors group text-sm text-gray-600 group-hover:text-indigo-700"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                      Demander un devis gratuit
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Breadcrumb-style contextual trail */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <nav
            className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400"
            aria-label="Fil d'Ariane contextuel"
          >
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Accueil
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/services" className="hover:text-indigo-600 transition-colors">
              Services
            </Link>
            {currentServiceSlug && (
              <>
                <span aria-hidden="true">/</span>
                <Link
                  href={`/services/${currentServiceSlug}`}
                  className="hover:text-indigo-600 transition-colors"
                >
                  {services.find((s) => s.slug === currentServiceSlug)?.name ?? currentServiceSlug}
                </Link>
              </>
            )}
            {cityName && currentCitySlug && (
              <>
                <span aria-hidden="true">/</span>
                <span className="text-gray-600 font-medium">{cityName}</span>
              </>
            )}
            {department && departmentSlug && (
              <>
                <span aria-hidden="true" className="mx-1">|</span>
                <Link
                  href={`/departements/${departmentSlug}`}
                  className="hover:text-indigo-600 transition-colors"
                >
                  {department} ({departmentCode})
                </Link>
              </>
            )}
            {region && regionSlug && (
              <>
                <span aria-hidden="true" className="mx-1">|</span>
                <Link
                  href={`/regions/${regionSlug}`}
                  className="hover:text-indigo-600 transition-colors"
                >
                  {region}
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// ContentHubLinks
// ---------------------------------------------------------------------------

export function ContentHubLinks({
  relatedGuides = [],
  relatedBlogPosts = [],
  services,
  topCities = [],
  currentSlug,
}: ContentHubLinksProps) {
  const displayedCities = topCities.slice(0, 8);

  return (
    <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-xl font-extrabold text-gray-900 tracking-tight mb-1">
            Ressources complementaires
          </h2>
          <p className="text-sm text-gray-500">
            Guides, articles et services lies pour approfondir le sujet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Related Guides */}
          {relatedGuides.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-indigo-600" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">Guides</h3>
              </div>
              <ul className="space-y-1">
                {relatedGuides
                  .filter((g) => g.slug !== currentSlug)
                  .slice(0, 6)
                  .map((guide) => (
                    <li key={guide.slug}>
                      <Link
                        href={`/guide/${guide.slug}`}
                        className="flex items-start gap-1.5 px-2 py-1.5 rounded-lg hover:bg-indigo-50/50 transition-colors group"
                      >
                        <ChevronRight className="w-3 h-3 text-indigo-400 flex-shrink-0 mt-1" />
                        <span className="text-sm text-gray-600 group-hover:text-indigo-700 leading-snug line-clamp-2">
                          {guide.title}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}

          {/* Related Blog Posts */}
          {relatedBlogPosts.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-indigo-600" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">Articles</h3>
              </div>
              <ul className="space-y-1">
                {relatedBlogPosts
                  .filter((p) => p.slug !== currentSlug)
                  .slice(0, 6)
                  .map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-start gap-1.5 px-2 py-1.5 rounded-lg hover:bg-indigo-50/50 transition-colors group"
                      >
                        <ChevronRight className="w-3 h-3 text-indigo-400 flex-shrink-0 mt-1" />
                        <span className="text-sm text-gray-600 group-hover:text-indigo-700 leading-snug line-clamp-2">
                          {post.title}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
              <div className="mt-3 pt-2 border-t border-gray-50">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  Tous les articles
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          )}

          {/* Related Services */}
          {services.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                  <Wrench className="w-4 h-4 text-indigo-600" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">Services</h3>
              </div>
              <ul className="space-y-1">
                {services.slice(0, 8).map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex items-start gap-1.5 px-2 py-1.5 rounded-lg hover:bg-indigo-50/50 transition-colors group"
                    >
                      <ChevronRight className="w-3 h-3 text-indigo-400 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600 group-hover:text-indigo-700 leading-snug">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-3 pt-2 border-t border-gray-50">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  Tous les services
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          )}

          {/* Top Cities */}
          {displayedCities.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-indigo-600" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">Villes populaires</h3>
              </div>
              <ul className="space-y-1">
                {displayedCities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/villes/${city.slug}`}
                      className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-indigo-50/50 transition-colors group"
                    >
                      <MapPin className="w-3 h-3 text-indigo-400 flex-shrink-0" />
                      <span className="text-sm text-gray-600 group-hover:text-indigo-700">
                        {city.name}
                      </span>
                      <span className="text-[11px] text-gray-400">
                        ({city.departmentCode})
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-3 pt-2 border-t border-gray-50">
                <Link
                  href="/villes"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  Toutes les villes
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// FooterInternalLinks
// ---------------------------------------------------------------------------

export function FooterInternalLinks({
  citiesByRegion,
  services,
  regions,
  departments,
}: FooterInternalLinksProps) {
  return (
    <section className="bg-slate-950 text-slate-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Services */}
        <div className="mb-12">
          <h3 className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-5 flex items-center gap-2">
            <Wrench className="w-3.5 h-3.5" />
            Nos services
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="text-sm text-slate-500 hover:text-white transition-colors truncate"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Cities by Region */}
        <div className="mb-12">
          <h3 className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-5 flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            Villes par region
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {citiesByRegion.map((group) => (
              <div key={group.regionSlug}>
                <Link
                  href={`/regions/${group.regionSlug}`}
                  className="text-sm font-semibold text-slate-300 hover:text-white transition-colors mb-2.5 block"
                >
                  {group.region}
                </Link>
                <ul className="space-y-1">
                  {group.cities.slice(0, 8).map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={`/villes/${city.slug}`}
                        className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1"
                      >
                        <span className="text-slate-600">&bull;</span>
                        {city.name}
                        <span className="text-slate-600 text-[10px]">
                          ({city.departmentCode})
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Regions */}
        <div className="mb-12">
          <h3 className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-5 flex items-center gap-2">
            <Globe className="w-3.5 h-3.5" />
            Regions
          </h3>
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <Link
                key={region.slug}
                href={`/regions/${region.slug}`}
                className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                {region.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-5 flex items-center gap-2">
            <Building2 className="w-3.5 h-3.5" />
            Departements
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {departments.map((dept) => (
              <Link
                key={dept.slug}
                href={`/departements/${dept.slug}`}
                className="inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-all"
              >
                <span className="text-slate-600 font-mono">{dept.code}</span>
                {dept.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom divider with quick links */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-600">
            <Link href="/devis" className="hover:text-slate-400 transition-colors">
              Demander un devis
            </Link>
            <Link href="/blog" className="hover:text-slate-400 transition-colors">
              Blog
            </Link>
            <Link href="/glossaire" className="hover:text-slate-400 transition-colors">
              Glossaire
            </Link>
            <Link href="/faq" className="hover:text-slate-400 transition-colors">
              FAQ
            </Link>
            <Link href="/comment-ca-marche" className="hover:text-slate-400 transition-colors">
              Comment ca marche
            </Link>
            <Link href="/artisans" className="hover:text-slate-400 transition-colors">
              Devenir partenaire
            </Link>
            <Link href="/plan-du-site" className="hover:text-slate-400 transition-colors">
              Plan du site
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Default export (ServiceCityInternalLinks is the primary component)
// ---------------------------------------------------------------------------
export default ServiceCityInternalLinks;
