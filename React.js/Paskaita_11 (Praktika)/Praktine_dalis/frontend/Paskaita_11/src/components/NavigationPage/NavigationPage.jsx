import { Link, useLocation } from "react-router-dom";
import styles from "./NavigationPage.module.css";

export default function NavigationPage() {
  const location = useLocation();


  

  // Determine the title and links based on the current location
  let pageTitle, links;

  if (location.pathname === "/add-book") {
    pageTitle = "Add New Book";
    links = (
      <>
        <Link to="/home" className={styles.link}>Home</Link>
      </>
    );
  } else if (location.pathname === "/home") {
    pageTitle = "My Library";
    links = (
      <>
        <Link to="/add-book" className={styles.link}>Add New Book</Link>
      </>
    );
  } else if (location.pathname.startsWith("/book/")) {
    pageTitle = "Info about Book";
    links = (
      <>
      <div>
        <Link to="/home" className={styles.link}>Home</Link>
        <Link to="/add-book" className={styles.link}>Add New Book</Link>
      </div>
      </>
    );
  }
  else {
    pageTitle = "Error";
    links = (
      <>
      <div>
        <Link to="/home" className={styles.link}>Home</Link>
        <Link to="/add-book" className={styles.link}>Add New Book</Link>
      </div>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <h1 style={{ color: 'white' }}>{pageTitle}</h1>
      {links}
    </div>
  );
}
