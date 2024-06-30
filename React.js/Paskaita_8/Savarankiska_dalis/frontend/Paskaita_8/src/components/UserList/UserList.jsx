import styles from "./UserList.module.css";

export default function UserList({ user }) {
  return (
    <div className={styles.card}>
      <h1 className={styles.name}>{user.name}</h1>
      <h3 className={styles.username}>{user.userName}</h3>
      <h4 className={styles.email}>{user.email}</h4>
    </div>
  );
}
