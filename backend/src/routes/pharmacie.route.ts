import { Router } from "express";
import { pharmacieController } from "../controllers/pharmacie.controller.js";

const router = Router();

router.get("/", pharmacieController.getAll);
router.get("/nearby", pharmacieController.getNearby);
router.get("/garde", pharmacieController.getPharmacieDeGarde);
router.get("/:id", pharmacieController.getPharmacieInformations);

export default router;
