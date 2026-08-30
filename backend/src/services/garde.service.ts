import redis from "../config/redis.js";
import { gardeRepository } from "../repositories/garde.repository.js";

const updateGardes = async (
  pharmacieIds: string[],
  semaineDebut: string,
  semaineFin: string,
) => {
  const result = await gardeRepository.updateGardes(
    pharmacieIds,
    semaineDebut,
    semaineFin,
  );
  await redis.del("pharmacie:garde");
  return result;
};

export const gardeService = {
  updateGardes,
};
