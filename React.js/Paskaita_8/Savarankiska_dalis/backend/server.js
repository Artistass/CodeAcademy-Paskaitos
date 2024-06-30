import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./Router/userListRouter.js"

dotenv.config();

const { MONGO_URI, PORT } = process.env

mongoose
.connect(MONGO_URI, { dbName: "Paskaita_8(UserList)" })
.then(() => console.log("Connected to Mongo DB"))
.catch(() => console.log("Failed connect to Mongo DB"));

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));

