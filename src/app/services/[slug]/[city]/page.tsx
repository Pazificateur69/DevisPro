import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "@/lib/services";
import { cities, getCityBySlug, getCitiesByRegion } from "@/lib/cities";
import DevisForm from "@/components/DevisForm";
import ServiceIcon from "@/components/ServiceIcon";
import JsonLd, { getServiceJsonLd, getFAQJsonLd } from "@/components/JsonLd";
import Breadcrumbs, { getBreadcrumbJsonLd } from "@/components/Breadcrumbs";
import {
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  Shield,
  Star,
  Phone,
  Euro,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string; city: string }>;
}

// Pre-generate top 50 cities x all services at build time
// Rest generated on-demand via ISR (cached after first visit)
export async function generateStaticParams() {
  const topCities = cities
    .sort((a, b) => b.population - a.population)
    .slice(0, 50);
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

function getServiceCityFAQ(
  serviceName: string,
  cityName: string,
  departmentCode: string,
  department: string,
  priceRange: string
) {
  return [
    {
      question: `Quel est le prix ${serviceName.toLowerCase().startsWith("d") || serviceName.toLowerCase().startsWith("e") || serviceName.toLowerCase().startsWith("n") ? "d'" : "de "}${serviceName.toLowerCase()} à ${cityName} ?`,
      answer: `Le prix moyen pour ${serviceName.toLowerCase()} à ${cityName} (${departmentCode}) se situe entre ${priceRange}. Ce tarif peut varier selon la complexité de l'intervention, l'urgence et les spécificités de votre situation. Demandez vos devis gratuits pour obtenir un prix précis.`,
    },
    {
      question: `Comment trouver un artisan pour ${serviceName.toLowerCase()} à ${cityName} ?`,
      answer: `Avec Renov Habitation, trouvez facilement un artisan qualifié pour ${serviceName.toLowerCase()} à ${cityName}. Remplissez notre formulaire gratuit en 2 minutes et recevez jusqu'à 3 devis d'artisans vérifiés du ${department} sous 24h.`,
    },
    {
      question: `Les artisans pour ${serviceName.toLowerCase()} à ${cityName} sont-ils assurés ?`,
      answer: `Oui, tous nos artisans partenaires à ${cityName} disposent d'une assurance décennale et d'une responsabilité civile professionnelle. Nous vérifions systématiquement leurs qualifications et certifications avant de les référencer.`,
    },
    {
      question: `En combien de temps peut-on intervenir pour ${serviceName.toLowerCase()} à ${cityName} ?`,
      answer: `Nos artisans partenaires à ${cityName} et dans le ${department} vous contactent sous 24h maximum. Pour les interventions urgentes, un dépannage le jour même est souvent possible selon les disponibilités.`,
    },
    {
      question: `Le devis pour ${serviceName.toLowerCase()} à ${cityName} est-il gratuit ?`,
      answer: `Oui, notre service est 100% gratuit et sans engagement. Vous recevez jusqu'à 3 devis d'artisans qualifiés à ${cityName} sans aucun frais. Vous êtes libre de choisir l'artisan qui vous convient le mieux.`,
    },
  ];
}

export default async function CityServicePage({ params }: Props) {
  const { slug, city: citySlug } = await params;
  const service = getServiceBySlug(slug);
  const city = getCityBySlug(citySlug);

  if (!service || !city) {
    notFound();
  }

  const nearbyCities = cities
    .filter(
      (c) =>
        c.slug !== city.slug &&
        (c.departmentCode === city.departmentCode || c.region === city.region)
    )
    .slice(0, 8);

  const otherServices = services.filter((s) => s.slug !== slug);

  const faqItems = getServiceCityFAQ(
    service.name,
    city.name,
    city.departmentCode,
    city.department,
    service.priceRange
  );

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
      <JsonLd data={getFAQJsonLd(faqItems)} />
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

      {/* Main content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: SEO content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {service.name} à {city.name} : trouvez le bon artisan
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Vous recherchez un professionnel pour{" "}
                  {service.name.toLowerCase()} à {city.name} (
                  {city.departmentCode}) ? Notre plateforme vous met en relation
                  avec des artisans qualifiés et vérifiés dans le{" "}
                  {city.department} et ses environs. Avec plus de{" "}
                  {city.population.toLocaleString("fr-FR")} habitants,{" "}
                  {city.name} dispose d&apos;un réseau dense de professionnels
                  prêts à intervenir rapidement.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Pourquoi passer par Renov Habitation à {city.name} ?
                </h3>
                <ul className="space-y-2.5">
                  {[
                    `Artisans locaux vérifiés à ${city.name} et dans le ${city.department}`,
                    "Jusqu'à 3 devis gratuits pour comparer les prix",
                    "Réponse garantie en moins de 24h",
                    "Service 100% gratuit et sans engagement",
                    "Artisans assurés (décennale + RC Pro)",
                    `Intervention rapide sur ${city.name} et communes voisines`,
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Prix {service.name.toLowerCase()} à {city.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Le coût moyen pour {service.name.toLowerCase()} à {city.name}{" "}
                  se situe entre{" "}
                  <strong className="text-gray-900">{service.priceRange}</strong>
                  . Ce tarif peut varier en fonction de la nature exacte de
                  l&apos;intervention, de l&apos;urgence et des conditions
                  d&apos;accès. Pour obtenir un prix précis, demandez vos devis
                  gratuits.
                </p>
              </div>

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
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3" id="formulaire">
              <DevisForm preselectedService={service.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-12 sm:py-16 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
            Questions fréquentes : {service.name.toLowerCase()} à {city.name}
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            Tout savoir sur {service.name.toLowerCase()} à {city.name} (
            {city.departmentCode})
          </p>
          <div className="space-y-3">
            {faqItems.map((faq, index) => (
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

      {/* Nearby cities */}
      {nearbyCities.length > 0 && (
        <section className="py-12 sm:py-16 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {service.name} dans les villes proches de {city.name}
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Nous intervenons également dans ces villes du {city.department} et
              de la région {city.region}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {nearbyCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/services/${slug}/${c.slug}`}
                  className="p-3 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all text-center card-hover"
                >
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <MapPin className="w-3 h-3 text-indigo-500" />
                    <span className="text-sm font-medium text-gray-900 truncate">
                      {c.name}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">
                    {c.departmentCode}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other services in this city */}
      <section className="bg-gray-50 py-12 sm:py-16 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Tous nos services à {city.name}
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Découvrez tous les services disponibles à {city.name} (
            {city.departmentCode})
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/${city.slug}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-white hover:border-indigo-200 hover:bg-indigo-50/30 transition-all card-hover"
              >
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ServiceIcon
                    name={s.icon}
                    className="w-5 h-5 text-indigo-600"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium text-gray-900 block truncate">
                    {s.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    à {city.name} - {s.priceRange}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href={`/villes/${city.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              Voir tous les artisans à {city.name}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

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
