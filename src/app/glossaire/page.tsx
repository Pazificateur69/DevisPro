import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { glossaryTerms } from "@/lib/glossaire";

export const metadata: Metadata = {
  title: "Glossaire des travaux et de la renovation",
  description:
    "Retrouvez les definitions des termes essentiels lies aux travaux, a la renovation energetique et au batiment : DPE, assurance decennale, pompe a chaleur, CEE, et plus.",
  alternates: {
    canonical: "/glossaire",
  },
};

export default function GlossairePage() {
  // Sort terms alphabetically
  const sortedTerms = [...glossaryTerms].sort((a, b) =>
    a.term.localeCompare(b.term, "fr")
  );

  // Group by first letter
  const groupedTerms = sortedTerms.reduce<Record<string, typeof sortedTerms>>(
    (acc, term) => {
      const letter = term.term.charAt(0).toUpperCase();
      if (!acc[letter]) acc[letter] = [];
      acc[letter].push(term);
      return acc;
    },
    {}
  );

  const letters = Object.keys(groupedTerms).sort((a, b) =>
    a.localeCompare(b, "fr")
  );

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-violet-500/6 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 trust-badge rounded-full px-4 py-2 text-[13px] mb-6 animate-fade-in">
              <BookOpen className="w-3.5 h-3.5 text-indigo-300" />
              <span className="text-slate-300">Ressources</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 animate-fade-in-up tracking-tight">
              Glossaire des travaux
            </h1>
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              Retrouvez les definitions des termes essentiels lies aux travaux, a la renovation et au batiment.
            </p>
          </div>
        </div>
      </section>

      {/* Alphabetical index */}
      <section className="py-6 border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 font-bold text-sm flex items-center justify-center hover:bg-indigo-100 transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Terms list */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {letters.map((letter) => (
              <div key={letter} id={`letter-${letter}`} className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {letter}
                  </span>
                  <div className="flex-1 h-px bg-slate-100" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {groupedTerms[letter].map((term) => (
                    <Link
                      key={term.slug}
                      href={`/glossaire/${term.slug}`}
                      className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 card-hover group"
                    >
                      <div className="w-9 h-9 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-100 transition-colors">
                        <BookOpen className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="font-semibold text-slate-900 text-[15px] group-hover:text-indigo-600 transition-colors truncate">
                          {term.term}
                        </h2>
                        <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                          {term.definition.slice(0, 80)}...
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 flex-shrink-0 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-subtle border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Besoin d&apos;un artisan qualifie ?
          </h2>
          <p className="text-slate-500 mb-8 text-base">
            Recevez jusqu&apos;a 3 devis gratuits et sans engagement pour vos travaux.
          </p>
          <Link
            href="/devis"
            className="btn-accent inline-flex items-center gap-2 px-8 py-4 text-base font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            Demander un devis gratuit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
