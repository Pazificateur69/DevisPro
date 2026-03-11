import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceBySlug, services } from "@/lib/services";
import { urgenceData, getUrgenceBySlug } from "@/lib/urgence";
import JsonLd, { getServiceJsonLd } from "@/components/JsonLd";
import ServiceIcon from "@/components/ServiceIcon";
import { AlertTriangle, Phone, Mail, Clock, ArrowRight, CheckCircle, Shield } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return urgenceData.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getUrgenceBySlug(slug);
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
      canonical: `/urgence/${slug}`,
    },
  };
}

export default async function UrgencePage({ params }: Props) {
  const { slug } = await params;
  const data = getUrgenceBySlug(slug);

  if (!data) {
    notFound();
  }

  const service = getServiceBySlug(data.serviceSlug);
  const otherUrgences = urgenceData.filter((u) => u.slug !== slug);
  const relatedServices = services
    .filter((s) => s.slug !== data.serviceSlug)
    .slice(0, 4);

  return (
    <>
      {service && (
        <JsonLd
          data={getServiceJsonLd(
            `${service.name} - Urgence`,
            data.metaDescription,
            undefined,
            service.priceRange
          )}
        />
      )}

      {/* Hero */}
      <section className="hero-gradient text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-indigo-200 mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span>Urgence</span>
            <span>/</span>
            <span className="text-white">{data.heroTitle}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-200 rounded-full px-4 py-2 text-sm font-semibold mb-6">
              <AlertTriangle className="w-4 h-4" />
              Intervention urgente
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
              {data.heroTitle}
            </h1>
            <p className="text-lg text-indigo-100 mb-8 max-w-2xl leading-relaxed">
              {data.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/devis"
                className="btn-accent inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                Demander un devis urgent
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:contact@renov-habitation.fr"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-[14px] text-base font-medium hover:bg-white/20 transition-all"
              >
                <Mail className="w-4 h-4" />
                contact@renov-habitation.fr
              </a>
            </div>

            <div className="flex flex-wrap gap-4 mt-6 text-sm text-indigo-200">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>
                  Temps de réponse moyen : <strong className="text-white">{data.avgResponseTime}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Intervention 7j/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to do */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Que faire en cas d&apos;urgence ?
              </h2>
            </div>
            <p className="text-slate-500 mb-8 ml-[52px]">
              Les premiers gestes à adopter en attendant l&apos;intervention d&apos;un professionnel
            </p>

            <div className="space-y-3">
              {data.whatToDo.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-2xl border border-slate-100 p-5 card-hover"
                >
                  <div className="w-8 h-8 bg-red-50 text-red-600 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed pt-1">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why urgent */}
      <section className="py-12 sm:py-16 bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-amber-500" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Pourquoi intervenir rapidement ?
              </h2>
            </div>
            <p className="text-slate-500 mb-8 ml-[52px]">
              Les risques d&apos;une intervention tardive
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.whyUrgent.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-100 p-6 card-hover"
                >
                  <div className="w-8 h-8 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-8 sm:p-12 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]" />
              </div>

              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 text-sm font-semibold mb-6">
                  <Clock className="w-4 h-4" />
                  Temps de réponse : {data.avgResponseTime}
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight">
                  Besoin d&apos;une intervention urgente ?
                </h2>
                <p className="text-indigo-200 mb-8 text-base max-w-md mx-auto">
                  Recevez des devis gratuits d&apos;artisans disponibles
                  proches de chez vous. Service rapide et sans engagement.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/devis"
                    className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-[14px] font-bold hover:bg-indigo-50 transition-colors"
                  >
                    Recevoir mes devis gratuits
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="mailto:contact@renov-habitation.fr"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-[14px] font-medium hover:bg-white/20 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    contact@renov-habitation.fr
                  </a>
                </div>

                <div className="flex justify-center gap-5 mt-6 text-[13px] text-indigo-300">
                  {["Gratuit", "Sans engagement", "7j/7"].map((item) => (
                    <span key={item} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other urgency pages */}
      {otherUrgences.length > 0 && (
        <section className="py-12 sm:py-16 bg-subtle border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Autres urgences
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherUrgences.map((u) => {
                const s = getServiceBySlug(u.serviceSlug);
                return (
                  <Link
                    key={u.slug}
                    href={`/urgence/${u.slug}`}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-100 hover:border-red-200 hover:bg-red-50/30 transition-all card-hover"
                  >
                    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-slate-900 block">
                        {u.heroTitle}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3" />
                        {u.avgResponseTime}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      <section className="py-12 sm:py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Services à proximité
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center gap-3 p-4 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all card-hover"
              >
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ServiceIcon
                    name={s.icon}
                    className="w-5 h-5 text-indigo-600"
                  />
                </div>
                <span className="text-sm font-medium text-slate-900">
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
