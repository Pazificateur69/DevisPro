export interface Lead {
  id?: string;
  service: string;
  description: string;
  code_postal: string;
  telephone: string;
  email: string;
  nom: string;
  status: "nouveau" | "attribue" | "traite";
  created_at?: string;
}

export interface Artisan {
  id?: string;
  nom: string;
  entreprise: string;
  email: string;
  telephone: string;
  metier: string;
  code_postal: string;
  rayon_intervention: number;
  siret: string;
  created_at?: string;
}

export interface LeadAttribution {
  id?: string;
  lead_id: string;
  artisan_id: string;
  created_at?: string;
}
