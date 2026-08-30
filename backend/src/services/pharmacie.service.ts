import {
  pharmacieRepository,
  type Pharmacie,
} from "../repositories/pharmacie.repository.js";
import redis from "../config/redis.js";

const getAll = async () => {
  const redisKey = "pharmacie:all";

  const pharmacieDataFromRedis = await redis.get(redisKey);
  if (pharmacieDataFromRedis) {
    console.log(pharmacieDataFromRedis);
    return JSON.parse(pharmacieDataFromRedis) as Pharmacie[];
  } else {
    const pharmacieData = await pharmacieRepository.findAll();
    await redis.set(
      redisKey,
      JSON.stringify(pharmacieData),
      "EX",
      1 * 24 * 3600,
    );

    return pharmacieData;
  }
};

const getNearby = async (latitude: number, longitude: number) => {
  return pharmacieRepository.findNearby(latitude, longitude);
};

const getPharmacieDeGarde = async () => {
  const redisKey = "pharmacie:garde";
  const gardeFromRedis = await redis.get(redisKey);
  if (gardeFromRedis) {
    return JSON.parse(gardeFromRedis) as Pharmacie[];
  } else {
    const gardeData = await pharmacieRepository.findPharmacieDeGarde();

    await redis.set(redisKey, JSON.stringify(gardeData), "EX", 7 * 24 * 3600);
    return gardeData;
  }
};

const getPharmacieInformations = async (id: string) => {
  return pharmacieRepository.findPharmacieInformations(id);
};

const getPharmacieByName = async (nom: string) => {
  return pharmacieRepository.findPharmacieByName(nom);
};
export const pharmacieService = {
  getAll,
  getNearby,
  getPharmacieDeGarde,
  getPharmacieInformations,
  getPharmacieByName,
};
