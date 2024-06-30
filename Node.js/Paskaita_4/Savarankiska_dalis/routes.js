import express from "express";
import { getAllFemales, getAllemails, getUserById, getUsers, sameCarModel } from "./controller.js";

const router = express.Router();

// 1. Sukurkite bendrinį GET route, kuris paduos visus duomenis.

router.get("/user", getUsers);

// 2. Sukurkite dinaminį GET route, kur URL turės automobilio markę ir pagal ją prafiltruos, ir grąžins tik tuos žmones, kurie turi šį automobilį.

router.get("/user/:car", sameCarModel)

// 3. Sukurkite dinaminį GET route, kuris priims vartotojo id ir pagal jį grąžins atitinkamą vartotojo objektą. Hint: url parametrai visada stringai, o čia id - skaičius, tad reikės konvertuoti.

router.get("/user/:id", getUserById);

// 4. Sukurkite GET route, kuris grąžins visus el. paštus (grąžinamas formatas: ["anb@abc.com", "abc@abc.com", "abc@acb.com]).

router.get("/user/email", getAllemails);

// 5. Sukurkite GET route, į kurį pasikreipus, grąžins visų moterų (gender: Female) vardą ir pavardę (formatas: ["Rita Kazlauskaite", "Monika Simaskaite"]).

router.get("/user/female", getAllFemales);

export default router;