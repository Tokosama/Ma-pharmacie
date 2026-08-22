import { gardeService } from "../services/garde.service.js";
import { sendError, sendSuccess } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const updateGardes = asyncHandler(async (req, res) => {
  const { pharmacieIds, semaineDebut, semaineFin } = req.body;

  if (!Array.isArray(pharmacieIds) || pharmacieIds.length === 0) {
    return sendError(
      res,
      "Veuillez sélectionner les pharmacies de garde actuellement",
    );
  }
  if (isNaN(Date.parse(semaineDebut)) || isNaN(Date.parse(semaineFin))) {
    return sendError(res, "Format de date invalide");
  }

  const result = await gardeService.updateGardes(
    pharmacieIds,
    semaineDebut,
    semaineFin,
  );

  const success = sendSuccess(res, result, 200);
  return success;
});

export const gardeController = {
  updateGardes,
};
