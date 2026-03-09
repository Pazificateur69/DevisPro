import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Mini CTA bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-white font-bold text-lg">Besoin d&apos;un artisan ?</h3>
              <p className="text-gray-400 text-sm">Recevez vos devis gratuits en moins de 24h</p>
            </div>
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30"
            >
              Demander un devis
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">RH</span>
              </div>
              <span className="text-xl font-bold text-white">
                Renov<span className="text-blue-400">Habitation</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Mise en relation gratuite avec des artisans qualifiés près de chez vous. Recevez jusqu&apos;à 3 devis en moins de 24h.
            </p>
            <div className="flex flex-col gap-2 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-green-500" />
                <span>Données protégées (RGPD)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Réponse en moins de 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                <span>100% gratuit et sans engagement</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services/reparation-volets-roulants" className="hover:text-white transition-colors">Réparation volets roulants</Link></li>
              <li><Link href="/services/recherche-fuite-eau" className="hover:text-white transition-colors">Recherche de fuite d&apos;eau</Link></li>
              <li><Link href="/services/plomberie-urgente" className="hover:text-white transition-colors">Plomberie urgente</Link></li>
              <li><Link href="/services/depannage-chauffage" className="hover:text-white transition-colors">Dépannage chauffage</Link></li>
              <li><Link href="/services/ramonage-cheminee" className="hover:text-white transition-colors">Ramonage cheminée</Link></li>
              <li><Link href="/services/traitement-nuisibles" className="hover:text-white transition-colors">Traitement nuisibles</Link></li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Informations</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/devis" className="hover:text-white transition-colors">Demander un devis</Link></li>
              <li><Link href="/artisans" className="hover:text-white transition-colors">Devenir artisan partenaire</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog & guides</Link></li>
              <li><Link href="/villes" className="hover:text-white transition-colors">Villes couvertes</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link href="/cgu" className="hover:text-white transition-colors">CGU</Link></li>
              <li><Link href="/plan-du-site" className="hover:text-white transition-colors">Plan du site</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <a href="tel:0800000000" className="hover:text-white transition-colors">08 00 00 00 00</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <a href="mailto:contact@renov-habitation.fr" className="hover:text-white transition-colors">contact@renov-habitation.fr</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <span>France métropolitaine</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Renov Habitation. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link href="/mentions-legales" className="hover:text-gray-300 transition-colors">Mentions légales</Link>
            <span className="text-gray-700">·</span>
            <Link href="/cgu" className="hover:text-gray-300 transition-colors">CGU</Link>
            <span className="text-gray-700">·</span>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
