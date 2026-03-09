import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-white">
                Devis<span className="text-blue-400">Pro</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Mise en relation gratuite avec des artisans qualifiés près de chez vous. Recevez jusqu&apos;à 3 devis en moins de 24h.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/plomberie-urgente" className="hover:text-white transition-colors">Plomberie urgente</Link></li>
              <li><Link href="/services/recherche-fuite-eau" className="hover:text-white transition-colors">Recherche de fuite</Link></li>
              <li><Link href="/services/depannage-chauffage" className="hover:text-white transition-colors">Dépannage chauffage</Link></li>
              <li><Link href="/services/ramonage-cheminee" className="hover:text-white transition-colors">Ramonage cheminée</Link></li>
              <li><Link href="/services/traitement-nuisibles" className="hover:text-white transition-colors">Traitement nuisibles</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Informations</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/devis" className="hover:text-white transition-colors">Demander un devis</Link></li>
              <li><Link href="/artisans" className="hover:text-white transition-colors">Devenir artisan partenaire</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link href="/cgu" className="hover:text-white transition-colors">CGU</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:0800000000" className="hover:text-white transition-colors">08 00 00 00 00</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:contact@devispro.fr" className="hover:text-white transition-colors">contact@devispro.fr</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <span>France métropolitaine</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} DevisPro. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
