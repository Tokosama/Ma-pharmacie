export interface Pharmacie {
  id: string;
  nom: string;
  adresse: string;
  ville_id: string;
  latitude: string;
  longitude: string;
  telephone: string | null;
  whatsapp: string | null;
  email: string | null;
  horaires: Record<string, unknown> | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}