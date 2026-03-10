import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllRegions, getRegionBySlug } from "@/lib/regions";
import { services } from "@/lib/services";
import { getCitiesByRegion } from "@/lib/cities";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs, { getBreadcrumbJsonLd } from "@/components/Breadcrumbs";
import ServiceIcon from "@/components/ServiceIcon";
import {
  MapPin,
  ArrowRight,
  CheckCircle,
  Building2,
  Users,
  Star,
  ChevronDown,
  Shield,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllRegions().map((region) => ({ slug: region.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) return {};

  const title = `Artisans en ${region.name} - Devis gratuit | Renov Habitation`;
  const description = `Trouvez un artisan qualifie en ${region.name}. ${region.departments.length} departements couverts. Recevez jusqu'a 3 devis gratuits pour vos travaux : plomberie, chauffage, renovation et plus.`;

  return {
    title,
    description,
    keywords: [
      `artisan ${region.name}`,
      `devis ${region.name}`,
      `travaux ${region.name}`,
      `plombier ${region.name}`,
      `chauffagiste ${region.name}`,
      `renovation ${region.name}`,
      `depannage ${region.name}`,
    ],
    alternates: {
      canonical: `/regions/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://renov-habitation.fr/regions/${slug}`,
      siteName: "Renov Habitation",
      type: "website",
      locale: "fr_FR",
    },
  };
}

const faqByRegion = (regionName: string) => [
  {
    question: `Comment trouver un artisan de confiance en ${regionName} ?`,
    answer: `Sur Renov Habitation, nous selectionnons des artisans qualifies en ${regionName}. Decrivez votre projet et recevez jusqu'a 3 devis gratuits d'artisans verifies. Comparez les prix, les avis et choisissez le professionnel qui vous convient.`,
  },
  {
    question: `Quels types de travaux peut-on realiser en ${regionName} ?`,
    answer: `Nos artisans en ${regionName} couvrent tous les corps de metier : plomberie, chauffage, electricite, serrurerie, isolation, peinture, volets roulants, climatisation, ramonage, traitement de nuisibles et bien plus encore.`,
  },
  {
    question: `Combien coute un artisan en ${regionName} ?`,
    answer: `Les tarifs varient selon le type de prestation et la ville. En ${regionName}, comptez par exemple 80 a 500 euros pour une intervention de plomberie urgente, 150 a 300 euros pour un entretien de pompe a chaleur, ou 50 a 120 euros pour un ramonage. Demandez vos devis gratuits pour obtenir des prix precis.`,
  },
  {
    question: `Le service de mise en relation est-il gratuit en ${regionName} ?`,
    answer: `Oui, notre service est 100% gratuit et sans engagement. Vous decrivez votre besoin, nous vous mettons en relation avec jusqu'a 3 artisans qualifies en ${regionName}, et vous choisissez librement celui qui vous convient le mieux.`,
  },
];

export default async function RegionPage({ params }: Props) {
  const { slug } = await params;
  const region = getRegionBySlug(slug);

  if (!region) {
    notFound();
  }

  const regionCities = getCitiesByRegion(region.name);
  const faqs = faqByRegion(region.name);

  // Build department slug from name (same logic as departements.ts)
  const getDeptSlug = (name: string) =>
    name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  // JSON-LD structured data
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Renov Habitation",
    url: `https://renov-habitation.fr/regions/${slug}`,
    description: region.description,
    telephone: "+33800000000",
    email: "contact@renov-habitation.fr",
    areaServed: {
      "@type": "AdministrativeArea",
      name: region.name,
    },
    priceRange: "€€",
  };

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Regions", url: "/zones-intervention" },
    { name: region.name, url: `/regions/${slug}` },
  ]);

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Artisans en ${region.name}`,
    description: region.description,
    url: `https://renov-habitation.fr/regions/${slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Renov Habitation",
      url: "https://renov-habitation.fr",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={localBusinessJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={collectionPageJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section className="hero-gradient text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-violet-500/6 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
              <MapPin className="w-7 h-7 text-indigo-300" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Artisans en{" "}
              <span className="text-indigo-300">{region.name}</span>
            </h1>
            <p className="text-lg text-indigo-100 max-w-2xl mb-8">
              {region.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 border border-white/10">
                <Building2 className="w-5 h-5 text-indigo-300" />
                <div>
                  <p className="text-xl font-bold">{region.departments.length}</p>
                  <p className="text-xs text-indigo-200">Departements</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 border border-white/10">
                <MapPin className="w-5 h-5 text-indigo-300" />
                <div>
                  <p className="text-xl font-bold">{regionCities.length}</p>
                  <p className="text-xs text-indigo-200">Villes couvertes</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 border border-white/10">
                <Users className="w-5 h-5 text-indigo-300" />
                <div>
                  <p className="text-xl font-bold">{services.length}</p>
                  <p className="text-xs text-indigo-200">Services</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 border border-white/10">
                <Star className="w-5 h-5 text-indigo-300" />
                <div>
                  <p className="text-xl font-bold">4.8/5</p>
                  <p className="text-xs text-indigo-200">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            items={[
              { label: "Regions", href: "/zones-intervention" },
              { label: region.name },
            ]}
          />
        </div>
      </section>

      {/* Departments grid */}
      <section className="py-16 sm:py-20 bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
              <Building2 className="w-3.5 h-3.5" />
              {region.departments.length} departements
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Departements de la region {region.name}
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              Selectionnez un departement pour trouver un artisan qualifie pres
              de chez vous
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {region.departments.map((dept) => (
              <Link
                key={dept.code}
                href={`/departements/${getDeptSlug(dept.name)}`}
                className="flex flex-col p-5 rounded-2xl bg-white border border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all card-hover group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-50 to-indigo-100/80 rounded-xl flex items-center justify-center mb-3 group-hover:from-indigo-100 group-hover:to-indigo-200 transition-all">
                  <Building2 className="w-5 h-5 text-indigo-600" />
                </div>
                <span className="font-bold text-slate-900 text-[15px] mb-1 group-hover:text-indigo-600 transition-colors">
                  {dept.name}
                </span>
                <span className="text-xs text-slate-400">
                  Departement {dept.code}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cities grid */}
      {regionCities.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
                <MapPin className="w-3.5 h-3.5" />
                {regionCities.length} villes couvertes
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                Principales villes en {region.name}
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto">
                Selectionnez votre ville pour trouver un artisan qualifie
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {regionCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/services/plomberie-urgente/${city.slug}`}
                  className="flex flex-col p-4 rounded-2xl bg-white border border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all card-hover"
                >
                  <span className="font-bold text-slate-900 text-[15px] mb-1 truncate">
                    {city.name}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-auto">
                    <MapPin className="w-3 h-3 text-indigo-400 flex-shrink-0" />
                    <span>
                      {city.population.toLocaleString("fr-FR")} hab.
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services grid */}
      <section className="py-16 sm:py-20 bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
              <Shield className="w-3.5 h-3.5" />
              {services.length} services disponibles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Services disponibles en {region.name}
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              Tous nos services sont accessibles dans la region{" "}
              {region.name}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 hover:border-indigo-200 card-hover group"
              >
                <div className="w-11 h-11 bg-gradient-to-br from-indigo-50 to-indigo-100/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-indigo-100 group-hover:to-indigo-200 transition-all">
                  <ServiceIcon
                    name={service.icon}
                    className="w-5 h-5 text-indigo-600"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 text-[15px] group-hover:text-indigo-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-slate-400 truncate">
                    {service.priceRange}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-400 transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
              Questions frequentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Vos questions sur les artisans en {region.name}
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl bg-white border border-slate-100 hover:border-indigo-200 transition-all"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-semibold text-slate-900 text-[15px] group-hover:text-indigo-600 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 pt-0">
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
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
            Besoin d&apos;un artisan en {region.name} ?
          </h2>
          <p className="text-slate-400 mb-8 text-base max-w-md mx-auto">
            Recevez jusqu&apos;a 3 devis gratuits d&apos;artisans qualifies dans
            votre region. Service 100% gratuit et sans engagement.
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
