import express from "express";
import { addNewBook, deleteBookById, getBookById, getBooks } from "./controllers.js";

const router = express.Router();

router.get("/books", getBooks);
router.get("/books/:id", getBookById);

router.post("/books", addNewBook);

router.delete("/books/:id", deleteBookById);

export default router;
