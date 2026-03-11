import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation",
  description: "CGU du site Renov Habitation - Conditions d'utilisation du service de mise en relation avec des artisans.",
  alternates: {
    canonical: "/cgu",
  },
};

export default function CGUPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">
          Conditions Générales d&apos;Utilisation
        </h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Article 1 - Objet
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Les présentes Conditions Générales d&apos;Utilisation (CGU)
              régissent l&apos;utilisation du site Renov Habitation, service de mise en
              relation entre des particuliers ayant un besoin en travaux et des
              artisans qualifiés.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Article 2 - Service proposé
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Renov Habitation est un service gratuit pour les particuliers qui permet
              de recevoir jusqu&apos;à 3 devis d&apos;artisans qualifiés. Le
              service est accessible via le site internet et le formulaire de
              demande de devis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Article 3 - Inscription des particuliers
            </h2>
            <p className="text-slate-700 leading-relaxed">
              L&apos;utilisation du service ne nécessite pas d&apos;inscription
              préalable. Le particulier remplit un formulaire de demande de
              devis en fournissant les informations nécessaires : type de
              service, description du besoin, code postal et coordonnées.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Article 4 - Inscription des artisans
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Les artisans souhaitant recevoir des leads doivent s&apos;inscrire
              en fournissant leurs informations professionnelles (SIRET, zone
              d&apos;intervention, spécialité). L&apos;inscription est soumise à
              validation par notre équipe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Article 5 - Tarification artisans
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Les artisans partenaires paient pour chaque lead reçu. Le prix du
              lead varie de 20 à 80 € selon le type de prestation. Chaque lead
              est envoyé à un maximum de 3 artisans.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Article 6 - Protection des données
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Les données personnelles collectées sont traitées conformément au
              RGPD. Les coordonnées des particuliers sont transmises uniquement
              aux artisans sélectionnés pour le devis. Pour plus
              d&apos;informations, consultez nos mentions légales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Article 7 - Responsabilité
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Renov Habitation agit exclusivement en tant qu&apos;intermédiaire. Nous ne
              sommes pas responsables de la qualité des travaux réalisés, des
              retards, ou de tout litige entre le particulier et l&apos;artisan.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Article 8 - Droit applicable
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Les présentes CGU sont soumises au droit français. Tout litige
              relatif à l&apos;interprétation ou à l&apos;exécution des
              présentes sera soumis aux tribunaux compétents.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
