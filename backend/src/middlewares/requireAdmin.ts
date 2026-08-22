import type { Request, Response, NextFunction } from "express";
import { sendError } from "../utils/apiResponse.js";

export const requireAdmin = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const adminKey = process.env.ADMIN_API_TOKEN;

  if (!adminKey) {
    throw new Error("No key variable.");
  }
  const { authorization } = req.headers;

  if (authorization !== adminKey) {
    return sendError(res, "Authentification requise", 401);
  }

  next();
};
