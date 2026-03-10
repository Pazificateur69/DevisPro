import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { comparatifs, getComparatifBySlug } from "@/lib/comparatifs";
import { getServiceBySlug } from "@/lib/services";
import {
  Scale,
  CheckCircle,
  XCircle,
  ArrowRight,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return comparatifs.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparatif = getComparatifBySlug(slug);
  if (!comparatif) return {};

  return {
    title: comparatif.metaTitle,
    description: comparatif.metaDescription,
    alternates: {
      canonical: `/comparatif/${slug}`,
    },
  };
}

export default async function ComparatifPage({ params }: Props) {
  const { slug } = await params;
  const comparatif = getComparatifBySlug(slug);

  if (!comparatif) {
    notFound();
  }

  const relatedService = getServiceBySlug(comparatif.relatedServiceSlug);
  const otherComparatifs = comparatifs.filter((c) => c.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-violet-500/6 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
            <Scale className="w-7 h-7 text-indigo-300" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {comparatif.title}
          </h1>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
            Comparez les avantages, inconvenients et prix pour faire le meilleur
            choix.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-slate-500 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Accueil
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">Comparatifs</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-medium">
              {comparatif.title}
            </span>
          </nav>
        </div>
      </section>

      {/* Side-by-side comparison */}
      <section className="py-16 sm:py-20 bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Option 1 */}
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden card-hover">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-6">
                <h2 className="text-xl font-extrabold">{comparatif.option1.name}</h2>
                <div className="mt-2 text-indigo-100 text-sm">
                  Prix moyen :{" "}
                  <span className="text-white font-bold">
                    {comparatif.option1.avgPrice}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-6">
                {/* Pros */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Avantages
                  </h3>
                  <ul className="space-y-2.5">
                    {comparatif.option1.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Cons */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-500" />
                    Inconvenients
                  </h3>
                  <ul className="space-y-2.5">
                    {comparatif.option1.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2.5">
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Option 2 */}
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden card-hover">
              <div className="bg-gradient-to-r from-violet-500 to-violet-600 text-white p-6">
                <h2 className="text-xl font-extrabold">{comparatif.option2.name}</h2>
                <div className="mt-2 text-violet-100 text-sm">
                  Prix moyen :{" "}
                  <span className="text-white font-bold">
                    {comparatif.option2.avgPrice}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-6">
                {/* Pros */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Avantages
                  </h3>
                  <ul className="space-y-2.5">
                    {comparatif.option2.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Cons */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-500" />
                    Inconvenients
                  </h3>
                  <ul className="space-y-2.5">
                    {comparatif.option2.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2.5">
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Price comparison summary */}
          <div className="mt-8 bg-white rounded-2xl border border-slate-100 p-6 sm:p-8">
            <h3 className="text-lg font-extrabold text-slate-900 mb-6 text-center">
              Comparaison des prix
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
                <div className="text-sm text-slate-500 mb-1">
                  {comparatif.option1.name}
                </div>
                <div className="text-2xl font-extrabold text-indigo-600">
                  {comparatif.option1.avgPrice}
                </div>
              </div>
              <div className="text-center p-4 bg-violet-50/50 rounded-xl border border-violet-100">
                <div className="text-sm text-slate-500 mb-1">
                  {comparatif.option2.name}
                </div>
                <div className="text-2xl font-extrabold text-violet-600">
                  {comparatif.option2.avgPrice}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-100 p-8 sm:p-10 card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Notre verdict
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-base">
              {comparatif.verdict}
            </p>
          </div>

          {/* Related service CTA */}
          {relatedService && (
            <div className="mt-8 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-2xl border border-indigo-100 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Besoin d&apos;un devis pour {relatedService.name.toLowerCase()} ?
                </h3>
                <p className="text-sm text-slate-500">
                  Recevez jusqu&apos;a 3 devis gratuits d&apos;artisans qualifies
                </p>
              </div>
              <Link
                href={`/services/${relatedService.slug}`}
                className="btn-accent inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm whitespace-nowrap"
              >
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          {/* Other comparatifs */}
          {otherComparatifs.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6">
                Autres comparatifs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {otherComparatifs.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/comparatif/${c.slug}`}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 hover:border-indigo-200 card-hover group"
                  >
                    <div className="w-11 h-11 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-indigo-100 group-hover:to-violet-100 transition-all">
                      <Scale className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-900 text-[15px] group-hover:text-indigo-600 transition-colors truncate">
                        {c.title}
                      </h4>
                      <span className="text-xs text-indigo-600 font-semibold mt-1 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Voir le comparatif <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
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
            Besoin d&apos;un devis ?
          </h2>
          <p className="text-slate-400 mb-8 text-base max-w-md mx-auto">
            Comparez les prix de 3 artisans qualifies gratuitement et sans
            engagement.
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
