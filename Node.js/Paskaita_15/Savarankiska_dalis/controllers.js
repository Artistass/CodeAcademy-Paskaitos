import db from "./db.js";

export async function serverIsOnline (req, res) {

}

export async function getShirts(req, res) {
  const { size } = req.params;

  try {
    let query;
    let values = [];

    if (size) {
      query = `
        SELECT * FROM shirts
        WHERE size = $1
        ORDER BY price ASC
        LIMIT 10;
      `;
      values = [size];
    } else {
      query = `
        SELECT * FROM shirts
        ORDER BY price ASC
        LIMIT 10;
      `;
    }

    const { rows } = await db.query(query, values);
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error fetching shirts:', error);
    res.status(500).json({ success: false, message: 'An error occurred while fetching shirts' });
  }
}


export async function addNewShirt(req, res) {
  const { brand, model, size, price } = req.body;

  if (!brand || !model || !size || !price) {
    return res.status(400).json({ success: false, message: 'Missing required information' });
  }

  try {
    const { rows } = await db.query(
      `INSERT INTO shirts (brand, model, size, price) VALUES ($1, $2, $3, $4) RETURNING *;`,
      [brand, model, size, price]
    );
    res.json({ success: true, data: rows[0] });
  } catch (error) {
    console.error('Error adding new item:', error);
    res.status(500).json({ success: false, message: 'An error occurred while adding the item' });
  }
}



export async function routeNotFound (req, res) {
  res.status(404).json({ error: "Route not found"})
}