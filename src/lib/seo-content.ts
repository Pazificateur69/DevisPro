// =============================================================================
// Ultra-personalized SEO content generation for city+service pages
// Generates unique, rich content to avoid thin content penalties across 30,000+ pages
// =============================================================================

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type CitySize =
  | "metropole"
  | "grande_ville"
  | "ville_moyenne"
  | "petite_ville"
  | "commune";

export interface RegionContext {
  climate: string;
  architecture: string;
  specificNeeds: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface InternalLinkSuggestions {
  guides: string[];
  blog: string[];
  comparatifs: string[];
  nearby: string[];
}

// ---------------------------------------------------------------------------
// 1. getCitySize
// ---------------------------------------------------------------------------

export function getCitySize(population: number): CitySize {
  if (population > 200000) return "metropole";
  if (population > 50000) return "grande_ville";
  if (population > 20000) return "ville_moyenne";
  if (population > 5000) return "petite_ville";
  return "commune";
}

// ---------------------------------------------------------------------------
// Helper: deterministic pseudo-random variant selector
// Produces a stable index from 0..max-1 for a given set of string inputs,
// ensuring the same combination always picks the same template while
// distributing choices evenly across variants.
// ---------------------------------------------------------------------------

function variantIndex(max: number, ...keys: string[]): number {
  let hash = 0;
  const combined = keys.join("|");
  for (let i = 0; i < combined.length; i++) {
    hash = (hash * 31 + combined.charCodeAt(i)) | 0;
  }
  return ((hash % max) + max) % max;
}

// ---------------------------------------------------------------------------
// 2. getRegionContext
// ---------------------------------------------------------------------------

const regionContextMap: Record<string, RegionContext> = {
  "Ile-de-France": {
    climate:
      "climat oceanique tempere avec des hivers doux et des etes agreables",
    architecture:
      "immeubles haussmanniens, pavillons de banlieue et residences modernes",
    specificNeeds:
      "forte densite urbaine, coproprietes nombreuses, proximite des artisans facilitee, besoin frequent d'interventions en appartement",
  },
  "Auvergne-Rhone-Alpes": {
    climate:
      "climat continental en plaine et montagnard en altitude, hivers rigoureux et etes chauds",
    architecture:
      "chalets de montagne, immeubles lyonnais, maisons en pisé et constructions traditionnelles en pierre",
    specificNeeds:
      "isolation renforcee contre le froid, deneigement, entretien de chauffage pousse, contraintes liees a l'altitude et aux intemperies",
  },
  "Nouvelle-Aquitaine": {
    climate:
      "climat oceanique doux dans l'ouest, semi-continental a l'est, ensoleillement genereux",
    architecture:
      "maisons en pierre blonde du Perigord, echoppes bordelaises, maisons basques et fermettes landaises",
    specificNeeds:
      "protection contre l'humidite atlantique, entretien des toitures anciennes, traitement du bois, economie d'energie dans les grandes demeures",
  },
  Occitanie: {
    climate:
      "climat mediterraneen sur le littoral, continental dans les terres, ete chaud et sec",
    architecture:
      "maisons en brique toulouse, mas occitans, bastides medievales et villas mediterraneennes",
    specificNeeds:
      "climatisation indispensable en ete, protection solaire, gestion des episodes cevenols et inondations, entretien de piscines",
  },
  "Hauts-de-France": {
    climate:
      "climat oceanique frais, hivers humides et froids, precipitations frequentes toute l'annee",
    architecture:
      "maisons en briques rouges, corons, beguinages, fermes picardes et immeubles de ville flamands",
    specificNeeds:
      "isolation thermique prioritaire, lutte contre l'humidite, ramonage frequent, chauffage performant contre le froid",
  },
  "Grand Est": {
    climate:
      "climat semi-continental, hivers froids et neigeux, etes chauds avec orages",
    architecture:
      "maisons a colombages alsaciennes, immeubles en gres des Vosges, fermes lorraines et constructions Art Nouveau a Nancy",
    specificNeeds:
      "chauffage haute performance, double vitrage indispensable, deneigement, protection contre le gel des canalisations",
  },
  "Provence-Alpes-Cote d'Azur": {
    climate:
      "climat mediterraneen chaud et sec, mistral, fort ensoleillement toute l'annee",
    architecture:
      "mas provencaux, bastides, immeubles nicois, cabanons et villas de la Cote d'Azur",
    specificNeeds:
      "climatisation essentielle, protection solaire des facades, traitement contre les insectes, entretien de piscines, panneaux solaires tres rentables",
  },
  "Pays de la Loire": {
    climate:
      "climat oceanique tempere, hivers doux et humides, etes agreables",
    architecture:
      "maisons en tuffeau, longeres, manoirs de la Loire, pavillons nantais et constructions en ardoise",
    specificNeeds:
      "entretien des toitures en ardoise, protection contre l'humidite, traitement de l'air salin pres de la cote, renovation de patrimoine ancien",
  },
  Bretagne: {
    climate:
      "climat oceanique humide, precipitations frequentes, hivers doux mais venteux",
    architecture:
      "maisons en granit, longeres bretonnes, manoirs, neo-bretonnes et constructions en schiste",
    specificNeeds:
      "lutte contre l'humidite et les infiltrations, traitement anti-mousse des toitures, protection contre le vent et l'air marin salin, ventilation performante",
  },
  Normandie: {
    climate:
      "climat oceanique humide, precipitations regulieres, hivers doux et etes frais",
    architecture:
      "maisons a colombages, chaumieres, longeres normandes, manoirs et immeubles en pierre de Caen",
    specificNeeds:
      "protection contre l'humidite et les infiltrations, entretien des charpentes anciennes, ramonage des cheminees frequemment utilisees, renovation de batiments historiques",
  },
  "Bourgogne-Franche-Comte": {
    climate:
      "climat semi-continental, hivers froids avec neige en altitude, etes chauds et orageux",
    architecture:
      "maisons en pierre calcaire bourguignonne, fermes comtoises, chalets jurassiens et immeubles dijonnais",
    specificNeeds:
      "isolation contre le froid hivernal, entretien de chauffage, ramonage obligatoire, renovation des maisons en pierre ancienne",
  },
  "Centre-Val de Loire": {
    climate:
      "climat oceanique degrade, hivers frais et etes temperes, precipitations moderees",
    architecture:
      "maisons en tuffeau, chateaux et manoirs, maisons troglodytes, longeres beauceronnes et pavillons modernes",
    specificNeeds:
      "entretien du patrimoine bati ancien, renovation des toitures en ardoise, traitement de l'humidite des murs en tuffeau, chauffage adapte aux grandes pieces",
  },
  Corse: {
    climate:
      "climat mediterraneen chaud, hivers doux sur le littoral et neigeux en montagne, etes secs et ensoleilles",
    architecture:
      "maisons en granit corse, tours genoises, bergeries renovees et villas contemporaines en bord de mer",
    specificNeeds:
      "climatisation indispensable en ete, protection solaire, entretien difficile en zone isolee, traitement contre les termites et insectes mediterraneens",
  },
  Guadeloupe: {
    climate:
      "climat tropical humide, temperatures elevees toute l'annee, saison des pluies et risque cyclonique",
    architecture:
      "cases creoles traditionnelles, maisons coloniales, constructions en beton parasismiques et villas contemporaines",
    specificNeeds:
      "climatisation obligatoire, protection anti-cyclonique, traitement contre les termites tropicaux, ventilation renforcee, etancheite contre les pluies tropicales",
  },
  Martinique: {
    climate:
      "climat tropical maritime, chaleur constante, humidite elevee et saison cyclonique de juin a novembre",
    architecture:
      "maisons creoles en bois, villas coloniales, constructions parasismiques en beton et habitations traditionnelles",
    specificNeeds:
      "climatisation indispensable, protection anti-cyclonique des ouvertures, traitement anti-termites, lutte contre l'humidite tropicale, mise aux normes parasismiques",
  },
  Guyane: {
    climate:
      "climat equatorial humide, temperatures constantes autour de 27 degres, forte pluviometrie toute l'annee",
    architecture:
      "maisons sur pilotis, constructions creoles en bois, batiments en beton adaptes au climat equatorial",
    specificNeeds:
      "ventilation et climatisation essentielles, lutte permanente contre l'humidite et les moisissures, traitement anti-termites, protection contre la faune tropicale",
  },
  "La Reunion": {
    climate:
      "climat tropical d'altitude variable, chaud et humide sur le littoral, frais en montagne, cyclones possibles",
    architecture:
      "cases creoles colorees, maisons en beton parasismiques, constructions modernes adaptees au climat tropical",
    specificNeeds:
      "protection anti-cyclonique, climatisation, gestion des eaux pluviales intenses, fort potentiel solaire, traitement contre les nuisibles tropicaux",
  },
  Mayotte: {
    climate:
      "climat tropical humide avec saison seche et saison des pluies, temperatures elevees toute l'annee",
    architecture:
      "bangas traditionnels, constructions en beton, maisons adaptees au climat tropical",
    specificNeeds:
      "climatisation necessaire, gestion de l'eau, protection contre les cyclones, ventilation naturelle, traitement anti-nuisibles tropicaux",
  },
};

export function getRegionContext(region: string): RegionContext {
  return (
    regionContextMap[region] ?? {
      climate: "climat tempere avec des saisons marquees",
      architecture: "habitat varie entre constructions anciennes et modernes",
      specificNeeds:
        "entretien regulier du logement, renovation energetique et depannage rapide",
    }
  );
}

// ---------------------------------------------------------------------------
// 3. getCityIntroText
// ---------------------------------------------------------------------------

export function getCityIntroText(
  cityName: string,
  citySize: CitySize,
  population: number,
  department: string,
  departmentCode: string,
  region: string,
  serviceName: string
): string {
  const popStr = population.toLocaleString("fr-FR");
  const serviceLC = serviceName.toLowerCase();
  const regionCtx = getRegionContext(region);

  // ----- Metropole templates (5) -----
  const metropoleTemplates = [
    `${cityName}, metropole de ${popStr} habitants au coeur du ${department} (${departmentCode}), est l'une des grandes agglomerations de la region ${region}. La densite de population et la diversite du parc immobilier rendent les besoins en ${serviceLC} particulierement frequents. Que vous habitiez en centre-ville, dans un quartier residentiel ou en peripherie, trouver un artisan qualifie pour ${serviceLC} a ${cityName} est essentiel pour maintenir votre logement en parfait etat.`,

    `Avec ses ${popStr} habitants, ${cityName} est une ville majeure du ${department} (${departmentCode}) en region ${region}. La taille de la ville implique un tissu d'artisans dense et concurrentiel, ce qui vous permet de comparer les offres et d'obtenir les meilleurs tarifs pour ${serviceLC}. Le ${regionCtx.climate} de la region influence directement les besoins des habitants en matiere d'entretien et de renovation de leur habitat.`,

    `${cityName}, situee dans le ${department} (${departmentCode}), compte ${popStr} habitants et figure parmi les plus grandes villes de ${region}. Cette metropole dynamique presente un parc immobilier diversifie — ${regionCtx.architecture} — ou les besoins en ${serviceLC} sont constants. Notre reseau d'artisans couvre l'ensemble de l'agglomeration de ${cityName} pour des interventions rapides et professionnelles.`,

    `En tant que grande metropole de ${popStr} habitants, ${cityName} (${departmentCode}) dans le ${department} offre un marche de l'artisanat particulierement developpe. La region ${region}, avec son ${regionCtx.climate}, genere des besoins specifiques en ${serviceLC} auxquels nos artisans partenaires repondent quotidiennement. Beneficiez d'un large choix de professionnels qualifies pour vos travaux.`,

    `${cityName} est l'un des principaux poles urbains de la region ${region}, avec une population de ${popStr} habitants dans le departement du ${department} (${departmentCode}). Dans une agglomeration de cette envergure, la demande en ${serviceLC} est soutenue, ce qui garantit la disponibilite de nombreux artisans experimentes. ${regionCtx.specificNeeds.charAt(0).toUpperCase() + regionCtx.specificNeeds.slice(1)} : autant de facteurs qui rendent le recours a un professionnel indispensable.`,
  ];

  // ----- Grande ville templates (5) -----
  const grandeVilleTemplates = [
    `${cityName}, ville dynamique de ${popStr} habitants dans le ${department} (${departmentCode}), beneficie d'un reseau de professionnels qualifies en ${serviceLC}. En region ${region}, le ${regionCtx.climate} impose des contraintes specifiques sur les habitations. Nos artisans partenaires connaissent parfaitement les particularites de ${cityName} et interviennent dans les meilleurs delais.`,

    `Avec ${popStr} habitants, ${cityName} est une ville importante du ${department} (${departmentCode}) en region ${region}. Le parc immobilier local, compose de ${regionCtx.architecture}, necessite des interventions regulieres en ${serviceLC}. Comparez les devis de nos artisans verifies pour obtenir le meilleur rapport qualite-prix a ${cityName}.`,

    `Situee dans le ${department} (${departmentCode}), ${cityName} rassemble ${popStr} habitants et constitue un bassin de vie majeur en ${region}. Les ${regionCtx.specificNeeds} de cette zone geographique rendent les services de ${serviceLC} particulierement recherches. Nos professionnels locaux sont prets a intervenir rapidement chez vous.`,

    `${cityName} (${departmentCode}), dans le ${department}, est une agglomeration de ${popStr} habitants ou la vie urbaine est active. Le ${regionCtx.climate} propre a la region ${region} influence les besoins en entretien des logements. Pour ${serviceLC}, faites confiance a des artisans qui connaissent les specificites du bati local.`,

    `Grande ville de ${popStr} habitants au sein du ${department} (${departmentCode}), ${cityName} offre un cadre de vie attractif en region ${region}. Les habitations locales — ${regionCtx.architecture} — ont des besoins reguliers en ${serviceLC}. Notre plateforme vous connecte avec les meilleurs artisans de ${cityName} et de ses environs pour des interventions de qualite.`,
  ];

  // ----- Ville moyenne templates (5) -----
  const villeMoyenneTemplates = [
    `${cityName}, ville de ${popStr} habitants dans le ${department} (${departmentCode}), offre un cadre de vie agreable en region ${region}. Le ${regionCtx.climate} de la region et les caracteristiques du bati local — ${regionCtx.architecture} — creent des besoins specifiques en ${serviceLC}. Trouvez facilement un artisan de confiance a ${cityName} grace a notre service gratuit.`,

    `Avec ses ${popStr} habitants, ${cityName} est une ville a taille humaine du ${department} (${departmentCode}). En region ${region}, les proprietaires et locataires font regulierement appel a des professionnels pour ${serviceLC}. Le maillage artisanal local permet des interventions rapides et personnalisees.`,

    `${cityName} (${departmentCode}), commune de ${popStr} habitants situee dans le ${department}, est un pole attractif de la region ${region}. Les logements de la ville, entre ${regionCtx.architecture}, necessitent un entretien adapte. Nos artisans partenaires maitrisent les enjeux lies au ${regionCtx.climate} pour assurer des prestations de ${serviceLC} de qualite.`,

    `Dans le ${department} (${departmentCode}), ${cityName} reunit ${popStr} habitants et beneficie de la proximite des services propres a la region ${region}. Pour ${serviceLC}, il est important de faire appel a des professionnels qui connaissent les materiaux et le style architectural local. Notre reseau d'artisans repond a cette exigence.`,

    `Ville moyenne de ${popStr} habitants, ${cityName} se distingue dans le paysage du ${department} (${departmentCode}) en ${region}. ${regionCtx.specificNeeds.charAt(0).toUpperCase() + regionCtx.specificNeeds.slice(1)} : ces realites locales rendent indispensable le recours a un artisan qualifie pour ${serviceLC}. Demandez vos devis gratuits et comparez les offres.`,
  ];

  // ----- Petite ville templates (5) -----
  const petiteVilleTemplates = [
    `${cityName}, petite ville de ${popStr} habitants dans le ${department} (${departmentCode}), allie qualite de vie et proximite des services en region ${region}. Meme dans une commune de cette taille, il est facile de trouver un artisan qualifie pour ${serviceLC}. Nos partenaires interviennent a ${cityName} et dans les communes avoisinantes.`,

    `Avec ${popStr} habitants, ${cityName} est une commune active du ${department} (${departmentCode}) en region ${region}. Le ${regionCtx.climate} influence les besoins d'entretien des logements : ${regionCtx.specificNeeds}. Pour ${serviceLC}, nos artisans partenaires se deplacent rapidement a ${cityName}.`,

    `Situee dans le ${department} (${departmentCode}), ${cityName} compte ${popStr} habitants et offre un cadre de vie paisible en ${region}. Les habitations locales, souvent des ${regionCtx.architecture}, ont besoin d'un entretien regulier. Nos professionnels en ${serviceLC} connaissent les particularites de cette zone.`,

    `${cityName} (${departmentCode}), commune du ${department} en region ${region}, rassemble ${popStr} habitants. Malgre sa taille moderee, la ville dispose d'artisans competents pour ${serviceLC}. Notre plateforme vous aide a identifier rapidement les meilleurs professionnels disponibles autour de ${cityName}.`,

    `Petite ville de ${popStr} habitants, ${cityName} est ancree dans le ${department} (${departmentCode}), au coeur de la region ${region}. Le bati local — ${regionCtx.architecture} — et le ${regionCtx.climate} creent des besoins specifiques. Nos artisans qualifies interviennent pour ${serviceLC} a ${cityName} et dans un rayon elargi.`,
  ];

  // ----- Commune templates (5) -----
  const communeTemplates = [
    `${cityName}, commune de ${popStr} habitants dans le ${department} (${departmentCode}), beneficie du charme et de la tranquillite propres aux petites localites de ${region}. Pour ${serviceLC}, il est important de pouvoir compter sur un artisan de proximite qui connait les specificites du bati local. Nos partenaires couvrent ${cityName} et les communes environnantes.`,

    `Avec ses ${popStr} habitants, ${cityName} est une commune du ${department} (${departmentCode}) en region ${region}. Le ${regionCtx.climate} et le type d'habitat — ${regionCtx.architecture} — demandent des competences artisanales specifiques pour ${serviceLC}. Notre reseau de professionnels se deplace jusque dans les petites communes comme ${cityName}.`,

    `${cityName} (${departmentCode}), dans le ${department}, est une commune rurale de ${popStr} habitants en region ${region}. Trouver un artisan fiable pour ${serviceLC} peut sembler difficile dans une petite commune, mais notre plateforme vous met en relation avec des professionnels qui interviennent regulierement dans votre secteur.`,

    `Commune de ${popStr} habitants situee dans le ${department} (${departmentCode}), ${cityName} profite du cadre naturel de la region ${region}. Les logements, principalement composes de ${regionCtx.architecture}, ont des besoins reguliers en ${serviceLC}. Nos artisans partenaires couvrent ce secteur avec serieux et professionnalisme.`,

    `Dans le ${department} (${departmentCode}), la commune de ${cityName} reunit ${popStr} habitants au sein de la region ${region}. ${regionCtx.specificNeeds.charAt(0).toUpperCase() + regionCtx.specificNeeds.slice(1)} : meme les petites localites meritent un service de qualite. Demandez vos devis pour ${serviceLC} a ${cityName}.`,
  ];

  const templateMap: Record<CitySize, string[]> = {
    metropole: metropoleTemplates,
    grande_ville: grandeVilleTemplates,
    ville_moyenne: villeMoyenneTemplates,
    petite_ville: petiteVilleTemplates,
    commune: communeTemplates,
  };

  const templates = templateMap[citySize];
  const idx = variantIndex(templates.length, cityName, serviceName, region);
  return templates[idx];
}

// ---------------------------------------------------------------------------
// 4. getLocalExpertiseText
// ---------------------------------------------------------------------------

export function getLocalExpertiseText(
  cityName: string,
  department: string,
  region: string,
  regionContext: RegionContext,
  serviceName: string
): string {
  const serviceLC = serviceName.toLowerCase();

  const templates = [
    `Les artisans de ${cityName} et du ${department} possedent une expertise locale precieuse pour ${serviceLC}. La region ${region}, avec son ${regionContext.climate}, impose des contraintes specifiques sur les habitations. Le parc immobilier local, domine par ${regionContext.architecture}, demande des competences adaptees. Nos professionnels partenaires connaissent les reglementations departementales, les materiaux courants dans la region et les meilleures pratiques pour garantir un resultat durable et conforme aux normes en vigueur.`,

    `Faire appel a un artisan local pour ${serviceLC} a ${cityName} presente de nombreux avantages. Les professionnels du ${department} en ${region} maitrisent les particularites du bati regional : ${regionContext.architecture}. Ils savent adapter leurs interventions au ${regionContext.climate} qui caracterise la zone. De plus, ${regionContext.specificNeeds} — autant de facteurs que seul un artisan du secteur peut pleinement prendre en compte.`,

    `L'expertise locale est un atout majeur pour ${serviceLC} a ${cityName}. Dans le ${department}, les artisans sont habitues a travailler sur des logements typiques de la region ${region} : ${regionContext.architecture}. Le ${regionContext.climate} influence directement les materiaux utilises, les techniques de pose et la frequence d'entretien necessaire. Nos partenaires a ${cityName} appliquent les meilleures pratiques adaptees a votre environnement.`,

    `A ${cityName} et dans tout le ${department}, les artisans qualifies pour ${serviceLC} beneficient d'une connaissance approfondie des conditions locales. En ${region}, le ${regionContext.climate} cree des exigences particulieres : ${regionContext.specificNeeds}. Le bati regional — ${regionContext.architecture} — requiert un savoir-faire specifique que nos professionnels partenaires possedent et mettent en oeuvre quotidiennement.`,

    `La region ${region} se distingue par son ${regionContext.climate} et un patrimoine architectural riche : ${regionContext.architecture}. Pour ${serviceLC} a ${cityName}, dans le ${department}, il est essentiel de confier vos travaux a des professionnels familiers de cet environnement. Nos artisans partenaires repondent aux exigences locales en matiere d'isolation, de materiaux et de reglementations departementales tout en assurant un service rapide et fiable.`,
  ];

  const idx = variantIndex(templates.length, cityName, serviceName, department);
  return templates[idx];
}

// ---------------------------------------------------------------------------
// 5. getPricingContextText
// ---------------------------------------------------------------------------

// Regional price modifier indicators
const regionPriceLevel: Record<string, "eleve" | "moyen" | "modere"> = {
  "Ile-de-France": "eleve",
  "Provence-Alpes-Cote d'Azur": "eleve",
  Corse: "eleve",
  "Auvergne-Rhone-Alpes": "moyen",
  Occitanie: "moyen",
  "Pays de la Loire": "moyen",
  Bretagne: "moyen",
  "Nouvelle-Aquitaine": "moyen",
  Normandie: "modere",
  "Hauts-de-France": "modere",
  "Grand Est": "modere",
  "Bourgogne-Franche-Comte": "modere",
  "Centre-Val de Loire": "modere",
  Guadeloupe: "eleve",
  Martinique: "eleve",
  Guyane: "eleve",
  "La Reunion": "eleve",
  Mayotte: "eleve",
};

function getPriceLevelText(region: string): string {
  const level = regionPriceLevel[region] ?? "moyen";
  switch (level) {
    case "eleve":
      return "legerement superieurs a la moyenne nationale en raison du cout de la vie et de la forte demande";
    case "moyen":
      return "proches de la moyenne nationale, avec des variations selon la disponibilite des artisans locaux";
    case "modere":
      return "generalement inferieurs a la moyenne nationale, ce qui represente un avantage pour les particuliers";
  }
}

export function getPricingContextText(
  cityName: string,
  citySize: CitySize,
  region: string,
  serviceName: string,
  priceRange: string
): string {
  const serviceLC = serviceName.toLowerCase();
  const priceLevelText = getPriceLevelText(region);

  const templates = [
    `Le prix pour ${serviceLC} a ${cityName} se situe en moyenne entre ${priceRange}. En region ${region}, les tarifs des artisans sont ${priceLevelText}. Plusieurs facteurs influencent le prix final : la complexite de l'intervention, l'urgence de la demande, l'accessibilite du logement et les materiaux necessaires. ${citySize === "metropole" || citySize === "grande_ville" ? "Dans une grande agglomeration comme " + cityName + ", la concurrence entre artisans joue en votre faveur pour obtenir des tarifs competitifs." : citySize === "commune" || citySize === "petite_ville" ? "Dans une commune comme " + cityName + ", les frais de deplacement peuvent representer une part plus importante du devis." : "A " + cityName + ", le nombre d'artisans disponibles permet de comparer efficacement les offres."} Demandez plusieurs devis pour beneficier du meilleur rapport qualite-prix.`,

    `A ${cityName}, le budget a prevoir pour ${serviceLC} oscille entre ${priceRange}. Ces tarifs s'inscrivent dans le contexte tarifaire de la region ${region}, ou les prix sont ${priceLevelText}. ${citySize === "metropole" || citySize === "grande_ville" ? "L'avantage d'une ville comme " + cityName + " reside dans le nombre eleve d'artisans, qui favorise la competitivite des prix." : citySize === "commune" || citySize === "petite_ville" ? "Pour une commune de la taille de " + cityName + ", la proximite de l'artisan avec votre domicile peut influencer le montant du devis (frais de deplacement)." : "La taille de " + cityName + " permet un bon equilibre entre disponibilite des artisans et prix raisonnables."} N'hesitez pas a comparer les devis : les ecarts de prix peuvent atteindre 30% d'un professionnel a l'autre pour une prestation equivalente.`,

    `Pour ${serviceLC} a ${cityName}, prevoyez un budget compris entre ${priceRange}. En ${region}, les tarifs pratiques sont ${priceLevelText}. Le coût final depend de la nature exacte de l'intervention, de la surface ou du volume concerne, et des eventuelles contraintes d'acces. ${citySize === "metropole" || citySize === "grande_ville" ? "Dans une metropole comme " + cityName + ", les artisans proposent souvent des forfaits concurrentiels." : "A " + cityName + ", les artisans locaux appliquent generalement des tarifs adaptes au marche de la zone."} Comparer au moins 2 a 3 devis reste la meilleure strategie pour maitriser votre budget.`,

    `Les tarifs pour ${serviceLC} a ${cityName} s'echelonnent entre ${priceRange}, une fourchette qui peut varier selon les specificites de votre projet. La region ${region} se situe a un niveau de prix ${priceLevelText}. ${citySize === "metropole" || citySize === "grande_ville" ? "La densite d'artisans a " + cityName + " vous donne acces a de nombreuses offres competitives." : citySize === "commune" || citySize === "petite_ville" ? "Meme dans une commune comme " + cityName + ", nos artisans partenaires proposent des tarifs transparents et competitifs." : "A " + cityName + ", vous trouverez un bon choix d'artisans a des prix raisonnables."} Pour obtenir le juste prix, demandez vos devis gratuits et sans engagement via notre formulaire.`,

    `Le cout moyen de ${serviceLC} a ${cityName} est estime entre ${priceRange}. Ces prix refletent le marche local en ${region}, ou les tarifs sont ${priceLevelText}. Plusieurs elements peuvent faire varier le montant du devis : urgence de l'intervention, materiaux choisis, difficulte technique, et horaire d'intervention (majoration possible en soiree, weekend ou jours feries). ${citySize === "metropole" || citySize === "grande_ville" ? "A " + cityName + ", la forte concurrence entre professionnels vous permet de negocier." : "A " + cityName + ", nous vous recommandons de comparer les offres de nos artisans verifies pour un choix eclaire."}`,
  ];

  const idx = variantIndex(templates.length, cityName, serviceName, region);
  return templates[idx];
}

// ---------------------------------------------------------------------------
// 6. getWhyChooseUsText
// ---------------------------------------------------------------------------

export function getWhyChooseUsText(
  cityName: string,
  department: string,
  population: number,
  serviceName: string
): string {
  const serviceLC = serviceName.toLowerCase();
  const popStr = population.toLocaleString("fr-FR");

  const templates = [
    [
      `Artisans rigoureusement verifies a ${cityName} : chaque professionnel est controle (SIRET, assurance RC Pro, qualifications)`,
      `Jusqu'a 3 devis gratuits et sans engagement pour ${serviceLC} dans le ${department}`,
      `Reponse garantie en moins de 24h par des artisans proches de chez vous`,
      `Service 100% gratuit : aucun frais pour les ${popStr} habitants de ${cityName}`,
      `Artisans couverts par une assurance decennale et une responsabilite civile professionnelle`,
      `Intervention rapide sur ${cityName} et les communes limitrophes du ${department}`,
    ],
    [
      `Reseau d'artisans qualifies couvrant ${cityName} et tout le ${department}`,
      `Devis detailles et personnalises pour ${serviceLC}, adaptes a votre situation`,
      `Aucun engagement : comparez librement les offres et choisissez en toute serenite`,
      `Professionnels reactifs, capables d'intervenir rapidement a ${cityName}`,
      `Garantie de serieux : verifications systematiques des qualifications et assurances`,
      `Un service simple et efficace utilise par des milliers de particuliers en France`,
    ],
    [
      `Mise en relation rapide avec les meilleurs artisans de ${cityName} pour ${serviceLC}`,
      `Devis gratuits, transparents et detailles : aucune mauvaise surprise`,
      `Artisans locaux du ${department} familiers avec les habitations de ${cityName}`,
      `Service sans engagement : vous restez libre de votre choix a chaque etape`,
      `Professionnels assures et certifies pour votre tranquillite d'esprit`,
      `Accompagnement personnalise tout au long de votre projet de ${serviceLC}`,
    ],
    [
      `Des artisans de confiance a ${cityName}, selectionnes pour leur competence et leur serieux`,
      `Comparaison facile de jusqu'a 3 devis pour ${serviceLC} : trouvez le meilleur prix`,
      `Zero frais, zero engagement : un service entierement gratuit pour les habitants de ${cityName}`,
      `Delai de reponse rapide, meme pour les interventions urgentes dans le ${department}`,
      `Suivi de votre demande et support disponible en cas de question`,
      `Des milliers de particuliers satisfaits nous font confiance chaque mois`,
    ],
    [
      `Artisans verifies et experimentes, installes a ${cityName} ou a proximite`,
      `Devis personnalises pour ${serviceLC} : chaque projet est unique et merite une offre adaptee`,
      `Gratuit et sans engagement pour les ${popStr} habitants de ${cityName} et alentours`,
      `Reactivite garantie : nos artisans du ${department} vous contactent sous 24h`,
      `Transparence totale sur les tarifs et les prestations proposees`,
      `Un reseau national de professionnels qualifies, actif partout en France metropolitaine et outre-mer`,
    ],
  ];

  const idx = variantIndex(templates.length, cityName, serviceName, department);
  return templates[idx].join(" | ");
}

/**
 * Returns the "why choose us" benefits as an array of strings for easy rendering in UI.
 */
export function getWhyChooseUsItems(
  cityName: string,
  department: string,
  population: number,
  serviceName: string
): string[] {
  return getWhyChooseUsText(cityName, department, population, serviceName).split(
    " | "
  );
}

// ---------------------------------------------------------------------------
// 7. getCityServiceFAQ
// ---------------------------------------------------------------------------

export function getCityServiceFAQ(
  serviceName: string,
  cityName: string,
  departmentCode: string,
  department: string,
  priceRange: string,
  regionContext: RegionContext,
  citySize: CitySize
): FAQItem[] {
  const serviceLC = serviceName.toLowerCase();
  const elision =
    serviceLC.startsWith("d") ||
    serviceLC.startsWith("e") ||
    serviceLC.startsWith("n") ||
    serviceLC.startsWith("i") ||
    serviceLC.startsWith("a") ||
    serviceLC.startsWith("o") ||
    serviceLC.startsWith("u");
  const de = elision ? "d'" : "de ";
  const du = elision ? "d'" : "du ";

  // Base FAQ items (always included)
  const baseFAQs: FAQItem[] = [
    {
      question: `Quel est le prix ${de}${serviceLC} a ${cityName} ?`,
      answer: `Le prix moyen pour ${serviceLC} a ${cityName} (${departmentCode}) se situe entre ${priceRange}. Ce tarif peut varier selon la complexite de l'intervention, l'urgence, les materiaux necessaires et les conditions d'acces a votre logement. Pour obtenir un prix precis et adapte a votre situation, nous vous recommandons de demander vos devis gratuits via notre formulaire. Vous recevrez jusqu'a 3 propositions d'artisans qualifies du ${department} sous 24h.`,
    },
    {
      question: `Comment trouver un artisan pour ${serviceLC} a ${cityName} ?`,
      answer: `Avec Renov Habitation, trouver un artisan qualifie pour ${serviceLC} a ${cityName} est simple et rapide. Remplissez notre formulaire gratuit en decrivant votre besoin — cela prend moins de 2 minutes. Nous transmettons votre demande a des artisans verifies du ${department} (${departmentCode}). Vous recevez ensuite jusqu'a 3 devis detailles sous 24h, que vous pouvez comparer librement et sans engagement. Chaque artisan est controle : SIRET valide, assurance professionnelle et qualifications verifiees.`,
    },
    {
      question: `Les artisans pour ${serviceLC} a ${cityName} sont-ils assures ?`,
      answer: `Oui, tous nos artisans partenaires a ${cityName} et dans le ${department} disposent d'une assurance responsabilite civile professionnelle et, pour les travaux relevant de la garantie decennale, d'une assurance decennale en cours de validite. Nous verifions systematiquement ces elements avant de referencer un professionnel sur notre plateforme. Vous pouvez demander a l'artisan de vous fournir son attestation d'assurance avant le debut des travaux.`,
    },
    {
      question: `En combien de temps un artisan peut-il intervenir pour ${serviceLC} a ${cityName} ?`,
      answer: `Nos artisans partenaires a ${cityName} et dans le ${department} vous recontactent sous 24h maximum apres la transmission de votre demande. Pour les interventions urgentes, un depannage le jour meme est souvent possible selon les disponibilites. ${citySize === "metropole" || citySize === "grande_ville" ? "Dans une ville de la taille de " + cityName + ", la forte densite d'artisans permet generalement des interventions rapides." : citySize === "commune" || citySize === "petite_ville" ? "Meme dans une commune comme " + cityName + ", nos artisans partenaires couvrent votre secteur et peuvent se deplacer rapidement." : "A " + cityName + ", les delais d'intervention sont generalement courts grace a la bonne couverture artisanale du secteur."}`,
    },
    {
      question: `Le devis pour ${serviceLC} a ${cityName} est-il vraiment gratuit ?`,
      answer: `Oui, notre service est 100% gratuit et sans engagement pour les habitants de ${cityName} et de tout le ${department}. Vous recevez jusqu'a 3 devis d'artisans qualifies sans aucun frais. Les artisans prennent en charge le cout de la mise en relation. Vous etes libre d'accepter ou de refuser chaque devis sans justification et sans penalite. Il n'y a aucun frais cache ni commission sur les travaux realises.`,
    },
  ];

  // Climate/region-specific FAQ
  const climateFAQs: FAQItem[] = [
    {
      question: `Le ${regionContext.climate} a-t-il un impact sur les besoins en ${serviceLC} a ${cityName} ?`,
      answer: `Oui, le ${regionContext.climate} qui caracterise la region de ${cityName} influence directement les besoins en ${serviceLC}. ${regionContext.specificNeeds.charAt(0).toUpperCase() + regionContext.specificNeeds.slice(1)} sont autant de facteurs lies au climat local qui peuvent necessiter des interventions specifiques. Nos artisans du ${department} connaissent parfaitement ces contraintes et adaptent leurs prestations en consequence. Ils utilisent des materiaux et des techniques eprouves pour garantir des resultats durables dans votre environnement climatique.`,
    },
  ];

  // Architecture-specific FAQ
  const architectureFAQs: FAQItem[] = [
    {
      question: `Les artisans a ${cityName} sont-ils habitues au bati local pour ${serviceLC} ?`,
      answer: `Absolument. Le parc immobilier de ${cityName} et du ${department} est compose principalement de ${regionContext.architecture}. Nos artisans partenaires interviennent quotidiennement sur ce type de constructions et maitrisent les techniques appropriees. Que votre logement soit ancien ou recent, ils sauront adapter leur intervention de ${serviceLC} aux specificites de votre habitation tout en respectant les normes en vigueur et l'integrite du bati.`,
    },
  ];

  // City-size-specific FAQ
  const sizeFAQs: FAQItem[] = [];

  if (citySize === "metropole" || citySize === "grande_ville") {
    sizeFAQs.push({
      question: `Y a-t-il beaucoup d'artisans disponibles pour ${serviceLC} a ${cityName} ?`,
      answer: `${cityName} etant une ville importante du ${department}, le nombre d'artisans qualifies pour ${serviceLC} est eleve. Cette concurrence est un avantage pour vous : elle garantit des delais d'intervention courts, des prix competitifs et un choix diversifie de professionnels. En utilisant notre service, vous accedez aux artisans les mieux notes et les plus fiables de ${cityName} et de son agglomeration. Nous vous recommandons de comparer les 3 devis recus pour choisir l'offre la plus adaptee.`,
    });
  } else if (citySize === "commune" || citySize === "petite_ville") {
    sizeFAQs.push({
      question: `Peut-on trouver un artisan pour ${serviceLC} meme dans une petite commune comme ${cityName} ?`,
      answer: `Oui, notre reseau couvre l'ensemble du ${department}, y compris les petites communes comme ${cityName}. Les artisans partenaires de notre plateforme interviennent dans un rayon elargi et se deplacent regulierement dans les communes rurales et periurbaines. Certains frais de deplacement supplementaires peuvent s'appliquer, mais ils sont toujours indiques de maniere transparente dans le devis. Vous beneficiez du meme niveau de qualite et de verification que dans les grandes villes.`,
    });
  } else {
    sizeFAQs.push({
      question: `Comment ${serviceLC} se deroule a ${cityName} concretement ?`,
      answer: `Le processus est simple : apres avoir rempli notre formulaire de demande de devis, des artisans qualifies de ${cityName} et du ${department} vous recontactent sous 24h. Ils evaluent votre besoin, se deplacent si necessaire pour un diagnostic sur place, puis vous remettent un devis detaille. Si vous acceptez, l'intervention est planifiee selon vos disponibilites. L'artisan realise les travaux de ${serviceLC}, puis vous validez la prestation. En cas de question, notre equipe est disponible pour vous accompagner.`,
    });
  }

  // Guarantee and after-service FAQ
  const guaranteeFAQs: FAQItem[] = [
    {
      question: `Quelles garanties ai-je pour ${serviceLC} a ${cityName} ?`,
      answer: `Plusieurs garanties vous protegent lorsque vous faites appel a un artisan via Renov Habitation pour ${serviceLC} a ${cityName}. D'abord, chaque artisan est assure (responsabilite civile professionnelle et, le cas echeant, garantie decennale). Ensuite, le devis signe fait office de contrat : l'artisan est tenu de respecter les prestations, delais et prix annonces. Enfin, pour les travaux importants, la garantie de parfait achevement (1 an) et la garantie decennale (10 ans) s'appliquent conformement a la loi. En cas de probleme, notre equipe vous accompagne dans la resolution du litige.`,
    },
  ];

  return [
    ...baseFAQs,
    ...climateFAQs,
    ...architectureFAQs,
    ...sizeFAQs,
    ...guaranteeFAQs,
  ];
}

// ---------------------------------------------------------------------------
// 8. getInternalLinkSuggestions
// ---------------------------------------------------------------------------

export function getInternalLinkSuggestions(
  serviceSlug: string,
  citySlug: string,
  region: string,
  department: string
): InternalLinkSuggestions {
  // Slugify helper
  const slugify = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const regionSlug = slugify(region);
  const deptSlug = slugify(department);

  // Related service suggestions based on common pairings
  const serviceRelations: Record<string, string[]> = {
    "reparation-volets-roulants": [
      "depannage-serrurerie",
      "isolation-thermique",
      "peinture-interieure",
    ],
    "recherche-fuite-eau": [
      "plomberie-urgente",
      "depannage-chauffage",
      "isolation-thermique",
    ],
    "debarras-maison": [
      "peinture-interieure",
      "nettoyage-panneaux-solaires",
      "isolation-thermique",
    ],
    "traitement-nuisibles": [
      "debarras-maison",
      "plomberie-urgente",
      "isolation-thermique",
    ],
    "entretien-pompe-chaleur": [
      "depannage-chauffage",
      "isolation-thermique",
      "installation-climatisation",
    ],
    "nettoyage-panneaux-solaires": [
      "entretien-pompe-chaleur",
      "installation-climatisation",
      "isolation-thermique",
    ],
    "depannage-portail-electrique": [
      "depannage-electrique",
      "depannage-serrurerie",
      "reparation-volets-roulants",
    ],
    "ramonage-cheminee": [
      "depannage-chauffage",
      "entretien-pompe-chaleur",
      "isolation-thermique",
    ],
    "plomberie-urgente": [
      "recherche-fuite-eau",
      "depannage-chauffage",
      "depannage-electrique",
    ],
    "depannage-chauffage": [
      "plomberie-urgente",
      "entretien-pompe-chaleur",
      "ramonage-cheminee",
    ],
    "depannage-electrique": [
      "depannage-serrurerie",
      "plomberie-urgente",
      "depannage-portail-electrique",
    ],
    "depannage-serrurerie": [
      "depannage-electrique",
      "reparation-volets-roulants",
      "depannage-portail-electrique",
    ],
    "isolation-thermique": [
      "depannage-chauffage",
      "entretien-pompe-chaleur",
      "peinture-interieure",
    ],
    "installation-climatisation": [
      "entretien-pompe-chaleur",
      "depannage-electrique",
      "isolation-thermique",
    ],
    "peinture-interieure": [
      "debarras-maison",
      "isolation-thermique",
      "reparation-volets-roulants",
    ],
  };

  const relatedServices = serviceRelations[serviceSlug] ?? [];

  return {
    guides: [
      `/prix/${serviceSlug}`,
      `/aide/${serviceSlug}`,
      ...relatedServices.map((s) => `/prix/${s}`),
    ],
    blog: [
      `/blog/${serviceSlug}-conseils`,
      `/blog/comment-choisir-artisan-${deptSlug}`,
      `/blog/aides-financieres-travaux-${regionSlug}`,
    ],
    comparatifs: [
      `/comparatifs/${serviceSlug}`,
      ...relatedServices.slice(0, 2).map((s) => `/comparatifs/${s}`),
    ],
    nearby: relatedServices.map(
      (s) => `/services/${s}/${citySlug}`
    ),
  };
}

// ---------------------------------------------------------------------------
// Bonus utility: full SEO content bundle for a city+service page
// ---------------------------------------------------------------------------

export interface CityServiceSEOContent {
  citySize: CitySize;
  regionContext: RegionContext;
  introText: string;
  localExpertiseText: string;
  pricingContextText: string;
  whyChooseUsItems: string[];
  faqItems: FAQItem[];
  internalLinks: InternalLinkSuggestions;
}

/**
 * Convenience function: generates all SEO content for a city+service page in one call.
 */
export function getCityServiceSEOContent(
  cityName: string,
  population: number,
  department: string,
  departmentCode: string,
  region: string,
  serviceName: string,
  serviceSlug: string,
  citySlug: string,
  priceRange: string
): CityServiceSEOContent {
  const citySize = getCitySize(population);
  const regionCtx = getRegionContext(region);

  return {
    citySize,
    regionContext: regionCtx,
    introText: getCityIntroText(
      cityName,
      citySize,
      population,
      department,
      departmentCode,
      region,
      serviceName
    ),
    localExpertiseText: getLocalExpertiseText(
      cityName,
      department,
      region,
      regionCtx,
      serviceName
    ),
    pricingContextText: getPricingContextText(
      cityName,
      citySize,
      region,
      serviceName,
      priceRange
    ),
    whyChooseUsItems: getWhyChooseUsItems(
      cityName,
      department,
      population,
      serviceName
    ),
    faqItems: getCityServiceFAQ(
      serviceName,
      cityName,
      departmentCode,
      department,
      priceRange,
      regionCtx,
      citySize
    ),
    internalLinks: getInternalLinkSuggestions(
      serviceSlug,
      citySlug,
      region,
      department
    ),
  };
}
