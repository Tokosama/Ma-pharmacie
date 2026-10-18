import pool from "../config/db.js";

export interface Ville {
  id: string;
  nom: string;
  region: string | null;
  pays: string;
  latitude: string;
  longitude: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

const findAll = async (): Promise<Ville[]> => {
  const result = await pool.query<Ville>(
    "SELECT * FROM ville WHERE is_active = true",
  );
  return result.rows;
};

export const villeRepository = {
  findAll,
};