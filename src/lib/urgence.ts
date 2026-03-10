export interface UrgenceData {
  slug: string;
  serviceSlug: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  whatToDo: string[];
  whyUrgent: string[];
  avgResponseTime: string;
}

export const urgenceData: UrgenceData[] = [
  {
    slug: "plombier",
    serviceSlug: "plomberie-urgente",
    metaTitle: "Plombier urgence - Intervention rapide 7j/7 | Devis gratuit",
    metaDescription:
      "Besoin d'un plombier en urgence ? Fuite d'eau, canalisation bouchée, panne de chauffe-eau. Intervention rapide 7j/7. Recevez vos devis gratuits.",
    heroTitle: "Plombier en urgence",
    heroSubtitle:
      "Fuite d'eau importante, canalisation bouchée, WC hors service ? Nos plombiers interviennent rapidement pour résoudre votre urgence de plomberie.",
    whatToDo: [
      "Coupez immédiatement l'arrivée d'eau générale (vanne d'arrêt souvent située près du compteur)",
      "Coupez l'électricité si l'eau atteint des prises ou appareils électriques",
      "Placez des serpillières et bassines pour limiter les dégâts",
      "Prenez des photos des dégâts pour votre déclaration d'assurance",
      "Contactez un plombier d'urgence et demandez un devis avant intervention",
      "Prévenez votre assurance habitation dans les 5 jours ouvrés en cas de dégât des eaux",
    ],
    whyUrgent: [
      "Une fuite non traitée peut causer des infiltrations dans les murs, planchers et chez les voisins, entraînant des réparations coûteuses",
      "L'eau stagnante favorise le développement de moisissures, dangereuses pour la santé (problèmes respiratoires, allergies)",
      "Un dégât des eaux peut endommager l'installation électrique et créer un risque d'électrocution",
      "Plus l'intervention est rapide, plus les coûts de remise en état sont limités",
    ],
    avgResponseTime: "30 min à 2h",
  },
  {
    slug: "chauffage",
    serviceSlug: "depannage-chauffage",
    metaTitle: "Dépannage chauffage urgence - Chaudière en panne | Intervention rapide",
    metaDescription:
      "Panne de chauffage en urgence ? Chaudière en panne, radiateurs froids. Intervention rapide de chauffagistes qualifiés 7j/7. Devis gratuits.",
    heroTitle: "Dépannage chauffage en urgence",
    heroSubtitle:
      "Votre chaudière est en panne en plein hiver ? Vos radiateurs ne chauffent plus ? Nos chauffagistes qualifiés interviennent rapidement pour rétablir votre chauffage.",
    whatToDo: [
      "Vérifiez le thermostat : assurez-vous qu'il est bien réglé et que les piles ne sont pas vides",
      "Contrôlez la pression du circuit (entre 1 et 1,5 bar normalement, visible sur le manomètre de la chaudière)",
      "Vérifiez que le disjoncteur de la chaudière n'a pas sauté",
      "Si vous sentez une odeur de gaz, quittez le logement, n'actionnez aucun interrupteur et appelez GRDF (0 800 47 33 33)",
      "Utilisez un chauffage d'appoint en attendant l'intervention (en respectant les consignes de sécurité)",
    ],
    whyUrgent: [
      "En hiver, l'absence de chauffage peut entraîner le gel des canalisations, provoquant des ruptures de tuyaux et des dégâts des eaux",
      "Un logement non chauffé présente des risques pour la santé, en particulier pour les personnes âgées et les enfants en bas âge",
      "Une chaudière en panne peut indiquer un risque de fuite de monoxyde de carbone, un gaz inodore et mortel",
      "Plus la panne est diagnostiquée tôt, plus la réparation est simple et économique",
    ],
    avgResponseTime: "1h à 4h",
  },
  {
    slug: "fuite-eau",
    serviceSlug: "recherche-fuite-eau",
    metaTitle: "Urgence fuite d'eau - Détection et réparation rapide | Devis gratuit",
    metaDescription:
      "Fuite d'eau urgente ? Détection non destructive par caméra thermique et gaz traceur. Intervention rapide pour limiter les dégâts. Devis gratuits.",
    heroTitle: "Urgence fuite d'eau",
    heroSubtitle:
      "Fuite d'eau visible ou invisible ? Nos experts en détection de fuite interviennent rapidement avec des techniques non destructives pour localiser et stopper la fuite.",
    whatToDo: [
      "Coupez l'arrivée d'eau générale pour stopper la fuite immédiatement",
      "Relevez votre compteur d'eau, attendez 2 heures sans utiliser d'eau, puis vérifiez s'il a tourné",
      "Protégez vos meubles et objets de valeur de l'humidité",
      "N'essayez pas de percer les murs ou sols pour trouver la fuite : vous risquez d'aggraver les dégâts",
      "Déclarez le sinistre à votre assurance habitation dans un délai de 5 jours ouvrés",
      "Remplissez un constat amiable de dégât des eaux si des voisins sont aussi touchés",
    ],
    whyUrgent: [
      "Une fuite non détectée peut gaspiller des milliers de litres d'eau et faire exploser la facture",
      "L'humidité persistante dégrade les structures du bâtiment : murs, planchers, plafonds, et peut compromettre la solidité de l'ouvrage",
      "Les moisissures se développent en 24 à 48 heures dans un environnement humide et sont nocives pour la santé",
      "Un dégât des eaux non traité peut se propager aux logements voisins, engageant votre responsabilité",
    ],
    avgResponseTime: "1h à 3h",
  },
  {
    slug: "volets",
    serviceSlug: "reparation-volets-roulants",
    metaTitle: "Urgence volet roulant bloqué - Réparation rapide | Devis gratuit",
    metaDescription:
      "Volet roulant bloqué en position ouverte ou fermée ? Intervention urgente pour sécuriser votre logement. Réparation rapide et devis gratuits.",
    heroTitle: "Urgence volet roulant bloqué",
    heroSubtitle:
      "Votre volet roulant est bloqué en position ouverte ou fermée ? Un volet en panne compromet la sécurité de votre logement. Nos artisans interviennent rapidement.",
    whatToDo: [
      "Ne forcez pas le mécanisme : vous risquez d'aggraver la panne et de casser des lames",
      "Si le volet est électrique, essayez de le manoeuvrer avec la commande de secours manuelle (souvent accessible via un carré de débrayage)",
      "Vérifiez que le disjoncteur dédié au volet n'a pas sauté",
      "Si le volet est bloqué en position ouverte la nuit, sécurisez la fenêtre avec un verrou temporaire",
      "En cas de volet motorisé, vérifiez les piles de la télécommande avant d'appeler un réparateur",
    ],
    whyUrgent: [
      "Un volet bloqué en position ouverte expose votre logement aux intrusions, particulièrement la nuit ou en période d'absence",
      "En hiver, un volet ouvert entraîne des déperditions thermiques importantes et augmente la facture de chauffage",
      "Un volet bloqué en position fermée empêche l'aération et la lumière naturelle, rendant le logement inhabitable",
      "Un mécanisme forcé peut se détériorer davantage et nécessiter un remplacement complet plus coûteux",
    ],
    avgResponseTime: "2h à 24h",
  },
  {
    slug: "nuisibles",
    serviceSlug: "traitement-nuisibles",
    metaTitle: "Urgence nuisibles - Dératisation et désinsectisation rapide | Devis gratuit",
    metaDescription:
      "Invasion de nuisibles en urgence ? Rats, punaises de lit, cafards, guêpes. Intervention rapide et discrète de professionnels certifiés. Devis gratuits.",
    heroTitle: "Urgence nuisibles",
    heroSubtitle:
      "Invasion de rats, punaises de lit, cafards ou nid de guêpes ? Nos experts en dératisation et désinsectisation interviennent rapidement et discrètement.",
    whatToDo: [
      "Ne touchez pas aux nuisibles à mains nues (risques de morsures, piqûres ou transmission de maladies)",
      "En cas de nid de guêpes ou frelons, éloignez-vous et interdisez l'accès à la zone aux enfants et animaux",
      "Identifiez la source de l'infestation si possible : fissures, points d'entrée, sources de nourriture",
      "Rangez toute nourriture dans des contenants hermétiques et nettoyez les surfaces de préparation",
      "En cas de punaises de lit, ne déplacez pas les meubles infestés dans d'autres pièces pour éviter la propagation",
    ],
    whyUrgent: [
      "Les rongeurs se reproduisent très rapidement : un couple de rats peut engendrer plusieurs centaines de descendants en un an",
      "Les punaises de lit se propagent d'une pièce à l'autre et d'un logement à l'autre en quelques semaines",
      "Les piqûres de guêpes et frelons peuvent provoquer des réactions allergiques graves (choc anaphylactique)",
      "Les rongeurs rongent les câbles électriques, ce qui peut causer des courts-circuits et des incendies",
      "Certains nuisibles (rats, cafards) transmettent des maladies et contaminent les aliments",
    ],
    avgResponseTime: "2h à 24h",
  },
];

export function getUrgenceBySlug(slug: string): UrgenceData | undefined {
  return urgenceData.find((u) => u.slug === slug);
}
