import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const cars = ["BMW", "VW", "Porsche", "Opel"]

app.get("/", (req, res) => {
  const response = res.json(cars)
})

app.listen(5000, () => console.log("App listening on PORT 5000"))