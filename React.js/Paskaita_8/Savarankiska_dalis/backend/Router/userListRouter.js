import express from "express";
import { addUser, getUser } from "../controllers/userListController.js";

const router = express.Router();

router.get("/userList", getUser);
router.post("/userList", addUser);

export default router;