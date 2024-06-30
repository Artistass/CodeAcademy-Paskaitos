let names =[];

export function getUsers (req, res) {
  res.json(names)
}

export function addNewUser (req, res) {
  const { name } = req.body;

  users.push(name);

  res.json({
    success: true,
  });
}