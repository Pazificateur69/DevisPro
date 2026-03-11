import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "@/lib/services";
import { cities, getCityBySlug, getCitiesByRegion } from "@/lib/cities";
import { getLongTailByService } from "@/lib/longtail";
import { comparatifs } from "@/lib/comparatifs";
import { glossaryTerms } from "@/lib/glossaire";
import DevisForm from "@/components/DevisForm";
import ServiceIcon from "@/components/ServiceIcon";
import JsonLd, { getServiceJsonLd, getFAQJsonLd } from "@/components/JsonLd";
import Breadcrumbs, { getBreadcrumbJsonLd } from "@/components/Breadcrumbs";
import { ServiceCityInternalLinks } from "@/components/InternalLinking";
import { getCityServiceSEOContent } from "@/lib/seo-content";
import {
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  Shield,
  Star,
  Phone,
  Euro,
  Home as HomeIcon,
  ThermometerSun,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string; city: string }>;
}

// Pre-generate top 200 cities x all services at build time
// Rest generated on-demand via ISR (cached after first visit)
export async function generateStaticParams() {
  const topCities = cities
    .sort((a, b) => b.population - a.population)
    .slice(0, 200);
  const params: { slug: string; city: string }[] = [];
  for (const service of services) {
    for (const city of topCities) {
      params.push({ slug: service.slug, city: city.slug });
    }
  }
  return params;
}

