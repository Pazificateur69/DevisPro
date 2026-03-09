export interface City {
  slug: string;
  name: string;
  department: string;
  departmentCode: string;
  region: string;
  population: number;
}

export const cities: City[] = [
  // Ile-de-France
  { slug: "paris", name: "Paris", department: "Paris", departmentCode: "75", region: "Ile-de-France", population: 2161000 },
  { slug: "boulogne-billancourt", name: "Boulogne-Billancourt", department: "Hauts-de-Seine", departmentCode: "92", region: "Ile-de-France", population: 120071 },
  { slug: "saint-denis", name: "Saint-Denis", department: "Seine-Saint-Denis", departmentCode: "93", region: "Ile-de-France", population: 113131 },
  { slug: "argenteuil", name: "Argenteuil", department: "Val-d'Oise", departmentCode: "95", region: "Ile-de-France", population: 110388 },
  { slug: "montreuil", name: "Montreuil", department: "Seine-Saint-Denis", departmentCode: "93", region: "Ile-de-France", population: 109914 },
  { slug: "nanterre", name: "Nanterre", department: "Hauts-de-Seine", departmentCode: "92", region: "Ile-de-France", population: 96287 },
  { slug: "vitry-sur-seine", name: "Vitry-sur-Seine", department: "Val-de-Marne", departmentCode: "94", region: "Ile-de-France", population: 94649 },
  { slug: "creteil", name: "Creteil", department: "Val-de-Marne", departmentCode: "94", region: "Ile-de-France", population: 92472 },
  { slug: "asnieres-sur-seine", name: "Asnieres-sur-Seine", department: "Hauts-de-Seine", departmentCode: "92", region: "Ile-de-France", population: 89468 },
  { slug: "colombes", name: "Colombes", department: "Hauts-de-Seine", departmentCode: "92", region: "Ile-de-France", population: 85199 },
  { slug: "versailles", name: "Versailles", department: "Yvelines", departmentCode: "78", region: "Ile-de-France", population: 85771 },
  { slug: "courbevoie", name: "Courbevoie", department: "Hauts-de-Seine", departmentCode: "92", region: "Ile-de-France", population: 81719 },
  { slug: "aubervilliers", name: "Aubervilliers", department: "Seine-Saint-Denis", departmentCode: "93", region: "Ile-de-France", population: 89155 },
  { slug: "aulnay-sous-bois", name: "Aulnay-sous-Bois", department: "Seine-Saint-Denis", departmentCode: "93", region: "Ile-de-France", population: 86177 },
  { slug: "rueil-malmaison", name: "Rueil-Malmaison", department: "Hauts-de-Seine", departmentCode: "92", region: "Ile-de-France", population: 80829 },
  { slug: "champigny-sur-marne", name: "Champigny-sur-Marne", department: "Val-de-Marne", departmentCode: "94", region: "Ile-de-France", population: 77310 },
  { slug: "saint-maur-des-fosses", name: "Saint-Maur-des-Fosses", department: "Val-de-Marne", departmentCode: "94", region: "Ile-de-France", population: 76812 },
  { slug: "drancy", name: "Drancy", department: "Seine-Saint-Denis", departmentCode: "93", region: "Ile-de-France", population: 72907 },
  { slug: "issy-les-moulineaux", name: "Issy-les-Moulineaux", department: "Hauts-de-Seine", departmentCode: "92", region: "Ile-de-France", population: 69056 },
  { slug: "noisy-le-grand", name: "Noisy-le-Grand", department: "Seine-Saint-Denis", departmentCode: "93", region: "Ile-de-France", population: 69121 },
  { slug: "levallois-perret", name: "Levallois-Perret", department: "Hauts-de-Seine", departmentCode: "92", region: "Ile-de-France", population: 66082 },
  { slug: "cergy", name: "Cergy", department: "Val-d'Oise", departmentCode: "95", region: "Ile-de-France", population: 66322 },
  { slug: "evry-courcouronnes", name: "Evry-Courcouronnes", department: "Essonne", departmentCode: "91", region: "Ile-de-France", population: 68233 },
  { slug: "ivry-sur-seine", name: "Ivry-sur-Seine", department: "Val-de-Marne", departmentCode: "94", region: "Ile-de-France", population: 63132 },
  { slug: "meaux", name: "Meaux", department: "Seine-et-Marne", departmentCode: "77", region: "Ile-de-France", population: 55750 },
  // Auvergne-Rhone-Alpes
  { slug: "lyon", name: "Lyon", department: "Rhone", departmentCode: "69", region: "Auvergne-Rhone-Alpes", population: 522250 },
  { slug: "grenoble", name: "Grenoble", department: "Isere", departmentCode: "38", region: "Auvergne-Rhone-Alpes", population: 158454 },
  { slug: "saint-etienne", name: "Saint-Etienne", department: "Loire", departmentCode: "42", region: "Auvergne-Rhone-Alpes", population: 177480 },
  { slug: "villeurbanne", name: "Villeurbanne", department: "Rhone", departmentCode: "69", region: "Auvergne-Rhone-Alpes", population: 152984 },
  { slug: "clermont-ferrand", name: "Clermont-Ferrand", department: "Puy-de-Dome", departmentCode: "63", region: "Auvergne-Rhone-Alpes", population: 147284 },
  { slug: "annecy", name: "Annecy", department: "Haute-Savoie", departmentCode: "74", region: "Auvergne-Rhone-Alpes", population: 131084 },
  { slug: "valence", name: "Valence", department: "Drome", departmentCode: "26", region: "Auvergne-Rhone-Alpes", population: 64276 },
  { slug: "chambery", name: "Chambery", department: "Savoie", departmentCode: "73", region: "Auvergne-Rhone-Alpes", population: 60692 },
  { slug: "venissieux", name: "Venissieux", department: "Rhone", departmentCode: "69", region: "Auvergne-Rhone-Alpes", population: 66858 },
  { slug: "vaulx-en-velin", name: "Vaulx-en-Velin", department: "Rhone", departmentCode: "69", region: "Auvergne-Rhone-Alpes", population: 52988 },
  { slug: "bourg-en-bresse", name: "Bourg-en-Bresse", department: "Ain", departmentCode: "01", region: "Auvergne-Rhone-Alpes", population: 41548 },
  { slug: "saint-priest", name: "Saint-Priest", department: "Rhone", departmentCode: "69", region: "Auvergne-Rhone-Alpes", population: 46828 },
  { slug: "caluire-et-cuire", name: "Caluire-et-Cuire", department: "Rhone", departmentCode: "69", region: "Auvergne-Rhone-Alpes", population: 43583 },
  // Nouvelle-Aquitaine
  { slug: "bordeaux", name: "Bordeaux", department: "Gironde", departmentCode: "33", region: "Nouvelle-Aquitaine", population: 260958 },
  { slug: "limoges", name: "Limoges", department: "Haute-Vienne", departmentCode: "87", region: "Nouvelle-Aquitaine", population: 132175 },
  { slug: "poitiers", name: "Poitiers", department: "Vienne", departmentCode: "86", region: "Nouvelle-Aquitaine", population: 89212 },
  { slug: "pau", name: "Pau", department: "Pyrenees-Atlantiques", departmentCode: "64", region: "Nouvelle-Aquitaine", population: 77215 },
  { slug: "la-rochelle", name: "La Rochelle", department: "Charente-Maritime", departmentCode: "17", region: "Nouvelle-Aquitaine", population: 79880 },
  { slug: "merignac", name: "Merignac", department: "Gironde", departmentCode: "33", region: "Nouvelle-Aquitaine", population: 72197 },
  { slug: "pessac", name: "Pessac", department: "Gironde", departmentCode: "33", region: "Nouvelle-Aquitaine", population: 64832 },
  { slug: "bayonne", name: "Bayonne", department: "Pyrenees-Atlantiques", departmentCode: "64", region: "Nouvelle-Aquitaine", population: 52006 },
  { slug: "niort", name: "Niort", department: "Deux-Sevres", departmentCode: "79", region: "Nouvelle-Aquitaine", population: 59005 },
  { slug: "angouleme", name: "Angouleme", department: "Charente", departmentCode: "16", region: "Nouvelle-Aquitaine", population: 42512 },
  { slug: "perigueux", name: "Perigueux", department: "Dordogne", departmentCode: "24", region: "Nouvelle-Aquitaine", population: 30069 },
  { slug: "agen", name: "Agen", department: "Lot-et-Garonne", departmentCode: "47", region: "Nouvelle-Aquitaine", population: 34758 },
  { slug: "brive-la-gaillarde", name: "Brive-la-Gaillarde", department: "Correze", departmentCode: "19", region: "Nouvelle-Aquitaine", population: 47004 },
  // Occitanie
  { slug: "toulouse", name: "Toulouse", department: "Haute-Garonne", departmentCode: "31", region: "Occitanie", population: 498003 },
  { slug: "montpellier", name: "Montpellier", department: "Herault", departmentCode: "34", region: "Occitanie", population: 299096 },
  { slug: "nimes", name: "Nimes", department: "Gard", departmentCode: "30", region: "Occitanie", population: 151001 },
  { slug: "perpignan", name: "Perpignan", department: "Pyrenees-Orientales", departmentCode: "66", region: "Occitanie", population: 121875 },
  { slug: "beziers", name: "Beziers", department: "Herault", departmentCode: "34", region: "Occitanie", population: 78683 },
  { slug: "carcassonne", name: "Carcassonne", department: "Aude", departmentCode: "11", region: "Occitanie", population: 47068 },
  { slug: "narbonne", name: "Narbonne", department: "Aude", departmentCode: "11", region: "Occitanie", population: 55600 },
  { slug: "albi", name: "Albi", department: "Tarn", departmentCode: "81", region: "Occitanie", population: 49024 },
  { slug: "tarbes", name: "Tarbes", department: "Hautes-Pyrenees", departmentCode: "65", region: "Occitanie", population: 41518 },
  { slug: "castres", name: "Castres", department: "Tarn", departmentCode: "81", region: "Occitanie", population: 42577 },
  { slug: "montauban", name: "Montauban", department: "Tarn-et-Garonne", departmentCode: "82", region: "Occitanie", population: 62697 },
  { slug: "sete", name: "Sete", department: "Herault", departmentCode: "34", region: "Occitanie", population: 44858 },
  // Hauts-de-France
  { slug: "lille", name: "Lille", department: "Nord", departmentCode: "59", region: "Hauts-de-France", population: 236234 },
  { slug: "amiens", name: "Amiens", department: "Somme", departmentCode: "80", region: "Hauts-de-France", population: 134706 },
  { slug: "roubaix", name: "Roubaix", department: "Nord", departmentCode: "59", region: "Hauts-de-France", population: 98828 },
  { slug: "tourcoing", name: "Tourcoing", department: "Nord", departmentCode: "59", region: "Hauts-de-France", population: 98656 },
  { slug: "dunkerque", name: "Dunkerque", department: "Nord", departmentCode: "59", region: "Hauts-de-France", population: 87353 },
  { slug: "calais", name: "Calais", department: "Pas-de-Calais", departmentCode: "62", region: "Hauts-de-France", population: 73911 },
  { slug: "valenciennes", name: "Valenciennes", department: "Nord", departmentCode: "59", region: "Hauts-de-France", population: 43787 },
  { slug: "beauvais", name: "Beauvais", department: "Oise", departmentCode: "60", region: "Hauts-de-France", population: 56020 },
  { slug: "lens", name: "Lens", department: "Pas-de-Calais", departmentCode: "62", region: "Hauts-de-France", population: 31398 },
  { slug: "saint-quentin", name: "Saint-Quentin", department: "Aisne", departmentCode: "02", region: "Hauts-de-France", population: 54949 },
  { slug: "compiegne", name: "Compiegne", department: "Oise", departmentCode: "60", region: "Hauts-de-France", population: 41834 },
  { slug: "arras", name: "Arras", department: "Pas-de-Calais", departmentCode: "62", region: "Hauts-de-France", population: 41611 },
  { slug: "boulogne-sur-mer", name: "Boulogne-sur-Mer", department: "Pas-de-Calais", departmentCode: "62", region: "Hauts-de-France", population: 41283 },
  // Provence-Alpes-Cote d'Azur
  { slug: "marseille", name: "Marseille", department: "Bouches-du-Rhone", departmentCode: "13", region: "Provence-Alpes-Cote d'Azur", population: 873076 },
  { slug: "nice", name: "Nice", department: "Alpes-Maritimes", departmentCode: "06", region: "Provence-Alpes-Cote d'Azur", population: 342669 },
  { slug: "toulon", name: "Toulon", department: "Var", departmentCode: "83", region: "Provence-Alpes-Cote d'Azur", population: 178745 },
  { slug: "aix-en-provence", name: "Aix-en-Provence", department: "Bouches-du-Rhone", departmentCode: "13", region: "Provence-Alpes-Cote d'Azur", population: 147477 },
  { slug: "avignon", name: "Avignon", department: "Vaucluse", departmentCode: "84", region: "Provence-Alpes-Cote d'Azur", population: 93671 },
  { slug: "antibes", name: "Antibes", department: "Alpes-Maritimes", departmentCode: "06", region: "Provence-Alpes-Cote d'Azur", population: 74875 },
  { slug: "cannes", name: "Cannes", department: "Alpes-Maritimes", departmentCode: "06", region: "Provence-Alpes-Cote d'Azur", population: 74152 },
  { slug: "frejus", name: "Frejus", department: "Var", departmentCode: "83", region: "Provence-Alpes-Cote d'Azur", population: 54458 },
  { slug: "la-seyne-sur-mer", name: "La Seyne-sur-Mer", department: "Var", departmentCode: "83", region: "Provence-Alpes-Cote d'Azur", population: 65267 },
  { slug: "hyeres", name: "Hyeres", department: "Var", departmentCode: "83", region: "Provence-Alpes-Cote d'Azur", population: 57530 },
  { slug: "gap", name: "Gap", department: "Hautes-Alpes", departmentCode: "05", region: "Provence-Alpes-Cote d'Azur", population: 41072 },
  { slug: "arles", name: "Arles", department: "Bouches-du-Rhone", departmentCode: "13", region: "Provence-Alpes-Cote d'Azur", population: 52510 },
  // Grand Est
  { slug: "strasbourg", name: "Strasbourg", department: "Bas-Rhin", departmentCode: "67", region: "Grand Est", population: 287228 },
  { slug: "reims", name: "Reims", department: "Marne", departmentCode: "51", region: "Grand Est", population: 185825 },
  { slug: "metz", name: "Metz", department: "Moselle", departmentCode: "57", region: "Grand Est", population: 119962 },
  { slug: "mulhouse", name: "Mulhouse", department: "Haut-Rhin", departmentCode: "68", region: "Grand Est", population: 109588 },
  { slug: "nancy", name: "Nancy", department: "Meurthe-et-Moselle", departmentCode: "54", region: "Grand Est", population: 104321 },
  { slug: "colmar", name: "Colmar", department: "Haut-Rhin", departmentCode: "68", region: "Grand Est", population: 70284 },
  { slug: "troyes", name: "Troyes", department: "Aube", departmentCode: "10", region: "Grand Est", population: 61652 },
  { slug: "charleville-mezieres", name: "Charleville-Mezieres", department: "Ardennes", departmentCode: "08", region: "Grand Est", population: 47478 },
  { slug: "chalons-en-champagne", name: "Chalons-en-Champagne", department: "Marne", departmentCode: "51", region: "Grand Est", population: 44899 },
  { slug: "epinal", name: "Epinal", department: "Vosges", departmentCode: "88", region: "Grand Est", population: 32224 },
  // Pays de la Loire
  { slug: "nantes", name: "Nantes", department: "Loire-Atlantique", departmentCode: "44", region: "Pays de la Loire", population: 318808 },
  { slug: "angers", name: "Angers", department: "Maine-et-Loire", departmentCode: "49", region: "Pays de la Loire", population: 157175 },
  { slug: "le-mans", name: "Le Mans", department: "Sarthe", departmentCode: "72", region: "Pays de la Loire", population: 145169 },
  { slug: "saint-nazaire", name: "Saint-Nazaire", department: "Loire-Atlantique", departmentCode: "44", region: "Pays de la Loire", population: 72299 },
  { slug: "la-roche-sur-yon", name: "La Roche-sur-Yon", department: "Vendee", departmentCode: "85", region: "Pays de la Loire", population: 55793 },
  { slug: "cholet", name: "Cholet", department: "Maine-et-Loire", departmentCode: "49", region: "Pays de la Loire", population: 55217 },
  { slug: "laval", name: "Laval", department: "Mayenne", departmentCode: "53", region: "Pays de la Loire", population: 53738 },
  { slug: "reze", name: "Reze", department: "Loire-Atlantique", departmentCode: "44", region: "Pays de la Loire", population: 43475 },
  { slug: "saint-herblain", name: "Saint-Herblain", department: "Loire-Atlantique", departmentCode: "44", region: "Pays de la Loire", population: 46267 },
  // Bretagne
  { slug: "rennes", name: "Rennes", department: "Ille-et-Vilaine", departmentCode: "35", region: "Bretagne", population: 222485 },
  { slug: "brest", name: "Brest", department: "Finistere", departmentCode: "29", region: "Bretagne", population: 142722 },
  { slug: "quimper", name: "Quimper", department: "Finistere", departmentCode: "29", region: "Bretagne", population: 63929 },
  { slug: "lorient", name: "Lorient", department: "Morbihan", departmentCode: "56", region: "Bretagne", population: 58135 },
  { slug: "vannes", name: "Vannes", department: "Morbihan", departmentCode: "56", region: "Bretagne", population: 54020 },
  { slug: "saint-brieuc", name: "Saint-Brieuc", department: "Cotes-d'Armor", departmentCode: "22", region: "Bretagne", population: 45879 },
  { slug: "saint-malo", name: "Saint-Malo", department: "Ille-et-Vilaine", departmentCode: "35", region: "Bretagne", population: 46097 },
  { slug: "lanester", name: "Lanester", department: "Morbihan", departmentCode: "56", region: "Bretagne", population: 22738 },
  // Normandie
  { slug: "rouen", name: "Rouen", department: "Seine-Maritime", departmentCode: "76", region: "Normandie", population: 113128 },
  { slug: "le-havre", name: "Le Havre", department: "Seine-Maritime", departmentCode: "76", region: "Normandie", population: 172074 },
  { slug: "caen", name: "Caen", department: "Calvados", departmentCode: "14", region: "Normandie", population: 108365 },
  { slug: "cherbourg-en-cotentin", name: "Cherbourg-en-Cotentin", department: "Manche", departmentCode: "50", region: "Normandie", population: 80959 },
  { slug: "evreux", name: "Evreux", department: "Eure", departmentCode: "27", region: "Normandie", population: 51178 },
  { slug: "dieppe", name: "Dieppe", department: "Seine-Maritime", departmentCode: "76", region: "Normandie", population: 29606 },
  { slug: "alencon", name: "Alencon", department: "Orne", departmentCode: "61", region: "Normandie", population: 26535 },
  // Centre-Val de Loire
  { slug: "tours", name: "Tours", department: "Indre-et-Loire", departmentCode: "37", region: "Centre-Val de Loire", population: 137658 },
  { slug: "orleans", name: "Orleans", department: "Loiret", departmentCode: "45", region: "Centre-Val de Loire", population: 116685 },
  { slug: "bourges", name: "Bourges", department: "Cher", departmentCode: "18", region: "Centre-Val de Loire", population: 66602 },
  { slug: "blois", name: "Blois", department: "Loir-et-Cher", departmentCode: "41", region: "Centre-Val de Loire", population: 47243 },
  { slug: "chartres", name: "Chartres", department: "Eure-et-Loir", departmentCode: "28", region: "Centre-Val de Loire", population: 39699 },
  { slug: "chateauroux", name: "Chateauroux", department: "Indre", departmentCode: "36", region: "Centre-Val de Loire", population: 44338 },
  { slug: "dreux", name: "Dreux", department: "Eure-et-Loir", departmentCode: "28", region: "Centre-Val de Loire", population: 31348 },
  { slug: "joue-les-tours", name: "Joue-les-Tours", department: "Indre-et-Loire", departmentCode: "37", region: "Centre-Val de Loire", population: 38273 },
  // Bourgogne-Franche-Comte
  { slug: "dijon", name: "Dijon", department: "Cote-d'Or", departmentCode: "21", region: "Bourgogne-Franche-Comte", population: 159346 },
  { slug: "besancon", name: "Besancon", department: "Doubs", departmentCode: "25", region: "Bourgogne-Franche-Comte", population: 119163 },
  { slug: "belfort", name: "Belfort", department: "Territoire de Belfort", departmentCode: "90", region: "Bourgogne-Franche-Comte", population: 46954 },
  { slug: "chalon-sur-saone", name: "Chalon-sur-Saone", department: "Saone-et-Loire", departmentCode: "71", region: "Bourgogne-Franche-Comte", population: 44985 },
  { slug: "auxerre", name: "Auxerre", department: "Yonne", departmentCode: "89", region: "Bourgogne-Franche-Comte", population: 35052 },
  { slug: "nevers", name: "Nevers", department: "Nievre", departmentCode: "58", region: "Bourgogne-Franche-Comte", population: 33422 },
  { slug: "macon", name: "Macon", department: "Saone-et-Loire", departmentCode: "71", region: "Bourgogne-Franche-Comte", population: 34084 },
  { slug: "montbeliard", name: "Montbeliard", department: "Doubs", departmentCode: "25", region: "Bourgogne-Franche-Comte", population: 25521 },
  // Corse
  { slug: "ajaccio", name: "Ajaccio", department: "Corse-du-Sud", departmentCode: "2A", region: "Corse", population: 71361 },
  { slug: "bastia", name: "Bastia", department: "Haute-Corse", departmentCode: "2B", region: "Corse", population: 48562 },
  // DOM-TOM (principales)
  { slug: "fort-de-france", name: "Fort-de-France", department: "Martinique", departmentCode: "972", region: "Martinique", population: 78979 },
  { slug: "saint-denis-reunion", name: "Saint-Denis", department: "La Reunion", departmentCode: "974", region: "La Reunion", population: 152927 },
  { slug: "saint-pierre-reunion", name: "Saint-Pierre", department: "La Reunion", departmentCode: "974", region: "La Reunion", population: 84442 },
  { slug: "le-tampon", name: "Le Tampon", department: "La Reunion", departmentCode: "974", region: "La Reunion", population: 81752 },
  { slug: "pointe-a-pitre", name: "Pointe-a-Pitre", department: "Guadeloupe", departmentCode: "971", region: "Guadeloupe", population: 15410 },
  { slug: "cayenne", name: "Cayenne", department: "Guyane", departmentCode: "973", region: "Guyane", population: 63652 },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCitiesByRegion(region: string): City[] {
  return cities.filter((c) => c.region === region);
}

export function getRegions(): string[] {
  return [...new Set(cities.map((c) => c.region))];
}
