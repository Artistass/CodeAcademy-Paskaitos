import express from "express";
import usersRouter from "./usersRouter.js";
import commentsRouter from "./commentsRouter.js";

const router = express.Router();

router.use ("/users", usersRouter);
router.use ("/comments", commentsRouter);

export default router;