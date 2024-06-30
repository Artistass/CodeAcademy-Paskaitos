import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  publishedYear: Number,
  summary: String,
  image: String
})

export default mongoose.model("Books", booksSchema);