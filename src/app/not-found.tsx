import Link from "next/link";
import { ArrowRight, Home, Search, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="text-8xl font-extrabold text-slate-200 mb-4">404</div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
          Page introuvable
        </h1>
        <p className="text-slate-500 mb-8 max-w-sm mx-auto">
          La page que vous recherchez n&apos;existe pas ou a ete deplacee.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link
            href="/"
            className="btn-accent inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm"
          >
            <Home className="w-4 h-4" />
            Retour a l&apos;accueil
          </Link>
          <Link
            href="/devis"
            className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-[14px] text-sm font-semibold hover:border-indigo-200 hover:bg-indigo-50/30 transition-all"
          >
            Demander un devis
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { href: "/services/plomberie-urgente", label: "Plomberie urgente", icon: Search },
            { href: "/villes", label: "Toutes les villes", icon: Search },
            { href: "/faq", label: "FAQ", icon: HelpCircle },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-center gap-2 p-3 rounded-xl border border-slate-100 text-sm text-slate-600 font-medium hover:border-indigo-200 hover:text-indigo-600 transition-all"
            >
              <link.icon className="w-3.5 h-3.5" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
