import Books from "./Books.js";


export async function getBooks (req, res) {

  try {
    const books = await Books.find();
    res.json(books);

  } catch (error) {
    res.status(500).json({error: error.message})
  }
};



export async function getBookById (req, res) {
  const { id } = req.params;

  try {
    const books = await Books.findById(id);
    res.json(books);

  } catch (error) {
    res.status(500).json({error: error.message})
  }
};



export async function addNewBook (req, res) {
  
  const { title, author, genre, publishedYear, summary, image } = req.body;

if (!title || !author || !genre || !publishedYear || !summary || !image) {

  res.status(400).json({error: "All fields required"})
    return;
}

try {

  const newBook = new Books({
    title,
    author,
    genre,
    publishedYear,
    summary,
    image
  });

  await newBook.save();
  res.json(newBook);
  
} catch (error) {
  res.status(500).json({error: error.message})
}
};

export async function deleteBookById(req, res) {
  const { id } = req.params;

  try {
    const deletedBook = await Books.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json(deletedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}