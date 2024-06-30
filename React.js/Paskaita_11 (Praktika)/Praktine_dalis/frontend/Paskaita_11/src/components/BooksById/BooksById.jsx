import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./BooksById.module.css";

const API_LINK = "http://127.0.0.1:5000/books";

export default function BookById() {
  const [book, setBook] = useState({});
  const { id } = useParams(); // Correctly destructure the 'id' parameter
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`${API_LINK}/${id}`)
        .then((response) => setBook(response.data))
        .catch((err) => alert(err.message));
    }
  }, [id]); // Add 'id' as a dependency to the useEffect hook

  function handleBackButton() {
    navigate(-1);
  }

  return (
    <div className={styles.container}>
      {book._id ? (  // Check for _id instead of id
        <>
          <h2 className={styles.bookTitle}>{book.title}</h2> 
          <img src={book.image} alt={book.title} className={styles.bookImage} />
          <p className={styles.bookDetail}><strong>Author:</strong> {book.author}</p>
          <p className={styles.bookDetail}><strong>Genre:</strong> {book.genre}</p>
          <p className={styles.bookDetail}><strong>Published Year:</strong> {book.publishedYear}</p>
          <p className={styles.bookDetail}><strong>Summary:</strong> {book.summary}</p>
        </>
      ) : (
        <h1>Loading....</h1>
      )}
      <button className={styles.button} onClick={handleBackButton}>Go back</button>
    </div>
  );
}
