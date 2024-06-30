import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []); // Fetch books on component mount

  const fetchBooks = () => {
    axios
      .get("http://127.0.0.1:5000/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((err) => alert(err));
  };

  const deleteBook = (id) => {
    axios
      .delete(`http://127.0.0.1:5000/books/${id}`)
      .then((response) => {
        fetchBooks(); // Refresh the list of books after deletion
      })
      .catch((err) => alert(err));
  };

  return (
    <div className={styles.container}>
      {books.map((book, index) => (
        <div key={index} className={styles.bookCard}>
            <img src={book.image} alt={book.title} className={styles.bookImage} />
          <h2 className={styles.bookTitle}>{book.title}</h2>
          <p className={styles.bookAuthor}>
            <strong>Author:</strong> {book.author}
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              onClick={() => navigate(`/book/${book._id}`)}
            >
              More Info
            </button>
            <button className={styles.deleteButton} onClick={() => deleteBook(book._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
