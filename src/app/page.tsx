import Link from "next/link";
import { services } from "@/lib/services";
import { cities, getRegions, getCitiesByRegion } from "@/lib/cities";
import ServiceIcon from "@/components/ServiceIcon";
import FranceMap from "@/components/FranceMap";
import {
  CheckCircle,
  Clock,
  Shield,
  Star,
  ArrowRight,
  Users,
  Zap,
  BadgeCheck,
  HeartHandshake,
  MapPin,
  Phone,
  Timer,
  TrendingUp,
} from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    location: "Lyon (69)",
    text: "J\u2019ai reçu 3 devis en moins de 2h pour ma fuite d\u2019eau. Le plombier choisi était très professionnel et ponctuel. Je recommande vivement\u00a0!",
    rating: 5,
    service: "Plomberie urgente",
  },
  {
    name: "Pierre D.",
    location: "Bordeaux (33)",
    text: "Service rapide et efficace. Mon volet roulant a été réparé le lendemain de ma demande. Très satisfait du rapport qualité-prix.",
    rating: 5,
    service: "Réparation volets",
  },
  {
    name: "Sophie M.",
    location: "Paris (75)",
    text: "Excellente mise en relation. J\u2019ai pu comparer les prix et choisir l\u2019artisan qui me convenait le mieux. Aucune pression commerciale.",
    rating: 5,
    service: "Ramonage cheminée",
  },
  {
    name: "Thomas R.",
    location: "Toulouse (31)",
    text: "Problème de punaises de lit réglé en 48h grâce à DevisPro. L\u2019artisan était sérieux et le traitement a été très efficace.",
    rating: 5,
    service: "Traitement nuisibles",
  },
];

const stats = [
  { value: "15\u00a0000+", label: "Demandes traitées", icon: <Zap className="w-5 h-5" /> },
  { value: "2\u00a0500+", label: "Artisans partenaires", icon: <Users className="w-5 h-5" /> },
  { value: "98\u00a0%", label: "Clients satisfaits", icon: <HeartHandshake className="w-5 h-5" /> },
  { value: "< 2h", label: "Temps de réponse moyen", icon: <Clock className="w-5 h-5" /> },
];

const topCities = [
  "paris", "lyon", "marseille", "toulouse", "bordeaux", "lille",
  "nantes", "strasbourg", "nice", "montpellier", "rennes", "grenoble",
  "rouen", "dijon", "tours", "clermont-ferrand", "metz", "reims",
  "toulon", "angers", "brest", "orleans", "perpignan", "pau",
];

