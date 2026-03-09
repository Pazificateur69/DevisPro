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
  HeartHandshake,
  MapPin,
  Phone,
  Timer,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    location: "Lyon (69)",
    text: "J\u2019ai recu 3 devis en moins de 2h pour ma fuite d\u2019eau. Le plombier choisi etait tres professionnel et ponctuel. Je recommande vivement\u00a0!",
    rating: 5,
    service: "Plomberie urgente",
  },
  {
    name: "Pierre D.",
    location: "Bordeaux (33)",
    text: "Service rapide et efficace. Mon volet roulant a ete repare le lendemain de ma demande. Tres satisfait du rapport qualite-prix.",
    rating: 5,
    service: "Reparation volets",
  },
  {
    name: "Sophie M.",
    location: "Paris (75)",
    text: "Excellente mise en relation. J\u2019ai pu comparer les prix et choisir l\u2019artisan qui me convenait le mieux. Aucune pression commerciale.",
    rating: 5,
    service: "Ramonage cheminee",
  },
  {
    name: "Thomas R.",
    location: "Toulouse (31)",
    text: "Probleme de punaises de lit regle en 48h grace a Renov Habitation. L\u2019artisan etait serieux et le traitement a ete tres efficace.",
    rating: 5,
    service: "Traitement nuisibles",
  },
];

