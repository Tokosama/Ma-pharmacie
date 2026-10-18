import { villeService } from "../services/ville.service.js";
import { sendSuccess } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getAll = asyncHandler(async (req, res) => {
  const villes = await villeService.getAll();
  return sendSuccess(res, villes);
});

export const villeController = {
  getAll,
};