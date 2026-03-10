import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "@/lib/services";
import { priceData, getPriceBySlug } from "@/lib/prix";
import JsonLd, { getFAQJsonLd } from "@/components/JsonLd";
import { CheckCircle, ArrowRight, Euro, Info } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getPriceBySlug(slug);
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      type: "article",
    },
    alternates: {
      canonical: `/prix/${slug}`,
    },
  };
}

export default async function PrixPage({ params }: Props) {
  const { slug } = await params;
  const data = getPriceBySlug(slug);
  const service = getServiceBySlug(slug);

  if (!data || !service) {
    notFound();
  }

  const faqQuestions = [
    {
      question: `Quel est le prix moyen de ${service.name.toLowerCase()} ?`,
      answer: `Le prix moyen pour ${service.name.toLowerCase()} se situe entre ${data.avgPrice}. Ce tarif varie en fonction de la nature de l'intervention, de la complexité du chantier et de votre localisation géographique.`,
    },
    {
      question: `Comment obtenir un devis pour ${service.name.toLowerCase()} ?`,
      answer: `Vous pouvez obtenir jusqu'à 3 devis gratuits et sans engagement en remplissant notre formulaire en ligne. Des artisans qualifiés proches de chez vous vous contacteront sous 24h.`,
    },
    {
      question: `Quels facteurs influencent le prix de ${service.name.toLowerCase()} ?`,
      answer: data.factors.join(". ") + ".",
    },
  ];

  const otherPricePages = priceData
    .filter((p) => p.serviceSlug !== slug)
    .slice(0, 4);

  return (
    <>
      <JsonLd data={getFAQJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="hero-gradient text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-indigo-200 mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span>Prix</span>
            <span>/</span>
            <span className="text-white">{service.name}</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
              {data.heroTitle}
            </h1>
            <p className="text-lg text-indigo-100 mb-6 max-w-2xl leading-relaxed">
              {data.heroSubtitle}
            </p>
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-2xl px-6 py-4">
              <Euro className="w-6 h-6 text-white" />
              <div>
                <div className="text-sm text-indigo-200">Prix moyen constaté</div>
                <div className="text-2xl font-extrabold text-white">
                  {data.avgPrice}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2 tracking-tight">
              Tarifs détaillés
            </h2>
            <p className="text-slate-500 mb-8">
              Grille tarifaire indicative pour {service.name.toLowerCase()}
            </p>

            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden card-hover">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                      <th className="text-left px-6 py-4 text-sm font-bold text-slate-900">
                        Intervention
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-bold text-slate-900">
                        Prix indicatif
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-bold text-slate-900 hidden sm:table-cell">
                        Détail
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.priceTable.map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-slate-50 last:border-0 hover:bg-indigo-50/30 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="font-medium text-slate-900 text-sm">
                            {row.label}
                          </div>
                          <div className="text-xs text-slate-400 mt-1 sm:hidden">
                            {row.detail}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 text-indigo-600 font-bold text-sm">
                            <Euro className="w-3.5 h-3.5" />
                            {row.price}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500 hidden sm:table-cell">
                          {row.detail}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-4 flex items-start gap-2">
              <Info className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
              Ces prix sont donnés à titre indicatif et peuvent varier selon
              votre région, la complexité de l&apos;intervention et l&apos;artisan choisi.
              Demandez des devis pour obtenir un tarif précis.
            </p>
          </div>
        </div>
      </section>

      {/* Factors + Tips */}
      <section className="py-12 sm:py-16 bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Factors */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 card-hover">
              <h2 className="text-xl font-extrabold text-slate-900 mb-2 tracking-tight">
                Ce qui influence le prix
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Les principaux facteurs qui font varier le tarif
              </p>
              <ul className="space-y-3">
                {data.factors.map((factor, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Info className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{factor}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 card-hover">
              <h2 className="text-xl font-extrabold text-slate-900 mb-2 tracking-tight">
                Conseils pour économiser
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Nos astuces pour réduire le coût de votre intervention
              </p>
              <ul className="space-y-3">
                {data.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {faqQuestions.map((item, index) => (
                <details
                  key={index}
                  className="bg-white border border-slate-100 rounded-2xl p-5 group card-hover"
                  open={index === 0}
                >
                  <summary className="font-semibold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                    {item.question}
                    <span className="text-indigo-600 text-xl ml-4 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight">
            Obtenez un prix exact pour votre projet
          </h2>
          <p className="text-indigo-200 mb-8 text-base max-w-md mx-auto">
            Recevez jusqu&apos;à 3 devis gratuits et sans engagement
            d&apos;artisans qualifiés proches de chez vous.
          </p>
          <Link
            href="/devis"
            className="btn-accent inline-flex items-center gap-2 px-8 py-4 text-base font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            Recevoir mes devis gratuits
            <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="flex justify-center gap-5 mt-6 text-[13px] text-indigo-300">
            {["100 % gratuit", "Sans engagement", "Réponse en 24h"].map(
              (item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Other price pages */}
      <section className="py-12 sm:py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Autres grilles tarifaires
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherPricePages.map((p) => {
              const s = getServiceBySlug(p.serviceSlug);
              return (
                <Link
                  key={p.serviceSlug}
                  href={`/prix/${p.serviceSlug}`}
                  className="flex items-center gap-3 p-4 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all card-hover"
                >
                  <Euro className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium text-slate-900 block">
                      {s?.name || p.heroTitle}
                    </span>
                    <span className="text-xs text-slate-400">{p.avgPrice}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
