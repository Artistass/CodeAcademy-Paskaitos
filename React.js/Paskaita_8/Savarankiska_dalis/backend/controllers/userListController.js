import UserList from "../Models/UserList.js";


export async function getUser (req, res) {
  try {
    const users = await UserList.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}


export async function addUser(req, res) {
  const { name, userName, email } = req.body;

  if (!name || !userName || !email) {
    res.status(400).json({ error: "All fields are required!"});
    return;
  }

  try {
    const newUser = new UserList({
      name,
      userName,
      email
    }) 

    await newUser.save();
    res.json(newUser);

  } catch (error) {
    res.status(500).json({error: error.message})
  }
}