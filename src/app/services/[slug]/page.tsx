import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "@/lib/services";
import { cities } from "@/lib/cities";
import DevisForm from "@/components/DevisForm";
import ServiceIcon from "@/components/ServiceIcon";
import JsonLd, { getServiceJsonLd, getFAQJsonLd } from "@/components/JsonLd";
import Breadcrumbs, { getBreadcrumbJsonLd } from "@/components/Breadcrumbs";
import { CheckCircle, ArrowRight, MapPin, Clock, Shield, Star } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const title = `${service.name} - Devis Gratuit en 24h | Renov Habitation`;
  const description = `${service.name} : recevez jusqu'à 3 devis gratuits d'artisans qualifiés. Prix moyen ${service.priceRange}. Intervention dans toute la France. Réponse en 24h.`;

  return {
    title,
    description,
    keywords: [
      ...service.keywords,
      `devis ${service.name.toLowerCase()}`,
      `prix ${service.name.toLowerCase()}`,
      `artisan ${service.name.toLowerCase()}`,
      "devis gratuit",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "fr_FR",
    },
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

function getServiceFAQ(serviceName: string, priceRange: string) {
  return [
    {
      question: `Combien coûte ${serviceName.toLowerCase().startsWith("d") || serviceName.toLowerCase().startsWith("e") || serviceName.toLowerCase().startsWith("n") ? "l'" : "la "}${serviceName.toLowerCase()} ?`,
      answer: `Le prix moyen pour ${serviceName.toLowerCase()} se situe entre ${priceRange}. Les tarifs varient selon la complexité, l'urgence et votre localisation. Demandez vos devis gratuits pour obtenir un prix précis adapté à votre situation.`,
    },
    {
      question: `Comment trouver un artisan pour ${serviceName.toLowerCase()} ?`,
      answer: `Avec Renov Habitation, remplissez notre formulaire en 2 minutes et recevez jusqu'à 3 devis d'artisans qualifiés sous 24h. Tous nos artisans sont vérifiés, assurés et disposent des certifications requises.`,
    },
    {
      question: `Le devis pour ${serviceName.toLowerCase()} est-il gratuit ?`,
      answer: `Oui, notre service est 100% gratuit et sans engagement. Vous recevez jusqu'à 3 devis sans frais et vous êtes libre de choisir ou de refuser toutes les propositions.`,
    },
  ];
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 4);
  const topCities = cities.slice(0, 24);
  const faqItems = getServiceFAQ(service.name, service.priceRange);

  return (
    <>
      <JsonLd data={getServiceJsonLd(service.name, service.description, undefined, service.priceRange)} />
      <JsonLd data={getFAQJsonLd(faqItems)} />
      <JsonLd data={getBreadcrumbJsonLd([{ name: service.name, url: `/services/${slug}` }])} />

      {/* Hero */}
      <section className="hero-gradient text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-5">
            <Breadcrumbs items={[{ label: service.name }]} />
          </div>
          <div className="max-w-3xl">
            <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 border border-white/10">
              <ServiceIcon name={service.icon} className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
              {service.name}
            </h1>
            <p className="text-lg text-indigo-100 mb-6 max-w-2xl leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-indigo-200">
              {[
                { icon: Shield, text: "Artisans vérifiés et assurés" },
                { icon: Clock, text: "Réponse en 24h" },
                { icon: Star, text: "Devis gratuit sans engagement" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-indigo-300" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Price info */}
      <section className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-sm text-slate-500">Prix indicatif :</span>
              <span className="ml-2 text-lg font-bold text-indigo-600">
                {service.priceRange}
              </span>
            </div>
            <Link
              href="#formulaire"
              className="btn-accent inline-flex items-center gap-2 px-6 py-3 font-semibold"
            >
              Recevoir mes devis gratuits
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Content + Form */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Pourquoi faire appel à un professionnel ?
                </h2>
                <ul className="space-y-3">
                  {[
                    "Diagnostic précis du problème",
                    "Intervention rapide et efficace",
                    "Garantie sur les travaux réalisés",
                    "Conseils personnalisés d'expert",
                    "Matériel professionnel adapté",
                    "Assurance décennale et RC Pro",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Comment ça fonctionne ?
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Décrivez votre besoin",
                      desc: "Remplissez le formulaire en quelques clics",
                    },
                    {
                      step: "2",
                      title: "Recevez vos devis",
                      desc: "Jusqu'à 3 artisans vous contactent sous 24h",
                    },
                    {
                      step: "3",
                      title: "Choisissez librement",
                      desc: "Comparez et sélectionnez sans engagement",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">
                          {item.title}
                        </div>
                        <div className="text-sm text-slate-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3" id="formulaire">
              <DevisForm preselectedService={service.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-12 sm:py-16 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-2 text-center">
            Questions fréquentes : {service.name.toLowerCase()}
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8">
            Tout savoir avant de demander un devis
          </p>
          <div className="space-y-3">
            {faqItems.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-slate-100 overflow-hidden"
                {...(index === 0 ? { open: true } : {})}
              >
                <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-slate-900 text-sm hover:text-indigo-700 transition-colors">
                  <span className="pr-4">{faq.question}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-3">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cities for this service */}
      <section className="py-12 sm:py-16 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            {service.name} par ville
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            Trouvez un artisan pour {service.name.toLowerCase()} dans votre ville
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {topCities.map((city) => (
              <Link
                key={city.slug}
                href={`/services/${slug}/${city.slug}`}
                className="p-3 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all text-center card-hover"
              >
                <div className="flex items-center justify-center gap-1 mb-1">
                  <MapPin className="w-3 h-3 text-indigo-500" />
                  <span className="text-sm font-medium text-slate-900 truncate">{city.name}</span>
                </div>
                <span className="text-xs text-slate-400">{city.departmentCode}</span>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/villes"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              Voir toutes les villes ({cities.length}+)
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-white py-12 sm:py-16 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Autres services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all card-hover"
              >
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ServiceIcon name={s.icon} className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <span className="text-sm font-medium text-slate-900 block">{s.name}</span>
                  <span className="text-xs text-slate-400">{s.priceRange}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
