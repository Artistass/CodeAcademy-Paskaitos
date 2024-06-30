import Pets from "../models/Pets.js";

export async function getPets (req, res) {
  const pets = await Pets.find({});

  res.json(pets);
}

export async function petsByType (req, res) {
  const { type } = req.params;

  try {
    const pet = await Pets.find({type});
    res.json(pet);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// export async function petsByAge (req, res) {
//  const { age } = req.query;

//  try {
//   const pets = await Pets.find().sort({ age: 1 })
//   res.json(pets);
//  } catch (error) {
//   res.status(500).json({error: error.message});
//  }
// }

export async function petsByAge(req, res) {
  try {
    const pets = await Pets.find({}, { __v: 0 }).sort({ age: 1 }); 
    res.json( pets );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}




export async function deletePetById (req, res) {
  const { id } = req.params;

  try {
    const response = await Pets.findByIdAndDelete(id);
    if (!response) {
      res.status(404).json({message: `Pet not found`});
      return;
    }
    res.json({message: "Success"});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}


export async function addNewPet (req, res) {
  const { name, type, age } = req.body;

  if (!name || !type || !age ) {
    res.status(400).json({message: "Info missing in body"});
    return;
  }

  const newPet = new Pets ({
   name,
   type,
   age
  })

  try {
    await newPet.save();
    res.status(201).json(newPet);
  } 
  catch (error) {
    res.status(500).json({error: error.message});
  }
}