const stats = [
  { value: "15\u00a0000+", label: "Demandes traitees", icon: <Zap className="w-5 h-5" /> },
  { value: "2\u00a0500+", label: "Artisans partenaires", icon: <Users className="w-5 h-5" /> },
  { value: "98\u00a0%", label: "Clients satisfaits", icon: <HeartHandshake className="w-5 h-5" /> },
  { value: "< 2h", label: "Temps de reponse", icon: <Clock className="w-5 h-5" /> },
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
      <div className="bg-gradient-to-r from-indigo-600 via-indigo-600 to-violet-600 text-white py-2.5 text-center text-[13px] font-medium">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-indigo-200" />
          <span className="text-indigo-100">
            <strong className="text-white">12 artisans disponibles</strong> dans votre zone — Reponse en moins de 2h
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-violet-500/6 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 trust-badge rounded-full px-4 py-2 text-[13px] mb-8 animate-fade-in">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-slate-300">Service n&deg;1 de mise en relation artisans</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] mb-6 animate-fade-in-up tracking-tight">
              Recevez jusqu&apos;a{" "}
              <span className="relative inline-block text-gradient-hero">
                3 devis gratuits
              </span>
              <br />
              <span className="text-slate-400 font-semibold text-3xl sm:text-4xl lg:text-[2.5rem]">en moins de 24h</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              Trouvez rapidement un artisan qualifie pres de chez vous.
              Comparez les prix et choisissez le meilleur professionnel.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Link
                href="/devis"
                className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                Recevoir mes devis gratuits
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:0800000000"
                className="inline-flex items-center justify-center gap-2 glass-dark text-slate-300 px-8 py-4 rounded-[14px] text-base font-medium hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" />
                08 00 00 00 00
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-5 mt-10 text-[13px] text-slate-500 animate-fade-in" style={{ animationDelay: '500ms' }}>
              {["100\u00a0% gratuit", "Sans engagement", "Artisans verifies", "Reponse en 24h"].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-10 z-10 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-3 text-indigo-600">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28 bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
              <Timer className="w-3.5 h-3.5" />
              Simple et rapide
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Comment ca marche ?
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-base">
              Obtenez vos devis en 3 etapes simples, en moins de 30 secondes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 stagger-children max-w-4xl mx-auto">
            {[
              {
                icon: <CheckCircle className="w-6 h-6" />,
                step: "01",
                title: "Decrivez votre besoin",
                description: "Remplissez notre formulaire en moins de 30 secondes. Choisissez votre service et decrivez votre projet.",
                color: "from-indigo-500 to-indigo-600",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                step: "02",
                title: "Recevez vos devis",
                description: "En moins de 24h, recevez jusqu&apos;a 3 devis detailles d&apos;artisans qualifies proches de chez vous.",
                color: "from-violet-500 to-violet-600",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                step: "03",
                title: "Choisissez le meilleur",
                description: "Comparez les prix et les avis, puis choisissez l&apos;artisan qui vous convient. Sans engagement.",
                color: "from-emerald-500 to-emerald-600",
              },
            ].map((item) => (
              <div key={item.title} className="relative text-center bg-white rounded-2xl p-8 border border-slate-100 card-hover">
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r ${item.color} text-white text-[11px] font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg`}>
                  {item.step}
                </div>
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5 text-white shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/devis"
              className="btn-accent inline-flex items-center gap-2 px-8 py-4 text-base font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              Commencer ma demande
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-slate-400 mt-3 font-medium">Formulaire en 30 secondes — 100% gratuit</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Nos expertises
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Tous nos services
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-base">
              Trouvez un artisan qualifie pour tous vos besoins
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 stagger-children">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 hover:border-indigo-200 card-hover group"
              >
                <div className="w-11 h-11 bg-gradient-to-br from-indigo-50 to-indigo-100/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-indigo-100 group-hover:to-indigo-200 transition-all">
                  <ServiceIcon name={service.icon} className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 mb-0.5 group-hover:text-indigo-600 transition-colors text-[15px]">
                    {service.name}
                  </h3>
                  <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <span className="text-xs text-indigo-600 font-semibold mt-2 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Demander un devis <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* France Map + City List */}
      <section className="py-20 sm:py-28 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
              <MapPin className="w-3.5 h-3.5" />
              Couverture nationale
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Des artisans partout en France
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-base">
              Plus de {cities.length} villes couvertes. Cliquez sur une ville pour trouver un artisan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center">
              <FranceMap />
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-600" />
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
                      className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all text-sm card-hover"
                    >
                      <MapPin className="w-3 h-3 text-indigo-400 flex-shrink-0" />
                      <span className="font-medium text-slate-700 text-[13px]">{city.name}</span>
                      <span className="text-slate-300 text-xs ml-auto">({city.departmentCode})</span>
                    </Link>
                  );
                })}
              </div>
              <Link
                href="/villes"
                className="inline-flex items-center gap-1.5 text-indigo-600 font-semibold text-sm mt-4 hover:text-indigo-700 transition-colors"
              >
                Voir toutes les {cities.length} villes
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Full city list by region */}
          <div className="mt-16 pt-14 border-t border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-8 text-center">
              Toutes nos villes par region
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regions.map((region) => {
                const regionCities = getCitiesByRegion(region);
                return (
                  <div key={region}>
                    <h4 className="font-semibold text-slate-900 mb-3 text-xs uppercase tracking-wider flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-indigo-500" />
                      {region}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {regionCities.map((city) => (
                        <Link
                          key={city.slug}
                          href={`/services/plomberie-urgente/${city.slug}`}
                          className="text-xs px-2.5 py-1 bg-white rounded-full hover:bg-indigo-50 hover:text-indigo-700 text-slate-500 transition-colors border border-slate-100 hover:border-indigo-200"
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
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
              <Star className="w-3.5 h-3.5" />
              Temoignages
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-base">
              Des milliers de particuliers nous font confiance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-2xl p-6 card-hover border border-slate-100">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-slate-200 fill-slate-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <div className="font-semibold text-slate-900 text-[13px]">{testimonial.name}</div>
                    <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                  <span className="text-[11px] bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full font-semibold">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Trust bar */}
          <div className="mt-8 bg-white rounded-2xl border border-slate-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["M", "P", "S", "T", "A"].map((initial, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white text-[11px] font-bold flex items-center justify-center ring-2 ring-white">
                    {initial}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-sm font-bold text-slate-900 ml-1">4.9/5</span>
                </div>
                <p className="text-xs text-slate-400">Base sur +2 500 avis clients verifies</p>
              </div>
            </div>
            <Link
              href="/devis"
              className="btn-accent inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm"
            >
              Obtenir mes devis gratuits
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Conversion trust section */}
      <section className="py-20 bg-section-alt border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {[
              {
                icon: <Shield className="w-7 h-7" />,
                title: "Donnees protegees",
                desc: "Vos informations sont securisees et conformes au RGPD. Elles ne sont jamais revendues.",
                color: "from-emerald-500 to-emerald-600",
                bg: "bg-emerald-50",
              },
              {
                icon: <TrendingUp className="w-7 h-7" />,
                title: "Artisans verifies",
                desc: "Chaque artisan est controle : SIRET, assurance, qualifications et avis clients.",
                color: "from-indigo-500 to-indigo-600",
                bg: "bg-indigo-50",
              },
              {
                icon: <Zap className="w-7 h-7" />,
                title: "Reponse rapide",
                desc: "En moyenne, vous recevez votre premier devis en moins de 2 heures.",
                color: "from-amber-500 to-orange-500",
                bg: "bg-amber-50",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-4`}>
                  <div className={`bg-gradient-to-br ${item.color} bg-clip-text text-transparent`}>
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-gradient text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-violet-500/6 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
            Pret a recevoir vos devis ?
          </h2>
          <p className="text-slate-400 mb-10 text-base max-w-md mx-auto">
            C&apos;est gratuit, rapide et sans engagement.
            Comparez les meilleurs artisans en quelques clics.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/devis"
              className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              Demander mes devis gratuits
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0800000000"
              className="inline-flex items-center justify-center gap-2 glass-dark text-slate-300 px-8 py-4 rounded-[14px] text-base font-medium hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" />
              08 00 00 00 00
            </a>
          </div>
          <div className="flex justify-center gap-5 mt-8 text-[13px] text-slate-500">
            {["Gratuit", "Sans engagement", "Reponse en 24h"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
