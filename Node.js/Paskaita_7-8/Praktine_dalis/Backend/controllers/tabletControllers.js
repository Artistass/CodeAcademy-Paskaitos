import Tablet from "../models/Tablet.js";

export async function addNewTablet (req, res) {
  const { price, brand, year, model, screenSize } = req.body;

  if (!price || !brand || !year || !model || !screenSize) {
    res.status(400).json({message: "Info missing in body"});
    return;
  }

  const newTablet = new Tablet ({
    price,
    brand,
    year,
    model,
    screenSize
  })

  try {
    await newTablet.save();
    res.status(201).json(newTablet);
  } 
  catch (error) {
    res.status(500).json({error: error.message});
  }
}

export async function getTablets (req, res) {
  const { page = 1, amount = 5, minPrice, maxPrice } = req.query;
  try {
    const tablets = await Tablet.find({ price: {
      $gte : minPrice, 
      $lte: maxPrice
    } }, { __v: 0 })
    .sort({ brand: 1 })
    .limit(amount)
    .skip(amount * (page - 1));

    res.json(tablets);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}