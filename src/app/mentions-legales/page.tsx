import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions legales",
  description: "Mentions legales du site DevisPro",
};

export default function MentionsLegalesPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Mentions legales
        </h1>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Editeur du site
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Le site DevisPro est edite par [Nom de la societe], [forme
              juridique] au capital de [montant] euros, immatriculee au RCS de
              [ville] sous le numero [numero RCS].
            </p>
            <p className="text-gray-700 leading-relaxed">
              Siege social : [Adresse complete]
              <br />
              Telephone : [Numero]
              <br />
              Email : contact@devispro.fr
              <br />
              Directeur de la publication : [Nom du directeur]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Hebergement
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Le site est heberge par Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, Etats-Unis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Propriete intellectuelle
            </h2>
            <p className="text-gray-700 leading-relaxed">
              L&apos;ensemble des contenus du site DevisPro (textes, images,
              graphismes, logo, icones, etc.) est protege par le droit
              d&apos;auteur et le droit des marques. Toute reproduction ou
              representation, totale ou partielle, est interdite sans
              autorisation prealable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Donnees personnelles
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Conformement a la loi Informatique et Libertes du 6 janvier 1978
              modifiee et au Reglement General sur la Protection des Donnees
              (RGPD), vous disposez d&apos;un droit d&apos;acces, de
              rectification, de suppression et d&apos;opposition sur vos
              donnees personnelles.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Les donnees collectees via les formulaires du site sont destinees
              exclusivement a la mise en relation avec des artisans partenaires.
              Elles ne sont jamais revendues a des tiers non partenaires.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Pour exercer vos droits, contactez-nous a l&apos;adresse :
              rgpd@devispro.fr
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Le site DevisPro utilise des cookies techniques necessaires au
              fonctionnement du site et des cookies d&apos;analyse pour mesurer
              l&apos;audience. Vous pouvez configurer votre navigateur pour
              refuser les cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Responsabilite
            </h2>
            <p className="text-gray-700 leading-relaxed">
              DevisPro agit en tant qu&apos;intermediaire de mise en relation.
              Nous ne sommes pas partie prenante des contrats conclus entre les
              particuliers et les artisans. Nous ne garantissons pas la qualite
              des prestations realisees par les artisans partenaires.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