export const dynamicParams = true;
export const revalidate = 86400; // Revalidate every 24h

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, city: citySlug } = await params;
  const service = getServiceBySlug(slug);
  const city = getCityBySlug(citySlug);
  if (!service || !city) return {};

  const title = `${service.name} à ${city.name} (${city.departmentCode}) - Devis Gratuit 2026`;
  const description = `${service.name} à ${city.name} : comparez jusqu'à 3 devis gratuits d'artisans qualifiés dans le ${city.department} (${city.departmentCode}). Prix moyen ${service.priceRange}. Réponse en 24h.`;

  return {
    title,
    description,
    keywords: [
      ...service.keywords,
      `${service.name.toLowerCase()} ${city.name}`,
      `artisan ${city.name}`,
      `devis ${service.name.toLowerCase()} ${city.name}`,
      `prix ${service.name.toLowerCase()} ${city.name}`,
      city.name,
      city.department,
      `${city.departmentCode}`,
      "devis gratuit",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} à ${city.name} - Devis Gratuit`,
      description,
    },
    alternates: {
      canonical: `/services/${slug}/${citySlug}`,
    },
  };
}

export default async function CityServicePage({ params }: Props) {
  const { slug, city: citySlug } = await params;
  const service = getServiceBySlug(slug);
  const city = getCityBySlug(citySlug);

  if (!service || !city) {
    notFound();
  }

  // Get ultra-personalized SEO content
  const seoContent = getCityServiceSEOContent(
    city.name,
    city.population,
    city.department,
    city.departmentCode,
    city.region,
    service.name,
    service.slug,
    city.slug,
    service.priceRange
  );

  // Nearby cities for internal linking (expanded to 16)
  const nearbyCities = cities
    .filter(
      (c) =>
        c.slug !== city.slug &&
        (c.departmentCode === city.departmentCode || c.region === city.region)
    )
    .sort((a, b) => b.population - a.population)
    .slice(0, 16);

  const otherServices = services.filter((s) => s.slug !== slug);

  // Related content for maillage interne
  const relatedGuides = getLongTailByService(service.slug).map((g) => ({
    slug: g.slug,
    title: g.title,
  }));

  const relatedComparatifs = comparatifs
    .filter((c) => c.relatedServiceSlug === service.slug)
    .map((c) => ({ slug: c.slug, title: c.title }));

  const relatedGlossary = glossaryTerms
    .filter((t) => t.relatedServiceSlug === service.slug)
    .slice(0, 5)
    .map((t) => ({ slug: t.slug, term: t.term }));

  const breadcrumbItems = [
    { name: "Services", url: "/services" },
    { name: service.name, url: `/services/${slug}` },
    { name: city.name, url: `/services/${slug}/${citySlug}` },
  ];

  return (
    <>
      <JsonLd
        data={getServiceJsonLd(
          service.name,
          service.description,
          city.name,
          service.priceRange
        )}
      />
      <JsonLd data={getFAQJsonLd(seoContent.faqItems)} />
      <JsonLd data={getBreadcrumbJsonLd(breadcrumbItems)} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-5">
            <Breadcrumbs
              items={[
                { label: service.name, href: `/services/${slug}` },
                { label: city.name },
              ]}
            />
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                <ServiceIcon
                  name={service.icon}
                  className="w-6 h-6 text-white"
                />
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-300" />
                <span className="text-indigo-200 font-medium">
                  {city.name} ({city.departmentCode}) - {city.department}
                </span>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              {service.name} à {city.name} ({city.departmentCode})
            </h1>
            <p className="text-lg text-indigo-100 mb-6 leading-relaxed">
              Trouvez un artisan qualifié pour {service.name.toLowerCase()} à{" "}
              {city.name} et dans le {city.department}. Recevez jusqu&apos;à 3
              devis gratuits en moins de 24h.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {[
                { icon: Shield, text: `Artisans vérifiés à ${city.name}` },
                { icon: Euro, text: `Prix moyen : ${service.priceRange}` },
                { icon: Clock, text: "Réponse garantie en 24h" },
                { icon: Star, text: "Devis gratuit sans engagement" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-1.5 text-indigo-200"
                >
                  <item.icon className="w-4 h-4 text-indigo-300" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Price bar */}
      <section className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="text-gray-600">
                <strong className="text-gray-900">Prix moyen</strong> à{" "}
                {city.name} :{" "}
                <span className="text-indigo-600 font-bold">
                  {service.priceRange}
                </span>
              </span>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                <span>Artisans vérifiés et qualifiés</span>
              </div>
            </div>
            <Link
              href="#formulaire"
              className="btn-accent inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold"
            >
              Demander un devis gratuit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main content - Ultra personalized */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: Ultra-personalized SEO content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Introduction personnalisée par ville */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {service.name} à {city.name} : trouvez le bon artisan
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {seoContent.introText}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Expertise locale - contexte régional */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  <span className="flex items-center gap-2">
                    <HomeIcon className="w-5 h-5 text-indigo-600" />
                    Expertise locale à {city.name}
                  </span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {seoContent.localExpertiseText}
                </p>
              </div>

              {/* Why choose us - personnalisé */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Pourquoi passer par Renov Habitation à {city.name} ?
                </h3>
                <ul className="space-y-2.5">
                  {seoContent.whyChooseUsItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing context - personnalisé par région */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  <span className="flex items-center gap-2">
                    <ThermometerSun className="w-5 h-5 text-indigo-600" />
                    Prix {service.name.toLowerCase()} à {city.name}
                  </span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {seoContent.pricingContextText}
                </p>
                <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                  <div className="text-sm text-indigo-900 font-semibold mb-1">
                    Fourchette de prix à {city.name}
                  </div>
                  <div className="text-2xl font-extrabold text-indigo-700">
                    {service.priceRange}
                  </div>
                  <div className="text-xs text-indigo-600 mt-1">
                    Prix moyen constaté dans le {city.department} ({city.departmentCode})
                  </div>
                </div>
              </div>

              {/* Zone d'intervention */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Zone d&apos;intervention autour de {city.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Nos artisans partenaires interviennent à {city.name} et dans
                  toutes les communes du {city.department} (
                  {city.departmentCode}), région {city.region}. Que vous soyez
                  en centre-ville ou en périphérie de {city.name}, un
                  professionnel qualifié peut se déplacer chez vous rapidement.
                </p>
                {/* Quick links to nearby cities */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {nearbyCities.slice(0, 6).map((c) => (
                    <Link
                      key={c.slug}
                      href={`/services/${slug}/${c.slug}`}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg text-xs text-gray-600 transition-colors"
                    >
                      <MapPin className="w-3 h-3" />
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related guides links for SEO */}
              {relatedGuides.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Guides et conseils
                  </h3>
                  <div className="space-y-2">
                    {relatedGuides.map((guide) => (
                      <Link
                        key={guide.slug}
                        href={`/guide/${guide.slug}`}
                        className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors group"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-indigo-500 group-hover:translate-x-0.5 transition-transform" />
                        <span className="text-sm text-gray-700 group-hover:text-indigo-700">
                          {guide.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3" id="formulaire">
              <DevisForm preselectedService={service.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Ultra personalized with 8+ questions */}
      <section className="bg-gray-50 py-12 sm:py-16 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
            Questions fréquentes : {service.name.toLowerCase()} à {city.name}
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            Tout savoir sur {service.name.toLowerCase()} à {city.name} (
            {city.departmentCode}) - {city.region}
          </p>
          <div className="space-y-3">
            {seoContent.faqItems.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden"
                {...(index === 0 ? { open: true } : {})}
              >
                <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-gray-900 text-sm hover:text-indigo-700 transition-colors">
                  <span className="pr-4">{faq.question}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Maillage interne - Comprehensive internal linking */}
      <ServiceCityInternalLinks
        currentServiceSlug={slug}
        currentCitySlug={citySlug}
        cityName={city.name}
        department={city.department}
        departmentCode={city.departmentCode}
        region={city.region}
        services={otherServices.map((s) => ({ slug: s.slug, name: s.name }))}
        nearbyCities={nearbyCities.map((c) => ({
          slug: c.slug,
          name: c.name,
          departmentCode: c.departmentCode,
        }))}
        relatedGuides={relatedGuides}
        relatedComparatifs={relatedComparatifs}
        relatedGlossary={relatedGlossary}
      />

      {/* CTA */}
      <section className="hero-gradient text-white py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Besoin {service.name.toLowerCase().startsWith("d") || service.name.toLowerCase().startsWith("e") || service.name.toLowerCase().startsWith("n") ? "d'" : "de "}{service.name.toLowerCase()} à {city.name} ?
          </h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Recevez jusqu&apos;à 3 devis gratuits en moins de 24h. Service 100%
            gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#formulaire"
              className="btn-glow inline-flex items-center gap-2 bg-white text-indigo-700 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Demander mes devis gratuits
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+33800000000"
              className="inline-flex items-center gap-2 text-indigo-200 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              Ou appelez-nous
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
