import { Router } from "express";
import { gardeController } from "../controllers/garde.controller.js";
import { requireAdmin } from "../middlewares/requireAdmin.js";

const router = Router();

router.post("/updateGarde", requireAdmin, gardeController.updateGardes);

export default router;
