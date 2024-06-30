import styles from "./HeaderLogo.module.css/"

export default function HeaderLogo() {
  return (
    <div>
      <img  className={styles.headerImg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" alt="" />
    </div>
  )
}
