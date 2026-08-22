import { gardeRepository } from "../repositories/garde.repository.js";

const updateGardes = (
  pharmacieIds: string[],
  semaineDebut: string,
  semaineFin: string,
) => {
  return gardeRepository.updateGardes(pharmacieIds, semaineDebut, semaineFin);
};


export const gardeService = {
  updateGardes,
};
