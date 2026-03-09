import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 border-t border-gray-800">
      {/* Mini CTA bar */}
      <div className="border-b border-gray-800/50 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-white font-extrabold text-2xl tracking-tight mb-1">Besoin d&apos;un artisan ?</h3>
              <p className="text-gray-400 font-medium tracking-wide">Recevez vos devis gratuits en moins de 24h</p>
            </div>
            <Link
              href="/devis"
              className="btn-glow inline-flex items-center gap-2 px-8 py-3 text-sm font-bold"
            >
              Demander un devis
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-gray-900 font-extrabold text-sm tracking-tighter">RH</span>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Renov<span className="text-indigo-400">Habitation</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-xs font-medium">
              Mise en relation gratuite avec des artisans qualifiés près de chez vous. Recevez jusqu&apos;à 3 devis en moins de 24h.
            </p>
            <div className="flex flex-col gap-3 text-xs text-gray-500 font-semibold tracking-wide">
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>Données protégées (RGPD)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-indigo-400" />
                <span>Réponse rapide en 24h</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>100% gratuit, sans engagement</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-widest text-indigo-400">Services</h3>
            <ul className="space-y-3.5 text-sm font-medium">
              <li><Link href="/services/reparation-volets-roulants" className="text-gray-400 hover:text-white transition-colors">Réparation volets roulants</Link></li>
              <li><Link href="/services/recherche-fuite-eau" className="text-gray-400 hover:text-white transition-colors">Recherche de fuite d&apos;eau</Link></li>
              <li><Link href="/services/plomberie-urgente" className="text-gray-400 hover:text-white transition-colors">Plomberie urgente</Link></li>
              <li><Link href="/services/depannage-chauffage" className="text-gray-400 hover:text-white transition-colors">Dépannage chauffage</Link></li>
              <li><Link href="/services/ramonage-cheminee" className="text-gray-400 hover:text-white transition-colors">Ramonage cheminée</Link></li>
              <li><Link href="/services/traitement-nuisibles" className="text-gray-400 hover:text-white transition-colors">Traitement nuisibles</Link></li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-widest text-indigo-400">Entreprise</h3>
            <ul className="space-y-3.5 text-sm font-medium">
              <li><Link href="/devis" className="text-gray-400 hover:text-white transition-colors">Demander un devis</Link></li>
              <li><Link href="/artisans" className="text-gray-400 hover:text-white transition-colors">Devenir partenaire</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog & Guides</Link></li>
              <li><Link href="/villes" className="text-gray-400 hover:text-white transition-colors">Toutes nos villes</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Nous contacter</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-widest text-indigo-400">Contact</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-gray-800/50 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-700/50">
                  <Phone className="w-4 h-4 text-indigo-300" />
                </div>
                <a href="tel:0800000000" className="text-gray-300 hover:text-white transition-colors">08 00 00 00 00</a>
              </li>
              <li className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-gray-800/50 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-700/50">
                  <Mail className="w-4 h-4 text-indigo-300" />
                </div>
                <a href="mailto:contact@renov-habitation.fr" className="text-gray-300 hover:text-white transition-colors">contact@renov-habitation.fr</a>
              </li>
              <li className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-gray-800/50 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-700/50">
                  <MapPin className="w-4 h-4 text-indigo-300" />
                </div>
                <span className="text-gray-300">France métropolitaine</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800/80 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm font-medium text-gray-500">
          <p>&copy; {new Date().getFullYear()} Renov Habitation. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="hover:text-gray-300 transition-colors">Mentions légales</Link>
            <Link href="/cgu" className="hover:text-gray-300 transition-colors">C.G.U</Link>
            <Link href="/plan-du-site" className="hover:text-gray-300 transition-colors">Plan du site</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
