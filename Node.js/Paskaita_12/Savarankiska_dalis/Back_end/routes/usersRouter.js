import express from "express";
import { addNewUser, getUsers } from "../controllers/usersControllers.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", addNewUser);

export default router;