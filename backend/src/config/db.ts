import { Pool } from "pg";
import "dotenv/config";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("Missing Enviremment Varaible");
}

const pool = new Pool({ connectionString: databaseUrl });
export default pool;
