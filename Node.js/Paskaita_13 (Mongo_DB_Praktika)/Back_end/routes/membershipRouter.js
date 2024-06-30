import express from "express";
import { addNewMembership, deleteMembershipById, getMemberships } from "../controllers/membershipController.js";

const router = express.Router();

router.get("/", getMemberships);
router.post("/", addNewMembership);
router.delete("/:id", deleteMembershipById);

export default router;