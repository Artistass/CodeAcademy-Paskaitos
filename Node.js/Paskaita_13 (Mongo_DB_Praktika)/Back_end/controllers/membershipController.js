import Membership from "../models/Membership.js";

export async function getMemberships (req, res) {

  const memberships = await Membership.find({}, { __v: 0 })
  res.json(memberships);

};

export async function addNewMembership (req, res) {
  const { name, price, description } = req.body;

  const newMembership = new Membership({
    name,
    price,
    description
  })
  await newMembership.save();
  res.json(newMembership);
};

export async function deleteMembershipById(req, res) {
 
  const { id } = req.params;

  try {
    const response = await Membership.findByIdAndDelete(id);
    if (!response) {
      res.status(404).json({
        message: `Membership not found`
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