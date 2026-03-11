import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";
import { getServiceBySlug, services } from "@/lib/services";
import { getLongTailByService } from "@/lib/longtail";
import { cities } from "@/lib/cities";
import JsonLd, { getFAQJsonLd } from "@/components/JsonLd";
import ServiceIcon from "@/components/ServiceIcon";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Tag,
  ChevronDown,
  BookOpen,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const service = getServiceBySlug(post.serviceSlug);
  const relatedGuides = getLongTailByService(post.serviceSlug).slice(0, 3);
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const topCities = cities.slice(0, 8);
  const paragraphs = post.content.split("\n\n").filter((p) => p.trim());

  return (
    <>
      <JsonLd data={getFAQJsonLd(post.faq)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.metaDescription,
          datePublished: post.publishedAt,
          publisher: {
            "@type": "Organization",
            name: "Renov Habitation",
            url: "https://renov-habitation.fr",
          },
        }}
      />

      {/* Header */}
      <section className="bg-white border-b border-slate-100 py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-400 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              className="hover:text-indigo-600 transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-600">{post.category}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full font-semibold flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Article */}
            <article className="lg:col-span-2">
              {/* Table of contents */}
              <div className="bg-slate-50 rounded-2xl p-5 mb-8 border border-slate-100">
                <h2 className="font-bold text-slate-900 mb-3 text-sm flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-500" />
                  Sommaire
                </h2>
                <ul className="space-y-1.5 text-sm">
                  <li>
                    <a
                      href="#article"
                      className="text-indigo-600 hover:underline"
                    >
                      Article complet
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-indigo-600 hover:underline">
                      Questions frequentes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#devis"
                      className="text-indigo-600 hover:underline"
                    >
                      Obtenir un devis
                    </a>
                  </li>
                </ul>
              </div>

              <div id="article" className="prose prose-slate max-w-none">
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-slate-700 leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Internal link CTA */}
              <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                <p className="text-sm font-semibold text-slate-900 mb-2">
                  Besoin d&apos;un artisan ?
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Recevez jusqu&apos;a 3 devis gratuits pour{" "}
                  {post.title.toLowerCase().includes("fuite")
                    ? "une recherche de fuite"
                    : post.title.toLowerCase().includes("volet")
                      ? "vos volets roulants"
                      : "vos travaux"}
                  .
                </p>
                <Link
                  href={`/services/${post.serviceSlug}`}
                  className="btn-accent inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold"
                >
                  Demander un devis gratuit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* FAQ */}
              <div id="faq" className="mt-10">
                <h2 className="text-xl font-extrabold text-slate-900 mb-6 tracking-tight">
                  Questions frequentes
                </h2>
                <div className="space-y-3">
                  {post.faq.map((item, index) => (
                    <details
                      key={index}
                      className="bg-white border border-slate-100 rounded-2xl p-5 group card-hover"
                      open={index === 0}
                    >
                      <summary className="font-semibold text-slate-900 cursor-pointer list-none flex items-center justify-between text-[15px]">
                        {item.question}
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 ml-4 group-open:rotate-180 transition-transform">
                          <ChevronDown className="w-4 h-4" />
                        </span>
                      </summary>
                      <div className="border-t border-slate-100 mt-3 pt-3">
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Related posts */}
              <div className="mt-10">
                <h2 className="text-xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  Articles similaires
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {relatedPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="p-4 border border-slate-100 rounded-2xl hover:border-indigo-200 hover:bg-indigo-50/30 transition-all card-hover"
                    >
                      <span className="text-xs text-indigo-600 font-semibold">
                        {p.category}
                      </span>
                      <h3 className="font-semibold text-sm text-slate-900 mt-1 line-clamp-2">
                        {p.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div
                id="devis"
                className="bg-white rounded-2xl border border-slate-100 p-5 sticky top-20 shadow-lg shadow-slate-200/40"
              >
                <h3 className="font-bold text-slate-900 mb-2 text-center">
                  Devis gratuit
                </h3>
                <p className="text-sm text-slate-500 text-center mb-4">
                  Comparez 3 devis en 24h
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

              {/* Related guides */}
              {relatedGuides.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-100 p-5">
                  <h3 className="font-bold text-slate-900 mb-3 text-sm">
                    Guides detailles
                  </h3>
                  <div className="space-y-2">
                    {relatedGuides.map((g) => (
                      <Link
                        key={g.slug}
                        href={`/guide/${g.slug}`}
                        className="block p-2 rounded-lg hover:bg-slate-50 text-sm text-slate-700 transition-colors"
                      >
                        {g.h1}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Services */}
              <div className="bg-white rounded-2xl border border-slate-100 p-5">
                <h3 className="font-bold text-slate-900 mb-3 text-sm">
                  Nos services
                </h3>
                <div className="space-y-2">
                  {services.slice(0, 5).map((s) => (
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
                <div className="bg-white rounded-2xl border border-slate-100 p-5">
                  <h3 className="font-bold text-slate-900 mb-3 text-sm">
                    {service.name} par ville
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {topCities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/services/${service.slug}/${city.slug}`}
                        className="text-xs bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors text-slate-600 border border-slate-100"
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
    </>
  );
}
