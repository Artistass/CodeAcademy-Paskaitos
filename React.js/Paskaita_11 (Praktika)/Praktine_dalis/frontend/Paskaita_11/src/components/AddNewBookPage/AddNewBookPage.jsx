import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./AddNewBookPage.module.css";

const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleBackButton() {

    navigate(-1)
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:5000/books", {
        title,
        author,
        genre,
        publishedYear: parseInt(publishedYear), // Ensure publishedYear is sent as a number
        summary,
        image
      });

      console.log("New book added:", response.data);
      navigate("/home"); // Redirect to home page after successful addition
    } catch (error) {
      setError("Error adding book: " + error.message);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="title">Title:</label>
          <input
          autoComplete="off"
          id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.inputField}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="author">Author:</label>
          <input
          autoComplete="off"
          id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className={styles.inputField}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="genre">Genre:</label>
          <input
          autoComplete="off"
          id="genre"
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className={styles.inputField}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="year">Published Year:</label>
          <input
          autoComplete="off"
          id="year"
            type="number"
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
            className={styles.inputField}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="image">Image URL:</label>
          <input
          autoComplete="off"
          id="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className={styles.inputField}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="summary">Summary:</label>
          <textarea
          autoComplete="off"
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className={styles.textareaField}
            required
          />
        </div>

        <div className={styles.buttonDiv}>
        <button type="submit" className={styles.submitButton}>
          Add Book
        </button>
        <button 
        onClick={handleBackButton}
        className={styles.submitButton}
        >Back</button>

        </div>
      </form>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default AddBookForm;
