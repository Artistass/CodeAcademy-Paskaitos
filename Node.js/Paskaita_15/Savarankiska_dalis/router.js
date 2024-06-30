import express from "express";
import { addNewShirt, getShirts, routeNotFound, serverIsOnline } from "./controllers.js";

const router = express.Router();

router.get("/", serverIsOnline);
router.get("/shirts", getShirts);

router.post("/shirts", addNewShirt);

router.get("*", routeNotFound);

export default router;