import { Router } from "express";
import { villeController } from "../controllers/ville.controller.js";

const router = Router();

router.get("/", villeController.getAll);

export default router;