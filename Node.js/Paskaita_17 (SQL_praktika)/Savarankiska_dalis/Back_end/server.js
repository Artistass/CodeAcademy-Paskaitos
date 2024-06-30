import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router.js"

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));
