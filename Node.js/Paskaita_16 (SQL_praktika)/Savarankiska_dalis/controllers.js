import db from "./db.js";

export async function getItems (req, res) {
  const { limit } = req.query;

  if (!limit || limit.trim() === ``) {
    return res.status(400).json({ success: false, message: 'Missing required information: choose limit' })
  }

  let query = "select * from items ";

  if (limit !== undefined) {
    query += `limit ${limit} `
  }

  try 
  {
    const { rows } = await db.query(query)
res.json({ success: true, data: rows });
  }
  catch(error)
  {
    console.error('Error retrieving items:', error);
    res.status(500).json({ success: false, message: 'An error occurred while retrieving the items' });
  }
}

export async function addNewItem (req, res) {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ success: false, message: 'Missing required information: title' })
  }

  try {
    const { rows } = await db.query(`insert into items (title) values ('${title}') returning *`);
  
    res.json({ success: true, data: rows[0] });
    
  } catch (error) {
    console.error('Error adding new item:', error);
    res.status(500).json({ success: false, message: 'An error occurred while adding the item' });
  }

}

export async function deleteItemById (req, res) {
  const { id } = req.params;

  try{
    const response = await db.query(`delete from items where id = ${id} returning *`);

    if (response.rowCount === 0) {
      return res.status(404).json({ success: false, message: 'No item found with that ID' });
    }
    console.log(response);
    res.json({success: true});
  }
  catch (error)
  {
    console.error('Error deleting item:', error);
    res.status(500).json({ success: false, message: 'An error occurred while deleting the item' });
  }

}

export async function routeNotFound (req, res) {
  res.status(404).json({ error: "Route not found"})
}