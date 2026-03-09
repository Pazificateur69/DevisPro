"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Devis<span className="text-blue-600">Pro</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#services" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
              Services
            </Link>
            <Link href="/devis" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
              Demander un devis
            </Link>
            <Link href="/artisans" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
              Espace artisans
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0800000000"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"
            >
              <Phone className="w-4 h-4" />
              <span>08 00 00 00 00</span>
            </a>
            <Link
              href="/devis"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Devis gratuit
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/#services"
              className="block text-gray-600 hover:text-blue-600 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/devis"
              className="block text-gray-600 hover:text-blue-600 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Demander un devis
            </Link>
            <Link
              href="/artisans"
              className="block text-gray-600 hover:text-blue-600 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Espace artisans
            </Link>
            <Link
              href="/contact"
              className="block text-gray-600 hover:text-blue-600 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/devis"
              className="block bg-blue-600 text-white text-center px-5 py-3 rounded-lg font-semibold hover:bg-blue-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Devis gratuit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
