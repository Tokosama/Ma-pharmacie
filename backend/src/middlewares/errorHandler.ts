import type { Request, Response, NextFunction } from "express";
import { sendError } from "../utils/apiResponse.js";

export const errorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.error("[error]", err);

  const message = err instanceof Error ? err.message : "Erreur inconnue";

  sendError(res, message, 500);
};
