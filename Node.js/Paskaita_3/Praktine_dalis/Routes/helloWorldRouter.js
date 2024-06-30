import express from "express"
import { labasHandler } from "../Controllers/helloWorldControllers.js";

const router = express.Router();

router.get("/labas", labasHandler);

export default router;