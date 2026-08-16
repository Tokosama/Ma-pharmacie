import pool from "../config/db.js";

export interface Pharmacie {
  id: string;
  nom: string;
  adresse: string;
  ville_id: string;
  latitude: string;
  longitude: string;
  location: unknown;
  telephone: string | null;
  whatsapp: string | null;
  email: string | null;
  horaires: Record<string, unknown> | null;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

const findAll = async (): Promise<Pharmacie[]> => {
  const result = await pool.query<Pharmacie>(
    "SELECT * FROM pharmacie where is_active = true",
  );
  return result.rows;
};

const findNearby = async (
  latitude: number,
  longitude: number,
): Promise<Pharmacie[]> => {
  const result = await pool.query<Pharmacie>(
    "SELECT * FROM pharmacie where ST_DWithin(location,ST_SetSRID(ST_MakePoint($1,$2),4326)::geography,500)",
    [longitude, latitude],
  );
  return result.rows;
};

const findPharmacieDeGarde = async (): Promise<Pharmacie[]> => {
  const result = await pool.query<Pharmacie>(
    "SELECT DISTINCT pharmacie.* from pharmacie JOIN garde ON pharmacie.id = garde.pharmacie_id",
  );
  return result.rows;
};

const findPharmacieInformations = async (
  id: string,
): Promise<Pharmacie | null> => {
  const result = await pool.query<Pharmacie>(
    "SELECT * from pharmacie where id = $1",
    [id],
  );
  return result.rows[0] ?? null;
};

const findPharmacieByName = async (nom: string): Promise<Pharmacie[]> => {
  const result = await pool.query<Pharmacie>(
    `SELECT *, similarity(nom, regexp_replace($1, '^pharma\\w*\\s+', '', 'i')) AS score FROM pharmacie WHERE nom % regexp_replace($1, '^pharma\\w*\\s+', '', 'i') ORDER BY score DESC LIMIT 10;`,
    [nom],
  );
  return result.rows;
};

export const pharmacieRepository = {
  findAll,
  findNearby,
  findPharmacieDeGarde,
  findPharmacieInformations,
  findPharmacieByName,
};
