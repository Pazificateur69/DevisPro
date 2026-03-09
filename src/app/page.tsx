import Link from "next/link";
import { services } from "@/lib/services";
import ServiceIcon from "@/components/ServiceIcon";
import { CheckCircle, Clock, Shield, Star, ArrowRight, Users } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    location: "Lyon",
    text: "J'ai recu 3 devis en moins de 2h pour ma fuite d'eau. Le plombier choisi etait tres professionnel. Je recommande !",
    rating: 5,
    service: "Plomberie urgente",
  },
  {
    name: "Pierre D.",
    location: "Bordeaux",
    text: "Service rapide et efficace. Mon volet roulant a ete repare le lendemain de ma demande. Tres satisfait.",
    rating: 5,
    service: "Reparation volets",
  },
  {
    name: "Sophie M.",
    location: "Paris",
    text: "Excellente mise en relation. J'ai pu comparer les prix et choisir l'artisan qui me convenait le mieux.",
    rating: 4,
    service: "Ramonage cheminee",
  },
];

const stats = [
  { value: "15 000+", label: "Demandes traitees" },
  { value: "2 500+", label: "Artisans partenaires" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "< 2h", label: "Temps de reponse moyen" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Recevez jusqu&apos;a 3 devis gratuits
              <br />
              <span className="text-blue-200">en moins de 24h</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Trouvez rapidement un artisan qualifie pres de chez vous.
              Comparez les prix et choisissez le meilleur professionnel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/devis"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Recevoir mes devis gratuits
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/artisans"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <Users className="w-5 h-5" />
                Espace artisans
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>100% gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Artisans verifies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Comment ca marche ?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Obtenez vos devis en 3 etapes simples
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-7 h-7" />,
                title: "1. Decrivez votre besoin",
                description:
                  "Remplissez notre formulaire en moins de 30 secondes. Choisissez votre service et decrivez votre projet.",
              },
              {
                icon: <Clock className="w-7 h-7" />,
                title: "2. Recevez vos devis",
                description:
                  "En moins de 24h, recevez jusqu'a 3 devis detailles d'artisans qualifies proches de chez vous.",
              },
              {
                icon: <Shield className="w-7 h-7" />,
                title: "3. Choisissez le meilleur",
                description:
                  "Comparez les prix et les avis, puis choisissez l'artisan qui vous convient. Sans engagement.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="text-center bg-white rounded-2xl p-8 shadow-sm border hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-5 text-blue-600">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Nos services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Trouvez un artisan pour tous vos besoins
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-start gap-4 p-5 rounded-xl border hover:border-blue-300 hover:bg-blue-50/50 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <ServiceIcon name={service.icon} className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <span className="text-xs text-blue-600 font-medium mt-2 inline-block">
                    Demander un devis &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Des milliers de particuliers nous font confiance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-6 shadow-sm border"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Pret a recevoir vos devis ?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            C&apos;est gratuit, rapide et sans engagement.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Demander mes devis gratuits
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
