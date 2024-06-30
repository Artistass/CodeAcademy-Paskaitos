import express from "express";
import userRouter from "./userRoutes.js"


const router = express.Router();
router.use(userRouter);

export default router;
