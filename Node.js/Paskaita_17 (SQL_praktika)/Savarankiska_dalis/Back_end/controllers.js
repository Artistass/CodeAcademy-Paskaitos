import db from "./db.js";

export async function getCars (req, res) {

  let query = "select * from cars ";

  try 
  {
    const { rows } = await db.query(query)
res.json({ success: true, data: rows });
  }
  catch(error)
  {
    console.error('Error retrieving cars:', error);
    res.status(500).json({ success: false, message: 'An error occurred while retrieving the cars' });
  }
}

export async function getCarsById (req, res) {
  const { id } = req.params;

  try {
    // Use parameterized queries to avoid SQL injection
    const { rows, rowCount } = await db.query('SELECT * FROM cars WHERE id = $1', [id]);

    // Check if no rows were returned
    if (rowCount === 0) {
      return res.status(404).json({ success: false, message: 'No car found with that ID' });
    }

    // Log the rows for debugging
    console.log(rows);

    // Return the rows as response
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error getting car:', error);
    res.status(500).json({ success: false, message: 'An error occurred while getting the car' });
  }
}

export async function addNewCar (req, res) {
  const { title, image, price, numberPlates } = req.body;

  if (!title) {
    return res.status(400).json({ success: false, message: `Missing required information: title` })
  }
  else if (!image) {
    return res.status(400).json({ success: false, message: `Missing required information: image` })
  }
  else if (!price) {
    return res.status(400).json({ success: false, message: `Missing required information: price` })
  }
  else if (!numberPlates) {
    return res.status(400).json({ success: false, message: `Missing required information: number plates` })
  }

  try {
    const { rows } = await db.query(`insert into cars (title, image, price, numberPlates)
    values ('${title}', '${image}', ${price}, '${numberPlates}') returning *`);

    res.json({ success: true, data: rows[0] });
  } catch (error) {
    console.error('Error adding new car:', error);
    res.status(500).json({ success: false, message: 'An error occurred while adding the car' });
  }
}

export async function deleteCarById (req, res) {
  const { id } = req.params;

  try{
    const response = await db.query(`delete from cars where id = ${id} returning *`);

    if (response.rowCount === 0) {
      return res.status(404).json({ success: false, message: 'No item found with that ID' });
    }
    console.log(response);
    res.json({success: true});
  }
  catch (error)
  {
    console.error('Error deleting car:', error);
    res.status(500).json({ success: false, message: 'An error occurred while deleting the car' });
  }

}

export async function routeNotFound (req, res) {
  res.status(404).json({ error: "Route not found"})
}