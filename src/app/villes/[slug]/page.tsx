import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, getCityBySlug, getCitiesByRegion } from "@/lib/cities";
import { services } from "@/lib/services";
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
  Users,
  Phone,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

// Pre-generate top 100 cities at build time, rest via ISR
export async function generateStaticParams() {
  return cities
    .sort((a, b) => b.population - a.population)
    .slice(0, 100)
    .map((city) => ({ slug: city.slug }));
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  const title = `Artisan à ${city.name} (${city.departmentCode}) - Devis Gratuit en 24h | Renov Habitation`;
  const description = `Trouvez un artisan qualifié à ${city.name} (${city.department}, ${city.departmentCode}). Plomberie, chauffage, volets, nuisibles... Recevez jusqu'à 3 devis gratuits en 24h. ${city.population.toLocaleString("fr-FR")} habitants desservis.`;

  return {
    title,
    description,
    keywords: [
      `artisan ${city.name}`,
      `devis ${city.name}`,
      `travaux ${city.name}`,
      `plombier ${city.name}`,
      `dépannage ${city.name}`,
      `réparation ${city.name}`,
      `${city.department}`,
      `artisan ${city.departmentCode}`,
      "devis gratuit",
      "artisan qualifié",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: `Artisan à ${city.name} - Devis Gratuit`,
      description,
    },
    alternates: {
      canonical: `/villes/${slug}`,
    },
  };
}

