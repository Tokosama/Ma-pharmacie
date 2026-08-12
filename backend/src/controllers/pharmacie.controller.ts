import { pharmacieService } from "../services/pharmacie.service.js";
import { sendSuccess } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getAll = asyncHandler(async (req, res) => {
  const pharmaciedata = await pharmacieService.getAll();
  const success = sendSuccess(res, pharmaciedata);
  return success;
});

export const pharmacieController = {
  getAll,
};
