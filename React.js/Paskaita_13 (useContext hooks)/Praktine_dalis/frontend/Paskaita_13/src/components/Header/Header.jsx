import { useContext } from "react";
import styles from "./Header.module.css";
import { SettingsContext } from "../Context/SettingsContextProvider"; // Adjust the import path as needed

export default function Header() {
  const { setShow } = useContext(SettingsContext);

  function handleChange(e) {
    setShow(e.target.value);
  }

  return (
    <div className={styles.header}>
      <img
        src="https://img.freepik.com/free-vector/leaf-maple-icon-logo-design_474888-2154.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716768000&semt=sph"
        alt=""
      />
      <select onChange={handleChange}>
        <option value="show">Show</option>
        <option value="no">Do not Show</option>
      </select>
    </div>
  );
}
