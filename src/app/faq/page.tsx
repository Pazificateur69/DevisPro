"use client";

import { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, ChevronUp, ArrowRight, CheckCircle } from "lucide-react";
import { faqItems, getFAQCategories } from "@/lib/faq";
import JsonLd, { getFAQJsonLd } from "@/components/JsonLd";

const categoryLabels: Record<string, string> = {
  Service: "Le service",
  Prix: "Prix et tarifs",
  Artisans: "Nos artisans",
  Pratique: "Pratique",
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = getFAQCategories();
  const filteredFAQ =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((f) => f.category === activeCategory);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <JsonLd data={getFAQJsonLd(faqItems)} />

      {/* Hero */}
      <section className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-violet-500/6 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 trust-badge rounded-full px-4 py-2 text-[13px] mb-6 animate-fade-in">
              <HelpCircle className="w-3.5 h-3.5 text-indigo-300" />
              <span className="text-slate-300">Centre d&apos;aide</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 animate-fade-in-up tracking-tight">
              Questions frequentes
            </h1>
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              Retrouvez les reponses aux questions les plus posees sur notre service de mise en relation avec des artisans qualifies.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            <button
              onClick={() => {
                setActiveCategory("all");
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === "all"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-200 hover:text-indigo-600"
              }`}
            >
              Toutes les questions
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-200 hover:text-indigo-600"
                }`}
              >
                {categoryLabels[cat] || cat}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {filteredFAQ.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={`${activeCategory}-${index}`}
                  className={`bg-white rounded-2xl border transition-all ${
                    isOpen
                      ? "border-indigo-200 shadow-lg shadow-indigo-50"
                      : "border-slate-100 card-hover"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-slate-900 text-[15px] leading-snug">
                      {item.question}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1">
                      <div className="border-t border-slate-100 pt-4">
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
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
            Vous n&apos;avez pas trouve votre reponse ?
          </h2>
          <p className="text-slate-400 mb-8 text-base max-w-md mx-auto">
            Demandez directement un devis gratuit et sans engagement.
            Nos artisans qualifies vous repondront rapidement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/devis"
              className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              Recevoir mes devis gratuits
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 glass-dark text-slate-300 px-8 py-4 rounded-[14px] text-base font-medium hover:bg-white/10 transition-all"
            >
              Nous contacter
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
