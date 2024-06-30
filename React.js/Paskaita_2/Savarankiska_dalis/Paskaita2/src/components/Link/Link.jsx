import classnames from "classnames";
import styles from "./Link.module.css";

export default function Link({text}) {
  return (
    <div className={classnames("backgroundColor", styles.linkContainer )}>
      <a className={ styles.link}>{text}</a>
    </div>
  )
}
