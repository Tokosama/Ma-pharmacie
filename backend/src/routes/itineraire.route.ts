import { Router } from "express";
import { itineraireController } from "../controllers/itineraire.controller.js";

const router = Router();

router.get("/", itineraireController.getItineraire);

export default router