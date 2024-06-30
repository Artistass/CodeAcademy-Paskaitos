import express from "express";
import { addNewBook, deleteBookById, getBooks } from "../controllers/booksControllers.js";

const router = express.Router();

router.get("/books", getBooks);

router.post("/books", addNewBook);

router.delete("/books/:id", deleteBookById);

export default router;