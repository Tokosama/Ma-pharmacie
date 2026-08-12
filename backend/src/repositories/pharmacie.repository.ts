import pool from "../config/db.js";

export interface Pharmacie{

  id :string,
  nom:string,
  adresse:string,
  ville_id:string,
  latitude:string,
  longitude:string,
  location:unknown,
  telephone:string | null,
  whatsapp:string|null,
  email:string|null,
  horaires:Record<string,unknown> | null,
  is_active:boolean,
  created_at:Date,
  updated_at:Date


}

const findAll = async (): Promise<Pharmacie[]> => {
  const result = await pool.query<Pharmacie>(
    "SELECT * FROM pharmacie where is_active = true",
  );
  return result.rows;
};

export const pharmacieRepository = {
  findAll, 
}
