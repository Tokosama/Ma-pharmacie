import { villeRepository } from "../repositories/ville.repository.js";

const getAll = async () => {
  return villeRepository.findAll();
};

export const villeService = {
  getAll,
};