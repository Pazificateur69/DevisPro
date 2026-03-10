export interface HelpArticle {
  slug: string;
  title: string;
  category: string;
  content: string;
  relatedArticles: string[];
}

export const helpArticles: HelpArticle[] = [
  {
    slug: "comment-choisir-un-artisan",
    title: "Comment choisir le bon artisan ?",
    category: "Choisir un artisan",
    content:
      "Choisir le bon artisan est essentiel pour la reussite de vos travaux. Voici les criteres a verifier avant de vous engager :\n\n1. Verifiez l'immatriculation de l'entreprise (numero SIRET) sur le site de l'INSEE ou societe.com.\n\n2. Demandez a voir l'attestation d'assurance responsabilite civile professionnelle et, pour les gros travaux, l'assurance decennale. Ces documents doivent etre a jour.\n\n3. Comparez plusieurs devis (au minimum 2 ou 3) pour le meme projet. Un devis doit etre detaille : description precise des travaux, materiaux utilises, delais, prix unitaires et prix total TTC.\n\n4. Renseignez-vous sur la reputation du professionnel : avis en ligne, bouche-a-oreille, references de chantiers precedents.\n\n5. Privilegiez les artisans disposant de certifications reconnues (RGE pour la renovation energetique, Qualibat, Qualifelec, etc.).\n\n6. Mefiez-vous des prix anormalement bas, des demandes d'acompte excessives (plus de 30% du montant total) et des artisans qui refusent de fournir un devis ecrit.",
    relatedArticles: ["comprendre-un-devis", "verifier-assurance-artisan"],
  },
  {
    slug: "eviter-les-arnaques",
    title: "Comment eviter les arnaques aux travaux ?",
    category: "Securite",
    content:
      "Les arnaques dans le secteur du batiment existent et il est important de savoir s'en premunir. Voici les signaux d'alerte et les bonnes pratiques :\n\nSignaux d'alerte :\n- Un artisan qui se presente a votre porte sans que vous l'ayez sollicite (demarchage abusif).\n- Un prix anormalement bas par rapport aux autres devis recus.\n- L'absence de devis ecrit ou un devis trop vague (sans detail des prestations).\n- Une demande de paiement en especes ou d'un acompte superieur a 30%.\n- L'impossibilite de fournir un numero SIRET ou une attestation d'assurance.\n- Une pression pour signer immediatement (offre limitee dans le temps, remise exceptionnelle).\n\nBonnes pratiques :\n- Ne signez jamais un document sous la pression. Vous disposez d'un delai de retractation de 14 jours pour tout contrat signe hors etablissement (a domicile).\n- Verifiez systematiquement le numero SIRET de l'entreprise.\n- Exigez un devis ecrit detaille avant tout commencement de travaux.\n- Ne payez jamais la totalite avant la fin des travaux.\n- Conservez tous les documents (devis, factures, echanges ecrits).",
    relatedArticles: ["comment-choisir-un-artisan", "droits-consommateur-travaux"],
  },
  {
    slug: "que-faire-en-cas-urgence",
    title: "Que faire en cas d'urgence (fuite, panne) ?",
    category: "Pratique",
    content:
      "Face a une urgence domestique (fuite d'eau importante, panne de chauffage en hiver, canalisation bouchee), voici les etapes a suivre :\n\n1. Securisez les lieux : en cas de fuite d'eau, coupez l'arrivee d'eau generale. En cas de fuite de gaz, coupez le gaz, aerez et quittez les lieux sans actionner d'interrupteur electrique. En cas de probleme electrique, coupez le disjoncteur general.\n\n2. Contactez les secours si necessaire : appelez les pompiers (18) ou le numero d'urgence europeen (112) en cas de danger immediat pour les personnes.\n\n3. Prenez des photos des degats pour votre dossier d'assurance avant toute intervention.\n\n4. Faites appel a un professionnel : utilisez notre service pour recevoir des devis d'artisans qualifies qui peuvent intervenir rapidement dans votre secteur.\n\n5. Declarez le sinistre a votre assurance dans un delai de 5 jours ouvrables (2 jours pour un vol). Remplissez un constat amiable si d'autres parties sont concernees (degat des eaux chez un voisin).\n\n6. Conservez les factures de reparation pour le remboursement par l'assurance.",
    relatedArticles: ["comprendre-un-devis", "garantie-decennale"],
  },
  {
    slug: "comprendre-un-devis",
    title: "Comment comprendre et analyser un devis ?",
    category: "Pratique",
    content:
      "Un devis est un document contractuel qui engage l'artisan une fois signe. Voici les elements essentiels a verifier :\n\nMentions obligatoires :\n- La date du devis et sa duree de validite.\n- Les coordonnees completes de l'entreprise (nom, adresse, SIRET, numero d'assurance).\n- Le nom et l'adresse du client.\n- La description detaillee des travaux a realiser.\n- Les materiaux utilises (marque, reference, quantite).\n- Le prix unitaire HT et TTC de chaque prestation.\n- Le montant total HT et TTC.\n- Le taux de TVA applique.\n- Les conditions de paiement (echeancier, acompte).\n- La mention manuscrite 'Devis recu avant l'execution des travaux' avec la date et la signature du client.\n\nConseils pour analyser un devis :\n- Comparez les devis poste par poste, pas uniquement le prix total.\n- Verifiez que les materiaux sont clairement identifies (pas de mention vague comme 'fournitures').\n- Assurez-vous que les frais de deplacement sont mentionnes.\n- Verifiez la duree estimee des travaux.\n- Mefiez-vous des devis sans detail ou avec des montants forfaitaires non expliques.",
    relatedArticles: ["comment-choisir-un-artisan", "droits-consommateur-travaux"],
  },
  {
    slug: "verifier-assurance-artisan",
    title: "Comment verifier l'assurance d'un artisan ?",
    category: "Choisir un artisan",
    content:
      "Verifier l'assurance de votre artisan est une etape indispensable avant de lui confier des travaux. Voici comment proceder :\n\nAssurance responsabilite civile professionnelle (RC Pro) :\n- Demandez l'attestation d'assurance RC Pro en cours de validite.\n- Verifiez que les activites mentionnees couvrent bien les travaux prevus.\n- Notez le nom de la compagnie d'assurance et le numero de police.\n\nAssurance decennale (obligatoire pour les travaux de construction et de gros oeuvre) :\n- Demandez l'attestation d'assurance decennale.\n- Verifiez qu'elle couvre bien l'annee en cours et le type de travaux a realiser.\n- L'attestation doit mentionner les activites couvertes, la zone geographique et la periode de validite.\n\nComment verifier la validite :\n- Contactez directement la compagnie d'assurance mentionnee sur l'attestation pour confirmer que le contrat est toujours en vigueur.\n- Verifiez que l'attestation n'est pas un faux : les fautes d'orthographe, l'absence de logo ou de numero de police sont des signaux d'alerte.\n\nEn cas de sinistre, c'est l'assurance decennale de l'artisan qui prendra en charge les reparations pendant 10 ans. Sans cette assurance, vous n'aurez aucun recours financier.",
    relatedArticles: ["comment-choisir-un-artisan", "garantie-decennale"],
  },
  {
    slug: "droits-consommateur-travaux",
    title: "Vos droits en tant que consommateur pour des travaux",
    category: "Securite",
    content:
      "En tant que consommateur, vous beneficiez de droits specifiques lorsque vous faites realiser des travaux. Voici les principaux :\n\nDroit de retractation :\n- Pour tout contrat signe hors etablissement (a domicile, sur un salon), vous disposez d'un delai de retractation de 14 jours calendaires a compter de la signature.\n- Aucun paiement ne peut etre exige pendant les 7 premiers jours suivant la signature.\n- Ce delai ne s'applique pas aux travaux d'urgence demandes par le consommateur.\n\nObligation de devis :\n- Un devis detaille est obligatoire pour tout travaux d'un montant superieur a 150 euros.\n- Le devis doit comporter toutes les mentions legales obligatoires.\n- Le professionnel ne peut pas facturer de frais pour l'etablissement d'un devis sauf si cela a ete prealablement convenu.\n\nGaranties legales :\n- Garantie de parfait achevement (1 an) : l'artisan doit reparer tous les desordres signales dans l'annee suivant la reception des travaux.\n- Garantie biennale (2 ans) : couvre les elements d'equipement dissociables (robinetterie, radiateurs, volets).\n- Garantie decennale (10 ans) : couvre les dommages compromettant la solidite de l'ouvrage.\n\nRecours :\n- En cas de litige, tentez d'abord un reglement amiable (lettre recommandee).\n- Si le litige persiste, saisissez le mediateur de la consommation ou la DDPP (Direction Departementale de la Protection des Populations).",
    relatedArticles: ["comprendre-un-devis", "reclamation-travaux-mal-faits"],
  },
  {
    slug: "reclamation-travaux-mal-faits",
    title: "Que faire en cas de travaux mal realises ?",
    category: "Securite",
    content:
      "Si les travaux realises par un artisan ne sont pas conformes au devis ou presentent des malfacons, voici les demarches a suivre :\n\n1. Signalez les defauts immediatement : lors de la reception des travaux, notez toutes les reserves (defauts, non-conformites) sur le proces-verbal de reception. Si les defauts apparaissent apres la reception, signalez-les par lettre recommandee avec accuse de reception.\n\n2. Mettez en demeure l'artisan : envoyez un courrier recommande detaillant les defauts constates et demandant leur reparation dans un delai raisonnable. Conservez une copie de tous les echanges.\n\n3. Faites constater les malfacons : en cas de desaccord, faites appel a un expert independant qui pourra evaluer les defauts et leur origine. Le rapport d'expertise servira de preuve en cas de procedure.\n\n4. Activez les garanties :\n- Garantie de parfait achevement (1 an) pour tous les desordres.\n- Garantie biennale (2 ans) pour les equipements.\n- Garantie decennale (10 ans) pour les dommages structurels.\n\n5. Saisissez un mediateur : si le dialogue est rompu, saisissez le mediateur de la consommation dont depend l'artisan (ses coordonnees doivent figurer sur le devis ou la facture).\n\n6. En dernier recours, saisissez le tribunal competent (tribunal de proximite pour les litiges inferieurs a 10 000 euros, tribunal judiciaire au-dela).",
    relatedArticles: ["droits-consommateur-travaux", "garantie-decennale"],
  },
  {
    slug: "garantie-decennale",
    title: "Tout savoir sur la garantie decennale",
    category: "Choisir un artisan",
    content:
      "La garantie decennale est l'une des protections les plus importantes dont vous beneficiez en tant que maitre d'ouvrage. Voici ce qu'il faut savoir :\n\nDefinition :\nLa garantie decennale est une assurance obligatoire qui couvre pendant 10 ans apres la reception des travaux les dommages qui compromettent la solidite de l'ouvrage ou le rendent impropre a sa destination.\n\nTravaux concernes :\n- Gros oeuvre (fondations, murs porteurs, charpente, toiture).\n- Etancheite (toiture, facades, sous-sol).\n- Elements indissociables du bati (canalisations encastrees, chauffage central).\n- Tout equipement dont le dysfonctionnement rend l'ouvrage impropre a sa destination.\n\nDommages couverts :\n- Fissures importantes dans les murs porteurs.\n- Affaissement de la dalle ou des fondations.\n- Infiltrations d'eau liees a un defaut de construction.\n- Defaut d'isolation rendant le logement inhabitable.\n\nComment faire jouer la garantie :\n1. Envoyez une lettre recommandee a l'artisan decrivant les desordres.\n2. Si l'artisan ne repond pas ou conteste, contactez directement sa compagnie d'assurance decennale.\n3. Un expert sera mandate pour evaluer les dommages.\n4. Les reparations seront prises en charge par l'assurance.\n\nPoint important : conservez precieusement l'attestation d'assurance decennale de votre artisan et le proces-verbal de reception des travaux.",
    relatedArticles: ["verifier-assurance-artisan", "reclamation-travaux-mal-faits"],
  },
];

export function getArticleBySlug(slug: string): HelpArticle | undefined {
  return helpArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): HelpArticle[] {
  return helpArticles.filter((a) => a.category === category);
}
