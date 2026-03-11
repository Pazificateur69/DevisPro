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
  // Installation chauffe-eau
  {
    slug: "chauffe-eau-thermodynamique-avis",
    serviceSlug: "installation-chauffe-eau",
    title: "Chauffe-eau thermodynamique : avis, prix et rentabilite 2026",
    h1: "Chauffe-eau thermodynamique : avis et prix en 2026",
    metaDescription: "Decouvrez les avis sur le chauffe-eau thermodynamique : avantages, inconvenients, prix d'installation et economies realisees. Devis gratuit.",
    content: `Le chauffe-eau thermodynamique est un equipement qui utilise une pompe a chaleur integree pour chauffer l'eau sanitaire. Il capte les calories presentes dans l'air ambiant pour les transferer a l'eau du ballon, ce qui le rend 2 a 3 fois plus econome qu'un chauffe-eau electrique classique.

Le prix d'achat d'un chauffe-eau thermodynamique varie entre 2 000 et 4 000 EUR, pose comprise. Ce cout est plus eleve qu'un cumulus electrique classique (500 a 1 500 EUR), mais les economies sur la facture d'eau chaude permettent generalement un retour sur investissement en 3 a 5 ans.

Les avantages principaux sont les economies d'energie (jusqu'a 70% par rapport a un cumulus electrique), l'eligibilite aux aides MaPrimeRenov et CEE, et une empreinte carbone reduite. Le COP (coefficient de performance) se situe entre 2,5 et 3,5, ce qui signifie que pour 1 kWh d'electricite consomme, l'appareil produit 2,5 a 3,5 kWh de chaleur.

Parmi les inconvenients, on note un bruit de fonctionnement lie au compresseur (environ 40 a 50 dB), la necessite de disposer d'un local non chauffe d'au moins 10 m3 pour les modeles sur air ambiant, et des performances reduites lorsque la temperature ambiante descend sous 5 degres.

Les avis des utilisateurs sont globalement positifs, avec un taux de satisfaction eleve. La majorite des proprietaires constatent une baisse significative de leur facture d'electricite des la premiere annee. La duree de vie moyenne est de 15 a 20 ans avec un entretien regulier.`,
    faq: [
      { question: "Quel est le prix d'un chauffe-eau thermodynamique ?", answer: "Le prix d'un chauffe-eau thermodynamique varie entre 2 000 et 4 000 EUR pose comprise, selon la capacite (200 a 300 litres) et la marque choisie." },
      { question: "Quelles economies realise-t-on avec un chauffe-eau thermodynamique ?", answer: "Un chauffe-eau thermodynamique permet d'economiser jusqu'a 70% sur la facture d'eau chaude par rapport a un cumulus electrique, soit environ 200 a 400 EUR par an." },
      { question: "Le chauffe-eau thermodynamique est-il bruyant ?", answer: "Le niveau sonore se situe entre 40 et 50 dB, comparable a un refrigerateur. Il est recommande de l'installer dans un local non habite comme un garage ou un cellier." },
    ],
    keywords: ["chauffe-eau thermodynamique avis", "prix chauffe-eau thermodynamique", "avis ballon thermodynamique", "chauffe-eau thermodynamique economies"],
  },
  {
    slug: "remplacement-cumulus-prix",
    serviceSlug: "installation-chauffe-eau",
    title: "Prix remplacement cumulus 2026 - Tarifs ballon eau chaude",
    h1: "Combien coute le remplacement d'un cumulus en 2026 ?",
    metaDescription: "Prix remplacement cumulus : de 500 a 2 500 EUR selon le type. Ballon electrique, thermodynamique ou solaire. Comparez 3 devis gratuits.",
    content: `Le remplacement d'un cumulus (ballon d'eau chaude) est une intervention courante qui devient necessaire lorsque l'appareil fuit, ne chauffe plus ou a depasse sa duree de vie (10 a 15 ans en moyenne).

Le prix de remplacement depend du type de chauffe-eau choisi. Un cumulus electrique classique coute entre 500 et 1 500 EUR pose comprise (200 a 300 litres). Un chauffe-eau thermodynamique coute entre 2 000 et 4 000 EUR pose comprise. Un chauffe-eau a gaz coute entre 800 et 2 000 EUR pose comprise.

Le cout de la main d'oeuvre pour la depose de l'ancien appareil et la pose du nouveau se situe entre 200 et 500 EUR. Ce tarif inclut generalement le deplacement, la depose et l'evacuation de l'ancien ballon, le raccordement hydraulique et electrique, et la mise en service.

Pour choisir la bonne capacite, il faut compter environ 50 litres par personne dans le foyer. Un ballon de 200 litres convient pour un foyer de 3 a 4 personnes, et un ballon de 300 litres pour 5 personnes et plus.

Pensez a verifier les aides disponibles si vous optez pour un chauffe-eau thermodynamique ou solaire. MaPrimeRenov et les CEE peuvent financer une partie importante de l'investissement, rendant ces solutions performantes plus accessibles.`,
    faq: [
      { question: "Combien coute le remplacement d'un cumulus electrique ?", answer: "Le remplacement complet d'un cumulus electrique coute entre 500 et 1 500 EUR pose comprise, selon la capacite et la gamme de l'appareil." },
      { question: "Quelle est la duree de vie d'un cumulus ?", answer: "La duree de vie moyenne d'un cumulus est de 10 a 15 ans. Un entretien regulier (detartrage tous les 2 a 3 ans) peut prolonger sa duree de vie." },
      { question: "Quels signes indiquent qu'il faut remplacer son cumulus ?", answer: "Les signes principaux sont une fuite au niveau de la cuve, une eau qui ne chauffe plus correctement, un bruit anormal, ou une eau chaude insuffisante malgre un thermostat bien regle." },
    ],
    keywords: ["remplacement cumulus prix", "prix ballon eau chaude", "changer cumulus cout", "remplacement chauffe-eau tarif"],
  },
  {
    slug: "chauffe-eau-solaire-rentabilite",
    serviceSlug: "installation-chauffe-eau",
    title: "Chauffe-eau solaire : rentabilite et prix en 2026",
    h1: "Le chauffe-eau solaire est-il rentable en 2026 ?",
    metaDescription: "Chauffe-eau solaire : prix de 4 000 a 7 000 EUR, economies de 50 a 70% sur l'eau chaude. Calcul de rentabilite, aides et devis gratuit.",
    content: `Le chauffe-eau solaire individuel (CESI) utilise des capteurs thermiques installes sur le toit pour chauffer l'eau sanitaire grace a l'energie du soleil. Il permet de couvrir 50 a 70% des besoins en eau chaude d'un foyer selon la region et l'ensoleillement.

Le prix d'installation d'un chauffe-eau solaire varie entre 4 000 et 7 000 EUR pose comprise, incluant les capteurs solaires, le ballon de stockage (200 a 400 litres) et l'ensemble des raccordements. Un appoint electrique ou gaz est toujours necessaire pour les periodes de faible ensoleillement.

La rentabilite depend de plusieurs facteurs : la region d'installation (le sud de la France offre un meilleur rendement), la consommation d'eau chaude du foyer, le prix de l'energie remplacee, et les aides obtenues. En moyenne, un chauffe-eau solaire permet d'economiser entre 250 et 500 EUR par an sur la facture d'eau chaude.

Avec les aides MaPrimeRenov (jusqu'a 4 000 EUR selon les revenus) et les CEE (200 a 400 EUR), le reste a charge peut descendre entre 1 500 et 4 000 EUR. Le retour sur investissement se situe generalement entre 5 et 10 ans, pour un equipement dont la duree de vie depasse 20 ans.

Le chauffe-eau solaire est une solution ecologique qui valorise votre bien immobilier et vous protege contre les hausses du prix de l'energie. Il necessite peu d'entretien : un controle annuel du fluide caloporteur et un nettoyage occasionnel des capteurs suffisent.`,
    faq: [
      { question: "Quel est le prix d'un chauffe-eau solaire ?", answer: "Le prix d'un chauffe-eau solaire varie entre 4 000 et 7 000 EUR pose comprise. Avec les aides MaPrimeRenov et CEE, le reste a charge peut descendre a 1 500 - 4 000 EUR." },
      { question: "Quelle economie realise-t-on avec un chauffe-eau solaire ?", answer: "Un chauffe-eau solaire couvre 50 a 70% des besoins en eau chaude et permet d'economiser entre 250 et 500 EUR par an sur la facture d'energie." },
      { question: "Le chauffe-eau solaire fonctionne-t-il en hiver ?", answer: "Oui, le chauffe-eau solaire fonctionne toute l'annee, mais avec un rendement reduit en hiver. Un appoint electrique ou gaz prend le relais pour assurer la production d'eau chaude en continu." },
    ],
    keywords: ["chauffe-eau solaire rentabilite", "prix chauffe-eau solaire", "chauffe-eau solaire aides", "CESI solaire thermique"],
  },
  // Renovation salle de bain
  {
    slug: "douche-italienne-prix-installation",
    serviceSlug: "renovation-salle-de-bain",
    title: "Prix installation douche italienne 2026 - Tarifs et devis",
    h1: "Combien coute l'installation d'une douche italienne en 2026 ?",
    metaDescription: "Prix douche italienne : de 1 500 a 5 000 EUR pose comprise. Receveur extra-plat, douche maconnee, options. Comparez 3 devis gratuits.",
    content: `La douche italienne, egalement appelee douche a l'italienne ou douche de plain-pied, est une douche dont le receveur est encastre dans le sol, au meme niveau que le reste de la salle de bain. Elle offre un acces facile et un esthetisme moderne tres recherche.

Le prix d'installation d'une douche italienne varie de 1 500 a 5 000 EUR selon la configuration choisie. Un receveur extra-plat a poser coute entre 1 500 et 2 500 EUR pose comprise. Une douche maconnee avec pente integree coute entre 2 500 et 5 000 EUR, car elle necessite des travaux d'etancheite plus importants.

Les elements qui composent le cout total sont : le receveur ou la chape avec pente (300 a 1 200 EUR), la paroi de douche en verre (200 a 1 000 EUR), la robinetterie et colonne de douche (150 a 800 EUR), le carrelage et la pose (300 a 1 000 EUR), l'etancheite (200 a 500 EUR) et la main d'oeuvre (500 a 1 500 EUR).

L'etancheite est l'element le plus critique d'une douche italienne. Un systeme d'etancheite liquide (SPEC) doit etre applique sous le carrelage pour eviter les infiltrations. Ce point est souvent neglige dans les installations low-cost, avec des consequences couteuses a long terme.

Avant de vous lancer, verifiez que votre sol peut accueillir une douche italienne. Dans un appartement en etage, l'epaisseur de la dalle doit etre suffisante pour encastrer le receveur et la bonde d'evacuation. Un professionnel pourra evaluer la faisabilite du projet.`,
    faq: [
      { question: "Quel est le prix d'une douche italienne ?", answer: "Le prix d'une douche italienne varie de 1 500 a 5 000 EUR pose comprise. Un receveur extra-plat est plus abordable (1 500 - 2 500 EUR) qu'une douche maconnee (2 500 - 5 000 EUR)." },
      { question: "Peut-on installer une douche italienne dans un appartement ?", answer: "Oui, a condition que l'epaisseur de la dalle soit suffisante pour encastrer le receveur et la bonde. Un professionnel peut verifier la faisabilite et proposer des solutions adaptees." },
      { question: "Quelle est la duree des travaux pour une douche italienne ?", answer: "Comptez 3 a 5 jours de travaux pour une installation complete, incluant la depose de l'ancienne douche ou baignoire, l'etancheite, le carrelage et la pose de la paroi." },
    ],
    keywords: ["prix douche italienne", "installation douche italienne", "cout douche a l'italienne", "devis douche italienne"],
  },
  {
    slug: "renovation-salle-de-bain-petit-budget",
    serviceSlug: "renovation-salle-de-bain",
    title: "Renover sa salle de bain petit budget : astuces et prix 2026",
    h1: "Comment renover sa salle de bain avec un petit budget ?",
    metaDescription: "Renovation salle de bain pas cher : astuces pour renover a partir de 1 000 EUR. Peinture, accessoires, carrelage adhesif. Guide complet.",
    content: `Renover sa salle de bain ne necessite pas forcement un budget de plusieurs milliers d'euros. Avec les bonnes astuces et un peu d'organisation, il est possible de transformer completement cette piece a partir de 1 000 EUR.

La peinture est le moyen le plus economique de changer l'apparence de votre salle de bain. Une peinture speciale pieces humides coute entre 25 et 50 EUR le pot de 2,5 litres. Pour un budget de 100 a 200 EUR, vous pouvez repeindre entierement les murs et le plafond. Il existe aussi des peintures pour carrelage qui evitent de devoir tout recasser.

Le carrelage adhesif et les panneaux muraux sont des alternatives economiques au carrelage traditionnel. Les dalles adhesives coutent entre 15 et 40 EUR le m2 et se posent directement sur l'ancien carrelage. Les panneaux muraux en PVC ou en composite coutent entre 30 et 80 EUR le m2 et se collent sans joint.

Le remplacement des accessoires (robinetterie, miroir, eclairage, porte-serviettes) peut suffire a moderniser la salle de bain. Comptez entre 200 et 600 EUR pour renouveler tous les accessoires. Un mitigeur design coute entre 50 et 150 EUR, un miroir retro-eclaire entre 80 et 200 EUR.

Pour les budgets intermediaires (3 000 a 5 000 EUR), le remplacement de la baignoire par une douche italienne ou l'installation d'un nouveau meuble vasque sont les travaux les plus impactants. Concentrez votre budget sur les elements les plus visibles pour maximiser l'effet.`,
    faq: [
      { question: "Quel budget minimum pour renover sa salle de bain ?", answer: "Avec 1 000 EUR, vous pouvez deja rafraichir votre salle de bain : peinture, remplacement des accessoires, carrelage adhesif. Une renovation complete coute entre 3 000 et 10 000 EUR." },
      { question: "Peut-on renover sa salle de bain sans tout casser ?", answer: "Oui, il existe des solutions qui se posent sur l'existant : peinture pour carrelage, dalles adhesives, panneaux muraux a coller. Ces solutions evitent les travaux lourds et couteux." },
      { question: "Quels travaux ont le plus d'impact visuel ?", answer: "La peinture des murs, le remplacement du miroir et de l'eclairage, et le changement de la robinetterie ont le plus grand impact visuel pour le budget le plus reduit." },
    ],
    keywords: ["renovation salle de bain pas cher", "salle de bain petit budget", "renover salle de bain economique", "relooking salle de bain"],
  },
  {
    slug: "salle-de-bain-pmr-normes",
    serviceSlug: "renovation-salle-de-bain",
    title: "Salle de bain PMR : normes, amenagements et prix 2026",
    h1: "Salle de bain PMR : normes et amenagements pour personnes handicapees",
    metaDescription: "Normes salle de bain PMR handicape : dimensions, equipements obligatoires, aides financieres. Guide complet et devis gratuit.",
    content: `L'amenagement d'une salle de bain PMR (Personne a Mobilite Reduite) repond a des normes strictes qui garantissent l'accessibilite et la securite des personnes en situation de handicap ou a mobilite reduite. Ces normes s'appliquent aux logements neufs et aux etablissements recevant du public.

Les dimensions minimales pour une salle de bain PMR sont : une surface au sol d'au moins 2,10 m x 2,10 m pour permettre le demi-tour d'un fauteuil roulant, une porte d'acces d'au moins 0,90 m de large, et un espace libre de 0,80 m x 1,30 m devant chaque equipement.

Les equipements obligatoires comprennent une douche de plain-pied sans ressaut (ou avec un ressaut de 2 cm maximum), un siege de douche rabattable fixe au mur, des barres d'appui horizontales et verticales, un lavabo a hauteur adaptee (0,70 m) avec espace libre en dessous pour un fauteuil, et des robinets a levier ou a capteur.

Le cout d'amenagement d'une salle de bain PMR varie entre 4 000 et 10 000 EUR selon l'ampleur des travaux. La creation complete d'une salle de bain PMR coute entre 6 000 et 15 000 EUR. L'adaptation d'une salle de bain existante coute entre 3 000 et 8 000 EUR.

Des aides financieres existent pour financer ces travaux : l'ANAH (Agence Nationale de l'Habitat) peut prendre en charge jusqu'a 50% du cout, le credit d'impot autonomie (25% des depenses dans la limite de 5 000 EUR pour une personne seule), et les aides des caisses de retraite. Un ergotherapeute peut evaluer vos besoins et vous orienter vers les solutions les mieux adaptees.`,
    faq: [
      { question: "Quelles sont les normes pour une salle de bain PMR ?", answer: "Les normes imposent une surface minimale de 2,10 x 2,10 m, une porte de 0,90 m, une douche de plain-pied, un lavabo accessible en fauteuil, et des barres d'appui." },
      { question: "Combien coute l'amenagement d'une salle de bain PMR ?", answer: "L'adaptation d'une salle de bain existante coute entre 3 000 et 8 000 EUR. La creation complete d'une salle de bain PMR coute entre 6 000 et 15 000 EUR." },
      { question: "Quelles aides pour amenager une salle de bain PMR ?", answer: "L'ANAH peut financer jusqu'a 50% des travaux. Le credit d'impot autonomie couvre 25% des depenses. Les caisses de retraite et les collectivites locales proposent aussi des aides." },
    ],
    keywords: ["salle de bain PMR normes", "salle de bain handicape", "douche PMR", "amenagement salle de bain mobilite reduite"],
  },
  // Pose carrelage
  {
    slug: "prix-pose-carrelage-m2",
    serviceSlug: "pose-carrelage",
    title: "Prix pose carrelage au m2 en 2026 - Tarifs par type",
    h1: "Prix de la pose de carrelage au m2 en 2026",
    metaDescription: "Prix pose carrelage : de 25 a 80 EUR/m2 selon le type. Sol, mur, interieur, exterieur. Comparez les tarifs et obtenez 3 devis gratuits.",
    content: `Le prix de la pose de carrelage depend du type de carrelage, du format des carreaux, de la technique de pose et de la surface a carreler. Voici les tarifs moyens constates en France en 2026.

Pour le carrelage au sol interieur, les tarifs de pose (hors fourniture) sont les suivants : pose droite classique entre 25 et 40 EUR/m2, pose en diagonale entre 30 et 50 EUR/m2, pose en chevron ou en decale entre 35 et 55 EUR/m2. Les grands formats (60x60 cm et plus) entrainent un surcout de 5 a 15 EUR/m2 en raison de la difficulte de manipulation.

Pour le carrelage mural, les tarifs sont legerement plus eleves : entre 30 et 50 EUR/m2 pour une pose classique, et entre 40 et 65 EUR/m2 pour une mosaique ou un format special. La pose murale est plus technique car elle necessite une decoupe precise autour des prises, interrupteurs et tuyauteries.

Le prix de la fourniture varie enormement selon la gamme : carrelage basique entre 10 et 25 EUR/m2, milieu de gamme entre 25 et 60 EUR/m2, haut de gamme entre 60 et 150 EUR/m2. Les imitations parquet, pierre naturelle ou beton cire sont generalement dans la gamme moyenne a haute.

N'oubliez pas les frais annexes : la preparation du support (ragrage, primaire d'accrochage) coute entre 5 et 15 EUR/m2, la depose de l'ancien revetement entre 5 et 15 EUR/m2, et les plinthes en carrelage entre 5 et 10 EUR le metre lineaire. Prevoyez aussi 10% de surface supplementaire pour les chutes.`,
    faq: [
      { question: "Quel est le prix de la pose de carrelage au m2 ?", answer: "Le prix de pose seul (sans fourniture) varie de 25 a 55 EUR/m2 selon la technique. Avec fourniture, comptez entre 50 et 150 EUR/m2 tout compris." },
      { question: "Combien coute la pose de carrelage imitation parquet ?", answer: "La pose de carrelage imitation parquet coute entre 35 et 55 EUR/m2 (pose seule) en raison du format allonge. Avec la fourniture, comptez entre 60 et 120 EUR/m2." },
      { question: "Faut-il enlever l'ancien carrelage avant de poser le nouveau ?", answer: "Pas necessairement. Il est possible de poser du carrelage sur un ancien carrelage si celui-ci est bien adherent et plan. Un primaire d'accrochage est alors indispensable." },
    ],
    keywords: ["prix pose carrelage m2", "tarif carrelage pose", "cout carrelage au m2", "devis pose carrelage"],
  },
  {
    slug: "carrelage-imitation-parquet-avantages",
    serviceSlug: "pose-carrelage",
    title: "Carrelage imitation parquet : avantages, prix et conseils",
    h1: "Carrelage imitation parquet : pourquoi le choisir ?",
    metaDescription: "Carrelage imitation parquet : avantages, inconvenients, prix et conseils de pose. Une alternative elegante et pratique au parquet. Devis gratuit.",
    content: `Le carrelage imitation parquet connait un succes grandissant. Il reproduit fidelement l'aspect du bois naturel tout en offrant les avantages techniques du carrelage. C'est un choix particulierement pertinent pour les pieces humides et les rez-de-chaussee.

Les avantages sont nombreux. Le carrelage imitation parquet est impermeable, ce qui le rend ideal pour les salles de bain, cuisines et buanderies. Il ne craint ni les taches, ni les rayures, ni les chocs. Son entretien est simple : un passage de serpilliere suffit. Il est compatible avec un plancher chauffant et offre une excellente conductivite thermique. Sa duree de vie depasse facilement 30 ans.

En termes d'esthetique, les progres technologiques permettent aujourd'hui des imitations tres realistes. Les carreaux reproduisent les veinures, les noeuds et meme le relief du bois. Les formats allonges (20x120 cm, 30x150 cm) renforcent l'illusion. Les finitions disponibles vont du chene clair au noyer fonce, en passant par le bois vieilli ou le bois blanchi.

Le prix du carrelage imitation parquet varie de 20 a 80 EUR/m2 pour la fourniture seule. Les modeles d'entree de gamme (20 a 35 EUR/m2) offrent un rendu correct. Le milieu de gamme (35 a 60 EUR/m2) propose des finitions plus realistes avec du relief. Le haut de gamme (60 a 80 EUR/m2) est quasi indiscernable du vrai bois.

La pose en decale (comme un vrai parquet) est recommandee pour un rendu optimal. Elle necessite un carreleur experimente car les formats allonges sont plus exigeants en termes de planeite du support et de precision de pose.`,
    faq: [
      { question: "Le carrelage imitation parquet est-il moins cher que le vrai parquet ?", answer: "Le prix est comparable : 20 a 80 EUR/m2 pour le carrelage imitation bois contre 30 a 120 EUR/m2 pour un parquet massif. Mais le carrelage dure plus longtemps et coute moins en entretien." },
      { question: "Le carrelage imitation parquet est-il froid ?", answer: "Oui, le carrelage est naturellement plus froid que le bois. Cependant, avec un plancher chauffant, il devient tres confortable car le carrelage conduit mieux la chaleur que le parquet." },
      { question: "Peut-on poser du carrelage imitation parquet soi-meme ?", answer: "C'est possible mais delicat. Les formats allonges sont plus difficiles a poser que le carrelage classique. Le support doit etre parfaitement plan. Un professionnel garantit un resultat optimal." },
    ],
    keywords: ["carrelage imitation parquet", "carrelage effet bois", "carrelage parquet avantages", "prix carrelage imitation bois"],
  },
  {
    slug: "carrelage-exterieur-terrasse",
    serviceSlug: "pose-carrelage",
    title: "Pose carrelage terrasse exterieure : prix et conseils 2026",
    h1: "Carrelage de terrasse exterieure : guide de pose et prix",
    metaDescription: "Pose carrelage terrasse exterieure : prix de 40 a 100 EUR/m2, choix du carrelage, techniques de pose. Guide complet et devis gratuit.",
    content: `La pose de carrelage sur une terrasse exterieure necessite des materiaux et des techniques specifiques pour resister aux intemperies, au gel et aux variations de temperature. Un carrelage exterieur mal pose peut se fissurer ou se decoller des le premier hiver.

Le choix du carrelage est crucial. Il doit etre classe R11 minimum (resistance a la glissance), avoir une absorption d'eau inferieure a 3% (norme ISO pour la resistance au gel), et presenter une epaisseur d'au moins 9 mm. Les materiaux les plus adaptes sont le gres cerame pleine masse, la pierre reconstituee et les dalles en beton. Evitez la faience et le carrelage emaille non prevu pour l'exterieur.

Les techniques de pose pour l'exterieur sont la pose collee sur chape (la plus courante), la pose sur plots (pour les terrasses surelevees, sans colle ni joint), et la pose scellee au mortier (traditionnelle, tres resistante). La pose sur plots est de plus en plus populaire car elle facilite le drainage et permet un demontage facile.

Le prix de pose d'un carrelage de terrasse varie de 40 a 100 EUR/m2 tout compris (fourniture et pose). La pose collee coute entre 40 et 70 EUR/m2, la pose sur plots entre 50 et 80 EUR/m2, et la pose scellee entre 60 et 100 EUR/m2.

Les points critiques a respecter sont : une pente de 1 a 2% pour l'evacuation des eaux de pluie, des joints de dilatation tous les 20 a 25 m2, des joints de fractionnement autour des points singuliers, et l'utilisation d'une colle et de joints adaptes a l'exterieur (classe C2S selon la norme EN 12004).`,
    faq: [
      { question: "Quel carrelage choisir pour une terrasse exterieure ?", answer: "Choisissez un gres cerame pleine masse, classe R11 minimum pour l'antiderapance, avec une absorption d'eau inferieure a 3% pour la resistance au gel. Epaisseur minimale de 9 mm." },
      { question: "Quel est le prix du carrelage de terrasse pose ?", answer: "Comptez entre 40 et 100 EUR/m2 tout compris selon la technique de pose et la qualite du carrelage. La pose sur plots est legerement plus chere mais offre plus d'avantages." },
      { question: "Le carrelage de terrasse resiste-t-il au gel ?", answer: "Oui, a condition de choisir un carrelage avec une absorption d'eau inferieure a 3% (norme gres cerame) et d'utiliser une colle et des joints adaptes a l'exterieur." },
    ],
    keywords: ["carrelage terrasse exterieure", "pose carrelage exterieur prix", "carrelage terrasse antiderapant", "carrelage exterieur gel"],
  },
  // Installation VMC
  {
    slug: "vmc-double-flux-prix-avantages",
    serviceSlug: "installation-vmc",
    title: "VMC double flux : prix, avantages et economies 2026",
    h1: "VMC double flux : prix d'installation et avantages",
    metaDescription: "VMC double flux : prix de 4 000 a 8 000 EUR. Economies de chauffage, confort, qualite de l'air. Comparatif et devis gratuit.",
    content: `La VMC double flux est un systeme de ventilation qui recupere la chaleur de l'air extrait pour prechauffer l'air neuf entrant dans le logement. Elle permet de ventiler efficacement tout en limitant les pertes de chaleur, contrairement a la VMC simple flux qui rejette l'air chaud a l'exterieur.

Le prix d'une VMC double flux varie entre 4 000 et 8 000 EUR pose comprise, selon la surface du logement, la puissance du caisson et la complexite de l'installation. Ce cout est nettement superieur a une VMC simple flux (500 a 1 500 EUR), mais les economies de chauffage compensent cet ecart sur le long terme.

Les avantages de la VMC double flux sont significatifs. Elle recupere jusqu'a 90% de la chaleur de l'air extrait, ce qui reduit la facture de chauffage de 15 a 25%. L'air entrant est filtre, ce qui ameliore la qualite de l'air interieur en eliminant pollens, poussieres fines et pollution exterieure. Le confort thermique est ameliore car l'air frais entrant est prerechaffe.

L'installation d'une VMC double flux est plus complexe qu'une simple flux car elle necessite un double reseau de gaines : un pour l'extraction de l'air vicie et un pour l'insufflation de l'air neuf. L'espace necessaire pour le caisson echangeur et les gaines doit etre anticipe, idealement lors d'une construction ou d'une renovation importante.

L'entretien d'une VMC double flux est essentiel pour maintenir ses performances. Les filtres doivent etre nettoyes tous les 3 mois et remplaces tous les ans. L'echangeur doit etre nettoye une fois par an. Un entretien professionnel annuel est recommande et coute entre 100 et 200 EUR.`,
    faq: [
      { question: "Quel est le prix d'une VMC double flux ?", answer: "Le prix d'une VMC double flux varie de 4 000 a 8 000 EUR pose comprise. Ce cout inclut le caisson echangeur, les gaines, les bouches et la main d'oeuvre." },
      { question: "Combien economise-t-on avec une VMC double flux ?", answer: "La VMC double flux permet de reduire la facture de chauffage de 15 a 25% en recuperant jusqu'a 90% de la chaleur de l'air extrait, soit une economie de 200 a 500 EUR par an." },
      { question: "La VMC double flux est-elle bruyante ?", answer: "Les modeles modernes sont tres silencieux (20 a 35 dB). Le caisson doit etre installe dans un local technique ou un comble pour minimiser le bruit. Des silencieux peuvent etre ajoutes sur les gaines." },
    ],
    keywords: ["VMC double flux prix", "VMC double flux avantages", "prix installation VMC double flux", "economies VMC double flux"],
  },
  {
    slug: "vmc-hygro-b-fonctionnement",
    serviceSlug: "installation-vmc",
    title: "VMC hygroreglable type B : fonctionnement et prix 2026",
    h1: "VMC hygroreglable type B : comment ca fonctionne ?",
    metaDescription: "VMC hygro B : fonctionnement, avantages et prix. La ventilation intelligente qui s'adapte a l'humidite. Guide complet et devis gratuit.",
    content: `La VMC hygroreglable type B est un systeme de ventilation dont le debit d'air s'adapte automatiquement en fonction du taux d'humidite dans chaque piece. Contrairement a la VMC hygro A (entrees d'air fixes), la VMC hygro B possede des entrees d'air ET des bouches d'extraction hygroreglables.

Le fonctionnement est simple et autonome. Des capteurs d'humidite integres dans les bouches d'extraction et les entrees d'air mesurent en permanence le taux d'humidite. Quand l'humidite augmente (douche, cuisson, sechage du linge), les bouches s'ouvrent davantage pour evacuer l'air humide plus rapidement. Quand l'humidite est normale, le debit se reduit au minimum, ce qui limite les deperditions de chaleur.

Le prix d'une VMC hygroreglable type B varie entre 700 et 2 000 EUR pose comprise, selon la surface du logement et la gamme choisie. C'est un excellent compromis entre la VMC simple flux autoregable (400 a 800 EUR) et la VMC double flux (4 000 a 8 000 EUR).

Les economies d'energie generees par la VMC hygro B sont estimees entre 10 et 15% sur la facture de chauffage par rapport a une VMC autoregable classique. Le debit d'air est reduit de 20 a 40% en moyenne, ce qui limite les pertes de chaleur sans compromettre la qualite de l'air interieur.

La VMC hygro B est la solution la plus couramment installee en construction neuve car elle repond aux exigences de la RE 2020 en matiere de ventilation. En renovation, elle s'installe facilement en remplacement d'une VMC autoregable existante, car le reseau de gaines est compatible.`,
    faq: [
      { question: "Quelle difference entre VMC hygro A et hygro B ?", answer: "La VMC hygro A a des entrees d'air fixes et des bouches d'extraction hygroreglables. La VMC hygro B a les deux hygroreglables, ce qui offre une meilleure regulation et plus d'economies d'energie." },
      { question: "Combien coute une VMC hygroreglable type B ?", answer: "Le prix d'une VMC hygro B varie de 700 a 2 000 EUR pose comprise. C'est environ 30 a 50% plus cher qu'une VMC autoregable mais les economies de chauffage compensent rapidement." },
      { question: "La VMC hygro B est-elle obligatoire en construction neuve ?", answer: "La VMC hygro B n'est pas obligatoire en tant que telle, mais la RE 2020 impose des exigences de ventilation que la VMC hygro B satisfait facilement, ce qui en fait le choix le plus courant." },
    ],
    keywords: ["VMC hygroreglable type B", "VMC hygro B fonctionnement", "prix VMC hygro B", "ventilation hygroreglable"],
  },
  {
    slug: "humidite-maison-solutions",
    serviceSlug: "installation-vmc",
    title: "Humidite dans la maison : causes et solutions efficaces",
    h1: "Solutions contre l'humidite dans la maison",
    metaDescription: "Humidite, condensation, moisissures : decouvrez les causes et les solutions efficaces pour assainir votre logement. Guide complet et devis gratuit.",
    content: `L'humidite dans la maison est un probleme frequent qui peut avoir des consequences graves sur la sante des occupants (allergies, problemes respiratoires) et sur le batiment (moisissures, degradation des materiaux). Identifier la cause est la premiere etape pour trouver la bonne solution.

Les principales causes d'humidite sont : la condensation (air interieur trop humide qui se condense sur les surfaces froides), les remontees capillaires (eau du sol qui remonte dans les murs par capillarite), les infiltrations d'eau (defaut d'etancheite de la toiture, des murs ou des menuiseries), et les fuites de canalisation.

La condensation est la cause la plus frequente. Elle se manifeste par de la buee sur les vitres, des moisissures dans les angles des murs et au niveau des ponts thermiques. Les solutions sont l'amelioration de la ventilation (installation ou remplacement de la VMC), l'isolation des murs et des fenetres pour supprimer les ponts thermiques, et l'adoption de bons gestes au quotidien (aerer, ne pas obstruer les bouches de ventilation).

Les remontees capillaires touchent surtout les maisons anciennes sans barriere d'etancheite. Les solutions sont l'injection de resine hydrophobe dans les murs (30 a 80 EUR par metre lineaire), la mise en place d'un drain peripherique, ou l'installation d'un systeme d'assechement electronique.

Pour les infiltrations, la solution est de traiter la cause : reparer la toiture, refaire l'etancheite des murs ou des menuiseries, ou traiter les fissures. Un diagnostic professionnel est souvent necessaire pour identifier precisement l'origine de l'humidite et proposer le traitement adapte.`,
    faq: [
      { question: "Comment savoir si mon probleme d'humidite vient de la condensation ?", answer: "La condensation se manifeste par de la buee sur les vitres, des moisissures noires dans les angles et sur les murs froids. Elle est plus frequente en hiver et dans les pieces mal ventilees." },
      { question: "Combien coute un traitement contre l'humidite ?", answer: "Le cout depend de la cause : 500 a 2 000 EUR pour une VMC, 30 a 80 EUR/ml pour un traitement par injection contre les remontees capillaires, 500 a 5 000 EUR pour un drainage peripherique." },
      { question: "Les absorbeurs d'humidite sont-ils efficaces ?", answer: "Les absorbeurs d'humidite chimiques sont un palliatif temporaire, pas une solution durable. Ils sont utiles en complement mais ne resolvent pas la cause du probleme d'humidite." },
    ],
    keywords: ["humidite maison solutions", "probleme humidite", "moisissure maison", "condensation murs"],
  },
  // Ravalement facade
  {
    slug: "ravalement-facade-prix-m2",
    serviceSlug: "ravalement-facade",
    title: "Prix ravalement de facade au m2 en 2026 - Tarifs et devis",
    h1: "Combien coute un ravalement de facade au m2 en 2026 ?",
    metaDescription: "Prix ravalement facade : de 30 a 120 EUR/m2 selon la technique. Peinture, enduit, nettoyage, isolation. Comparez 3 devis gratuits.",
    content: `Le prix d'un ravalement de facade varie considerablement selon l'etat du mur, la technique choisie et la surface a traiter. Il est important de bien comprendre les differentes options pour estimer correctement le budget.

Les tarifs moyens au m2 pour un ravalement de facade sont les suivants : nettoyage simple (hydrogommage, sablage) entre 15 et 40 EUR/m2, peinture de facade entre 20 et 45 EUR/m2, enduit de facade entre 40 et 80 EUR/m2, et ravalement avec isolation thermique par l'exterieur (ITE) entre 80 et 200 EUR/m2.

Pour une maison individuelle de 100 m2 de facade, le budget se situe donc entre 3 000 EUR pour un simple nettoyage et 20 000 EUR pour un ravalement complet avec isolation par l'exterieur. Les frais annexes a prevoir sont l'echafaudage (15 a 25 EUR/m2), les traitements anti-mousse et hydrofuges (5 a 15 EUR/m2), et les reparations de fissures (10 a 30 EUR par metre lineaire).

La technique de ravalement depend de l'etat de la facade et du support. Un mur en bon etat peut se contenter d'un nettoyage et d'une peinture. Un mur fissure ou degrade necessite un piquage de l'ancien enduit et la pose d'un nouvel enduit. Un mur mal isole beneficiera d'un ravalement avec ITE, plus couteux mais tres rentable sur le long terme.

Des aides financieres sont disponibles pour le ravalement de facade, notamment si des travaux d'isolation sont inclus. MaPrimeRenov, les CEE et l'eco-pret a taux zero peuvent reduire significativement le reste a charge. Certaines communes imposent un ravalement tous les 10 ans et proposent des aides specifiques.`,
    faq: [
      { question: "Quel est le prix d'un ravalement de facade ?", answer: "Le prix varie de 30 a 120 EUR/m2 selon la technique. Pour une maison de 100 m2 de facade, comptez entre 3 000 et 12 000 EUR hors isolation par l'exterieur." },
      { question: "Quelles aides pour un ravalement de facade ?", answer: "Les aides MaPrimeRenov et CEE sont disponibles si le ravalement inclut une isolation par l'exterieur. L'eco-pret a taux zero et certaines aides communales peuvent aussi s'appliquer." },
      { question: "A quelle frequence faut-il ravaler sa facade ?", answer: "Il est recommande de ravaler sa facade tous les 10 a 15 ans. Dans certaines communes, le ravalement est obligatoire tous les 10 ans sous peine d'amende." },
    ],
    keywords: ["prix ravalement facade m2", "cout ravalement maison", "tarif ravalement facade", "devis ravalement facade"],
  },
  {
    slug: "ravalement-facade-obligation",
    serviceSlug: "ravalement-facade",
    title: "Ravalement de facade obligatoire : reglementation 2026",
    h1: "Le ravalement de facade est-il obligatoire ?",
    metaDescription: "Ravalement facade obligatoire tous les 10 ans ? Reglementation, communes concernees, sanctions. Tout savoir sur l'obligation de ravalement.",
    content: `En France, le ravalement de facade est une obligation legale pour les proprietaires. L'article L132-1 du Code de la construction et de l'habitation impose aux proprietaires de maintenir les facades de leurs immeubles en bon etat de proprete.

Dans certaines communes, un arrete municipal impose un ravalement de facade tous les 10 ans. C'est notamment le cas a Paris, ou le prefet de police peut envoyer une injonction de ravaler aux proprietaires qui ne respectent pas cette obligation. Apres injonction, le proprietaire dispose de 6 mois pour realiser les travaux.

En cas de non-respect de l'injonction, le proprietaire s'expose a une amende pouvant aller jusqu'a 3 750 EUR. La commune peut aussi faire executer les travaux d'office aux frais du proprietaire, avec une majoration significative du cout.

En copropriete, le ravalement de facade est vote en assemblee generale des coproprietaires. La decision est prise a la majorite absolue (article 25 de la loi du 10 juillet 1965). Le syndic peut proposer plusieurs devis et les coproprietaires choisissent l'entreprise et le budget.

Il est important de savoir que l'obligation de ravalement ne concerne pas uniquement l'esthetique. Un ravalement permet de detecter et traiter les fissures, d'ameliorer l'etancheite du batiment et de prevenir les degradations structurelles. C'est aussi l'occasion d'ameliorer l'isolation thermique du batiment en optant pour un ravalement avec ITE.`,
    faq: [
      { question: "Le ravalement de facade est-il obligatoire tous les 10 ans ?", answer: "Pas partout. Certaines communes imposent un ravalement tous les 10 ans par arrete municipal. Ailleurs, l'obligation est de maintenir la facade en bon etat sans periodicite fixe." },
      { question: "Que risque-t-on si on ne ravale pas sa facade ?", answer: "En cas d'injonction municipale non respectee, le proprietaire risque une amende de 3 750 EUR et la commune peut faire executer les travaux d'office a ses frais." },
      { question: "Qui paie le ravalement en copropriete ?", answer: "Le ravalement est finance par les coproprietaires au prorata de leurs tantiemes. La decision est votee en assemblee generale a la majorite absolue." },
    ],
    keywords: ["ravalement facade obligatoire", "obligation ravalement 10 ans", "reglementation ravalement", "injonction ravalement facade"],
  },
  {
    slug: "enduit-facade-types",
    serviceSlug: "ravalement-facade",
    title: "Types d'enduit de facade : choisir le bon enduit en 2026",
    h1: "Les differents types d'enduit de facade : comment choisir ?",
    metaDescription: "Enduit de facade : monocouche, traditionnel, chaux, ciment. Comparez les types d'enduit, leurs avantages et leurs prix. Devis gratuit.",
    content: `Le choix de l'enduit de facade est determinant pour l'esthetique et la protection de vos murs exterieurs. Chaque type d'enduit a ses avantages, ses limites et ses contraintes de mise en oeuvre.

L'enduit monocouche est le plus utilise aujourd'hui. Comme son nom l'indique, il s'applique en une seule couche (parfois deux passes), ce qui reduit le temps de pose. Il est disponible dans de nombreux coloris et finitions (gratte, taloche, ecrase, projete). Son prix est de 25 a 50 EUR/m2 pose. Il convient aux constructions neuves et aux murs en bon etat.

L'enduit traditionnel (ou enduit trois couches) est compose d'un gobetis (couche d'accrochage), d'un corps d'enduit (mise a niveau) et d'une couche de finition. Plus long a poser, il est aussi plus resistant et plus durable. Son prix est de 40 a 80 EUR/m2 pose. Il est recommande pour les renovations et les murs irreguliers.

L'enduit a la chaux est le choix privilegie pour les batiments anciens et les maisons de caractere. La chaux est un materiau respirant qui laisse passer la vapeur d'eau, ce qui evite les problemes d'humidite dans les murs anciens. Son prix est de 50 a 90 EUR/m2 pose. Il est incompatible avec les supports en ciment.

L'enduit au ciment est le plus resistant et le plus impermeable. Il convient aux murs exposes aux intemperies et aux constructions modernes. Attention, il n'est pas adapte aux murs anciens en pierre ou en brique car il empeche le mur de respirer, ce qui peut provoquer des remontees d'humidite. Son prix est de 30 a 60 EUR/m2 pose.

Avant de choisir, faites analyser votre support par un professionnel. Un enduit inadapte au support peut se fissurer, se decoller ou provoquer des desordres graves dans la structure du mur.`,
    faq: [
      { question: "Quel enduit choisir pour une maison ancienne ?", answer: "Pour une maison ancienne en pierre ou en brique, l'enduit a la chaux est le meilleur choix car il laisse respirer le mur. Evitez le ciment qui bloque la vapeur d'eau et provoque des desordres." },
      { question: "Combien coute un enduit de facade ?", answer: "Le prix varie selon le type : enduit monocouche 25 a 50 EUR/m2, enduit traditionnel 40 a 80 EUR/m2, enduit a la chaux 50 a 90 EUR/m2, enduit au ciment 30 a 60 EUR/m2." },
      { question: "Quelle finition d'enduit choisir ?", answer: "Les finitions les plus courantes sont le gratte (aspect lisse strie), le taloche (aspect lisse), l'ecrase (aspect texture), et le projete (aspect rustique). Le choix depend du style souhaite et du PLU local." },
    ],
    keywords: ["enduit facade types", "enduit monocouche", "enduit chaux facade", "choix enduit exterieur"],
  },
  // Pose fenetres
  {
    slug: "double-vitrage-prix-economies",
    serviceSlug: "pose-fenetres",
    title: "Prix double vitrage et economies d'energie 2026",
    h1: "Double vitrage : prix d'installation et economies realisees",
    metaDescription: "Prix double vitrage : de 150 a 500 EUR par fenetre. Economies d'energie, aides financieres, types de vitrage. Comparez 3 devis gratuits.",
    content: `Le remplacement de vos anciennes fenetres simple vitrage par du double vitrage est l'un des travaux de renovation les plus rentables en termes d'economies d'energie. Les fenetres representent 10 a 15% des deperditions thermiques d'un logement mal isole.

Le prix d'une fenetre double vitrage varie de 150 a 500 EUR par fenetre (fourniture et pose), selon les dimensions, le materiau du chassis (PVC, aluminium, bois) et les performances du vitrage. Le triple vitrage coute 10 a 30% de plus que le double vitrage et est recommande principalement pour les facades exposees au nord et les climats rigoureux.

Les economies d'energie realisees grace au double vitrage sont significatives. En remplacant du simple vitrage par du double vitrage, vous pouvez reduire votre facture de chauffage de 10 a 15%. Pour un foyer depensant 1 500 EUR/an de chauffage, cela represente une economie de 150 a 225 EUR par an. Le retour sur investissement se situe entre 5 et 10 ans selon le nombre de fenetres remplacees et les aides obtenues.

Les differents types de double vitrage offrent des performances variees : le double vitrage standard (4/16/4) avec un coefficient Ug de 2,8, le double vitrage a isolation renforcee (ITR) avec un Ug de 1,0 a 1,4, le double vitrage a controle solaire qui limite la surchauffe en ete, et le double vitrage phonique qui reduit les nuisances sonores.

Les aides financieres pour le remplacement des fenetres incluent MaPrimeRenov (jusqu'a 100 EUR par fenetre selon les revenus), les CEE (primes variables), l'eco-pret a taux zero (jusqu'a 50 000 EUR sans interets) et la TVA reduite a 5,5% pour les travaux de renovation energetique.`,
    faq: [
      { question: "Combien coute le remplacement d'une fenetre en double vitrage ?", answer: "Le prix varie de 150 a 500 EUR par fenetre pose comprise, selon le materiau et le type de vitrage. Une maison de 10 fenetres necessite un budget de 2 000 a 5 000 EUR." },
      { question: "Quelles economies realise-t-on avec le double vitrage ?", answer: "Le remplacement du simple par du double vitrage reduit la facture de chauffage de 10 a 15%, soit 150 a 225 EUR par an pour un foyer moyen." },
      { question: "Double ou triple vitrage : lequel choisir ?", answer: "Le double vitrage ITR suffit dans la plupart des cas. Le triple vitrage est recommande pour les facades nord, les zones tres froides ou les projets de maison passive." },
    ],
    keywords: ["prix double vitrage", "double vitrage economies", "remplacement fenetre prix", "double vitrage isolation"],
  },
  {
    slug: "fenetre-pvc-vs-aluminium",
    serviceSlug: "pose-fenetres",
    title: "Fenetre PVC vs aluminium : comparatif complet 2026",
    h1: "Fenetre PVC ou aluminium : quel materiau choisir ?",
    metaDescription: "PVC ou aluminium pour vos fenetres ? Comparatif prix, isolation, esthetique, entretien. Guide pour bien choisir vos menuiseries.",
    content: `Le choix entre fenetre PVC et fenetre aluminium est l'une des decisions les plus importantes lors d'un projet de remplacement de menuiseries. Chaque materiau a ses forces et ses faiblesses.

La fenetre PVC est le choix le plus populaire en France, representant plus de 60% du marche. Ses avantages sont un excellent rapport qualite-prix (200 a 500 EUR par fenetre posee), une tres bonne isolation thermique (Uw de 1,2 a 1,6), un entretien quasi inexistant, et une bonne duree de vie (30 a 40 ans). Ses inconvenients sont un choix de coloris plus limite (bien que les finitions imitant le bois ou les teintes RAL soient de plus en plus disponibles), des profiles plus epais qui reduisent legerement la surface vitree, et un aspect moins haut de gamme.

La fenetre aluminium offre un design plus fin et plus moderne, avec des profiles tres minces qui maximisent l'apport de lumiere. Ses avantages sont l'esthetique et la finesse des profiles, un large choix de coloris (toutes teintes RAL), une excellente resistance mecanique, et une recyclabilite a 100%. Ses inconvenients sont un prix plus eleve (400 a 800 EUR par fenetre posee), une isolation thermique legerement inferieure sans rupture de pont thermique, et la necessite d'une rupture de pont thermique pour atteindre les performances du PVC.

Le choix depend de vos priorites. Si le budget et l'isolation thermique sont prioritaires, le PVC est recommande. Si l'esthetique et la finesse des profiles sont essentielles (grandes baies vitrees, maison contemporaine), l'aluminium s'impose. Le mixte aluminium-PVC combine les avantages des deux materiaux mais a un cout superieur.

Quel que soit le materiau choisi, exigez des fenetres certifiees NF ou CSTB, avec un coefficient Uw inferieur a 1,4 pour beneficier des aides a la renovation energetique.`,
    faq: [
      { question: "Quel est le meilleur isolant entre le PVC et l'aluminium ?", answer: "Le PVC est naturellement plus isolant que l'aluminium. Toutefois, les fenetres aluminium avec rupture de pont thermique atteignent des performances comparables (Uw de 1,4 a 1,8)." },
      { question: "Quel est le prix d'une fenetre PVC vs aluminium ?", answer: "Une fenetre PVC coute entre 200 et 500 EUR posee, contre 400 a 800 EUR pour une fenetre aluminium. L'ecart de prix est d'environ 40 a 60%." },
      { question: "Quelle est la duree de vie d'une fenetre PVC vs aluminium ?", answer: "Les deux materiaux offrent une excellente duree de vie : 30 a 40 ans pour le PVC et 40 a 50 ans pour l'aluminium. L'aluminium vieillit mieux esthetiquement." },
    ],
    keywords: ["fenetre PVC vs aluminium", "comparatif fenetre", "fenetre PVC prix", "fenetre aluminium prix"],
  },
  {
    slug: "credit-impot-fenetres",
    serviceSlug: "pose-fenetres",
    title: "Aides MaPrimeRenov fenetres 2026 : montants et conditions",
    h1: "Aides MaPrimeRenov pour le remplacement de fenetres en 2026",
    metaDescription: "MaPrimeRenov fenetres 2026 : montants, conditions, demarches. Tout savoir sur les aides pour remplacer vos fenetres. Guide complet.",
    content: `Le remplacement des fenetres est eligible a plusieurs aides financieres en 2026, dont MaPrimeRenov, les CEE, l'eco-pret a taux zero et la TVA a taux reduit. Ces aides peuvent couvrir une part significative du cout total des travaux.

MaPrimeRenov est l'aide principale pour le remplacement de fenetres simple vitrage par du double ou triple vitrage. Le montant varie selon les revenus du menage : jusqu'a 100 EUR par fenetre pour les revenus tres modestes (MaPrimeRenov Bleu), 80 EUR pour les revenus modestes (Jaune), 40 EUR pour les revenus intermediaires (Violet). Les menages aux revenus superieurs ne sont plus eligibles pour le remplacement de fenetres seul.

Les conditions pour beneficier de MaPrimeRenov fenetres sont : le logement doit avoir plus de 15 ans, les travaux doivent etre realises par un professionnel RGE (Reconnu Garant de l'Environnement), les fenetres posees doivent respecter un coefficient de transmission thermique Uw inferieur ou egal a 1,3 W/m2.K, et la demande doit etre faite avant le debut des travaux.

Les Certificats d'Economies d'Energie (CEE) viennent en complement de MaPrimeRenov. Ils sont verses par les fournisseurs d'energie et representent generalement entre 30 et 80 EUR par fenetre. Les deux aides sont cumulables.

L'eco-pret a taux zero (eco-PTZ) permet de financer le reste a charge sans payer d'interets, jusqu'a 50 000 EUR sur 20 ans. La TVA est reduite a 5,5% pour les travaux de renovation energetique, au lieu de 20% pour les travaux classiques. Enfin, certaines collectivites locales proposent des aides complementaires : renseignez-vous aupres de votre mairie ou de l'ADIL de votre departement.`,
    faq: [
      { question: "Quel montant MaPrimeRenov pour le remplacement de fenetres ?", answer: "Le montant varie de 40 a 100 EUR par fenetre selon vos revenus. Cette aide est cumulable avec les CEE (30 a 80 EUR par fenetre) et l'eco-PTZ." },
      { question: "Faut-il un artisan RGE pour les aides fenetres ?", answer: "Oui, les travaux doivent etre realises par un professionnel certifie RGE pour beneficier de MaPrimeRenov, des CEE et de l'eco-PTZ. La TVA a 5,5% necessite aussi un professionnel." },
      { question: "Peut-on cumuler les aides pour les fenetres ?", answer: "Oui, MaPrimeRenov, les CEE, l'eco-PTZ et la TVA a 5,5% sont cumulables. Le cumul peut couvrir 30 a 60% du cout total selon vos revenus." },
    ],
    keywords: ["MaPrimeRenov fenetres 2026", "aides remplacement fenetres", "credit impot fenetres", "subvention fenetres"],
  },
  // Couverture toiture
  {
    slug: "reparation-toiture-prix",
    serviceSlug: "couverture-toiture",
    title: "Prix reparation toiture et fuite 2026 - Tarifs et devis",
    h1: "Combien coute une reparation de toiture en 2026 ?",
    metaDescription: "Prix reparation toiture : de 200 a 2 000 EUR selon la panne. Fuite, tuiles cassees, faitage, gouttiere. 3 devis gratuits de couvreurs.",
    content: `La reparation de toiture est une intervention courante qui doit etre realisee rapidement pour eviter des degats plus importants a la charpente et a l'interieur du logement. Les prix varient selon le type de reparation et l'ampleur des degats.

Les tarifs moyens pour les reparations courantes sont : remplacement de tuiles cassees entre 30 et 80 EUR par tuile posee, reparation de faitage entre 40 et 80 EUR par metre lineaire, reparation de noue ou d'aretier entre 50 et 100 EUR par metre lineaire, reparation de solin (raccord cheminee) entre 200 et 500 EUR, et reparation de gouttiere entre 100 et 300 EUR.

Le cout du deplacement et de la mise en securite (echafaudage ou nacelle) represente souvent une part importante du budget. Comptez entre 200 et 500 EUR pour l'installation d'un echafaudage et entre 100 et 300 EUR pour une nacelle elevatrice. Certains couvreurs incluent ces frais dans leur tarif horaire (40 a 60 EUR/h).

En cas de fuite de toiture, l'intervention d'urgence coute entre 200 et 800 EUR selon la cause. Un bachage provisoire coute entre 200 et 400 EUR et permet de proteger le logement en attendant la reparation definitive. Si la fuite est couverte par votre assurance habitation (tempete, grele, poids de la neige), declarez le sinistre dans les 5 jours.

Avant de faire intervenir un couvreur, demandez plusieurs devis detailles. Un couvreur serieux monte sur le toit pour evaluer les degats avant d'etablir son devis. Mefiez-vous des demarcheurs qui frappent a votre porte apres une tempete : ce sont souvent des escrocs.`,
    faq: [
      { question: "Combien coute la reparation d'une fuite de toiture ?", answer: "La reparation d'une fuite coute entre 200 et 800 EUR selon la cause et l'ampleur des travaux. Un bachage d'urgence coute 200 a 400 EUR en attendant la reparation definitive." },
      { question: "L'assurance couvre-t-elle les reparations de toiture ?", answer: "L'assurance habitation couvre les degats causes par les evenements climatiques (tempete, grele, neige). L'usure normale et le manque d'entretien ne sont pas couverts." },
      { question: "A quelle frequence faut-il inspecter sa toiture ?", answer: "Une inspection visuelle annuelle est recommandee, idealement au printemps apres l'hiver. Une inspection professionnelle tous les 5 a 10 ans permet de detecter les problemes non visibles." },
    ],
    keywords: ["reparation toiture prix", "fuite toiture cout", "reparation tuiles prix", "couvreur tarif"],
  },
  {
    slug: "renovation-toiture-complete-prix",
    serviceSlug: "couverture-toiture",
    title: "Prix renovation complete de toiture 2026 - Devis couvreur",
    h1: "Combien coute une renovation complete de toiture ?",
    metaDescription: "Prix renovation toiture complete : de 80 a 250 EUR/m2. Couverture, charpente, isolation, zinguerie. Guide complet et devis gratuit.",
    content: `La renovation complete de la toiture est un chantier majeur qui intervient generalement lorsque la couverture a atteint sa fin de vie (40 a 100 ans selon les materiaux) ou lorsque la charpente presente des signes de faiblesse. C'est aussi l'occasion d'ameliorer l'isolation et de mettre aux normes l'ensemble de la toiture.

Le prix d'une renovation complete varie de 80 a 250 EUR/m2 selon les travaux inclus. La depose de l'ancienne couverture coute entre 10 et 20 EUR/m2. La fourniture et pose de la nouvelle couverture coute entre 40 et 120 EUR/m2 selon le materiau (tuile terre cuite, tuile beton, ardoise, zinc). La renovation de charpente coute entre 50 et 150 EUR/m2 si necessaire. L'isolation sous rampants coute entre 40 et 80 EUR/m2.

Pour une maison de 100 m2 au sol avec une toiture de 130 m2, le budget total se situe entre 10 000 et 30 000 EUR selon l'etendue des travaux. Ce montant comprend la couverture, la zinguerie (gouttieres, descentes, noues), l'ecran sous toiture, et eventuellement la renovation de la charpente et l'isolation.

La renovation de toiture est un bon moment pour installer des fenetres de toit (velux), des panneaux solaires ou une isolation performante. Ces travaux complementaires ajoutent au budget mais sont plus economiques quand ils sont realises en meme temps que la renovation de couverture car l'echafaudage est deja en place.

Un permis de construire n'est generalement pas necessaire pour une renovation a l'identique. En revanche, si vous modifiez l'aspect exterieur (changement de materiau, creation de lucarnes), une declaration prealable de travaux est obligatoire. Renseignez-vous aupres de votre mairie.`,
    faq: [
      { question: "Quel est le prix d'une renovation complete de toiture ?", answer: "Le prix varie de 80 a 250 EUR/m2 selon les travaux. Pour une maison de 100 m2, comptez entre 10 000 et 30 000 EUR pour une renovation complete." },
      { question: "Quand faut-il refaire sa toiture ?", answer: "Les signes qui indiquent qu'il faut refaire la toiture sont : de nombreuses tuiles cassees, des fuites repetees, une charpente affaissee, une toiture agee de plus de 40 ans (beton) ou 80 ans (terre cuite)." },
      { question: "Quelle est la duree des travaux pour refaire une toiture ?", answer: "La renovation complete d'une toiture de maison individuelle prend generalement 2 a 4 semaines selon l'ampleur des travaux et les conditions meteorologiques." },
    ],
    keywords: ["renovation toiture prix", "refaire toiture cout", "prix toiture complete", "devis couvreur renovation"],
  },
  {
    slug: "tuile-vs-ardoise",
    serviceSlug: "couverture-toiture",
    title: "Tuile ou ardoise : quel materiau pour votre toit ?",
    h1: "Tuile ou ardoise : comparatif pour choisir votre couverture",
    metaDescription: "Tuile ou ardoise pour votre toiture ? Comparez les prix, la duree de vie, l'esthetique et l'entretien de ces deux materiaux de couverture.",
    content: `Le choix entre tuile et ardoise est souvent dicte par la region et les traditions architecturales locales, mais il existe des differences importantes en termes de prix, de duree de vie et de performances.

La tuile en terre cuite est le materiau de couverture le plus repandu en France. Elle est disponible en de nombreux modeles (tuile canal, tuile mecanique, tuile plate) et coloris. Son prix varie de 20 a 60 EUR/m2 pour la fourniture et de 30 a 80 EUR/m2 pose comprise. Sa duree de vie est de 50 a 100 ans avec un entretien minimal. Elle resiste bien au gel et aux intemperies. Son poids (environ 40 a 60 kg/m2) necessite une charpente adaptee.

L'ardoise naturelle est un materiau noble et elegant, tres repandu dans l'ouest et le nord de la France. Son prix est plus eleve : 50 a 120 EUR/m2 pour la fourniture et 80 a 180 EUR/m2 pose comprise. Sa duree de vie est exceptionnelle : 75 a 150 ans pour l'ardoise naturelle de qualite. Elle est legerement plus legere que la tuile (25 a 35 kg/m2) et offre une excellente etancheite. La pose est plus complexe et necessite un couvreur specialise.

L'ardoise synthetique (fibrociment) est une alternative moins couteuse a l'ardoise naturelle : 20 a 40 EUR/m2 pour la fourniture. Sa duree de vie est cependant nettement inferieure (30 a 50 ans) et son esthetique moins noble. Elle reste une bonne option pour les budgets limites dans les regions ou l'ardoise est traditionnelle.

Le Plan Local d'Urbanisme (PLU) de votre commune peut imposer un materiau de couverture specifique. Renseignez-vous aupres de votre mairie avant de choisir. Dans les secteurs proteges, l'architecte des Batiments de France doit donner son accord sur le materiau et la teinte de la couverture.`,
    faq: [
      { question: "La tuile ou l'ardoise est-elle plus chere ?", answer: "L'ardoise naturelle est 2 a 3 fois plus chere que la tuile terre cuite : 80 a 180 EUR/m2 pose contre 30 a 80 EUR/m2 pour la tuile. Mais sa duree de vie est aussi 50% plus longue." },
      { question: "Quelle est la duree de vie d'une toiture en tuile vs ardoise ?", answer: "Une toiture en tuile terre cuite dure 50 a 100 ans. Une toiture en ardoise naturelle dure 75 a 150 ans. L'ardoise synthetique dure 30 a 50 ans." },
      { question: "Peut-on melanger tuile et ardoise sur un meme toit ?", answer: "Techniquement c'est possible mais esthetiquement deconseille. De plus, le PLU l'interdit souvent. Chaque pan de toiture doit generalement etre couvert d'un seul materiau." },
    ],
    keywords: ["tuile vs ardoise", "tuile ou ardoise", "prix tuile toiture", "prix ardoise toiture"],
  },
  // Terrassement
  {
    slug: "terrassement-terrain-prix",
    serviceSlug: "terrassement",
    title: "Prix terrassement terrain par m3 en 2026 - Tarifs et devis",
    h1: "Combien coute un terrassement de terrain en 2026 ?",
    metaDescription: "Prix terrassement : de 25 a 60 EUR/m3 selon le type de sol. Fondations, piscine, VRD, terrain en pente. Comparez 3 devis gratuits.",
    content: `Le terrassement est une etape fondamentale de tout projet de construction. Il consiste a preparer le terrain en deplacant des volumes de terre pour creer une surface plane, des fondations ou des tranchees. Le prix depend du volume de terre a deplacer, de la nature du sol et de l'accessibilite du chantier.

Le tarif moyen du terrassement se situe entre 25 et 60 EUR par m3 de terre deplacee. Ce prix comprend l'excavation, le chargement et le transport de la terre. L'evacuation en decheterie ou en centre de stockage peut ajouter 10 a 20 EUR/m3 supplementaires.

Les prix varient selon le type de sol : terre vegetale meuble entre 25 et 35 EUR/m3, terre argileuse compacte entre 35 et 50 EUR/m3, terrain rocheux entre 50 et 100 EUR/m3 (avec brise-roche hydraulique). Un terrain en pente necessite des travaux de remblai-deblai plus importants, ce qui augmente le budget de 20 a 50%.

Les differents types de terrassement et leurs prix indicatifs sont : terrassement pour fondations de maison entre 2 000 et 6 000 EUR, terrassement pour piscine entre 1 500 et 4 000 EUR, terrassement pour allee ou parking entre 1 000 et 3 000 EUR, terrassement pour tranchees (VRD) entre 15 et 30 EUR par metre lineaire.

Avant tout terrassement, une etude de sol (G2) est fortement recommandee. Elle coute entre 1 000 et 2 500 EUR et permet de connaitre la nature du sol, sa portance et le niveau de la nappe phreatique. Cette etude est obligatoire pour la construction d'une maison individuelle depuis la loi ELAN de 2018 dans les zones argileuses.`,
    faq: [
      { question: "Quel est le prix du terrassement au m3 ?", answer: "Le prix du terrassement varie de 25 a 60 EUR/m3 selon la nature du sol. L'evacuation de la terre en decheterie coute 10 a 20 EUR/m3 en supplement." },
      { question: "Faut-il une autorisation pour un terrassement ?", answer: "Un terrassement modifiant le relief du terrain de plus de 2 metres de hauteur et sur une surface de plus de 100 m2 necessite une declaration prealable de travaux." },
      { question: "Combien de temps dure un terrassement ?", answer: "Le terrassement d'une maison individuelle prend 2 a 5 jours. Un terrassement de piscine prend 1 a 2 jours. La duree depend du volume et de la nature du sol." },
    ],
    keywords: ["prix terrassement m3", "cout terrassement terrain", "tarif terrassement", "devis terrassement"],
  },
  {
    slug: "terrassement-piscine-guide",
    serviceSlug: "terrassement",
    title: "Guide terrassement piscine : etapes, prix et conseils 2026",
    h1: "Terrassement piscine : guide complet des etapes et prix",
    metaDescription: "Terrassement piscine : 1 500 a 4 000 EUR. Etapes, dimensions du trou, evacuation terre, conseils. Guide complet et devis gratuit.",
    content: `Le terrassement est la premiere etape concrete de la construction d'une piscine. Il consiste a creuser le trou qui accueillera le bassin et a preparer le fond pour recevoir la structure. C'est un chantier technique qui necessite un engin de chantier et un terrassier experimente.

Le prix du terrassement pour une piscine varie de 1 500 a 4 000 EUR selon les dimensions du bassin, la nature du sol et l'accessibilite du terrain. Pour une piscine standard de 8x4 metres, comptez environ 2 000 a 3 000 EUR. Un sol rocheux ou la presence d'eau (nappe phreatique) peut doubler le budget.

Les dimensions du trou sont plus grandes que celles de la piscine. Il faut prevoir 50 cm de plus de chaque cote pour permettre le travail de remblai, et 20 a 30 cm de plus en profondeur pour le lit de gravier et la dalle de fond. Pour une piscine de 8x4x1,50 m, le trou mesure environ 9x5x1,80 m, soit environ 80 m3 de terre a evacuer.

L'evacuation de la terre est un poste de cout significatif. Le volume de terre extrait est generalement de 50 a 100 m3 pour une piscine standard. L'evacuation coute entre 10 et 20 EUR/m3, soit 500 a 2 000 EUR. Une partie de la terre peut etre reutilisee pour le remblai autour de la piscine ou pour remodeler le terrain du jardin.

Les etapes du terrassement sont : le piquetage (tracage au sol des dimensions exactes), le decapage de la terre vegetale, l'excavation du trou, le nivellement du fond, la mise en place du lit de gravier, et le compactage. Le terrassier verifie la planeite du fond au laser pour garantir une assise parfaite du bassin.`,
    faq: [
      { question: "Combien coute le terrassement d'une piscine ?", answer: "Le terrassement d'une piscine coute entre 1 500 et 4 000 EUR selon les dimensions et la nature du sol. L'evacuation de la terre ajoute 500 a 2 000 EUR au budget." },
      { question: "Peut-on faire le terrassement de sa piscine soi-meme ?", answer: "C'est deconseille. Le terrassement necessite un engin de chantier (mini-pelle) et une expertise technique pour respecter les dimensions exactes et la planeite du fond." },
      { question: "Combien de temps dure le terrassement d'une piscine ?", answer: "Le terrassement d'une piscine standard prend 1 a 2 jours pour un terrassier professionnel equipe d'une mini-pelle. Le delai peut etre plus long en sol rocheux." },
    ],
    keywords: ["terrassement piscine prix", "creuser piscine cout", "trou piscine terrassement", "guide terrassement piscine"],
  },
  {
    slug: "vrd-viabilisation-terrain",
    serviceSlug: "terrassement",
    title: "Viabilisation terrain : etapes et prix VRD en 2026",
    h1: "Viabilisation de terrain : etapes et prix des travaux VRD",
    metaDescription: "Viabilisation terrain : prix de 5 000 a 15 000 EUR. Eau, electricite, assainissement, telecom. Etapes et devis gratuit.",
    content: `La viabilisation d'un terrain consiste a le raccorder aux differents reseaux publics (eau, electricite, gaz, assainissement, telecommunications) pour le rendre constructible. Les travaux de VRD (Voirie et Reseaux Divers) representent un budget significatif a anticiper lors de l'achat d'un terrain.

Le cout total de la viabilisation varie de 5 000 a 15 000 EUR selon l'eloignement des reseaux, la nature du terrain et le nombre de raccordements necessaires. Les prix moyens par raccordement sont : eau potable entre 800 et 2 000 EUR, electricite entre 1 000 et 3 000 EUR (selon la distance au transformateur), gaz entre 500 et 2 500 EUR, assainissement collectif entre 1 500 et 3 000 EUR (ou fosse septique individuelle entre 3 000 et 8 000 EUR), et telecommunications entre 200 et 500 EUR.

Les etapes de la viabilisation sont : la demande de raccordement aupres de chaque concessionnaire, l'obtention des devis, la realisation des tranchees sur le terrain, la pose des canalisations et cables, les raccordements aux reseaux publics, et les controles de conformite.

Le terrassement represente une part importante du cout de viabilisation. Les tranchees ont une profondeur de 60 cm a 1 m selon les reseaux et doivent respecter des distances de securite entre les differentes canalisations. Le prix du terrassement de tranchees est de 15 a 30 EUR par metre lineaire.

Avant d'acheter un terrain, demandez un certificat d'urbanisme operationnel qui precise les reseaux disponibles a proximite et les conditions de raccordement. Un terrain eloigne des reseaux peut couter beaucoup moins cher a l'achat mais la viabilisation peut s'averer tres couteuse si les reseaux sont a plusieurs centaines de metres.`,
    faq: [
      { question: "Combien coute la viabilisation d'un terrain ?", answer: "La viabilisation coute entre 5 000 et 15 000 EUR pour l'ensemble des raccordements (eau, electricite, gaz, assainissement, telecom). Le cout depend de la distance aux reseaux." },
      { question: "Qui paie la viabilisation d'un terrain ?", answer: "La viabilisation est a la charge du proprietaire du terrain pour la partie privee. La partie publique (de la voirie au compteur) est financee par les concessionnaires ou incluse dans les taxes d'urbanisme." },
      { question: "Combien de temps prend la viabilisation ?", answer: "La viabilisation complete prend generalement 2 a 6 mois, entre les demandes de raccordement, les delais d'instruction et les travaux. Anticipez ces delais dans votre planning de construction." },
    ],
    keywords: ["viabilisation terrain prix", "VRD prix", "raccordement reseaux terrain", "cout viabilisation"],
  },
  // Amenagement combles
  {
    slug: "amenagement-combles-prix-m2",
    serviceSlug: "amenagement-combles",
    title: "Prix amenagement combles au m2 en 2026 - Tarifs et devis",
    h1: "Combien coute l'amenagement de combles au m2 ?",
    metaDescription: "Prix amenagement combles : de 500 a 1 500 EUR/m2. Isolation, placo, electricite, fenetre de toit. Guide complet et devis gratuit.",
    content: `L'amenagement de combles est l'un des moyens les plus rentables de gagner de la surface habitable sans etendre l'emprise au sol de votre maison. Le prix depend de l'etat existant des combles et du niveau de finition souhaite.

Le prix moyen de l'amenagement de combles varie de 500 a 1 500 EUR/m2 selon les travaux realises. Un amenagement simple (isolation, placo, electricite) coute entre 500 et 800 EUR/m2. Un amenagement complet avec salle de bain coute entre 800 et 1 200 EUR/m2. Un amenagement haut de gamme avec modification de charpente coute entre 1 000 et 1 500 EUR/m2.

Les postes de depense principaux sont : l'isolation sous rampants (40 a 80 EUR/m2), le doublage en placo (25 a 50 EUR/m2), l'electricite (50 a 100 EUR/m2), les fenetres de toit (500 a 1 500 EUR par fenetre posee), le revetement de sol (20 a 80 EUR/m2), la creation d'un escalier (1 500 a 5 000 EUR), et eventuellement la creation d'une salle d'eau (3 000 a 8 000 EUR).

Avant de vous lancer, verifiez que vos combles sont amenageables. La hauteur sous faitage doit etre d'au moins 1,80 m, la pente du toit d'au moins 30 degres, et la charpente doit etre en fermettes ou en charpente traditionnelle. Les charpentes industrielles a fermettes en W necessitent une modification couteuse (8 000 a 15 000 EUR) pour liberer l'espace.

Le retour sur investissement est excellent. L'amenagement de combles augmente la valeur de votre maison de 20 a 30% du cout des travaux. Un amenagement de 30 m2 a 800 EUR/m2 (24 000 EUR) peut augmenter la valeur du bien de 30 000 a 50 000 EUR selon la localisation.`,
    faq: [
      { question: "Quel budget pour amenager des combles de 30 m2 ?", answer: "Pour 30 m2, comptez entre 15 000 et 45 000 EUR selon le niveau de finition. Un amenagement standard coute environ 20 000 a 25 000 EUR tout compris." },
      { question: "Faut-il un permis de construire pour amenager les combles ?", answer: "En dessous de 20 m2 de surface de plancher creee, une declaration prealable suffit. Au-dela de 20 m2, un permis de construire est necessaire. Au-dela de 150 m2 de surface totale, un architecte est obligatoire." },
      { question: "Combien de temps durent les travaux d'amenagement de combles ?", answer: "Les travaux durent generalement 4 a 8 semaines pour un amenagement complet de 30 a 50 m2, incluant isolation, placo, electricite, sol et finitions." },
    ],
    keywords: ["prix amenagement combles m2", "cout amenagement combles", "amenager combles prix", "devis amenagement combles"],
  },
  {
    slug: "isolation-combles-perdus-prix",
    serviceSlug: "amenagement-combles",
    title: "Prix isolation combles perdus 2026 - Tarifs et aides",
    h1: "Prix de l'isolation des combles perdus en 2026",
    metaDescription: "Prix isolation combles perdus : de 15 a 50 EUR/m2. Laine soufflee, laine deroulee, aides financieres. Guide complet et devis gratuit.",
    content: `L'isolation des combles perdus est le travail de renovation energetique le plus rentable. Les combles non isoles representent 25 a 30% des deperditions thermiques d'un logement. L'isolation permet de reduire significativement la facture de chauffage.

Le prix de l'isolation des combles perdus varie de 15 a 50 EUR/m2 selon la technique et l'isolant choisi. L'isolation par soufflage de laine minerale (la plus courante) coute entre 15 et 30 EUR/m2. L'isolation par soufflage de ouate de cellulose coute entre 20 et 35 EUR/m2. L'isolation par laine deroulee coute entre 25 et 50 EUR/m2.

La technique du soufflage est la plus rapide et la plus economique. Un professionnel projette de la laine minerale ou de la ouate de cellulose en vrac sur le plancher des combles a l'aide d'une machine. L'isolant remplit tous les recoins et assure une couverture homogene sans pont thermique. L'epaisseur recommandee est de 30 a 40 cm pour atteindre une resistance thermique R de 7 a 8 m2.K/W, conforme aux exigences de la RE 2020.

Les aides financieres pour l'isolation des combles sont tres avantageuses. MaPrimeRenov couvre entre 15 et 25 EUR/m2 selon les revenus. Les CEE apportent un complement de 5 a 10 EUR/m2. Avec ces aides, le reste a charge peut descendre a 0 EUR pour les menages les plus modestes.

L'intervention est rapide et non invasive. Un professionnel isole 100 m2 de combles perdus en une demi-journee. Il n'est pas necessaire de vider les combles ni de modifier l'amenagement existant. Seul l'acces aux combles (trappe, escalier) doit etre degage.`,
    faq: [
      { question: "Quel est le prix de l'isolation des combles perdus ?", answer: "Le prix varie de 15 a 50 EUR/m2 selon la technique. L'isolation par soufflage est la plus economique a 15-30 EUR/m2. Avec les aides, le reste a charge peut etre de 0 EUR." },
      { question: "Quelle epaisseur d'isolant pour les combles perdus ?", answer: "L'epaisseur recommandee est de 30 a 40 cm pour une resistance thermique R de 7 a 8 m2.K/W, conforme aux exigences actuelles pour beneficier des aides." },
      { question: "Combien economise-t-on en isolant ses combles ?", answer: "L'isolation des combles permet de reduire la facture de chauffage de 20 a 30%, soit 300 a 600 EUR par an pour un logement moyen. Le retour sur investissement est de 2 a 5 ans." },
    ],
    keywords: ["isolation combles perdus prix", "prix isolation combles", "isolation soufflage prix", "isolation combles aides"],
  },
  {
    slug: "permis-construire-combles",
    serviceSlug: "amenagement-combles",
    title: "Amenagement combles : faut-il un permis de construire ?",
    h1: "Faut-il un permis de construire pour amenager ses combles ?",
    metaDescription: "Permis de construire ou declaration prealable pour vos combles ? Surface, hauteur, PLU : tout savoir sur les autorisations d'urbanisme.",
    content: `L'amenagement de combles cree de la surface habitable supplementaire, ce qui est soumis a des regles d'urbanisme. Selon la surface creee et la localisation de votre maison, vous aurez besoin d'une declaration prealable ou d'un permis de construire.

La declaration prealable de travaux suffit si la surface de plancher creee est inferieure ou egale a 20 m2 (ou 40 m2 en zone urbaine couverte par un PLU). C'est le cas le plus frequent pour l'amenagement de combles. La declaration prealable se depose en mairie et le delai d'instruction est d'un mois. Le formulaire CERFA 13703 est a remplir avec un plan de situation et un plan de masse.

Le permis de construire est obligatoire si la surface de plancher creee depasse 20 m2 (ou 40 m2 en zone PLU), ou si la surface totale du logement apres travaux depasse 150 m2 (auquel cas le recours a un architecte est egalement obligatoire). Le delai d'instruction du permis de construire est de 2 mois, et de 3 mois en secteur protege.

Si les travaux modifient l'aspect exterieur de la maison (creation de lucarnes, fenetres de toit, modification de la toiture), une declaration prealable est requise meme si la surface creee est faible. Le PLU peut imposer des contraintes sur les materiaux, les couleurs et les dimensions des ouvertures.

Attention aux consequences fiscales : l'amenagement de combles augmente la surface habitable declaree, ce qui entraine une hausse de la taxe fonciere et de la taxe d'habitation. Vous devez declarer les travaux au centre des impots dans les 90 jours suivant leur achevement en remplissant le formulaire IL 6704.`,
    faq: [
      { question: "A partir de quelle surface faut-il un permis de construire ?", answer: "Un permis de construire est necessaire au-dela de 20 m2 de surface creee (ou 40 m2 en zone PLU). En dessous, une simple declaration prealable suffit." },
      { question: "Faut-il un architecte pour amenager les combles ?", answer: "Un architecte est obligatoire si la surface totale du logement apres travaux depasse 150 m2. En dessous, vous pouvez deposer vous-meme la demande d'autorisation." },
      { question: "Quels sont les delais d'instruction ?", answer: "La declaration prealable est instruite en 1 mois. Le permis de construire en 2 mois (3 mois en secteur protege). Ces delais courent a partir du depot du dossier complet en mairie." },
    ],
    keywords: ["permis construire combles", "declaration prealable combles", "amenagement combles autorisation", "urbanisme combles"],
  },
  // Plaquisterie cloisons
  {
    slug: "prix-pose-placo-m2",
    serviceSlug: "plaquisterie-cloisons",
    title: "Prix pose placo au m2 en 2026 - Tarifs plaquiste",
    h1: "Prix de la pose de placo au m2 : tarifs 2026",
    metaDescription: "Prix pose placo : de 20 a 50 EUR/m2 pose comprise. Cloison, doublage, plafond. Decouvrez les tarifs des plaquistes et obtenez 3 devis gratuits.",
    content: `La pose de plaques de platre (placo) est un travail courant dans les projets de construction et de renovation. Le prix varie selon le type de plaque, la configuration des travaux et la region geographique.

Les tarifs moyens de pose de placo en 2026 sont les suivants : doublage de mur (isolation + placo) entre 25 et 50 EUR/m2, cloison de separation (placo sur ossature metallique) entre 30 et 60 EUR/m2, faux plafond en placo entre 35 et 65 EUR/m2, et habillage de sous-pente entre 30 et 55 EUR/m2.

Le prix des plaques de platre varie selon le type : placo standard BA13 entre 3 et 6 EUR/m2, placo hydrofuge (pour pieces humides) entre 5 et 10 EUR/m2, placo phonique entre 8 et 15 EUR/m2, placo coupe-feu entre 6 et 12 EUR/m2, et placo haute durete (pour les zones de passage) entre 7 et 13 EUR/m2.

Le tarif horaire d'un plaquiste se situe entre 35 et 55 EUR de l'heure. Pour un chantier complet, le plaquiste facture generalement au m2, ce qui est plus avantageux pour les grandes surfaces. Un devis detaille doit distinguer la fourniture et la pose, les bandes de joint, les finitions et eventuellement la peinture.

Les travaux preparatoires peuvent ajouter au cout : le tracage et la pose de l'ossature metallique (rails et montants), la decoupe autour des prises et interrupteurs, le passage des gaines electriques dans les cloisons, et le traitement des joints (enduit + bandes). Les finitions de joint representent un poste important : un joint mal fait se verra a travers la peinture.`,
    faq: [
      { question: "Quel est le prix du placo pose au m2 ?", answer: "Le prix du placo pose varie de 20 a 65 EUR/m2 selon le type de travaux. Un doublage coute 25-50 EUR/m2, une cloison 30-60 EUR/m2, un faux plafond 35-65 EUR/m2." },
      { question: "Quel type de placo pour une salle de bain ?", answer: "Il faut utiliser du placo hydrofuge (plaque verte) dans les salles de bain et les pieces humides. Son prix est de 5 a 10 EUR/m2, soit un surcout modere par rapport au placo standard." },
      { question: "Combien de temps pour poser du placo dans une piece ?", answer: "Un plaquiste professionnel pose environ 15 a 25 m2 de placo par jour, incluant l'ossature et les bandes de joint. Une piece de 15 m2 prend 1 a 2 jours." },
    ],
    keywords: ["prix pose placo m2", "tarif plaquiste", "cout placo pose", "devis plaquiste"],
  },
  {
    slug: "faux-plafond-prix-types",
    serviceSlug: "plaquisterie-cloisons",
    title: "Faux plafond : types, prix et guide d'installation 2026",
    h1: "Faux plafond : quel type choisir et a quel prix ?",
    metaDescription: "Faux plafond : placo, dalles, lames PVC, tendu. Comparatif des types, prix de 30 a 100 EUR/m2 et conseils d'installation. Devis gratuit.",
    content: `Le faux plafond permet de masquer un plafond abime, de reduire la hauteur d'une piece, d'ameliorer l'isolation thermique ou acoustique, ou d'integrer des spots encastres. Plusieurs types de faux plafonds existent, chacun avec ses avantages et ses contraintes.

Le faux plafond en plaques de platre (placo) est le plus courant. Il est constitue de plaques BA13 fixees sur une ossature metallique suspendue au plafond existant. Son prix est de 35 a 65 EUR/m2 pose comprise. Il offre une surface lisse et uniforme, ideale pour la peinture. Il permet d'integrer facilement des spots, des VMC et des haut-parleurs.

Le faux plafond en dalles (plafond suspendu) est tres utilise dans les bureaux et les locaux commerciaux. Les dalles de 60x60 cm sont posees sur une ossature apparente en T. Son prix est de 25 a 50 EUR/m2. Il facilite l'acces aux gaines et tuyaux au-dessus du plafond. Les dalles sont disponibles en mineral, metallique ou acoustique.

Le faux plafond tendu est constitue d'une toile en PVC ou en polyester tendue sur des profiles fixes au mur. Son prix est de 50 a 100 EUR/m2 pose comprise. Il offre un rendu parfaitement lisse, est disponible en mat, satin ou brillant, et se pose rapidement (1 a 2 jours pour une piece). Il est ideal pour masquer un plafond tres degrade sans travaux de preparation.

Le faux plafond en lames PVC ou bois est une solution decorative. Les lames se clipsent sur une ossature metallique ou se collent directement au plafond. Le prix varie de 20 a 60 EUR/m2 pour le PVC et de 40 a 100 EUR/m2 pour le bois.

La hauteur minimale sous faux plafond est de 2,40 m dans les pieces principales et 2,20 m dans les pieces de service. Verifiez la reglementation locale et la hauteur de votre plafond existant avant de vous lancer.`,
    faq: [
      { question: "Quel est le prix d'un faux plafond ?", answer: "Le prix varie selon le type : placo 35-65 EUR/m2, dalles suspendues 25-50 EUR/m2, plafond tendu 50-100 EUR/m2, lames PVC 20-60 EUR/m2." },
      { question: "Quelle hauteur perd-on avec un faux plafond ?", answer: "Un faux plafond en placo necessite un minimum de 5 a 10 cm d'espace. Un plafond suspendu en dalles necessite 10 a 20 cm. Un plafond tendu ne prend que 3 a 5 cm." },
      { question: "Peut-on poser un faux plafond soi-meme ?", answer: "La pose de dalles ou de lames PVC est accessible aux bricoleurs confirmes. La pose de placo necessite une bonne maitrise technique. Le plafond tendu requiert un professionnel specialise." },
    ],
    keywords: ["faux plafond prix", "faux plafond types", "plafond suspendu prix", "faux plafond placo"],
  },
  {
    slug: "cloison-phonique-solutions",
    serviceSlug: "plaquisterie-cloisons",
    title: "Cloison phonique : solutions d'isolation acoustique 2026",
    h1: "Cloison phonique : les meilleures solutions d'isolation acoustique",
    metaDescription: "Isolation acoustique cloison : placo phonique, laine minerale, double paroi. Solutions efficaces contre le bruit et prix. Devis gratuit.",
    content: `L'isolation phonique est un enjeu majeur dans les logements, que ce soit pour se proteger du bruit des voisins, isoler une chambre ou creer un espace calme pour le teletravail. Les cloisons phoniques offrent des performances acoustiques superieures aux cloisons standard.

Le principe de l'isolation acoustique repose sur la masse, la desolidarisation et l'absorption. Plus une paroi est lourde, mieux elle bloque le bruit. La desolidarisation (double paroi avec vide d'air) empeche la transmission des vibrations. L'absorption par un isolant souple (laine minerale) reduit la resonance dans le vide d'air.

Les solutions de cloisons phoniques et leurs performances sont : cloison simple placo standard (BA13 sur montants 48 mm) avec un affaiblissement de 36 dB, cloison placo phonique (BA13 acoustique sur montants 48 mm avec laine) avec 42 dB, double paroi sur ossatures desolidarisees avec 55 a 60 dB, et doublage acoustique d'un mur existant avec 45 a 55 dB.

Le prix des cloisons phoniques varie selon la performance souhaitee. Une cloison simple avec placo phonique coute entre 40 et 70 EUR/m2. Une cloison double paroi desolidarisee coute entre 60 et 100 EUR/m2. Un doublage acoustique d'un mur existant coute entre 50 et 90 EUR/m2.

Les erreurs a eviter en isolation phonique sont nombreuses. Les prises electriques en vis-a-vis dans une cloison mitoyenne creent un pont phonique important. Les gaines techniques non traitees transmettent le bruit entre les etages. Les portes standard (28 dB) sont souvent le maillon faible de l'isolation acoustique. Une porte acoustique (35 a 42 dB) peut etre necessaire pour completer la cloison.`,
    faq: [
      { question: "Quel est le meilleur isolant phonique pour une cloison ?", answer: "La laine de roche est le meilleur isolant phonique pour les cloisons. Elle offre de meilleures performances acoustiques que la laine de verre a epaisseur egale, grace a sa densite superieure." },
      { question: "Combien coute une cloison phonique ?", answer: "Une cloison phonique coute entre 40 et 100 EUR/m2 selon la performance souhaitee. Un doublage acoustique d'un mur existant coute entre 50 et 90 EUR/m2." },
      { question: "Combien de dB faut-il atteindre pour une bonne isolation ?", answer: "Un affaiblissement de 40 dB est un minimum acceptable. 50 dB offrent un bon confort. 55 dB et plus sont recommandes entre un logement et un local bruyant (salle de musique, atelier)." },
    ],
    keywords: ["cloison phonique", "isolation acoustique cloison", "placo phonique", "isolation bruit mur"],
  },
  // Extra guides pour services existants
  {
    slug: "depannage-serrure-prix",
    serviceSlug: "depannage-serrurerie",
    title: "Prix depannage serrure 2026 - Tarifs serrurier et devis",
    h1: "Combien coute un depannage de serrure en 2026 ?",
    metaDescription: "Prix depannage serrure : de 80 a 400 EUR selon l'intervention. Ouverture de porte, changement serrure, cylindre. 3 devis gratuits.",
    content: `Le depannage de serrure est une intervention frequente qui couvre de nombreuses situations : porte claquee, cle cassee dans la serrure, serrure bloquee ou remplacement apres cambriolage. Les prix varient selon l'intervention et l'heure d'appel.

Les tarifs moyens en heures ouvrables sont : ouverture de porte claquee (sans degradation) entre 80 et 150 EUR, ouverture de porte fermee a cle entre 100 et 250 EUR, extraction de cle cassee entre 60 et 120 EUR, remplacement de cylindre entre 80 et 200 EUR, et remplacement complet de serrure entre 150 et 400 EUR.

En dehors des heures ouvrables, les majorations sont significatives. En soiree (18h-22h), comptez une majoration de 30 a 50%. La nuit (22h-6h), la majoration peut atteindre 80 a 150%. Les dimanches et jours feries, la majoration est de 50 a 100%. Un depannage qui coute 100 EUR en journee peut donc atteindre 200 a 250 EUR la nuit.

La technique d'ouverture determine en grande partie le prix. L'ouverture fine (crochetage, by-pass) est la moins couteuse car elle ne degrade pas la serrure. Le percage du cylindre est necessaire quand l'ouverture fine est impossible : il impose le remplacement du cylindre. Le fraisage de la serrure est le dernier recours et necessite le remplacement complet de la serrure.

Attention aux arnaques serrurier, malheureusement courantes. Mefiez-vous des tarifs anormalement bas annonces au telephone, des serruriers qui ne fournissent pas de devis ecrit avant l'intervention, des factures bien superieures au prix annonce, et des serruriers qui percutent systematiquement le cylindre alors qu'une ouverture fine est possible.`,
    faq: [
      { question: "Combien coute l'ouverture d'une porte claquee ?", answer: "L'ouverture d'une porte claquee (non fermee a cle) coute entre 80 et 150 EUR en heures ouvrables. Le prix est majore de 50 a 150% la nuit et le weekend." },
      { question: "Comment eviter les arnaques serrurier ?", answer: "Exigez un devis ecrit avant l'intervention, verifiez les avis en ligne, privilegiez un serrurier local recommande, et mefiez-vous des tarifs trop bas qui cachent souvent des surcouts." },
      { question: "L'assurance couvre-t-elle le depannage de serrure ?", answer: "La plupart des assurances habitation incluent une garantie assistance qui couvre le serrurier en cas de porte claquee ou de perte de cles. Verifiez les conditions de votre contrat." },
    ],
    keywords: ["depannage serrure prix", "serrurier tarif", "ouverture porte prix", "cout serrurier"],
  },
  {
    slug: "isolation-murs-interieurs-prix",
    serviceSlug: "isolation-thermique",
    title: "Prix isolation murs interieurs 2026 - Tarifs et aides",
    h1: "Combien coute l'isolation des murs par l'interieur ?",
    metaDescription: "Prix isolation murs par l'interieur : de 30 a 80 EUR/m2. Laine minerale, polystyrene, doublage colle. Aides et devis gratuit.",
    content: `L'isolation des murs par l'interieur (ITI) est la technique la plus courante et la moins couteuse pour ameliorer la performance thermique d'un logement. Les murs representent 20 a 25% des deperditions thermiques d'une maison mal isolee.

Le prix de l'isolation des murs par l'interieur varie de 30 a 80 EUR/m2 selon la technique et l'isolant choisi. Le doublage colle (plaque de platre + isolant colle directement au mur) coute entre 30 et 50 EUR/m2. Le doublage sur ossature metallique (isolant entre montants + placo) coute entre 40 et 70 EUR/m2. La contre-cloison maconnee coute entre 60 et 80 EUR/m2.

Les isolants les plus utilises pour l'ITI sont la laine de verre (economique, bonne performance, 3 a 8 EUR/m2), la laine de roche (bon compromis thermique et acoustique, 5 a 12 EUR/m2), le polystyrene expanse (leger et efficace, 5 a 15 EUR/m2), et les isolants biosources comme la fibre de bois ou la ouate de cellulose (15 a 30 EUR/m2).

L'epaisseur d'isolant recommandee pour atteindre une resistance thermique R de 3,7 m2.K/W (seuil pour les aides) est de 12 a 14 cm en laine minerale ou 10 a 12 cm en polystyrene. Cette epaisseur reduit la surface habitable d'environ 3 a 5% par piece, ce qui est l'inconvenient principal de l'ITI par rapport a l'isolation par l'exterieur.

Les aides financieres pour l'isolation des murs sont avantageuses. MaPrimeRenov prend en charge 15 a 25 EUR/m2 selon les revenus. Les CEE ajoutent 5 a 10 EUR/m2. La TVA est reduite a 5,5%. Le cumul de ces aides peut couvrir 50 a 80% du cout total pour les menages modestes.`,
    faq: [
      { question: "Quel est le prix de l'isolation des murs par l'interieur ?", answer: "Le prix varie de 30 a 80 EUR/m2 selon la technique. Le doublage colle est le plus economique a 30-50 EUR/m2. Avec les aides, le reste a charge peut descendre a 10-30 EUR/m2." },
      { question: "Perd-on beaucoup de surface avec l'isolation interieure ?", answer: "L'isolation interieure reduit la surface habitable de 3 a 5% par piece (environ 12 a 15 cm d'epaisseur sur chaque mur isole). C'est le principal inconvenient de cette technique." },
      { question: "Isolation interieure ou exterieure : que choisir ?", answer: "L'ITI est moins chere et plus simple a mettre en oeuvre. L'ITE est plus performante (pas de ponts thermiques) mais 2 a 3 fois plus chere. L'ITE est ideale lors d'un ravalement." },
    ],
    keywords: ["isolation murs interieur prix", "prix isolation murs", "ITI cout", "doublage isolant prix"],
  },
  {
    slug: "climatisation-reversible-consommation",
    serviceSlug: "installation-climatisation",
    title: "Consommation climatisation reversible : cout electrique 2026",
    h1: "Quelle est la consommation electrique d'une climatisation reversible ?",
    metaDescription: "Consommation climatisation reversible : 300 a 800 EUR/an. SCOP, SEER, etiquette energie. Comment reduire la facture electrique. Guide complet.",
    content: `La climatisation reversible (pompe a chaleur air-air) est un systeme qui assure le rafraichissement en ete et le chauffage en hiver. Sa consommation electrique depend de plusieurs facteurs : la puissance de l'appareil, le coefficient de performance, la surface du logement et les habitudes d'utilisation.

La consommation annuelle moyenne d'une climatisation reversible se situe entre 300 et 800 EUR pour un logement de 80 a 120 m2. En mode climatisation (ete), la consommation est de 150 a 400 EUR sur 3 a 4 mois. En mode chauffage (hiver), la consommation est de 200 a 500 EUR sur 5 a 6 mois.

Le coefficient de performance est l'indicateur cle. Le SEER (Seasonal Energy Efficiency Ratio) mesure l'efficacite en mode froid, et le SCOP (Seasonal Coefficient of Performance) en mode chaud. Un SCOP de 4 signifie que pour 1 kWh d'electricite consomme, l'appareil produit 4 kWh de chaleur. Un appareil de classe A+++ avec un SCOP de 5 consomme 40% de moins qu'un appareil de classe A avec un SCOP de 3.

Pour reduire la consommation de votre climatisation, respectez quelques regles simples. Reglez la temperature a 25-26 degres en ete et 19-20 degres en hiver. Chaque degre supplementaire augmente la consommation de 7%. Fermez les fenetres et volets pendant les heures les plus chaudes. Nettoyez les filtres tous les 15 jours en periode d'utilisation intensive. Faites entretenir votre installation chaque annee.

Comparee a un chauffage electrique classique (convecteurs, radiants), la climatisation reversible est 2 a 3 fois plus economique en mode chauffage. Elle peut remplacer avantageusement un chauffage electrique dans les regions au climat tempere.`,
    faq: [
      { question: "Combien coute la climatisation reversible par mois ?", answer: "La consommation mensuelle est de 40 a 100 EUR en ete (mode froid) et de 40 a 90 EUR en hiver (mode chaud), selon la surface, l'isolation et la temperature de consigne." },
      { question: "La climatisation reversible consomme-t-elle beaucoup ?", answer: "Moins qu'on ne le pense. Grace a son COP de 3 a 5, elle produit 3 a 5 fois plus d'energie qu'elle n'en consomme. Elle est 2 a 3 fois plus economique qu'un chauffage electrique classique." },
      { question: "Comment reduire la consommation de la climatisation ?", answer: "Reglez la temperature a 25-26 degres en ete, nettoyez les filtres regulierement, fermez volets et fenetres, et faites entretenir l'appareil chaque annee. Chaque degre en moins coute 7% de plus." },
    ],
    keywords: ["consommation climatisation reversible", "cout electricite clim", "climatisation reversible economie", "consommation clim reversible"],
  },
  {
    slug: "peinture-plafond-prix-m2",
    serviceSlug: "peinture-interieure",
    title: "Prix peinture plafond au m2 en 2026 - Tarifs peintre",
    h1: "Combien coute la peinture d'un plafond au m2 ?",
    metaDescription: "Prix peinture plafond : de 15 a 40 EUR/m2 pose comprise. Plafond blanc, couleur, avec ou sans sous-couche. Devis gratuit de peintres.",
    content: `La peinture du plafond est un travail technique qui necessite un bon coup de main et un equipement adapte. Beaucoup de particuliers preferent confier cette tache a un professionnel pour eviter les coulures, les traces de rouleau et les douleurs cervicales.

Le prix de la peinture de plafond par un professionnel varie de 15 a 40 EUR/m2, fourniture et pose comprises. Le tarif depend de l'etat du plafond, du nombre de couches necessaires et de la hauteur sous plafond. Un plafond en bon etat necessite 2 couches : une sous-couche et une couche de finition, soit 15 a 25 EUR/m2. Un plafond abime necessitant un enduit de lissage coute entre 25 et 40 EUR/m2.

Le tarif horaire d'un peintre se situe entre 30 et 50 EUR de l'heure. Un peintre professionnel peint environ 20 a 30 m2 de plafond par heure en application classique. Pour un plafond de 20 m2, comptez 2 a 3 heures de travail par couche.

Le choix de la peinture est important. Une peinture acrylique mate est recommandee pour les plafonds car elle masque les imperfections et ne produit pas de reflets. Les peintures specifiques pour plafond sont plus epaissees pour limiter les projections et les coulures. Comptez 5 a 10 EUR/m2 pour une peinture de qualite.

Les travaux preparatoires sont essentiels pour un resultat parfait. La protection du sol et des meubles, le lessivage du plafond existant, le rebouchage des fissures et trous, et l'application d'un enduit de lissage si necessaire representent 30 a 50% du temps total de l'intervention.`,
    faq: [
      { question: "Quel est le prix pour peindre un plafond ?", answer: "Le prix est de 15 a 40 EUR/m2 pose comprise. Pour une piece de 20 m2, comptez entre 300 et 800 EUR selon l'etat du plafond et le nombre de couches." },
      { question: "Quelle peinture choisir pour un plafond ?", answer: "Une peinture acrylique mate specifique plafond est recommandee. Elle est epaissie pour limiter les coulures et offre un rendu mat qui masque les imperfections." },
      { question: "Combien de couches de peinture pour un plafond ?", answer: "Deux couches minimum sont necessaires : une sous-couche (ou primaire) et une couche de finition. Un plafond en mauvais etat peut necessiter 3 couches pour un rendu optimal." },
    ],
    keywords: ["prix peinture plafond m2", "cout peinture plafond", "tarif peintre plafond", "peindre plafond prix"],
  },
  {
    slug: "depannage-electrique-prix-tarif",
    serviceSlug: "depannage-electrique",
    title: "Prix depannage electrique 2026 - Tarifs electricien",
    h1: "Combien coute un depannage electrique en 2026 ?",
    metaDescription: "Prix depannage electrique : de 60 a 400 EUR selon l'intervention. Panne, court-circuit, tableau electrique. 3 devis gratuits d'electriciens.",
    content: `Le depannage electrique est une intervention qui necessite l'expertise d'un electricien qualifie. Les tarifs varient selon la nature de la panne, la complexite de l'intervention et l'heure d'appel.

Les tarifs moyens en heures ouvrables pour les depannages courants sont : recherche et reparation de panne simple entre 60 et 150 EUR, remplacement de disjoncteur entre 80 et 200 EUR, remplacement de prise ou interrupteur entre 60 et 100 EUR, remise en service apres court-circuit entre 80 et 180 EUR, et mise aux normes du tableau electrique entre 200 et 400 EUR.

Le deplacement et le diagnostic sont generalement factures entre 30 et 60 EUR. Ce montant est souvent deduit de la facture si le client accepte l'intervention. En dehors des heures ouvrables, les majorations sont de 30 a 50% en soiree, 50 a 100% le weekend et 80 a 150% la nuit et les jours feries.

Les pannes electriques les plus frequentes sont : le disjoncteur qui saute de maniere repetee (surcharge, court-circuit ou defaut d'isolement), les prises qui ne fonctionnent plus (fil debranche, prise grillee), les lumieres qui clignotent (mauvais contact, fil deserre), et la perte totale de courant (probleme de compteur ou de colonne montante).

En cas de coupure de courant, verifiez d'abord si la panne est generale (tout le quartier) ou localisee a votre logement. Si c'est general, contactez Enedis. Si c'est localise, verifiez votre tableau electrique. Si un disjoncteur a saute, essayez de le rearmer. S'il saute a nouveau, une intervention professionnelle est necessaire.`,
    faq: [
      { question: "Combien coute un depannage electrique ?", answer: "Le prix d'un depannage electrique varie de 60 a 400 EUR selon la nature de la panne. Le deplacement et diagnostic coutent 30 a 60 EUR, generalement deduits du montant de l'intervention." },
      { question: "Faut-il un electricien agree pour un depannage ?", answer: "Tout electricien qualifie peut realiser un depannage. Pour une mise aux normes ou une nouvelle installation, un electricien certifie NF C 15-100 est recommande pour obtenir le Consuel." },
      { question: "Que faire si le disjoncteur saute regulierement ?", answer: "Un disjoncteur qui saute peut indiquer une surcharge (trop d'appareils sur le meme circuit), un court-circuit ou un defaut d'isolement. Un electricien peut identifier la cause et corriger le probleme." },
    ],
    keywords: ["depannage electrique prix", "tarif electricien depannage", "panne electrique cout", "electricien urgence prix"],
  },
  {
    slug: "portail-coulissant-vs-battant",
    serviceSlug: "depannage-portail-electrique",
    title: "Portail coulissant vs battant : comparatif et prix 2026",
    h1: "Portail coulissant ou battant : lequel choisir ?",
    metaDescription: "Portail coulissant ou battant ? Comparez les avantages, inconvenients et prix de chaque type de portail. Guide complet et devis gratuit.",
    content: `Le choix entre un portail coulissant et un portail battant depend de la configuration de votre entree, de l'espace disponible et de votre budget. Chaque type a ses avantages et ses contraintes specifiques.

Le portail battant est le modele le plus classique et le plus repandu. Il s'ouvre en deux vantaux qui pivotent vers l'interieur ou l'exterieur. Son prix est de 800 a 3 000 EUR pour un portail motorise, pose comprise. Ses avantages sont un cout d'achat et d'installation plus reduit, une esthetique classique et elegante, une motorisation simple (bras ou verin). Ses inconvenients sont qu'il necessite un espace de debattement important devant ou derriere le portail, et qu'il est inadapte aux entrees en pente ou en montee.

Le portail coulissant glisse lateralement le long de la cloture. Il existe en version autoportante (sur rail aerien) ou sur rail au sol. Son prix est de 1 500 a 5 000 EUR motorise et pose. Ses avantages sont qu'il ne necessite aucun espace de debattement, qu'il fonctionne parfaitement sur les entrees en pente, et qu'il offre une ouverture plus large possible (jusqu'a 6 metres). Ses inconvenients sont un cout plus eleve, la necessite d'un espace lateral suffisant pour le refoulement, et la necessite d'un rail au sol (entretien regulier pour eviter les blocages).

Le choix du materiau impacte aussi le prix et l'entretien. L'aluminium est le plus leger et ne rouille pas (1 500 a 4 000 EUR). Le PVC est le moins cher mais moins resistant (800 a 2 000 EUR). Le fer forge est esthetique mais necessite un entretien anti-rouille (2 000 a 5 000 EUR). Le bois est chaleureux mais demande un entretien regulier (1 500 a 3 500 EUR).

Avant de choisir, verifiez le Plan Local d'Urbanisme qui peut imposer des contraintes sur la hauteur, le materiau et la couleur du portail. Une declaration prealable de travaux est necessaire pour l'installation d'un portail.`,
    faq: [
      { question: "Quel est le plus cher entre un portail coulissant et battant ?", answer: "Le portail coulissant est environ 50 a 80% plus cher qu'un portail battant : 1 500 a 5 000 EUR contre 800 a 3 000 EUR, motorisation et pose comprises." },
      { question: "Quel portail choisir pour une entree en pente ?", answer: "Le portail coulissant est ideal pour les entrees en pente car il glisse lateralement sans etre gene par la declivite du terrain, contrairement au portail battant." },
      { question: "Faut-il une declaration de travaux pour un portail ?", answer: "Oui, une declaration prealable de travaux est obligatoire pour l'installation d'un portail. Le delai d'instruction est d'un mois. Le PLU peut imposer des contraintes esthetiques." },
    ],
    keywords: ["portail coulissant vs battant", "portail coulissant prix", "portail battant prix", "comparatif portail"],
  },
];

export function getLongTailBySlug(slug: string): LongTailPage | undefined {
  return longTailPages.find((p) => p.slug === slug);
}

export function getLongTailByService(serviceSlug: string): LongTailPage[] {
  return longTailPages.filter((p) => p.serviceSlug === serviceSlug);
}
