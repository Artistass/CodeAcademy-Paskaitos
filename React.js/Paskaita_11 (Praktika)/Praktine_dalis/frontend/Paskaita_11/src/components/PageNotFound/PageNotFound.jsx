import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PageNotFound.module.css";

export default function NotFoundPage() {

  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/home")
    }, 5000)
    
    return () =>{
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>404 PAGE NOT FOUND</h1>
    </div>
  )
}
