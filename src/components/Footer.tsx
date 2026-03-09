import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Mini CTA bar */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-white font-extrabold text-2xl tracking-tight mb-1">Besoin d&apos;un artisan ?</h3>
              <p className="text-slate-500 font-medium">Recevez vos devis gratuits en moins de 24h</p>
            </div>
            <Link
              href="/devis"
              className="btn-glow inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold"
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
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <span className="text-white font-extrabold text-xs tracking-tighter">RH</span>
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                Renov<span className="text-indigo-400">Habitation</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-xs">
              Mise en relation gratuite avec des artisans qualifies pres de chez vous. Recevez jusqu&apos;a 3 devis en moins de 24h.
            </p>
            <div className="flex flex-col gap-3 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2.5">
                <Shield className="w-3.5 h-3.5 text-emerald-500" />
                <span>Donnees protegees (RGPD)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                <span>Reponse rapide en 24h</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span>100% gratuit, sans engagement</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/reparation-volets-roulants" className="text-slate-500 hover:text-white transition-colors">Reparation volets roulants</Link></li>
              <li><Link href="/services/recherche-fuite-eau" className="text-slate-500 hover:text-white transition-colors">Recherche de fuite d&apos;eau</Link></li>
              <li><Link href="/services/plomberie-urgente" className="text-slate-500 hover:text-white transition-colors">Plomberie urgente</Link></li>
              <li><Link href="/services/depannage-chauffage" className="text-slate-500 hover:text-white transition-colors">Depannage chauffage</Link></li>
              <li><Link href="/services/ramonage-cheminee" className="text-slate-500 hover:text-white transition-colors">Ramonage cheminee</Link></li>
              <li><Link href="/services/traitement-nuisibles" className="text-slate-500 hover:text-white transition-colors">Traitement nuisibles</Link></li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-6">Entreprise</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/devis" className="text-slate-500 hover:text-white transition-colors">Demander un devis</Link></li>
              <li><Link href="/artisans" className="text-slate-500 hover:text-white transition-colors">Devenir partenaire</Link></li>
              <li><Link href="/blog" className="text-slate-500 hover:text-white transition-colors">Blog & Guides</Link></li>
              <li><Link href="/villes" className="text-slate-500 hover:text-white transition-colors">Toutes nos villes</Link></li>
              <li><Link href="/contact" className="text-slate-500 hover:text-white transition-colors">Nous contacter</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/5">
                  <Phone className="w-4 h-4 text-indigo-400" />
                </div>
                <a href="tel:0800000000" className="text-slate-400 hover:text-white transition-colors">08 00 00 00 00</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/5">
                  <Mail className="w-4 h-4 text-indigo-400" />
                </div>
                <a href="mailto:contact@renov-habitation.fr" className="text-slate-400 hover:text-white transition-colors">contact@renov-habitation.fr</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/5">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                </div>
                <span className="text-slate-400">France metropolitaine</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Renov Habitation. Tous droits reserves.</p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="hover:text-slate-400 transition-colors">Mentions legales</Link>
            <Link href="/cgu" className="hover:text-slate-400 transition-colors">C.G.U</Link>
            <Link href="/plan-du-site" className="hover:text-slate-400 transition-colors">Plan du site</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
