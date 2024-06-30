import express from "express";
import membershipRouter from "./membershipRouter.js";
import userRouter from "./userRouter.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/memberships", membershipRouter);

export default router;