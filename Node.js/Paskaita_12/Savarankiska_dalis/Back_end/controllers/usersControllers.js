import User from "../models/User.js"

export async function getUsers (req, res) {
 const users = await User.find({}, { __v:0 })
 res.json(users);
}

export async function addNewUser (req, res) {
  const { name, email } = req.body;

  const newUser = new User({
    name,
    email
  })
  await newUser.save();
  res.json(newUser);
}
