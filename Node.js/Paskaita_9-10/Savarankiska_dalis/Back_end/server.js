import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/booksRouter.js";

dotenv.config();

const { PORT, MONGO_URI } = process.env;

mongoose.connect(MONGO_URI, { dbName: "Paskaita_10" })
.then(() =>
  console.log(`Connected to Mongo_DB`))
.catch (() => console.log(`Failed to connect`));

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));


//  Building a Bookstore Inventory Management System
 
// Objective:

// The objective of this task is to create a web application for managing a bookstore's inventory. This application will allow users to add, view and delete books from the inventory.
 
// Requirements:
 
// Backend Development:
 
// Use Node.js and Express.js to create the server-side application.

// Utilize MongoDB as the database to store information about books.

// Frontend Development:
 
// Develop a user interface using HTML, CSS, and JavaScript (with no frameworks).

// create a page to:

// View a list of all books in the inventory.

// Add a new book to the inventory, including fields such as title, author, genre, price, and quantity.

// Delete a book from the inventory.

// Ensure the interface is intuitive and user-friendly.

// Functionality:
 
// Users should be able to see a list of all books with their details, including title, author, genre, price, and quantity available.

// Users should be able to add a new book to the inventory by providing the necessary details.

// Users should be able to delete a book from the inventory.

// Implement validation to ensure that required fields are filled