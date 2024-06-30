import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router.js"

dotenv.config();

const { MONGO_URI, PORT } = process.env;

mongoose
.connect(MONGO_URI, { dbName: "Paskaita_11" })
.then(() => console.log("Connected to DB"))
.catch(() => console.log("Failed to connect"))

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));