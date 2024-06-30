import styles from "./MainSectionText.module.css";

export default function MainSectionText({title, text}) {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <p  className={styles.text} >{text}</p>
    </div>
  )
}
