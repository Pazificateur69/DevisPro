import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "@/lib/services";
import DevisForm from "@/components/DevisForm";
import ServiceIcon from "@/components/ServiceIcon";
import { CheckCircle, ArrowRight } from "lucide-react";

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

  return {
    title: `${service.name} - Devis gratuit`,
    description: service.description,
    keywords: service.keywords,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <ServiceIcon name={service.icon} className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
              {service.name}
            </h1>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Devis gratuit et sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Artisans vérifiés</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Réponse en 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price info */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-sm text-gray-500">Prix indicatif :</span>
              <span className="ml-2 text-lg font-bold text-gray-900">
                {service.priceRange}
              </span>
            </div>
            <Link
              href="#formulaire"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
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
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Pourquoi faire appel à un professionnel ?
                </h2>
                <ul className="space-y-3">
                  {[
                    "Diagnostic précis du problème",
                    "Intervention rapide et efficace",
                    "Garantie sur les travaux",
                    "Conseils personnalisés",
                    "Matériel professionnel adapté",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
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
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-500">{item.desc}</div>
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

      {/* Other services */}
      <section className="bg-white py-12 sm:py-16 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Autres services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center gap-3 p-4 rounded-xl border hover:border-blue-300 hover:bg-blue-50/50 transition-all card-hover"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ServiceIcon name={s.icon} className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {s.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
