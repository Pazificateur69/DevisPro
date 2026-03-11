import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { longTailPages, getLongTailBySlug } from "@/lib/longtail";
import { getServiceBySlug, services } from "@/lib/services";
import { cities } from "@/lib/cities";
import DevisForm from "@/components/DevisForm";
import JsonLd, { getFAQJsonLd, getServiceJsonLd } from "@/components/JsonLd";
import ServiceIcon from "@/components/ServiceIcon";
import { ArrowRight, CheckCircle } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return longTailPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLongTailBySlug(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.metaDescription,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      type: "article",
    },
    alternates: {
      canonical: `/guide/${slug}`,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const page = getLongTailBySlug(slug);

  if (!page) {
    notFound();
  }

  const service = getServiceBySlug(page.serviceSlug);
  const topCities = cities.slice(0, 8);
  const relatedPages = longTailPages
    .filter((p) => p.serviceSlug === page.serviceSlug && p.slug !== slug)
    .slice(0, 4);
  const otherServices = services
    .filter((s) => s.slug !== page.serviceSlug)
    .slice(0, 4);

  const paragraphs = page.content.split("\n\n").filter((p) => p.trim());

  return (
    <>
      <JsonLd data={getFAQJsonLd(page.faq)} />
      {service && (
        <JsonLd
          data={getServiceJsonLd(
            service.name,
            service.description,
            undefined,
            service.priceRange
          )}
        />
      )}

      {/* Breadcrumb + hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-indigo-200 mb-4 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            {service && (
              <>
                <Link href={`/services/${service.slug}`} className="hover:text-white">
                  {service.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-white">Guide</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
            {page.h1}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <article className="lg:col-span-2">
              {/* Table of contents */}
              <div className="bg-indigo-50 rounded-xl p-5 mb-8 border border-indigo-100">
                <h2 className="font-bold text-slate-900 mb-3 text-sm">
                  Sommaire
                </h2>
                <ul className="space-y-1.5 text-sm">
                  <li>
                    <a href="#contenu" className="text-indigo-600 hover:underline">
                      Guide complet
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-indigo-600 hover:underline">
                      Questions frequentes
                    </a>
                  </li>
                  <li>
                    <a href="#devis" className="text-indigo-600 hover:underline">
                      Demander un devis gratuit
                    </a>
                  </li>
                </ul>
              </div>

              {/* Article content */}
              <div id="contenu" className="prose prose-slate max-w-none">
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-slate-700 leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* CTA mid-article */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8">
                <h3 className="font-bold text-slate-900 mb-2">
                  Besoin d&apos;un professionnel ?
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Recevez jusqu&apos;a 3 devis gratuits d&apos;artisans qualifies pres de
                  chez vous.
                </p>
                <Link
                  href="/devis"
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Demander un devis gratuit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* FAQ */}
              <div id="faq" className="mt-10">
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                  Questions frequentes
                </h2>
                <div className="space-y-4">
                  {page.faq.map((item, index) => (
                    <details
                      key={index}
                      className="bg-white border rounded-xl p-5 group"
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

              {/* Related articles */}
              {relatedPages.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-xl font-bold text-slate-900 mb-4">
                    Articles associes
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {relatedPages.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/guide/${p.slug}`}
                        className="p-4 border rounded-xl hover:border-indigo-300 hover:bg-indigo-50/50 transition-all"
                      >
                        <h3 className="font-medium text-sm text-slate-900 mb-1">
                          {p.h1}
                        </h3>
                        <span className="text-xs text-indigo-600">
                          Lire le guide &rarr;
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Devis form CTA */}
              <div id="devis" className="bg-white rounded-xl border p-5 sticky top-20">
                <h3 className="font-bold text-slate-900 mb-2 text-center">
                  Devis gratuit
                </h3>
                <p className="text-sm text-slate-500 text-center mb-4">
                  Recevez 3 devis en 24h
                </p>
                <Link
                  href={`/devis`}
                  className="block w-full bg-indigo-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Demander mes devis
                </Link>

                <div className="mt-4 space-y-2 text-xs text-slate-500">
                  {["100% gratuit", "Sans engagement", "Artisans verifies"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Service pages */}
              <div className="bg-white rounded-xl border p-5">
                <h3 className="font-bold text-slate-900 mb-3 text-sm">
                  Nos services
                </h3>
                <div className="space-y-2">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <ServiceIcon
                        name={s.icon}
                        className="w-4 h-4 text-indigo-600"
                      />
                      <span className="text-sm text-slate-700">{s.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* City links */}
              {service && (
                <div className="bg-white rounded-xl border p-5">
                  <h3 className="font-bold text-slate-900 mb-3 text-sm">
                    {service.name} par ville
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {topCities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/services/${service.slug}/${city.slug}`}
                        className="text-xs bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors text-slate-600"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="bg-indigo-600 text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Besoin d&apos;un devis ?
          </h2>
          <p className="text-indigo-100 mb-6">
            Comparez les prix de 3 artisans qualifies
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 px-8 py-3.5 rounded-xl font-bold hover:bg-indigo-50 transition-colors"
          >
            Recevoir mes devis gratuits
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
