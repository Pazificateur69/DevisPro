import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "@/lib/services";
import { cities, getCityBySlug } from "@/lib/cities";
import DevisForm from "@/components/DevisForm";
import ServiceIcon from "@/components/ServiceIcon";
import { CheckCircle, ArrowRight, Star, MapPin } from "lucide-react";

interface Props {
  params: Promise<{ slug: string; city: string }>;
}

export async function generateStaticParams() {
  const params: { slug: string; city: string }[] = [];
  for (const service of services) {
    for (const city of cities) {
      params.push({ slug: service.slug, city: city.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, city: citySlug } = await params;
  const service = getServiceBySlug(slug);
  const city = getCityBySlug(citySlug);
  if (!service || !city) return {};

  const title = `${service.name} a ${city.name} - Devis gratuit | DevisPro`;
  const description = `Besoin d'un artisan pour ${service.name.toLowerCase()} a ${city.name} (${city.departmentCode}) ? Recevez jusqu'a 3 devis gratuits en 24h. Artisans qualifies et verifies.`;

  return {
    title,
    description,
    keywords: [
      ...service.keywords,
      city.name,
      city.department,
      `artisan ${city.name}`,
      `devis ${city.name}`,
    ],
    openGraph: {
      title,
      description,
      type: "website",
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

  const nearbyCities = cities
    .filter(
      (c) =>
        c.slug !== city.slug &&
        (c.departmentCode === city.departmentCode || c.region === city.region)
    )
    .slice(0, 6);

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
              <Link href="/" className="hover:text-white">Accueil</Link>
              <span>/</span>
              <Link href={`/services/${slug}`} className="hover:text-white">{service.name}</Link>
              <span>/</span>
              <span className="text-white">{city.name}</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <ServiceIcon name={service.icon} className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-200" />
                <span className="text-blue-200">{city.name} ({city.departmentCode})</span>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
              {service.name} a {city.name}
            </h1>
            <p className="text-lg text-blue-100 mb-6">
              Trouvez un artisan qualifie pour {service.name.toLowerCase()} a {city.name} et dans le {city.department}. Recevez jusqu&apos;a 3 devis gratuits en moins de 24h.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-blue-200">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                <span>Artisans verifies a {city.name}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                <span>Devis gratuit et sans engagement</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                <span>Reponse en 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price bar */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>
                <strong className="text-gray-900">Prix moyen</strong> a {city.name} : {service.priceRange}
              </span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="ml-1 text-xs text-gray-500">4.8/5 (avis clients)</span>
              </div>
            </div>
            <Link
              href="#formulaire"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Demander un devis
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: SEO content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {service.name} a {city.name} : trouvez le bon artisan
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Vous recherchez un professionnel pour {service.name.toLowerCase()} a {city.name} ({city.departmentCode}) ? Notre plateforme vous met en relation avec des artisans qualifies et verifies dans le {city.department} et ses environs.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Pourquoi passer par DevisPro a {city.name} ?
                </h3>
                <ul className="space-y-2.5">
                  {[
                    `Artisans locaux verifies a ${city.name} et ${city.department}`,
                    "Jusqu'a 3 devis gratuits pour comparer",
                    "Reponse garantie en moins de 24h",
                    "Service 100% gratuit et sans engagement",
                    "Avis clients verifies",
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
                  Zone d&apos;intervention
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Nos artisans partenaires interviennent a {city.name} et dans toutes les communes du {city.department} ({city.departmentCode}), region {city.region}.
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

      {/* Nearby cities */}
      {nearbyCities.length > 0 && (
        <section className="bg-white py-10 sm:py-14 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {service.name} dans les villes proches
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Nous intervenons egalement dans ces villes du {city.department}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {nearbyCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/services/${slug}/${c.slug}`}
                  className="p-3 rounded-xl border hover:border-blue-300 hover:bg-blue-50/50 transition-all text-center"
                >
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <MapPin className="w-3 h-3 text-blue-500" />
                    <span className="text-sm font-medium text-gray-900">{c.name}</span>
                  </div>
                  <span className="text-xs text-gray-400">{c.departmentCode}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other services in this city */}
      <section className="py-10 sm:py-14 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Autres services a {city.name}
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Tous nos services disponibles a {city.name}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/${city.slug}`}
                className="flex items-center gap-3 p-4 rounded-xl border hover:border-blue-300 hover:bg-blue-50/50 transition-all"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ServiceIcon name={s.icon} className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-900 block">{s.name}</span>
                  <span className="text-xs text-gray-400">{city.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Besoin d&apos;un artisan a {city.name} ?
          </h2>
          <p className="text-blue-100 mb-6">
            Recevez vos devis gratuits en moins de 24h
          </p>
          <Link
            href="#formulaire"
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition-colors"
          >
            Demander mes devis gratuits
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
