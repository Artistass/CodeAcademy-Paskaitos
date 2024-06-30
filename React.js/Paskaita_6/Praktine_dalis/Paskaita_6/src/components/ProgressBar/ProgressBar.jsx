import React, { useState } from 'react';
import styles from './ProgressBar.module.css';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  function plus() {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  }

  function minus() {
    if (progress > 0) {
      setProgress(progress - 10);
    }
  }

  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar}>
        <div
          className={styles.progressBarFill}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={minus} className={styles.button}> - </button>
        <button onClick={plus} className={styles.button}> + </button>
      </div>
    </div>
  );
}
