import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { ArrowRight, Calendar, Tag, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Guides et conseils travaux maison",
  description:
    "Articles, guides et conseils pour vos travaux : prix, reglementation, depannage. Plomberie, chauffage, nuisibles, volets roulants...",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
            <BookOpen className="w-7 h-7 text-indigo-300" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 animate-fade-in-up">
            Blog &amp; Guides
          </h1>
          <p className="text-indigo-200 max-w-xl mx-auto text-base animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Conseils, guides de prix et informations pratiques pour tous vos
            travaux et depannages a la maison.
          </p>
        </div>
      </section>

      <div className="py-12 sm:py-16 bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl border border-slate-100 card-hover overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
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
                  <h2 className="font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-500 line-clamp-3 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="text-sm text-indigo-600 font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Lire l&apos;article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
