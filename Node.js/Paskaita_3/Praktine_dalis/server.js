import express from "express";
import router from "./Routes/index.js";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));