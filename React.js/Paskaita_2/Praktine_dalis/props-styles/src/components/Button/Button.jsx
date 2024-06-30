import styles from "./Button.module.css"

export default function Button({onClick, text}) {

  console.log(styles);

  // console.log(prop);

  // const { onClick, text } = prop;
 
  return (
    <button className={styles.border} onClick={onClick} >{text}</button>
  )
}
