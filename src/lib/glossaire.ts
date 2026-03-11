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
  {
    slug: "artisan-rge",
    term: "Artisan RGE",
    definition:
      "Un artisan RGE (Reconnu Garant de l'Environnement) est un professionnel du batiment qui a obtenu une certification attestant de sa competence en matiere de travaux de renovation energetique. Cette certification, delivree par des organismes agrees (Qualibat, Qualit'EnR, Qualifelec), est obligatoire pour que le client puisse beneficier des aides financieres de l'Etat (MaPrimeRenov, CEE, eco-PTZ). La certification RGE doit etre renouvelee tous les 4 ans apres un audit de chantier.",
    relatedTerms: ["maprimerenov", "cee", "audit-energetique"],
  },
  {
    slug: "devis-travaux",
    term: "Devis travaux",
    definition:
      "Le devis travaux est un document ecrit par lequel un professionnel du batiment propose a un client une prestation detaillee avec son prix. Il doit mentionner la date, l'identite du professionnel, la description detaillee des travaux, les materiaux utilises, le prix unitaire et global HT et TTC, la duree de validite et les conditions de paiement. Le devis est obligatoire pour tout travail dont le montant depasse 150 EUR. Une fois signe, il vaut contrat et engage les deux parties.",
    relatedTerms: ["assurance-decennale", "artisan-rge"],
  },
  {
    slug: "garantie-biennale",
    term: "Garantie biennale",
    definition:
      "La garantie biennale (ou garantie de bon fonctionnement) couvre pendant 2 ans apres la reception des travaux les desordres affectant les elements d'equipement dissociables du batiment. Cela concerne par exemple les volets roulants, la robinetterie, les radiateurs, les portes interieures, les equipements de cuisine et de salle de bain. Elle est definie par l'article 1792-3 du Code civil et se distingue de la garantie decennale qui couvre les elements structurels.",
    relatedTerms: ["assurance-decennale", "garantie-de-parfait-achevement"],
  },
  {
    slug: "norme-rt-2012",
    term: "Norme RT 2012",
    definition:
      "La RT 2012 (Reglementation Thermique 2012) est l'ancienne norme de performance energetique applicable aux constructions neuves, en vigueur du 1er janvier 2013 au 31 decembre 2021. Elle imposait une consommation maximale d'energie primaire de 50 kWh/m2/an en moyenne et une etancheite a l'air renforcee. Depuis le 1er janvier 2022, elle a ete remplacee par la RE 2020, plus exigeante en matiere de performance energetique et d'empreinte carbone.",
    relatedTerms: ["rt2020", "dpe", "isolation-thermique"],
  },
  {
    slug: "permis-de-construire",
    term: "Permis de construire",
    definition:
      "Le permis de construire est une autorisation d'urbanisme delivree par la mairie, obligatoire pour les constructions neuves de plus de 20 m2 de surface de plancher et pour les travaux modifiant la structure ou la destination d'un batiment existant. Le delai d'instruction est de 2 mois pour une maison individuelle et de 3 mois en secteur protege. Le recours a un architecte est obligatoire lorsque la surface de plancher totale depasse 150 m2.",
    relatedTerms: ["declaration-prealable-de-travaux", "ccmi"],
  },
  {
    slug: "declaration-prealable-de-travaux",
    term: "Declaration prealable de travaux",
    definition:
      "La declaration prealable de travaux (DP) est une autorisation d'urbanisme simplifiee, requise pour les travaux de faible ampleur qui ne necessitent pas un permis de construire. Elle concerne notamment les extensions de 5 a 20 m2 (ou 40 m2 en zone PLU), les modifications d'aspect exterieur (fenetres, ravalement, cloture), et les changements de destination sans modification de structure. Le delai d'instruction est d'un mois. Le formulaire CERFA 13703 est a deposer en mairie.",
    relatedTerms: ["permis-de-construire"],
  },
  {
    slug: "amiante",
    term: "Amiante",
    definition:
      "L'amiante est un materiau fibreux naturel autrefois tres utilise dans le batiment pour ses proprietes isolantes et ignifuges (toitures, calorifugeages, dalles de sol, flocages). Interdit en France depuis 1997 en raison de sa dangerosite pour la sante (cancers, asbestose), il reste present dans de nombreux batiments construits avant cette date. Un diagnostic amiante est obligatoire avant toute vente ou travaux dans un immeuble construit avant juillet 1997. Le desamiantage doit etre realise par une entreprise certifiee.",
    relatedTerms: ["diagnostic-immobilier"],
  },
  {
    slug: "termites",
    term: "Termites",
    definition:
      "Les termites sont des insectes xylophages qui se nourrissent du bois et peuvent causer des degats importants aux structures des batiments (charpentes, planchers, menuiseries). En France, certaines zones sont classees comme infestees par arrete prefectoral. Dans ces zones, un diagnostic termites est obligatoire avant toute vente immobiliere. Le traitement anti-termites peut etre preventif (barrieres chimiques, pieges) ou curatif (injection de produits dans le bois et le sol).",
    relatedTerms: ["diagnostic-immobilier"],
    relatedServiceSlug: "traitement-nuisibles",
  },
  {
    slug: "radon",
    term: "Radon",
    definition:
      "Le radon est un gaz radioactif naturel inodore et incolore qui provient de la desintegration de l'uranium present dans le sol et les roches. Il peut s'infiltrer dans les batiments par les fissures, les joints et les passages de canalisations, et s'accumuler a des concentrations dangereuses pour la sante (risque de cancer du poumon). Certaines zones geographiques sont plus exposees (Bretagne, Massif Central, Vosges). Des solutions existent : ventilation, etancheification du sol et des murs enterres.",
    relatedTerms: ["diagnostic-immobilier", "vmc"],
  },
  {
    slug: "plancher-chauffant",
    term: "Plancher chauffant",
    definition:
      "Le plancher chauffant est un systeme de chauffage integre dans la dalle du sol, qui diffuse une chaleur douce et homogene par rayonnement. Il existe en version hydraulique (circulation d'eau chaude dans des tubes) ou electrique (cables ou trames chauffantes). Le plancher chauffant basse temperature (eau a 30-40 degres) est compatible avec une pompe a chaleur et offre un excellent confort. Il peut etre reversible et assurer le rafraichissement en ete.",
    relatedTerms: ["pompe-a-chaleur", "isolation-thermique"],
  },
  {
    slug: "chape",
    term: "Chape",
    definition:
      "La chape est une couche de mortier (ciment ou anhydrite) coulee sur la dalle brute pour obtenir une surface plane et lisse, prete a recevoir un revetement de sol (carrelage, parquet, moquette). L'epaisseur courante est de 3 a 6 cm. La chape peut etre adherente (collee a la dalle), desolidarisee (sur un film polyane) ou flottante (sur un isolant). La chape fluide autonivelante est de plus en plus utilisee car elle assure une planeite parfaite et se coule rapidement.",
    relatedTerms: ["plancher-chauffant"],
    relatedServiceSlug: "pose-carrelage",
  },
  {
    slug: "placo-ba13",
    term: "Placo (BA13)",
    definition:
      "Le placo (ou BA13) est le nom courant des plaques de platre de 13 mm d'epaisseur, utilisees pour la construction de cloisons, de doublages et de faux plafonds. BA signifie 'bords amincis', qui facilitent la realisation de joints lisses. Il existe plusieurs types de placo : standard (blanc), hydrofuge (vert, pour pieces humides), phonique (bleu, isolation acoustique), coupe-feu (rose) et haute durete (jaune, pour les zones de passage). Le placo se fixe sur une ossature metallique.",
    relatedTerms: [],
    relatedServiceSlug: "plaquisterie-cloisons",
  },
  {
    slug: "enduit",
    term: "Enduit",
    definition:
      "L'enduit est un revetement applique sur les murs interieurs ou exterieurs pour les proteger, les impermeabiliser et les decorer. Il en existe plusieurs types : l'enduit de facade (monocouche, traditionnel, a la chaux ou au ciment), l'enduit interieur de lissage (pour preparer un mur avant peinture), l'enduit de rebouchage (pour combler les trous et fissures) et l'enduit decoratif (stuc, tadelakt, beton cire). L'enduit se distingue de la peinture par son epaisseur et sa texture.",
    relatedTerms: [],
    relatedServiceSlug: "ravalement-facade",
  },
  {
    slug: "gouttiere",
    term: "Gouttiere",
    definition:
      "La gouttiere est un element de zinguerie fixe en bas de pente de la toiture, destine a collecter les eaux de pluie et a les conduire vers les descentes pluviales. Elle protege les facades et les fondations contre les infiltrations d'eau. Les materiaux courants sont le zinc (durable, 30-50 ans), le PVC (economique, 15-25 ans), l'aluminium (leger et resistant) et le cuivre (noble et tres durable). L'entretien des gouttieres (nettoyage des feuilles, verification des fixations) doit etre effectue au moins une fois par an.",
    relatedTerms: ["ramonage"],
    relatedServiceSlug: "couverture-toiture",
  },
  {
    slug: "fosse-septique",
    term: "Fosse septique",
    definition:
      "La fosse septique (ou fosse toutes eaux) est un dispositif d'assainissement individuel qui traite les eaux usees domestiques dans les zones non raccordees au tout-a-l'egout. Elle recoit les eaux menageres et les eaux-vannes, separe les matieres solides par decantation et amorce un traitement biologique par des bacteries anaerobies. La fosse doit etre vidangee tous les 3 a 4 ans par un professionnel agree. Un diagnostic assainissement est obligatoire lors de la vente d'un bien non raccorde.",
    relatedTerms: ["assainissement"],
  },
  {
    slug: "assainissement",
    term: "Assainissement",
    definition:
      "L'assainissement designe l'ensemble des techniques de collecte et de traitement des eaux usees (eaux menageres et eaux-vannes). On distingue l'assainissement collectif (tout-a-l'egout, raccordement au reseau public) et l'assainissement non collectif ou autonome (fosse septique, micro-station d'epuration, filtre compact). Le SPANC (Service Public d'Assainissement Non Collectif) controle les installations individuelles. La mise aux normes est obligatoire en cas de non-conformite et lors de la vente.",
    relatedTerms: ["fosse-septique", "certificat-de-conformite"],
  },
  {
    slug: "dtu",
    term: "DTU (Document Technique Unifie)",
    definition:
      "Le DTU (Document Technique Unifie) est un ensemble de normes et de regles de l'art qui definissent les conditions de mise en oeuvre des materiaux et des techniques de construction en France. Chaque corps de metier a ses DTU : couverture (DTU 40), maconnerie (DTU 20), plomberie (DTU 60), carrelage (DTU 52.1), platrerie (DTU 25.41), etc. Le respect des DTU est essentiel car il conditionne la validite de l'assurance decennale. Un artisan qui ne respecte pas les DTU engage sa responsabilite.",
    relatedTerms: ["assurance-decennale", "norme-nfc-15-100"],
  },
  {
    slug: "coefficient-u",
    term: "Coefficient U (thermique)",
    definition:
      "Le coefficient U (ou coefficient de transmission thermique) mesure la quantite de chaleur qui traverse une paroi par unite de surface et par degre de difference de temperature entre l'interieur et l'exterieur. Il s'exprime en W/m2.K. Plus le coefficient U est faible, plus la paroi est isolante. Pour les fenetres, on parle de Uw (window) : un double vitrage performant a un Uw de 1,2 a 1,4, un triple vitrage de 0,6 a 0,8. La resistance thermique R est l'inverse de U : R = 1/U.",
    relatedTerms: ["isolation-thermique", "dpe", "rt2020"],
  },
  {
    slug: "ccmi",
    term: "CCMI (Contrat de Construction de Maison Individuelle)",
    definition:
      "Le CCMI est un contrat reglemente par la loi du 19 decembre 1990 qui encadre strictement la construction de maisons individuelles. Il offre des protections importantes au maitre d'ouvrage : prix ferme et definitif, delai de livraison garanti, garantie de livraison par un organisme financier, penalites de retard, assurance dommages-ouvrage obligatoire, et delai de retractation de 10 jours. Le constructeur doit fournir une garantie de livraison a prix et delais convenus.",
    relatedTerms: ["assurance-decennale", "permis-de-construire", "garantie-de-parfait-achevement"],
  },
  {
    slug: "consuel",
    term: "Consuel",
    definition:
      "Le Consuel (Comite National pour la Securite des Usagers de l'Electricite) est l'organisme charge de delivrer l'attestation de conformite des installations electriques neuves ou entierement renovees. Cette attestation est obligatoire pour obtenir la mise en service de l'electricite par Enedis. Un inspecteur du Consuel verifie que l'installation est conforme a la norme NF C 15-100. En cas de non-conformite, le proprietaire doit effectuer les corrections et demander une contre-visite.",
    relatedTerms: ["norme-nfc-15-100", "certificat-de-conformite"],
    relatedServiceSlug: "depannage-electrique",
  },
  {
    slug: "garantie-de-parfait-achevement",
    term: "Garantie de parfait achevement",
    definition:
      "La garantie de parfait achevement (GPA) est une garantie legale qui oblige l'entrepreneur a reparer tous les desordres signales dans l'annee qui suit la reception des travaux, quels qu'ils soient (defauts de conformite, malfacons, vices apparents ou caches). Elle est definie par l'article 1792-6 du Code civil. Le maitre d'ouvrage doit notifier les desordres par lettre recommandee avec accuse de reception. En cas de refus de l'entrepreneur, le tribunal peut etre saisi.",
    relatedTerms: ["assurance-decennale", "garantie-biennale"],
  },
  {
    slug: "obligation-de-resultat",
    term: "Obligation de resultat",
    definition:
      "En droit de la construction, l'obligation de resultat impose a l'entrepreneur de livrer un ouvrage conforme au contrat et exempt de defauts. Contrairement a l'obligation de moyens, l'artisan ne peut pas se degager de sa responsabilite en prouvant qu'il a fait de son mieux : il doit atteindre le resultat promis. Cette obligation couvre la conformite aux plans, le respect des normes et DTU, et la bonne execution des travaux. En cas de defaut, la charge de la preuve incombe a l'entrepreneur.",
    relatedTerms: ["assurance-decennale", "dtu", "devis-travaux"],
  },
  {
    slug: "maitre-d-oeuvre",
    term: "Maitre d'oeuvre",
    definition:
      "Le maitre d'oeuvre est la personne physique ou morale chargee de concevoir le projet de construction ou de renovation, de coordonner les travaux et de controler leur bonne execution. Il peut s'agir d'un architecte, d'un bureau d'etudes, d'un economiste de la construction ou d'un artisan. Le maitre d'oeuvre agit pour le compte du maitre d'ouvrage (le client) et est son interlocuteur principal pendant toute la duree du chantier. Ses honoraires representent generalement 8 a 15% du montant des travaux.",
    relatedTerms: ["permis-de-construire", "ccmi"],
  },
  {
    slug: "sous-traitance-btp",
    term: "Sous-traitance BTP",
    definition:
      "La sous-traitance dans le BTP designe la situation ou un entrepreneur principal confie a une autre entreprise (le sous-traitant) l'execution d'une partie des travaux prevus dans son marche. La loi du 31 decembre 1975 encadre strictement la sous-traitance : le sous-traitant doit etre agree par le maitre d'ouvrage, il beneficie d'un droit de paiement direct pour les marches publics, et l'entrepreneur principal reste responsable de la qualite des travaux sous-traites vis-a-vis du client.",
    relatedTerms: ["assurance-decennale", "obligation-de-resultat"],
  },
];

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}