function getCityFAQ(cityName: string, departmentCode: string, department: string) {
  return [
    {
      question: `Comment trouver un artisan fiable à ${cityName} ?`,
      answer: `Renov Habitation sélectionne pour vous les meilleurs artisans à ${cityName} (${departmentCode}). Tous nos partenaires sont vérifiés, assurés et qualifiés. Remplissez notre formulaire gratuit pour recevoir jusqu'à 3 devis comparatifs en moins de 24h.`,
    },
    {
      question: `Combien coûte un artisan à ${cityName} ?`,
      answer: `Les tarifs varient selon le type de prestation. À ${cityName}, les prix sont alignés sur la moyenne du département ${department}. Demandez vos devis gratuits pour obtenir des prix précis et comparer les offres de plusieurs artisans locaux.`,
    },
    {
      question: `Quels services sont disponibles à ${cityName} ?`,
      answer: `À ${cityName}, nous couvrons tous les services : réparation de volets roulants, recherche de fuite d'eau, débarras, traitement de nuisibles, entretien pompe à chaleur, nettoyage panneaux solaires, dépannage portail, ramonage, plomberie urgente et dépannage chauffage.`,
    },
    {
      question: `Le service de devis est-il vraiment gratuit à ${cityName} ?`,
      answer: `Oui, notre service est 100% gratuit et sans engagement. Vous recevez jusqu'à 3 devis d'artisans qualifiés à ${cityName} sans aucun frais. Vous êtes libre de choisir l'artisan qui vous convient ou de refuser toutes les propositions.`,
    },
    {
      question: `En combien de temps un artisan peut-il intervenir à ${cityName} ?`,
      answer: `Nos artisans partenaires à ${cityName} et dans le ${department} s'engagent à vous contacter sous 24h. Pour les urgences (plomberie, chauffage), une intervention le jour même est souvent possible selon la disponibilité.`,
    },
    {
      question: `Les artisans à ${cityName} sont-ils assurés ?`,
      answer: `Tous les artisans référencés sur Renov Habitation à ${cityName} disposent d'une assurance décennale et responsabilité civile professionnelle. Nous vérifions leurs qualifications et certifications avant de les référencer sur notre plateforme.`,
    },
  ];
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const nearbyCities = getCitiesByRegion(city.region)
    .filter((c) => c.slug !== city.slug)
    .slice(0, 12);

  const faqItems = getCityFAQ(city.name, city.departmentCode, city.department);

  const breadcrumbItems = [
    { name: "Villes", url: "/villes" },
    { name: city.name, url: `/villes/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: `Renov Habitation ${city.name}`,
          url: `https://renov-habitation.fr/villes/${slug}`,
          description: `Artisans qualifiés à ${city.name} pour tous vos travaux. Devis gratuit en 24h.`,
          telephone: "+33800000000",
          email: "contact@renov-habitation.fr",
          address: {
            "@type": "PostalAddress",
            addressLocality: city.name,
            addressRegion: city.region,
            addressCountry: "FR",
          },
          areaServed: {
            "@type": "City",
            name: city.name,
          },
          priceRange: "€€",
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "08:00",
            closes: "19:00",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `Services à ${city.name}`,
            itemListElement: services.map((s) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: `${s.name} à ${city.name}`,
                description: s.description,
              },
            })),
          },
        }}
      />
      <JsonLd data={getFAQJsonLd(faqItems)} />
      <JsonLd data={getBreadcrumbJsonLd(breadcrumbItems)} />

      {/* Hero */}
      <section className="hero-gradient text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Villes", href: "/villes" },
                { label: city.name },
              ]}
            />
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-indigo-300" />
              <span className="text-indigo-200 font-medium">
                {city.department} ({city.departmentCode}) - {city.region}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight">
              Artisan à {city.name} ({city.departmentCode})
            </h1>
            <p className="text-lg sm:text-xl text-indigo-100 mb-8 leading-relaxed max-w-2xl">
              Trouvez un artisan qualifié et vérifié à {city.name}. Recevez
              jusqu&apos;à 3 devis gratuits en moins de 24h pour tous vos
              travaux de réparation et dépannage.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  icon: Shield,
                  label: "Artisans vérifiés",
                  sub: `à ${city.name}`,
                },
                { icon: Clock, label: "Réponse en 24h", sub: "garantie" },
                { icon: Star, label: "100% gratuit", sub: "sans engagement" },
                {
                  icon: Users,
                  label: `${city.population.toLocaleString("fr-FR")}`,
                  sub: "habitants desservis",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10"
                >
                  <item.icon className="w-5 h-5 text-indigo-300 mx-auto mb-1.5" />
                  <div className="text-sm font-bold text-white">
                    {item.label}
                  </div>
                  <div className="text-xs text-indigo-200">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services disponibles */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              Tous nos services à {city.name}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {services.length} prestations disponibles avec des artisans
              locaux vérifiés dans le {city.department} ({city.departmentCode})
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/${city.slug}`}
                className="group flex flex-col p-6 rounded-2xl border border-gray-100 bg-white hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all card-hover"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-100 transition-colors">
                    <ServiceIcon
                      name={service.icon}
                      className="w-6 h-6 text-indigo-600"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-indigo-700 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs text-gray-400">
                      à {city.name} ({city.departmentCode})
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                  {service.shortDescription}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <span className="text-sm font-bold text-indigo-600">
                    {service.priceRange}
                  </span>
                  <span className="text-xs text-indigo-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Devis gratuit
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire devis */}
      <section className="bg-gray-50 py-14 sm:py-20 border-t" id="formulaire">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-extrabold text-gray-900">
                Demandez vos devis gratuits à {city.name}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Remplissez le formulaire ci-contre pour recevoir jusqu&apos;à 3
                devis d&apos;artisans qualifiés à {city.name} et dans le{" "}
                {city.department}. Service 100% gratuit et sans engagement.
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Décrivez votre besoin",
                    desc: `Sélectionnez le service souhaité à ${city.name}`,
                  },
                  {
                    step: "2",
                    title: "Recevez vos devis en 24h",
                    desc: `Jusqu'à 3 artisans de ${city.name} vous contactent`,
                  },
                  {
                    step: "3",
                    title: "Choisissez librement",
                    desc: "Comparez les offres et choisissez sans engagement",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-9 h-9 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <DevisForm />
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Renov Habitation */}
      <section className="py-14 sm:py-20 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3 text-center">
            Pourquoi choisir Renov Habitation à {city.name} ?
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
            Nous facilitons la mise en relation entre particuliers et artisans
            qualifiés dans le {city.department}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Artisans vérifiés",
                desc: `Tous nos artisans à ${city.name} sont vérifiés, assurés et disposent des qualifications requises (assurance décennale, RC Pro).`,
              },
              {
                icon: Clock,
                title: "Rapidité garantie",
                desc: `Recevez vos devis en moins de 24h. Pour les urgences à ${city.name}, intervention possible le jour même.`,
              },
              {
                icon: Star,
                title: "Service gratuit",
                desc: `Notre service de mise en relation est 100% gratuit et sans engagement pour les habitants de ${city.name}.`,
              },
              {
                icon: Users,
                title: "Proximité locale",
                desc: `Des artisans implantés à ${city.name} et dans le ${city.department} qui connaissent les spécificités locales.`,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-gray-100 bg-white"
              >
                <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-14 sm:py-20 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3 text-center">
            Questions fréquentes - Artisan à {city.name}
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Tout ce que vous devez savoir sur nos services à {city.name} ({city.departmentCode})
          </p>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden"
                {...(index === 0 ? { open: true } : {})}
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-gray-900 hover:text-indigo-700 transition-colors">
                  <span className="pr-4">{faq.question}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Villes proches */}
      {nearbyCities.length > 0 && (
        <section className="py-14 sm:py-20 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
              Artisans dans les villes proches de {city.name}
            </h2>
            <p className="text-gray-500 mb-8">
              Nous intervenons également dans ces villes du {city.department} et
              de la région {city.region}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {nearbyCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/villes/${c.slug}`}
                  className="flex flex-col items-center p-4 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all card-hover text-center"
                >
                  <MapPin className="w-4 h-4 text-indigo-400 mb-1.5" />
                  <span className="text-sm font-bold text-gray-900 mb-0.5">
                    {c.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    {c.departmentCode}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Besoin d&apos;un artisan à {city.name} ?
          </h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Recevez vos devis gratuits en moins de 24h. Service 100% gratuit et
            sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#formulaire"
              className="btn-glow inline-flex items-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
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
