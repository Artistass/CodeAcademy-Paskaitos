import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from './UsersPage.module.css';

const API_LINK = "https://jsonplaceholder.typicode.com/posts";

export default function UsersPage() {
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_LINK)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      });
  }, []);

  function backButton() {
    navigate(-1);
  }

  return (
    <div className={styles.container}>
      <div className={styles.backButtonContainer}>
        <button onClick={backButton} className={styles.backButton}>Back</button>
      </div>
    
      {loading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        <div className={styles.userGrid}>
          {users.map((user) => (
            <div key={user.id} className={styles.userCard}>
              <p className={styles.userTitle}><strong>Title:</strong> {user.title}</p>
              <p className={styles.userBody}><strong>Body:</strong> {user.body}</p>
              <hr />
              <Link to={`/users/${user.id}`} className={styles.moreInfoLink}>More Info</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
