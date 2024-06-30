import express from "express";
import { addPhone, deleteById, getPhones, getPhonesById, updatePhoneById } from "./controllers.js";

const router = express.Router();

router.get("/phones", getPhones);

router.get("/phones/:id", getPhonesById);

router.post("/phones", addPhone);

router.put("/phones/:id", updatePhoneById);

router.delete("/phones/:id", deleteById);

router.all("*", (req, res) => {
  res.status(404).json({ error: "Route not found"})
}); // Tikrina nuo virsaus. Reikia deti pati paskutini

export default router;