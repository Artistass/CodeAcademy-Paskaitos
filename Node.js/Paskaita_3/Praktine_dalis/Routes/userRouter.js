import express from "express"
import { getUsersController, addNewUser } from "../Controllers/userControllers.js";

const router = express.Router();

router.get("/user", getUsersController);

router.post("/user", addNewUser)

export default router;