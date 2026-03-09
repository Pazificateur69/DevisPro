import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";
import { getServiceBySlug, services } from "@/lib/services";
import { getLongTailByService } from "@/lib/longtail";
import { cities } from "@/lib/cities";
import JsonLd, { getFAQJsonLd } from "@/components/JsonLd";
import ServiceIcon from "@/components/ServiceIcon";
import { ArrowRight, Calendar, CheckCircle, Tag } from "lucide-react";

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
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);
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
      <section className="bg-white border-b py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-blue-600">Accueil</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">{post.category}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
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
              <div className="bg-gray-50 rounded-xl p-5 mb-8 border">
                <h2 className="font-bold text-gray-900 mb-3 text-sm">
                  Sommaire
                </h2>
                <ul className="space-y-1.5 text-sm">
                  <li>
                    <a href="#article" className="text-blue-600 hover:underline">
                      Article complet
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-blue-600 hover:underline">
                      Questions frequentes
                    </a>
                  </li>
                  <li>
                    <a href="#devis" className="text-blue-600 hover:underline">
                      Obtenir un devis
                    </a>
                  </li>
                </ul>
              </div>

              <div id="article" className="prose prose-gray max-w-none">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
                <h3 className="font-bold text-gray-900 mb-2">
                  Comparez les prix maintenant
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Recevez jusqu&apos;a 3 devis gratuits d&apos;artisans verifies pres de
                  chez vous.
                </p>
                <Link
                  href="/devis"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Demander un devis gratuit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* FAQ */}
              <div id="faq" className="mt-10">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Questions frequentes
                </h2>
                <div className="space-y-4">
                  {post.faq.map((item, index) => (
                    <details
                      key={index}
                      className="bg-white border rounded-xl p-5 group"
                      open={index === 0}
                    >
                      <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                        {item.question}
                        <span className="text-blue-600 text-xl ml-4 group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>

              {/* Related posts */}
              <div className="mt-10">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Articles similaires
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {relatedPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="p-4 border rounded-xl hover:border-blue-300 hover:bg-blue-50/50 transition-all"
                    >
                      <span className="text-xs text-blue-600 font-medium">
                        {p.category}
                      </span>
                      <h3 className="font-medium text-sm text-gray-900 mt-1 line-clamp-2">
                        {p.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div id="devis" className="bg-white rounded-xl border p-5 sticky top-20">
                <h3 className="font-bold text-gray-900 mb-2 text-center">
                  Devis gratuit
                </h3>
                <p className="text-sm text-gray-500 text-center mb-4">
                  Comparez 3 devis en 24h
                </p>
                <Link
                  href="/devis"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Demander mes devis
                </Link>
                <div className="mt-4 space-y-2 text-xs text-gray-500">
                  {["100% gratuit", "Sans engagement", "Artisans verifies"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Related guides */}
              {relatedGuides.length > 0 && (
                <div className="bg-white rounded-xl border p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">
                    Guides detailles
                  </h3>
                  <div className="space-y-2">
                    {relatedGuides.map((g) => (
                      <Link
                        key={g.slug}
                        href={`/guide/${g.slug}`}
                        className="block p-2 rounded-lg hover:bg-gray-50 text-sm text-gray-700 transition-colors"
                      >
                        {g.h1}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Services */}
              <div className="bg-white rounded-xl border p-5">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">
                  Nos services
                </h3>
                <div className="space-y-2">
                  {services.slice(0, 5).map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <ServiceIcon name={s.icon} className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-700">{s.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* City links */}
              {service && (
                <div className="bg-white rounded-xl border p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">
                    {service.name} par ville
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {topCities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/services/${service.slug}/${city.slug}`}
                        className="text-xs bg-gray-100 hover:bg-blue-100 hover:text-blue-700 px-2.5 py-1 rounded-full transition-colors text-gray-600"
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
