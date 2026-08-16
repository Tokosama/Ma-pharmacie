import { itineraireService } from "../services/itineraire.service.js";
import { sendError, sendSuccess } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getItineraire = asyncHandler(async (req, res) => {
  const { latDepart, lonDepart, latArrivee, lonArrivee, profile } = req.query;

  if (
    typeof latDepart !== "string" ||
    typeof lonDepart !== "string" ||
    typeof latArrivee !== "string" ||
    typeof lonArrivee !== "string"
  ) {
    return sendError(res, "Renseigne des valeurs valide");
  }

  if (profile !== "driving-car" && profile !== "foot-walking") {
    return sendError(res, "Choisissez un moyen de deplacement valide");
  }

  const itineraire = await itineraireService.getItineraire(
    latDepart,
    lonDepart,
    latArrivee,
    lonArrivee,
    profile,
  );

  const success = sendSuccess(res, itineraire);
  return success;
});

export const itineraireController = {
  getItineraire,
};
