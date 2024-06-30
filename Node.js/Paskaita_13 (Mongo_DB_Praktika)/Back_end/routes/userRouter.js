import express from "express";
import { addNewUser, deleteUserById, getUsersByOrder } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/:order", getUsersByOrder);
router.post("/", addNewUser);
router.delete("/:id", deleteUserById)

export default router;