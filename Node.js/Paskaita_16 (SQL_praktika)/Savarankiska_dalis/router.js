import express from "express";
import { addNewItem, deleteItemById, getItems, routeNotFound } from "./controllers.js";

const router = express.Router();

router.get("/items", getItems);

router.post("/items", addNewItem);

router.delete("/items/:id", deleteItemById);

router.all("*", routeNotFound);

export default router;