import { rateLimit } from "express-rate-limit";
import { sendError } from "../utils/apiResponse.js";

export const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute

  limit: 100,
  handler: (req, res) => {
    sendError(res, "Trop de requetes, Veuillez réessayez plus tard", 429);
  },
});
