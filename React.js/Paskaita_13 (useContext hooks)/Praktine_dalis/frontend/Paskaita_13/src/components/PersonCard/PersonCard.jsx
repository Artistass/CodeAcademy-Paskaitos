import styles from "./PersonCard.module.css";
import { useContext } from "react";
import { SettingsContext } from "../Context/SettingsContextProvider"; // Correct import path

export default function PersonCard({ person }) {
  const { show } = useContext(SettingsContext);

  return (
    <div className={styles.card}>
      <p>{person.name}</p>
      <p>{person.username}</p>
      <p>{person.email}</p>
      {show === "show" && (
        <>
          <p>{person.phone}</p>
          <p>{person.website}</p>
          <p>{person.address.city}</p>
        </>
      )}
    </div>
  );
}
