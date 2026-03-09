import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Generales d'Utilisation",
  description: "CGU du site DevisPro - Conditions d'utilisation du service de mise en relation avec des artisans.",
};

export default function CGUPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Conditions Generales d&apos;Utilisation
        </h1>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Article 1 - Objet
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Les presentes Conditions Generales d&apos;Utilisation (CGU)
              regissent l&apos;utilisation du site DevisPro, service de mise en
              relation entre des particuliers ayant un besoin en travaux et des
              artisans qualifies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Article 2 - Service propose
            </h2>
            <p className="text-gray-700 leading-relaxed">
              DevisPro est un service gratuit pour les particuliers qui permet
              de recevoir jusqu&apos;a 3 devis d&apos;artisans qualifies. Le
              service est accessible via le site internet et le formulaire de
              demande de devis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Article 3 - Inscription des particuliers
            </h2>
            <p className="text-gray-700 leading-relaxed">
              L&apos;utilisation du service ne necessite pas d&apos;inscription
              prealable. Le particulier remplit un formulaire de demande de
              devis en fournissant les informations necessaires : type de
              service, description du besoin, code postal et coordonnees.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Article 4 - Inscription des artisans
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Les artisans souhaitant recevoir des leads doivent s&apos;inscrire
              en fournissant leurs informations professionnelles (SIRET, zone
              d&apos;intervention, specialite). L&apos;inscription est soumise a
              validation par notre equipe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Article 5 - Tarification artisans
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Les artisans partenaires paient pour chaque lead recu. Le prix du
              lead varie de 20 a 80 EUR selon le type de prestation. Chaque lead
              est envoye a un maximum de 3 artisans.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Article 6 - Protection des donnees
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Les donnees personnelles collectees sont traitees conformement au
              RGPD. Les coordonnees des particuliers sont transmises uniquement
              aux artisans selectionnes pour le devis. Pour plus
              d&apos;informations, consultez nos mentions legales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Article 7 - Responsabilite
            </h2>
            <p className="text-gray-700 leading-relaxed">
              DevisPro agit exclusivement en tant qu&apos;intermediaire. Nous ne
              sommes pas responsables de la qualite des travaux realises, des
              retards, ou de tout litige entre le particulier et l&apos;artisan.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Article 8 - Droit applicable
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Les presentes CGU sont soumises au droit francais. Tout litige
              relatif a l&apos;interpretation ou a l&apos;execution des
              presentes sera soumis aux tribunaux competents.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
