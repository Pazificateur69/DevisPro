"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

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
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? "glass shadow-sm"
          : "bg-[#fafafa]"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 group-hover:bg-indigo-600">
              <span className="text-white font-extrabold text-sm tracking-tighter">RH</span>
            </div>
            <span className="text-xl font-extrabold text-gray-900 tracking-tight">
              Renov<span className="text-indigo-600">Habitation</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {[
              { href: "/#services", label: "Services" },
              { href: "/blog", label: "Blog" },
              { href: "/artisans", label: "Artisans" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-gray-900 font-semibold text-sm px-4 py-2 rounded-lg transition-colors hover:bg-gray-100/50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0800000000"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>08 00 00 00 00</span>
            </a>
            <Link
              href="/devis"
              className="btn-primary flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold"
            >
              Devis gratuit
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-900" />
            ) : (
              <Menu className="w-5 h-5 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden border-t border-gray-100 bg-white overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 py-4 space-y-1">
          {[
            { href: "/#services", label: "Services" },
            { href: "/devis", label: "Demander un devis" },
            { href: "/blog", label: "Blog" },
            { href: "/artisans", label: "Espace artisans" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-600 font-semibold hover:text-indigo-600 hover:bg-indigo-50/50 py-3 px-4 rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 pb-2">
            <Link
              href="/devis"
              className="block bg-gray-900 text-white text-center px-5 py-3.5 rounded-xl font-bold hover:bg-black transition-colors"
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
