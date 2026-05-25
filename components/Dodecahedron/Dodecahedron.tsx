"use client";

import styles from "./Dodecahedron.module.css";

export default function Dodecahedron() {
  return (
    <div className={styles.container}>
      <div className={styles.view}>
        <div className={styles.viewInner}>
          <div className={styles.solid}>
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i + 1}
                className={`${styles.face} ${styles.facePentagon} ${styles[`face${i + 1}`]}`}
                data-num={i + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

