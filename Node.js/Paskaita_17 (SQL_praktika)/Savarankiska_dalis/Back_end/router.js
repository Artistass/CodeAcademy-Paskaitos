import express from "express";
import { addNewCar, deleteCarById, getCars, getCarsById, routeNotFound} from "./controllers.js";

const router = express.Router();

router.get("/cars", getCars);
router.get("/cars/:id", getCarsById);

router.post("/cars", addNewCar);

router.delete("/cars/:id", deleteCarById);

router.all("*", routeNotFound);

export default router;