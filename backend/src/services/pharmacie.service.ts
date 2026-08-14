import { pharmacieRepository } from "../repositories/pharmacie.repository.js";

const getAll = async () => {
  return pharmacieRepository.findAll();
};

const getNearby = async (latitude: number, longitude: number) => {
  return pharmacieRepository.findNearby(latitude, longitude);
};

export const pharmacieService = {
  getAll,
  getNearby,
};
