import express from "express";
import { getUsers, addNewUser } from "../Controllers/userControllers.js";

const router = express.Router();

router.get("/names", getUsers);

router.post("/names", addNewUser);

export default router;