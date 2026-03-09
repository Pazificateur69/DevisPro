export interface LongTailPage {
  slug: string;
  serviceSlug: string;
  title: string;
  h1: string;
  metaDescription: string;
  content: string;
  faq: { question: string; answer: string }[];
  keywords: string[];
}

export const longTailPages: LongTailPage[] = [
  // Recherche fuite eau
  {
    slug: "recherche-fuite-eau-prix",
    serviceSlug: "recherche-fuite-eau",
    title: "Prix recherche de fuite d'eau en 2026 - Tarifs et devis",
    h1: "Combien coute une recherche de fuite d'eau en 2026 ?",
    metaDescription: "Decouvrez les tarifs pour une recherche de fuite d'eau : de 150 a 500 EUR selon la methode. Comparez les prix et obtenez 3 devis gratuits.",
    content: `La recherche de fuite d'eau est une intervention qui necessite un equipement professionnel et une expertise technique. Les prix varient en fonction de la methode utilisee et de la complexite de la situation.

Les tarifs moyens constates en France pour une recherche de fuite d'eau sont les suivants : detection par ecoute acoustique entre 150 et 300 EUR, detection par camera thermique entre 200 et 400 EUR, detection par gaz traceur entre 250 et 500 EUR, et detection par fluoresceine entre 150 et 250 EUR.

Plusieurs facteurs influencent le prix final. L'accessibilite de la zone concernee joue un role important. Une fuite sous une dalle de beton sera plus couteuse a detecter qu'une fuite apparente. La surface a inspecter impacte egalement le tarif. Un appartement de 50m2 sera moins cher qu'une maison de 200m2.

La methode de detection choisie par le professionnel depend de la situation. La camera thermique est ideale pour detecter les fuites dans les murs et les sols. L'ecoute acoustique permet de localiser les fuites dans les canalisations enterrees. Le gaz traceur est utilise pour les fuites les plus difficiles a trouver.

Bon a savoir : dans le cadre d'un degat des eaux, votre assurance habitation peut prendre en charge tout ou partie des frais de recherche de fuite. Pensez a contacter votre assureur avant l'intervention.`,
    faq: [
      { question: "Quel est le prix moyen d'une recherche de fuite d'eau ?", answer: "Le prix moyen se situe entre 150 et 500 EUR selon la methode de detection utilisee et la complexite de la situation." },
      { question: "L'assurance prend-elle en charge la recherche de fuite ?", answer: "Oui, dans le cadre d'un degat des eaux declare, votre assurance habitation peut couvrir les frais de recherche de fuite selon votre contrat." },
      { question: "Combien de temps dure une recherche de fuite ?", answer: "Une recherche de fuite dure generalement entre 1 et 3 heures selon la complexite de la situation et la methode utilisee." },
    ],
    keywords: ["prix recherche fuite eau", "cout detection fuite", "tarif recherche fuite", "devis recherche fuite eau"],
  },
  {
    slug: "recherche-fuite-eau-assurance",
    serviceSlug: "recherche-fuite-eau",
    title: "Recherche de fuite d'eau et assurance - Guide complet 2026",
    h1: "Recherche de fuite d'eau : que couvre votre assurance ?",
    metaDescription: "Votre assurance habitation couvre-t-elle la recherche de fuite d'eau ? Demarches, prise en charge, convention IRSI. Guide complet.",
    content: `La prise en charge d'une recherche de fuite d'eau par votre assurance depend de plusieurs facteurs : votre contrat, l'origine de la fuite et les degats causes.

La convention IRSI (Indemnisation et Recours des Sinistres Immeuble) regit la gestion des degats des eaux en copropriete. Elle definit qui prend en charge les frais de recherche de fuite selon l'importance du sinistre.

Pour un sinistre inferieur a 1600 EUR HT, c'est l'assureur du local ou le dommage est le plus important qui gere le dossier. Pour un sinistre superieur, la gestion est repartie entre les differents assureurs concernes.

Demarches a suivre en cas de fuite : 1) Coupez l'eau si possible pour limiter les degats. 2) Prenez des photos des degats visibles. 3) Declarez le sinistre a votre assurance dans les 5 jours ouvrables. 4) Remplissez le constat amiable de degat des eaux. 5) Faites intervenir un professionnel pour la recherche de fuite.

La recherche de fuite non destructive est souvent privilegiee par les assureurs car elle evite des frais de remise en etat importants. Les techniques comme la camera thermique ou le gaz traceur permettent de localiser la fuite sans casser les murs ou les sols.`,
    faq: [
      { question: "Mon assurance couvre-t-elle la recherche de fuite ?", answer: "La plupart des contrats d'assurance habitation couvrent la recherche de fuite dans le cadre d'un degat des eaux declare. Verifiez les conditions de votre contrat." },
      { question: "Quel delai pour declarer une fuite a l'assurance ?", answer: "Vous disposez de 5 jours ouvrables apres la decouverte de la fuite pour faire votre declaration de sinistre aupres de votre assurance." },
      { question: "Qu'est-ce que la convention IRSI ?", answer: "La convention IRSI definit les regles de gestion des degats des eaux en immeuble collectif, notamment la repartition des frais entre assureurs." },
    ],
    keywords: ["recherche fuite eau assurance", "degat des eaux assurance", "convention IRSI fuite", "prise en charge fuite eau"],
  },
  {
    slug: "recherche-fuite-eau-non-destructive",
    serviceSlug: "recherche-fuite-eau",
    title: "Recherche de fuite d'eau non destructive - Techniques et prix",
    h1: "Recherche de fuite non destructive : methodes modernes",
    metaDescription: "Detection de fuite sans casser : camera thermique, gaz traceur, ecoute acoustique. Decouvrez les methodes non destructives et obtenez un devis gratuit.",
    content: `La recherche de fuite non destructive permet de localiser precisement une fuite d'eau sans endommager les murs, les sols ou les plafonds. Ces techniques modernes sont plus rapides et moins couteuses que les methodes traditionnelles.

La camera thermique infrarouge detecte les variations de temperature dans les murs et les sols. Une fuite d'eau cree une zone plus froide que le professionnel peut identifier precisement. Cette methode est ideale pour les fuites dans les planchers chauffants et les murs.

L'ecoute acoustique utilise des capteurs ultra-sensibles pour detecter le bruit de l'eau qui s'echappe d'une canalisation. Le technicien place les capteurs a differents endroits pour trianguler la position exacte de la fuite.

Le gaz traceur consiste a injecter un gaz inoffensif dans la canalisation. Ce gaz traverse les materiaux de construction et est detecte en surface par un capteur specialise. C'est la methode la plus precise pour les fuites difficiles a localiser.

La fluoresceine est un colorant vert fluorescent injecte dans l'eau. Il permet de visualiser le parcours de l'eau et d'identifier le point de fuite par fluorescence.

La correlation acoustique utilise deux capteurs places de part et d'autre de la zone suspecte. Un algorithme calcule la position exacte de la fuite en analysant la difference de temps de propagation du son.`,
    faq: [
      { question: "Qu'est-ce que la recherche de fuite non destructive ?", answer: "C'est un ensemble de techniques qui permettent de localiser une fuite d'eau sans casser les murs ou les sols, en utilisant des technologies comme la camera thermique ou le gaz traceur." },
      { question: "Quelle methode non destructive est la plus fiable ?", answer: "Le gaz traceur est considere comme la methode la plus fiable car il peut detecter des fuites tres petites et traverser tous les materiaux de construction." },
      { question: "Combien coute une recherche de fuite non destructive ?", answer: "Les prix varient de 150 a 500 EUR selon la methode utilisee. La camera thermique coute entre 200 et 400 EUR, le gaz traceur entre 250 et 500 EUR." },
    ],
    keywords: ["recherche fuite non destructive", "detection fuite sans casser", "camera thermique fuite", "gaz traceur fuite eau"],
  },
  // Volets roulants
  {
    slug: "volet-roulant-bloque-que-faire",
    serviceSlug: "reparation-volets-roulants",
    title: "Volet roulant bloque : que faire ? Solutions et depannage",
    h1: "Volet roulant bloque : les solutions pour le debloquer",
    metaDescription: "Votre volet roulant est bloque en position fermee ou ouverte ? Decouvrez les causes et solutions. Depannage rapide par un professionnel.",
    content: `Un volet roulant bloque est un probleme frequent qui peut avoir plusieurs causes. Avant d'appeler un professionnel, il existe quelques verifications simples a effectuer.

Si votre volet roulant est electrique, verifiez d'abord l'alimentation electrique. Un disjoncteur qui a saute peut etre la cause du probleme. Verifiez le tableau electrique et remettez le disjoncteur en position si necessaire.

Verifiez egalement la telecommande : changez les piles et essayez de reprogrammer le volet. Sur certains modeles, un appui long sur le bouton de programmation peut reinitialiser le systeme.

Si le volet est bloque mecaniquement, le probleme peut venir de lames cassees ou deformees qui empechent le mouvement. Des lames desalignees dans les coulisses laterales peuvent bloquer le tablier. Les coulisses elles-memes peuvent etre encrassees ou deformees.

Le moteur peut egalement etre en cause. Un moteur qui fait du bruit mais ne fait pas bouger le volet indique un probleme de treuil ou de courroie. Un moteur silencieux peut etre en fin de vie et necessiter un remplacement.

En cas de panne mecanique ou moteur, il est recommande de faire appel a un professionnel. Un volet mal repare peut devenir dangereux et causer des blessures.`,
    faq: [
      { question: "Pourquoi mon volet roulant ne remonte plus ?", answer: "Les causes les plus frequentes sont un probleme electrique (disjoncteur, telecommande), des lames cassees, des coulisses encrassees ou un moteur en panne." },
      { question: "Peut-on debloquer un volet roulant soi-meme ?", answer: "Pour les problemes simples (disjoncteur, piles telecommande), oui. Pour les problemes mecaniques ou moteur, il est recommande de faire appel a un professionnel." },
      { question: "Combien coute la reparation d'un volet roulant bloque ?", answer: "Le depannage simple coute entre 80 et 150 EUR. Le remplacement d'un moteur coute entre 200 et 400 EUR pose comprise." },
    ],
    keywords: ["volet roulant bloque", "volet roulant ne remonte plus", "depannage volet roulant", "volet roulant en panne"],
  },
  {
    slug: "reparation-volet-roulant-prix",
    serviceSlug: "reparation-volets-roulants",
    title: "Prix reparation volet roulant 2026 - Tarifs et devis",
    h1: "Combien coute la reparation d'un volet roulant en 2026 ?",
    metaDescription: "Tarifs reparation volet roulant : de 80 a 400 EUR selon la panne. Moteur, lames, sangle, telecommande. Comparez avec 3 devis gratuits.",
    content: `Le cout de reparation d'un volet roulant depend de la nature de la panne et du type de volet. Voici les tarifs moyens constates en France en 2026.

Le remplacement de lames cassees coute entre 15 et 50 EUR par lame, pose comprise. Le remplacement complet du tablier coute entre 150 et 400 EUR selon les dimensions et le materiau.

Le remplacement d'une sangle de volet roulant manuel coute entre 30 et 80 EUR pose comprise. Le remplacement du mecanisme a manivelle coute entre 60 et 120 EUR.

Pour les volets electriques, le remplacement du moteur coute entre 200 et 400 EUR pose comprise. La reprogrammation d'une telecommande coute entre 50 et 100 EUR. Le remplacement de l'interrupteur mural coute entre 40 et 80 EUR.

Le depannage simple (deblocage, reglage) coute generalement entre 80 et 150 EUR, incluant le deplacement et la main d'oeuvre.

Facteurs qui influencent le prix : le type de volet (manuel ou electrique), le materiau (PVC, aluminium, bois), les dimensions du volet, l'accessibilite (etage, difficulte d'acces), et la region geographique.

Conseil : demandez systematiquement un devis avant intervention. Certains professionnels incluent le deplacement dans le devis, d'autres le facturent en supplement.`,
    faq: [
      { question: "Combien coute le remplacement d'un moteur de volet roulant ?", answer: "Le remplacement d'un moteur de volet roulant coute en moyenne entre 200 et 400 EUR, pose comprise. Le prix varie selon la puissance et la marque du moteur." },
      { question: "Est-il plus rentable de reparer ou remplacer un volet roulant ?", answer: "Si la reparation coute plus de 50% du prix d'un volet neuf, il est generalement plus rentable de le remplacer. Un volet roulant neuf coute entre 300 et 800 EUR pose comprise." },
      { question: "Le deplacement est-il inclus dans le prix ?", answer: "Cela depend du professionnel. Certains incluent le deplacement, d'autres le facturent entre 30 et 60 EUR en supplement. Demandez toujours un devis detaille." },
    ],
    keywords: ["prix reparation volet roulant", "cout reparation volet", "tarif depannage volet roulant", "devis volet roulant"],
  },
  // Traitement nuisibles
  {
    slug: "punaises-de-lit-traitement-prix",
    serviceSlug: "traitement-nuisibles",
    title: "Traitement punaises de lit : prix et methodes efficaces 2026",
    h1: "Punaises de lit : quel traitement et a quel prix ?",
    metaDescription: "Eliminer les punaises de lit : traitements chimiques, thermiques, cryogenisation. Prix de 100 a 600 EUR. Obtenez 3 devis gratuits de professionnels.",
    content: `Les punaises de lit sont un fleau en forte augmentation en France. Un traitement professionnel est souvent indispensable pour en venir a bout definitivement.

Le traitement chimique consiste a pulveriser des insecticides professionnels dans les zones infestees. Prix moyen : 100 a 300 EUR par piece. Deux a trois passages sont generalement necessaires a 15 jours d'intervalle.

Le traitement thermique est la methode la plus efficace. Il consiste a chauffer la piece a plus de 60 degres pendant plusieurs heures. Les punaises de lit ne survivent pas a ces temperatures. Prix moyen : 300 a 600 EUR par piece. Un seul passage suffit generalement.

La cryogenisation utilise de la neige carbonique a -78 degres pour tuer les punaises par le froid. Cette methode est efficace pour les zones localisees. Prix : 200 a 400 EUR par piece.

Le traitement vapeur seche utilise un appareil qui projette de la vapeur a 180 degres. Efficace pour les matelas, les coutures et les recoins. Souvent utilise en complement d'un traitement chimique.

Attention aux traitements "maison" : les bombes insecticides du commerce sont souvent inefficaces et peuvent meme aggraver le probleme en dispersant les punaises dans d'autres pieces.

Pour un traitement efficace, il est essentiel de preparer le logement avant l'intervention : laver tout le linge a 60 degres, passer l'aspirateur minutieusement, debarrasser les encombrements.`,
    faq: [
      { question: "Quel est le traitement le plus efficace contre les punaises de lit ?", answer: "Le traitement thermique est considere comme le plus efficace avec un taux de reussite de plus de 95% en une seule intervention. Le traitement chimique necessite souvent plusieurs passages." },
      { question: "Combien coute un traitement contre les punaises de lit ?", answer: "Comptez entre 100 et 600 EUR par piece selon la methode. Un traitement complet d'un appartement de 3 pieces coute entre 400 et 1500 EUR." },
      { question: "Combien de temps dure un traitement punaises de lit ?", answer: "Un traitement thermique dure 6 a 8 heures. Un traitement chimique dure 1 a 2 heures par passage, avec 2 a 3 passages espaces de 15 jours." },
    ],
    keywords: ["punaises de lit traitement", "prix traitement punaises", "eliminer punaises de lit", "desinsectisation punaises"],
  },
  // Debarras maison
  {
    slug: "debarras-maison-prix",
    serviceSlug: "debarras-maison",
    title: "Prix debarras maison 2026 - Tarifs au m3 et devis gratuit",
    h1: "Combien coute un debarras de maison en 2026 ?",
    metaDescription: "Prix debarras maison : de 30 a 60 EUR/m3. Maison, appartement, cave, grenier. Comparez 3 devis gratuits de professionnels du debarras.",
    content: `Le prix d'un debarras de maison depend du volume a evacuer, de l'accessibilite et de la nature des objets a debarrasser.

Le tarif moyen d'un debarras est de 30 a 60 EUR par metre cube. Pour une maison complete, comptez entre 500 et 3000 EUR selon la taille et l'encombrement.

Voici les tarifs indicatifs par type de local : studio ou T1 entre 300 et 800 EUR, appartement T2/T3 entre 500 et 1500 EUR, maison entre 800 et 3000 EUR, cave ou grenier entre 200 et 800 EUR, garage entre 300 et 1000 EUR.

Certains objets necessitent un traitement special et peuvent entrainer des surcouts. Les electromenagers volumineux (refrigerateur, machine a laver), les materiaux dangereux (amiante, peintures), et les encombrants tres lourds (piano, coffre-fort) font augmenter la facture.

A l'inverse, si vos objets ont de la valeur (meubles anciens, electromenager recent, vetements de marque), le professionnel peut les revendre et deduire le montant de votre facture. Certains debarras peuvent meme etre gratuits si la valeur des objets compense le cout de l'intervention.

Conseils pour reduire le cout : faites le tri avant l'intervention et ne gardez que ce qui doit etre debarrasse. Deposez vous-meme les objets recyclables en decheterie. Donnez les objets en bon etat a des associations (Emmaus, Secours populaire).`,
    faq: [
      { question: "Quel est le prix moyen d'un debarras de maison ?", answer: "Le prix moyen est de 30 a 60 EUR par m3. Pour une maison complete, comptez entre 800 et 3000 EUR selon la taille et le volume a evacuer." },
      { question: "Un debarras peut-il etre gratuit ?", answer: "Oui, si les objets a debarrasser ont une valeur de revente suffisante pour couvrir les frais d'intervention. C'est souvent le cas pour les maisons contenant des meubles anciens ou de l'electromenager recent." },
      { question: "Que deviennent les objets debarrasses ?", answer: "Les objets en bon etat sont revendus ou donnes a des associations. Les materiaux recyclables sont envoyes dans les filieres de recyclage. Le reste est elimine en decheterie." },
    ],
    keywords: ["prix debarras maison", "cout debarras", "tarif debarras m3", "debarras maison gratuit"],
  },
  // Pompe a chaleur
  {
    slug: "entretien-pompe-chaleur-obligatoire",
    serviceSlug: "entretien-pompe-chaleur",
    title: "Entretien pompe a chaleur : obligatoire ? Frequence et prix",
    h1: "L'entretien de votre pompe a chaleur est-il obligatoire ?",
    metaDescription: "Entretien PAC obligatoire depuis 2020 : frequence, prix, contenu de la visite. Tout savoir sur la maintenance de votre pompe a chaleur.",
    content: `Depuis le 28 juillet 2020, l'entretien des pompes a chaleur est obligatoire en France. Le decret impose un entretien tous les 2 ans pour les PAC dont la puissance est comprise entre 4 kW et 70 kW.

L'entretien doit etre realise par un professionnel certifie qui dispose d'une attestation de capacite pour la manipulation des fluides frigorigenes. Le cout moyen est de 150 a 300 EUR par visite.

Le contenu de l'entretien obligatoire comprend : la verification de l'etancheite du circuit frigorifique, le controle du fluide frigorigene (quantite et pression), le nettoyage et la verification de l'echangeur thermique, le controle des performances energetiques, la verification des dispositifs de securite.

L'entretien regulier de votre PAC presente de nombreux avantages. Il maintient les performances energetiques optimales de votre installation. Une PAC mal entretenue peut perdre jusqu'a 30% de son rendement. Il prolonge la duree de vie de l'equipement, qui peut atteindre 15 a 20 ans avec un entretien regulier. Il previent les pannes couteuses. Un defaut non detecte peut entrainer une reparation de plusieurs milliers d'euros.

Le contrat d'entretien annuel est recommande. Pour 150 a 300 EUR par an, il inclut generalement la visite d'entretien obligatoire, le deplacement et la main d'oeuvre pour les depannages, et la priorite d'intervention en cas de panne.

Attention : en cas de sinistre, votre assurance peut refuser de vous indemniser si vous ne pouvez pas prouver que l'entretien obligatoire a ete effectue.`,
    faq: [
      { question: "L'entretien de la pompe a chaleur est-il obligatoire ?", answer: "Oui, depuis le decret du 28 juillet 2020, l'entretien des PAC de 4 a 70 kW est obligatoire tous les 2 ans. Il doit etre effectue par un professionnel certifie." },
      { question: "Combien coute l'entretien d'une pompe a chaleur ?", answer: "L'entretien coute entre 150 et 300 EUR par visite. Un contrat d'entretien annuel coute entre 150 et 300 EUR par an et inclut la visite obligatoire." },
      { question: "Que se passe-t-il si je ne fais pas l'entretien ?", answer: "Vous risquez une perte de garantie constructeur, un refus d'indemnisation par votre assurance en cas de sinistre, et une degradation des performances de votre PAC." },
    ],
    keywords: ["entretien pompe chaleur obligatoire", "maintenance PAC", "entretien PAC prix", "contrat entretien pompe chaleur"],
  },
  // Ramonage
  {
    slug: "ramonage-cheminee-prix-obligatoire",
    serviceSlug: "ramonage-cheminee",
    title: "Ramonage cheminee : prix, obligation legale et frequence 2026",
    h1: "Ramonage de cheminee : tout savoir sur les prix et obligations",
    metaDescription: "Ramonage obligatoire 1 a 2 fois par an. Prix de 50 a 120 EUR. Certificat de ramonage, reglementation, risques. Devis gratuit.",
    content: `Le ramonage de cheminee est une obligation legale en France. Il permet de prevenir les risques d'incendie et d'intoxication au monoxyde de carbone.

La frequence obligatoire varie selon les departements et le type de combustible. En regle generale, un ramonage par an est obligatoire pour les chauffages au gaz et au fioul, et deux ramonages par an pour les chauffages au bois et au charbon (dont un pendant la periode de chauffe).

Le prix moyen d'un ramonage est de 50 a 90 EUR pour un conduit classique et de 80 a 120 EUR pour un conduit complexe ou difficile d'acces. Le ramonage chimique seul (buches de ramonage) ne remplace pas le ramonage mecanique obligatoire.

Le ramonage mecanique consiste a brosser l'interieur du conduit avec un herisson pour eliminer la suie et le bistre accumules. Le ramoneur verifie egalement l'etat du conduit, la qualite du tirage et l'absence de fissures.

A l'issue de l'intervention, le ramoneur delivre un certificat de ramonage. Ce document est obligatoire et peut etre demande par votre assurance en cas de sinistre. Conservez-le precieusement.

Le defaut de ramonage est passible d'une amende de 3eme classe (jusqu'a 450 EUR). En cas d'incendie, votre assurance peut refuser de vous indemniser si vous ne pouvez pas presenter un certificat de ramonage en cours de validite.`,
    faq: [
      { question: "Combien de fois par an faut-il ramoner sa cheminee ?", answer: "Pour le bois et le charbon : 2 fois par an dont 1 pendant la periode de chauffe. Pour le gaz et le fioul : 1 fois par an. La frequence exacte depend de la reglementation de votre departement." },
      { question: "Quel est le prix d'un ramonage de cheminee ?", answer: "Le prix varie de 50 a 120 EUR selon le type de conduit et la region. Comptez 50 a 90 EUR pour un conduit classique." },
      { question: "Que risque-t-on sans ramonage ?", answer: "Une amende de 3eme classe (jusqu'a 450 EUR), un refus d'indemnisation par l'assurance en cas d'incendie, et surtout un risque d'incendie de conduit et d'intoxication au monoxyde de carbone." },
    ],
    keywords: ["ramonage cheminee prix", "ramonage obligatoire", "certificat ramonage", "frequence ramonage"],
  },
  // Plomberie urgente
  {
    slug: "plombier-urgence-tarif",
    serviceSlug: "plomberie-urgente",
    title: "Tarif plombier en urgence 2026 - Prix intervention et depannage",
    h1: "Combien coute un plombier en urgence en 2026 ?",
    metaDescription: "Prix plombier urgence : de 80 a 500 EUR selon l'intervention. Tarifs nuit, weekend, jours feries. Evitez les arnaques. 3 devis gratuits.",
    content: `Le cout d'un plombier en urgence varie en fonction du type d'intervention, de l'heure et du jour. Les tarifs sont generalement plus eleves en dehors des heures ouvrables.

En heures ouvrables (8h-18h en semaine), le deplacement coute entre 30 et 60 EUR et le tarif horaire entre 40 et 80 EUR. En soiree et weekend, une majoration de 50 a 100% est courante. La nuit et les jours feries, la majoration peut atteindre 100 a 150%.

Voici les prix moyens par type d'intervention : debouchage de canalisation entre 80 et 200 EUR, reparation de fuite entre 100 et 300 EUR, remplacement de robinet entre 80 et 150 EUR, reparation de WC entre 80 et 200 EUR, remplacement de chauffe-eau entre 300 et 500 EUR.

Attention aux arnaques. Mefinez-vous des plombiers qui demandent un paiement en especes, qui ne fournissent pas de devis avant intervention, qui annoncent un prix au telephone et en facturent un autre, ou qui proposent des prix anormalement bas pour attirer les clients.

Conseils pour eviter les mauvaises surprises : demandez toujours un devis ecrit avant le debut des travaux, verifiez que le plombier est enregistre au registre du commerce, ne payez jamais la totalite d'avance, et demandez une facture detaillee apres intervention.`,
    faq: [
      { question: "Combien coute un plombier en urgence la nuit ?", answer: "La nuit, les tarifs sont majores de 100 a 150%. Un depannage qui coute 150 EUR en journee peut couter 300 a 375 EUR la nuit." },
      { question: "Comment eviter les arnaques plombier ?", answer: "Demandez toujours un devis ecrit, verifiez les avis en ligne, mefiez-vous des prix anormalement bas, et ne payez jamais en especes sans facture." },
      { question: "Un plombier peut-il refuser de faire un devis ?", answer: "Non, le professionnel est tenu de fournir un devis gratuit pour toute intervention depassant 150 EUR. En dessous, le devis n'est pas obligatoire mais recommande." },
    ],
    keywords: ["tarif plombier urgence", "prix plombier nuit", "cout depannage plomberie", "plombier pas cher"],
  },
  // Depannage chauffage
  {
    slug: "panne-chaudiere-que-faire",
    serviceSlug: "depannage-chauffage",
    title: "Panne de chaudiere : que faire ? Diagnostic et depannage",
    h1: "Panne de chaudiere : diagnostic et solutions rapides",
    metaDescription: "Votre chaudiere est en panne ? Codes erreur, causes frequentes, solutions. Intervention rapide d'un chauffagiste. 3 devis gratuits.",
    content: `Une panne de chaudiere peut avoir de nombreuses causes. Avant d'appeler un professionnel, voici quelques verifications simples a effectuer.

Verifiez d'abord l'alimentation : le disjoncteur n'a pas saute, la chaudiere est bien branchee, l'arrivee de gaz est ouverte. Verifiez ensuite la pression du circuit : elle doit etre entre 1 et 1.5 bar a froid. Si la pression est trop basse, vous pouvez la remonter en ouvrant le robinet de remplissage.

Les codes erreur affiches sur votre chaudiere indiquent la nature de la panne. Consultez le manuel d'utilisation pour interpreter le code. Les codes les plus frequents signalent un probleme d'allumage, de pression, de surchauffe ou de circulation d'eau.

Les pannes les plus frequentes sont : le defaut d'allumage (bruleur encrasse, electrode usee, vanne gaz defaillante), la perte de pression (fuite dans le circuit, vase d'expansion defaillant), la surchauffe (circulateur bloque, thermostat defaillant), et l'absence d'eau chaude sanitaire (corps de chauffe entartre, vanne 3 voies bloquee).

Le cout de depannage varie de 100 a 500 EUR selon la nature de la panne. Le remplacement d'un thermocouple coute environ 100 EUR, le remplacement d'un circulateur entre 200 et 400 EUR, et le desembouage du circuit entre 300 et 600 EUR.

N'essayez jamais de reparer vous-meme une chaudiere a gaz. Les interventions sur les equipements gaz sont strictement reservees aux professionnels qualifies (certification PG).`,
    faq: [
      { question: "Que faire si ma chaudiere ne demarre plus ?", answer: "Verifiez l'alimentation electrique, l'arrivee de gaz, et la pression du circuit (1 a 1.5 bar). Si ces verifications ne resolvent pas le probleme, contactez un chauffagiste." },
      { question: "Combien coute le depannage d'une chaudiere ?", answer: "Le depannage coute entre 100 et 500 EUR selon la panne. Le deplacement et le diagnostic coutent generalement entre 60 et 100 EUR." },
      { question: "Ma chaudiere perd de la pression, que faire ?", answer: "Si la pression descend sous 1 bar, ouvrez le robinet de remplissage jusqu'a atteindre 1.5 bar. Si la pression chute regulierement, il y a probablement une fuite dans le circuit." },
    ],
    keywords: ["panne chaudiere", "chaudiere en panne que faire", "depannage chaudiere", "code erreur chaudiere"],
  },
  // Nettoyage panneaux solaires
  {
    slug: "nettoyage-panneaux-solaires-prix",
    serviceSlug: "nettoyage-panneaux-solaires",
    title: "Prix nettoyage panneaux solaires 2026 - Tarifs et frequence",
    h1: "Nettoyage de panneaux solaires : prix et rentabilite",
    metaDescription: "Nettoyage panneaux solaires : 100 a 300 EUR. Frequence recommandee, methodes, gain de rendement. Devis gratuit de professionnels.",
    content: `Le nettoyage professionnel des panneaux solaires permet de maintenir leur rendement optimal. Des panneaux sales peuvent perdre de 5 a 30% de leur production selon le degre d'encrassement.

Le prix moyen d'un nettoyage est de 100 a 300 EUR pour une installation residentielle standard (10 a 20 panneaux). Le tarif par panneau varie de 5 a 15 EUR.

Facteurs qui influencent le prix : le nombre de panneaux, l'accessibilite de la toiture, le degre d'encrassement, et la region (les zones rurales et les zones a forte pollution necessitent des nettoyages plus frequents).

La frequence recommandee est d'un nettoyage par an. Toutefois, certaines situations necessitent un nettoyage plus frequent : proximite d'arbres (feuilles, resine, fientes d'oiseaux), zone agricole (poussieres, pesticides), zone urbaine ou industrielle (pollution), et regions a faible pluviometrie.

Les methodes de nettoyage professionnel utilisent de l'eau pure deionisee (sans calcaire ni produits chimiques) et des brosses rotatives douces montees sur perche telescopique. Les professionnels n'utilisent jamais de nettoyeur haute pression ni de produits abrasifs qui pourraient endommager le revetement anti-reflet des panneaux.

Le retour sur investissement est rapide : un nettoyage a 200 EUR qui restaure 15% de rendement sur une installation produisant 3000 EUR/an represente un gain de 450 EUR, soit un ROI de plus de 100%.`,
    faq: [
      { question: "A quelle frequence nettoyer ses panneaux solaires ?", answer: "Un nettoyage par an est recommande. Les installations proches d'arbres, en zone agricole ou urbaine peuvent necessiter 2 nettoyages par an." },
      { question: "Peut-on nettoyer soi-meme ses panneaux solaires ?", answer: "C'est possible avec de l'eau claire et une brosse douce, mais les risques de chute et d'endommagement des panneaux rendent l'intervention professionnelle recommandee." },
      { question: "Le nettoyage augmente-t-il vraiment le rendement ?", answer: "Oui, le gain de rendement apres nettoyage peut aller de 5 a 30% selon le degre d'encrassement. Un nettoyage regulier permet de maintenir la production optimale." },
    ],
    keywords: ["nettoyage panneaux solaires prix", "entretien panneaux photovoltaiques", "nettoyage panneau solaire", "rendement panneaux solaires"],
  },
  // Depannage portail
  {
    slug: "depannage-portail-electrique-prix",
    serviceSlug: "depannage-portail-electrique",
    title: "Prix depannage portail electrique 2026 - Tarifs et devis",
    h1: "Combien coute le depannage d'un portail electrique ?",
    metaDescription: "Depannage portail electrique : de 100 a 500 EUR selon la panne. Moteur, telecommande, automatisme. 3 devis gratuits de professionnels.",
    content: `Le cout de depannage d'un portail electrique depend de la nature de la panne. Voici les tarifs moyens constates en 2026.

Le diagnostic et le deplacement coutent entre 50 et 80 EUR. Cette somme est generalement deduite de la facture en cas de reparation.

Les reparations les plus courantes et leurs prix : reprogrammation de telecommande entre 50 et 100 EUR, remplacement de telecommande entre 30 et 80 EUR, remplacement de la carte electronique entre 150 et 350 EUR, remplacement du moteur entre 300 et 800 EUR (selon la puissance et le type), reglage des fins de course entre 80 et 120 EUR, remplacement de la cremaillere entre 100 et 200 EUR.

Les pannes les plus frequentes sont liees a des problemes electriques (coupure de courant, fusible grille), un defaut de programmation (telecommande desynchronisee), des cellules photo-electriques mal alignees ou sales, un moteur en fin de vie, ou des elements mecaniques uses (galets, cremaillere, charniere).

Avant d'appeler un professionnel, verifiez les points suivants : l'alimentation electrique est bien branchee, les piles de la telecommande sont chargees, rien ne bloque le passage du portail, les cellules photo-electriques sont propres.

Le contrat de maintenance annuel est recommande pour les portails automatiques. Pour 150 a 250 EUR par an, il comprend une visite d'entretien, le reglage et la lubrification, et l'intervention prioritaire en cas de panne.`,
    faq: [
      { question: "Combien coute le depannage d'un portail electrique ?", answer: "Le depannage coute entre 100 et 500 EUR selon la nature de la panne. Le deplacement et diagnostic coutent entre 50 et 80 EUR." },
      { question: "Mon portail electrique ne s'ouvre plus, que faire ?", answer: "Verifiez l'alimentation electrique, les piles de la telecommande, et qu'aucun obstacle ne bloque le passage. Si le probleme persiste, faites appel a un professionnel." },
      { question: "Quelle est la duree de vie d'un moteur de portail ?", answer: "Un moteur de portail electrique bien entretenu a une duree de vie de 10 a 15 ans. Un contrat de maintenance annuel peut prolonger sa duree de vie." },
    ],
    keywords: ["depannage portail electrique prix", "reparation portail automatique", "panne portail electrique", "moteur portail prix"],
  },
];

export function getLongTailBySlug(slug: string): LongTailPage | undefined {
  return longTailPages.find((p) => p.slug === slug);
}

export function getLongTailByService(serviceSlug: string): LongTailPage[] {
  return longTailPages.filter((p) => p.serviceSlug === serviceSlug);
}
