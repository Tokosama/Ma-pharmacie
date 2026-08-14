import { pharmacieService } from "../services/pharmacie.service.js";
import { sendError, sendSuccess } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getAll = asyncHandler(async (req, res) => {
  const pharmacieData = await pharmacieService.getAll();
  const success = sendSuccess(res, pharmacieData);
  return success;
});

const getNearby = asyncHandler(async (req, res) => {
  const { latitude, longitude } = req.query;
  if (!latitude || !longitude) {
    return sendError(res, "Latitude ou Longitude non renseigné");
  }
  const lat = Number(latitude);
  const long = Number(longitude);
  if (isNaN(lat) || isNaN(long)) {
    return sendError(res, "Rentrer des valeurs valides");
  }
  const pharmacieData = await pharmacieService.getNearby(lat, long);
  const success = sendSuccess(res, pharmacieData);
  return success;
});

const getPharmacieDeGarde = asyncHandler(async (req, res) => {
  const pharmacieDeGarde = await pharmacieService.getPharmacieDeGarde();
  const success = sendSuccess(res, pharmacieDeGarde);
  return success;
});
const getPharmacieInformations = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id || Array.isArray(id)) {
    return sendError(res, "Cette pharmacie n'existe pas");
  }
  const pharmacieInformations =
    await pharmacieService.getPharmacieInformations(id);

  if (pharmacieInformations == null) {
    return sendError(res, "Pharmacie non trouvée", 404);
  }
  const success = sendSuccess(res, pharmacieInformations);
  return success;
});

export const pharmacieController = {
  getAll,
  getNearby,
  getPharmacieDeGarde,
  getPharmacieInformations,
};
