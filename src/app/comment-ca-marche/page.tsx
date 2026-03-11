import { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  ChevronDown,
  FileText,
  Users,
  Shield,
  ArrowRight,
  Clock,
  Lock,
  HeartHandshake,
} from "lucide-react";
import JsonLd, { getFAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Comment ca marche ? - Recevez vos devis en 3 etapes",
  description:
    "Decouvrez comment obtenir jusqu'a 3 devis gratuits d'artisans qualifies en 3 etapes simples. Service 100% gratuit et sans engagement.",
  alternates: {
    canonical: "/comment-ca-marche",
  },
};

const steps = [
  {
    number: "01",
    title: "Decrivez votre besoin",
    description:
      "Remplissez notre formulaire en quelques clics. Selectionnez le type de travaux souhaite, decrivez votre projet et indiquez votre localisation. C'est rapide et entierement gratuit.",
    icon: <FileText className="w-7 h-7" />,
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    details: [
      "Formulaire simple et rapide",
      "Choix parmi de nombreux services",
      "Description libre de votre projet",
    ],
  },
  {
    number: "02",
    title: "Recevez vos devis",
    description:
      "Votre demande est transmise a des artisans qualifies proches de chez vous. Vous recevez jusqu'a 3 devis detailles pour comparer les prix, les prestations et les delais d'intervention.",
    icon: <Users className="w-7 h-7" />,
    color: "from-violet-500 to-violet-600",
    bgColor: "bg-violet-50",
    details: [
      "Jusqu'a 3 devis detailles",
      "Artisans proches de chez vous",
      "Comparaison facilitee",
    ],
  },
  {
    number: "03",
    title: "Choisissez librement",
    description:
      "Comparez les devis recus en toute tranquillite. Choisissez l'artisan qui vous convient le mieux ou declinez sans aucune obligation. Vous gardez le controle a chaque etape.",
    icon: <CheckCircle className="w-7 h-7" />,
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    details: [
      "Aucune obligation de signer",
      "Libre choix du professionnel",
      "Accompagnement disponible",
    ],
  },
];

const engagements = [
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "100% gratuit",
    description:
      "Notre service de mise en relation est entierement gratuit pour les particuliers. Aucun frais cache, aucune commission sur vos travaux.",
    color: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Sans engagement",
    description:
      "Recevoir des devis ne vous engage a rien. Vous etes libre d'accepter ou de refuser chaque proposition sans justification.",
    color: "from-violet-500 to-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Donnees protegees",
    description:
      "Vos informations personnelles sont securisees et conformes au RGPD. Elles ne sont jamais revendues a des tiers non partenaires.",
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Artisans verifies",
    description:
      "Chaque artisan partenaire est controle : numero SIRET valide, assurance professionnelle et qualifications verifiees.",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
  },
];

const faqQuestions = [
  {
    question: "Combien coute le service ?",
    answer:
      "Le service de mise en relation est 100% gratuit pour les particuliers. Vous ne payez rien pour recevoir vos devis. Les artisans prennent en charge le cout de la mise en relation.",
  },
  {
    question: "Suis-je oblige d'accepter un devis ?",
    answer:
      "Non, vous n'avez aucune obligation. Recevoir un devis ne vous engage en rien. Vous etes libre de comparer, de negocier ou de refuser sans justification.",
  },
  {
    question: "Comment sont selectionnes les artisans ?",
    answer:
      "Les artisans partenaires sont selectionnes selon plusieurs criteres : validite de leur immatriculation, assurance professionnelle, qualifications et proximite geographique avec votre projet.",
  },
  {
    question: "Quels types de travaux sont couverts ?",
    answer:
      "Nous couvrons de nombreux types de travaux : plomberie, chauffage, volets roulants, nuisibles, panneaux solaires, ramonage, portails electriques, debarras, et bien d'autres.",
  },
  {
    question: "Mes donnees personnelles sont-elles en securite ?",
    answer:
      "Oui, nous sommes conformes au RGPD. Vos informations sont transmises uniquement aux artisans susceptibles de repondre a votre demande et ne sont jamais revendues.",
  },
];

export default function CommentCaMarchePage() {
  return (
    <>
      <JsonLd data={getFAQJsonLd(faqQuestions)} />

      {/* Hero */}
      <section className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-violet-500/6 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <nav className="text-sm text-indigo-200 mb-6 flex items-center gap-2 flex-wrap justify-center">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white">Comment ca marche</span>
          </nav>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 trust-badge rounded-full px-4 py-2 text-[13px] mb-6 animate-fade-in">
              <Clock className="w-3.5 h-3.5 text-indigo-300" />
              <span className="text-slate-300">Simple et rapide</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 animate-fade-in-up tracking-tight">
              Comment ca marche ?
            </h1>
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              Obtenez vos devis en 3 etapes simples.
              Service gratuit, rapide et sans aucun engagement.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 sm:py-28 bg-subtle">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual card */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-white rounded-2xl border border-slate-100 p-8 sm:p-10 card-hover relative overflow-hidden">
                    <div className="absolute top-0 right-0 text-[120px] font-extrabold text-slate-50 leading-none select-none -mr-4 -mt-4">
                      {step.number}
                    </div>
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-6`}>
                        {step.icon}
                      </div>
                      <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-3`}>
                        Etape {step.number}
                      </div>
                      <h2 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">
                        {step.title}
                      </h2>
                      <p className="text-slate-500 text-[15px] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="w-full lg:w-1/2">
                  <div className="space-y-3">
                    {step.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 card-hover"
                      >
                        <div className={`w-8 h-8 ${step.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle className="w-4 h-4 text-indigo-600" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA after steps */}
          <div className="text-center mt-16">
            <Link
              href="/devis"
              className="btn-accent inline-flex items-center gap-2 px-8 py-4 text-base font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              Commencer ma demande
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-slate-400 mt-3 font-medium">
              100% gratuit et sans engagement
            </p>
          </div>
        </div>
      </section>

      {/* Nos engagements */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
              <Shield className="w-3.5 h-3.5" />
              Nos garanties
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Nos engagements
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-base">
              Un service transparent, securise et concu pour vous simplifier la vie
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
            {engagements.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 card-hover text-center"
              >
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <div className={`bg-gradient-to-br ${item.color} bg-clip-text text-transparent`}>
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 text-[15px] mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-subtle">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Questions frequentes
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-base">
              Les reponses aux questions les plus posees
            </p>
          </div>

          <div className="space-y-3">
            {faqQuestions.map((item, index) => (
              <details
                key={index}
                className="bg-white rounded-2xl border border-slate-100 card-hover group"
                open={index === 0}
              >
                <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none font-semibold text-slate-900 text-[15px]">
                  {item.question}
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 ml-4 group-open:rotate-180 transition-transform">
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1">
                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-violet-500/6 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight">
            Pret a recevoir vos devis ?
          </h2>
          <p className="text-slate-400 mb-8 text-base max-w-md mx-auto">
            C&apos;est gratuit, rapide et sans engagement.
            Comparez les meilleurs artisans en quelques clics.
          </p>
          <Link
            href="/devis"
            className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            Demander mes devis gratuits
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex justify-center gap-5 mt-8 text-[13px] text-slate-500">
            {["Gratuit", "Sans engagement", "Reponse rapide"].map((item) => (
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
