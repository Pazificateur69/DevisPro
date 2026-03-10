import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BookOpen, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { glossaryTerms, getTermBySlug } from "@/lib/glossaire";
import { getServiceBySlug } from "@/lib/services";
import JsonLd from "@/components/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return glossaryTerms.map((term) => ({ slug: term.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) return {};

  return {
    title: `${term.term} - Definition et explication`,
    description: `${term.definition.slice(0, 155)}...`,
    alternates: {
      canonical: `/glossaire/${slug}`,
    },
    openGraph: {
      title: `${term.term} - Glossaire Renov Habitation`,
      description: term.definition.slice(0, 155),
      type: "article",
    },
  };
}

export default async function GlossaireTermPage({ params }: Props) {
  const { slug } = await params;
  const term = getTermBySlug(slug);

  if (!term) {
    notFound();
  }

  const relatedTermsData = term.relatedTerms
    .map((rtSlug) => getTermBySlug(rtSlug))
    .filter(Boolean);

  const relatedService = term.relatedServiceSlug
    ? getServiceBySlug(term.relatedServiceSlug)
    : null;

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Glossaire des travaux - Renov Habitation",
      url: "https://renov-habitation.fr/glossaire",
    },
  };

  return (
    <>
      <JsonLd data={jsonLdData} />

      {/* Breadcrumb + Hero */}
      <section className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-violet-500/6 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Breadcrumb */}
          <nav className="text-sm text-slate-400 mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <span className="text-slate-600">/</span>
            <Link href="/glossaire" className="hover:text-white transition-colors">
              Glossaire
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-white">{term.term}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
              <BookOpen className="w-6 h-6 text-indigo-300" />
            </div>
            <span className="text-[13px] font-semibold text-indigo-300 uppercase tracking-wider">
              Definition
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
            {term.term}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main definition */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 card-hover">
                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                  Definition
                </h2>
                <p className="text-slate-600 text-[15px] leading-relaxed">
                  {term.definition}
                </p>
              </div>

              {/* Related service CTA */}
              {relatedService && (
                <div className="mt-6 bg-indigo-50 rounded-2xl border border-indigo-100 p-6">
                  <h3 className="font-bold text-slate-900 mb-2 text-[15px]">
                    Service associe
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {relatedService.shortDescription}
                  </p>
                  <Link
                    href={`/services/${relatedService.slug}`}
                    className="btn-accent inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold"
                  >
                    Devis {relatedService.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Related terms */}
              {relatedTermsData.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-100 p-5">
                  <h3 className="font-bold text-slate-900 mb-3 text-sm">
                    Termes associes
                  </h3>
                  <div className="space-y-2">
                    {relatedTermsData.map((rt) =>
                      rt ? (
                        <Link
                          key={rt.slug}
                          href={`/glossaire/${rt.slug}`}
                          className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-indigo-50 transition-colors group"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                          <span className="text-sm text-slate-700 group-hover:text-indigo-600 transition-colors">
                            {rt.term}
                          </span>
                        </Link>
                      ) : null
                    )}
                  </div>
                </div>
              )}

              {/* CTA card */}
              <div className="bg-white rounded-2xl border border-slate-100 p-5">
                <h3 className="font-bold text-slate-900 mb-2 text-center text-sm">
                  Besoin d&apos;un professionnel ?
                </h3>
                <p className="text-xs text-slate-500 text-center mb-4">
                  Recevez jusqu&apos;a 3 devis gratuits
                </p>
                <Link
                  href="/devis"
                  className="block w-full btn-accent text-center py-3 font-semibold text-sm"
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

              {/* Back to glossary */}
              <Link
                href="/glossaire"
                className="flex items-center gap-2 text-sm text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour au glossaire
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-subtle border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Un projet de travaux ?
          </h2>
          <p className="text-slate-500 mb-8 text-base">
            Comparez les devis de professionnels qualifies pres de chez vous.
          </p>
          <Link
            href="/devis"
            className="btn-accent inline-flex items-center gap-2 px-8 py-4 text-base font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            Recevoir mes devis gratuits
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
