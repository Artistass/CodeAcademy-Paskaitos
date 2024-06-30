import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router.js";

dotenv.config();

const { PORT, MONGO_URI } = process.env;

mongoose
.connect(MONGO_URI, { dbName: "Paskaita_12" })
.then(() => console.log("connected to Mongo_DB"))
.catch(() => console.log("Failed to connect"))

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`))