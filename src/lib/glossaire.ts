export interface GlossaryTerm {
  slug: string;
  term: string;
  definition: string;
  relatedTerms: string[];
  relatedServiceSlug?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "assurance-decennale",
    term: "Assurance decennale",
    definition:
      "L'assurance decennale (ou garantie decennale) est une assurance obligatoire pour tous les professionnels du batiment en France. Elle couvre pendant 10 ans apres la reception des travaux les dommages qui compromettent la solidite de l'ouvrage ou le rendent impropre a sa destination. Elle est regie par les articles 1792 et suivants du Code civil. Avant de confier des travaux a un artisan, il est essentiel de verifier qu'il possede bien cette assurance en demandant son attestation.",
    relatedTerms: ["certificat-de-conformite", "diagnostic-immobilier"],
  },
  {
    slug: "audit-energetique",
    term: "Audit energetique",
    definition:
      "L'audit energetique est une etude approfondie de la performance energetique d'un batiment. Il analyse l'isolation, le systeme de chauffage, la ventilation et les equipements consommateurs d'energie. L'audit propose des scenarios de travaux de renovation energetique hierarchises, avec une estimation des couts et des economies d'energie attendues. Depuis avril 2023, il est obligatoire pour la vente de logements classes F ou G au DPE.",
    relatedTerms: ["dpe", "isolation-thermique", "cee"],
  },
  {
    slug: "cee",
    term: "Certificats d'economies d'energie (CEE)",
    definition:
      "Les Certificats d'Economies d'Energie (CEE) sont un dispositif mis en place par l'Etat pour encourager les economies d'energie. Les fournisseurs d'energie (obligees) doivent inciter leurs clients a realiser des travaux de renovation energetique en proposant des primes, des bons d'achat ou des prets bonifies. Les travaux eligibles incluent l'isolation, le changement de chauffage et l'installation d'equipements performants. Les travaux doivent etre realises par un professionnel RGE.",
    relatedTerms: ["audit-energetique", "isolation-thermique", "maprimerenov"],
  },
  {
    slug: "certificat-de-conformite",
    term: "Certificat de conformite",
    definition:
      "Le certificat de conformite est un document attestant qu'une installation (electrique, gaz, assainissement) est conforme aux normes en vigueur. Il est delivre par un organisme de controle agree apres verification de l'installation. Pour l'electricite, il est delivre par le Consuel. Ce document est souvent exige pour le raccordement au reseau ou lors de la vente d'un bien immobilier.",
    relatedTerms: ["norme-nfc-15-100", "diagnostic-immobilier"],
  },
  {
    slug: "degat-des-eaux",
    term: "Degat des eaux",
    definition:
      "Un degat des eaux designe tout dommage cause par l'action de l'eau suite a une fuite, un debordement, une infiltration ou une rupture de canalisation. En cas de sinistre, le proprietaire ou le locataire doit remplir un constat amiable de degat des eaux et le transmettre a son assurance dans un delai de 5 jours ouvrables. Une recherche de fuite professionnelle peut etre necessaire pour localiser l'origine du sinistre.",
    relatedTerms: ["assurance-decennale"],
    relatedServiceSlug: "recherche-fuite-eau",
  },
  {
    slug: "diagnostic-immobilier",
    term: "Diagnostic immobilier",
    definition:
      "Le diagnostic immobilier regroupe l'ensemble des controles techniques obligatoires lors de la vente ou de la location d'un bien immobilier. Il inclut notamment le DPE (diagnostic de performance energetique), le diagnostic amiante, le diagnostic plomb (CREP), le diagnostic termites, l'etat de l'installation electrique et gaz, et l'etat des risques et pollutions (ERP). Ces diagnostics doivent etre realises par un diagnostiqueur certifie.",
    relatedTerms: ["dpe", "plomb-diagnostic", "assurance-decennale"],
  },
  {
    slug: "dpe",
    term: "Diagnostic de performance energetique (DPE)",
    definition:
      "Le DPE (Diagnostic de Performance Energetique) est un document obligatoire qui evalue la consommation d'energie et les emissions de gaz a effet de serre d'un logement. Il attribue une note de A (tres performant) a G (tres enerEgivore). Depuis la reforme de juillet 2021, le DPE est devenu opposable juridiquement. Les logements classes F ou G sont progressivement interdits a la location. Le DPE est valable 10 ans et doit etre realise par un diagnostiqueur certifie.",
    relatedTerms: ["audit-energetique", "isolation-thermique", "diagnostic-immobilier"],
  },
  {
    slug: "fluide-frigorigene",
    term: "Fluide frigorigene",
    definition:
      "Le fluide frigorigene est un liquide utilise dans les circuits de climatisation et de pompes a chaleur pour transporter la chaleur. Les manipulations de fluides frigorigenes sont reglementees en raison de leur impact environnemental (certains sont des gaz a effet de serre puissants). Seuls les techniciens disposant d'une attestation de capacite delivree par un organisme agree peuvent intervenir sur ces equipements. Le controle d'etancheite est obligatoire.",
    relatedTerms: ["pompe-a-chaleur"],
    relatedServiceSlug: "entretien-pompe-chaleur",
  },
  {
    slug: "isolation-thermique",
    term: "Isolation thermique",
    definition:
      "L'isolation thermique consiste a reduire les transferts de chaleur entre l'interieur et l'exterieur d'un batiment a l'aide de materiaux isolants (laine de verre, laine de roche, polystyrene, ouate de cellulose, etc.). Elle peut concerner les murs (par l'interieur ou l'exterieur), la toiture, les planchers et les fenetres. Une bonne isolation permet de reduire significativement la consommation energetique et d'ameliorer le confort thermique. Elle est au coeur des dispositifs d'aide a la renovation energetique.",
    relatedTerms: ["dpe", "audit-energetique", "rt2020", "cee"],
  },
  {
    slug: "maprimerenov",
    term: "MaPrimeRenov'",
    definition:
      "MaPrimeRenov' est une aide financiere de l'Etat destinee a financer les travaux de renovation energetique des logements. Elle est accessible aux proprietaires occupants, bailleurs et coproprietaires, sous conditions de revenus. Le montant de l'aide varie selon les travaux realises et les ressources du menage. Les travaux doivent etre realises par un professionnel RGE (Reconnu Garant de l'Environnement). La demande se fait en ligne sur le site officiel avant le debut des travaux.",
    relatedTerms: ["cee", "audit-energetique", "isolation-thermique"],
  },
  {
    slug: "norme-nfc-15-100",
    term: "Norme NF C 15-100",
    definition:
      "La norme NF C 15-100 est la norme francaise qui regit les installations electriques basse tension dans les batiments d'habitation. Elle definit les regles de conception, de realisation et de verification des installations electriques pour garantir la securite des personnes et des biens. Elle impose notamment un nombre minimum de prises et de circuits par piece, la presence d'un disjoncteur differentiel, et des dispositions specifiques pour les salles d'eau.",
    relatedTerms: ["certificat-de-conformite", "diagnostic-immobilier"],
  },
  {
    slug: "plomb-diagnostic",
    term: "Diagnostic plomb (CREP)",
    definition:
      "Le Constat de Risque d'Exposition au Plomb (CREP) est un diagnostic obligatoire pour les logements construits avant le 1er janvier 1949. Il detecte la presence de plomb dans les peintures anciennes, qui peut presenter un risque sanitaire grave, notamment pour les enfants (saturnisme). Le diagnostic doit etre realise par un diagnostiqueur certifie. En cas de presence de plomb a des concentrations superieures au seuil reglementaire, des travaux de mise en securite sont obligatoires.",
    relatedTerms: ["diagnostic-immobilier", "assurance-decennale"],
  },
  {
    slug: "pompe-a-chaleur",
    term: "Pompe a chaleur (PAC)",
    definition:
      "La pompe a chaleur (PAC) est un systeme de chauffage qui puise les calories presentes dans l'environnement (air, eau, sol) pour les restituer a l'interieur du logement. Il existe plusieurs types de PAC : air-air, air-eau, eau-eau et geothermique. Les PAC air-eau sont les plus repandues. L'entretien annuel par un professionnel certifie est obligatoire pour les PAC contenant plus de 2 kg de fluide frigorigene. La PAC est eligible a de nombreuses aides financieres.",
    relatedTerms: ["fluide-frigorigene", "maprimerenov", "cee"],
    relatedServiceSlug: "entretien-pompe-chaleur",
  },
  {
    slug: "ramonage",
    term: "Ramonage",
    definition:
      "Le ramonage est l'operation de nettoyage des conduits de cheminee, de poele ou de chaudiere pour eliminer les depots de suie et de creosote. Le ramonage est une obligation legale en France : il doit etre effectue au minimum une fois par an (deux fois pour les conduits bois et charbon, dont une pendant la periode de chauffe, selon les reglements sanitaires departementaux). Seul un ramoneur professionnel peut delivrer le certificat de ramonage, document parfois exige par les assurances.",
    relatedTerms: ["certificat-de-conformite"],
    relatedServiceSlug: "ramonage-cheminee",
  },
  {
    slug: "rt2020",
    term: "RE 2020 (Reglementation Environnementale)",
    definition:
      "La RE 2020 (anciennement appelee RT 2020) est la reglementation environnementale applicable aux constructions neuves depuis le 1er janvier 2022. Elle remplace la RT 2012 et fixe des exigences renforcees en matiere de performance energetique, de confort d'ete et d'empreinte carbone des batiments. Elle impose notamment le recours aux energies renouvelables et encourage l'utilisation de materiaux biosources. Son objectif est d'atteindre des batiments a energie positive et faible empreinte carbone.",
    relatedTerms: ["dpe", "isolation-thermique", "audit-energetique"],
  },
  {
    slug: "vmc",
    term: "Ventilation Mecanique Controlee (VMC)",
    definition:
      "La VMC (Ventilation Mecanique Controlee) est un systeme de ventilation qui assure le renouvellement de l'air interieur d'un logement. Il existe deux types principaux : la VMC simple flux (extraction de l'air vicie dans les pieces humides) et la VMC double flux (qui recupere la chaleur de l'air extrait pour prechauffer l'air entrant). Une VMC bien entretenue est essentielle pour la qualite de l'air interieur, la prevention de l'humidite et des moisissures, et le confort thermique.",
    relatedTerms: ["isolation-thermique", "dpe", "rt2020"],
  },
];

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}
