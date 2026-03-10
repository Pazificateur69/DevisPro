export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqItems: FAQItem[] = [
  // Service
  {
    question: "Comment fonctionne le service Renov Habitation ?",
    answer:
      "Renov Habitation est un service de mise en relation entre particuliers et artisans qualifies. Vous remplissez un formulaire en decrivant votre besoin, puis nous transmettons votre demande a des artisans partenaires proches de chez vous. Vous recevez ensuite jusqu'a 3 devis detailles pour comparer et choisir librement.",
    category: "Service",
  },
  {
    question: "Quels types de travaux sont couverts par le service ?",
    answer:
      "Nous couvrons un large eventail de travaux : plomberie, chauffage, reparation de volets roulants, traitement de nuisibles, entretien de pompe a chaleur, ramonage, nettoyage de panneaux solaires, depannage de portail electrique, recherche de fuite d'eau, debarras de maison, et bien d'autres. Consultez notre page Services pour la liste complete.",
    category: "Service",
  },
  {
    question: "Combien de devis vais-je recevoir ?",
    answer:
      "Vous pouvez recevoir jusqu'a 3 devis d'artisans differents. Le nombre exact depend de la disponibilite des artisans dans votre zone geographique et du type de travaux demande. Chaque devis est detaille et personnalise selon votre projet.",
    category: "Service",
  },
  {
    question: "Dans quel delai recevrai-je les devis ?",
    answer:
      "Les artisans s'engagent a vous recontacter rapidement apres la transmission de votre demande. Le delai peut varier selon la disponibilite des professionnels dans votre secteur et la nature des travaux demandes.",
    category: "Service",
  },
  {
    question: "Le service est-il disponible dans toute la France ?",
    answer:
      "Oui, Renov Habitation couvre l'ensemble de la France metropolitaine. Notre reseau d'artisans partenaires est present dans toutes les regions, ce qui nous permet de vous mettre en relation avec des professionnels proches de chez vous.",
    category: "Service",
  },
  // Prix
  {
    question: "Est-ce vraiment gratuit ?",
    answer:
      "Oui, le service de mise en relation est 100% gratuit pour les particuliers. Vous ne payez rien pour recevoir vos devis. Les artisans prennent en charge le cout de la mise en relation. Aucun frais cache, aucune commission sur les travaux realises.",
    category: "Prix",
  },
  {
    question: "Puis-je refuser un devis sans frais ?",
    answer:
      "Absolument. Vous etes libre d'accepter ou de refuser chaque devis recu, sans aucune justification et sans frais. Notre service est sans engagement : recevoir un devis ne vous oblige en rien a signer ou a realiser les travaux.",
    category: "Prix",
  },
  {
    question: "Les prix des devis sont-ils negociables ?",
    answer:
      "Les prix indiques sur les devis sont proposes directement par les artisans. Vous pouvez tout a fait discuter et negocier les tarifs ou les prestations directement avec le professionnel. Comparer plusieurs devis vous donne un levier de negociation.",
    category: "Prix",
  },
  {
    question: "Y a-t-il des frais caches ?",
    answer:
      "Non, il n'y a aucun frais cache. Le service de mise en relation est entierement gratuit pour les particuliers. Les devis que vous recevez mentionnent clairement le detail des prestations et les couts associes. Verifiez toujours que le devis est complet avant de vous engager.",
    category: "Prix",
  },
  // Artisans
  {
    question: "Les artisans sont-ils certifies ?",
    answer:
      "Nos artisans partenaires font l'objet de verifications : numero SIRET valide, assurance de responsabilite civile professionnelle, et qualifications professionnelles. Nous nous efforcons de ne travailler qu'avec des professionnels serieux et competents.",
    category: "Artisans",
  },
  {
    question: "Comment sont selectionnes les artisans ?",
    answer:
      "Les artisans partenaires sont selectionnes selon plusieurs criteres : validite de leur immatriculation (SIRET), possession d'une assurance professionnelle, qualifications et certifications pertinentes. Nous verifions egalement leur capacite a intervenir dans la zone geographique concernee.",
    category: "Artisans",
  },
  {
    question: "Comment choisir le bon artisan parmi les devis recus ?",
    answer:
      "Pour choisir le bon artisan, comparez les devis sur plusieurs criteres : le detail des prestations proposees, les materiaux utilises, les delais d'intervention, le prix total TTC, et les garanties offertes. N'hesitez pas a poser des questions aux artisans et a verifier leur assurance decennale pour les gros travaux.",
    category: "Artisans",
  },
  {
    question: "Que faire si un artisan ne me recontacte pas ?",
    answer:
      "Si un artisan ne vous recontacte pas dans un delai raisonnable, vous pouvez nous contacter via notre page Contact. Nous ferons le necessaire pour relancer le professionnel ou vous orienter vers un autre artisan disponible dans votre secteur.",
    category: "Artisans",
  },
  // Pratique
  {
    question: "Mes donnees personnelles sont-elles protegees ?",
    answer:
      "Oui, la protection de vos donnees est notre priorite. Nous sommes conformes au RGPD (Reglement General sur la Protection des Donnees). Vos informations sont transmises uniquement aux artisans susceptibles de repondre a votre demande et ne sont jamais revendues a des tiers.",
    category: "Pratique",
  },
  {
    question: "Comment modifier ou annuler ma demande de devis ?",
    answer:
      "Pour modifier ou annuler votre demande, il vous suffit de nous contacter par email a contact@renov-habitation.fr ou via notre formulaire de contact. Nous traiterons votre demande dans les plus brefs delais.",
    category: "Pratique",
  },
  {
    question: "Puis-je demander des devis pour plusieurs travaux differents ?",
    answer:
      "Oui, vous pouvez tout a fait soumettre plusieurs demandes de devis pour des travaux differents. Nous vous recommandons de creer une demande separee pour chaque type de travaux afin d'obtenir des devis precis et adaptes a chaque projet.",
    category: "Pratique",
  },
  {
    question: "Que faire en cas de litige avec un artisan ?",
    answer:
      "En cas de litige, nous vous conseillons de contacter d'abord l'artisan pour tenter de resoudre le probleme a l'amiable. Si le differend persiste, vous pouvez nous contacter pour que nous fassions office de mediateur. En dernier recours, vous pouvez saisir un mediateur de la consommation ou les tribunaux competents.",
    category: "Pratique",
  },
  {
    question: "Comment contacter le support Renov Habitation ?",
    answer:
      "Vous pouvez nous contacter de plusieurs manieres : par email a contact@renov-habitation.fr, via notre formulaire de contact en ligne, ou par telephone. Notre equipe est disponible du lundi au vendredi pour repondre a toutes vos questions.",
    category: "Pratique",
  },
];

export function getFAQByCategory(category: string): FAQItem[] {
  return faqItems.filter((f) => f.category === category);
}

export function getFAQCategories(): string[] {
  return [...new Set(faqItems.map((f) => f.category))];
}
