import express, { json } from "express";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors());

let cars = [{
  year: "2000",
  make: "BMW"
},
{
  year: "2010",
  make: "VW"
}]

app.get("/", (req, res) => {
  const query = req.query
  
  if (query.year) {
    const filteredCars = cars.filter((c) => c.year === +req.query.year)
    res.json(filteredCars)
  } else {
    res.json(cars)
  }
})

app.post("/", (req, res) => {
  const body = req.body;

  cars.push(body)
  res.json({
    succsess: true
  })
})

app.put("/", (req, res) => {
  const body = req.body;

  cars[0].make = body.make
  cars[0],year = body.year

  res.json(cars[0])
})

app.delete("/", (req, res) => {
  cars.splice(0, 1)
  cars = response

  res.json({
    succsess: true
  })
})

app.listen(3000, () => console.log("App litnening on PORT 3000"));