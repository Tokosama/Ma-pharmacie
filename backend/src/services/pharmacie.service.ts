import { pharmacieRepository } from "../repositories/pharmacie.repository.js";

const getAll = async () => {
  return pharmacieRepository.findAll();
};

export const pharmacieService ={
    getAll,
}