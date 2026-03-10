export interface PriceData {
  serviceSlug: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  avgPrice: string;
  priceTable: { label: string; price: string; detail: string }[];
  factors: string[];
  tips: string[];
}

export const priceData: PriceData[] = [
  {
    serviceSlug: "reparation-volets-roulants",
    metaTitle: "Prix réparation volet roulant (2025) - Tarifs et devis",
    metaDescription:
      "Découvrez les prix moyens pour la réparation de volets roulants : remplacement de lame, moteur, tablier complet. Tarifs détaillés et conseils pour économiser.",
    heroTitle: "Prix réparation de volets roulants",
    heroSubtitle:
      "Tous les tarifs pour la réparation de volets roulants : diagnostic, remplacement de pièces, motorisation. Comparez les prix et recevez des devis gratuits.",
    avgPrice: "80 - 400 €",
    priceTable: [
      {
        label: "Diagnostic et déplacement",
        price: "50 - 80 €",
        detail: "Inspection du mécanisme et identification de la panne",
      },
      {
        label: "Remplacement d'une lame",
        price: "80 - 150 €",
        detail: "Fourniture et pose d'une lame PVC ou aluminium",
      },
      {
        label: "Remplacement du tablier complet",
        price: "200 - 400 €",
        detail: "Dépose de l'ancien tablier et installation du nouveau",
      },
      {
        label: "Changement du moteur",
        price: "250 - 450 €",
        detail: "Remplacement du moteur tubulaire avec reprogrammation",
      },
      {
        label: "Remplacement de la sangle ou manivelle",
        price: "60 - 120 €",
        detail: "Changement du système d'enroulement manuel",
      },
      {
        label: "Motorisation d'un volet manuel",
        price: "300 - 600 €",
        detail: "Installation d'un moteur sur volet existant",
      },
    ],
    factors: [
      "Type de volet : PVC, aluminium ou bois",
      "Nature de la panne : lame, moteur, axe ou mécanisme",
      "Accessibilité du volet (étage, hauteur de la fenêtre)",
      "Volet manuel ou électrique",
      "Urgence de l'intervention (tarif majoré en soirée/weekend)",
    ],
    tips: [
      "Demandez plusieurs devis pour comparer les tarifs des artisans de votre région",
      "Privilégiez un entretien régulier (graissage, nettoyage des rails) pour éviter les pannes coûteuses",
      "Vérifiez si la réparation est couverte par votre assurance habitation",
      "Optez pour des pièces de qualité : un moteur de marque reconnue dure plus longtemps",
    ],
  },
  {
    serviceSlug: "recherche-fuite-eau",
    metaTitle: "Prix recherche de fuite d'eau (2025) - Tarifs détection",
    metaDescription:
      "Combien coûte une recherche de fuite d'eau ? Tarifs par technique de détection : caméra thermique, gaz traceur, détection acoustique. Devis gratuits.",
    heroTitle: "Prix recherche de fuite d'eau",
    heroSubtitle:
      "Tarifs détaillés pour la détection de fuite d'eau : caméra thermique, gaz traceur, corrélation acoustique. Comparez les prix des spécialistes.",
    avgPrice: "150 - 500 €",
    priceTable: [
      {
        label: "Recherche par détection acoustique",
        price: "150 - 300 €",
        detail: "Localisation par écoute des vibrations dans les canalisations",
      },
      {
        label: "Recherche par caméra thermique",
        price: "200 - 400 €",
        detail: "Détection via imagerie infrarouge des variations de température",
      },
      {
        label: "Recherche par gaz traceur",
        price: "300 - 500 €",
        detail: "Injection d'un gaz inoffensif pour localiser la fuite",
      },
      {
        label: "Inspection vidéo des canalisations",
        price: "150 - 350 €",
        detail: "Passage d'une caméra endoscopique dans les tuyaux",
      },
      {
        label: "Rapport de recherche (assurance)",
        price: "50 - 100 €",
        detail: "Rapport détaillé pour la prise en charge par l'assurance",
      },
    ],
    factors: [
      "Technique de détection utilisée (acoustique, thermique, gaz traceur)",
      "Accessibilité des canalisations (encastrées, enterrées)",
      "Surface à inspecter et complexité du réseau",
      "Urgence de l'intervention",
      "Nécessité d'un rapport pour l'assurance",
    ],
    tips: [
      "Vérifiez si votre assurance habitation couvre les frais de recherche de fuite",
      "En cas de dégât des eaux, contactez votre assurance dans les 5 jours suivant la découverte",
      "Surveillez votre compteur d'eau la nuit : s'il tourne, une fuite est probable",
      "Comparez les devis de plusieurs plombiers spécialisés en détection",
    ],
  },
  {
    serviceSlug: "debarras-maison",
    metaTitle: "Prix débarras maison (2025) - Tarifs au m³ et forfaits",
    metaDescription:
      "Quel est le prix d'un débarras de maison ? Tarifs au m³, forfaits appartement, cave, grenier. Comparez les devis de professionnels du débarras.",
    heroTitle: "Prix débarras de maison",
    heroSubtitle:
      "Tarifs complets pour le débarras de maison, appartement, cave ou grenier. Prix au m³, forfaits et options de recyclage incluses.",
    avgPrice: "200 - 2000 €",
    priceTable: [
      {
        label: "Débarras cave ou grenier (< 10 m³)",
        price: "200 - 500 €",
        detail: "Enlèvement des encombrants d'un petit espace de stockage",
      },
      {
        label: "Débarras appartement (T2-T3)",
        price: "500 - 1 200 €",
        detail: "Vidage complet d'un appartement avec tri et évacuation",
      },
      {
        label: "Débarras maison complète",
        price: "1 000 - 2 500 €",
        detail: "Vidage intégral d'une maison avec toutes les pièces",
      },
      {
        label: "Débarras au m³",
        price: "40 - 80 € / m³",
        detail: "Tarif volumétrique pour un débarras partiel",
      },
      {
        label: "Débarras avec nettoyage",
        price: "300 - 600 € (supplément)",
        detail: "Nettoyage complet des locaux après débarras",
      },
    ],
    factors: [
      "Volume total à évacuer (en m³)",
      "Accessibilité du logement (étage, ascenseur, parking)",
      "Nature des objets (encombrants, dangereux, électroménager)",
      "Nécessité de tri sélectif ou recyclage",
      "Distance entre le logement et la déchetterie",
    ],
    tips: [
      "Triez vous-même ce que vous souhaitez garder avant l'intervention pour réduire le volume",
      "Certaines entreprises rachètent les objets de valeur et déduisent le montant du devis",
      "Renseignez-vous auprès de votre mairie pour les services d'enlèvement gratuits d'encombrants",
      "Privilégiez les entreprises qui recyclent et donnent aux associations",
    ],
  },
  {
    serviceSlug: "traitement-nuisibles",
    metaTitle: "Prix traitement nuisibles (2025) - Tarifs dératisation et désinsectisation",
    metaDescription:
      "Combien coûte un traitement contre les nuisibles ? Prix dératisation, désinsectisation, punaises de lit, cafards, guêpes. Devis gratuits.",
    heroTitle: "Prix traitement nuisibles",
    heroSubtitle:
      "Tous les tarifs pour le traitement des nuisibles : rats, punaises de lit, cafards, guêpes, fourmis. Comparez les devis de professionnels certifiés.",
    avgPrice: "100 - 600 €",
    priceTable: [
      {
        label: "Dératisation (rats, souris)",
        price: "120 - 300 €",
        detail: "Pose de pièges et appâts, rebouchage des accès",
      },
      {
        label: "Traitement punaises de lit",
        price: "200 - 600 €",
        detail: "Traitement chimique ou thermique selon surface à traiter",
      },
      {
        label: "Désinsectisation cafards",
        price: "100 - 250 €",
        detail: "Application de gel et pulvérisation dans les zones infestées",
      },
      {
        label: "Destruction nid de guêpes ou frelons",
        price: "80 - 200 €",
        detail: "Intervention avec combinaison de protection et insecticide",
      },
      {
        label: "Traitement anti-fourmis",
        price: "80 - 180 €",
        detail: "Application de gel appât et traitement du nid",
      },
      {
        label: "Contrat annuel de prévention",
        price: "300 - 600 €",
        detail: "Visites périodiques de contrôle et prévention (3 à 4 passages)",
      },
    ],
    factors: [
      "Type de nuisible (rongeurs, insectes rampants, insectes volants)",
      "Degré d'infestation et surface à traiter",
      "Technique utilisée (chimique, thermique, mécanique)",
      "Nombre de passages nécessaires",
      "Accessibilité des zones infestées",
    ],
    tips: [
      "Agissez rapidement : plus l'infestation est traitée tôt, moins le coût est élevé",
      "Pour les punaises de lit, le traitement thermique est plus efficace mais plus coûteux que le traitement chimique",
      "Un contrat annuel de prévention peut être plus économique que des interventions ponctuelles",
      "Vérifiez que le professionnel possède le certificat Certibiocide obligatoire",
    ],
  },
  {
    serviceSlug: "entretien-pompe-chaleur",
    metaTitle: "Prix entretien pompe à chaleur (2025) - Tarifs maintenance PAC",
    metaDescription:
      "Quel est le prix de l'entretien d'une pompe à chaleur ? Tarifs révision annuelle, contrat de maintenance, dépannage. Obligation légale et devis gratuits.",
    heroTitle: "Prix entretien pompe à chaleur",
    heroSubtitle:
      "Tarifs détaillés pour l'entretien de pompe à chaleur : révision annuelle obligatoire, contrat de maintenance, remplacement de pièces.",
    avgPrice: "150 - 300 €",
    priceTable: [
      {
        label: "Entretien annuel obligatoire",
        price: "150 - 250 €",
        detail: "Contrôle du fluide frigorigène, nettoyage filtres, vérifications",
      },
      {
        label: "Contrat de maintenance annuel",
        price: "200 - 350 €",
        detail: "Révision annuelle + dépannage prioritaire inclus",
      },
      {
        label: "Recharge de fluide frigorigène",
        price: "200 - 400 €",
        detail: "Appoint ou remplacement complet du fluide caloporteur",
      },
      {
        label: "Remplacement du compresseur",
        price: "800 - 2 000 €",
        detail: "Fourniture et installation d'un nouveau compresseur",
      },
      {
        label: "Nettoyage de l'unité extérieure",
        price: "80 - 150 €",
        detail: "Nettoyage des ailettes et vérification du ventilateur",
      },
    ],
    factors: [
      "Type de PAC (air-air, air-eau, géothermique)",
      "Puissance et ancienneté de l'installation",
      "Formule choisie (intervention ponctuelle ou contrat)",
      "Quantité de fluide frigorigène (plus de 2 kg : contrôle obligatoire)",
      "Accessibilité de l'unité extérieure",
    ],
    tips: [
      "Souscrivez un contrat de maintenance : il inclut souvent un dépannage prioritaire et des réductions sur les pièces",
      "L'entretien annuel est obligatoire pour les PAC contenant plus de 2 kg de fluide frigorigène (décret de 2020)",
      "Un entretien régulier peut réduire votre consommation énergétique de 15 à 20 %",
      "Conservez les attestations d'entretien : elles sont nécessaires pour la garantie constructeur",
    ],
  },
  {
    serviceSlug: "nettoyage-panneaux-solaires",
    metaTitle: "Prix nettoyage panneaux solaires (2025) - Tarifs entretien",
    metaDescription:
      "Combien coûte le nettoyage de panneaux solaires ? Tarifs par panneau, forfaits annuels, techniques utilisées. Devis gratuits d'entreprises spécialisées.",
    heroTitle: "Prix nettoyage panneaux solaires",
    heroSubtitle:
      "Tarifs détaillés pour le nettoyage professionnel de panneaux solaires photovoltaïques et thermiques. Retrouvez le rendement optimal de votre installation.",
    avgPrice: "100 - 300 €",
    priceTable: [
      {
        label: "Nettoyage installation résidentielle (< 10 panneaux)",
        price: "100 - 180 €",
        detail: "Nettoyage à l'eau pure avec perche télescopique",
      },
      {
        label: "Nettoyage grande installation (10-20 panneaux)",
        price: "180 - 300 €",
        detail: "Nettoyage complet avec contrôle visuel de l'installation",
      },
      {
        label: "Nettoyage au panneau",
        price: "10 - 20 € / panneau",
        detail: "Tarif unitaire pour les grandes installations",
      },
      {
        label: "Contrôle de performance inclus",
        price: "50 - 100 € (supplément)",
        detail: "Mesure du rendement avant et après nettoyage",
      },
      {
        label: "Contrat d'entretien annuel (1 à 2 passages)",
        price: "150 - 280 €",
        detail: "Nettoyage planifié avec suivi de performance",
      },
    ],
    factors: [
      "Nombre de panneaux et surface totale de l'installation",
      "Inclinaison et accessibilité du toit",
      "Degré de salissure (poussière, fientes, mousse, pollen)",
      "Hauteur de la toiture et type de couverture",
      "Fréquence de nettoyage recommandée (1 à 2 fois par an)",
    ],
    tips: [
      "Nettoyez vos panneaux au printemps après les dépôts de pollen et à l'automne après les feuilles mortes",
      "N'utilisez jamais de produit chimique ou de nettoyeur haute pression sur vos panneaux",
      "Un nettoyage régulier peut restaurer 5 à 15 % de rendement perdu à cause des salissures",
      "Vérifiez que l'entreprise est assurée pour les travaux en hauteur",
    ],
  },
  {
    serviceSlug: "depannage-portail-electrique",
    metaTitle: "Prix dépannage portail électrique (2025) - Tarifs réparation",
    metaDescription:
      "Quel est le prix du dépannage d'un portail électrique ? Tarifs motorisation, remplacement télécommande, réparation automatisme. Devis gratuits.",
    heroTitle: "Prix dépannage portail électrique",
    heroSubtitle:
      "Tous les tarifs pour le dépannage de portail électrique : motorisation, automatisme, télécommande, cellule de sécurité. Devis gratuits et sans engagement.",
    avgPrice: "100 - 500 €",
    priceTable: [
      {
        label: "Diagnostic et déplacement",
        price: "60 - 100 €",
        detail: "Inspection complète du système d'automatisme",
      },
      {
        label: "Reprogrammation de la motorisation",
        price: "80 - 150 €",
        detail: "Réinitialisation des fins de course et paramètres moteur",
      },
      {
        label: "Remplacement de la télécommande",
        price: "30 - 80 €",
        detail: "Fourniture et programmation d'une nouvelle télécommande",
      },
      {
        label: "Remplacement du moteur",
        price: "300 - 700 €",
        detail: "Fourniture et installation d'un nouveau moteur",
      },
      {
        label: "Remplacement cellules de sécurité",
        price: "100 - 200 €",
        detail: "Fourniture et pose de nouvelles cellules photoélectriques",
      },
      {
        label: "Remplacement carte électronique",
        price: "150 - 350 €",
        detail: "Remplacement de la carte de commande de l'automatisme",
      },
    ],
    factors: [
      "Type de portail (coulissant, battant, basculant)",
      "Marque et modèle de la motorisation",
      "Nature de la panne (mécanique, électronique, télécommande)",
      "Disponibilité des pièces de rechange",
      "Urgence de l'intervention",
    ],
    tips: [
      "Un entretien annuel (graissage, vérification des fixations) prévient la majorité des pannes",
      "Notez la marque et le modèle de votre motorisation pour faciliter le diagnostic",
      "En cas de panne, vérifiez d'abord les piles de la télécommande et le disjoncteur",
      "Comparez les devis : le prix des pièces peut varier fortement d'un installateur à l'autre",
    ],
  },
  {
    serviceSlug: "ramonage-cheminee",
    metaTitle: "Prix ramonage cheminée (2025) - Tarifs ramoneur certifié",
    metaDescription:
      "Quel est le prix d'un ramonage de cheminée ? Tarifs par type de conduit, obligation légale, certificat de ramonage. Devis gratuits de ramoneurs certifiés.",
    heroTitle: "Prix ramonage cheminée",
    heroSubtitle:
      "Tarifs détaillés pour le ramonage de cheminée et conduits de fumée. Obligation légale, fréquence recommandée et certificat de conformité.",
    avgPrice: "50 - 120 €",
    priceTable: [
      {
        label: "Ramonage simple (conduit classique)",
        price: "50 - 80 €",
        detail: "Nettoyage mécanique du conduit avec hérisson",
      },
      {
        label: "Ramonage conduit inox ou tubage",
        price: "60 - 90 €",
        detail: "Nettoyage adapté aux conduits tubés ou en inox",
      },
      {
        label: "Ramonage poêle à granulés",
        price: "80 - 120 €",
        detail: "Nettoyage du conduit et de la chambre de combustion",
      },
      {
        label: "Ramonage chaudière fioul",
        price: "80 - 130 €",
        detail: "Nettoyage du conduit et vérification de l'installation",
      },
      {
        label: "Débistrage (enlèvement de bistre)",
        price: "150 - 300 €",
        detail: "Élimination des dépôts de goudron durcis dans le conduit",
      },
    ],
    factors: [
      "Type de conduit (maçonné, inox, tubage flexible)",
      "Longueur et accessibilité du conduit",
      "Type de combustible (bois, granulés, fioul)",
      "Présence de bistre ou dépôts importants",
      "Localisation géographique (tarifs variables selon les régions)",
    ],
    tips: [
      "Le ramonage est obligatoire 1 à 2 fois par an selon votre commune (vérifiez le règlement sanitaire départemental)",
      "Conservez le certificat de ramonage : il est exigé par votre assurance en cas de sinistre",
      "Faites ramoner avant la saison de chauffe pour un rendement optimal dès le premier feu",
      "Brûlez du bois sec (moins de 20 % d'humidité) pour limiter l'encrassement du conduit",
    ],
  },
  {
    serviceSlug: "plomberie-urgente",
    metaTitle: "Prix plombier urgence (2025) - Tarifs intervention rapide",
    metaDescription:
      "Combien coûte un plombier en urgence ? Tarifs dépannage fuite, débouchage, chauffe-eau. Prix de nuit et weekend. Devis gratuits.",
    heroTitle: "Prix plomberie urgente",
    heroSubtitle:
      "Tarifs détaillés pour les interventions de plomberie en urgence : fuites, canalisations bouchées, pannes de chauffe-eau. Prix de jour, nuit et weekend.",
    avgPrice: "80 - 500 €",
    priceTable: [
      {
        label: "Déplacement + diagnostic",
        price: "50 - 90 €",
        detail: "Frais de déplacement et évaluation du problème",
      },
      {
        label: "Réparation de fuite (robinet, joint)",
        price: "80 - 180 €",
        detail: "Remplacement de joint, serrage, petite soudure",
      },
      {
        label: "Débouchage canalisation",
        price: "100 - 300 €",
        detail: "Débouchage mécanique ou par furet électrique",
      },
      {
        label: "Remplacement chauffe-eau",
        price: "300 - 800 €",
        detail: "Fourniture et pose d'un nouveau chauffe-eau (hors matériel haut de gamme)",
      },
      {
        label: "Remplacement robinet ou mitigeur",
        price: "100 - 250 €",
        detail: "Dépose et pose d'un nouveau robinet avec raccordement",
      },
      {
        label: "Majoration nuit / weekend / jours fériés",
        price: "+50 à 100 %",
        detail: "Supplément pour intervention en dehors des heures ouvrables",
      },
    ],
    factors: [
      "Nature de l'intervention (fuite, bouchon, panne d'équipement)",
      "Horaire d'intervention (jour, nuit, weekend, jour férié)",
      "Pièces et matériaux nécessaires",
      "Complexité de l'accès aux canalisations",
      "Urgence réelle de la situation",
    ],
    tips: [
      "Coupez l'arrivée d'eau avant l'arrivée du plombier pour limiter les dégâts",
      "Demandez toujours un devis écrit avant le début des travaux, même en urgence",
      "Les majorations de nuit et weekend sont légales mais doivent être annoncées à l'avance",
      "Comparez les prix : certains plombiers facturent le déplacement en plus du diagnostic",
    ],
  },
  {
    serviceSlug: "depannage-chauffage",
    metaTitle: "Prix dépannage chauffage (2025) - Tarifs réparation chaudière",
    metaDescription:
      "Quel est le prix d'un dépannage chauffage ? Tarifs réparation chaudière, radiateur, thermostat. Intervention rapide et devis gratuits.",
    heroTitle: "Prix dépannage chauffage",
    heroSubtitle:
      "Tarifs complets pour le dépannage de chauffage : chaudière en panne, radiateur froid, thermostat défaillant. Comparez les devis de chauffagistes qualifiés.",
    avgPrice: "100 - 500 €",
    priceTable: [
      {
        label: "Diagnostic et déplacement",
        price: "60 - 100 €",
        detail: "Déplacement du chauffagiste et diagnostic de la panne",
      },
      {
        label: "Purge et rééquilibrage des radiateurs",
        price: "80 - 150 €",
        detail: "Purge de l'ensemble des radiateurs et ajustement de la pression",
      },
      {
        label: "Remplacement du thermostat",
        price: "100 - 250 €",
        detail: "Fourniture et installation d'un thermostat (simple ou programmable)",
      },
      {
        label: "Remplacement de la pompe de circulation",
        price: "250 - 500 €",
        detail: "Fourniture et pose d'un nouveau circulateur",
      },
      {
        label: "Réparation chaudière (pièce courante)",
        price: "150 - 400 €",
        detail: "Remplacement de pièces : vanne, sonde, échangeur, veilleuse",
      },
      {
        label: "Désembouage du circuit de chauffage",
        price: "300 - 600 €",
        detail: "Nettoyage chimique ou hydrodynamique du circuit",
      },
    ],
    factors: [
      "Type de chaudière (gaz, fioul, électrique, condensation)",
      "Nature de la panne (mécanique, électronique, hydraulique)",
      "Ancienneté de l'installation et disponibilité des pièces",
      "Urgence de l'intervention (saison de chauffe)",
      "Nécessité de pièces détachées spécifiques",
    ],
    tips: [
      "Souscrivez un contrat d'entretien annuel : il inclut souvent un dépannage en cas de panne",
      "Faites entretenir votre chaudière chaque année (obligation légale) pour éviter les pannes en hiver",
      "Purgez vos radiateurs chaque automne pour un chauffage homogène et économique",
      "En cas de panne hivernale, vérifiez d'abord le thermostat et la pression du circuit avant d'appeler",
    ],
  },
];

export function getPriceBySlug(slug: string): PriceData | undefined {
  return priceData.find((p) => p.serviceSlug === slug);
}
