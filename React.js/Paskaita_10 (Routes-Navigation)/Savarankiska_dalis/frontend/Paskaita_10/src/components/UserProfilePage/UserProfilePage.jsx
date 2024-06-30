import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from './UserProfilePage.module.css'; // Import the CSS module

const API_LINK = "https://jsonplaceholder.typicode.com/posts";

export default function UserProfilePage() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      axios
        .get(`${API_LINK}/${userId}`)
        .then((response) => setUser(response.data))
        .catch((err) => alert(err.message));
    }
  }, []);

  function handleBackButton() {
    navigate(-1);
  }

  return (
    <div className={styles.container}>
      {user && user.id ? (
        <div className={styles.userDetails}>
          <p><strong>User ID:</strong> {user.userId}</p>
          <p><strong>Post ID:</strong> {user.id}</p>
          <p><strong>Title:</strong> {user.title}</p>
          <p><strong>Body:</strong> {user.body}</p>
        </div>
      ) : (
        <h1 className={styles.loading}>Loading...</h1>
      )}
      <div className={styles.buttonContainer}>
        <button onClick={handleBackButton} className={styles.backButton}>Go back</button>
      </div>
    </div>
  )
}
