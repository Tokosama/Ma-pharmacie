import { Router } from "express";
import { pharmacieController } from "../controllers/pharmacie.controller.js";

const router = Router();

router.get("/", pharmacieController.getAll);
router.get("/nearby", pharmacieController.getNearby);

export default router;
