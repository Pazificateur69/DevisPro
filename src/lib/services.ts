export interface Service {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  description: string;
  keywords: string[];
  priceRange: string;
}

export const services: Service[] = [
  {
    slug: "reparation-volets-roulants",
    name: "Réparation de volets roulants",
    icon: "Blinds",
    shortDescription: "Volet bloqué, lame cassée, moteur en panne ? Nos artisans interviennent rapidement.",
    description: "Votre volet roulant est bloqué, une lame est cassée ou le moteur ne répond plus ? Nos artisans qualifiés interviennent rapidement pour diagnostiquer et réparer tous types de volets roulants : manuels, électriques ou solaires. Recevez jusqu'à 3 devis gratuits et sans engagement.",
    keywords: ["volet roulant", "réparation volet", "volet bloqué", "moteur volet"],
    priceRange: "80 - 400 €",
  },
  {
    slug: "recherche-fuite-eau",
    name: "Recherche de fuite d'eau",
    icon: "Droplets",
    shortDescription: "Fuite d'eau invisible ? Détection non destructive par nos experts.",
    description: "Une fuite d'eau peut causer des dégâts considérables si elle n'est pas détectée à temps. Nos artisans utilisent des techniques de détection non destructives (caméra thermique, gaz traceur) pour localiser précisément la fuite sans endommager vos murs ou sols.",
    keywords: ["fuite eau", "recherche fuite", "détection fuite", "dégât des eaux"],
    priceRange: "150 - 500 €",
  },
  {
    slug: "debarras-maison",
    name: "Débarras de maison",
    icon: "Home",
    shortDescription: "Débarras complet de maison, appartement, cave ou grenier.",
    description: "Besoin de vider une maison, un appartement, une cave ou un grenier ? Nos professionnels du débarras prennent en charge le tri, l'enlèvement et le recyclage de vos encombrants. Service rapide et respectueux de l'environnement.",
    keywords: ["débarras", "vide maison", "enlèvement encombrants", "débarras cave"],
    priceRange: "200 - 2000 €",
  },
  {
    slug: "traitement-nuisibles",
    name: "Traitement nuisibles",
    icon: "Bug",
    shortDescription: "Rats, punaises de lit, cafards ? Intervention rapide et discrète.",
    description: "Rats, souris, punaises de lit, cafards, guêpes... Nos experts en dératisation et désinsectisation interviennent rapidement et discrètement pour éliminer tous types de nuisibles. Traitement professionnel avec garantie de résultat.",
    keywords: ["nuisibles", "dératisation", "punaises de lit", "désinsectisation", "cafards"],
    priceRange: "100 - 600 €",
  },
  {
    slug: "entretien-pompe-chaleur",
    name: "Entretien pompe à chaleur",
    icon: "Thermometer",
    shortDescription: "Entretien annuel obligatoire de votre pompe à chaleur par un pro certifié.",
    description: "L'entretien annuel de votre pompe à chaleur est obligatoire et essentiel pour maintenir ses performances. Nos techniciens certifiés vérifient le fluide frigorigène, nettoient les filtres et contrôlent l'ensemble du système.",
    keywords: ["pompe à chaleur", "entretien PAC", "maintenance chauffage", "fluide frigorigène"],
    priceRange: "150 - 300 €",
  },
  {
    slug: "nettoyage-panneaux-solaires",
    name: "Nettoyage panneaux solaires",
    icon: "Sun",
    shortDescription: "Nettoyage professionnel pour optimiser le rendement de vos panneaux.",
    description: "Des panneaux solaires sales peuvent perdre jusqu'à 30% de leur rendement. Nos professionnels utilisent des techniques de nettoyage adaptées (eau pure, brosses douces) pour redonner à vos panneaux toute leur efficacité sans les endommager.",
    keywords: ["panneaux solaires", "nettoyage photovoltaïque", "rendement solaire", "entretien panneaux"],
    priceRange: "100 - 300 €",
  },
  {
    slug: "depannage-portail-electrique",
    name: "Dépannage portail électrique",
    icon: "DoorOpen",
    shortDescription: "Portail bloqué ou en panne ? Dépannage rapide par un spécialiste.",
    description: "Votre portail électrique ne s'ouvre plus, fait du bruit ou fonctionne de manière erratique ? Nos techniciens spécialisés diagnostiquent et réparent tous types de portails : coulissants, battants, automatiques.",
    keywords: ["portail électrique", "dépannage portail", "motorisation portail", "portail bloqué"],
    priceRange: "100 - 500 €",
  },
  {
    slug: "ramonage-cheminee",
    name: "Ramonage cheminée",
    icon: "Flame",
    shortDescription: "Ramonage obligatoire de cheminée et conduit par un professionnel certifié.",
    description: "Le ramonage de votre cheminée est une obligation légale (1 à 2 fois par an selon les régions). Nos ramoneurs certifiés nettoient vos conduits pour prévenir les risques d'incendie et d'intoxication au monoxyde de carbone. Certificat de ramonage fourni.",
    keywords: ["ramonage", "cheminée", "conduit fumée", "ramoneur certifié"],
    priceRange: "50 - 120 €",
  },
  {
    slug: "plomberie-urgente",
    name: "Plomberie urgente",
    icon: "Wrench",
    shortDescription: "Fuite, canalisation bouchée, panne de chauffe-eau ? Intervention urgente.",
    description: "Fuite d'eau importante, canalisation bouchée, panne de chauffe-eau, WC hors service... Nos plombiers interviennent en urgence pour résoudre vos problèmes de plomberie. Disponibilité rapide et devis transparent.",
    keywords: ["plombier", "urgence plomberie", "fuite eau", "canalisation bouchée", "chauffe-eau"],
    priceRange: "80 - 500 €",
  },
  {
    slug: "depannage-chauffage",
    name: "Dépannage chauffage",
    icon: "ThermometerSun",
    shortDescription: "Panne de chauffage ? Dépannage rapide chaudière et radiateurs.",
    description: "Votre chaudière est en panne, vos radiateurs ne chauffent plus ou votre système de chauffage fait du bruit ? Nos chauffagistes qualifiés interviennent rapidement pour diagnostiquer et réparer votre installation.",
    keywords: ["dépannage chauffage", "panne chaudière", "réparation radiateur", "chauffagiste"],
    priceRange: "100 - 500 €",
  },
  {
    slug: "depannage-electrique",
    name: "Dépannage électrique",
    icon: "Zap",
    shortDescription: "Panne de courant, court-circuit ou tableau électrique défaillant ? Nos électriciens interviennent vite.",
    description: "Une panne électrique peut survenir à tout moment et paralyser votre quotidien. Nos électriciens qualifiés diagnostiquent et réparent rapidement tout type de problème : court-circuit, disjoncteur qui saute, prise défectueuse ou tableau électrique endommagé. Intervention sécurisée et conforme aux normes en vigueur.",
    keywords: ["panne electrique", "electricien", "tableau electrique", "court-circuit"],
    priceRange: "80 - 400 €",
  },
  {
    slug: "depannage-serrurerie",
    name: "Dépannage serrurerie",
    icon: "Lock",
    shortDescription: "Porte claquée, serrure bloquée ou clé cassée ? Un serrurier intervient en urgence.",
    description: "Vous êtes enfermé dehors, votre serrure est bloquée ou votre clé s'est cassée dans la porte ? Nos serruriers professionnels interviennent rapidement pour toute ouverture de porte, remplacement de serrure ou mise en sécurité de votre domicile. Devis clair et sans surprise avant toute intervention.",
    keywords: ["serrurier", "porte claquée", "serrure bloquée", "ouverture de porte"],
    priceRange: "80 - 350 €",
  },
  {
    slug: "isolation-thermique",
    name: "Isolation thermique",
    icon: "ShieldCheck",
    shortDescription: "Améliorez le confort de votre logement et réduisez vos factures grâce à une isolation performante.",
    description: "Une bonne isolation thermique est la clé pour réduire vos factures d'énergie et améliorer le confort de votre habitat. Nos artisans certifiés RGE réalisent l'isolation de vos combles, murs et planchers avec des matériaux de qualité. Profitez des aides financières disponibles (MaPrimeRénov', CEE) pour alléger le coût de vos travaux.",
    keywords: ["isolation", "isolation thermique", "combles", "murs"],
    priceRange: "30 - 100 € /m²",
  },
  {
    slug: "installation-climatisation",
    name: "Installation climatisation",
    icon: "Wind",
    shortDescription: "Installation de climatisation réversible ou split par un professionnel certifié.",
    description: "Gardez votre intérieur frais en été et tempéré en hiver grâce à une climatisation réversible performante. Nos installateurs certifiés prennent en charge l'étude, la pose et la mise en service de votre système de climatisation : split, multi-split ou pompe à chaleur air-air. Un confort optimal toute l'année avec un équipement adapté à votre logement.",
    keywords: ["climatisation", "clim", "installation clim", "pompe à chaleur air-air"],
    priceRange: "800 - 3000 €",
  },
  {
    slug: "peinture-interieure",
    name: "Peinture intérieure",
    icon: "Paintbrush",
    shortDescription: "Rafraîchissez vos murs et plafonds avec un peintre professionnel qualifié.",
    description: "Envie de redonner un coup de neuf à votre intérieur ? Nos peintres professionnels réalisent tous vos travaux de peinture : murs, plafonds, boiseries et finitions soignées. Préparation des supports, choix des peintures adaptées et application dans les règles de l'art pour un résultat impeccable et durable.",
    keywords: ["peinture", "peintre", "peinture intérieure", "ravalement"],
    priceRange: "20 - 45 € /m²",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
