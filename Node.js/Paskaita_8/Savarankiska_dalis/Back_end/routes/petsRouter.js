import express from "express";
import { addNewPet, deletePetById, getPets, petsByAge, petsByType } from "../controllers/petControllers.js";

const router = express.Router();

router.get("/pets", getPets);
router.get("/pets/:type", petsByType);
router.get("/pets/byoldest", petsByAge);

router.post("/pets", addNewPet);

router.delete("/pets/:id", deletePetById);

export default router;