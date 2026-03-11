"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LifeBuoy,
  BookOpen,
  Shield,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle,
} from "lucide-react";
import { helpArticles } from "@/lib/aide";

const categoryIcons: Record<string, React.ReactNode> = {
  "Choisir un artisan": <BookOpen className="w-5 h-5" />,
  Securite: <Shield className="w-5 h-5" />,
  Pratique: <LifeBuoy className="w-5 h-5" />,
};

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Choisir un artisan": {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-100",
  },
  Securite: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
  },
  Pratique: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-100",
  },
};

export default function AidePage() {
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  // Group articles by category
  const categories = [...new Set(helpArticles.map((a) => a.category))];

  const toggleArticle = (slug: string) => {
    setExpandedArticle(expandedArticle === slug ? null : slug);
  };

  const getExcerpt = (content: string): string => {
    const firstParagraph = content.split("\n\n")[0];
    return firstParagraph.length > 150
      ? firstParagraph.slice(0, 150) + "..."
      : firstParagraph;
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-violet-500/6 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <nav className="text-sm text-indigo-200 mb-6 flex items-center gap-2 flex-wrap justify-center">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white">Centre d&apos;aide</span>
          </nav>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 trust-badge rounded-full px-4 py-2 text-[13px] mb-6 animate-fade-in">
              <LifeBuoy className="w-3.5 h-3.5 text-indigo-300" />
              <span className="text-slate-300">Centre d&apos;aide</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 animate-fade-in-up tracking-tight">
              Guides et conseils pratiques
            </h1>
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              Tout ce que vous devez savoir pour mener a bien vos travaux en toute serenite.
            </p>
          </div>
        </div>
      </section>

      {/* Articles by category */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {categories.map((category) => {
              const colors = categoryColors[category] || categoryColors.Pratique;
              const icon = categoryIcons[category] || <LifeBuoy className="w-5 h-5" />;
              const articles = helpArticles.filter(
                (a) => a.category === category
              );

              return (
                <div key={category}>
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center ${colors.text}`}>
                      {icon}
                    </div>
                    <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                      {category}
                    </h2>
                    <div className="flex-1 h-px bg-slate-100" />
                  </div>

                  {/* Articles grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {articles.map((article) => {
                      const isExpanded = expandedArticle === article.slug;
                      const paragraphs = article.content
                        .split("\n\n")
                        .filter((p) => p.trim());

                      return (
                        <div
                          key={article.slug}
                          className={`bg-white rounded-2xl border transition-all ${
                            isExpanded
                              ? `${colors.border} shadow-lg sm:col-span-2`
                              : "border-slate-100 card-hover"
                          }`}
                        >
                          <button
                            onClick={() => toggleArticle(article.slug)}
                            className="w-full text-left p-5 sm:p-6"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1">
                                <h3 className="font-semibold text-slate-900 text-[15px] mb-1.5 leading-snug">
                                  {article.title}
                                </h3>
                                {!isExpanded && (
                                  <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                                    {getExcerpt(article.content)}
                                  </p>
                                )}
                              </div>
                              <span className={`flex-shrink-0 w-8 h-8 rounded-full ${colors.bg} flex items-center justify-center ${colors.text}`}>
                                {isExpanded ? (
                                  <ChevronUp className="w-4 h-4" />
                                ) : (
                                  <ChevronDown className="w-4 h-4" />
                                )}
                              </span>
                            </div>
                          </button>

                          {isExpanded && (
                            <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-2">
                              <div className="border-t border-slate-100 pt-5">
                                <div className="space-y-4">
                                  {paragraphs.map((paragraph, i) => {
                                    // Check if paragraph starts with a number or dash (list item)
                                    const isListLike =
                                      /^(\d+\.|-)/.test(paragraph.trim());
                                    return (
                                      <p
                                        key={i}
                                        className={`text-slate-600 text-sm leading-relaxed ${
                                          isListLike ? "pl-4" : ""
                                        }`}
                                      >
                                        {paragraph}
                                      </p>
                                    );
                                  })}
                                </div>

                                {/* Related articles */}
                                {article.relatedArticles.length > 0 && (
                                  <div className="mt-6 pt-4 border-t border-slate-100">
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                      Articles associes
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                      {article.relatedArticles.map((slug) => {
                                        const related = helpArticles.find(
                                          (a) => a.slug === slug
                                        );
                                        if (!related) return null;
                                        return (
                                          <button
                                            key={slug}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setExpandedArticle(slug);
                                              // Scroll to the article
                                              setTimeout(() => {
                                                document
                                                  .getElementById(`article-${slug}`)
                                                  ?.scrollIntoView({
                                                    behavior: "smooth",
                                                    block: "center",
                                                  });
                                              }, 100);
                                            }}
                                            className="text-xs px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full font-medium hover:bg-indigo-100 transition-colors"
                                          >
                                            {related.title}
                                          </button>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                          <div id={`article-${article.slug}`} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
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
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight">
            Besoin d&apos;aide supplementaire ?
          </h2>
          <p className="text-slate-400 mb-8 text-base max-w-md mx-auto">
            Notre equipe est disponible pour repondre a toutes vos questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              Nous contacter
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 glass-dark text-slate-300 px-8 py-4 rounded-[14px] text-base font-medium hover:bg-white/10 transition-all"
            >
              Demander un devis
            </Link>
          </div>
          <div className="flex justify-center gap-5 mt-8 text-[13px] text-slate-500">
            {["Gratuit", "Sans engagement", "Reponse rapide"].map((item) => (
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
