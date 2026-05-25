"use client";

import styles from "./SoccerBall.module.css";

export default function SoccerBall() {
  // 12個の正五角形
  const pentagons = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    type: "pentagon",
  }));

  // 20個の正六角形
  const hexagons = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    type: "hexagon",
  }));

  return (
    <div className={styles.container}>
      <div className={styles.view}>
        <div className={styles.viewInner}>
          <div className={styles.solid}>
            {/* 正五角形の面 */}
            {pentagons.map((pentagon) => (
              <div
                key={`pentagon-${pentagon.id}`}
                className={`${styles.face} ${styles.facePentagon} ${styles[`pentagon${pentagon.id}`]}`}
                data-num={pentagon.id}
                data-type="pentagon"
              />
            ))}
            {/* 正六角形の面 */}
            {hexagons.map((hexagon) => (
              <div
                key={`hexagon-${hexagon.id}`}
                className={`${styles.face} ${styles.faceHexagon} ${styles[`hexagon${hexagon.id}`]}`}
                data-num={hexagon.id}
                data-type="hexagon"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

