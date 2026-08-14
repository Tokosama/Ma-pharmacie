import { pharmacieRepository } from "../repositories/pharmacie.repository.js";

const getAll = async () => {
  return pharmacieRepository.findAll();
};

const getNearby = async (latitude: number, longitude: number) => {
  return pharmacieRepository.findNearby(latitude, longitude);
};

const getPharmacieDeGarde = async () => {
  return pharmacieRepository.findPharmacieDeGarde();
};

const getPharmacieInformations = async (id:string) => {
  return pharmacieRepository.findPharmacieInformations(id);
};
export const pharmacieService = {
  getAll,
  getNearby,
  getPharmacieDeGarde,
  getPharmacieInformations
};
