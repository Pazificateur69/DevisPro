export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  serviceSlug: string;
  publishedAt: string;
  content: string;
  faq: { question: string; answer: string }[];
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "prix-recherche-fuite-eau-2026",
    title: "Prix recherche fuite eau 2026 : guide complet des tarifs",
    metaDescription: "Combien coute une recherche de fuite d'eau en 2026 ? Tarifs par methode, facteurs de prix, prise en charge assurance. Guide complet.",
    excerpt: "Decouvrez tous les tarifs pour une recherche de fuite d'eau en 2026 : detection acoustique, camera thermique, gaz traceur.",
    category: "Prix travaux",
    serviceSlug: "recherche-fuite-eau",
    publishedAt: "2026-01-15",
    content: `La recherche de fuite d'eau est une prestation technique dont le prix varie selon plusieurs facteurs. En 2026, les tarifs ont legerement augmente par rapport aux annees precedentes en raison de l'evolution du cout des equipements professionnels.

Les differentes methodes de detection et leurs tarifs :

Detection par ecoute acoustique : 150 a 300 EUR. Cette methode utilise des capteurs ultra-sensibles pour localiser le bruit de l'eau qui s'echappe. Elle est particulierement efficace pour les canalisations enterrees.

Detection par camera thermique : 200 a 400 EUR. La camera infrarouge detecte les differences de temperature causees par la presence d'eau. Methode ideale pour les fuites dans les murs et les planchers.

Detection par gaz traceur : 250 a 500 EUR. Un gaz inoffensif est injecte dans la canalisation et detecte en surface. C'est la methode la plus precise pour les cas complexes.

Detection par fluoresceine : 150 a 250 EUR. Un colorant fluorescent est injecte dans l'eau pour visualiser son parcours et identifier le point de fuite.

Les facteurs qui influencent le prix final sont la surface a inspecter, l'accessibilite de la zone, la complexite de l'installation et la region geographique. Les tarifs sont generalement plus eleves en Ile-de-France et dans les grandes metropoles.

La prise en charge par l'assurance est possible dans le cadre d'un degat des eaux declare. La convention IRSI definit les regles de repartition des frais entre les differents assureurs concernes.

Pour obtenir le meilleur tarif, nous recommandons de comparer au moins 3 devis de professionnels differents. C'est exactement ce que Renov Habitation vous propose : recevez gratuitement 3 devis d'artisans qualifies pres de chez vous.`,
    faq: [
      { question: "Quel est le prix moyen d'une recherche de fuite en 2026 ?", answer: "Le prix moyen se situe entre 150 et 500 EUR selon la methode de detection utilisee. La detection acoustique est la moins couteuse, le gaz traceur la plus onereuse." },
      { question: "L'assurance prend-elle en charge les frais ?", answer: "Dans le cadre d'un degat des eaux declare, votre assurance habitation peut couvrir tout ou partie des frais de recherche de fuite selon votre contrat." },
    ],
    keywords: ["prix recherche fuite eau 2026", "tarif detection fuite", "cout recherche fuite"],
  },
  {
    slug: "volet-roulant-bloque-que-faire",
    title: "Volet roulant bloque : que faire ? Guide depannage complet",
    metaDescription: "Volet roulant bloque en position haute ou basse ? Causes, solutions et depannage. Guide pratique pour debloquer votre volet roulant.",
    excerpt: "Votre volet roulant refuse de bouger ? Decouvrez les causes possibles et les solutions pour le debloquer rapidement.",
    category: "Depannage",
    serviceSlug: "reparation-volets-roulants",
    publishedAt: "2026-02-01",
    content: `Un volet roulant bloque est l'une des pannes domestiques les plus frequentes. Qu'il soit manuel ou electrique, plusieurs causes peuvent expliquer ce dysfonctionnement.

Les causes d'un volet roulant bloque :

Pour les volets electriques : panne de courant ou disjoncteur saute, telecommande defaillante ou piles usees, moteur en fin de vie, condensateur HS, carte electronique defaillante, fin de course mal reglees.

Pour les volets manuels : sangle cassee ou decrochee, mecanisme a manivelle bloque, ressort de rappel casse, lames deformees ou desalignees.

Pour tous les types : lames cassees ou deformees bloquant le tablier, coulisses laterales encrassees ou deformees, gel en hiver (eau infiltree dans les coulisses), corps etranger coince dans le mecanisme.

Verifications a faire avant d'appeler un professionnel : verifiez le tableau electrique et remettez le disjoncteur si necessaire, changez les piles de la telecommande, essayez le bouton mural si la telecommande ne fonctionne pas, verifiez visuellement que rien ne bloque le tablier.

Quand appeler un professionnel : si le moteur fait du bruit mais le volet ne bouge pas, si le tablier est visiblement endommage, si le probleme persiste apres les verifications de base, si le volet est bloque en position ouverte (risque de securite).

Le cout de reparation varie de 80 a 400 EUR selon la nature de la panne. Un simple reglage coute moins de 100 EUR, tandis que le remplacement d'un moteur peut couter jusqu'a 400 EUR.`,
    faq: [
      { question: "Pourquoi mon volet roulant electrique ne repond plus ?", answer: "Les causes les plus frequentes sont un disjoncteur saute, des piles de telecommande usees, un moteur en panne ou une carte electronique defaillante." },
      { question: "Comment debloquer un volet roulant manuellement ?", answer: "Si le volet est electrique, utilisez la manoeuvre de secours (manivelle ou cordon). Pour un volet manuel, verifiez la sangle et le mecanisme d'enroulement." },
    ],
    keywords: ["volet roulant bloque que faire", "debloquer volet roulant", "volet roulant en panne"],
  },
  {
    slug: "punaises-de-lit-comment-sen-debarrasser",
    title: "Punaises de lit : comment s'en debarrasser definitivement ?",
    metaDescription: "Punaises de lit : methodes efficaces pour les eliminer. Traitements professionnels, prevention, et prix. Guide complet 2026.",
    excerpt: "Les punaises de lit envahissent votre logement ? Decouvrez les methodes les plus efficaces pour les eliminer definitivement.",
    category: "Nuisibles",
    serviceSlug: "traitement-nuisibles",
    publishedAt: "2026-01-20",
    content: `Les punaises de lit sont un probleme en forte croissance en France. Ces insectes nocturnes se nourrissent de sang humain et provoquent des piqures irritantes. S'en debarrasser necessite souvent l'intervention d'un professionnel.

Comment detecter les punaises de lit :

Les signes revelateurs sont des piqures en ligne ou en groupe sur la peau (bras, jambes, dos), de petites taches noires sur les draps et le matelas (dejections), des traces de sang sur les draps, une odeur douce et desagreable dans la chambre, et la presence d'insectes adultes (5mm, bruns, plats et ovales).

Les traitements professionnels :

Traitement thermique : la methode la plus efficace. La piece est chauffee a plus de 60 degres pendant plusieurs heures. Taux de reussite superieur a 95% en une seule intervention. Prix : 300 a 600 EUR par piece.

Traitement chimique : pulverisation d'insecticides professionnels. Necessite 2 a 3 passages espaces de 15 jours. Prix : 100 a 300 EUR par piece et par passage.

Cryogenisation : utilisation de neige carbonique a -78 degres. Efficace pour les zones localisees. Prix : 200 a 400 EUR par piece.

Vapeur seche : projection de vapeur a 180 degres. Souvent utilisee en complement. Efficace pour matelas et coutures.

Preparation du logement avant traitement : lavez tout le linge a 60 degres minimum, aspirez minutieusement toutes les surfaces, debarrassez les encombrements pour faciliter l'acces, isolez les vetements propres dans des sacs hermetiques.

Prevention : a l'hotel, inspectez le matelas et la tete de lit avant de vous installer. Apres un voyage, lavez tous vos vetements a 60 degres. Evitez de ramasser des meubles dans la rue. Inspectez regulierement votre literie.`,
    faq: [
      { question: "Les punaises de lit sont-elles dangereuses ?", answer: "Les punaises de lit ne transmettent pas de maladies, mais leurs piqures causent des demangeaisons intenses et peuvent provoquer des reactions allergiques. Le stress et l'insomnie lies a l'infestation affectent la qualite de vie." },
      { question: "Peut-on eliminer les punaises de lit soi-meme ?", answer: "Pour une infestation legere, c'est possible avec de la terre de diatomee et un nettoyage minutieux. Pour une infestation etablie, un traitement professionnel est fortement recommande." },
    ],
    keywords: ["punaises de lit traitement", "se debarrasser punaises de lit", "eliminer punaises"],
  },
  {
    slug: "combien-coute-debarras-maison",
    title: "Combien coute un debarras de maison ? Tarifs 2026",
    metaDescription: "Prix debarras maison 2026 : tarifs au m3, par type de local. Cave, grenier, appartement. Devis gratuit et comparatif prix.",
    excerpt: "Besoin de vider une maison ou un appartement ? Decouvrez les prix pratiques par les professionnels du debarras en 2026.",
    category: "Prix travaux",
    serviceSlug: "debarras-maison",
    publishedAt: "2026-02-10",
    content: `Le debarras de maison est une prestation dont le prix varie considerablement en fonction du volume, du type d'objets et de l'accessibilite. Voici un guide complet des tarifs pratiques en 2026.

Le prix au m3 est la reference la plus utilisee par les professionnels. En 2026, le tarif moyen se situe entre 30 et 60 EUR par m3 d'objets a evacuer.

Tarifs indicatifs par type de local : studio ou T1 (10 a 20 m3) entre 300 et 800 EUR, appartement T2/T3 (20 a 40 m3) entre 500 et 1500 EUR, maison (30 a 80 m3) entre 800 et 3000 EUR, cave (5 a 15 m3) entre 200 et 800 EUR, grenier (5 a 20 m3) entre 200 et 800 EUR, garage (10 a 25 m3) entre 300 et 1000 EUR.

Les elements qui font varier le prix : la nature des objets (les objets lourds et encombrants coutent plus cher), l'accessibilite (etage sans ascenseur, stationnement difficile), la distance a la decheterie, la presence de materiaux dangereux (amiante, produits chimiques), et la region (les tarifs sont plus eleves en Ile-de-France).

Debarras gratuit ou remunere : si les objets a debarrasser ont une valeur de revente significative (meubles anciens, antiquites, electromenager recent), le professionnel peut proposer un debarras gratuit voire remunere. Il revend les objets de valeur et deduit le montant de sa prestation.

Conseils pour reduire le cout : faites le tri vous-meme avant l'intervention, donnez les objets en bon etat a des associations, deposez les petits encombrants en decheterie, et demandez plusieurs devis pour comparer.`,
    faq: [
      { question: "Quel est le prix moyen d'un debarras de maison ?", answer: "Le prix moyen est de 30 a 60 EUR par m3. Pour une maison complete, comptez entre 800 et 3000 EUR selon le volume et les conditions d'acces." },
      { question: "Un debarras peut-il etre gratuit ?", answer: "Oui, si les objets ont une valeur de revente suffisante. Le professionnel recupere et revend les objets de valeur pour compenser ses frais." },
    ],
    keywords: ["cout debarras maison", "prix debarras maison 2026", "tarif vide maison"],
  },
  {
    slug: "pompe-a-chaleur-entretien-obligatoire",
    title: "Entretien pompe a chaleur : est-ce obligatoire ? Guide 2026",
    metaDescription: "L'entretien de votre pompe a chaleur est obligatoire depuis 2020. Frequence, prix, contenu de la visite. Tout savoir sur vos obligations.",
    excerpt: "Depuis 2020, l'entretien de votre pompe a chaleur est obligatoire. Decouvrez vos obligations et les prix pratiques en 2026.",
    category: "Reglementation",
    serviceSlug: "entretien-pompe-chaleur",
    publishedAt: "2026-01-25",
    content: `Depuis le decret du 28 juillet 2020, l'entretien des pompes a chaleur dont la puissance est comprise entre 4 kW et 70 kW est obligatoire tous les 2 ans en France.

Que dit la loi ? Le decret n2020-912 du 28 juillet 2020 impose un entretien biennal pour toutes les PAC (air/air, air/eau, eau/eau, geothermiques) d'une puissance de 4 a 70 kW. L'entretien doit etre effectue par un professionnel titulaire d'une attestation de capacite pour la manipulation des fluides frigorigenes.

Le contenu de l'entretien obligatoire : verification de l'etancheite du circuit frigorifique, controle de la quantite et de la pression du fluide frigorigene, nettoyage de l'echangeur thermique exterieur, verification du bon fonctionnement des securites, controle des performances energetiques (COP), verification de l'installation electrique, nettoyage ou remplacement des filtres.

Le prix de l'entretien : l'intervention ponctuelle coute entre 150 et 300 EUR. Le contrat d'entretien annuel coute entre 150 et 300 EUR par an et inclut la visite d'entretien, le deplacement et la main d'oeuvre pour les depannages, ainsi que la priorite d'intervention en cas de panne.

Les risques du non-entretien : perte de garantie constructeur, refus d'indemnisation par l'assurance en cas de sinistre, degradation des performances (jusqu'a 30% de perte de rendement), augmentation de la consommation electrique, risque de panne prematuree, et diminution de la duree de vie de l'equipement.

Le bon reflexe : souscrivez un contrat d'entretien des l'installation de votre PAC. Le professionnel vous rappellera automatiquement pour la visite d'entretien.`,
    faq: [
      { question: "A quelle frequence faut-il entretenir sa PAC ?", answer: "L'entretien est obligatoire tous les 2 ans pour les PAC de 4 a 70 kW. Cependant, un entretien annuel est recommande pour maintenir les performances optimales." },
      { question: "Qui peut faire l'entretien d'une pompe a chaleur ?", answer: "Seul un professionnel titulaire d'une attestation de capacite pour la manipulation des fluides frigorigenes est habilite a effectuer l'entretien." },
    ],
    keywords: ["entretien pompe chaleur obligatoire", "PAC entretien obligatoire", "decret entretien PAC"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByService(serviceSlug: string): BlogPost[] {
  return blogPosts.filter((p) => p.serviceSlug === serviceSlug);
}
