import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/routes.js"

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then(() => console.log(`Connected to Mongo_DB`)).catch(() => console.log(`Could not connect to Mongo_DB`));

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));