import People from "./models/people.js";

export async function getPeople (req, res) {
  try {
    const people = (await People.find({}));
    res.json(people);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addPeople (req, res) {
  const { first_name, last_name, age } = req.body;
  if (!first_name || !last_name || !age) {
    res.status(400).json({message: "All fields are requires"});
    return;
  }

  const newPeople = new People ({
    first_name,
    last_name,
    age
  })

  try {
    await newPeople.save();
    res.status(201).json(newPeople);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

export async function deletePeopleById (req, res) {
  const { id } = req.params;

  try {
    const response = await People.findByIdAndDelete(id);
    if (!response) {
      res.status(404).json({message: `Phone not found`});
      return;
    }
    res.json({message: "Success"});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}