import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router.js"


dotenv.config();

const { MONGO_URI, PORT } = process.env;

mongoose
.connect(MONGO_URI, {dbName: "todo"})
.then(() => console.log("Connected to DB"))
.catch(() => console.log("Failed to connect"))

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));