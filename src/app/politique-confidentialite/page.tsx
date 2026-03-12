import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialite - Protection des donnees",
  description:
    "Decouvrez comment Renov Habitation protege vos donnees personnelles. Politique de confidentialite conforme au RGPD.",
  alternates: {
    canonical: "/politique-confidentialite",
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-slate-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link
            href="/"
            className="hover:text-indigo-600 transition-colors"
          >
            Accueil
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-medium">
            Politique de confidentialite
          </span>
        </nav>

        <h1 className="text-3xl font-bold text-slate-900 mb-8">
          Politique de confidentialite
        </h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <p className="text-slate-700 leading-relaxed">
            La protection de vos donnees personnelles est une priorite pour Renov
            Habitation. Cette politique explique comment nous collectons, utilisons
            et protegeons vos informations conformement au Reglement General sur la
            Protection des Donnees (RGPD).
          </p>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              1. Donnees collectees
            </h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              Nous collectons les donnees suivantes lorsque vous utilisez notre
              service :
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
              <li>Nom et prenom</li>
              <li>Adresse email</li>
              <li>Numero de telephone</li>
              <li>Code postal</li>
              <li>Description du projet de travaux</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              2. Finalite du traitement
            </h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              Vos donnees sont collectees pour :
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
              <li>
                Vous mettre en relation avec des artisans qualifies proches de
                chez vous
              </li>
              <li>Vous envoyer les devis demandes</li>
              <li>Repondre a vos demandes de contact</li>
              <li>Ameliorer la qualite de notre service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              3. Partage des donnees
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Vos coordonnees sont transmises uniquement aux artisans partenaires
              susceptibles de repondre a votre demande de devis (3 artisans
              maximum). Vos donnees ne sont jamais revendues a des tiers a des
              fins commerciales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              4. Duree de conservation
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Vos donnees sont conservees pendant une duree maximale de 3 ans a
              compter de votre derniere interaction avec notre service. Passe ce
              delai, elles sont automatiquement supprimees.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              5. Vos droits
            </h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              Conformement au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
              <li>
                <strong>Droit d&apos;acces :</strong> obtenir une copie de vos
                donnees personnelles
              </li>
              <li>
                <strong>Droit de rectification :</strong> corriger des donnees
                inexactes
              </li>
              <li>
                <strong>Droit a l&apos;effacement :</strong> demander la
                suppression de vos donnees
              </li>
              <li>
                <strong>Droit d&apos;opposition :</strong> vous opposer au
                traitement de vos donnees
              </li>
              <li>
                <strong>Droit a la portabilite :</strong> recevoir vos donnees
                dans un format structure
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3">
              Pour exercer ces droits, contactez-nous a :{" "}
              <a
                href="mailto:contact@renov-habitation.fr"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                contact@renov-habitation.fr
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              6. Securite des donnees
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Nous mettons en oeuvre des mesures techniques et organisationnelles
              appropriees pour proteger vos donnees contre tout acces non autorise,
              modification, divulgation ou destruction. Les donnees sont stockees
              sur des serveurs securises et les communications sont chiffrees via
              HTTPS.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              7. Cookies
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Notre site utilise des cookies strictement necessaires au
              fonctionnement du service ainsi que des cookies d&apos;analyse
              (Vercel Analytics) pour ameliorer l&apos;experience utilisateur. Vous
              pouvez configurer votre navigateur pour refuser les cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              8. Modifications
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Nous nous reservons le droit de modifier cette politique de
              confidentialite a tout moment. Les modifications prennent effet des
              leur publication sur cette page. Derniere mise a jour : mars 2026.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              9. Contact
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Pour toute question relative a la protection de vos donnees, vous
              pouvez nous contacter a :{" "}
              <a
                href="mailto:contact@renov-habitation.fr"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                contact@renov-habitation.fr
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
