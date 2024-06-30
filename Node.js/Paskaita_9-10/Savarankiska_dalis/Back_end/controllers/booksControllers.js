import Books from "../models/Books.js";

export async function getBooks (req, res) {
  const books = await Books.find({});

  res.json(books);
};

export async function addNewBook (req, res) {
  const { title, author, genre, price, quantity } = req.body;

  if (!title || !author || !genre || !price || !quantity) {
    res.status(400).json({
      message: "Info missing in body"
    });
    return;
  }

  const newBook = new Books ({
    title, 
    author, 
    genre, 
    price, 
    quantity
  });

 try {
  await newBook.save();
 } catch (error) {
  res.status(500).json({
    error: error.message
  });
 }
}

export async function deleteBookById (req, res) {
  const { id } = req.params;

  try {
    const response = await Books.findByIdAndDelete(id);
    if (!response) {
      res.status(404).json({
        message: `Book not found`
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
}