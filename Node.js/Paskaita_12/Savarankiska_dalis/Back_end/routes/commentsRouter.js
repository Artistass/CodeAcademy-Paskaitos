import express from "express";
import { deleteCommentById, getAllCommentsAndNames } from "../controllers/commentsControllers.js";

const router = express.Router();

router.get("/", getAllCommentsAndNames);
router.delete("/:id", deleteCommentById);

export default router;