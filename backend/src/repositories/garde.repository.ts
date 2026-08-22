import pool from "../config/db.js";

interface Garde {
  id: string;
  pharmacie_id: string;
  semaine_debut: Date;
  semaine_fin: Date;
  source: string;
  created_at: Date;
}

const updateGardes = async (
  pharmacieIds: string[],
  semaineDebut: string,
  semaineFin: string,
): Promise<Garde[]> => {
  const client = await pool.connect();
  const insertData: Garde[] = [];
  try {
    await client.query("BEGIN");

    await client.query("DELETE FROM garde");

    for (const pharmacieId of pharmacieIds) {
      const insertedPharmacie = await client.query<Garde>(
        "INSERT INTO garde (pharmacie_id, semaine_debut, semaine_fin) VALUES ($1, $2, $3) returning *",
        [pharmacieId, semaineDebut, semaineFin],
      );
      const garde = insertedPharmacie.rows[0];
      if (!garde) {
        throw new Error(
          "l'insertion de la garde a échoué de manière inattendue",
        );
      }
      insertData.push(garde);
    }

    await client.query("COMMIT");
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
  return insertData;
};

export const gardeRepository = {
  updateGardes,
};
