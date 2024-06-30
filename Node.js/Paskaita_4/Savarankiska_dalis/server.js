import express from "express";
import router from "./routes.js";

const PORT = 5000;

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));