import User from "../models/User.js";

export async function getUsersByOrder(req, res) {
  try {
    const { order } = req.query;
    const sortOrder = order === 'desc' ? -1 : 1;

    const users = await User
    .find()
    .sort({ name: sortOrder })
    .populate('membership_id', 'name');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addNewUser(req, res) {
  try {
    const { name, surname, email, membership_id } = req.body;

    const newUser = new User({
      name,
      surname,
      email,
      membership_id
    });

    await newUser.save();
    res.status(201).json(newUser); // Return the created user
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export async function deleteUserById(req, res) {
 
  const { id } = req.params;

  try {
    const response = await User.findByIdAndDelete(id);
    if (!response) {
      res.status(404).json({
        message: `User not found`
      });
      return;
    }
    res.json({
      message: "Success"
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};
