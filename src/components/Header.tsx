"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/comment-ca-marche", label: "Comment ca marche" },
  { href: "/comparateur", label: "Prix" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const mobileLinks = [
  { href: "/#services", label: "Services" },
  { href: "/devis", label: "Demander un devis" },
  { href: "/comment-ca-marche", label: "Comment ca marche" },
  { href: "/comparateur", label: "Comparateur de prix" },
  { href: "/blog", label: "Blog & Guides" },
  { href: "/villes", label: "Toutes les villes" },
  { href: "/artisans", label: "Espace artisans" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)] border-b border-slate-100/50"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20 transition-transform group-hover:scale-105">
              <span className="text-white font-extrabold text-xs tracking-tighter">
                RH
              </span>
            </div>
            <span className="text-lg font-extrabold text-slate-900 tracking-tight">
              Renov<span className="text-indigo-600">Habitation</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-slate-900 font-medium text-[13px] px-3.5 py-2 rounded-lg transition-colors hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/devis"
              className="btn-accent flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-semibold"
            >
              Devis gratuit
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-slate-700" />
            ) : (
              <Menu className="w-5 h-5 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden border-t border-slate-100 bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 space-y-0.5">
          {mobileLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-slate-600 font-medium hover:text-indigo-600 hover:bg-indigo-50/50 py-2.5 px-3.5 rounded-lg transition-colors text-[15px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 pb-1">
            <Link
              href="/devis"
              className="block btn-accent text-center px-5 py-3 font-semibold text-[15px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
