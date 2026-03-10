export interface Comparatif {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  option1: { name: string; pros: string[]; cons: string[]; avgPrice: string };
  option2: { name: string; pros: string[]; cons: string[]; avgPrice: string };
  verdict: string;
  relatedServiceSlug: string;
}

export const comparatifs: Comparatif[] = [
  {
    slug: "pompe-a-chaleur-vs-chaudiere-gaz",
    title: "Pompe a chaleur vs Chaudiere gaz",
    metaTitle:
      "Pompe a chaleur vs Chaudiere gaz : comparatif complet",
    metaDescription:
      "Pompe a chaleur ou chaudiere gaz ? Comparez les avantages, inconvenients et prix pour choisir le meilleur systeme de chauffage pour votre logement.",
    option1: {
      name: "Pompe a chaleur (PAC)",
      pros: [
        "Economies d'energie importantes (COP de 3 a 5)",
        "Eligible aux aides de l'Etat (MaPrimeRenov, CEE)",
        "Chauffage et climatisation en un seul appareil",
        "Energie renouvelable, faible empreinte carbone",
        "Duree de vie de 15 a 20 ans",
      ],
      cons: [
        "Cout d'installation eleve (8 000 a 15 000 EUR)",
        "Performances reduites par grand froid (PAC air/air)",
        "Nuisance sonore possible du groupe exterieur",
        "Entretien annuel obligatoire par un professionnel",
      ],
      avgPrice: "8 000 - 15 000 EUR",
    },
    option2: {
      name: "Chaudiere gaz a condensation",
      pros: [
        "Cout d'installation plus abordable",
        "Performances stables quelle que soit la temperature",
        "Technologie eprouvee et fiable",
        "Compatible avec les radiateurs existants",
        "Installation plus simple et rapide",
      ],
      cons: [
        "Energie fossile, prix du gaz volatil",
        "Interdiction dans les constructions neuves depuis 2022",
        "Empreinte carbone elevee",
        "Raccordement au reseau de gaz necessaire",
      ],
      avgPrice: "3 000 - 7 000 EUR",
    },
    verdict:
      "La pompe a chaleur est le choix le plus economique a long terme grace aux economies d'energie et aux aides financieres disponibles. Elle est particulierement adaptee aux logements bien isoles en climat tempere. La chaudiere gaz reste pertinente en remplacement sur un reseau existant ou dans les zones a hivers rigoureux, mais son avenir est limite par les nouvelles reglementations environnementales.",
    relatedServiceSlug: "entretien-pompe-chaleur",
  },
  {
    slug: "panneaux-solaires-autoconsommation-vs-revente",
    title: "Panneaux solaires : autoconsommation vs revente totale",
    metaTitle:
      "Panneaux solaires : autoconsommation ou revente totale ?",
    metaDescription:
      "Autoconsommation ou revente totale d'electricite solaire ? Comparez les deux options pour rentabiliser au mieux vos panneaux photovoltaiques.",
    option1: {
      name: "Autoconsommation avec revente du surplus",
      pros: [
        "Reduction directe de la facture d'electricite",
        "Prime a l'autoconsommation versee par EDF OA",
        "Revente du surplus a tarif garanti sur 20 ans",
        "Independance energetique partielle",
        "Valorisation en cas de hausse du prix de l'electricite",
      ],
      cons: [
        "Rentabilite dependante de votre profil de consommation",
        "Production et consommation pas toujours synchronisees",
        "Necessite d'adapter ses habitudes (consommer en journee)",
        "Cout d'une batterie de stockage eleve en option",
      ],
      avgPrice: "7 000 - 12 000 EUR (3 kWc)",
    },
    option2: {
      name: "Revente totale de la production",
      pros: [
        "Tarif d'achat garanti par EDF OA sur 20 ans",
        "Revenus reguliers et previsibles",
        "Pas besoin d'adapter sa consommation",
        "Rentabilite calculable a l'avance",
      ],
      cons: [
        "Tarif de revente en baisse ces dernieres annees",
        "Pas de reduction directe sur la facture d'electricite",
        "Pas de prime a l'autoconsommation",
        "Moins avantageux si le prix de l'electricite augmente",
        "Revenus soumis a fiscalite au-dela de 3 kWc",
      ],
      avgPrice: "7 000 - 12 000 EUR (3 kWc)",
    },
    verdict:
      "L'autoconsommation avec revente du surplus est aujourd'hui l'option la plus avantageuse pour la majorite des foyers. Elle permet de reduire sa facture d'electricite tout en beneficiant de la prime a l'autoconsommation et de la revente du surplus. La revente totale peut rester interessante pour des installations en toiture non orientee vers les pieces de vie ou pour des residences secondaires.",
    relatedServiceSlug: "nettoyage-panneaux-solaires",
  },
  {
    slug: "volet-roulant-electrique-vs-manuel",
    title: "Volet roulant electrique vs manuel",
    metaTitle:
      "Volet roulant electrique ou manuel : lequel choisir ?",
    metaDescription:
      "Volet roulant electrique ou manuel ? Comparez les prix, avantages et inconvenients pour faire le bon choix lors de votre installation ou remplacement.",
    option1: {
      name: "Volet roulant electrique",
      pros: [
        "Confort d'utilisation au quotidien (telecommande, interrupteur)",
        "Automatisation possible (programmation horaire, domotique)",
        "Ideal pour les fenetres difficiles d'acces",
        "Meilleure securite anti-intrusion",
        "Option solaire disponible (sans cablage electrique)",
      ],
      cons: [
        "Cout d'achat et d'installation plus eleve",
        "Reparation du moteur couteuse en cas de panne",
        "Necessite une alimentation electrique ou un panneau solaire",
        "Panne possible du moteur ou de la telecommande",
      ],
      avgPrice: "300 - 800 EUR par volet",
    },
    option2: {
      name: "Volet roulant manuel (sangle ou manivelle)",
      pros: [
        "Prix d'achat et d'installation reduit",
        "Aucune alimentation electrique necessaire",
        "Fonctionnement simple et fiable",
        "Entretien minimal et reparations peu couteuses",
        "Installation rapide",
      ],
      cons: [
        "Effort physique necessaire a chaque manipulation",
        "Pas de programmation ni d'automatisation possible",
        "Moins adapte aux grandes fenetres (poids du tablier)",
        "Usure plus rapide de la sangle",
      ],
      avgPrice: "100 - 350 EUR par volet",
    },
    verdict:
      "Le volet roulant electrique offre un confort superieur et des possibilites d'automatisation appreciables au quotidien. Il est particulierement recommande pour les grandes fenetres, les fenetres en hauteur ou pour les personnes a mobilite reduite. Le volet manuel reste un excellent choix pour les petits budgets ou les petites fenetres facilement accessibles.",
    relatedServiceSlug: "reparation-volets-roulants",
  },
  {
    slug: "ramonage-mecanique-vs-chimique",
    title: "Ramonage mecanique vs chimique",
    metaTitle:
      "Ramonage mecanique ou chimique : quelle methode choisir ?",
    metaDescription:
      "Ramonage mecanique ou chimique ? Comparez les deux methodes de ramonage de cheminee pour entretenir votre conduit en toute securite.",
    option1: {
      name: "Ramonage mecanique",
      pros: [
        "Seule methode reconnue legalement (certificat de ramonage)",
        "Nettoyage complet et en profondeur du conduit",
        "Permet de detecter d'eventuelles fissures ou defauts",
        "Obligatoire 1 a 2 fois par an selon les reglements",
        "Efficace sur tous types de depots (suie, goudron, bistre)",
      ],
      cons: [
        "Necessite l'intervention d'un professionnel certifie",
        "Peut generer un peu de poussiere dans l'habitation",
        "Prix plus eleve qu'un produit chimique",
        "Rendez-vous a planifier a l'avance",
      ],
      avgPrice: "50 - 120 EUR par intervention",
    },
    option2: {
      name: "Ramonage chimique (buche ou poudre)",
      pros: [
        "Facile a utiliser soi-meme",
        "Cout tres reduit",
        "Entretien complementaire entre deux ramonages",
        "Aide a decoller les depots de suie et de goudron",
      ],
      cons: [
        "Ne remplace PAS le ramonage mecanique obligatoire",
        "Ne delivre pas de certificat de ramonage",
        "Efficacite limitee sur les depots importants",
        "Non reconnu par les assurances en cas de sinistre",
        "Peut donner un faux sentiment de securite",
      ],
      avgPrice: "10 - 25 EUR par buche",
    },
    verdict:
      "Le ramonage mecanique est indispensable et obligatoire : c'est le seul qui delivre un certificat de ramonage valable aupres de votre assurance. Le ramonage chimique est un bon complement entre deux ramonages mecaniques, mais il ne peut en aucun cas le remplacer. Pour etre en conformite et en securite, faites appel a un ramoneur certifie au moins une fois par an.",
    relatedServiceSlug: "ramonage-cheminee",
  },
];

export function getComparatifBySlug(slug: string): Comparatif | undefined {
  return comparatifs.find((c) => c.slug === slug);
}
