import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getDepartments,
  getDepartmentBySlug,
  getCitiesByDepartment,
} from "@/lib/departements";
import { services } from "@/lib/services";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getDepartments().map((dept) => ({ slug: dept.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dept = getDepartmentBySlug(slug);
  if (!dept) return {};

  return {
    title: `Artisans dans le ${dept.name} (${dept.code}) - Devis gratuit`,
    description: `Trouvez un artisan qualifie dans le ${dept.name} (${dept.code}). Recevez jusqu'a 3 devis gratuits pour vos travaux : plomberie, chauffage, volets roulants et plus.`,
    alternates: {
      canonical: `/departements/${slug}`,
    },
  };
}

export default async function DepartmentPage({ params }: Props) {
  const { slug } = await params;
  const dept = getDepartmentBySlug(slug);

  if (!dept) {
    notFound();
  }

  const deptCities = getCitiesByDepartment(slug);

  return (
    <>
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
              Artisans dans le {dept.name}{" "}
              <span className="text-indigo-300">({dept.code})</span>
            </h1>
            <p className="text-lg text-indigo-100 max-w-2xl">
              Trouvez un professionnel qualifie dans le departement {dept.name}.
              Comparez les devis et choisissez le meilleur artisan pres de chez
              vous.
            </p>
          </div>
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
            <Link
              href="/zones-intervention"
              className="hover:text-indigo-600 transition-colors"
            >
              Departements
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-medium">{dept.name}</span>
          </nav>
        </div>
      </section>

      {/* Cities grid */}
      <section className="py-16 sm:py-20 bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
              <MapPin className="w-3.5 h-3.5" />
              {deptCities.length} villes couvertes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Villes du {dept.name}
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              Selectionnez votre ville pour trouver un artisan qualifie
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {deptCities.map((city) => (
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

      {/* Services */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Services disponibles dans le {dept.name}
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              Tous nos services sont accessibles dans le departement{" "}
              {dept.name}
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
                  <ArrowRight className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 text-[15px] group-hover:text-indigo-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-slate-400 truncate">
                    {service.priceRange}
                  </p>
                </div>
              </Link>
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
            Besoin d&apos;un artisan dans le {dept.name} ?
          </h2>
          <p className="text-slate-400 mb-8 text-base max-w-md mx-auto">
            Recevez jusqu&apos;a 3 devis gratuits d&apos;artisans qualifies.
            Service 100% gratuit et sans engagement.
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