export default function HomePage() {
  const regions = getRegions();

  return (
    <>
      {/* Urgency Bar */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 text-center text-sm font-medium">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2">
          <Timer className="w-4 h-4 animate-pulse" />
          <span>
            <strong>12 artisans disponibles</strong> dans votre zone — Réponse en moins de 2h
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 trust-badge rounded-full px-4 py-2 text-sm mb-8 animate-fade-in">
              <BadgeCheck className="w-4 h-4 text-green-300" />
              <span className="text-blue-100">Service n°1 de mise en relation artisans</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 animate-fade-in-up tracking-tight">
              Recevez jusqu&apos;à{" "}
              <span className="relative inline-block">
                3 devis gratuits
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8" stroke="rgba(147,197,253,0.5)" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
              <br />
              <span className="text-blue-200">en moins de 24h</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100/90 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              Trouvez rapidement un artisan qualifié près de chez vous.
              Comparez les prix et choisissez le meilleur professionnel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Link
                href="/devis"
                className="btn-glow inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/20 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
              >
                Recevoir mes devis gratuits
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:0800000000"
                className="inline-flex items-center justify-center gap-2 glass text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/15 transition-all"
              >
                <Phone className="w-5 h-5" />
                08 00 00 00 00
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-blue-200/80 animate-fade-in" style={{ animationDelay: '500ms' }}>
              {["100\u00a0% gratuit", "Sans engagement", "Artisans vérifiés", "Réponse en 24h"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b relative -mt-8 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Simple et rapide</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Obtenez vos devis en 3 étapes simples, en moins de 30 secondes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 stagger-children">
            {[
              {
                icon: <CheckCircle className="w-7 h-7" />,
                step: "01",
                title: "Décrivez votre besoin",
                description: "Remplissez notre formulaire en moins de 30 secondes. Choisissez votre service et décrivez votre projet.",
              },
              {
                icon: <Clock className="w-7 h-7" />,
                step: "02",
                title: "Recevez vos devis",
                description: "En moins de 24h, recevez jusqu'à 3 devis détaillés d'artisans qualifiés proches de chez vous.",
              },
              {
                icon: <Shield className="w-7 h-7" />,
                step: "03",
                title: "Choisissez le meilleur",
                description: "Comparez les prix et les avis, puis choisissez l'artisan qui vous convient. Sans engagement.",
              },
            ].map((item) => (
              <div key={item.title} className="relative text-center bg-white rounded-2xl p-8 border card-hover">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {item.step}
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          {/* CTA after steps */}
          <div className="text-center mt-10">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Commencer ma demande
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-xs text-gray-400 mt-3">Formulaire en 30 secondes — 100% gratuit</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Nos expertises</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Tous nos services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Trouvez un artisan qualifié pour tous vos besoins
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border hover:border-blue-200 card-hover group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-blue-100 group-hover:to-blue-200 transition-all">
                  <ServiceIcon name={service.icon} className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <span className="text-xs text-blue-600 font-semibold mt-2 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Demander un devis <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* France Map + City List */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Couverture nationale</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Des artisans partout en France
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Plus de {cities.length} villes couvertes. Cliquez sur une ville pour trouver un artisan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="flex justify-center">
              <FranceMap />
            </div>

            {/* Top cities quick links */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Villes principales
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {topCities.map((slug) => {
                  const city = cities.find((c) => c.slug === slug);
                  if (!city) return null;
                  return (
                    <Link
                      key={city.slug}
                      href={`/services/plomberie-urgente/${city.slug}`}
                      className="flex items-center gap-2 p-3 rounded-xl border hover:border-blue-300 hover:bg-blue-50/50 transition-all text-sm card-hover"
                    >
                      <MapPin className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="font-medium text-gray-900">{city.name}</span>
                      <span className="text-gray-400 text-xs ml-auto">({city.departmentCode})</span>
                    </Link>
                  );
                })}
              </div>
              <Link
                href="/villes"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm mt-4 hover:text-blue-700 transition-colors"
              >
                Voir toutes les {cities.length} villes
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Full city list by region */}
          <div className="mt-16 border-t pt-14">
            <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">
              Toutes nos villes par région
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regions.map((region) => {
                const regionCities = getCitiesByRegion(region);
                return (
                  <div key={region}>
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      {region}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {regionCities.map((city) => (
                        <Link
                          key={city.slug}
                          href={`/services/plomberie-urgente/${city.slug}`}
                          className="text-xs px-2.5 py-1 bg-gray-50 rounded-full hover:bg-blue-50 hover:text-blue-700 text-gray-600 transition-colors border hover:border-blue-200"
                        >
                          {city.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Témoignages</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Des milliers de particuliers nous font confiance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-2xl p-6 card-hover border border-gray-100">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-5 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-medium">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Trust bar */}
          <div className="mt-10 bg-white rounded-2xl border p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["M", "P", "S", "T", "A"].map((initial, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xs font-bold flex items-center justify-center ring-2 ring-white">
                    {initial}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-sm font-bold text-gray-900 ml-1">4.9/5</span>
                </div>
                <p className="text-xs text-gray-500">Basé sur +2 500 avis clients vérifiés</p>
              </div>
            </div>
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-sm text-sm"
            >
              Obtenir mes devis gratuits
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Conversion trust section */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Données protégées",
                desc: "Vos informations sont sécurisées et conformes au RGPD. Elles ne sont jamais revendues.",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Artisans vérifiés",
                desc: "Chaque artisan est contrôlé : SIRET, assurance, qualifications et avis clients.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Réponse rapide",
                desc: "En moyenne, vous recevez votre premier devis en moins de 2 heures.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Prêt à recevoir vos devis ?
          </h2>
          <p className="text-blue-100/80 mb-8 text-lg max-w-lg mx-auto">
            C&apos;est gratuit, rapide et sans engagement.
            Comparez les meilleurs artisans en quelques clics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="btn-glow inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Demander mes devis gratuits
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:0800000000"
              className="inline-flex items-center justify-center gap-2 glass text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/15 transition-all"
            >
              <Phone className="w-5 h-5" />
              08 00 00 00 00
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-8 text-sm text-blue-200/70">
            {["Gratuit", "Sans engagement", "Réponse en 24h"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
