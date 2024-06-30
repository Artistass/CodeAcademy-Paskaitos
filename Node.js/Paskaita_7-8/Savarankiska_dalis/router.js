import express from "express"
import { getPeople, addPeople, deletePeopleById } from "./controllers.js"

const router = express.Router();

router.get("/people", getPeople);
router.post("/people", addPeople);
router.delete("/people/:id", deletePeopleById)

export default router;