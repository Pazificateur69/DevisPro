import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Renov Habitation",
};

export default function MentionsLegalesPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Mentions légales
        </h1>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Éditeur du site
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Le site Renov Habitation est édité par [Nom de la société], [forme
              juridique] au capital de [montant] euros, immatriculée au RCS de
              [ville] sous le numéro [numéro RCS].
            </p>
            <p className="text-gray-700 leading-relaxed">
              Siège social : [Adresse complète]
              <br />
              Téléphone : [Numéro]
              <br />
              Email : contact@renov-habitation.fr
              <br />
              Directeur de la publication : [Nom du directeur]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Hébergement
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, États-Unis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Propriété intellectuelle
            </h2>
            <p className="text-gray-700 leading-relaxed">
              L&apos;ensemble des contenus du site Renov Habitation (textes, images,
              graphismes, logo, icônes, etc.) est protégé par le droit
              d&apos;auteur et le droit des marques. Toute reproduction ou
              représentation, totale ou partielle, est interdite sans
              autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Données personnelles
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Conformément à la loi Informatique et Libertés du 6 janvier 1978
              modifiée et au Règlement Général sur la Protection des Données
              (RGPD), vous disposez d&apos;un droit d&apos;accès, de
              rectification, de suppression et d&apos;opposition sur vos
              données personnelles.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Les données collectées via les formulaires du site sont destinées
              exclusivement à la mise en relation avec des artisans partenaires.
              Elles ne sont jamais revendues à des tiers non partenaires.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Pour exercer vos droits, contactez-nous à l&apos;adresse :
              rgpd@renov-habitation.fr
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Le site Renov Habitation utilise des cookies techniques nécessaires au
              fonctionnement du site et des cookies d&apos;analyse pour mesurer
              l&apos;audience. Vous pouvez configurer votre navigateur pour
              refuser les cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Responsabilité
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Renov Habitation agit en tant qu&apos;intermédiaire de mise en relation.
              Nous ne sommes pas partie prenante des contrats conclus entre les
              particuliers et les artisans. Nous ne garantissons pas la qualité
              des prestations réalisées par les artisans partenaires.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
