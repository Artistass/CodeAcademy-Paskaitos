// npm i -g name  - atsiuncia npm package globaliai
// npm i D name   - atsiuncia kaip dev dependency
// npm i name   - atsiuncia kaip dependency

// Importuojame npm package
import express from "express";

// Suskuriame aplikacija
const app = express()

// Turime viena get adresa, konkretus /labas (konkretus argumentas)
// callback fn prijima 2 argumentus req(ka is frontendo atsiunte), o res (ka issius atgal i frontenda)
app.get("/labas", (req, res) => {
  res.json({
    labas : "Labas"
  })
})

// Padarome kad jis klausytusi ant PORT 3000
app.listen(3000, () => console.log("App listening on PORT 3000"))