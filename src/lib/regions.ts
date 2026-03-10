export interface Region {
  slug: string;
  name: string;
  description: string;
  departments: { name: string; code: string }[];
  mainCity: string;
}

export const regions: Region[] = [
  {
    slug: "ile-de-france",
    name: "Ile-de-France",
    description:
      "Trouvez des artisans qualifies en Ile-de-France, la region la plus peuplee de France. Nos professionnels interviennent a Paris, Versailles, Boulogne-Billancourt, Saint-Denis et dans toutes les villes de la region parisienne pour vos travaux de plomberie, chauffage, renovation et depannage.",
    departments: [
      { name: "Paris", code: "75" },
      { name: "Seine-et-Marne", code: "77" },
      { name: "Yvelines", code: "78" },
      { name: "Essonne", code: "91" },
      { name: "Hauts-de-Seine", code: "92" },
      { name: "Seine-Saint-Denis", code: "93" },
      { name: "Val-de-Marne", code: "94" },
      { name: "Val-d'Oise", code: "95" },
    ],
    mainCity: "Paris",
  },
  {
    slug: "auvergne-rhone-alpes",
    name: "Auvergne-Rhone-Alpes",
    description:
      "Decouvrez nos artisans en Auvergne-Rhone-Alpes, deuxieme region de France. Interventions rapides a Lyon, Grenoble, Saint-Etienne, Clermont-Ferrand et Annecy pour tous vos travaux : plomberie, chauffage, isolation, volets roulants et bien plus.",
    departments: [
      { name: "Ain", code: "01" },
      { name: "Allier", code: "03" },
      { name: "Ardeche", code: "07" },
      { name: "Cantal", code: "15" },
      { name: "Drome", code: "26" },
      { name: "Isere", code: "38" },
      { name: "Loire", code: "42" },
      { name: "Haute-Loire", code: "43" },
      { name: "Puy-de-Dome", code: "63" },
      { name: "Rhone", code: "69" },
      { name: "Savoie", code: "73" },
      { name: "Haute-Savoie", code: "74" },
    ],
    mainCity: "Lyon",
  },
  {
    slug: "nouvelle-aquitaine",
    name: "Nouvelle-Aquitaine",
    description:
      "Faites appel a nos artisans en Nouvelle-Aquitaine, la plus grande region de France metropolitaine. Nos professionnels interviennent a Bordeaux, Limoges, Poitiers, La Rochelle et Pau pour tous vos besoins en renovation, depannage et entretien.",
    departments: [
      { name: "Charente", code: "16" },
      { name: "Charente-Maritime", code: "17" },
      { name: "Correze", code: "19" },
      { name: "Creuse", code: "23" },
      { name: "Dordogne", code: "24" },
      { name: "Gironde", code: "33" },
      { name: "Landes", code: "40" },
      { name: "Lot-et-Garonne", code: "47" },
      { name: "Pyrenees-Atlantiques", code: "64" },
      { name: "Deux-Sevres", code: "79" },
      { name: "Vienne", code: "86" },
      { name: "Haute-Vienne", code: "87" },
    ],
    mainCity: "Bordeaux",
  },
  {
    slug: "occitanie",
    name: "Occitanie",
    description:
      "Trouvez un artisan de confiance en Occitanie pour vos travaux et depannages. Nos professionnels qualifies interviennent a Toulouse, Montpellier, Nimes, Perpignan et dans toute la region pour la plomberie, le chauffage, l'electricite et la renovation.",
    departments: [
      { name: "Ariege", code: "09" },
      { name: "Aude", code: "11" },
      { name: "Aveyron", code: "12" },
      { name: "Gard", code: "30" },
      { name: "Haute-Garonne", code: "31" },
      { name: "Gers", code: "32" },
      { name: "Herault", code: "34" },
      { name: "Lot", code: "46" },
      { name: "Lozere", code: "48" },
      { name: "Hautes-Pyrenees", code: "65" },
      { name: "Pyrenees-Orientales", code: "66" },
      { name: "Tarn", code: "81" },
      { name: "Tarn-et-Garonne", code: "82" },
    ],
    mainCity: "Toulouse",
  },
  {
    slug: "hauts-de-france",
    name: "Hauts-de-France",
    description:
      "Besoin d'un artisan dans les Hauts-de-France ? Nos professionnels qualifies interviennent a Lille, Amiens, Roubaix, Dunkerque et Calais pour vos travaux de plomberie, chauffage, electricite, serrurerie et renovation de l'habitat.",
    departments: [
      { name: "Aisne", code: "02" },
      { name: "Nord", code: "59" },
      { name: "Oise", code: "60" },
      { name: "Pas-de-Calais", code: "62" },
      { name: "Somme", code: "80" },
    ],
    mainCity: "Lille",
  },
  {
    slug: "provence-alpes-cote-d-azur",
    name: "Provence-Alpes-Cote d'Azur",
    description:
      "Trouvez des artisans qualifies en Provence-Alpes-Cote d'Azur. Nos professionnels interviennent a Marseille, Nice, Toulon, Aix-en-Provence et Avignon pour tous vos travaux de renovation, depannage, climatisation et entretien.",
    departments: [
      { name: "Alpes-de-Haute-Provence", code: "04" },
      { name: "Hautes-Alpes", code: "05" },
      { name: "Alpes-Maritimes", code: "06" },
      { name: "Bouches-du-Rhone", code: "13" },
      { name: "Var", code: "83" },
      { name: "Vaucluse", code: "84" },
    ],
    mainCity: "Marseille",
  },
  {
    slug: "grand-est",
    name: "Grand Est",
    description:
      "Faites appel a nos artisans dans le Grand Est pour vos travaux et reparations. Interventions a Strasbourg, Reims, Metz, Nancy et Mulhouse pour la plomberie, le chauffage, l'isolation thermique et tous types de depannage.",
    departments: [
      { name: "Ardennes", code: "08" },
      { name: "Aube", code: "10" },
      { name: "Marne", code: "51" },
      { name: "Haute-Marne", code: "52" },
      { name: "Meurthe-et-Moselle", code: "54" },
      { name: "Meuse", code: "55" },
      { name: "Moselle", code: "57" },
      { name: "Bas-Rhin", code: "67" },
      { name: "Haut-Rhin", code: "68" },
      { name: "Vosges", code: "88" },
    ],
    mainCity: "Strasbourg",
  },
  {
    slug: "pays-de-la-loire",
    name: "Pays de la Loire",
    description:
      "Trouvez un artisan de confiance en Pays de la Loire. Nos professionnels interviennent a Nantes, Angers, Le Mans, Saint-Nazaire et La Roche-sur-Yon pour vos travaux de plomberie, chauffage, electricite et renovation.",
    departments: [
      { name: "Loire-Atlantique", code: "44" },
      { name: "Maine-et-Loire", code: "49" },
      { name: "Mayenne", code: "53" },
      { name: "Sarthe", code: "72" },
      { name: "Vendee", code: "85" },
    ],
    mainCity: "Nantes",
  },
  {
    slug: "bretagne",
    name: "Bretagne",
    description:
      "Besoin d'un artisan en Bretagne ? Nos professionnels qualifies interviennent a Rennes, Brest, Quimper, Lorient et Vannes pour tous vos travaux : plomberie, chauffage, volets roulants, ramonage et depannage urgent.",
    departments: [
      { name: "Cotes-d'Armor", code: "22" },
      { name: "Finistere", code: "29" },
      { name: "Ille-et-Vilaine", code: "35" },
      { name: "Morbihan", code: "56" },
    ],
    mainCity: "Rennes",
  },
  {
    slug: "normandie",
    name: "Normandie",
    description:
      "Trouvez des artisans qualifies en Normandie pour vos travaux et depannages. Nos professionnels interviennent a Rouen, Le Havre, Caen, Cherbourg et Evreux pour la plomberie, le chauffage, l'isolation et la renovation.",
    departments: [
      { name: "Calvados", code: "14" },
      { name: "Eure", code: "27" },
      { name: "Manche", code: "50" },
      { name: "Orne", code: "61" },
      { name: "Seine-Maritime", code: "76" },
    ],
    mainCity: "Rouen",
  },
  {
    slug: "centre-val-de-loire",
    name: "Centre-Val de Loire",
    description:
      "Faites appel a nos artisans en Centre-Val de Loire pour vos projets de renovation et depannage. Interventions a Tours, Orleans, Bourges, Blois et Chartres pour la plomberie, le chauffage, l'electricite et tous types de travaux.",
    departments: [
      { name: "Cher", code: "18" },
      { name: "Eure-et-Loir", code: "28" },
      { name: "Indre", code: "36" },
      { name: "Indre-et-Loire", code: "37" },
      { name: "Loir-et-Cher", code: "41" },
      { name: "Loiret", code: "45" },
    ],
    mainCity: "Tours",
  },
  {
    slug: "bourgogne-franche-comte",
    name: "Bourgogne-Franche-Comte",
    description:
      "Trouvez un artisan qualifie en Bourgogne-Franche-Comte. Nos professionnels interviennent a Dijon, Besancon, Belfort, Chalon-sur-Saone et Auxerre pour vos travaux de plomberie, chauffage, isolation et depannage.",
    departments: [
      { name: "Cote-d'Or", code: "21" },
      { name: "Doubs", code: "25" },
      { name: "Jura", code: "39" },
      { name: "Nievre", code: "58" },
      { name: "Haute-Saone", code: "70" },
      { name: "Saone-et-Loire", code: "71" },
      { name: "Yonne", code: "89" },
      { name: "Territoire de Belfort", code: "90" },
    ],
    mainCity: "Dijon",
  },
  {
    slug: "corse",
    name: "Corse",
    description:
      "Besoin d'un artisan en Corse ? Nos professionnels qualifies interviennent a Ajaccio et Bastia pour tous vos travaux de plomberie, chauffage, climatisation, volets roulants et renovation. Devis gratuit et sans engagement.",
    departments: [
      { name: "Corse-du-Sud", code: "2A" },
      { name: "Haute-Corse", code: "2B" },
    ],
    mainCity: "Ajaccio",
  },
  {
    slug: "guadeloupe",
    name: "Guadeloupe",
    description:
      "Trouvez des artisans qualifies en Guadeloupe pour vos travaux et depannages. Nos professionnels interviennent a Pointe-a-Pitre, Les Abymes et Baie-Mahault pour la plomberie, la climatisation, l'electricite et la renovation.",
    departments: [{ name: "Guadeloupe", code: "971" }],
    mainCity: "Pointe-a-Pitre",
  },
  {
    slug: "martinique",
    name: "Martinique",
    description:
      "Faites appel a nos artisans en Martinique pour vos projets de renovation et depannage. Interventions a Fort-de-France et dans toute l'ile pour la plomberie, la climatisation, l'electricite et tous types de travaux.",
    departments: [{ name: "Martinique", code: "972" }],
    mainCity: "Fort-de-France",
  },
  {
    slug: "guyane",
    name: "Guyane",
    description:
      "Trouvez un artisan de confiance en Guyane. Nos professionnels interviennent a Cayenne et dans toute la region pour vos travaux de plomberie, climatisation, electricite et renovation de l'habitat.",
    departments: [{ name: "Guyane", code: "973" }],
    mainCity: "Cayenne",
  },
  {
    slug: "la-reunion",
    name: "La Reunion",
    description:
      "Besoin d'un artisan a La Reunion ? Nos professionnels qualifies interviennent a Saint-Denis, Saint-Pierre et Le Tampon pour tous vos travaux de plomberie, climatisation, electricite et renovation.",
    departments: [{ name: "La Reunion", code: "974" }],
    mainCity: "Saint-Denis",
  },
];

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}

export function getAllRegions(): Region[] {
  return regions;
}
