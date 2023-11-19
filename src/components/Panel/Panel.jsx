import React from "react";
import styles from "./Panel.module.css";

const Panel = ({ images }) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div
          className={styles.panel}
          style={{ backgroundImage: `url(${images[0]})` }}
        />
        <div
          className={styles.panel}
          style={{ backgroundImage: `url(${images[1]})` }}
        />
        <div
          className={styles.panel}
          style={{ backgroundImage: `url(${images[2]})` }}
        />
      </div>

      <div className={styles.row}>
        <div
          className={styles.panel}
          style={{ backgroundImage: `url(${images[3]})` }}
        />
        <div
          className={styles.panel}
          style={{ backgroundImage: `url(${images[4]})` }}
        />
        <div
          className={styles.panel}
          style={{ backgroundImage: `url(${images[5]})` }}
        />
        <div
          className={styles.panel}
          style={{ backgroundImage: `url(${images[6]})` }}
        />
      </div>

      <div className={styles.row}>
        <div
          className={styles.panel}
          style={{ backgroundImage: `url(${images[7]})` }}
        />
        <div
          className={styles.panel}
          style={{ backgroundImage: `url(${images[8]})` }}
        />
        <div
          className={styles.panel}
          style={{ backgroundImage: `url(${images[9]})` }}
        />
      </div>
    </div>
  );
};

export default Panel;
